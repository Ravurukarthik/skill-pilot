import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface TopNavBarProps {
  onBack?: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <nav className="fixed top-16 left-0 right-0 h-16 bg-slate-900/40 backdrop-blur-md border-b border-slate-800/50 z-30 flex items-center px-4 md:px-8">
      <div className="flex-1 max-w-7xl mx-auto flex items-center">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white transition-all font-bold text-xs uppercase tracking-widest border border-slate-700/50 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
