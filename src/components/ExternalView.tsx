
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Lock, ChevronRight } from 'lucide-react';

const ExternalView: React.FC = () => {
  const location = useLocation();
  const { url, title, type } = (location.state as any) || { 
    url: 'https://ais-dev-4q2xmnqridiifrkuxaeylc-17136732183.asia-northeast1.run.app',
    title: 'Dashboard',
    type: 'Internal'
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <div className="bg-slate-800/50 px-6 py-3 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-md">
            <ShieldCheck size={14} className="text-indigo-400" />
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Secure</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span className="font-medium text-slate-200">{title}</span>
            <ChevronRight size={14} />
            <span className="truncate max-w-[200px]">{url}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700">
            <Lock size={12} />
            Skill Pilot Bridge
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 hover:bg-slate-700 rounded-lg text-indigo-400 transition-colors"
            title="Open in new tab"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="flex-1 bg-white relative">
        <iframe 
          src={url} 
          className="w-full h-full border-none"
          title={title}
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </div>
    </div>
  );
};

export default ExternalView;
