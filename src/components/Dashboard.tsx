
import * as React from 'react';
import { ModuleType, User } from '../types';
import { MODULES_DATA } from '../constants';
import { ArrowRight, Sparkles, User as UserIcon, Mail, Lock, ShieldAlert, Settings } from 'lucide-react';

interface DashboardProps {
  onSelectModule: (module: ModuleType) => void;
  user: User;
  onUpdateGoal?: (minutes: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectModule, user, onUpdateGoal }) => {
  const [reportType, setReportType] = React.useState<'daily' | 'monthly'>('daily');
  const [isEditingGoal, setIsEditingGoal] = React.useState(false);
  const [newGoal, setNewGoal] = React.useState(user.dailyGoalMinutes || 60);
  
  const studyStats = user.studyStats || {};
  const monthlyStudyStats = user.monthlyStudyStats || {};
  
  const currentStats = reportType === 'daily' ? studyStats : monthlyStudyStats;
  
  const totalMinutes = Number(Object.values(currentStats).reduce((acc: number, curr: any) => acc + (Number(curr) || 0), 0));
  const goalMinutes = reportType === 'daily' ? Number(user.dailyGoalMinutes || 60) : Number(user.dailyGoalMinutes || 60) * 30; // Monthly goal is 30x daily
  const progressPercent = Math.min(Math.round((totalMinutes / goalMinutes) * 100), 100);

  // Find module with most time spent
  const topModule = Object.entries(studyStats).sort((a, b) => Number(b[1]) - Number(a[1]))[0]?.[0] as ModuleType | undefined;
  const suggestedModule = topModule ? MODULES_DATA.find(m => m.type === topModule) : MODULES_DATA[0];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {!user.isPremium && (
        <div className="bg-slate-900 border-2 border-amber-900/30 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-amber-500">
            <ShieldAlert size={24} />
            <h2 className="text-lg font-bold">Free Tier Account Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-2xl min-w-0">
              <div className="bg-slate-700 p-2 rounded-lg text-slate-400 shadow-sm flex-shrink-0">
                <UserIcon size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Full Name</p>
                <p className="text-sm font-semibold text-slate-200 truncate" title={user.name}>{user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-2xl min-w-0">
              <div className="bg-slate-700 p-2 rounded-lg text-slate-400 shadow-sm flex-shrink-0">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email ID</p>
                <p className="text-sm font-semibold text-slate-200 truncate" title={user.email}>{user.email}</p>
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
          <h3 className="text-xl font-bold mb-6 text-slate-100">AI Suggestions</h3>
          <div className="space-y-6">
            {suggestedModule && (
              <div 
                onClick={() => onSelectModule(suggestedModule.type)}
                className="flex gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-indigo-900/20 rounded-lg flex-shrink-0 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-900/40 transition-colors">
                  {suggestedModule.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Continue Learning: {suggestedModule.type}</h4>
                  <p className="text-sm text-slate-400">Based on your recent activity, we suggest you continue with this module to stay on track.</p>
                </div>
                <div className="ml-auto self-center">
                  <ArrowRight size={20} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            )}
            <div 
              onClick={() => onSelectModule(ModuleType.CERTIFICATIONS)}
              className="flex gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex-shrink-0 flex items-center justify-center text-blue-400 group-hover:bg-blue-900/40 transition-colors">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-200">Explore New: Certification Courses</h4>
                <p className="text-sm text-slate-400">Boost your resume with professional certifications in trending technologies.</p>
              </div>
              <div className="ml-auto self-center">
                <ArrowRight size={20} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-8 rounded-3xl text-white">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Study Progress</h3>
            <div className="flex bg-indigo-800/50 p-1 rounded-xl border border-white/10">
              <button 
                onClick={() => setReportType('daily')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${reportType === 'daily' ? 'bg-indigo-500 text-white shadow-lg' : 'text-indigo-300 hover:text-white'}`}
              >
                Daily
              </button>
              <button 
                onClick={() => setReportType('monthly')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${reportType === 'monthly' ? 'bg-indigo-500 text-white shadow-lg' : 'text-indigo-300 hover:text-white'}`}
              >
                Monthly
              </button>
            </div>
          </div>
          
          {user.activeModule && (
            <div className="mb-4 p-3 bg-white/10 rounded-2xl border border-white/20 animate-pulse">
              <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-200 mb-1">Currently Studying</p>
              <p className="text-sm font-black text-white">{user.activeModule}</p>
            </div>
          )}
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-indigo-200">
                {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m / {Math.floor(goalMinutes / 60)}h
              </span>
              {reportType === 'daily' && (
                <button 
                  onClick={() => setIsEditingGoal(true)}
                  className="p-1 hover:bg-white/10 rounded-lg text-indigo-300 transition-colors"
                  title="Edit Daily Goal"
                >
                  <Settings size={12} />
                </button>
              )}
            </div>
            <span className="font-bold">{progressPercent}%</span>
          </div>

          {isEditingGoal && (
            <div className="mb-6 p-4 bg-white/10 rounded-2xl border border-white/20 animate-in zoom-in-95">
              <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-200 mb-3">Set Daily Goal (minutes)</p>
              <div className="flex gap-2">
                <input 
                  type="number" 
                  value={newGoal}
                  onChange={(e) => setNewGoal(Number(e.target.value))}
                  className="flex-1 bg-indigo-900/50 border border-white/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                  min="1"
                  max="1440"
                />
                <button 
                  onClick={() => {
                    onUpdateGoal?.(newGoal);
                    setIsEditingGoal(false);
                  }}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-50 transition-colors"
                >
                  Save
                </button>
                <button 
                  onClick={() => setIsEditingGoal(false)}
                  className="text-white/60 px-2 py-2 text-xs font-bold hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          <div className="w-full bg-indigo-800 h-3 rounded-full overflow-hidden mb-8">
            <div className="bg-indigo-400 h-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
          </div>
          
          <p className="text-sm text-indigo-100 opacity-80 mb-6 italic">
            {reportType === 'daily' 
              ? "\"Education is the most powerful weapon which you can use to change the world.\""
              : "\"Success is the sum of small efforts, repeated day in and day out.\""}
          </p>
          
          <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-200 mb-2">
              {reportType === 'daily' ? 'Daily' : 'Monthly'} Activity Breakdown
            </p>
            {Object.keys(currentStats).length > 0 ? (
              <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar pr-2">
                {Object.entries(currentStats).sort((a, b) => Number(b[1]) - Number(a[1])).map(([module, minutes]) => (
                  <div key={module} className="flex justify-between items-center text-xs">
                    <span className="text-indigo-100 truncate mr-2">{module}</span>
                    <span className="font-bold shrink-0">{Math.floor(Number(minutes) / 60)}h {Number(minutes) % 60}m</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-bold text-sm">No activity yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
