
import React, { useState } from 'react';
import { ModuleType, BTechCourse, User, Internship } from '../types';
import { SUB_MODULES_GENERAL, BTECH_COURSES, SUBJECTS_MOCK, PAPER_LINKS_10TH, PAPER_LINKS_INTER_1ST, PAPER_LINKS_INTER_2ND, HALL_TICKET_LINK_10TH, HALL_TICKET_LINKS_INTER, MARK_LIST_LINK_10TH, MARK_LIST_LINKS_INTER, INTERNSHIP_MOCK } from '../constants';
import { ArrowLeft, BookOpen, ChevronRight, FileSearch, Sparkles, Loader2, ExternalLink, FileText, Download, ScrollText, Lock, ShieldCheck, Zap, Briefcase, MapPin, Calendar, Banknote } from 'lucide-react';
import { getTutorialSummary } from '../services/geminiService';

interface ModuleViewProps {
  type: ModuleType;
  onBack: () => void;
  user: User;
  onUpgrade: () => void;
}

type SubTab = 'papers' | 'tutorials' | 'hallticket' | 'marks' | null;
type InternshipTab = 'paid' | 'unpaid';

const ModuleView: React.FC<ModuleViewProps> = ({ type, onBack, user, onUpgrade }) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>(null);
  const [internshipTab, setInternshipTab] = useState<InternshipTab>('paid');
  const [selectedCourse, setSelectedCourse] = useState<BTechCourse | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [aiContent, setAiContent] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleTutorialRequest = async (subject: string) => {
    if (!user.isPremium) return;
    setSelectedSubject(subject);
    setAiContent(null);
    setIsAiLoading(true);
    const content = await getTutorialSummary(subject, type === ModuleType.BTECH ? (selectedCourse?.name || '') : type);
    setAiContent(content);
    setIsAiLoading(false);
  };

  const handlePaperClick = (subject: string) => {
    if (type === ModuleType.CLASS_10 && PAPER_LINKS_10TH[subject]) {
      window.open(PAPER_LINKS_10TH[subject], '_blank');
    } else if (type === ModuleType.INTER) {
      if (PAPER_LINKS_INTER_1ST[subject]) {
        window.open(PAPER_LINKS_INTER_1ST[subject], '_blank');
      } else if (PAPER_LINKS_INTER_2ND[subject]) {
        window.open(PAPER_LINKS_INTER_2ND[subject], '_blank');
      } else {
        alert(`Papers for ${subject} will be available soon!`);
      }
    } else {
      alert(`Papers for ${subject} will be available soon!`);
    }
  };

  const handleExternalRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  const renderBTechBranchGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {BTECH_COURSES.map((course) => (
        <button
          key={course.id}
          onClick={() => setSelectedCourse(course)}
          className="bg-white p-6 rounded-2xl border border-gray-100 text-left hover:border-indigo-600 transition-all hover:shadow-md group flex items-center justify-between"
        >
          <div>
            <h4 className="font-bold text-gray-800 mb-1">{course.code}</h4>
            <p className="text-xs text-gray-500">{course.name}</p>
          </div>
          <ChevronRight className="text-gray-300 group-hover:text-indigo-600 transition-colors" />
        </button>
      ))}
    </div>
  );

  const renderPaperGrid = (subjects: string[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {subjects.map((subject) => (
        <button
          key={subject}
          onClick={() => handlePaperClick(subject)}
          className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-50/50 transition-all text-left flex items-center justify-between"
        >
          <div>
            <p className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">{subject}</p>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">PDF Document</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors text-gray-400">
            <ExternalLink size={16} />
          </div>
        </button>
      ))}
    </div>
  );

  const renderPreviousPapersList = () => {
    if (type === ModuleType.INTER) {
      return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-700 flex items-center gap-2">
                <FileText size={18} className="text-indigo-600" />
                Inter 1st Year Previous Papers
              </h4>
            </div>
            {renderPaperGrid(SUBJECTS_MOCK['Inter Guide 1st Year'])}
          </section>
          
          <section>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-700 flex items-center gap-2">
                <FileText size={18} className="text-purple-600" />
                Inter 2nd Year Previous Papers
              </h4>
            </div>
            {renderPaperGrid(SUBJECTS_MOCK['Inter Guide 2nd Year'])}
          </section>
        </div>
      );
    }

    const subjects = type === ModuleType.BTECH && selectedCourse 
      ? (SUBJECTS_MOCK[selectedCourse.id] || []) 
      : (SUBJECTS_MOCK[type] || SUBJECTS_MOCK['10th Class Guide']);

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-gray-700 flex items-center gap-2">
            <FileText size={18} className="text-indigo-600" />
            Select Subject for Previous Papers
          </h4>
          {type === ModuleType.CLASS_10 && (
            <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold">2024-2025 Papers Live</span>
          )}
        </div>
        {renderPaperGrid(subjects)}
      </div>
    );
  };

  const renderSubjectTutorials = (subjectKey: string) => {
    const subjects = SUBJECTS_MOCK[subjectKey] || SUBJECTS_MOCK['10th Class Guide'];
    
    if (!user.isPremium) {
      return (
        <div className="relative overflow-hidden bg-white p-12 rounded-3xl border border-gray-100 text-center animate-in zoom-in-95">
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none blur-sm filter grayscale p-10">
            <div className="grid grid-cols-3 gap-4">
               {[1,2,3,4,5,6].map(i => <div key={i} className="h-20 bg-gray-200 rounded-xl"></div>)}
            </div>
          </div>
          
          <div className="relative z-10 max-w-lg mx-auto py-10">
            <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-indigo-600 shadow-inner">
               <Lock size={40} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Premium Content Locked</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Unlock AI-powered Subject Wise Tutorials and comprehensive study guides by upgrading to a Premium Membership today.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={onUpgrade}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 group"
              >
                <Zap size={20} className="fill-current text-indigo-200" /> Upgrade to Pro Now
              </button>
              <div className="flex items-center justify-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> AI Explainer</span>
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> 24/7 Access</span>
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> Ad Free</span>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Only ₹299 per month</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
        <h4 className="font-bold text-gray-700 flex items-center gap-2">
          <BookOpen size={18} className="text-indigo-600" />
          Select a Subject for AI Tutorial
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => handleTutorialRequest(subject)}
              className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${selectedSubject === subject ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-white text-gray-700 border-gray-100 hover:border-indigo-400'}`}
            >
              <span className="font-medium">{subject}</span>
              <Sparkles size={16} className={selectedSubject === subject ? 'text-indigo-200' : 'text-gray-300 group-hover:text-indigo-400'} />
            </button>
          ))}
        </div>

        {(isAiLoading || aiContent) && (
          <div className="mt-10 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 animate-in zoom-in-95 duration-300">
            <div className="flex items-center gap-2 mb-6 text-indigo-600 font-bold border-b pb-4">
              <Sparkles size={20} />
              AI Tutorial Helper: {selectedSubject}
            </div>
            
            {isAiLoading ? (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <Loader2 className="animate-spin mb-4" size={32} />
                <p>Generating your comprehensive tutorial guide...</p>
              </div>
            ) : (
              <div className="prose prose-indigo max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-lg">
                  {aiContent}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderInternships = () => {
    const filteredInternships = INTERNSHIP_MOCK.filter(i => i.type === internshipTab);

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
        {/* Classification Tabs */}
        <div className="flex flex-wrap gap-4 p-1 bg-gray-100 rounded-2xl w-fit">
          <button 
            onClick={() => setInternshipTab('paid')}
            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${internshipTab === 'paid' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            <Banknote size={18} />
            Level 1: With Stipend
          </button>
          <button 
            onClick={() => setInternshipTab('unpaid')}
            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${internshipTab === 'unpaid' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            <Zap size={18} />
            Level 2: Skill Focus (Unpaid)
          </button>
        </div>

        {internshipTab === 'paid' && !user.isPremium ? (
          <div className="relative overflow-hidden bg-white p-12 rounded-3xl border border-gray-100 text-center animate-in zoom-in-95">
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none blur-sm filter grayscale p-10">
              <div className="grid grid-cols-3 gap-6">
                {[1,2,3].map(i => (
                  <div key={i} className="h-48 bg-gray-200 rounded-3xl"></div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 max-w-lg mx-auto py-12">
              <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-amber-600 shadow-inner">
                 <ShieldCheck size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pro Membership Required</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Level 1: Stipend-based internships are reserved for our Pro community. Get early access to high-paying roles and resume-boosting opportunities.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={onUpgrade}
                  className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
                >
                  <Zap size={20} className="fill-current text-indigo-200" /> Unlock Paid Internships
                </button>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Only ₹299 per Month Access</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((intern) => (
              <div key={intern.id} className="bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-xl group-hover:bg-indigo-50 transition-colors">
                    {intern.company.charAt(0)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${intern.type === 'paid' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {intern.type === 'paid' ? 'Stipend Available' : 'Certificate Included'}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{intern.title}</h4>
                <p className="text-gray-500 text-sm mb-6">{intern.company}</p>
                
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin size={16} className="text-gray-400" />
                    {intern.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Calendar size={16} className="text-gray-400" />
                    {intern.duration}
                  </div>
                  {intern.stipend && (
                    <div className="flex items-center gap-3 text-sm font-bold text-green-600">
                      <Banknote size={16} />
                      {intern.stipend}
                    </div>
                  )}
                </div>

                <button className="w-full bg-gray-50 text-gray-900 py-3 rounded-xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                  Apply Now <ArrowLeft size={18} className="rotate-180" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderGeneralSubModules = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {SUB_MODULES_GENERAL.map((sub) => (
        <button 
          key={sub.id} 
          onClick={() => setActiveSubTab(sub.id as SubTab)}
          className={`bg-white p-6 rounded-2xl border transition-all text-left group ${activeSubTab === sub.id ? 'border-indigo-600 ring-2 ring-indigo-100 shadow-md' : 'border-gray-100 hover:shadow-md hover:border-indigo-200'}`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${activeSubTab === sub.id ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
            <div className="relative">
               {sub.id === 'tutorials' && !user.isPremium && <Lock size={12} className="absolute -top-1 -right-1 text-amber-500" />}
               {sub.icon}
            </div>
          </div>
          <h4 className={`font-bold mb-2 ${activeSubTab === sub.id ? 'text-indigo-600' : 'text-gray-800'}`}>{sub.title}</h4>
          <p className="text-xs text-gray-500 mb-4">{sub.description}</p>
          <div className={`w-full py-2 text-xs font-bold rounded-lg text-center transition-all ${activeSubTab === sub.id ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-600 group-hover:bg-indigo-600 group-hover:text-white'}`}>
            {activeSubTab === sub.id ? 'SELECTED' : 'GO TO SECTION'}
          </div>
        </button>
      ))}
    </div>
  );

  const isBTech = type === ModuleType.BTECH;
  const isInternship = type === ModuleType.INTERNSHIPS;

  const handleBack = () => {
    if (activeSubTab) {
      setActiveSubTab(null);
      setSelectedSubject(null);
      setAiContent(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    } else {
      onBack();
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <button 
        onClick={handleBack}
        className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 font-medium mb-6 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to {activeSubTab ? type : (selectedCourse ? type : 'Dashboard')}
      </button>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            {isBTech ? (selectedCourse ? `${selectedCourse.code} Resources` : 'B.Tech Engineering Guide') : type}
          </h1>
          <p className="text-gray-500">
            {isInternship ? 'Kickstart your professional journey with handpicked opportunities.' :
             activeSubTab === 'papers' ? `Viewing previous year examination papers for ${type}.` : 
             activeSubTab === 'tutorials' ? `Explore comprehensive AI-powered tutorials for ${type}.` :
             isBTech 
              ? (selectedCourse ? `Access specialized subjects and materials for ${selectedCourse.name}.` : 'Select your engineering branch to view course-specific tutorials.')
              : `Comprehensive resources including question papers, tutorials, and examination tools for ${type}.`}
          </p>
        </div>
        <div className="bg-indigo-50 px-4 py-2 rounded-xl flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Live Materials Available</span>
        </div>
      </div>

      {isInternship && renderInternships()}

      {!isBTech && !isInternship && (
        <>
          {renderGeneralSubModules()}
          
          <div className="mt-8">
            {activeSubTab === 'papers' && renderPreviousPapersList()}
            {activeSubTab === 'tutorials' && renderSubjectTutorials(type)}
            
            {activeSubTab === 'hallticket' && (
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 animate-in zoom-in-95">
                <div className="text-center mb-10">
                  <Download className="mx-auto text-indigo-600 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Hall Ticket Portal</h3>
                  <p className="text-gray-500">Select the appropriate portal to download your official examination permit.</p>
                </div>

                {type === ModuleType.CLASS_10 ? (
                  <div className="max-w-md mx-auto">
                    <button 
                      onClick={() => handleExternalRedirect(HALL_TICKET_LINK_10TH)}
                      className="w-full bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                    >
                      Go to Official Download Portal <ExternalLink size={20} />
                    </button>
                    <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold text-center">Redirecting to bse.ap.gov.in</p>
                  </div>
                ) : type === ModuleType.INTER ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                        <span className="bg-indigo-600 text-white w-6 h-6 rounded text-[10px] flex items-center justify-center font-bold">I</span>
                        Inter 1st Year Hall Ticket
                      </h4>
                      <div className="space-y-3">
                        <button 
                          onClick={() => handleExternalRedirect(HALL_TICKET_LINKS_INTER['1st_YEAR_REGULAR'])}
                          className="w-full bg-white text-indigo-600 border border-indigo-200 px-4 py-3 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Regular Exam <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={() => handleExternalRedirect(HALL_TICKET_LINKS_INTER['1st_YEAR_SUPPLY'])}
                          className="w-full bg-white text-indigo-600 border border-indigo-200 px-4 py-3 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Supplementary Exam <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                        <span className="bg-purple-600 text-white w-6 h-6 rounded text-[10px] flex items-center justify-center font-bold">II</span>
                        Inter 2nd Year Hall Ticket
                      </h4>
                      <div className="space-y-3">
                        <button 
                          onClick={() => handleExternalRedirect(HALL_TICKET_LINKS_INTER['2nd_YEAR_REGULAR'])}
                          className="w-full bg-white text-purple-600 border border-purple-200 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Regular Exam <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={() => handleExternalRedirect(HALL_TICKET_LINKS_INTER['2nd_YEAR_SUPPLY'])}
                          className="w-full bg-white text-purple-600 border border-purple-200 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Supplementary Exam <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400">Official portal link will be updated shortly for this grade.</p>
                  </div>
                )}
              </div>
            )}

            {activeSubTab === 'marks' && (
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 animate-in zoom-in-95">
                <div className="text-center mb-10">
                  <ScrollText className="mx-auto text-purple-600 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Mark List & Results Portal</h3>
                  <p className="text-gray-500">Access your official results and download your mark sheets from the specialized servers below.</p>
                </div>

                {type === ModuleType.CLASS_10 ? (
                  <div className="max-w-md mx-auto">
                    <button 
                      onClick={() => handleExternalRedirect(MARK_LIST_LINK_10TH)}
                      className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
                    >
                      Go to Results Portal <ExternalLink size={20} />
                    </button>
                    <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold text-center">Redirecting to BSE Official Results</p>
                  </div>
                ) : type === ModuleType.INTER ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                      <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                        <span className="bg-purple-600 text-white w-6 h-6 rounded text-[10px] flex items-center justify-center font-bold">I</span>
                        Inter 1st Year Results
                      </h4>
                      <div className="space-y-3">
                        <button 
                          onClick={() => handleExternalRedirect(MARK_LIST_LINKS_INTER['1st_YEAR_REGULAR'])}
                          className="w-full bg-white text-purple-600 border border-purple-200 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Regular Mark List <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={() => handleExternalRedirect(MARK_LIST_LINKS_INTER['1st_YEAR_SUPPLY'])}
                          className="w-full bg-white text-purple-600 border border-purple-200 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Supply Mark List <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                      <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                        <span className="bg-indigo-600 text-white w-6 h-6 rounded text-[10px] flex items-center justify-center font-bold">II</span>
                        Inter 2nd Year Results
                      </h4>
                      <div className="space-y-3">
                        <button 
                          onClick={() => handleExternalRedirect(MARK_LIST_LINKS_INTER['2nd_YEAR_REGULAR'])}
                          className="w-full bg-white text-indigo-600 border border-indigo-200 px-4 py-3 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Regular Mark List <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={() => handleExternalRedirect(MARK_LIST_LINKS_INTER['2nd_YEAR_SUPPLY'])}
                          className="w-full bg-white text-indigo-600 border border-indigo-200 px-4 py-3 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Supply Mark List <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400">Official results portal link will be updated shortly for this grade.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}

      {isBTech && !selectedCourse && renderBTechBranchGrid()}

      {isBTech && selectedCourse && (
        <div className="space-y-10">
          <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
             <h3 className="text-2xl font-bold mb-2">Branch: {selectedCourse.name}</h3>
             <p className="opacity-80 text-sm">Comprehensive semester-wise materials and expert tutorials.</p>
             <FileSearch className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 rotate-12" />
          </div>
          
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setActiveSubTab('tutorials')}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${activeSubTab === 'tutorials' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 border border-gray-100'}`}
            >
              Subject Tutorials
            </button>
            <button 
              onClick={() => setActiveSubTab('papers')}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${activeSubTab === 'papers' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 border border-gray-100'}`}
            >
              Previous Papers
            </button>
          </div>

          {activeSubTab === 'tutorials' && renderSubjectTutorials(selectedCourse.id)}
          {activeSubTab === 'papers' && renderPreviousPapersList()}
        </div>
      )}

      {(type === ModuleType.JOBS || type === ModuleType.CERTIFICATIONS) && (
        <div className="bg-white p-12 rounded-3xl border border-dashed border-gray-300 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <FileSearch size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Fetching Live Opportunities</h3>
            <p className="text-gray-500 mb-8">We are scanning top portals (LinkedIn, Indeed, Internshala) for the latest openings tailored for your profile.</p>
            <div className="flex gap-4">
              <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[45%] animate-[progress_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleView;
