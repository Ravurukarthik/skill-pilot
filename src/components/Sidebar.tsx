
import * as React from 'react';
import { ModuleType, UserRole } from '../types';
import { MODULES_DATA } from '../constants';
import { LayoutDashboard, GraduationCap, ShieldCheck, Clock, Settings, X } from 'lucide-react';

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
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeModule, 
  onNavigate, 
  onHome, 
  onAdmin, 
  isPremium, 
  isPending, 
  onUpgrade, 
  userRole, 
  isAdminView,
  isOpen,
  onClose
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed md:sticky top-0 left-0 z-50 h-screen
        w-64 bg-slate-900 border-r border-slate-800 
        flex flex-col transition-all duration-300 overflow-hidden
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
        ${!isOpen && 'md:w-20 lg:w-64'}
      `}>
        <div className="p-4 md:p-6 flex items-center justify-between border-b border-slate-800 mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <GraduationCap size={24} />
            </div>
            <span className={`font-bold text-xl text-slate-100 ${!isOpen && 'md:hidden lg:block'}`}>Portal</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-100 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          <button 
            onClick={onHome}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${!activeModule ? 'bg-indigo-900/40 text-indigo-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}`}
          >
            <LayoutDashboard size={22} />
            <span className={`font-medium ${!isOpen && 'md:hidden lg:block'}`}>Dashboard</span>
          </button>

          {userRole === UserRole.ADMIN && (
            <button 
              onClick={onAdmin}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${isAdminView ? 'bg-red-900/40 text-red-400' : 'text-red-500 hover:bg-red-900/20'}`}
            >
              <Settings size={22} />
              <span className={`font-medium ${!isOpen && 'md:hidden lg:block'}`}>Admin Panel</span>
            </button>
          )}

          <div className={`pt-4 pb-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider ${!isOpen && 'md:hidden lg:block'}`}>
            Main Modules
          </div>

          {MODULES_DATA.map((module) => (
            <button 
              key={module.type}
              onClick={() => onNavigate(module.type)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeModule === module.type ? 'bg-indigo-900/40 text-indigo-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}`}
              title={module.type}
            >
              {React.cloneElement(module.icon as React.ReactElement<any>, { size: 22 })}
              <span className={`font-medium truncate ${!isOpen && 'md:hidden lg:block'}`}>{module.type}</span>
            </button>
          ))}
        </nav>

        <div className={`p-4 border-t border-slate-800 mt-auto ${!isOpen && 'md:hidden lg:block'}`}>
          {!isPremium ? (
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-4 rounded-xl border border-indigo-900/50">
              <p className="text-xs font-semibold text-indigo-400 mb-1">Upgrade Pro</p>
              {isPending ? (
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] text-amber-500 font-bold uppercase">
                    <Clock size={12} className="animate-pulse" /> Verification Pending
                  </div>
                  <p className="text-[9px] text-slate-400 leading-tight">Admin is reviewing your payment receipt. Please wait.</p>
                </div>
              ) : (
                <>
                  <p className="text-[10px] text-slate-400 mb-3">Get access to premium tutorials and live sessions.</p>
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
            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-4 rounded-xl border border-amber-900/50">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={14} className="text-amber-500" />
                <p className="text-xs font-bold text-amber-500">Pro Account</p>
              </div>
              <p className="text-[10px] text-amber-600">You have full access to all tutorials and resources.</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
