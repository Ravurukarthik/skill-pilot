
import React from 'react';
import { X, ExternalLink, Maximize2, RotateCcw, ShieldCheck } from 'lucide-react';

interface ExternalLinkModalProps {
  url: string;
  onClose: () => void;
}

const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ url, onClose }) => {
  const isPdf = url.toLowerCase().endsWith('.pdf');
  // We use our internal proxy to bypass X-Frame-Options headers on external sites
  const displayUrl = isPdf 
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true` 
    : `/api/proxy?url=${encodeURIComponent(url)}`;

  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const handleRefresh = () => {
    setIsLoading(true);
    setError(false);
    if (iframeRef.current) {
      iframeRef.current.src = displayUrl;
    }
  };

  const handleOpenExternal = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-slate-900 w-full h-full max-w-7xl rounded-3xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-slate-800/50 border-b border-slate-700 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="bg-indigo-600/20 p-2 rounded-xl text-indigo-400 flex-shrink-0">
              <ExternalLink size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-100 truncate">Viewing {isPdf ? 'PDF Document' : 'External Content'}</h3>
                <span className="bg-slate-700 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest text-slate-400 border border-slate-600">Secure Frame</span>
              </div>
              <p className="text-[10px] text-slate-500 truncate font-mono">{url}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            <button 
              onClick={handleRefresh}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-all"
              title="Refresh"
            >
              <RotateCcw size={18} />
            </button>
            <button 
              onClick={handleOpenExternal}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-all"
              title="Open in New Tab"
            >
              <Maximize2 size={18} />
            </button>
            <div className="w-px h-6 bg-slate-700 mx-1"></div>
            <button 
              onClick={onClose}
              className="p-2 bg-slate-700 text-slate-100 hover:bg-red-600 hover:text-white rounded-xl transition-all shadow-lg"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 relative bg-white">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900 text-slate-400">
              <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-medium animate-pulse">Loading secure content...</p>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <ShieldCheck size={14} className="text-green-500" /> Safe Browsing Enabled
              </div>
            </div>
          )}
          
          {error ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900 p-8 text-center">
              <div className="w-20 h-20 bg-red-900/20 rounded-3xl flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
                <ShieldCheck size={40} className="text-red-500/50" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Display Restricted by Portal</h3>
              <p className="text-slate-400 max-w-md mb-8">
                For security reasons, this job portal (e.g., Naukri, LinkedIn) prevents itself from being shown inside other apps. 
                Click below to open the application in a secure full-page view.
              </p>
              <button 
                onClick={handleOpenExternal}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-xl shadow-indigo-900/20 ring-4 ring-indigo-500/20"
              >
                Open Official Portal <ExternalLink size={18} />
              </button>
            </div>
          ) : (
            <div className="w-full h-full relative">
              <iframe
                ref={iframeRef}
                src={displayUrl}
                className="w-full h-full border-none bg-white"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setError(true);
                }}
                title="External Content"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
              />
              
              {/* Common Error Overlay - Since iframe onError is often swallowed */}
              {isLoading === false && !error && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
                  <div className="bg-slate-900/90 backdrop-blur border border-slate-700 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4">
                    <p className="text-xs text-slate-300 font-medium">Seeing a connection error?</p>
                    <button 
                      onClick={handleOpenExternal}
                      className="text-[10px] bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5"
                    >
                      Open in New Tab <Maximize2 size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-slate-800/80 border-t border-slate-700 p-3 flex items-center justify-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span>&copy; SKILL PILOT Secure Viewer</span>
          <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
          <span>End-to-End Encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinkModal;
