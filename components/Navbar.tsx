
import React from 'react';
import { User } from '../types';
import { LogOut, User as UserIcon, Bell, Search } from 'lucide-react';

interface NavbarProps {
  user: User;
  onLogout: () => void;
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, onHome }) => {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={onHome} className="flex flex-col items-start text-left leading-tight group">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            SKILL PILOT
          </span>
          <span className="text-[10px] font-medium text-gray-400 tracking-widest uppercase">
            by RK FOUNDATIONS
          </span>
        </button>
        <div className="relative hidden lg:block">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <Search size={18} />
          </span>
          <input 
            type="text" 
            placeholder="Search materials..." 
            className="pl-10 pr-4 py-1.5 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-indigo-600 transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-3 border-l pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500 capitalize">{user.role.toLowerCase()}</p>
          </div>
          <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
            <UserIcon size={20} />
          </div>
          <button 
            onClick={onLogout}
            className="text-gray-400 hover:text-red-500 transition-colors p-2"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
