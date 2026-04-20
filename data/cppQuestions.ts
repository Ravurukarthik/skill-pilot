import { Question } from '../types';

export const CPP_QUESTIONS: Question[] = [
  // SECTION 1: BASICS (1–20)
  {
    id: 1,
    type: 'theory',
    title: '1. C++ Introduction',
    description: 'C++ is an extension of?',
    options: ['Java', 'C language', 'Python', 'Pascal'],
    correctAnswers: [1],
    hints: ['It was originally "C with Classes".']
  },
  {
    id: 2,
    type: 'coding',
    title: '2. Hello World',
    description: 'Write a program to print "Hello C++".',
    initialCode: '#include <iostream>\nusing namespace std;\nint main() {\n  \n  return 0;\n}',
    testCases: [
      { description: 'Print correctly', expectedOutput: 'Hello C++' }
    ],
    hints: ['cout << "Hello C++";']
  },
  {
    id: 3,
    type: 'blanks',
    title: '3. Standard Input',
    description: 'The object for input is [cin].',
    initialCode: '[cin] >> x;',
    correctAnswers: ['cin'],
    hints: ['Companion to cout.']
  },
  {
    id: 4,
    type: 'theory',
    title: '4. Boolean',
    description: 'Which is a valid boolean in C++?',
    options: ['true', '1', 'false', 'All of above'],
    correctAnswers: [3],
    hints: ['Non-zero integers also count as true.']
  },
  {
    id: 5,
    type: 'coding',
    title: '5. Addition',
    description: 'Read two numbers and print sum.',
    initialCode: 'int a, b; cin >> a >> b;\ncout << ',
    testCases: [
      { description: 'Math sum', expectedOutput: /cout\s*<<\s*a\s*\+\s*b/ }
    ],
    hints: ['a + b']
  },
  {
    id: 10,
    type: 'theory',
    title: '10. Namespace',
    description: 'What does "using namespace std" do?',
    options: ['Includes iostream', 'Removes need for std:: prefix', 'Speeds up execution', 'Makes code private'],
    correctAnswers: [1],
    hints: ['Standard library names are in the std namespace.']
  },
  {
    id: 20,
    type: 'coding',
    title: '20. Constants',
    description: 'Declare const int x = 10.',
    initialCode: 'const int x = 10; cout << x;',
    testCases: [
      { description: 'Const check', expectedOutput: '10' }
    ],
    hints: ['Read-only variable.']
  },

  // SECTION 2: CONTROL FLOW (21–50)
  {
    id: 21,
    type: 'theory',
    title: '21. Comparison',
    description: 'Check if x is not equal to 5?',
    options: ['x != 5', 'x <> 5', 'x not 5', 'x ~= 5'],
    correctAnswers: [0],
    hints: ['Use exclamation mark and equals.']
  },
  {
    id: 25,
    type: 'coding',
    title: '25. For loop',
    description: 'Print numbers 0 to 2.',
    initialCode: 'for(int i=0; i<3; i++) cout << i << " ";',
    testCases: [
      { description: 'Iteration check', expectedOutput: '0 1 2 ' }
    ],
    hints: ['Start at 0.']
  },
  {
    id: 35,
    type: 'coding',
    title: '35. Max of two',
    description: 'Find max of 5, 10.',
    initialCode: 'int a=5, b=10; cout << (a>b ? a : b);',
    testCases: [
      { description: 'Conditional Op', expectedOutput: '10' }
    ],
    hints: ['Use ternary operator.']
  },

  // SECTION 3: ARRAYS & STRINGS (51–80)
  {
    id: 51,
    type: 'theory',
    title: '51. Array Index',
    description: 'Index of last item in arr[5]?',
    options: ['5', '4', '0', '6'],
    correctAnswers: [1],
    hints: ['Zero-based indexing.']
  },
  {
    id: 60,
    type: 'coding',
    title: '60. String input',
    description: 'Read a word into string s.',
    initialCode: '#include <string>\nstring s; cin >> s; cout << s;',
    testCases: [
      { description: 'String check', expectedOutput: /string\s+s/ }
    ],
    hints: ['Use cin for single words.']
  },
  {
    id: 70,
    type: 'blanks',
    title: '70. Size of array',
    description: 'The [sizeof] operator returns bytes of object.',
    initialCode: 'int n = [sizeof](arr) / [sizeof](arr[0]);',
    correctAnswers: ['sizeof', 'sizeof'],
    hints: ['Calculate count from total bytes.']
  },

  // SECTION 4: FUNCTIONS (81–110)
  {
    id: 81,
    type: 'theory',
    title: '81. Void return',
    description: 'What does void mean?',
    options: ['Returns 0', 'Returns nothing', 'Returns int', 'Error'],
    correctAnswers: [1],
    hints: ['Used when function only performs action.']
  },
  {
    id: 90,
    type: 'coding',
    title: '90. Reference argument',
    description: 'Pass x by reference.',
    initialCode: 'void inc(int &n) { n++; }\nint x = 5; inc(x); cout << x;',
    testCases: [
      { description: 'Reference check', expectedOutput: '6' }
    ],
    hints: ['Use ampersand &.']
  },

  // SECTION 5: POINTERS (111–130)
  {
    id: 111,
    type: 'theory',
    title: '111. Address operator',
    description: 'Which symbol gets address of x?',
    options: ['*', '&', '@', '$'],
    correctAnswers: [1],
    hints: ['Ampersand.']
  },
  {
    id: 120,
    type: 'blanks',
    title: '120. Pointer dereference',
    description: 'Use [*] to get value at address.',
    initialCode: 'int val = [*]ptr;',
    correctAnswers: ['*'],
    hints: ['Asterisk.']
  },

  // SECTION 6: CLASSES & OBJECTS (131–150)
  {
    id: 131,
    type: 'theory',
    title: '131. Access Specifier',
    description: 'Default specifier for class members?',
    options: ['public', 'private', 'protected', 'default'],
    correctAnswers: [1],
    hints: ['Members are hidden by default in C++ classes.']
  },
  {
    id: 140,
    type: 'coding',
    title: '140. Simple Class',
    description: 'Create class Box.',
    initialCode: 'class Box { public: int s=1; };\nBox b; cout << b.s;',
    testCases: [
      { description: 'Class check', expectedOutput: '1' }
    ],
    hints: ['Must use public label.']
  },
  {
    id: 150,
    type: 'theory',
    title: '150. Constructor',
    description: 'Called when?',
    options: ['Object deleted', 'Object created', 'Inherited', 'Class defined'],
    correctAnswers: [1],
    hints: ['Initializes the object.']
  }
];
// ... more will be filled if requested.
