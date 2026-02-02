
import React, { useState, useEffect } from 'react';
import { User, ModuleType } from './types';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import ModuleView from './components/ModuleView';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'module'>('dashboard');
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for session
    const storedUser = localStorage.getItem('edu_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('edu_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('edu_user');
    setCurrentView('dashboard');
    setSelectedModule(null);
  };

  const navigateToModule = (module: ModuleType) => {
    setSelectedModule(module);
    setCurrentView('module');
  };

  const navigateHome = () => {
    setCurrentView('dashboard');
    setSelectedModule(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar activeModule={selectedModule} onNavigate={navigateToModule} onHome={navigateHome} />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar user={user} onLogout={handleLogout} onHome={navigateHome} />
        
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          {currentView === 'dashboard' ? (
            <Dashboard onSelectModule={navigateToModule} />
          ) : (
            selectedModule && <ModuleView type={selectedModule} onBack={navigateHome} />
          )}
        </main>

        <footer className="bg-white border-t p-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SKILL PILOT by RK FOUNDATIONS. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
