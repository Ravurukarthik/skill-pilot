
import React, { useState, useEffect, useRef } from 'react';
import { User, UserRole } from '../types';
import { Mail, Lock, User as UserIcon, ArrowRight, Compass, Loader2, CheckCircle2, X, ShieldCheck, AlertTriangle } from 'lucide-react';
import { auth, db } from '../services/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthProps {
  onLogin: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOtpMode, setIsOtpMode] = useState(false);
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

  const syncLogin = async () => {
    setSyncLoading(true);
    try {
      const firebaseUser = auth.currentUser;
      if (firebaseUser) {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const docSnap = await getDoc(userDocRef);
        
        if (docSnap.exists()) {
          const profile = docSnap.data();
          onLogin({
            id: firebaseUser.uid,
            email: firebaseUser.email || '',
            name: profile.name || firebaseUser.displayName || 'User',
            role: profile.role || UserRole.STUDENT,
            isPremium: profile.isPremium || false,
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

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      // Force account selection to help with some iframe issues
      provider.setCustomParameters({ prompt: 'select_account' });
      
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        // Show sync UI if it takes too long to redirect
        setShowSync(true);
        
        // Check if profile exists, if not create it
        const userDocRef = doc(db, 'users', result.user.uid);
        const docSnap = await getDoc(userDocRef);
        
        if (!docSnap.exists()) {
          const isAdmin = result.user.email === 'ravurukarthik740@gmail.com';
          await setDoc(userDocRef, {
            name: result.user.displayName || 'User',
            email: result.user.email,
            role: isAdmin ? UserRole.ADMIN : UserRole.STUDENT,
            isPremium: false,
            isPendingVerification: false,
            createdAt: new Date().toISOString(),
            provider: 'google',
            providerData: result.user.providerData.map(p => ({
              providerId: p.providerId,
              uid: p.uid,
              displayName: p.displayName,
              email: p.email,
              phoneNumber: p.phoneNumber,
              photoURL: p.photoURL
            })),
            phoneNumber: result.user.phoneNumber || undefined
          });
        }
      }
    } catch (err: any) {
      console.error('Google Login Error:', err);
      if (err.code === 'auth/popup-blocked') {
        setError('The login popup was blocked by your browser. Please allow popups for this site and try again.');
      } else if (err.code === 'auth/unauthorized-domain') {
        setError(`This domain (${window.location.hostname}) is not authorized in the Firebase Console. Please add it to the "Authorized Domains" list in your Firebase Authentication settings.`);
      } else if (err.code === 'auth/cancelled-popup-request') {
        setError('The login process was cancelled. Please try again.');
      } else {
        setError(err.message || 'Failed to initialize Google login. Check your internet connection or browser settings.');
      }
      setShowSync(true);
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
        if (email === 'ravurukarthik740@gmail.com' && password === 'Mrrk@110107') {
          // We still need to sign in to Firebase to get a valid UID if possible, 
          // or just mock it if it's a hardcoded admin
          try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            onLogin({
              id: result.user.uid,
              email: email,
              name: 'Karthik (Admin)',
              role: UserRole.ADMIN,
              isPremium: true,
              password: password,
            });
          } catch (e) {
            // Fallback for hardcoded admin if account doesn't exist in Firebase yet
            onLogin({
              id: 'admin-karthik',
              email: 'ravurukarthik740@gmail.com',
              name: 'Karthik (Admin)',
              role: UserRole.ADMIN,
              isPremium: true,
              password: password,
            });
          }
          setLoading(false);
          return;
        }

        const result = await signInWithEmailAndPassword(auth, email, password);

        if (result.user) {
          if (!result.user.emailVerified) {
            // Optional: enforce email verification
            // setError('Please verify your email before logging in.');
            // setLoading(false);
            // return;
          }

          const userDocRef = doc(db, 'users', result.user.uid);
          const docSnap = await getDoc(userDocRef);
          
          if (docSnap.exists()) {
            const profile = docSnap.data();
            onLogin({
              id: result.user.uid,
              email: result.user.email || '',
              name: profile.name || result.user.displayName || 'User',
              role: profile.role || UserRole.STUDENT,
              isPremium: profile.isPremium || false,
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
              isPremium: false,
            });
          }
        }
      } else {
        const result = await createUserWithEmailAndPassword(auth, email, password);

        if (result.user) {
          await sendEmailVerification(result.user);
          
          const userDocRef = doc(db, 'users', result.user.uid);
          const isAdmin = email === 'ravurukarthik740@gmail.com';
          await setDoc(userDocRef, {
            name: name,
            email: email,
            role: isAdmin ? UserRole.ADMIN : UserRole.STUDENT,
            isPremium: false,
            isPendingVerification: false,
            password: password,
            createdAt: new Date().toISOString(),
            provider: 'email',
            providerData: result.user.providerData.map(p => ({
              providerId: p.providerId,
              uid: p.uid,
              displayName: p.displayName,
              email: p.email,
              phoneNumber: p.phoneNumber,
              photoURL: p.photoURL
            })),
            phoneNumber: result.user.phoneNumber || undefined
          });

          onLogin({
            id: result.user.uid,
            email: email,
            name: name,
            role: UserRole.STUDENT,
            isPremium: false,
            password: password
          });
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
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
      <div className="flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to Skill Pilot
            </h2>
            <p className="text-gray-500">
              Select your preferred way to continue. <span className="text-[10px] block mt-1 text-amber-600 font-medium">Note: Verification emails may take up to 5 mins and often land in Spam.</span>
            </p>
          </div>

          <div className="space-y-6">
            {/* Google Login - Primary Option */}
            <button 
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-sm disabled:opacity-70 group"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Continue with Google
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or use email</span>
              </div>
            </div>

            {/* Sign In / Sign Up Tabs */}
            <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
              <button
                onClick={() => { setIsLogin(true); setIsOtpMode(false); setError(''); setSuccessMessage(''); }}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isLogin && !isOtpMode ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setIsLogin(false); setIsOtpMode(false); setError(''); setSuccessMessage(''); }}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isLogin && !isOtpMode ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Sign Up
              </button>
              <button
                onClick={() => { setIsOtpMode(true); setError(''); setSuccessMessage(''); }}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isOtpMode ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                OTP
              </button>
            </div>

            <form onSubmit={isOtpMode ? (showOtpInput ? handleVerifyOtp : handleSendOtp) : handleSubmit} className="space-y-4">
              {!isLogin && !isOtpMode && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <UserIcon size={18} />
                    </span>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50 text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Mail size={18} />
                  </span>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50 text-sm"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              {isOtpMode && showOtpInput && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Verification Code</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <ShieldCheck size={18} />
                    </span>
                    <input 
                      type="text" 
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50 text-sm"
                      placeholder="123456"
                      disabled={loading}
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
              )}

              {!isOtpMode && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <Lock size={18} />
                    </span>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50 text-sm"
                      placeholder="••••••••"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>
              )}

              {error && <p className="text-red-500 text-xs font-medium ml-1">{error}</p>}
              {successMessage && <p className="text-green-600 text-xs font-medium flex items-center gap-2 ml-1"><CheckCircle2 size={14} /> {successMessage}</p>}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 shadow-lg shadow-indigo-100 mt-2"
              >
                {loading ? <Loader2 size={20} className="animate-spin" /> : (
                  <>
                    {isOtpMode ? (showOtpInput ? 'Verify OTP' : 'Send OTP') : (isLogin ? 'Sign In' : 'Sign Up')} 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {showSync && (
            <div className="mt-6 space-y-4">
              <div className="p-5 bg-indigo-50 rounded-2xl border-2 border-indigo-100 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-2 text-indigo-700 mb-2">
                  <ShieldCheck size={18} />
                  <p className="text-xs font-bold uppercase tracking-wider">Authentication Sync</p>
                </div>
                <p className="text-xs text-indigo-600 mb-4 leading-relaxed">
                  If the popup closed but you're still here, click below to manually sync your session.
                </p>
                <button 
                  onClick={syncLogin}
                  disabled={syncLoading}
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
                >
                  {syncLoading ? <Loader2 size={18} className="animate-spin" /> : 'Sync Login Status'}
                </button>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-[10px] font-mono text-gray-500 overflow-hidden">
                <p className="font-bold mb-1 uppercase">Debug Info:</p>
                <p className="truncate">Origin: {window.location.origin}</p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100">
            <button 
              onClick={() => setShowSync(!showSync)}
              className="text-xs text-gray-400 hover:text-indigo-600 transition-colors font-medium flex items-center justify-center gap-1 mx-auto"
            >
              {showSync ? 'Hide troubleshooting' : 'Trouble logging in?'}
            </button>
          </div>

          <div className="text-center text-gray-600 text-sm mt-8">
            <p className="text-xs text-gray-400">
              By continuing, you agree to Skill Pilot's Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
