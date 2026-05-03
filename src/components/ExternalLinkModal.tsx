
import React from 'react';
import { X, ExternalLink, ShieldAlert, ChevronRight, Globe } from 'lucide-react';

interface ExternalLinkModalProps {
  url: string;
  onClose: () => void;
}

const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ url, onClose }) => {
  const handleOpenLink = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-800/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
              <ShieldAlert className="text-amber-500" size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-100">External Site</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6 p-4 bg-slate-950 rounded-xl border border-slate-800">
            <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-700">
              <Globe className="text-slate-500" size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Destination</p>
              <p className="text-slate-100 font-mono text-sm truncate">{url}</p>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            You are about to leave Skill Pilot to visit an external website. 
            We recommend you only proceed if you trust the destination.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleOpenLink}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
            >
              Continue to Site
              <ChevronRight size={18} />
            </button>
            <button
              onClick={onClose}
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition-all active:scale-[0.98]"
            >
              Go Back
            </button>
          </div>
        </div>
        
        <div className="px-8 pb-8 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-600 font-medium opacity-50">
                <ShieldAlert size={10} />
                SECURE BRIDGE PROTOCOL
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinkModal;
