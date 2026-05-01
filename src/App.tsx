
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { User, ModuleType, UserRole } from './types';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import TopNavBar from '@/components/TopNavBar';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Lazy load heavy components
const Auth = lazy(() => import('@/components/Auth'));
const Dashboard = lazy(() => import('@/components/Dashboard'));
const ModuleView = lazy(() => import('@/components/ModuleView'));
const AdminPanel = lazy(() => import('@/components/AdminPanel'));
const PaymentModal = lazy(() => import('@/components/PaymentModal'));
const ExternalLinkModal = lazy(() => import('@/components/ExternalLinkModal'));
const ExternalView = lazy(() => import('@/components/ExternalView'));

import { auth, db } from '@/services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc, onSnapshot, getDocFromServer, setDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '@/services/firestoreUtils';
import { safeStringify } from '@/lib/safeJson';
import { AlertTriangle, ExternalLink, Settings, X, RefreshCw } from 'lucide-react';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'module' | 'admin'>('dashboard');
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isVerifyingPayment, setIsVerifyingPayment] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);
  const [externalUrl, setExternalUrl] = useState<string | null>(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'info' | 'error' } | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleLogout = async (isForced = false) => {
    try {
      if (user && !isForced) {
        // Only clear the active device ID if it's a manual logout from the active device
        const userDocRef = doc(db, 'users', user.id);
        const currentDeviceId = localStorage.getItem('skillpilot_device_id');
        
        // Double check that we are still the active device before clearing
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists() && docSnap.data().activeDeviceId === currentDeviceId) {
          await updateDoc(userDocRef, { activeDeviceId: null });
        }
      }
      await signOut(auth);
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      localStorage.removeItem('skillpilot_user');
      setCurrentView('dashboard');
      setSelectedModule(null);
    }
  };

  // Admin Action Handler from Email Links
  useEffect(() => {
    const handleAdminAction = async () => {
      if (!user || user.role !== UserRole.ADMIN) return;

      const params = new URLSearchParams(window.location.search);
      const userId = params.get('userId');
      const action = params.get('action');
      
      if (userId && action) {
        const approve = action === 'approve';
        try {
          const userDocRef = doc(db, 'users', userId);
          await updateDoc(userDocRef, {
            isPremium: approve,
            isPendingVerification: false
          });
          setNotification({ 
            message: approve ? `User ${userId} upgraded to Premium!` : `Verification for user ${userId} rejected.`,
            type: 'info'
          });
          // Clear params from URL
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (err) {
          console.error("Admin action failed:", err);
          handleFirestoreError(err, OperationType.UPDATE, `users/${userId}`);
        }
      }
    };
    
    handleAdminAction();
  }, [user?.role, user?.id]);

  // Study Time Tracker
  const statsRef = React.useRef<{ [key: string]: number } | undefined>(user?.studyStats);
  const monthlyStatsRef = React.useRef<{ [key: string]: number } | undefined>(user?.monthlyStudyStats);
  const lastDateRef = React.useRef<string | undefined>(user?.lastStudyDate);
  const lastMonthRef = React.useRef<string | undefined>(user?.lastStudyMonth);

  useEffect(() => {
    statsRef.current = user?.studyStats;
    monthlyStatsRef.current = user?.monthlyStudyStats;
    lastDateRef.current = user?.lastStudyDate;
    lastMonthRef.current = user?.lastStudyMonth;
  }, [user?.studyStats, user?.monthlyStudyStats, user?.lastStudyDate, user?.lastStudyMonth]);

  useEffect(() => {
    if (!user || currentView !== 'module' || !selectedModule) return;

    const interval = setInterval(async () => {
      const now = new Date();
      const today = now.toISOString().split('T')[0];
      const currentMonth = today.substring(0, 7); // YYYY-MM
      const userDocRef = doc(db, 'users', user.id);
      
      let newStats = { ...(statsRef.current || {}) };
      let newMonthlyStats = { ...(monthlyStatsRef.current || {}) };
      
      // Reset daily if it's a new day
      if (lastDateRef.current !== today) {
        newStats = {};
      }

      // Reset monthly if it's a new month
      if (lastMonthRef.current !== currentMonth) {
        newMonthlyStats = {};
      }

      const moduleName = selectedModule;
      newStats[moduleName] = (newStats[moduleName] || 0) + 1; // add 1 minute
      newMonthlyStats[moduleName] = (newMonthlyStats[moduleName] || 0) + 1; // add 1 minute

      try {
        await updateDoc(userDocRef, {
          studyStats: newStats,
          lastStudyDate: today,
          monthlyStudyStats: newMonthlyStats,
          lastStudyMonth: currentMonth,
          activeModule: moduleName,
          dailyGoalMinutes: user.dailyGoalMinutes || 60 // Default 1 hour goal
        });
      } catch (err) {
        console.error('Failed to update study stats:', err);
      }
    }, 60000); // Every 1 minute

    return () => clearInterval(interval);
  }, [user?.id, currentView, selectedModule]);

  useEffect(() => {
    // Test Firestore connection
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error: any) {
        console.error('Firestore connection test error:', error);
        if (error.code === 'unavailable' || (error.message && error.message.includes('the client is offline'))) {
          setDbError(`Firebase is offline or connection is unavailable. This may be due to network restrictions or incorrect configuration.`);
        }
      }
    };
    testConnection();

    // Ensure device ID exists for single device login tracking
    let deviceId = localStorage.getItem('skillpilot_device_id');
    if (!deviceId) {
      deviceId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem('skillpilot_device_id', deviceId);
    }

    // Check for lastPage redirect context
    const lastPage = sessionStorage.getItem("lastPage");
    if (lastPage) {
      sessionStorage.removeItem("lastPage");
      if (lastPage !== window.location.pathname) {
        navigate(lastPage);
      }
    }
    const cachedUser = localStorage.getItem('skillpilot_user');
    if (cachedUser) {
      try {
        setUser(JSON.parse(cachedUser));
        setLoading(false);
      } catch (e) {
        console.error('Failed to parse cached user');
      }
    }

    // 2. Listen for auth changes with Firebase
    let unsubscribeProfile: (() => void) | null = null;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setIsAuthInitialized(true);
      
      // Cleanup previous profile listener if any
      if (unsubscribeProfile) {
        unsubscribeProfile();
        unsubscribeProfile = null;
      }

      if (firebaseUser) {
        // Fetch profile from Firestore
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        
        // Use onSnapshot for real-time profile updates (e.g. when admin verifies payment)
        unsubscribeProfile = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            const profile = docSnap.data();
            
            const isAdmin = firebaseUser.email === 'ravurukarthik740@gmail.com';
            const isPaceDomain = firebaseUser.email?.endsWith('@pace.ac.in');
            const shouldBePremium = isPaceDomain || profile.isPremium || isAdmin;
            
            if ((isPaceDomain || isAdmin) && !profile.isPremium) {
              updateDoc(userDocRef, { isPremium: true }).catch(err => {
                console.error('Auto-upgrade error:', err);
              });
            }
            
            // Single Device Login Check
            const currentDeviceId = localStorage.getItem('skillpilot_device_id');
            if (profile.activeDeviceId && currentDeviceId && profile.activeDeviceId !== currentDeviceId) {
              // Use a small delay to ensure the notification is seen and the state is stable
              setTimeout(() => {
                setNotification({
                  message: "You have been logged out because your account is being used on another device.",
                  type: 'error'
                });
                handleLogout(true); // Pass true to avoid clearing the new device's ID
              }, 100);
              return;
            }

            const userData: User = {
              id: firebaseUser.uid,
              email: firebaseUser.email || '',
              name: profile.name || firebaseUser.displayName || 'User',
              role: profile.role || (firebaseUser.email === 'ravurukarthik740@gmail.com' ? UserRole.ADMIN : UserRole.STUDENT),
              isPremium: shouldBePremium ? true : false,
              isPendingVerification: profile.isPendingVerification || false,
              paymentProofUrl: profile.paymentProofUrl,
              paymentDate: profile.paymentDate,
              password: profile.password,
              createdAt: profile.createdAt,
              provider: profile.provider,
              providerData: profile.providerData,
              phoneNumber: profile.phoneNumber,
              dailyGoalMinutes: profile.dailyGoalMinutes,
              studyStats: profile.studyStats,
              lastStudyDate: profile.lastStudyDate,
              monthlyStudyStats: profile.monthlyStudyStats,
              lastStudyMonth: profile.lastStudyMonth,
              activeModule: profile.activeModule,
              completedChallenges: profile.completedChallenges || {}
            };
            setUser(userData);
            
            // Restore module context if we have one and we're on the /module route
            if (profile.activeModule && !selectedModule) {
              setSelectedModule(profile.activeModule as ModuleType);
              if (window.location.pathname === '/module') {
                setCurrentView('module');
              }
            } else if (profile.activeModule && window.location.pathname === '/dashboard') {
              // Sync currentView if we hit dashboard but have an active module record
              setCurrentView('dashboard');
            }
            
            localStorage.setItem('skillpilot_user', safeStringify(userData));
          } else {
            // If profile doesn't exist yet (might happen during sign up race condition)
            const isAdmin = firebaseUser.email === 'ravurukarthik740@gmail.com';
            const userData: User = {
              id: firebaseUser.uid,
              email: firebaseUser.email || '',
              name: firebaseUser.displayName || 'User',
              role: isAdmin ? UserRole.ADMIN : UserRole.STUDENT,
              isPremium: isAdmin ? true : false,
              dailyGoalMinutes: 60,
              studyStats: {},
              lastStudyDate: new Date().toISOString().split('T')[0],
              monthlyStudyStats: {},
              lastStudyMonth: new Date().toISOString().split('T')[0].substring(0, 7),
              completedChallenges: {}
            };
            setUser(userData);
          }
          setLoading(false);
        }, (err) => {
          // Only report error if user is still logged in
          if (auth.currentUser) {
            handleFirestoreError(err, OperationType.GET, `users/${firebaseUser.uid}`);
          }
          setLoading(false);
        });
      } else {
        setUser(null);
        localStorage.removeItem('skillpilot_user');
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
      if (unsubscribeProfile) unsubscribeProfile();
    };
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('skillpilot_user', safeStringify(userData));
  };

  const handleStartUpgrade = () => {
    setShowPaymentModal(true);
  };

  const handleReceiptUpload = async (file: File) => {
    setIsVerifyingPayment(true);
    
    try {
      if (user) {
        const proofUrl = `https://placeholder.com/proof/${user.id}/${encodeURIComponent(file.name)}`;
        const paymentDate = new Date().toISOString();

        const userDocRef = doc(db, 'users', user.id);
        try {
          await setDoc(userDocRef, {
            isPendingVerification: true,
            paymentProofUrl: proofUrl,
            paymentDate: paymentDate
          }, { merge: true });
          
          // Send email notification to admin
          const formData = new FormData();
          formData.append('proof', file);
          formData.append('userEmail', user.email);
          formData.append('userId', user.id);
          formData.append('paymentDate', paymentDate);
          
          try {
            const response = await fetch('/api/send-payment-notification', {
              method: 'POST',
              body: formData,
            });
            const data = await response.json();
            if (data.success) {
              console.log('Admin notification sent successfully');
            } else {
              console.warn('Admin notification failed:', data.error);
            }
          } catch (emailErr) {
            console.error('Failed to send admin notification:', emailErr);
          }
        } catch (err) {
          handleFirestoreError(err, OperationType.UPDATE, `users/${user.id}`);
        }

        // No longer simulating automatic verification.
        // Admin must verify manually via Admin Panel.
        setIsVerifyingPayment(false);
        setShowPaymentModal(false);
        setNotification({
          message: "Payment proof submitted successfully! Admin will verify your payment shortly (usually within 5-10 mins).",
          type: 'info'
        });
      }
    } catch (err: any) {
      setNotification({
        message: err.message || "Failed to upload receipt",
        type: 'error'
      });
      setIsVerifyingPayment(false);
    }
  };

  const handleOpenLink = (url: string) => {
    const isExternal = url.startsWith("http://") || url.startsWith("https://");
    if (isExternal) {
      navigate('/external-view', { 
        state: { 
          url, 
          title: "External Portal",
          type: "Internal Resource" 
        } 
      });
    } else {
      setExternalUrl(url);
    }
  };

  const navigateToModule = async (module: ModuleType) => {
    setSelectedModule(module);
    setCurrentView('module');
    navigate('/module');
    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.id), {
          activeModule: module
        });
      } catch (err) {
        console.error('Failed to update active module:', err);
      }
    }
  };

  const navigateHome = async () => {
    setCurrentView('dashboard');
    setSelectedModule(null);
    navigate('/dashboard');
    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.id), {
          activeModule: null
        });
      } catch (err) {
        console.error('Failed to clear active module:', err);
      }
    }
  };

  const navigateToAdmin = async () => {
    if (user?.role === UserRole.ADMIN) {
      setCurrentView('admin');
      setSelectedModule(null);
      navigate('/admin');
      if (user) {
        try {
          await updateDoc(doc(db, 'users', user.id), {
            activeModule: null
          });
        } catch (err) {
          console.error('Failed to clear active module:', err);
        }
      }
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const updateDailyGoal = async (minutes: number) => {
    if (!user) return;
    try {
      await updateDoc(doc(db, 'users', user.id), {
        dailyGoalMinutes: minutes
      });
    } catch (err) {
      console.error('Failed to update daily goal:', err);
    }
  };

  if (loading || !isAuthInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
        </div>
      }>
        <Auth onLogin={handleLogin} />
      </Suspense>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex bg-slate-950 text-slate-100">
        <Sidebar 
          activeModule={selectedModule} 
          onNavigate={(module) => {
            navigateToModule(module);
            setIsSidebarOpen(false); // Close sidebar on mobile after navigation
          }} 
          onHome={() => {
            navigateHome();
            setIsSidebarOpen(false);
          }} 
          onAdmin={() => {
            navigateToAdmin();
            setIsSidebarOpen(false);
          }}
          isPremium={user.isPremium}
          isPending={user.isPendingVerification}
          onUpgrade={handleStartUpgrade}
          userRole={user.role}
          isAdminView={currentView === 'admin'}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar 
            user={user} 
            onLogout={handleLogout} 
            onHome={navigateHome} 
            onToggleSidebar={toggleSidebar}
          />
          
          { (currentView !== 'dashboard' || location.pathname === '/external-view') && (
            <TopNavBar onBack={navigateHome} />
          )}
          
          <main className={`flex-1 p-6 md:p-10 overflow-auto ${(currentView !== 'dashboard' || location.pathname === '/external-view') ? 'pt-24' : ''}`}>
            {dbError && (
              <div className="fixed bottom-4 right-4 z-[100] bg-red-950 border border-red-900 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-4">
                <AlertTriangle className="text-red-400" size={20} />
                <div>
                  <p className="text-sm font-bold text-red-100">System Warning</p>
                  <p className="text-xs text-red-300">{dbError}</p>
                </div>
                <button onClick={() => setDbError(null)} className="ml-2 text-red-500 hover:text-red-300">
                  <X size={16} />
                </button>
              </div>
            )}

            <Suspense fallback={
              <div className="flex items-center justify-center p-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
              </div>
            }>
              <Routes>
                <Route path="/dashboard" element={<Dashboard onSelectModule={navigateToModule} user={user} onUpdateGoal={updateDailyGoal} />} />
                <Route path="/admin" element={user.role === UserRole.ADMIN ? <AdminPanel onBack={navigateHome} user={user} onOpenExternalLink={handleOpenLink} setNotification={setNotification} /> : <Navigate to="/dashboard" />} />
                <Route path="/module" element={selectedModule ? <ModuleView type={selectedModule} onBack={navigateHome} user={user} onUpgrade={handleStartUpgrade} onOpenExternalLink={handleOpenLink} /> : <Navigate to="/dashboard" />} />
                <Route path="/external-view" element={<ExternalView />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </Suspense>
          </main>

          <footer className="bg-slate-900 border-t border-slate-800 p-4 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SKILL PILOT. All rights reserved.
          </footer>
        </div>

        <Suspense fallback={null}>
          {showPaymentModal && (
            <PaymentModal 
              onClose={() => setShowPaymentModal(false)} 
              onUpload={handleReceiptUpload}
              isProcessing={isVerifyingPayment}
            />
          )}

          {externalUrl && (
            <ExternalLinkModal 
              url={externalUrl} 
              onClose={() => setExternalUrl(null)} 
            />
          )}
        </Suspense>

        {notification && (
          <div className="fixed bottom-4 right-4 z-[300] animate-in slide-in-from-right-4 fade-in duration-300">
            <div className={`px-6 py-3 rounded-xl shadow-lg border flex items-center gap-3 ${
              notification.type === 'error' 
                ? 'bg-red-900/90 border-red-500 text-red-100' 
                : 'bg-slate-800/90 border-slate-700 text-slate-100'
            }`}>
              <div className={`w-2 h-2 rounded-full ${notification.type === 'error' ? 'bg-red-500' : 'bg-indigo-500'}`} />
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
