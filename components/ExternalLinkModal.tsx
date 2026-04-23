import React from 'react';
import { X, ExternalLink, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react';

interface ExternalLinkModalProps {
  url: string;
  onClose: () => void;
}

const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ url, onClose }) => {
  const handleOpenExternal = () => {
    // Save context before leaving
    sessionStorage.setItem("lastPage", window.location.pathname);
    // Open in same tab as requested
    window.location.href = url;
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-slate-950/98 backdrop-blur-3xl animate-in fade-in duration-200">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon Container */}
        <div className="w-20 h-20 bg-indigo-600/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 relative group">
          <div className="absolute inset-0 bg-indigo-600/20 rounded-[2rem] animate-ping opacity-20"></div>
          <RefreshCw className="text-indigo-500 animate-spin-slow" size={32} />
        </div>
        
        <h3 className="text-2xl font-black text-white mb-3 tracking-tight uppercase">
          Leaving Platform
        </h3>
        <p className="text-slate-400 mb-10 text-xs font-bold uppercase tracking-[0.2em]">
          Redirecting to safe zone
        </p>
        
        <div className="p-8 bg-slate-900 shadow-2xl rounded-[3rem] border border-slate-800 relative overflow-hidden group">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 rounded-full mb-6">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Secure Handshake</span>
            </div>

            <p className="text-slate-300 text-sm mb-10 font-medium leading-[1.6]">
              You are now being safely redirected to our <span className="text-indigo-400 font-bold">verified external resource</span>. This platform requires manual confirmation to ensure your session security.
            </p>

            <div className="flex flex-col gap-4">
              <button 
                onClick={handleOpenExternal}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] active:scale-95 group"
              >
                Proceed to Site <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button 
                onClick={onClose}
                className="px-8 py-4 bg-slate-800 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-700 hover:text-white transition-all"
              >
                Cancel and Stay
              </button>
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-800/50">
              <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 opacity-50">
                <div className="h-[1px] flex-1 bg-slate-800"></div>
                <span>Technical Context</span>
                <div className="h-[1px] flex-1 bg-slate-800"></div>
              </div>
              <p className="text-[10px] text-slate-600 font-mono break-all leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/50">
                {url}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-slate-700">
           <AlertCircle size={14} />
           <p className="text-[10px] font-black uppercase tracking-widest leading-none">Redirecting in same browser tab</p>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinkModal;
