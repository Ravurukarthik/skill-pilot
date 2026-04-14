
import React, { useState, useEffect } from 'react';
import { ModuleType, BTechCourse, User, Internship, Job } from '../types';
import { SUB_MODULES_GENERAL, BTECH_COURSES, MTECH_BRANCHES, MBA_YEARS, COMPETITIVE_EXAM_CATEGORIES, SUBJECTS_MOCK, PAPER_LINKS_10TH, PAPER_LINKS_INTER_1ST, PAPER_LINKS_INTER_2ND, PAPER_LINKS_BTECH, PAPER_LINKS_MTECH, PAPER_LINKS_MBA, HALL_TICKET_LINK_10TH, HALL_TICKET_LINKS_INTER, MARK_LIST_LINK_10TH, MARK_LIST_LINKS_INTER, INTERNSHIP_MOCK, JOBS_MOCK, CERTIFICATIONS_MOCK, COMPILER_LINKS, EXAMS_MOCK, HACKATHONS_MOCK } from '../constants';
import { ArrowLeft, BookOpen, ChevronRight, FileSearch, Sparkles, Loader2, ExternalLink, FileText, Download, ScrollText, Lock, ShieldCheck, Zap, Briefcase, MapPin, Calendar, Banknote, Users, Code, Terminal, X, Search, Trophy, Award, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import ReactPlayer from 'react-player';
import { getTutorialSummary } from '../services/geminiService';

interface ModuleViewProps {
  type: ModuleType;
  onBack: () => void;
  user: User;
  onUpgrade: () => void;
  onOpenExternalLink?: (url: string) => void;
}

type SubTab = 'papers' | 'tutorials' | 'hallticket' | 'marks' | null;
type InternshipTab = 'paid' | 'unpaid';

const ModuleView: React.FC<ModuleViewProps> = ({ type, onBack, user, onUpgrade, onOpenExternalLink }) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>(null);
  const [internshipTab, setInternshipTab] = useState<InternshipTab>('paid');
  const [selectedCourse, setSelectedCourse] = useState<BTechCourse | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'info' | 'error' } | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    setActiveSubTab(null);
    setSelectedCourse(null);
    setSelectedSubject(null);
    setSelectedSubSubject(null);
    setSelectedLesson(null);
    setVideoUrl(null);
    setAiContent(null);
    setIsAiLoading(false);
    setSelectedCompiler(null);
    setSearchQuery('');
  }, [type]);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [selectedSubSubject, setSelectedSubSubject] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [aiContent, setAiContent] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [selectedCompiler, setSelectedCompiler] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTutorialRequest = async (subject: string, subSubject?: string, lesson?: string) => {
    if (!user.isPremium) return;

    if (type === ModuleType.CLASS_10 && subject === 'Telugu') {
      if (!subSubject) {
        setSelectedSubject(subject);
        setSelectedSubSubject(null);
        setSelectedLesson(null);
        setAiContent(null);
        return;
      }
      if ((subSubject === 'విషయా సుచికా' || subSubject === 'ఉపవాచకం') && !lesson) {
        setSelectedSubject(subject);
        setSelectedSubSubject(subSubject);
        setSelectedLesson(null);
        setAiContent(null);
        return;
      }
    }

    setSelectedSubject(subject);
    setSelectedSubSubject(subSubject || null);
    setSelectedLesson(lesson || null);
    
    setAiContent(null);
    setVideoUrl(null);

    if (lesson === 'రామాయణం') {
      setVideoUrl('https://www.youtube-nocookie.com/embed/f-WPzbNi-Eg?controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&enablejsapi=1');
      return;
    }

    if (lesson === 'Lesson 1: Introduction') {
      setVideoUrl('https://drive.google.com/file/d/1xLHodlJoiODjLIjdXeq84Q_L4eXP9crZUmQeoEF4etM/preview');
      return;
    }

    if (type === ModuleType.BTECH && selectedCourse?.id === 'cse' && subject === 'Data Structures') {
      setVideoUrl('https://drive.google.com/file/d/1VjeWz6ZspQi2f86zJn2DevBw4qyzizXAIXt8OqfUez4/preview');
      return;
    }

    if (subject === 'Universal IDE') {
      setIsAiLoading(false);
      setAiContent("Welcome to the Universal IDE. You can select any programming language from the dropdown menu in the editor below to start coding. This environment supports 50+ languages with real-time compilation.");
      return;
    }

    setIsAiLoading(true);
    
    let displaySubject = subject;
    if (subSubject) displaySubject += ` (${subSubject})`;
    if (lesson) displaySubject += ` - ${lesson}`;
    
    const content = await getTutorialSummary(displaySubject, type === ModuleType.BTECH ? (selectedCourse?.name || '') : type);
    setAiContent(content);
    setIsAiLoading(false);
  };

  const handlePaperClick = (subject: string) => {
    if (type === ModuleType.CLASS_10 && PAPER_LINKS_10TH[subject]) {
      onOpenExternalLink?.(PAPER_LINKS_10TH[subject]);
    } else if (type === ModuleType.INTER) {
      if (PAPER_LINKS_INTER_1ST[subject]) {
        onOpenExternalLink?.(PAPER_LINKS_INTER_1ST[subject]);
      } else if (PAPER_LINKS_INTER_2ND[subject]) {
        onOpenExternalLink?.(PAPER_LINKS_INTER_2ND[subject]);
      } else {
        setNotification({ message: `Papers for ${subject} will be available soon!`, type: 'info' });
      }
    } else if (type === ModuleType.BTECH && PAPER_LINKS_BTECH[subject]) {
      onOpenExternalLink?.(PAPER_LINKS_BTECH[subject]);
    } else if (type === ModuleType.MTECH && PAPER_LINKS_MTECH[subject]) {
      onOpenExternalLink?.(PAPER_LINKS_MTECH[subject]);
    } else if (type === ModuleType.MBA && PAPER_LINKS_MBA[subject]) {
      onOpenExternalLink?.(PAPER_LINKS_MBA[subject]);
    } else {
      setNotification({ message: `Papers for ${subject} will be available soon!`, type: 'info' });
    }
  };

  const handleExternalRedirect = (url: string) => {
    onOpenExternalLink?.(url);
  };

  const renderBranchGrid = (courses: BTechCourse[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <button
          key={course.id}
          onClick={() => setSelectedCourse(course)}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-left hover:border-indigo-500 transition-all hover:shadow-md group flex items-center justify-between"
        >
          <div>
            <h4 className="font-bold text-slate-100 mb-1">{course.code}</h4>
            <p className="text-xs text-slate-400">{course.name}</p>
          </div>
          <ChevronRight className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
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
          className="group bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all text-left flex items-center justify-between"
        >
          <div>
            <p className="font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">{subject}</p>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-bold">PDF Document</p>
          </div>
          <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-indigo-900/50 group-hover:text-indigo-400 transition-colors text-slate-500">
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
              <h4 className="font-bold text-slate-200 flex items-center gap-2">
                <FileText size={18} className="text-indigo-400" />
                Inter 1st Year Previous Papers
              </h4>
              <button 
                onClick={() => setActiveSubTab(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold bg-slate-700/50 px-3 py-1.5 rounded-lg"
              >
                <ArrowLeft size={14} /> Back to Sections
              </button>
            </div>
            {renderPaperGrid(SUBJECTS_MOCK['Inter Guide 1st Year'])}
          </section>
          
          <section>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-slate-200 flex items-center gap-2">
                <FileText size={18} className="text-purple-400" />
                Inter 2nd Year Previous Papers
              </h4>
            </div>
            {renderPaperGrid(SUBJECTS_MOCK['Inter Guide 2nd Year'])}
          </section>
        </div>
      );
    }

    const subjects = (type === ModuleType.BTECH || type === ModuleType.MTECH || type === ModuleType.MBA) && selectedCourse 
      ? (SUBJECTS_MOCK[selectedCourse.id] || []) 
      : (SUBJECTS_MOCK[type] || SUBJECTS_MOCK['10th Class Guide']);

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h4 className="font-bold text-slate-200 flex items-center gap-2">
            <FileText size={18} className="text-indigo-400" />
            Select Subject for Previous Papers
          </h4>
          <button 
            onClick={() => setActiveSubTab(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold bg-slate-700/50 px-3 py-1.5 rounded-lg w-fit"
          >
            <ArrowLeft size={14} /> Back to Sections
          </button>
        </div>
        {type === ModuleType.CLASS_10 && (
            <span className="text-xs bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full font-bold border border-indigo-500/30">2024-2025 Papers Live</span>
          )}
        {renderPaperGrid(subjects)}
      </div>
    );
  };

  const renderSubjectTutorials = (subjectKey: string) => {
    const subjects = SUBJECTS_MOCK[subjectKey] || SUBJECTS_MOCK['10th Class Guide'];
    
    if (!user.isPremium) {
      return (
        <div className="relative overflow-hidden bg-slate-800 p-12 rounded-3xl border border-slate-700 text-center animate-in zoom-in-95">
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none blur-sm filter grayscale p-10">
            <div className="grid grid-cols-3 gap-4">
               {[1,2,3,4,5,6].map(i => <div key={i} className="h-20 bg-slate-700 rounded-xl"></div>)}
            </div>
          </div>
          
          <div className="relative z-10 max-w-lg mx-auto py-10">
            <div className="w-20 h-20 bg-indigo-900/50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-indigo-400 shadow-inner">
               <Lock size={40} />
            </div>
            <h3 className="text-3xl font-bold text-slate-100 mb-4">Premium Content Locked</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Unlock AI-powered Subject Wise Tutorials and comprehensive study guides by upgrading to a Premium Membership today.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={onUpgrade}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/20 group"
              >
                <Zap size={20} className="fill-current text-indigo-200" /> Upgrade to Pro Now
              </button>
              <div className="flex items-center justify-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> AI Explainer</span>
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> 24/7 Access</span>
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-green-500" /> Ad Free</span>
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">Only ₹99 per month</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
        {!selectedSubject && (
          <>
            <div className="bg-indigo-900/30 border border-indigo-500/20 p-4 rounded-2xl flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
              <p className="text-sm font-bold text-indigo-200">Coming Soon: Subject-wise tutorials for all categories!</p>
            </div>
            <h4 className="font-bold text-slate-200 flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-400" />
              Select a Subject for AI Tutorial
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => handleTutorialRequest(subject)}
                  className="p-4 rounded-xl border text-left transition-all flex items-center justify-between group bg-slate-800 text-slate-200 border-slate-700 hover:border-indigo-500"
                >
                  <span className="font-medium">{subject}</span>
                  <Sparkles size={16} className="text-slate-500 group-hover:text-indigo-400" />
                </button>
              ))}
            </div>
          </>
        )}

        {selectedSubject && !selectedLesson && (
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={() => {
                if (selectedSubSubject) {
                  setSelectedSubSubject(null);
                } else {
                  setSelectedSubject(null);
                }
                setVideoUrl(null);
                setAiContent(null);
              }}
              className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700"
            >
              <ArrowLeft size={18} /> Back to {selectedSubSubject ? 'Modules' : 'Subjects'}
            </button>
            <div className="h-8 w-px bg-slate-700 mx-2"></div>
            <h4 className="font-bold text-slate-200 flex items-center gap-2">
              <Sparkles size={18} className="text-indigo-400" />
              {selectedSubject} {selectedSubSubject ? `> ${selectedSubSubject}` : ''}
            </h4>
          </div>
        )}

        {selectedSubject === 'Telugu' && type === ModuleType.CLASS_10 && !selectedSubSubject && (
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 animate-in fade-in zoom-in-95">
            <h5 className="font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <Sparkles size={18} /> Select Module for Telugu
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['విషయా సుచికా', 'ఉపవాచకం'].map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTutorialRequest('Telugu', mod)}
                  className="bg-slate-700 p-4 rounded-xl border border-slate-600 text-indigo-400 font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-sm flex items-center justify-between group"
                >
                  <span>{mod}</span>
                  <ChevronRight size={16} className="text-indigo-300 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedSubject === 'Telugu' && type === ModuleType.CLASS_10 && selectedSubSubject === 'విషయా సుచికా' && !selectedLesson && (
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 animate-in fade-in zoom-in-95">
            <h5 className="font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <Sparkles size={18} /> Select Lesson Name
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Lesson 1: Introduction',
                'ప్రత్యక్ష దైవాలు',
                'బతుకు గంప',
                'శతక మాధుర్యం',
                'ఉపన్యాస కళ',
                'జలేయాన్ వాలా బాగ్',
                'ప్రకృతి సందేశం',
                'చెజారిన బాల్యం',
                'జీవని',
                'రాజధర్మం',
                'కన్యాశుల్కం',
                'యుద్ధ విజేత',
                'సూక్తి సుధ'
              ].map((lesson, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTutorialRequest('Telugu', 'విషయా సుచికా', lesson)}
                  className="bg-slate-700 p-3 rounded-xl border border-slate-600 text-sm text-indigo-400 font-semibold hover:bg-indigo-600 hover:text-white transition-all shadow-sm flex items-center justify-between group"
                >
                  <span className="truncate mr-2">{lesson}</span>
                  <ChevronRight size={14} className="text-indigo-300 group-hover:text-white flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedSubject === 'Telugu' && type === ModuleType.CLASS_10 && selectedSubSubject === 'ఉపవాచకం' && !selectedLesson && (
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 animate-in fade-in zoom-in-95">
            <h5 className="font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <Sparkles size={18} /> Select Lesson Name
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Lesson 1: Introduction',
                'రామాయణం'
              ].map((lesson, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTutorialRequest('Telugu', 'ఉపవాచకం', lesson)}
                  className="bg-slate-700 p-3 rounded-xl border border-slate-600 text-sm text-indigo-400 font-semibold hover:bg-indigo-600 hover:text-white transition-all shadow-sm flex items-center justify-between group"
                >
                  <span className="truncate mr-2">{lesson}</span>
                  <ChevronRight size={14} className="text-indigo-300 group-hover:text-white flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {type === ModuleType.CLASS_10 && selectedSubject && selectedSubject !== 'Telugu' && !selectedLesson && (
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 animate-in fade-in zoom-in-95">
            <h5 className="font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <Sparkles size={18} /> Select Lesson Name
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Lesson 1: Introduction',
                'Lesson 2: Core Concepts',
                'Lesson 3: Advanced Topics',
                'Lesson 4: Practice Session'
              ].map((lesson, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTutorialRequest(selectedSubject, undefined, lesson)}
                  className="bg-slate-700 p-3 rounded-xl border border-slate-600 text-sm text-indigo-400 font-semibold hover:bg-indigo-600 hover:text-white transition-all shadow-sm flex items-center justify-between group"
                >
                  <span className="truncate mr-2">{lesson}</span>
                  <ChevronRight size={14} className="text-indigo-300 group-hover:text-white flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {(isAiLoading || aiContent || videoUrl) && (
          <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-sm p-8 animate-in zoom-in-95 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-700 pb-4">
              <div className="flex items-center gap-2 text-indigo-400 font-bold">
                <Sparkles size={20} />
                AI Tutorial Helper: {selectedSubject} {selectedSubSubject ? `(${selectedSubSubject})` : ''} {selectedLesson ? `- ${selectedLesson}` : ''}
              </div>
              <button 
                onClick={() => {
                  setSelectedLesson(null);
                  setVideoUrl(null);
                  setAiContent(null);
                }}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold bg-slate-700/50 px-3 py-1.5 rounded-lg"
              >
                <ArrowLeft size={14} /> Back to Lessons
              </button>
            </div>
            
            {isAiLoading ? (
              <div className="flex flex-col items-center justify-center py-12 text-slate-500">
                <Loader2 className="animate-spin mb-4" size={32} />
                <p>Generating your comprehensive tutorial guide...</p>
              </div>
            ) : videoUrl ? (
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-slate-700 bg-black group"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                {videoUrl.includes('youtube') ? (
                  <>
                    {(() => {
                      const Player = ReactPlayer as any;
                      return (
                        <div className="w-full h-full relative">
                          <Player
                            url={videoUrl}
                            playing={playing}
                            controls={false}
                            volume={volume}
                            muted={muted}
                            width="100%"
                            height="100%"
                            onProgress={(state: any) => setProgress(state.played)}
                            config={{
                              youtube: {
                                modestbranding: 1,
                                rel: 0,
                                disablekb: 1,
                                iv_load_policy: 3
                              } as any
                            }}
                          />
                          {/* Transparent overlay to block double-tap skipping and direct interaction */}
                          <div className="absolute inset-0 z-10" />
                        </div>
                      );
                    })()}
                    
                    {/* Custom Controls */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setPlaying(!playing)}
                          className="text-white hover:text-indigo-400 transition-colors p-2 bg-slate-800/50 rounded-full"
                          title={playing ? "Pause" : "Play"}
                        >
                          {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                        </button>

                        <div className="flex items-center gap-2 group/volume">
                          <button 
                            onClick={() => setMuted(!muted)}
                            className="text-white hover:text-indigo-400 transition-colors"
                          >
                            {muted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                          </button>
                          <input 
                            type="range" 
                            min="0" 
                            max="1" 
                            step="0.1" 
                            value={muted ? 0 : volume} 
                            onChange={(e) => {
                              setVolume(parseFloat(e.target.value));
                              setMuted(false);
                            }}
                            className="w-0 group-hover/volume:w-20 transition-all duration-300 accent-indigo-500 h-1 cursor-pointer"
                          />
                        </div>
                        
                        <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden relative">
                          <div 
                            className="h-full bg-indigo-500 transition-all duration-300" 
                            style={{ width: `${progress * 100}%` }}
                          />
                          {/* Invisible overlay to prevent clicking on progress bar to skip */}
                          <div className="absolute inset-0 z-10 cursor-default" />
                        </div>
                        
                        <div className="text-xs text-slate-300 font-mono bg-slate-800/50 px-2 py-1 rounded">
                          {Math.round(progress * 100)}%
                        </div>

                        <button 
                          onClick={() => {
                            const el = document.querySelector('.aspect-video');
                            if (el?.requestFullscreen) el.requestFullscreen();
                          }}
                          className="text-white hover:text-indigo-400 transition-colors"
                          title="Fullscreen"
                        >
                          <Maximize size={20} />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={videoUrl}
                      title="Video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      sandbox="allow-scripts allow-same-origin allow-presentation"
                      className="w-full h-full"
                    ></iframe>
                    {/* Overlays to block seek bar and potential skipping buttons */}
                    <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-transparent z-10 cursor-not-allowed" />
                    <div className="absolute top-0 left-0 right-0 h-[10%] bg-transparent z-10 cursor-not-allowed" />
                    <div className="absolute top-0 bottom-0 left-0 w-[15%] bg-transparent z-10 cursor-not-allowed" />
                    <div className="absolute top-0 bottom-0 right-0 w-[15%] bg-transparent z-10 cursor-not-allowed" />
                  </div>
                )}
              </div>
            ) : (
              <div className="prose prose-invert prose-indigo max-w-none">
                <div className="whitespace-pre-wrap text-slate-300 leading-relaxed text-lg">
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
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const filteredInternships = INTERNSHIP_MOCK.filter(i => {
      const isCorrectType = i.type === internshipTab;
      const postedDate = new Date(i.postedAt);
      const isRecent = postedDate >= oneMonthAgo;
      const matchesSearch = i.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           i.company.toLowerCase().includes(searchQuery.toLowerCase());
      return isCorrectType && isRecent && matchesSearch;
    }).sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Classification Tabs */}
          <div className="flex flex-wrap gap-4 p-1 bg-slate-800 rounded-2xl w-fit border border-slate-700">
            <button 
              onClick={() => setInternshipTab('paid')}
              className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${internshipTab === 'paid' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-700'}`}
            >
              <Banknote size={18} />
              Level 1: With Stipend
            </button>
            <button 
              onClick={() => setInternshipTab('unpaid')}
              className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${internshipTab === 'unpaid' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-700'}`}
            >
              <Zap size={18} />
              Level 2: Skill Focus (Unpaid)
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Search company or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        {internshipTab === 'paid' && !user.isPremium ? (
          <div className="relative overflow-hidden bg-slate-800 p-12 rounded-3xl border border-slate-700 text-center animate-in zoom-in-95">
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none blur-sm filter grayscale p-10">
              <div className="grid grid-cols-3 gap-6">
                {[1,2,3].map(i => (
                  <div key={i} className="h-48 bg-slate-700 rounded-3xl"></div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 max-w-lg mx-auto py-12">
              <div className="w-20 h-20 bg-amber-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-amber-500 shadow-inner border border-amber-500/20">
                 <ShieldCheck size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-100 mb-4">Pro Membership Required</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Level 1: Stipend-based internships are reserved for our Pro community. Get early access to high-paying roles and resume-boosting opportunities.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={onUpgrade}
                  className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/20"
                >
                  <Zap size={20} className="fill-current text-indigo-200" /> Unlock Paid Internships
                </button>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Only ₹99 per Month Access</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((intern) => {
              const isNew = new Date(intern.postedAt) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
              return (
                <div key={intern.id} className="bg-slate-800 rounded-3xl border border-slate-700 p-6 hover:shadow-xl transition-all group flex flex-col relative overflow-hidden">
                  {isNew && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest shadow-lg">
                        New
                      </div>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-xl group-hover:scale-110 transition-transform overflow-hidden shadow-inner border border-slate-700">
                      {intern.logo ? (
                        <img 
                          src={intern.logo} 
                          alt={intern.company} 
                          className="w-full h-full object-contain p-2" 
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        intern.company.charAt(0)
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${intern.type === 'paid' ? 'bg-green-900/30 text-green-400 border border-green-500/20' : 'bg-blue-900/30 text-blue-400 border border-blue-500/20'}`}>
                      {intern.type === 'paid' ? 'Stipend Available' : 'Certificate Included'}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-indigo-400 transition-colors line-clamp-2 min-h-[3.5rem]">{intern.title}</h4>
                  <p className="text-slate-400 text-sm mb-4 font-medium">{intern.company}</p>
                  
                  {intern.description && (
                    <div className="bg-slate-900/50 p-3 rounded-xl mb-4 border border-slate-700/50 flex-1">
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3 italic">
                        "{intern.description}"
                      </p>
                    </div>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-6 h-6 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">
                        <MapPin size={12} />
                      </div>
                      {intern.location}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-6 h-6 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">
                        <Calendar size={12} />
                      </div>
                      {intern.duration}
                    </div>
                    {intern.stipend && (
                      <div className="flex items-center gap-3 text-xs font-bold text-green-400">
                        <div className="w-6 h-6 bg-green-900/20 rounded-lg flex items-center justify-center text-green-500">
                          <Banknote size={12} />
                        </div>
                        {intern.stipend}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-700 flex items-center justify-between gap-4">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      Posted {new Date(intern.postedAt).toLocaleDateString()}
                    </div>
                    <button 
                      onClick={() => handleExternalRedirect(intern.link)}
                      className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20"
                    >
                      Apply <ArrowLeft size={16} className="rotate-180" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderJobs = () => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const filteredJobs = JOBS_MOCK.filter(job => {
      const postedDate = new Date(job.postedAt);
      const isRecent = postedDate >= oneMonthAgo;
      const isNotExpired = !job.expiresAt || new Date(job.expiresAt) > new Date();
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           job.company.toLowerCase().includes(searchQuery.toLowerCase());
      return isRecent && isNotExpired && matchesSearch;
    }).sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search company or job title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>
        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-slate-800 rounded-3xl border border-slate-700 p-8 hover:shadow-xl transition-all group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-indigo-900/50 rounded-2xl flex items-center justify-center text-indigo-400 font-bold text-2xl">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">{job.title}</h4>
                    <p className="text-slate-400 font-medium">{job.company}</p>
                    <div className="flex flex-wrap gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
                        <Calendar size={14} /> {new Date(job.postedAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
                        <Users size={14} /> {job.applicants}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-4 py-1.5 bg-indigo-900/50 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
                    {job.type}
                  </span>
                </div>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-2xl mb-8 border border-slate-700">
                <h5 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <FileText size={16} className="text-indigo-400" />
                  Brief Overview
                </h5>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {job.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleExternalRedirect(job.link)}
                  className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20"
                >
                  Apply on Portal <ExternalLink size={18} />
                </button>
                <button className="flex-1 bg-slate-700 text-slate-100 border border-slate-600 py-4 rounded-xl font-bold hover:bg-slate-600 transition-all">
                  Save for Later
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCertifications = () => {
    const filteredCerts = CERTIFICATIONS_MOCK.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           cert.company.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    }).sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search certifications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div key={cert.id} className="bg-slate-800 rounded-3xl border border-slate-700 p-6 hover:shadow-xl transition-all group flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center text-indigo-400 font-bold text-xl group-hover:bg-indigo-900/50 transition-colors overflow-hidden">
                  {cert.logo ? (
                    <img 
                      src={cert.logo} 
                      alt={cert.company} 
                      className="w-full h-full object-contain p-2" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    cert.company.charAt(0)
                  )}
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-900/30 text-indigo-400 border border-indigo-500/20">
                  Certification
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-indigo-400 transition-colors">{cert.title}</h4>
              <p className="text-slate-400 text-sm mb-2">{cert.company}</p>
              {cert.description && (
                <p className="text-xs text-indigo-400 font-medium mb-4 italic whitespace-pre-wrap">"{cert.description}"</p>
              )}
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin size={16} className="text-slate-500" />
                  {cert.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Calendar size={16} className="text-slate-500" />
                  {cert.duration}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500 font-bold uppercase tracking-wider">
                  <Calendar size={16} />
                  Posted: {new Date(cert.postedAt).toLocaleDateString()}
                </div>
              </div>

              <button 
                onClick={() => handleExternalRedirect(cert.link)}
                className="w-full bg-slate-700 text-slate-100 py-3 rounded-xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Enroll Now <ExternalLink size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCodingSession = () => {
    const languages = SUBJECTS_MOCK['Coding Compilers & IDE'] || [];
    
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
        <div className="bg-emerald-900/20 border border-emerald-500/20 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 mb-4">
          <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center text-emerald-400">
            <Terminal size={32} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-emerald-100 mb-1">Interactive Coding Environment</h3>
            <p className="text-emerald-400/70 text-sm">Master the art of programming with expert-guided practice sessions and real-time feedback.</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-600/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Compiler Ready</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {languages.map((lang) => (
            <div
              key={lang}
              onClick={() => handleTutorialRequest(lang)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTutorialRequest(lang);
                }
              }}
              role="button"
              tabIndex={0}
              className={`p-6 rounded-2xl border transition-all text-left flex flex-col gap-4 group cursor-pointer ${selectedSubject === lang ? 'bg-emerald-600 border-emerald-600 shadow-lg shadow-emerald-900/20' : 'bg-slate-800 border-slate-700 hover:border-emerald-500'}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${selectedSubject === lang ? 'bg-emerald-500 text-white' : 'bg-emerald-900/30 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white'}`}>
                <Code size={24} />
              </div>
              <div>
                <h4 className={`font-bold ${selectedSubject === lang ? 'text-white' : 'text-slate-100'}`}>{lang}</h4>
                <div className="flex items-center justify-between mt-1">
                  <p className={`text-xs ${selectedSubject === lang ? 'text-emerald-100' : 'text-slate-400'}`}>Learn & Practice</p>
                  {COMPILER_LINKS[lang] && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenExternalLink?.(COMPILER_LINKS[lang]);
                      }}
                      className={`p-1.5 rounded-lg transition-all ${selectedSubject === lang ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-emerald-900/30 text-emerald-400 hover:bg-emerald-600 hover:text-white'}`}
                      title="Open Online Compiler"
                    >
                      <Terminal size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {(isAiLoading || aiContent) && (
          <div className="mt-10 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-sm p-8">
              <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Terminal size={20} />
                  Coding Assistant: {selectedSubject}
                </div>
                {selectedSubject && COMPILER_LINKS[selectedSubject] && (
                  <button
                    onClick={() => onOpenExternalLink?.(COMPILER_LINKS[selectedSubject])}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-emerald-900/20"
                  >
                    <Terminal size={14} />
                    Maximize Compiler
                  </button>
                )}
              </div>
              
              {isAiLoading ? (
                <div className="flex flex-col items-center justify-center py-12 text-slate-500">
                  <Loader2 className="animate-spin mb-4" size={32} />
                  <p>Analyzing your coding request...</p>
                </div>
              ) : (
                <div className="prose prose-invert prose-emerald max-w-none">
                  <div className="whitespace-pre-wrap text-slate-300 leading-relaxed font-mono text-sm bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    {aiContent}
                  </div>
                </div>
              )}
            </div>

            {selectedSubject && COMPILER_LINKS[selectedSubject] && (
              <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-sm overflow-hidden flex flex-col h-[600px]">
                <div className="bg-slate-900 border-b border-slate-700 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => {
                        setSelectedSubject(null);
                        setAiContent(null);
                        onBack();
                      }}
                      className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 font-medium transition-colors group px-2 py-1 hover:bg-slate-800 rounded-lg text-xs"
                    >
                      <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                      <span>Back to Dashboard</span>
                    </button>
                    <div className="h-4 w-px bg-slate-700"></div>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <Code size={18} />
                      Live {selectedSubject} Editor
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">In-Browser Compiler</span>
                  </div>
                </div>
                <div className="flex-1 relative bg-slate-950">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Loader2 className="animate-spin text-emerald-600/10" size={48} />
                  </div>
                  <iframe 
                    src={COMPILER_LINKS[selectedSubject]}
                    className="w-full h-full border-none relative z-10"
                    title={`${selectedSubject} Compiler`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderHackathons = () => {
    const filteredHackathons = HACKATHONS_MOCK.filter(hack => 
      hack.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      hack.organizer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search hackathons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.length > 0 ? (
            filteredHackathons.map((hack) => (
              <div key={hack.id} className="bg-slate-800 rounded-3xl border border-slate-700 p-6 hover:shadow-xl transition-all group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    hack.status === 'Ongoing' ? 'bg-green-900/30 text-green-400 border-green-500/20' : 'bg-amber-900/30 text-amber-400 border-amber-500/20'
                  }`}>
                    {hack.status}
                  </span>
                </div>

                <div className="w-14 h-14 bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Trophy size={28} />
                </div>
                
                <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">{hack.title}</h4>
                <p className="text-xs text-slate-400 mb-4 font-medium">{hack.organizer}</p>
                
                <p className="text-xs text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {hack.description}
                </p>
                
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Calendar size={16} className="text-slate-500" />
                    {hack.date}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Award size={16} className="text-slate-500" />
                    {hack.prize}
                  </div>
                </div>

                <button 
                  onClick={() => handleExternalRedirect(hack.link)}
                  className="w-full bg-slate-700 text-slate-100 py-3 rounded-xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Register Now <ExternalLink size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-slate-900/50 rounded-3xl border border-dashed border-slate-800">
              <Trophy size={48} className="mx-auto text-slate-700 mb-4 opacity-20" />
              <h4 className="text-lg font-bold text-slate-500">No Hackathons Available</h4>
              <p className="text-slate-600 text-sm">Check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderExams = () => {
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
        <div className="bg-amber-900/20 border border-amber-500/20 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 mb-4">
          <div className="w-16 h-16 bg-amber-600/20 rounded-2xl flex items-center justify-center text-amber-400">
            <FileText size={32} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-amber-100 mb-1">Academic Exam Notifications</h3>
            <p className="text-amber-400/70 text-sm">Stay updated with the latest semester and university examination schedules.</p>
          </div>
          <div className="flex items-center gap-2 bg-amber-600/10 px-4 py-2 rounded-full border border-amber-500/20">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Active Notifications</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXAMS_MOCK.length > 0 ? (
            EXAMS_MOCK.map((exam) => (
              <div key={exam.id} className="bg-slate-800 rounded-3xl border border-slate-700 p-6 hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-900/50 transition-colors">
                    <FileText size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-900/30 text-amber-400 border border-amber-500/20">
                    Semester Exam
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">{exam.title}</h4>
                {exam.company && <p className="text-xs text-slate-400 mb-2 font-medium">{exam.company}</p>}
                
                {exam.description && (
                  <p className="text-xs text-slate-400 mb-4 line-clamp-3 italic leading-relaxed">
                    "{exam.description}"
                  </p>
                )}
                
                <div className="flex items-center gap-3 text-sm text-slate-300 mb-6">
                  <Calendar size={16} className="text-slate-500" />
                  <span>Scheduled: {exam.date}</span>
                </div>

                <button 
                  onClick={() => handleExternalRedirect(exam.link)}
                  className="w-full bg-slate-700 text-slate-100 py-3 rounded-xl font-bold group-hover:bg-amber-600 group-hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  View Details <ExternalLink size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-slate-900/50 rounded-3xl border border-dashed border-slate-800">
              <FileText size={48} className="mx-auto text-slate-700 mb-4 opacity-20" />
              <h4 className="text-lg font-bold text-slate-500">No Exam Notifications</h4>
              <p className="text-slate-600 text-sm">Stay tuned for upcoming academic schedules.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderGeneralSubModules = () => {
    if (activeSubTab) return null;

    const filteredSubModules = hasBranches 
      ? SUB_MODULES_GENERAL.filter(sub => sub.id === 'tutorials')
      : SUB_MODULES_GENERAL;

    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${filteredSubModules.length > 2 ? 4 : filteredSubModules.length} gap-6 mb-12`}>
        {filteredSubModules.map((sub) => (
          <button 
            key={sub.id} 
            onClick={() => setActiveSubTab(sub.id as SubTab)}
            className={`bg-slate-800 p-6 rounded-2xl border transition-all text-left group ${activeSubTab === sub.id ? 'border-indigo-500 ring-2 ring-indigo-900/50 shadow-md' : 'border-slate-700 hover:shadow-md hover:border-indigo-500/50'}`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${activeSubTab === sub.id ? 'bg-indigo-600 text-white' : 'bg-indigo-900/50 text-indigo-400'}`}>
              <div className="relative">
                 {sub.id === 'tutorials' && !user.isPremium && <Lock size={12} className="absolute -top-1 -right-1 text-amber-500" />}
                 {sub.icon}
              </div>
            </div>
            <h4 className={`font-bold mb-2 ${activeSubTab === sub.id ? 'text-indigo-400' : 'text-slate-100'}`}>{sub.title}</h4>
            <p className="text-xs text-slate-400 mb-4">{sub.description}</p>
            <div className={`w-full py-2 text-xs font-bold rounded-lg text-center transition-all ${activeSubTab === sub.id ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white'}`}>
              {activeSubTab === sub.id ? 'SELECTED' : 'GO TO SECTION'}
            </div>
          </button>
        ))}
      </div>
    );
  };

  const isBTech = type === ModuleType.BTECH;
  const isMTech = type === ModuleType.MTECH;
  const isMBA = type === ModuleType.MBA;
  const isCompetitiveExams = type === ModuleType.COMPETITIVE_EXAMS;
  const isInternship = type === ModuleType.INTERNSHIPS;
  const isCodingSession = type === ModuleType.CODING_SESSION;
  const hasBranches = isBTech || isMTech || isMBA || isCompetitiveExams;

  const handleBack = () => {
    if (selectedCompiler) {
      setSelectedCompiler(null);
    } else if (activeSubTab) {
      setActiveSubTab(null);
      setSelectedSubject(null);
      setSelectedSubSubject(null);
      setSelectedLesson(null);
      setAiContent(null);
      setVideoUrl(null);
      setSearchQuery('');
    } else if (selectedCourse) {
      setSelectedCourse(null);
    } else {
      setSearchQuery('');
      onBack();
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <button 
        onClick={handleBack}
        className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 font-medium mb-6 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to {activeSubTab ? type : (selectedCourse ? type : 'Dashboard')}
      </button>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-100 mb-2">
            {hasBranches ? (selectedCourse ? `${selectedCourse.code} Resources` : `${type}`) : type}
          </h1>
          <p className="text-slate-400">
            {isInternship ? 'Kickstart your professional journey with handpicked opportunities.' :
             isCodingSession ? 'Master programming languages with interactive expert-guided sessions and real-time coding practice.' :
             type === ModuleType.EXAMS ? 'Stay updated with the latest academic, semester, and professional certification examination notifications.' :
             type === ModuleType.HACKATHONS ? 'Compete in global hackathons, solve real-world problems, and win exciting prizes.' :
             activeSubTab === 'papers' ? `Viewing previous year examination papers for ${type}.` : 
             activeSubTab === 'tutorials' ? `Explore comprehensive AI-powered tutorials for ${type}. (Subject-wise tutorials coming soon for all categories!)` :
             type === ModuleType.CERTIFICATIONS ? 'Boost your resume with professional certificates and specialized learning paths from top industry leaders.' :
             hasBranches 
              ? (selectedCourse ? `Access specialized subjects and materials for ${selectedCourse.name}.` : `Select your ${isMBA ? 'year' : 'branch'} to view course-specific tutorials.`)
              : `Comprehensive resources including question papers, tutorials, and examination tools for ${type}.`}
          </p>
        </div>
        <div className="bg-indigo-900/30 px-4 py-2 rounded-xl flex items-center gap-3 border border-indigo-500/20">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Live Materials Available</span>
        </div>
      </div>

      {isInternship && renderInternships()}

      {type === ModuleType.JOBS && renderJobs()}

      {type === ModuleType.CODING_SESSION && renderCodingSession()}

      {type === ModuleType.EXAMS && renderExams()}

      {type === ModuleType.HACKATHONS && renderHackathons()}

      {selectedCompiler && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col animate-in fade-in zoom-in-95 duration-300">
          <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  setSelectedCompiler(null);
                  onBack();
                }}
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 font-medium transition-colors group px-3 py-1.5 hover:bg-slate-800 rounded-lg"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Back to Dashboard</span>
              </button>
              <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400">
                  <Terminal size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-100">Interactive Compiler</h2>
                  <p className="text-xs text-slate-400">Master your code in real-time</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setSelectedCompiler(null)}
              className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all group"
              title="Close Compiler"
            >
              <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
          <div className="flex-1 bg-slate-900 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Loader2 className="animate-spin text-emerald-600/20" size={64} />
            </div>
            <iframe 
              src={selectedCompiler}
              className="w-full h-full border-none relative z-10"
              title="Embedded Compiler"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      )}

      {!hasBranches && !isInternship && type !== ModuleType.JOBS && type !== ModuleType.CODING_SESSION && type !== ModuleType.EXAMS && type !== ModuleType.CERTIFICATIONS && type !== ModuleType.HACKATHONS && (
        <>
          {renderGeneralSubModules()}
          
          <div className="mt-8">
            {activeSubTab === 'papers' && renderPreviousPapersList()}
            {activeSubTab === 'tutorials' && renderSubjectTutorials(type)}
            
            {activeSubTab === 'hallticket' && (
              <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 animate-in zoom-in-95">
                <div className="flex justify-end mb-4">
                  <button 
                    onClick={() => setActiveSubTab(null)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold bg-slate-700/50 px-3 py-1.5 rounded-lg"
                  >
                    <ArrowLeft size={14} /> Back to Sections
                  </button>
                </div>
                <div className="text-center mb-10">
                  <Download className="mx-auto text-indigo-400 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2 text-slate-100">Hall Ticket Portal</h3>
                  <p className="text-slate-400">Select the appropriate portal to download your official examination permit.</p>
                </div>

                {type === ModuleType.CLASS_10 ? (
                  <div className="max-w-md mx-auto">
                    <button 
                      onClick={() => handleExternalRedirect(HALL_TICKET_LINK_10TH)}
                      className="w-full bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20"
                    >
                      Go to Official Download Portal <ExternalLink size={20} />
                    </button>
                    <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold text-center">Redirecting to bse.ap.gov.in</p>
                  </div>
                ) : type === ModuleType.INTER ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                      <h4 className="font-bold text-indigo-300 mb-4 flex items-center gap-2">
                        <span className="bg-indigo-600 text-white w-6 h-6 rounded text-[10px] flex items-center justify-center font-bold">I</span>
                        Inter 1st Year Hall Ticket
                      </h4>
                      <div className="space-y-3">
                        <button 
                          onClick={() => handleExternalRedirect(HALL_TICKET_LINKS_INTER['1st_YEAR_REGULAR'])}
                          className="w-full bg-slate-800 text-indigo-400 border border-indigo-500/30 px-4 py-3 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Regular Exam <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={() => handleExternalRedirect(HALL_TICKET_LINKS_INTER['1st_YEAR_SUPPLY'])}
                          className="w-full bg-slate-800 text-indigo-400 border border-indigo-500/30 px-4 py-3 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Supplementary Exam <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                      <h4 className="font-bold text-purple-300 mb-4 flex items-center gap-2">
                        <span className="bg-purple-600 text-white w-6 h-6 rounded text-[10px] flex items-center justify-center font-bold">II</span>
                        Inter 2nd Year Hall Ticket
                      </h4>
                      <div className="space-y-3">
                        <button 
                          onClick={() => handleExternalRedirect(HALL_TICKET_LINKS_INTER['2nd_YEAR_REGULAR'])}
                          className="w-full bg-slate-800 text-purple-400 border border-purple-500/30 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Regular Exam <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={() => handleExternalRedirect(HALL_TICKET_LINKS_INTER['2nd_YEAR_SUPPLY'])}
                          className="w-full bg-slate-800 text-purple-400 border border-purple-500/30 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Supplementary Exam <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-slate-500">Official portal link will be updated shortly for this grade.</p>
                  </div>
                )}
              </div>
            )}

            {activeSubTab === 'marks' && (
              <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 animate-in zoom-in-95">
                <div className="flex justify-end mb-4">
                  <button 
                    onClick={() => setActiveSubTab(null)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold bg-slate-700/50 px-3 py-1.5 rounded-lg"
                  >
                    <ArrowLeft size={14} /> Back to Sections
                  </button>
                </div>
                <div className="text-center mb-10">
                  <ScrollText className="mx-auto text-purple-400 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2 text-slate-100">Mark List & Results Portal</h3>
                  <p className="text-slate-400">Access your official results and download your mark sheets from the specialized servers below.</p>
                </div>

                {type === ModuleType.CLASS_10 ? (
                  <div className="max-w-md mx-auto">
                    <button 
                      onClick={() => handleExternalRedirect(MARK_LIST_LINK_10TH)}
                      className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/20"
                    >
                      Go to Results Portal <ExternalLink size={20} />
                    </button>
                    <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold text-center">Redirecting to BSE Official Results</p>
                  </div>
                ) : type === ModuleType.INTER ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-purple-900/20 p-6 rounded-2xl border border-purple-500/20">
                      <h4 className="font-bold text-purple-300 mb-4 flex items-center gap-2">
                        <span className="bg-purple-600 text-white w-6 h-6 rounded text-[10px] flex items-center justify-center font-bold">I</span>
                        Inter 1st Year Results
                      </h4>
                      <div className="space-y-3">
                        <button 
                          onClick={() => handleExternalRedirect(MARK_LIST_LINKS_INTER['1st_YEAR_REGULAR'])}
                          className="w-full bg-slate-800 text-purple-400 border border-purple-500/30 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Regular Mark List <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={() => handleExternalRedirect(MARK_LIST_LINKS_INTER['1st_YEAR_SUPPLY'])}
                          className="w-full bg-slate-800 text-purple-400 border border-purple-500/30 px-4 py-3 rounded-lg text-sm font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Supply Mark List <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-indigo-900/20 p-6 rounded-2xl border border-indigo-500/20">
                      <h4 className="font-bold text-indigo-300 mb-4 flex items-center gap-2">
                        <span className="bg-indigo-600 text-white w-6 h-6 rounded text-[10px] flex items-center justify-center font-bold">II</span>
                        Inter 2nd Year Results
                      </h4>
                      <div className="space-y-3">
                        <button 
                          onClick={() => handleExternalRedirect(MARK_LIST_LINKS_INTER['2nd_YEAR_REGULAR'])}
                          className="w-full bg-slate-800 text-indigo-400 border border-indigo-500/30 px-4 py-3 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Regular Mark List <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={() => handleExternalRedirect(MARK_LIST_LINKS_INTER['2nd_YEAR_SUPPLY'])}
                          className="w-full bg-slate-800 text-indigo-400 border border-indigo-500/30 px-4 py-3 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-between group"
                        >
                          Supply Mark List <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-slate-500">Official results portal link will be updated shortly for this grade.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}

      {hasBranches && !selectedCourse && (
        <>
          {renderGeneralSubModules()}
          <div className="mt-8">
            {activeSubTab === 'tutorials' && renderBranchGrid(isBTech ? BTECH_COURSES : (isMTech ? MTECH_BRANCHES : (isMBA ? MBA_YEARS : COMPETITIVE_EXAM_CATEGORIES)))}
            {!activeSubTab && renderBranchGrid(isBTech ? BTECH_COURSES : (isMTech ? MTECH_BRANCHES : (isMBA ? MBA_YEARS : COMPETITIVE_EXAM_CATEGORIES)))}
          </div>
        </>
      )}

      {hasBranches && selectedCourse && (
        <div className="space-y-10">
          <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
             <h3 className="text-2xl font-bold mb-2 text-white">{isMBA || isCompetitiveExams ? '' : 'Branch: '}{selectedCourse.name}</h3>
             <p className="opacity-80 text-sm text-indigo-100">Comprehensive {isMBA ? 'year' : (isCompetitiveExams ? 'exam' : 'semester')}-wise materials and expert tutorials.</p>
             <FileSearch className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 rotate-12" />
          </div>
          
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setActiveSubTab('tutorials')}
              className="px-6 py-3 rounded-xl font-bold transition-all bg-indigo-600 text-white shadow-lg shadow-indigo-900/20"
            >
              Subject Tutorials
            </button>
          </div>

          {renderSubjectTutorials(selectedCourse.id)}
        </div>
      )}

      {type === ModuleType.CERTIFICATIONS && renderCertifications()}
      {notification && (
        <div className="fixed bottom-4 right-4 z-[100] animate-in slide-in-from-right-4 fade-in duration-300">
          <div className={`px-6 py-3 rounded-xl shadow-lg border flex items-center gap-3 ${
            notification.type === 'error' 
              ? 'bg-red-900/90 border-red-500 text-red-100' 
              : 'bg-slate-800/90 border-slate-700 text-slate-100'
          }`}>
            <div className={`w-2 h-2 rounded-full ${notification.type === 'error' ? 'bg-red-500' : 'bg-indigo-500'}`} />
            <p className="text-sm font-medium">{notification.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleView;
