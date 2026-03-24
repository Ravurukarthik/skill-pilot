
import React from 'react';
import { ModuleType, User } from '../types';
import { MODULES_DATA } from '../constants';
import { ArrowRight, Sparkles, User as UserIcon, Mail, Lock, ShieldAlert } from 'lucide-react';

interface DashboardProps {
  onSelectModule: (module: ModuleType) => void;
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectModule, user }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {!user.isPremium && (
        <div className="bg-slate-900 border-2 border-amber-900/30 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-amber-500">
            <ShieldAlert size={24} />
            <h2 className="text-lg font-bold">Free Tier Account Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-2xl">
              <div className="bg-slate-700 p-2 rounded-lg text-slate-400 shadow-sm">
                <UserIcon size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Full Name</p>
                <p className="text-sm font-semibold text-slate-200">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-2xl">
              <div className="bg-slate-700 p-2 rounded-lg text-slate-400 shadow-sm">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email ID</p>
                <p className="text-sm font-semibold text-slate-200">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-2xl">
              <div className="bg-slate-700 p-2 rounded-lg text-slate-400 shadow-sm">
                <Lock size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Password</p>
                <p className="text-sm font-semibold text-slate-200">
                  {user.password || '••••••••'} 
                  <span className="text-[8px] ml-2 text-slate-500 font-normal">(Encrypted)</span>
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[10px] text-amber-500 font-medium bg-amber-900/20 p-2 rounded-lg inline-block">
            Note: Upgrade to Pro to remove this panel and access all premium features.
          </p>
        </div>
      )}

      <div className="relative overflow-hidden bg-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-indigo-900/20">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-indigo-500/30 px-3 py-1 rounded-full text-indigo-100 text-xs font-semibold mb-6">
            <Sparkles size={14} />
            AI-Powered Learning
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Your gateway to academic excellence starts here.</h1>
          <p className="text-indigo-100 text-lg md:text-xl opacity-90 mb-8">
            Access previous year papers, specialized tutorials, and career opportunities all in one place.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
            Explore Features
          </button>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-100">Learning Modules</h2>
          <button className="text-indigo-400 font-semibold text-sm hover:underline flex items-center gap-1">
            View All <ArrowRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES_DATA.map((module) => (
            <div 
              key={module.type}
              onClick={() => onSelectModule(module.type)}
              className="group bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-900/50 transition-all cursor-pointer"
            >
              <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-900/30 transition-colors">
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">{module.type}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {module.description}
              </p>
              <div className="flex items-center text-indigo-400 font-bold text-sm">
                Access Module <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-slate-100">Recent Activities</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex-shrink-0 flex items-center justify-center text-blue-400">
                  <ArrowRight size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Mathematics Tutorial - Algebra 101</h4>
                  <p className="text-sm text-slate-400">You completed 60% of this course. Continue learning?</p>
                </div>
                <div className="ml-auto text-xs text-slate-500">2h ago</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-8 rounded-3xl text-white">
          <h3 className="text-xl font-bold mb-4">Daily Study Goal</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-indigo-200">2.5 / 4 hours</span>
            <span className="font-bold">62%</span>
          </div>
          <div className="w-full bg-indigo-800 h-3 rounded-full overflow-hidden mb-8">
            <div className="bg-indigo-400 h-full w-[62%]"></div>
          </div>
          <p className="text-sm text-indigo-100 opacity-80 mb-6">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
          <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 py-3 rounded-xl font-bold transition-all">
            Set New Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
