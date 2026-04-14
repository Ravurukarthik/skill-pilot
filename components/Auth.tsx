
import React, { useState, useEffect, useRef } from 'react';
import { User, UserRole } from '../types';
import { Mail, Lock, User as UserIcon, ArrowRight, Compass, Loader2, CheckCircle2, X, ShieldCheck, AlertTriangle, ExternalLink, RefreshCw } from 'lucide-react';
import { auth, db } from '../services/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signInWithRedirect,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthProps {
  onLogin: (user: User) => void;
}

const getDeviceId = () => {
  let id = localStorage.getItem('skillpilot_device_id');
  if (!id) {
    id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('skillpilot_device_id', id);
  }
  return id;
};

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOtpMode, setIsOtpMode] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [showSync, setShowSync] = useState(false);
  const [syncLoading, setSyncLoading] = useState(false);
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    setIsIframe(window.self !== window.top);
  }, []);

  const syncLogin = async () => {
    setSyncLoading(true);
    try {
      const firebaseUser = auth.currentUser;
      if (firebaseUser) {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        
        // Claim this device as active during sync
        const deviceId = getDeviceId();
        await setDoc(userDocRef, { activeDeviceId: deviceId }, { merge: true });

        const docSnap = await getDoc(userDocRef);
        
        if (docSnap.exists()) {
          const profile = docSnap.data();
          onLogin({
            id: firebaseUser.uid,
            email: firebaseUser.email || '',
            name: profile.name || firebaseUser.displayName || 'User',
            role: profile.role || (firebaseUser.email === 'ravurukarthik740@gmail.com' ? UserRole.ADMIN : UserRole.STUDENT),
            isPremium: (profile.isPremium || firebaseUser.email === 'ravurukarthik740@gmail.com') ? true : false,
            isPendingVerification: profile.isPendingVerification || false,
            paymentProofUrl: profile.paymentProofUrl,
            paymentDate: profile.paymentDate,
            password: profile.password,
          });
        }
      }
    } catch (err) {
      console.error('Sync error:', err);
    } finally {
      setSyncLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address first.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccessMessage('');
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Password reset email sent! Please check your inbox (and spam folder).');
      setIsForgotPassword(false);
    } catch (err: any) {
      console.error('Password Reset Error:', err);
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError(err.message || 'Failed to send reset email. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      // Force account selection to help with some iframe issues
      provider.setCustomParameters({ prompt: 'select_account' });
      
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        // Generate or get device ID for single device login
        const deviceId = getDeviceId();

        // Check if profile exists, if not create it
        const userDocRef = doc(db, 'users', result.user.uid);
        const docSnap = await getDoc(userDocRef);
        
        let userData: User;

        if (docSnap.exists()) {
          const profile = docSnap.data();
          const isPaceDomain = result.user.email?.endsWith('@pace.ac.in');
          
          // Update active device ID on login and ensure premium for pace.ac.in
          const updateData: any = { activeDeviceId: deviceId };
          if (isPaceDomain && !profile.isPremium) {
            updateData.isPremium = true;
          }
          
          await setDoc(userDocRef, updateData, { merge: true });

          userData = {
            id: result.user.uid,
            email: result.user.email || '',
            name: profile.name || result.user.displayName || 'User',
            role: profile.role || (result.user.email === 'ravurukarthik740@gmail.com' ? UserRole.ADMIN : UserRole.STUDENT),
            isPremium: (isPaceDomain || profile.isPremium || result.user.email === 'ravurukarthik740@gmail.com') ? true : false,
            isPendingVerification: profile.isPendingVerification || false,
            paymentProofUrl: profile.paymentProofUrl,
            paymentDate: profile.paymentDate,
            password: profile.password,
          };
        } else {
          const isAdmin = result.user.email === 'ravurukarthik740@gmail.com';
          const isPaceDomain = result.user.email?.endsWith('@pace.ac.in');
          
          const newProfile = {
            name: result.user.displayName || 'User',
            email: result.user.email,
            role: isAdmin ? UserRole.ADMIN : UserRole.STUDENT,
            isPremium: (isPaceDomain || isAdmin) ? true : false, // Free premium for pace.ac.in and Admin
            isPendingVerification: false,
            createdAt: new Date().toISOString(),
            provider: 'google',
            activeDeviceId: deviceId, // Store device ID
            providerData: result.user.providerData.map(p => ({
              providerId: p.providerId,
              uid: p.uid,
              displayName: p.displayName || null,
              email: p.email || null,
              phoneNumber: p.phoneNumber || null,
              photoURL: p.photoURL || null
            })),
            phoneNumber: result.user.phoneNumber || null
          };
          
          await setDoc(userDocRef, newProfile);
          
          userData = {
            id: result.user.uid,
            email: result.user.email || '',
            name: newProfile.name,
            role: newProfile.role as UserRole,
            isPremium: newProfile.isPremium,
          };
        }

        // Explicitly call onLogin to ensure the UI updates immediately
        onLogin(userData);
      }
    } catch (err: any) {
      console.error('Google Login Error:', err);
      if (err.code === 'auth/popup-blocked') {
        setError('The login popup was blocked by your browser. This often happens inside an iframe. Please click "Open in New Tab" below or allow popups in your browser settings.');
      } else if (err.code === 'auth/unauthorized-domain') {
        setError(`This domain (${window.location.hostname}) is not authorized in the Firebase Console. Please add it to the "Authorized Domains" list in your Firebase Authentication settings.`);
      } else if (err.code === 'auth/cancelled-popup-request' || err.code === 'auth/popup-closed-by-user') {
        setError('The login window was closed. This often happens in preview windows or due to popup blockers. Please try "Open in New Tab" if this persists.');
      } else if (err.code === 'auth/operation-not-allowed') {
        setError('Google login is not enabled in your Firebase Console. Please enable it in the Authentication > Sign-in method tab.');
      } else if (err.code === 'auth/internal-error' || err.message?.includes('network')) {
        setError('A network error occurred. If you are using the app inside a preview window, try opening it in a new tab.');
      } else {
        setError(err.message || 'Failed to initialize Google login. Check your internet connection or browser settings.');
      }
      setShowSync(true);
    } finally {
      setLoading(false);
    }
  };

  const openInNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  const handleGoogleRedirect = async () => {
    setLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithRedirect(auth, provider);
    } catch (err: any) {
      console.error('Redirect error:', err);
      setError('Redirect login failed. This might be due to unauthorized domain or iframe restrictions.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('OTP login is not supported with the current Firebase configuration. Please use email/password or Google login.');
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('OTP login is not supported.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password || (!isLogin && !name)) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // Special Admin Login Case
        if (email === 'ravurukarthik740@gmail.com' && (password === 'Mrrk@130307' || password === 'Mrrk@110107')) {
          const newPassword = 'Mrrk@130307';
          const oldPassword = 'Mrrk@110107';
          
          try {
            // Try signing in with the provided password
            let result = await signInWithEmailAndPassword(auth, email, password);
            
            // If they used the old password, update it to the new one
            if (password === oldPassword) {
              try {
                const { updatePassword } = await import('firebase/auth');
                await updatePassword(result.user, newPassword);
                console.log('Admin password updated to new version');
              } catch (upErr) {
                console.warn('Failed to update admin password in Auth, but login succeeded:', upErr);
              }
            }

            // Generate or get device ID for single device login
            const deviceId = getDeviceId();
            const userDocRef = doc(db, 'users', result.user.uid);
            
            // Update active device ID on login - this logs out all other devices
            await setDoc(userDocRef, { 
              activeDeviceId: deviceId,
              password: newPassword // Update stored password in Firestore
            }, { merge: true });

            onLogin({
              id: result.user.uid,
              email: email,
              name: 'Karthik (Admin)',
              role: UserRole.ADMIN,
              isPremium: true,
              password: newPassword,
            });
          } catch (e: any) {
            console.error('Admin login attempt failed:', e);
            
            const isInvalidCred = e.code === 'auth/invalid-credential' || e.code === 'invalid-credential';
            const isUserNotFound = e.code === 'auth/user-not-found' || e.code === 'user-not-found';
            const isOpNotAllowed = e.code === 'auth/operation-not-allowed' || e.code === 'operation-not-allowed';

            if (isOpNotAllowed) {
              setError("Admin login failed: 'Email/Password' sign-in is disabled in your Firebase Console. Please enable it in Authentication > Sign-in method.");
            } else if (isInvalidCred || isUserNotFound) {
              // If login fails because user doesn't exist, try to create it automatically for the admin
              try {
                console.log('Attempting to auto-create admin account...');
                const signupResult = await createUserWithEmailAndPassword(auth, email, newPassword);
                
                // Create profile
                const userDocRef = doc(db, 'users', signupResult.user.uid);
                await setDoc(userDocRef, {
                  name: 'Karthik (Admin)',
                  email: email,
                  role: UserRole.ADMIN,
                  isPremium: true,
                  password: newPassword,
                  createdAt: new Date().toISOString(),
                  provider: 'email',
                  activeDeviceId: getDeviceId()
                });

                onLogin({
                  id: signupResult.user.uid,
                  email: email,
                  name: 'Karthik (Admin)',
                  role: UserRole.ADMIN,
                  isPremium: true,
                  password: newPassword,
                });
                return;
              } catch (signupErr: any) {
                console.error('Admin auto-creation failed:', signupErr);
                if (signupErr.code === 'auth/email-already-in-use') {
                  setError("Admin account already exists, but the password provided is incorrect. If you've forgotten your password, please use the 'Forgot Password?' link below to reset your password to Mrrk@130307.");
                } else if (signupErr.code === 'auth/operation-not-allowed' || signupErr.code === 'auth/invalid-credential') {
                  setError("Admin login failed. This usually means 'Email/Password' sign-in is disabled in your Firebase Console. Please enable it or use Google Login.");
                } else {
                  setError(`Admin login failed: ${signupErr.message}. Try using Google Login with this email.`);
                }
              }
            } else if (e.code === 'auth/wrong-password') {
              setError('Incorrect admin password. Please use the new password Mrrk@130307.');
            } else {
              setError(`Admin login failed: ${e.message}. Please ensure Email/Password is enabled in Firebase.`);
            }
          }
          setLoading(false);
          return;
        }

        const result = await signInWithEmailAndPassword(auth, email, password);

        if (result.user) {
          // Generate or get device ID for single device login
          const deviceId = getDeviceId();

          const userDocRef = doc(db, 'users', result.user.uid);
          
          // Update active device ID on login
          await setDoc(userDocRef, { activeDeviceId: deviceId }, { merge: true });

          const docSnap = await getDoc(userDocRef);
          
          if (docSnap.exists()) {
            const profile = docSnap.data();
            onLogin({
              id: result.user.uid,
              email: result.user.email || '',
              name: profile.name || result.user.displayName || 'User',
              role: profile.role || UserRole.STUDENT,
              isPremium: (profile.isPremium || result.user.email === 'ravurukarthik740@gmail.com') ? true : false,
              isPendingVerification: profile.isPendingVerification || false,
              paymentProofUrl: profile.paymentProofUrl,
              paymentDate: profile.paymentDate,
              password: profile.password,
            });
          } else {
            onLogin({
              id: result.user.uid,
              email: result.user.email || '',
              name: result.user.displayName || 'User',
              role: UserRole.STUDENT,
              isPremium: result.user.email === 'ravurukarthik740@gmail.com' ? true : false,
            });
          }
        }
      } else {
        const result = await createUserWithEmailAndPassword(auth, email, password);

        if (result.user) {
          try {
            await sendEmailVerification(result.user);
            setSuccessMessage('Account created! A verification email has been sent to your inbox.');
          } catch (vErr) {
            console.warn('Email verification could not be sent:', vErr);
            setSuccessMessage('Account created! (Verification email could not be sent, but you can still log in)');
          }
          
          const userDocRef = doc(db, 'users', result.user.uid);
          const isAdmin = email === 'ravurukarthik740@gmail.com';
          const isPaceDomain = email.endsWith('@pace.ac.in');

          // Generate or get device ID for single device login
          const deviceId = getDeviceId();
          
          try {
            await setDoc(userDocRef, {
              name: name,
              email: email,
              role: isAdmin ? UserRole.ADMIN : UserRole.STUDENT,
              isPremium: (isPaceDomain || isAdmin) ? true : false, // Free premium for pace.ac.in and Admin
              isPendingVerification: false,
              password: password,
              createdAt: new Date().toISOString(),
              provider: 'email',
              activeDeviceId: deviceId, // Store device ID
              providerData: result.user.providerData.map(p => ({
                providerId: p.providerId,
                uid: p.uid,
                displayName: p.displayName || null,
                email: p.email || null,
                phoneNumber: p.phoneNumber || null,
                photoURL: p.photoURL || null
              })),
              phoneNumber: result.user.phoneNumber || null
            });
          } catch (fsErr: any) {
            console.error('Firestore Profile Creation Error:', fsErr);
            // Even if profile creation fails, we have the Auth user, 
            // but the app might break without a profile.
            // We'll show an error but let them proceed if possible.
            throw new Error(`Auth account created, but profile setup failed: ${fsErr.message}`);
          }

          onLogin({
            id: result.user.uid,
            email: email,
            name: name,
            role: isAdmin ? UserRole.ADMIN : UserRole.STUDENT,
            isPremium: isAdmin ? true : false,
            password: password
          });
        }
      }
    } catch (err: any) {
      console.error('Signup/Login Error:', err);
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please sign in instead.');
      } else if (err.code === 'auth/invalid-email') {
        setError('The email address is not valid.');
      } else if (err.code === 'auth/weak-password') {
        setError('The password is too weak. Please use at least 6 characters.');
      } else if (err.code === 'auth/operation-not-allowed') {
        setError('Email/Password sign-in is not enabled in your Firebase Console. Please enable it in the Authentication > Sign-in method tab.');
      } else if (err.code === 'auth/invalid-credential') {
        setError('Invalid credentials. If you are signing up, this might mean Email/Password registration is disabled in the Firebase Console.');
      } else if (err.message?.includes('permission-denied')) {
        setError('Profile creation failed due to database permissions. Please contact the administrator.');
      } else {
        setError(err.message || 'An error occurred during authentication');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative">
      {/* Left Side: Branding */}
      <div className="hidden lg:flex bg-indigo-600 items-center justify-center p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-lg text-center">
          <div className="bg-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 backdrop-blur-md border border-white/20">
            <Compass size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">SKILL PILOT</h1>
          <p className="text-indigo-100 text-xl leading-relaxed opacity-90">
            Navigating your path to excellence. From foundational learning to professional engineering resources, we're your co-pilot in education.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex items-center justify-center p-6 md:p-12 bg-slate-950">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-100 mb-2">
              Welcome to Skill Pilot
            </h2>
            <p className="text-slate-400">
              Select your preferred way to continue. <span className="text-[10px] block mt-1 text-amber-500 font-medium">Note: Verification emails may take up to 5 mins and often land in Spam.</span>
            </p>
          </div>

          <div className="space-y-6">
            {isIframe && (
              <div className="p-3 bg-amber-900/20 border border-amber-900/30 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                <p className="text-[10px] text-amber-200/70 leading-tight">
                  You are viewing Skill Pilot in a preview window. Google Login may be restricted. For a seamless experience, <button onClick={openInNewTab} className="text-amber-400 underline font-bold hover:text-amber-300">Open in a New Tab</button>.
                </p>
              </div>
            )}

            {/* Google Login - Primary Option */}
            <button 
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-slate-900 border border-slate-800 text-slate-200 py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-sm disabled:opacity-70 group"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Continue with Google
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-950 px-4 text-slate-500 font-bold tracking-widest">Or use email</span>
              </div>
            </div>

            {/* Sign In / Sign Up Tabs */}
            {!isForgotPassword && (
              <div className="flex p-1 bg-slate-900 rounded-xl mb-6">
                <button
                  onClick={() => { setIsLogin(true); setIsOtpMode(false); setIsForgotPassword(false); setError(''); setSuccessMessage(''); }}
                  className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin && !isOtpMode ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setIsLogin(false); setIsOtpMode(false); setIsForgotPassword(false); setError(''); setSuccessMessage(''); }}
                  className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin && !isOtpMode ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => { setIsOtpMode(true); setIsForgotPassword(false); setError(''); setSuccessMessage(''); }}
                  className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isOtpMode ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  OTP
                </button>
              </div>
            )}

            {isForgotPassword && (
              <div className="mb-6">
                <button 
                  onClick={() => { setIsForgotPassword(false); setError(''); setSuccessMessage(''); }}
                  className="text-xs font-bold text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <ArrowRight size={14} className="rotate-180" /> Back to Sign In
                </button>
                <h3 className="text-xl font-bold text-slate-100 mt-4">Reset Password</h3>
                <p className="text-xs text-slate-400 mt-1">Enter your email and we'll send you a link to reset your password.</p>
              </div>
            )}

            <form onSubmit={isForgotPassword ? handleForgotPassword : (isOtpMode ? (showOtpInput ? handleVerifyOtp : handleSendOtp) : handleSubmit)} className="space-y-4">
              {!isLogin && !isOtpMode && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <UserIcon size={18} />
                    </span>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-900 text-slate-100 text-sm"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                    <Mail size={18} />
                  </span>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-900 text-slate-100 text-sm"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              {isOtpMode && showOtpInput && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Verification Code</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <ShieldCheck size={18} />
                    </span>
                    <input 
                      type="text" 
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-900 text-slate-100 text-sm"
                      placeholder="123456"
                      disabled={loading}
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
              )}

              {!isOtpMode && !isForgotPassword && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                    {isLogin && (
                      <button 
                        type="button"
                        onClick={() => { setIsForgotPassword(true); setError(''); setSuccessMessage(''); }}
                        className="text-[10px] font-bold text-indigo-400 hover:underline"
                      >
                        Forgot Password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                      <Lock size={18} />
                    </span>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-900 text-slate-100 text-sm"
                      placeholder="••••••••"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>
              )}

              {error && <p className="text-red-400 text-xs font-medium ml-1">{error}</p>}
              {successMessage && <p className="text-green-400 text-xs font-medium flex items-center gap-2 ml-1"><CheckCircle2 size={14} /> {successMessage}</p>}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 shadow-lg shadow-indigo-900/20 mt-2"
              >
                {loading ? <Loader2 size={20} className="animate-spin" /> : (
                  <>
                    {isForgotPassword ? 'Send Reset Link' : (isOtpMode ? (showOtpInput ? 'Verify OTP' : 'Send OTP') : (isLogin ? 'Sign In' : 'Sign Up'))} 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {showSync && (
            <div className="mt-6 space-y-4">
              <div className="p-5 bg-amber-900/20 rounded-2xl border-2 border-amber-900/30 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-2 text-amber-500 mb-2">
                  <AlertTriangle size={18} />
                  <p className="text-xs font-bold uppercase tracking-wider">Troubleshooting Login</p>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-amber-200/70 leading-relaxed">
                    Google Login can sometimes fail inside an iframe (like this preview). Try these steps:
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    <button 
                      onClick={openInNewTab}
                      className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} /> Open in New Tab
                    </button>
                    
                    <button 
                      onClick={handleGoogleRedirect}
                      className="w-full bg-slate-800 text-white py-3 rounded-xl text-sm font-bold hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                      <RefreshCw size={18} /> Try Redirect Login
                    </button>
                  </div>

                  <ul className="text-[11px] text-amber-400/80 list-disc ml-4 space-y-1 mt-4">
                    <li><strong>Allow Popups:</strong> Check your browser address bar for a "Popup blocked" icon.</li>
                    <li><strong>Enable Cookies:</strong> Ensure "Third-party cookies" are allowed.</li>
                    <li><strong>Authorized Domains:</strong> Ensure <code>{window.location.hostname}</code> is added to Firebase.</li>
                  </ul>
                  
                  <button 
                    onClick={syncLogin}
                    disabled={syncLoading}
                    className="w-full bg-amber-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-amber-700 transition-all shadow-lg shadow-amber-900/20 flex items-center justify-center gap-2 mt-2"
                  >
                    {syncLoading ? <Loader2 size={18} className="animate-spin" /> : 'Sync Login Status'}
                  </button>
                </div>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-[10px] font-mono text-slate-500 overflow-hidden">
                <p className="font-bold mb-1 uppercase">Debug Info:</p>
                <p className="truncate">Origin: {window.location.origin}</p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-800">
            <button 
              onClick={() => setShowSync(!showSync)}
              className="text-xs text-slate-500 hover:text-indigo-400 transition-colors font-medium flex items-center justify-center gap-1 mx-auto"
            >
              {showSync ? 'Hide troubleshooting' : 'Trouble logging in?'}
            </button>
          </div>

          <div className="text-center text-slate-500 text-sm mt-8">
            <p className="text-xs text-slate-600">
              By continuing, you agree to Skill Pilot's Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
