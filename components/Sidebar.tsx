
import React from 'react';
import { ModuleType } from '../types';
import { MODULES_DATA } from '../constants';
import { LayoutDashboard, GraduationCap, ShieldCheck, Clock, Settings } from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  activeModule: ModuleType | null;
  onNavigate: (module: ModuleType) => void;
  onHome: () => void;
  onAdmin?: () => void;
  isPremium: boolean;
  isPending?: boolean;
  onUpgrade: () => void;
  userRole?: UserRole;
  isAdminView?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onNavigate, onHome, onAdmin, isPremium, isPending, onUpgrade, userRole, isAdminView }) => {
  return (
    <aside className="w-20 md:w-64 bg-white border-r min-h-screen flex flex-col transition-all duration-300 overflow-hidden">
      <div className="p-4 md:p-6 flex items-center gap-3 border-b mb-4">
        <div className="bg-indigo-600 p-2 rounded-lg text-white">
          <GraduationCap size={24} />
        </div>
        <span className="font-bold text-xl hidden md:block">Portal</span>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        <button 
          onClick={onHome}
          className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${!activeModule ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
        >
          <LayoutDashboard size={22} />
          <span className="font-medium hidden md:block">Dashboard</span>
        </button>

        {userRole === UserRole.ADMIN && (
          <button 
            onClick={onAdmin}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${isAdminView ? 'bg-red-50 text-red-600' : 'text-red-500 hover:bg-red-50'}`}
          >
            <Settings size={22} />
            <span className="font-medium hidden md:block">Admin Panel</span>
          </button>
        )}

        <div className="pt-4 pb-2 px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden md:block">
          Main Modules
        </div>

        {MODULES_DATA.map((module) => (
          <button 
            key={module.type}
            onClick={() => onNavigate(module.type)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeModule === module.type ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
          >
            {React.cloneElement(module.icon as React.ReactElement<any>, { size: 22 })}
            <span className="font-medium hidden md:block truncate">{module.type}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t mt-auto">
        {!isPremium ? (
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100 hidden md:block">
            <p className="text-xs font-semibold text-indigo-600 mb-1">Upgrade Pro</p>
            {isPending ? (
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-amber-600 font-bold uppercase">
                  <Clock size={12} className="animate-pulse" /> Verification Pending
                </div>
                <p className="text-[9px] text-gray-500 leading-tight">Admin is reviewing your payment receipt. Please wait.</p>
              </div>
            ) : (
              <>
                <p className="text-[10px] text-gray-500 mb-3">Get access to premium tutorials and live sessions.</p>
                <button 
                  onClick={onUpgrade}
                  className="w-full bg-indigo-600 text-white text-[10px] py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                >
                  GO PREMIUM
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100 hidden md:block">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck size={14} className="text-amber-600" />
              <p className="text-xs font-bold text-amber-700">Pro Account</p>
            </div>
            <p className="text-[10px] text-amber-600">You have full access to all tutorials and resources.</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
