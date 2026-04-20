
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, X, CheckCircle2, AlertCircle, Play, Undo2, Copy, BookOpen, 
  ChevronDown, ChevronRight, RotateCcw, ChevronLeft, Layout, Settings, 
  HelpCircle, Clock, Maximize2, Monitor, Code2, ListChecks
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type QuestionType = 'coding' | 'theory' | 'blanks';

interface TestCase {
  id: number;
  input?: string;
  expectedOutput: string | RegExp;
  description: string;
}

interface Question {
  id: number;
  type: QuestionType;
  title: string;
  description: string;
  initialCode?: string;
  testCases?: TestCase[];
  options?: string[];
  correctAnswers?: any; // For blanks, it's an array of strings
  hints?: string[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'theory',
    title: "1.1.1. Introduction to a computer",
    description: "Computers are electronic devices that receive input, store or process the input as per user instructions, and provide output in the desired format.\n\nComputers have become an integral part of our lives.\n\nInput-Process-Output Model:\nSimple workflow in a computer is Input ---> Process ---> Output\n\nSelect all the correct statements from the list given:",
    options: [
      "Computers can perform easy and complex tasks repeatedly without committing errors.",
      "Computers are electrical devices",
      "Processing is the most important function performed by the computer"
    ],
    correctAnswers: [0, 2],
    hints: ["Re-read the block about Input-Process-Output model.", "Think about reliability of computers vs humans."]
  },
  {
    id: 2,
    type: 'coding',
    title: "1.2.1. Print Hello World",
    description: "Objective: Print the message 'Hello World' on the screen.\n\nWrite a C program that uses printf() to display 'Hello World'.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    // Type your code here\n    \n    return 0;\n}",
    hints: ["Use printf(\"Hello World\");"],
    testCases: [
      { id: 1, expectedOutput: /Hello World/, description: "Output check" },
      { id: 2, expectedOutput: /printf\s*\(\s*"Hello World"\s*\)/, description: "Printf syntax" }
    ]
  },
  {
    id: 3,
    type: 'coding',
    title: "1.2.2. Print Name",
    description: "Objective: Print the name 'Karthik' on the screen.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}",
    hints: ["Use printf(\"Karthik\");"],
    testCases: [
      { id: 1, expectedOutput: /Karthik/, description: "Output Karthik" }
    ]
  },
  {
    id: 4,
    type: 'coding',
    title: "1.2.3. Print Multiple Lines",
    description: "Objective: Print 'Line1' and 'Line2' on two separate lines.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}",
    hints: ["Use \\n for a new line."],
    testCases: [
      { id: 1, expectedOutput: /Line1\nLine2/, description: "Multi-line output" },
      { id: 2, expectedOutput: /\\n/, description: "New line character check" }
    ]
  },
  {
    id: 5,
    type: 'coding',
    title: "1.3.1. Add Two Numbers",
    description: "Objective: Declare two integers a=2 and b=3, and print their sum using the addition operator.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}",
    hints: ["int a=2, b=3;", "printf(\"%d\", a+b);"],
    testCases: [
      { id: 1, expectedOutput: /5/, description: "Result is 5" },
      { id: 2, expectedOutput: /\+/, description: "Addition operator used" }
    ]
  },
  {
    id: 6,
    type: 'coding',
    title: "1.3.2. Input and Print",
    description: "Objective: Read an integer input from the user and print it directly.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int a;\n    // Use scanf and printf\n    return 0;\n}",
    hints: ["Use scanf(\"%d\", &a);", "Use printf(\"%d\", a);"],
    testCases: [
      { id: 1, expectedOutput: /scanf/, description: "Uses scanf" },
      { id: 2, expectedOutput: /%d/, description: "Integer format specifier" },
      { id: 3, expectedOutput: /&[a-zA-Z]/, description: "Address operator usage" }
    ]
  },
  {
    id: 7,
    type: 'coding',
    title: "1.4.1. Area of Rectangle",
    description: "Objective: Read the length and breadth as input and calculate the area (Area = length * breadth).",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int l, b;\n    \n    return 0;\n}",
    hints: ["Read two numbers using scanf.", "Print l * b."],
    testCases: [
      { id: 1, expectedOutput: /scanf.*%.*%.*/, description: "Input two values" },
      { id: 2, expectedOutput: /\*/, description: "Multiplication operator" }
    ]
  },
  {
    id: 8,
    type: 'coding',
    title: "1.5.1. Swap Numbers",
    description: "Objective: Swap the values of two variables a=5 and b=10 using a third variable 't'.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int a=5, b=10, t;\n    \n    return 0;\n}",
    hints: ["t=a;", "a=b;", "b=t;"],
    testCases: [
      { id: 1, expectedOutput: /10 5/, description: "Output swapped values" },
      { id: 2, expectedOutput: /t\s*=\s*[ab]/, description: "Swap logic applied" }
    ]
  },
  {
    id: 9,
    type: 'coding',
    title: "1.6.1. Even or Odd",
    description: "Objective: Read a number and print 'Even' if it's even, or 'Odd' if it's odd.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n;\n    \n    return 0;\n}",
    hints: ["Use modulo operator %", "If n % 2 == 0 it is even."],
    testCases: [
      { id: 1, expectedOutput: /scanf/, description: "Input number" },
      { id: 2, expectedOutput: /%/, description: "Modulo operator" },
      { id: 3, expectedOutput: /(Even|Odd).*(Even|Odd)/, description: "Handles both paths" }
    ]
  }
];

