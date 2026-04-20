import { Question } from '../types';

export const JAVASCRIPT_QUESTIONS: Question[] = [
  // SECTION 1: BASICS (1–20)
  {
    id: 1,
    type: 'theory',
    title: '1. What is JavaScript?',
    description: 'JavaScript is primarily known as?',
    options: ['Strictly server-side language', 'The language of the web (Client-side and Server-side)', 'Low-level assembly language', 'Markup language'],
    correctAnswers: [1],
    hints: ['Think about where JS runs most commonly.']
  },
  {
    id: 2,
    type: 'coding',
    title: '2. Console Log',
    description: 'Print "Hello World" to the console.',
    initialCode: '// Write code here\n',
    testCases: [
      { description: 'Check output', expectedOutput: 'Hello World' }
    ],
    hints: ['Use console.log()']
  },
  {
    id: 3,
    type: 'blanks',
    title: '3. Variables',
    description: 'A modern way to declare variables that can change is [let].',
    initialCode: '[let] x = 10;',
    correctAnswers: ['let'],
    hints: ['Block-scoped variable keyword.']
  },
  {
    id: 4,
    type: 'theory',
    title: '4. Const vs Let',
    description: 'Which keyword is used for constants?',
    options: ['var', 'let', 'const', 'permanent'],
    correctAnswers: [2],
    hints: ['Short for constant.']
  },
  {
    id: 5,
    type: 'coding',
    title: '5. Addition',
    description: 'Print the sum of 5 and 5.',
    initialCode: 'console.log();',
    testCases: [
      { description: 'Math sum', expectedOutput: '10' }
    ],
    hints: ['5 + 5']
  },
  {
    id: 6,
    type: 'theory',
    title: '6. Data Types',
    description: 'Which of these is NOT a primitive type?',
    options: ['String', 'Number', 'Boolean', 'Object'],
    correctAnswers: [3],
    hints: ['Objects are complex types.']
  },
  {
    id: 7,
    type: 'coding',
    title: '7. typeof operator',
    description: 'Print the type of 42.',
    initialCode: 'console.log(typeof 42);',
    testCases: [
      { description: 'Type check', expectedOutput: 'number' }
    ],
    hints: ['Use typeof expression.']
  },
  {
    id: 8,
    type: 'blanks',
    title: '8. Boolean',
    description: 'The two boolean values in JS are [true] and [false].',
    initialCode: 'const b = [true];',
    correctAnswers: ['true'],
    hints: ['Lowercase words.']
  },
  {
    id: 9,
    type: 'theory',
    title: '9. Equality',
    description: 'Which operator checks both value and type?',
    options: ['==', '===', '=', '!='],
    correctAnswers: [1],
    hints: ['Strict equality.']
  },
  {
    id: 10,
    type: 'coding',
    title: '10. Template Literals',
    description: 'Print "Age: 25" using template literals.',
    initialCode: 'const age = 25;\nconsole.log(`Age: ${age}`);',
    testCases: [
      { description: 'Template check', expectedOutput: 'Age: 25' }
    ],
    hints: ['Use backticks and ${} syntax.']
  },
  {
    id: 11,
    type: 'theory',
    title: '11. Undefined vs Null',
    description: 'What is the default value of uninitialized variable?',
    options: ['null', 'undefined', '0', 'NaN'],
    correctAnswers: [1],
    hints: ['It means the value has not been assigned.']
  },
  {
    id: 12,
    type: 'coding',
    title: '12. Exponentiation',
    description: 'Calculate 2 to the power of 3.',
    initialCode: 'console.log(2 ** 3);',
    testCases: [
      { description: 'Power check', expectedOutput: '8' }
    ],
    hints: ['Use ** or Math.pow().']
  },
  {
    id: 13,
    type: 'blanks',
    title: '13. String length',
    description: 'Get string length using properties: s.[length].',
    initialCode: 'const s = "hi"; console.log(s.[length]);',
    correctAnswers: ['length'],
    hints: ['Size of string.']
  },
  {
    id: 14,
    type: 'theory',
    title: '14. Comments',
    description: 'Multi-line comment syntax?',
    options: ['//', '#', '/* */', '--'],
    correctAnswers: [2],
    hints: ['C-style comments.']
  },
  {
    id: 15,
    type: 'coding',
    title: '15. NaN check',
    description: 'Is 0/0 NaN?',
    initialCode: 'console.log(isNaN(0/0));',
    testCases: [
      { description: 'NaN verification', expectedOutput: 'true' }
    ],
    hints: ['Not a Number.']
  },
  {
    id: 16,
    type: 'theory',
    title: '16. Alert',
    description: 'Method to show a popup message?',
    options: ['print()', 'alert()', 'prompt()', 'window()'],
    correctAnswers: [1],
    hints: ['Common browser interaction.']
  },
  {
    id: 17,
    type: 'coding',
    title: '17. Arithmetic',
    description: 'Multiply 10 by 2.',
    initialCode: 'console.log(10 * 2);',
    testCases: [
      { description: 'Mult check', expectedOutput: '20' }
    ],
    hints: ['Use * operator.']
  },
  {
    id: 18,
    type: 'blanks',
    title: '18. Variables (legacy)',
    description: 'The legacy way to declare variables is [var].',
    initialCode: '[var] name = "old";',
    correctAnswers: ['var'],
    hints: ['Before let and const.']
  },
  {
    id: 19,
    type: 'theory',
    title: '19. Semicolons',
    description: 'Are semicolons mandatory in JS?',
    options: ['Yes', 'No (Automatic Semicolon Insertion)', 'Only for loops', 'Always for classes'],
    correctAnswers: [1],
    hints: ['JS compiler adds them automatically in most cases.']
  },
  {
    id: 20,
    type: 'coding',
    title: '20. String Index',
    description: 'Get first char of "JS".',
    initialCode: 'const s = "JS"; console.log(s[0]);',
    testCases: [
      { description: 'Index check', expectedOutput: 'J' }
    ],
    hints: ['Zero-based indexing.']
  },

  // SECTION 2: CONTROL FLOW (21–50)
  {
    id: 21,
    type: 'theory',
    title: '21. If Else',
    description: 'Syntax for checking if x equals 5?',
    options: ['if x == 5', 'if (x == 5)', 'if x = 5', 'if (x : 5)'],
    correctAnswers: [1],
    hints: ['Similar to C and Java.']
  },
  {
    id: 22,
    type: 'coding',
    title: '22. Even Odd',
    description: 'Check if 4 is even.',
    initialCode: 'if (4 % 2 === 0) console.log("Even");',
    testCases: [
      { description: 'Modulo', expectedOutput: 'Even' }
    ],
    hints: ['Remainder 0 check.']
  },
  {
    id: 23,
    type: 'blanks',
    title: '23. Switch',
    description: 'In switch, use [case] to define options.',
    initialCode: 'switch(x) { [case] 1: ... }',
    correctAnswers: ['case'],
    hints: ['Condition match.']
  },
  {
    id: 24,
    type: 'theory',
    title: '24. While vs Do-While',
    description: 'Which runs at least once?',
    options: ['While', 'Do-While', 'Both', 'Neither'],
    correctAnswers: [1],
    hints: ['Do-While checks condition at end.']
  },
  {
    id: 25,
    type: 'coding',
    title: '25. For loop',
    description: 'Print 0, 1, 2.',
    initialCode: 'for(let i=0; i<3; i++) console.log(i);',
    testCases: [
      { description: 'Loop iterate', expectedOutput: '0\n1\n2' }
    ],
    hints: ['Let i start at 0.']
  },
  {
    id: 30,
    type: 'theory',
    title: '30. Ternary',
    description: 'Syntax for condition ? exprIfTrue : exprIfFalse?',
    options: ['Ternary', 'Binary', 'Unary', 'Logic'],
    correctAnswers: [0],
    hints: ['Only operator that takes 3 operands.']
  },

  // SECTION 3: ARRAYS (51–80)
  {
    id: 51,
    type: 'theory',
    title: '51. Array Definition',
    description: 'How to create an array?',
    options: ['(1, 2)', '{1, 2}', '[1, 2]', '<1, 2>'],
    correctAnswers: [2],
    hints: ['Square brackets.']
  },
  {
    id: 52,
    type: 'coding',
    title: '52. Array Push',
    description: 'Add 3 to [1, 2].',
    initialCode: 'const arr = [1, 2]; arr.push(3); console.log(arr);',
    testCases: [
      { description: 'Add item', expectedOutput: '[1, 2, 3]' }
    ],
    hints: ['Push to end.']
  },
  {
    id: 53,
    type: 'blanks',
    title: '53. Array length',
    description: 'Use the [length] property to find size.',
    initialCode: 'arr.[length]',
    correctAnswers: ['length'],
    hints: ['Same as strings.']
  },
  {
    id: 60,
    type: 'theory',
    title: '60. Array map()',
    description: 'What does map() return?',
    options: ['Modified original array', 'A new array', 'Nothing', 'Length of array'],
    correctAnswers: [1],
    hints: ['Immutability principle.']
  },
  {
    id: 70,
    type: 'coding',
    title: '70. Filter items',
    description: 'Get evens from [1, 2, 3, 4].',
    initialCode: 'const res = [1, 2, 3, 4].filter(x => x % 2 === 0); console.log(res);',
    testCases: [
      { description: 'Filter check', expectedOutput: '[2, 4]' }
    ],
    hints: ['Filter by condition.']
  },

  // SECTION 4: FUNCTIONS (81–110)
  {
    id: 81,
    type: 'theory',
    title: '81. Function Keyword',
    description: 'Keyword to define function?',
    options: ['function', 'def', 'func', 'sub'],
    correctAnswers: [0],
    hints: ['Full word.']
  },
  {
    id: 82,
    type: 'coding',
    title: '82. Arrow Function',
    description: 'Sum a and b using arrow function.',
    initialCode: 'const add = (a, b) => a + b; console.log(add(1, 2));',
    testCases: [
      { description: 'Arrow check', expectedOutput: '3' }
    ],
    hints: ['=> syntax.']
  },
  {
    id: 100,
    type: 'theory',
    title: '100. Hoisting',
    description: 'What can be moved to top of scope?',
    options: ['Declarations', 'Initializations', 'Both', 'Neither'],
    correctAnswers: [0],
    hints: ['Variable and function declarations are hoisted.']
  },

  // SECTION 5: OBJECTS (111–130)
  {
    id: 111,
    type: 'theory',
    title: '111. Object Literal',
    description: 'Define object using?',
    options: ['[]', '{}', '()', '<>'],
    correctAnswers: [1],
    hints: ['Curly brackets.']
  },
  {
    id: 112,
    type: 'coding',
    title: '112. Object property',
    description: 'Access name from {name: "JS"}.',
    initialCode: 'const o = {name: "JS"}; console.log(o.name);',
    testCases: [
      { description: 'Dot access', expectedOutput: 'JS' }
    ],
    hints: ['obj.property']
  },

  // SECTION 6: ASYNC & PROMISES (131–150)
  {
    id: 131,
    type: 'theory',
    title: '131. Promises',
    description: 'A promise state for successfully finished task?',
    options: ['Pending', 'Fulfilled', 'Rejected', 'Settled'],
    correctAnswers: [1],
    hints: ['Resolved.']
  },
  {
    id: 132,
    type: 'blanks',
    title: '132. Async/Await',
    description: 'Use [async] keyword before a function to use await.',
    initialCode: '[async] function fetch() {}',
    correctAnswers: ['async'],
    hints: ['Asynchronous.']
  },
  {
    id: 140,
    type: 'coding',
    title: '140. SetTimeout',
    description: 'Print "Later" inside timeout.',
    initialCode: 'setTimeout(() => console.log("Later"), 100);',
    testCases: [
      { description: 'Timer logic', expectedOutput: /Later/ }
    ],
    hints: ['Pass a callback.']
  },
  {
    id: 150,
    type: 'theory',
    title: '150. JSON',
    description: 'Method to convert object to string?',
    options: ['JSON.parse()', 'JSON.stringify()', 'JSON.to()', 'obj.toString()'],
    correctAnswers: [1],
    hints: ['Serialization.']
  }
];
