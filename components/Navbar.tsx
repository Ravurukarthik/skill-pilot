
import React from 'react';
import { User } from '../types';
import { LogOut, User as UserIcon, Bell, Search, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  user: User;
  onLogout: () => void;
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, onHome }) => {
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
        <div className="relative hidden lg:block">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
            <Search size={18} />
          </span>
          <input 
            type="text" 
            placeholder="Search materials..." 
            className="pl-10 pr-4 py-1.5 border border-slate-700 rounded-full bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-indigo-400 transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-200">{user.name}</p>
            <p className="text-xs text-slate-400 capitalize">{user.role.toLowerCase()}</p>
          </div>
          <div className={`p-2 rounded-full ${user.isPremium ? 'bg-amber-900/30 text-amber-400' : 'bg-indigo-900/30 text-indigo-400'}`}>
            <UserIcon size={20} />
          </div>
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
