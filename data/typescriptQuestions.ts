import { Question } from '../types';

export const TYPESCRIPT_QUESTIONS: Question[] = [
  // SECTION 1: BASICS (1–50)
  {
    id: 1,
    type: 'theory',
    title: '1. What is TypeScript?',
    description: 'TypeScript is a superset of?',
    options: ['Java', 'JavaScript', 'Python', 'C++'],
    correctAnswers: [1],
    hints: ['It adds types to existing JS.']
  },
  {
    id: 2,
    type: 'coding',
    title: '2. Type Annotation',
    description: 'Declare a number variable x.',
    initialCode: 'let x: number = 10; console.log(x);',
    testCases: [
      { description: 'Type check', expectedOutput: '10' }
    ],
    hints: ['Use the colon syntax.']
  },
  {
    id: 3,
    type: 'blanks',
    title: '3. Interfaces',
    description: 'Define an interface using the [interface] keyword.',
    initialCode: '[interface] User { name: string; }',
    correctAnswers: ['interface'],
    hints: ['Blueprints for objects.']
  },
  {
    id: 50,
    type: 'theory',
    title: '50. Any type',
    description: 'What does the "any" type do?',
    options: ['Strict typing', 'Turns off type checking for the variable', 'Only allows strings', 'Only allows numbers'],
    correctAnswers: [1],
    hints: ['Escape hatch for typing.']
  },
  {
    id: 100,
    type: 'coding',
    title: '100. Enums',
    description: 'Create an enum for Color.',
    initialCode: 'enum Color { Red, Green, Blue }\nconsole.log(Color.Red);',
    testCases: [
      { description: 'Enum check', expectedOutput: '0' }
    ],
    hints: ['Numeric by default starting from 0.']
  },
  {
    id: 150,
    type: 'theory',
    title: '150. Generics',
    description: 'Purpose of generics?',
    options: ['Code reuse with type safety', 'Looping through lists', 'Web API calls', 'Memory cleanup'],
    correctAnswers: [0],
    hints: ['Allows components to work with multiple types.']
  }
];
// ... more will be filled if requested.
