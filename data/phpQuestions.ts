import { Question } from '../types';

export const PHP_QUESTIONS: Question[] = [
  // SECTION 1: BASICS (1–50)
  {
    id: 1,
    type: 'theory',
    title: '1. What is PHP?',
    description: 'PHP stands for?',
    options: ['Personal Home Page', 'PHP: Hypertext Preprocessor', 'Private Host Program', 'Public Hyperlink Processor'],
    correctAnswers: [1],
    hints: ['It is a recursive acronym.']
  },
  {
    id: 2,
    type: 'coding',
    title: '2. Echo statement',
    description: 'Print "PHP is fun".',
    initialCode: '<?php\necho "PHP is fun";',
    testCases: [
      { description: 'Echo check', expectedOutput: 'PHP is fun' }
    ],
    hints: ['Use the echo or print statement.']
  },
  {
    id: 3,
    type: 'blanks',
    title: '3. Variables',
    description: 'In PHP, variable names start with [$].',
    initialCode: '[$]name = "User";',
    correctAnswers: ['$'],
    hints: ['Dollar sign.']
  },
  {
    id: 10,
    type: 'theory',
    title: '10. Server-side',
    description: 'Where does PHP code execute?',
    options: ['On the user\'s browser', 'On the server', 'On the database Only', 'Nowhere'],
    correctAnswers: [1],
    hints: ['PHP is a server-side scripting language.']
  },
  {
    id: 150,
    type: 'theory',
    title: '150. PDO',
    description: 'What is PDO used for?',
    options: ['Graphic design', 'Database access abstraction', 'Network security', 'File compression'],
    correctAnswers: [1],
    hints: ['PHP Data Objects.']
  }
];
