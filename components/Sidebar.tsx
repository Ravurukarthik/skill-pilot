
import React from 'react';
import { ModuleType } from '../types';
import { MODULES_DATA } from '../constants';
import { LayoutDashboard, GraduationCap } from 'lucide-react';

interface SidebarProps {
  activeModule: ModuleType | null;
  onNavigate: (module: ModuleType) => void;
  onHome: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeModule, onNavigate, onHome }) => {
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

        <div className="pt-4 pb-2 px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden md:block">
          Main Modules
        </div>

        {MODULES_DATA.map((module) => (
          <button 
            key={module.type}
            onClick={() => onNavigate(module.type)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeModule === module.type ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
          >
            {/* Fix: Explicitly cast to React.ReactElement<any> to allow 'size' prop when cloning Lucide icons, fixing the type mismatch error */}
            {React.cloneElement(module.icon as React.ReactElement<any>, { size: 22 })}
            <span className="font-medium hidden md:block truncate">{module.type}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t mt-auto">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100 hidden md:block">
          <p className="text-xs font-semibold text-indigo-600 mb-1">Upgrade Pro</p>
          <p className="text-[10px] text-gray-500 mb-3">Get access to premium tutorials and live sessions.</p>
          <button className="w-full bg-indigo-600 text-white text-[10px] py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
            GO PREMIUM
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