interface Props {
  onBack: () => void;
}

export const CInteractiveSession: React.FC<Props> = ({ onBack }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [code, setCode] = useState(QUESTIONS[0].initialCode || "");
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [blankAnswers, setBlankAnswers] = useState<string[]>([]);
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [expandedSection, setExpandedSection] = useState<'tests' | 'hints' | null>(null);
  const [timer, setTimer] = useState(251); // seconds

  const currentQuestion = QUESTIONS[currentIdx];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCode(currentQuestion.initialCode || "");
    setSelectedOptions([]);
    setBlankAnswers(new Array(currentQuestion.correctAnswers?.length || 0).fill(""));
    setResults(null);
    setIsOutputVisible(false);
    setExpandedSection(null);
  }, [currentIdx]);

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

  const handleSubmit = () => {
    if (currentQuestion.type === 'theory') {
      const isCorrect = 
        selectedOptions.length === currentQuestion.correctAnswers?.length &&
        selectedOptions.every(val => currentQuestion.correctAnswers?.includes(val));
      
      setResults({
        success: isCorrect,
        message: isCorrect ? "Correct! You understand the basics." : "Not quite. Check the options again.",
        testCaseResults: currentQuestion.options?.map((opt, i) => ({
           description: opt.substring(0, 30) + '...',
           passed: currentQuestion.correctAnswers?.includes(i) ? selectedOptions.includes(i) : !selectedOptions.includes(i)
        }))
      });
    } else if (currentQuestion.type === 'blanks') {
      const isCorrect = blankAnswers.every((ans, i) => 
        ans.trim().toLowerCase() === currentQuestion.correctAnswers[i].toLowerCase()
      );
      setResults({
        success: isCorrect,
        message: isCorrect ? "Excellent! You filled the blanks correctly." : "Wait, some answers are incorrect. Try again.",
        testCaseResults: currentQuestion.correctAnswers.map((expected: string, i: number) => ({
          description: `Blank ${i+1} check`,
          passed: blankAnswers[i]?.trim().toLowerCase() === expected.toLowerCase()
        }))
      });
    } else {
      const testCaseResults = currentQuestion.testCases?.map(tc => {
        const isPass = typeof tc.expectedOutput === 'string' 
          ? code.includes(tc.expectedOutput)
          : tc.expectedOutput.test(code);
        return { ...tc, passed: isPass };
      }) || [];

      const allPassed = testCaseResults.every(r => r.passed);
      setResults({
        success: allPassed,
        message: allPassed ? "Congratulations! Program satisfies all constraints." : "Logic requirements not met.",
        testCaseResults
      });
    }
    setIsOutputVisible(true);
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1c1e] text-slate-300 font-sans select-none">
      {/* CodeTantra style Header */}
      <div className="bg-[#0b0c0d] h-12 flex items-center justify-between px-4 border-b border-white/5">
        <div className="flex items-center gap-4">
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
          <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors">
            <RotateCcw size={16} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white">
            <Maximize2 size={16} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white">
            <Settings size={16} />
          </button>
          <button onClick={onBack} className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all ml-2">
            Logout
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
          onClick={() => { setCode(QUESTIONS[currentIdx].initialCode || ""); setSelectedOptions([]); }}
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
          disabled={currentIdx === QUESTIONS.length - 1}
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
                        <div key={i} className={`flex items-center justify-between p-4 border-b border-white/5 last:border-0 ${tc.passed ? 'bg-emerald-500/5' : 'bg-red-500/5'}`}>
                           <div className="flex items-center gap-3 text-xs font-mono">
                              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${tc.passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                {tc.passed ? <CheckCircle2 size={12} /> : <X size={12} />}
                              </div>
                              <span className={tc.passed ? 'text-emerald-100' : 'text-slate-300'}>{tc.description}</span>
                           </div>
                           <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${tc.passed ? 'text-emerald-500' : 'text-red-500'}`}>
                             {tc.passed ? 'OK' : 'Error'}
                           </span>
                        </div>
                      ))}
                   </div>
                </div>

                {results?.success && currentIdx < QUESTIONS.length - 1 && (
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
