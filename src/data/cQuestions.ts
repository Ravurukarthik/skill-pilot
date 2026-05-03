
import { Question } from '../types';

export const C_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Write a program that prints "Hello, World!" to the console.',
    initialCode: '#include <stdio.h>\n\nint main() {\n  // Write your code here\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'Hello, World!',
        description: 'Should print exactly "Hello, World!"'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'C Data Types',
    description: 'Which of the following is not a basic data type in C?',
    options: ['int', 'float', 'string', 'char'],
    correctAnswers: 2, // 'string' is not a basic type in C (it's char array)
    hints: ['Think about the most primitive types defined in the C standard.']
  }
];
