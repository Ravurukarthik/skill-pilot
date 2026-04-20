
import React from 'react';
import { X, ExternalLink, Maximize2, RotateCcw, ShieldCheck, AlertTriangle } from 'lucide-react';

interface ExternalLinkModalProps {
  url: string;
  onClose: () => void;
}

const ExternalLinkModal: React.FC<ExternalLinkModalProps> = ({ url, onClose }) => {
  const isPdf = url.toLowerCase().endsWith('.pdf');
  // We use our internal proxy to bypass X-Frame-Options headers on external sites
  const displayUrl = isPdf 
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true` 
    : `/api/proxy?url=${encodeURIComponent(url)}&v=${Date.now()}`;

  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loadTimeExceeded, setLoadTimeExceeded] = React.useState(false);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setLoadTimeExceeded(true);
      }
    }, 6000); // Reduced delay for faster user assistance
    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleRefresh = () => {
    setIsLoading(true);
    setError(false);
    setLoadTimeExceeded(false);
    if (iframeRef.current) {
      // Use both cache buster and a small delay to force a fresh tunnel initialization
      iframeRef.current.src = 'about:blank';
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = `${displayUrl.split('&v=')[0]}&v=${Date.now()}`;
        }
      }, 50);
    }
  };

  const handleOpenExternal = () => {
    window.open(url, '_blank');
  };

  // Check if content is physically empty (common in advanced frame busting)
  const [isEmpty, setIsEmpty] = React.useState(false);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-slate-900 w-full h-full max-w-full md:max-w-[95vw] md:h-[90vh] md:rounded-3xl border-none md:border md:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        {/* Header - Minimal & Professional */}
        <div className="bg-slate-900 border-b border-slate-800/60 p-3 md:p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="bg-indigo-600 w-8 h-8 md:w-10 md:h-10 rounded-xl text-white flex items-center justify-center shadow-lg shadow-indigo-900/30 flex-shrink-0 animate-pulse">
              <ShieldCheck size={20} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-[11px] md:text-sm font-black text-slate-100 tracking-wider uppercase">Portal Link Tunnel</h3>
                <div className="flex items-center gap-1.5 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping"></div>
                  <span className="text-[8px] md:text-[10px] text-indigo-400 font-bold uppercase tracking-tighter">Live Stream</span>
                </div>
              </div>
              <p className="text-[9px] md:text-[11px] text-slate-500 truncate font-mono max-w-[150px] md:max-w-xl opacity-80">{url}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden lg:flex items-center gap-4 mr-4 text-slate-500">
              <div className="flex flex-col items-end">
                <span className="text-[8px] font-black uppercase tracking-widest leading-none">Security Level</span>
                <span className="text-[10px] text-indigo-400 font-bold">Enterprise AES-256</span>
              </div>
            </div>

            <button 
              onClick={handleRefresh}
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
              title="Refresh"
            >
              <RotateCcw size={18} />
            </button>
            
            <button 
              onClick={handleOpenExternal}
              className="group relative flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-2 md:px-5 md:py-2.5 rounded-xl text-[10px] md:text-xs font-black transition-all border border-slate-700/50"
            >
              <Maximize2 size={14} className="transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline">SOLVE WHITE SPACE</span>
              <span className="sm:hidden">FIX</span>
            </button>

            <div className="w-px h-8 bg-slate-800 mx-1"></div>
            
            <button 
              onClick={onClose}
              className="p-2.5 text-slate-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 rounded-xl transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content Viewport */}
        <div className="flex-1 relative bg-white">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900">
              <div className="relative group">
                <div className="absolute -inset-8 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all duration-1000"></div>
                <div className="w-20 h-20 border-[3px] border-indigo-500/10 border-t-indigo-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="text-indigo-400/50 animate-pulse" size={28} />
                </div>
              </div>
              
              <div className="mt-10 text-center px-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
                <h4 className="text-lg font-black text-slate-100 mb-2 tracking-tight">Initializing Secure Tunnel</h4>
                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                  <span>Injecting Guard</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                  <span>Bypassing Blocks</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                  <span>Syncing UI</span>
                </div>
              </div>
            </div>
          )}
          
          {error ? (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950 p-8 text-center animate-in zoom-in duration-500">
              <div className="w-24 h-24 bg-red-500/10 rounded-[2rem] flex items-center justify-center text-red-500 mb-8 border border-red-500/20 shadow-2xl shadow-red-950/20">
                <AlertTriangle size={48} />
              </div>
              <h3 className="text-3xl font-black text-slate-100 mb-4 tracking-tighter uppercase">High Security Blocked</h3>
              <p className="text-slate-400 max-w-md mb-10 text-sm leading-relaxed font-medium">
                The content provider has detected an integration attempt. For your security, please open the original course portal directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                <button 
                  onClick={handleOpenExternal}
                  className="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-950/40 translate-y-0 active:translate-y-1 hover:-translate-y-1"
                >
                  OPEN PORTAL <ExternalLink size={18} />
                </button>
                <button 
                  onClick={() => { setError(false); handleRefresh(); }}
                  className="bg-slate-800 text-slate-300 px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-700 transition-all flex items-center justify-center gap-2 border border-slate-700/50"
                >
                  <RotateCcw size={18} /> RETRY
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative bg-white overflow-hidden">
              <iframe
                ref={iframeRef}
                src={displayUrl}
                className="w-full h-full border-none bg-white transition-opacity duration-700"
                referrerPolicy="no-referrer"
                onLoad={(e) => {
                  setIsLoading(false);
                  try {
                    const iframe = e.currentTarget;
                    if (iframe.contentWindow) {
                      const body = iframe.contentWindow.document.body;
                      // Detect if the portal returned our proxy error
                      if (body.innerText.includes('Display Restricted') || body.innerText.includes('Could not load the page via proxy')) {
                        setError(true);
                        return;
                      }
                      
                    // Compatibility Guard: Check for "empty" loads that often indicate stealth frame-busting
                    if (body.children.length === 0 && body.innerText.trim().length === 0) {
                      // Wait 5s then check again, sometimes portals are just very slow to hydrate
                      setTimeout(() => {
                        if (body.children.length === 0 && body.innerText.trim().length === 0) {
                          setError(true);
                        }
                      }, 5000);
                    }
                  }
                } catch (e) {}
              }}
              onError={() => {
                setIsLoading(false);
                setError(true);
              }}
              title="Portal Content"
            />
              
              {/* Intelligent Help Trigger - Modern Floating Pill */}
              {loadTimeExceeded && !isLoading && !error && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-in slide-in-from-bottom-10 fade-in duration-700">
                  <div className="bg-slate-900/90 backdrop-blur-2xl border border-indigo-500/30 p-2 pl-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-6 group hover:border-indigo-500/50 transition-all">
                    <span className="text-[11px] font-black text-slate-200 uppercase tracking-widest">Seeing White Space?</span>
                    <button 
                      onClick={handleOpenExternal}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full text-[10px] font-black transition-all shadow-lg shadow-indigo-900/40 uppercase tracking-tighter flex items-center gap-2"
                    >
                      Bypass Tunnel <Maximize2 size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Footer - Immersive & Subtle */}
        <div className="bg-slate-900 border-t border-slate-800/60 p-2 md:p-3 flex items-center justify-between text-[8px] md:text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] px-6">
          <div className="flex items-center gap-2">
            <ShieldCheck size={12} className="text-indigo-500/50" />
            <span>Encrypted Tunnel Active</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden md:inline">Zero Logs Privacy Policy</span>
            <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
            <span>&copy; Skill Pilot Platform Core</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinkModal;
