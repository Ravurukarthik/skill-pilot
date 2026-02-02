
import React from 'react';
import { ModuleType } from '../types';
import { MODULES_DATA } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

interface DashboardProps {
  onSelectModule: (module: ModuleType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectModule }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative overflow-hidden bg-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-indigo-100">
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
          <h2 className="text-2xl font-bold text-gray-800">Learning Modules</h2>
          <button className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1">
            View All <ArrowRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES_DATA.map((module) => (
            <div 
              key={module.type}
              onClick={() => onSelectModule(module.type)}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all cursor-pointer"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">{module.type}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {module.description}
              </p>
              <div className="flex items-center text-indigo-600 font-bold text-sm">
                Access Module <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Recent Activities</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center text-blue-600">
                  <ArrowRight size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mathematics Tutorial - Algebra 101</h4>
                  <p className="text-sm text-gray-500">You completed 60% of this course. Continue learning?</p>
                </div>
                <div className="ml-auto text-xs text-gray-400">2h ago</div>
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
