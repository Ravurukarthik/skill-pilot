
import React, { useState, useEffect } from 'react';
import { User, ModuleType, UserRole } from './types';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import ModuleView from './components/ModuleView';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AdminPanel from './components/AdminPanel';
import PaymentModal from './components/PaymentModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { auth, db } from './services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc, onSnapshot, getDocFromServer, setDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from './services/firestoreUtils';
import { AlertTriangle, ExternalLink, Settings, X, RefreshCw } from 'lucide-react';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'module' | 'admin'>('dashboard');
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isVerifyingPayment, setIsVerifyingPayment] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  // Study Time Tracker
  useEffect(() => {
    if (!user || currentView !== 'module' || !selectedModule) return;

    const interval = setInterval(async () => {
      const today = new Date().toISOString().split('T')[0];
      const userDocRef = doc(db, 'users', user.id);
      
      let newStats = { ...(user.studyStats || {}) };
      
      // Reset if it's a new day
      if (user.lastStudyDate !== today) {
        newStats = {};
      }

      const moduleName = selectedModule;
      newStats[moduleName] = (newStats[moduleName] || 0) + 1; // add 1 minute

      try {
        await setDoc(userDocRef, {
          studyStats: newStats,
          lastStudyDate: today,
          dailyGoalMinutes: user.dailyGoalMinutes || 60 // Default 1 hour goal
        }, { merge: true });
      } catch (err) {
        console.error('Failed to update study stats:', err);
      }
    }, 60000); // Every 1 minute

    return () => clearInterval(interval);
  }, [user?.id, user?.lastStudyDate, user?.studyStats, user?.dailyGoalMinutes, currentView, selectedModule]);

  useEffect(() => {
    // Test Firestore connection
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          setDbError("Firebase is offline or configuration is incorrect. Please check your project settings.");
        }
      }
    };
    testConnection();

    // 1. Immediate load from localStorage for perceived speed
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
            const userData: User = {
              id: firebaseUser.uid,
              email: firebaseUser.email || '',
              name: profile.name || firebaseUser.displayName || 'User',
              role: profile.role || (firebaseUser.email === 'ravurukarthik740@gmail.com' ? UserRole.ADMIN : UserRole.STUDENT),
              isPremium: profile.isPremium || false,
              isPendingVerification: profile.isPendingVerification || false,
              paymentProofUrl: profile.paymentProofUrl,
              paymentDate: profile.paymentDate,
              password: profile.password,
              createdAt: profile.createdAt,
              provider: profile.provider,
              providerData: profile.providerData,
              phoneNumber: profile.phoneNumber
            };
            setUser(userData);
            localStorage.setItem('skillpilot_user', JSON.stringify(userData));
          } else {
            // If profile doesn't exist yet (might happen during sign up race condition)
            const userData: User = {
              id: firebaseUser.uid,
              email: firebaseUser.email || '',
              name: firebaseUser.displayName || 'User',
              role: UserRole.STUDENT,
              isPremium: false,
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
    localStorage.setItem('skillpilot_user', JSON.stringify(userData));
  };

  const handleLogout = async () => {
    try {
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

        // Simulate admin verification process for demo purposes
        setTimeout(async () => {
          try {
            await updateDoc(userDocRef, {
              isPremium: true,
              isPendingVerification: false
            });
          } catch (err) {
            console.error("Verification update failed", err);
          }

          setIsVerifyingPayment(false);
          setShowPaymentModal(false);
          alert("Receipt Verified! Your Pro Account is now active. Enjoy premium features!");
        }, 3000);
      }
    } catch (err: any) {
      alert(err.message || "Failed to upload receipt");
      setIsVerifyingPayment(false);
    }
  };

  const navigateToModule = (module: ModuleType) => {
    setSelectedModule(module);
    setCurrentView('module');
  };

  const navigateHome = () => {
    setCurrentView('dashboard');
    setSelectedModule(null);
  };

  const navigateToAdmin = () => {
    setCurrentView('admin');
    setSelectedModule(null);
  };

  if (loading || !isAuthInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex bg-slate-950 text-slate-100">
        <Sidebar 
          activeModule={selectedModule} 
          onNavigate={navigateToModule} 
          onHome={navigateHome} 
          onAdmin={navigateToAdmin}
          isPremium={user.isPremium}
          isPending={user.isPendingVerification}
          onUpgrade={handleStartUpgrade}
          userRole={user.role}
          isAdminView={currentView === 'admin'}
        />
        
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar user={user} onLogout={handleLogout} onHome={navigateHome} />
          
          <main className="flex-1 p-6 md:p-10 overflow-auto">
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

        {currentView === 'dashboard' ? (
              <Dashboard onSelectModule={navigateToModule} user={user} />
            ) : currentView === 'admin' ? (
              <AdminPanel onBack={navigateHome} user={user} />
            ) : (
              selectedModule && <ModuleView type={selectedModule} onBack={navigateHome} user={user} onUpgrade={handleStartUpgrade} />
            )}
          </main>

          <footer className="bg-slate-900 border-t border-slate-800 p-4 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SKILL PILOT. All rights reserved.
          </footer>
        </div>

        {showPaymentModal && (
          <PaymentModal 
            onClose={() => setShowPaymentModal(false)} 
            onUpload={handleReceiptUpload}
            isProcessing={isVerifyingPayment}
          />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
