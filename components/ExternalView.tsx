import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, Sparkles, AlertCircle, Bookmark, Share2 } from 'lucide-react';

const ExternalView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, url, type, company, category } = location.state || {};

  // If no URL is provided, redirect back to dashboard
  React.useEffect(() => {
    if (!url) {
      navigate('/dashboard');
    }
  }, [url, navigate]);

  if (!url) return null;

  const handleOpen = () => {
    // Save previous route before redirect
    sessionStorage.setItem("lastPage", "/dashboard");
    // Open in same tab
    window.location.href = url;
  };

  const getModuleTitle = () => {
    switch (type) {
      case 'Certification': return 'Professional Certification';
      case 'Internship': return 'Industry Internship';
      case 'Job': return 'Career Opportunity';
      default: return 'External Resource';
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Visual Header - Modern Gradient Card */}
      <div className="bg-indigo-600 text-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-100">Verified Path via Skill Pilot</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-indigo-100/80">
              {company && (
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                  <Bookmark size={14} />
                  <span className="text-sm font-bold">{company}</span>
                </div>
              )}
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                <Sparkles size={14} />
                <span className="text-sm font-bold">{category || getModuleTitle()}</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 animate-bounce-slow">
              <ExternalLink size={48} className="text-white opacity-80" />
            </div>
          </div>
        </div>
        
        {/* Layered Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-600/50 to-purple-600/30"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Redirect Message & Action */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200 relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6">Redirection Notice</h2>
               <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                 <p>
                   You are now leaving the Skill Pilot environment to access this <span className="text-indigo-600 font-bold">{type?.toLowerCase()}</span> opportunity on its official hosting platform.
                 </p>
                 <p>
                   We recommend completing the {type?.toLowerCase()} process on the platform. Your Skill Pilot session state has been preserved.
                 </p>
                 
                 <div className="bg-slate-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl my-8">
                   <div className="flex items-start gap-4">
                     <AlertCircle className="text-indigo-500 mt-1 shrink-0" size={20} />
                     <div>
                       <p className="text-sm font-bold text-slate-900 mb-1">Stay Professional</p>
                       <p className="text-xs text-slate-500">Ensure you have your resume and necessary documents ready before proceeding to the platform.</p>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="pt-6">
                 <button 
                   onClick={handleOpen}
                   className="w-full md:w-auto px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-4 group"
                 >
                   Confirm & Continue <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <p className="mt-6 text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={12} className="text-emerald-500" /> Redirecting to {new URL(url).hostname}
                 </p>
               </div>
             </div>
             
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 blur-3xl z-0"></div>
          </div>
        </div>

        {/* Sidebar Info / Fallback */}
        <div className="space-y-8">
          <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
             <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
               <Share2 size={16} className="text-indigo-600" /> Quick Support
             </h3>
             <div className="space-y-6">
               <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Redirect Issue?</p>
                 <p className="text-xs text-slate-600 mb-4 font-medium">If the button above doesn't work, use this direct link:</p>
                 <a 
                   href={url} 
                   target="_self" 
                   rel="noopener noreferrer"
                   className="text-indigo-600 hover:text-indigo-700 font-black text-xs underline underline-offset-4 decoration-indigo-500/30 break-all"
                 >
                   Click here to open manually
                 </a>
               </div>

               <div className="space-y-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Platform Security</p>
                  <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black italic">
                    <ShieldCheck size={12} /> SSL ENCRYPTED CONNECTION
                  </div>
               </div>
             </div>
          </div>
          
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-full py-4 rounded-2xl bg-white border border-slate-200 text-slate-500 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExternalView;
