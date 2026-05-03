
import React from 'react';
import { ArrowLeft, Share2, MoreVertical } from 'lucide-react';

interface TopNavBarProps {
  onBack: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ onBack }) => {
  return (
    <header className="fixed top-20 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 z-40 md:left-64 transition-all">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="h-4 w-[1px] bg-slate-700 mx-1 hidden sm:block"></div>
        <h2 className="text-sm font-semibold text-slate-300 hidden sm:block">Learning Module</h2>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-100 transition-colors">
          <Share2 size={18} />
        </button>
        <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-100 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>
    </header>
  );
};

export default TopNavBar;
