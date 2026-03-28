
import React from 'react';
import { User } from '../types';
import { LogOut, User as UserIcon, Bell, Search, ShieldCheck, Mail } from 'lucide-react';

interface NavbarProps {
  user: User;
  onLogout: () => void;
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, onHome }) => {
  const [showProfile, setShowProfile] = React.useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 h-16 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={onHome} className="flex flex-col items-start text-left leading-tight group">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              SKILL PILOT
            </span>
            {user.isPremium && (
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-sm flex items-center gap-1 uppercase tracking-tighter">
                <ShieldCheck size={10} /> PRO
              </span>
            )}
          </div>
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-indigo-400 transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-3 border-l border-slate-800 pl-6 relative">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-200">{user.name}</p>
            <p className="text-xs text-slate-400 capitalize">{user.role.toLowerCase()}</p>
          </div>
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className={`p-2 rounded-full transition-all hover:ring-2 hover:ring-indigo-500/50 ${user.isPremium ? 'bg-amber-900/30 text-amber-400' : 'bg-indigo-900/30 text-indigo-400'}`}
            title="View Profile"
          >
            <UserIcon size={20} />
          </button>

          {showProfile && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 animate-in fade-in zoom-in-95 duration-200 z-50">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <div className={`p-2 rounded-full ${user.isPremium ? 'bg-amber-900/30 text-amber-400' : 'bg-indigo-900/30 text-indigo-400'}`}>
                  <UserIcon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-100 truncate">{user.name}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{user.role}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail size={16} className="shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-tighter text-slate-500">Email Address</p>
                    <p className="text-xs text-slate-200 truncate">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-slate-400">
                  <ShieldCheck size={16} className="shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-tighter text-slate-500">Sign-in Method</p>
                    <p className="text-xs text-slate-200 capitalize">{user.provider || 'Email/Password'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <button 
                  onClick={onLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-900/20 text-red-400 hover:bg-red-900/30 transition-colors text-xs font-bold"
                >
                  <LogOut size={14} /> Sign Out
                </button>
              </div>
            </div>
          )}

          <button 
            type="button"
            onClick={() => {
              console.log('Logout clicked');
              onLogout();
            }}
            className="text-slate-500 hover:text-red-400 hover:bg-red-900/20 transition-all p-2 rounded-lg flex items-center justify-center group"
            title="Logout"
          >
            <LogOut size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
