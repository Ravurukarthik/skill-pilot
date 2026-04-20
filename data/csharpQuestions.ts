import { Question } from '../types';

export const CSHARP_QUESTIONS: Question[] = [
  // SECTION 1: BASICS (1–20)
  {
    id: 1,
    type: 'theory',
    title: '1. What is C#?',
    description: 'C# was developed by?',
    options: ['Microsoft', 'Google', 'Sun Microsystems', 'Apple'],
    correctAnswers: [0],
    hints: ['Think about the .NET ecosystem.']
  },
  {
    id: 2,
    type: 'coding',
    title: '2. Hello World',
    description: 'Write a program to print "Hello C#".',
    initialCode: 'using System;\nclass Program {\n  static void Main() {\n    \n  }\n}',
    testCases: [
      { description: 'Print correctly', expectedOutput: 'Hello C#' }
    ],
    hints: ['Console.WriteLine("Hello C#");']
  },
  {
    id: 3,
    type: 'blanks',
    title: '3. Data Types',
    description: 'The keyword for an integer in C# is [int].',
    initialCode: '[int] x = 5;',
    correctAnswers: ['int'],
    hints: ['Standard integer type.']
  },
  {
    id: 10,
    type: 'theory',
    title: '10. Namespace',
    description: 'Keyword to include namespaces?',
    options: ['include', 'import', 'using', 'using namespace'],
    correctAnswers: [2],
    hints: ['At the top of the file.']
  },
  {
    id: 50,
    type: 'coding',
    title: '50. For Loop',
    description: 'Print 1, 2.',
    initialCode: 'for(int i=1; i<3; i++) Console.WriteLine(i);',
    testCases: [
      { description: 'Iteration', expectedOutput: '1\n2' }
    ],
    hints: ['Typical for syntax.']
  },
  {
    id: 100,
    type: 'theory',
    title: '100. Classes',
    description: 'Keyword for class blueprint?',
    options: ['class', 'struct', 'interface', 'object'],
    correctAnswers: [0],
    hints: ['Blueprint for objects.']
  },
  {
    id: 150,
    type: 'theory',
    title: '150. LINQ',
    description: 'What does LINQ stand for?',
    options: ['Language Integrated Query', 'List Integrated Net Query', 'Logic Internal Networking Query', 'Local Interactive Query'],
    correctAnswers: [0],
    hints: ['Querying data directly in C#.']
  }
];
