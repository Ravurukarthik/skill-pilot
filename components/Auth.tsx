
import React, { useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { Mail, Lock, User as UserIcon, ArrowRight, Github, Chrome, Compass, Loader2, CheckCircle2, X } from 'lucide-react';

interface AuthProps {
  onLogin: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<'google' | 'github' | null>(null);
  const [showVerification, setShowVerification] = useState(false);
  const [error, setError] = useState('');

  const mockAccounts = [
    { name: 'Karthik RK', email: 'ravurukarthik740@gmail.com', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik' },
    { name: 'Guest Explorer', email: 'guest.edu@gmail.com', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest' }
  ];

  const handleSocialLogin = (provider: 'github') => {
    setSocialLoading(provider);
    setError('');
    setTimeout(() => {
      const mockUser: User = {
        id: `github_${Math.random().toString(36).substr(2, 9)}`,
        email: `github_user@example.com`,
        name: `GitHub Explorer`,
        role: UserRole.STUDENT,
      };
      onLogin(mockUser);
      setSocialLoading(null);
    }, 1200);
  };

  const startGoogleVerification = () => {
    setSocialLoading('google');
    setError('');
    // Simulate a brief connection to "Google Servers"
    setTimeout(() => {
      setSocialLoading(null);
      setShowVerification(true);
    }, 800);
  };

  const selectVerifiedAccount = (account: typeof mockAccounts[0]) => {
    setSocialLoading('google');
    setShowVerification(false);
    // Simulate the final verification and token exchange
    setTimeout(() => {
      const authenticatedUser: User = {
        id: `google_${Math.random().toString(36).substr(2, 9)}`,
        email: account.email,
        name: account.name,
        role: UserRole.STUDENT,
      };
      onLogin(authenticatedUser);
      setSocialLoading(null);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (!email || !password || (!isLogin && !name)) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: isLogin ? email.split('@')[0] : name,
        role: UserRole.STUDENT,
      };
      onLogin(mockUser);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative">
      {/* Verification Modal Simulator */}
      {showVerification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center font-bold text-white rounded-full bg-blue-500 text-[10px]">G</div>
                <span className="text-sm font-semibold text-gray-700">Sign in with Google</span>
              </div>
              <button onClick={() => setShowVerification(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Choose an account</h3>
              <p className="text-sm text-gray-500 mb-8">to continue to Skill Pilot</p>
              
              <div className="space-y-0.5 border rounded-lg overflow-hidden text-left">
                {mockAccounts.map((acc, i) => (
                  <button 
                    key={acc.email}
                    onClick={() => selectVerifiedAccount(acc)}
                    className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b last:border-0"
                  >
                    <img src={acc.img} alt="" className="w-10 h-10 rounded-full bg-gray-100" />
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-semibold text-gray-800 truncate">{acc.name}</p>
                      <p className="text-xs text-gray-500 truncate">{acc.email}</p>
                    </div>
                    <CheckCircle2 size={16} className="text-green-500 opacity-0 group-hover:opacity-100" />
                  </button>
                ))}
                <button className="w-full p-4 text-left text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-dashed flex items-center justify-center text-gray-400">
                    <UserIcon size={18} />
                  </div>
                  Use another account
                </button>
              </div>

              <div className="mt-8 text-xs text-gray-400 leading-relaxed">
                To continue, Google will share your name, email address, language preference, and profile picture with Skill Pilot.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Left Side: Branding */}
      <div className="hidden lg:flex bg-indigo-600 items-center justify-center p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-lg text-center">
          <div className="bg-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 backdrop-blur-md border border-white/20">
            <Compass size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">SKILL PILOT</h1>
          <p className="text-indigo-200 text-lg font-medium tracking-widest uppercase mb-8">
            by RK FOUNDATIONS
          </p>
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
          <div className="mb-10 text-center lg:text-left">
            <div className="lg:hidden inline-flex flex-col items-center gap-1 mb-6">
               <div className="bg-indigo-600 p-2 rounded-lg text-white mb-2 shadow-lg">
                  <Compass size={24} />
               </div>
               <span className="font-bold text-2xl text-indigo-600">SKILL PILOT</span>
               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">by RK FOUNDATIONS</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p className="text-gray-500">
              {isLogin ? 'Enter your details to access your pilot dashboard.' : 'Join the RK FOUNDATIONS community and start learning today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <UserIcon size={20} />
                  </span>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50"
                    placeholder="John Doe"
                    disabled={loading || !!socialLoading}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Mail size={20} />
                </span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50"
                  placeholder="name@example.com"
                  disabled={loading || !!socialLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Lock size={20} />
                </span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50"
                  placeholder="••••••••"
                  disabled={loading || !!socialLoading}
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <button 
              type="submit" 
              disabled={loading || !!socialLoading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 shadow-lg shadow-indigo-100"
            >
              {loading ? <Loader2 size={20} className="animate-spin" /> : (
                <>{isLogin ? 'Sign In' : 'Sign Up'} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="my-8 flex items-center gap-4 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span>Or continue with</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={startGoogleVerification}
              disabled={loading || !!socialLoading}
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium disabled:opacity-50"
            >
              {socialLoading === 'google' ? <Loader2 size={20} className="animate-spin" /> : <><Chrome size={20} className="text-red-500" /> Verify Gmail</>}
            </button>
            <button 
              onClick={() => handleSocialLogin('github')}
              disabled={loading || !!socialLoading}
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium disabled:opacity-50"
            >
              {socialLoading === 'github' ? <Loader2 size={20} className="animate-spin" /> : <><Github size={20} /> GitHub</>}
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm mt-8">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 font-bold hover:underline"
              disabled={loading || !!socialLoading}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
