
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { 
  Terminal, X, CheckCircle2, AlertCircle, Play, Undo2, Copy, BookOpen, 
  ChevronDown, ChevronRight, RotateCcw, ChevronLeft, Layout, Settings, 
  HelpCircle, Clock, Maximize2, Monitor, Code2, ListChecks, ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, TestCase, QuestionType, User } from '../types';
import { C_QUESTIONS as QUESTIONS } from '../data/cQuestions';
import { db } from '../services/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

interface Props {
  onBack: () => void;
  user: User;
  questions: Question[];
  language: string;
}

export const CodingSession: React.FC<Props> = ({ onBack, user, questions, language }) => {
  const [viewMode, setViewMode] = useState<'list' | 'session'>('list');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [code, setCode] = useState(questions[0]?.initialCode || "");
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [blankAnswers, setBlankAnswers] = useState<string[]>([]);
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [expandedSection, setExpandedSection] = useState<'tests' | 'hints' | null>(null);
  const [timer, setTimer] = useState(251); // seconds

  const currentQuestion = questions[currentIdx];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (questions[currentIdx]) {
      setCode(questions[currentIdx].initialCode || "");
      setSelectedOptions([]);
      const rawCorrect = questions[currentIdx].correctAnswers;
      const correctArr = Array.isArray(rawCorrect) ? rawCorrect : (rawCorrect !== undefined ? [rawCorrect] : []);
      setBlankAnswers(new Array(correctArr.length).fill(""));
      setResults(null);
      setIsOutputVisible(false);
      setExpandedSection(null);
    }
  }, [currentIdx, questions]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionToggle = (idx: number) => {
    setSelectedOptions(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const markAsComplete = async (questionId: number) => {
    if (!user) return;
    
    // Check if already completed to avoid redundant writes
    const completed = user.completedChallenges?.[language] || [];
    if (completed.includes(questionId)) return;

    try {
      const userDocRef = doc(db, 'users', user.id);
      await updateDoc(userDocRef, {
        [`completedChallenges.${language}`]: arrayUnion(questionId)
      });
    } catch (err) {
      console.error('Failed to mark challenge as complete:', err);
    }
  };

  const handleSubmit = async () => {
    let isCorrect = false;
    let message = "";
    let testCaseResults: any[] = [];

    const rawCorrectAnswers = currentQuestion.correctAnswers;
    const correctAnswersArr = Array.isArray(rawCorrectAnswers) 
      ? rawCorrectAnswers 
      : (rawCorrectAnswers !== undefined ? [rawCorrectAnswers] : []);

    if (currentQuestion.type === 'theory') {
      isCorrect = 
        selectedOptions.length === correctAnswersArr.length &&
        selectedOptions.every(val => correctAnswersArr.includes(val));
      
      message = isCorrect ? "Correct! You understand the basics." : "Not quite. Check the options again.";
      testCaseResults = currentQuestion.options?.map((opt, i) => {
         const expected = correctAnswersArr.includes(i) ? "Selected" : "Not Selected";
         const actual = selectedOptions.includes(i) ? "Selected" : "Not Selected";
         return {
           description: opt.substring(0, 30) + '...',
           passed: correctAnswersArr.includes(i) ? selectedOptions.includes(i) : !selectedOptions.includes(i),
           expected,
           actual
         };
      }) || [];
    } else if (currentQuestion.type === 'blanks') {
      isCorrect = blankAnswers.length === correctAnswersArr.length && 
                 blankAnswers.every((ans, i) => 
                   ans.trim().toLowerCase() === String(correctAnswersArr[i] || "").toLowerCase()
                 );
      message = isCorrect ? "Excellent! You filled the blanks correctly." : "Wait, some answers are incorrect. Try again.";
      testCaseResults = correctAnswersArr.map((expected: any, i: number) => ({
        description: `Blank ${i+1} check`,
        passed: (blankAnswers[i] || "").trim().toLowerCase() === String(expected || "").toLowerCase(),
        expected: String(expected),
        actual: blankAnswers[i] || "Empty"
      }));
    } else {
      testCaseResults = currentQuestion.testCases?.map(tc => {
        const isPass = typeof tc.expectedOutput === 'string' 
          ? code.includes(tc.expectedOutput)
          : tc.expectedOutput.test(code);
        
        // Simulating actual output by looking for search patterns or just code presence
        let actualVal = "Code requirements not met";
        if (isPass) {
          actualVal = typeof tc.expectedOutput === 'string' ? tc.expectedOutput : "Regex matched";
        } else {
          // If it fails, we show a snippet or the specific missing requirement
          actualVal = "Logic missing or incorrect syntax";
        }

        return { 
          ...tc, 
          passed: isPass,
          expected: typeof tc.expectedOutput === 'string' ? tc.expectedOutput : tc.expectedOutput.toString(),
          actual: actualVal
        };
      }) || [];

      isCorrect = testCaseResults.every(r => r.passed);
      message = isCorrect ? "Congratulations! Program satisfies all constraints." : "Logic requirements not met.";
    }

    setResults({
      success: isCorrect,
      message: message,
      testCaseResults
    });

    if (isCorrect) {
      await markAsComplete(currentQuestion.id);
    }

    setIsOutputVisible(true);
  };

  const handleBack = () => {
    if (viewMode === 'session') {
      setViewMode('list');
    } else {
      onBack();
    }
  };

  const handleSelectQuestion = (idx: number) => {
    setCurrentIdx(idx);
    setViewMode('session');
    setCode(questions[idx].initialCode || "");
  };

  const renderQuestionList = () => {
    const completedIds = user.completedChallenges?.[language] || [];
    const progress = Math.round((completedIds.length / questions.length) * 100);

    return (
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#0f1115]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
                <Terminal className="text-emerald-500" size={32} />
                {language} Language Challenges
              </h2>
              <p className="text-slate-400 font-medium">Select a challenge to start your interactive practice session.</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Progress</span>
                  <span className="text-xl font-black text-white">{progress}%</span>
                </div>
                <div className="w-32 h-2 bg-emerald-500/10 rounded-full overflow-hidden border border-emerald-500/20">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                <Code2 size={12} />
                {completedIds.length} / {questions.length} Solved
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questions.map((q, idx) => {
               // Extract number and topic from title "1.2.3. Topic"
               const parts = q.title.split('. ');
               const qNumber = parts[0];
               const qTopic = parts.length > 1 ? parts[1] : q.title;
               const isDone = completedIds.includes(q.id);

               return (
                <button
                  key={q.id}
                  onClick={() => handleSelectQuestion(idx)}
                  className={`bg-[#1a1c1e] border p-6 rounded-2xl transition-all group text-left flex flex-col h-full shadow-lg relative overflow-hidden ${
                    isDone ? 'border-emerald-500/30' : 'border-white/5 hover:border-emerald-500/50 hover:bg-white/5'
                  }`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-12 -mt-12 transition-colors ${
                    isDone ? 'bg-emerald-500/10' : 'bg-emerald-500/5 group-hover:bg-emerald-500/10'
                  }`} />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/5 px-2 py-1 rounded text-[10px] font-black font-mono text-slate-500 uppercase tracking-widest border border-white/5 group-hover:text-emerald-400 group-hover:border-emerald-400/20 transition-all">
                      {q.type}
                    </div>
                    {isDone && (
                      <div className="bg-emerald-500/20 text-emerald-400 p-1 rounded-full border border-emerald-500/20 shadow-lg shadow-emerald-500/20">
                        <CheckCircle2 size={14} />
                      </div>
                    )}
                  </div>

                  <div className="mb-2">
                    <span className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 block">Challenge {qNumber}</span>
                    <h3 className={`text-lg font-bold transition-colors line-clamp-2 ${isDone ? 'text-emerald-400' : 'text-slate-100 group-hover:text-emerald-400'}`}>{qTopic}</h3>
                  </div>

                  <p className="text-slate-500 text-xs mb-6 line-clamp-3 leading-relaxed flex-1 italic">
                    {q.description.split('\n')[0]}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-1">
                      <HelpCircle size={12} /> {q.hints?.length || 0} HINTS
                    </span>
                    <div className="flex items-center gap-1 text-emerald-500 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                      START <ChevronRight size={14} />
                    </div>
                  </div>
                </button>
               );
            })}
          </div>
        </div>
      </div>
    );
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="flex flex-col h-full bg-[#1a1c1e] text-slate-300 font-sans select-none"
        onCopy={(e) => e.preventDefault()}
        onPaste={(e) => e.preventDefault()}
        onCut={(e) => e.preventDefault()}
      >
        <div className="bg-[#0b0c0d] h-12 flex items-center justify-between px-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Back to Modules</span>
            </button>
          </div>
          <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/10 text-emerald-400 font-mono text-xs">
            Interactive Learning Mode
          </div>
          <button onClick={onBack} className="flex items-center gap-2 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all border border-red-500/20">
            Exit
          </button>
        </div>
        {renderQuestionList()}
      </div>
    );
  }

  return (
    <div 
      className="flex flex-col h-full bg-[#1a1c1e] text-slate-300 font-sans select-none animate-in fade-in zoom-in-95 duration-500"
      onCopy={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
    >
      {/* CodeTantra style Header */}
      <div className="bg-[#0b0c0d] h-12 flex items-center justify-between px-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <button onClick={() => setViewMode('list')} className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors group" title="Back to Questons">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-2 text-white font-bold text-sm">
             <div className="bg-emerald-600 rounded p-1">
                <Layout size={14} className="text-white" />
             </div>
             <span>{currentQuestion.title}</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/10 text-emerald-400 font-mono text-xs">
            <Clock size={12} />
            {formatTime(timer)}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setViewMode('list')} className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors" title="Question List">
            <RotateCcw size={16} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white">
            <Maximize2 size={16} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white">
            <Settings size={16} />
          </button>
          <button onClick={() => setViewMode('list')} className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all ml-2">
            Finish
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Question/Instructions */}
        <div className="w-1/2 flex flex-col border-r border-white/5 bg-[#141517]">
          <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
            <div className="mb-10">
               <div className="whitespace-pre-wrap leading-relaxed text-slate-200 text-lg font-medium bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner">
                 {currentQuestion.description}
               </div>
            </div>

            <div className="space-y-4">
               {/* Accordion: Sample Test Cases */}
               <div className="border border-white/5 rounded-xl overflow-hidden bg-black/20">
                  <button 
                    onClick={() => setExpandedSection(expandedSection === 'tests' ? null : 'tests')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-sm font-bold"
                  >
                    <span>Sample Test Cases</span>
                    {expandedSection === 'tests' ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'tests' && (
                      <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: 'auto' }} 
                        exit={{ height: 0 }} 
                        className="overflow-hidden border-t border-white/5"
                      >
                         <div className="p-4 space-y-3">
                            {currentQuestion.testCases?.map(tc => (
                              <div key={tc.id} className="flex items-center gap-3 text-xs text-slate-500">
                                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                                 {tc.description}
                              </div>
                            ))}
                            {!currentQuestion.testCases && <div className="text-xs text-slate-500 italic">No public test cases for this task.</div>}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>

               {/* Accordion: Hints */}
               <div className="border border-white/5 rounded-xl overflow-hidden bg-black/20">
                  <button 
                    onClick={() => setExpandedSection(expandedSection === 'hints' ? null : 'hints')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-sm font-bold"
                  >
                    <span>Question Hints</span>
                    {expandedSection === 'hints' ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'hints' && (
                      <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: 'auto' }} 
                        exit={{ height: 0 }} 
                        className="overflow-hidden border-t border-white/5"
                      >
                         <div className="p-4 space-y-3">
                            {currentQuestion.hints?.map((hint, i) => (
                              <div key={i} className="flex items-start gap-3 text-xs text-amber-500/60 leading-relaxed">
                                 <HelpCircle size={14} className="mt-0.5 flex-shrink-0" />
                                 {hint}
                              </div>
                            ))}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interaction (Editor or Quiz) */}
        <div className="w-1/2 flex flex-col bg-[#0b0c0d]">
           {currentQuestion.type === 'coding' ? (
             <div className="flex-1 flex flex-col">
                <div className="h-10 bg-[#1e2023] border-b border-black/40 flex items-center justify-between px-4">
                  <div className="flex items-center gap-4 h-full">
                    <div className="flex items-center gap-2 text-emerald-400 border-b-2 border-emerald-500 h-full px-2">
                       <Monitor size={14} />
                       <span className="text-xs font-bold uppercase tracking-wider">Sample.c</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-slate-500 hover:text-white transition-colors">
                       <Play size={14} />
                    </button>
                    <button 
                       onClick={handleSubmit}
                       className="bg-[#00c853] hover:bg-[#00e676] text-white px-4 py-1 rounded-md text-[11px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center gap-1"
                    >
                       <Code2 size={12} />
                       Submit
                    </button>
                  </div>
                </div>
                <div className="flex-1 relative flex">
                  <div className="w-10 bg-[#1e2023] border-r border-black flex flex-col items-center pt-6 text-[10px] text-slate-600 font-mono gap-4 select-none">
                     {Array.from({length: 15}).map((_, i) => <div key={i}>{i+1}</div>)}
                  </div>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onPaste={(e) => e.preventDefault()}
                    onCopy={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    spellCheck={false}
                    className="flex-1 bg-transparent p-6 outline-none resize-none font-mono text-sm text-emerald-100 placeholder:text-slate-800 custom-scrollbar"
                    placeholder="// Type your code here..."
                  />
                </div>
             </div>
           ) : currentQuestion.type === 'blanks' ? (
             <div className="flex-1 flex flex-col p-10 overflow-y-auto custom-scrollbar">
                <div className="bg-[#1e2023] border border-white/5 rounded-3xl p-8 space-y-8">
                   <div className="flex items-center gap-2 mb-4">
                      <Terminal size={20} className="text-emerald-500" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest">Complete the statement</h4>
                   </div>
                   <div className="bg-black/20 p-6 rounded-2xl border border-white/5 font-mono text-lg text-emerald-400 flex flex-wrap items-center gap-2">
                       {currentQuestion.initialCode?.split(']').map((part, i, arr) => {
                          const [text, _] = part.split('[');
                          return (
                            <React.Fragment key={i}>
                               <span>{text}</span>
                               {i < arr.length - 1 && (
                                 <input
                                   type="text"
                                   value={blankAnswers[i] || ""}
                                   onPaste={(e) => e.preventDefault()}
                                   onCopy={(e) => e.preventDefault()}
                                   onCut={(e) => e.preventDefault()}
                                   onChange={(e) => {
                                      const newAns = [...blankAnswers];
                                      newAns[i] = e.target.value;
                                      setBlankAnswers(newAns);
                                   }}
                                   className="bg-slate-800 border-b-2 border-emerald-500/50 outline-none px-2 py-1 flex-shrink-0 min-w-[100px] text-white focus:border-emerald-500 transition-colors"
                                 />
                               )}
                            </React.Fragment>
                          );
                       })}
                   </div>
                </div>
             </div>
           ) : (
             <div className="flex-1 flex flex-col p-10 overflow-y-auto custom-scrollbar">
                <div className="bg-[#1e2023] border border-white/5 rounded-3xl p-8 space-y-6">
                   <div className="flex items-center gap-2 mb-4">
                      <ListChecks size={20} className="text-emerald-500" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest">Options Selection</h4>
                   </div>
                   {currentQuestion.options?.map((option, i) => (
                     <button
                        key={i}
                        onClick={() => handleOptionToggle(i)}
                        className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all text-left group ${
                          selectedOptions.includes(i) 
                            ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-100' 
                            : 'bg-black/20 border-white/5 text-slate-400 hover:border-white/10'
                        }`}
                     >
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          selectedOptions.includes(i) ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-700 group-hover:border-slate-600'
                        }`}>
                           {selectedOptions.includes(i) && <CheckCircle2 size={16} />}
                        </div>
                        <span className="text-sm font-medium leading-relaxed">{option}</span>
                     </button>
                   ))}
                </div>
             </div>
           )}

           {/* Console / Bottom Panel */}
           <div className="h-10 bg-[#1e2023] border-t border-black px-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-6">
                 <button className="hover:text-white transition-colors flex items-center gap-2 border-b-2 border-emerald-500 text-emerald-400 h-10 px-2 mt-[2px]">
                   Terminal
                 </button>
                 <button 
                  onClick={() => setIsOutputVisible(!isOutputVisible)}
                  className="hover:text-white transition-colors flex items-center gap-2 h-10 px-2"
                 >
                   Test cases
                 </button>
              </div>
              <div className="flex items-center gap-4">
                 <span>Ln 1, Col 1</span>
                 <span>Spaces: 4</span>
                 <span>UTF-8</span>
              </div>
           </div>
        </div>
      </div>

      {/* CodeTantra style Footer Navigation */}
      <div className="h-14 bg-[#0b0c0d] border-t border-white/5 flex items-center justify-end px-6 gap-3">
         <button 
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(prev => prev - 1)}
          className="flex items-center gap-2 bg-[#2d3136] hover:bg-[#383d42] disabled:opacity-30 disabled:cursor-not-allowed text-white px-5 py-2 rounded-lg text-xs font-bold transition-all border border-white/5"
         >
            <ChevronLeft size={16} />
            Prev
         </button>
         <button 
          onClick={() => { setCode(questions[currentIdx].initialCode || ""); setSelectedOptions([]); }}
          className="bg-[#2d3136] hover:bg-[#383d42] text-white px-5 py-2 rounded-lg text-xs font-bold transition-all border border-white/5"
         >
            Reset
         </button>
         <button 
          onClick={handleSubmit}
          className="bg-[#00c853] hover:bg-[#00e676] text-white px-8 py-2 rounded-lg text-xs font-bold transition-all shadow-lg shadow-emerald-500/20"
         >
            Submit
         </button>
         <button 
          disabled={currentIdx === questions.length - 1}
          onClick={() => setCurrentIdx(prev => prev + 1)}
          className="flex items-center gap-2 bg-[#2d3136] hover:bg-[#383d42] disabled:opacity-30 disabled:cursor-not-allowed text-white px-5 py-2 rounded-lg text-xs font-bold transition-all border border-white/5"
         >
            Next
            <ChevronRight size={16} />
         </button>
      </div>

      {/* Result Bottom Popup */}
      <AnimatePresence>
        {isOutputVisible && (
          <motion.div 
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 z-[200] bg-[#1e2023] border-t-2 border-emerald-500 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col max-h-[70%]"
          >
             {/* Header */}
             <div className="p-6 border-b border-black/40 flex items-center justify-between bg-black/20">
                <div className="flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${results?.success ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-500'}`}>
                      {results?.success ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                   </div>
                   <div>
                      <h3 className="font-bold text-base flex items-center gap-2">
                        {results?.success ? 'Submission Successful' : 'Submission Failed'}
                        <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase ${results?.success ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                          {results?.success ? 'Passed' : 'Error'}
                        </span>
                      </h3>
                      <p className="text-[10px] text-slate-500 font-mono">Timestamp: {new Date().toLocaleTimeString()}</p>
                   </div>
                </div>
                <button onClick={() => setIsOutputVisible(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors group">
                   <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
             </div>

             <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                <div className={`p-4 rounded-xl border ${results?.success ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-100' : 'bg-red-500/5 border-red-500/20 text-red-100'} text-sm leading-relaxed font-mono`}>
                   {results?.message}
                </div>

                <div className="space-y-3">
                   <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Execution Details & Test Cases</h4>
                   <div className="bg-black/30 rounded-xl border border-white/5 overflow-hidden">
                      {results?.testCaseResults.map((tc: any, i: number) => (
                        <div key={i} className={`flex flex-col p-4 border-b border-white/5 last:border-0 ${tc.passed ? 'bg-emerald-500/5' : 'bg-red-500/5'}`}>
                           <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3 text-xs font-mono">
                                 <div className={`w-5 h-5 rounded-md flex items-center justify-center ${tc.passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                   {tc.passed ? <CheckCircle2 size={12} /> : <X size={12} />}
                                 </div>
                                 <span className={tc.passed ? 'text-emerald-100 font-bold' : 'text-slate-300'}>{tc.description}</span>
                              </div>
                              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${tc.passed ? 'text-emerald-500 bg-emerald-500/10' : 'text-red-500 bg-red-500/10'}`}>
                                {tc.passed ? 'Passed' : 'Failed'}
                              </span>
                           </div>
                           
                           <div className="grid grid-cols-2 gap-4 mt-2">
                              <div className="space-y-1">
                                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Expected Output</span>
                                 <div className="bg-black/40 p-2 rounded border border-white/5 text-[11px] font-mono text-emerald-400/70 truncate" title={tc.expected}>
                                    {tc.expected}
                                 </div>
                              </div>
                              <div className="space-y-1">
                                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Actual Result</span>
                                 <div className={`p-2 rounded border border-white/5 text-[11px] font-mono truncate ${tc.passed ? 'bg-emerald-500/10 text-emerald-300' : 'bg-red-900/20 text-red-400'}`} title={tc.actual}>
                                    {tc.actual}
                                 </div>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {results?.success && currentIdx < questions.length - 1 && (
                  <button 
                    onClick={() => { setCurrentIdx(prev => prev + 1); setIsOutputVisible(false); }}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Next Challenge <ChevronRight size={18} />
                  </button>
                )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
