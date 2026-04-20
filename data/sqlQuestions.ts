import { Question } from '../types';

export const SQL_QUESTIONS: Question[] = [
  // SECTION 1: BASICS (1–30)
  {
    id: 1,
    type: 'theory',
    title: '1. What is SQL?',
    description: 'SQL stands for?',
    options: ['Strong Question Language', 'Structured Query Language', 'Simple Query Logic', 'Systematic Query List'],
    correctAnswers: [1],
    hints: ['The standard language for relational databases.']
  },
  {
    id: 2,
    type: 'coding',
    title: '2. Select All',
    description: 'Select all columns from the table "Users".',
    initialCode: '-- Write SQL here\n',
    testCases: [
      { description: 'Select * check', expectedOutput: 'SELECT * FROM Users' }
    ],
    hints: ['Use the asterisk *']
  },
  {
    id: 3,
    type: 'blanks',
    title: '3. Where Clause',
    description: 'To filter records, use the [WHERE] clause.',
    initialCode: 'SELECT * FROM Users [WHERE] id = 1;',
    correctAnswers: ['WHERE'],
    hints: ['Condition keyword.']
  },
  {
    id: 4,
    type: 'theory',
    title: '4. Distinct',
    description: 'Which keyword returns only unique values?',
    options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'SINGLE'],
    correctAnswers: [1],
    hints: ['SELECT [this] column FROM...']
  },
  {
    id: 10,
    type: 'coding',
    title: '10. Order By',
    description: 'Sort users by name.',
    initialCode: 'SELECT * FROM Users ORDER BY name;',
    testCases: [
      { description: 'Sort check', expectedOutput: /ORDER\s+BY/i }
    ],
    hints: ['Use ORDER BY name']
  },
  {
    id: 20,
    type: 'theory',
    title: '20. Null Check',
    description: 'How to check if a column is null?',
    options: ['col = NULL', 'col IS NULL', 'col == NULL', 'col EMPTY'],
    correctAnswers: [1],
    hints: ['IS operator is used for NULL.']
  },
  {
    id: 30,
    type: 'coding',
    title: '30. Limit Results',
    description: 'Select first 5 users.',
    initialCode: 'SELECT * FROM Users LIMIT 5;',
    testCases: [
      { description: 'Limit check', expectedOutput: 'LIMIT 5' }
    ],
    hints: ['Use LIMIT keyword.']
  },

  // SECTION 2: JOINS (31–60)
  {
    id: 31,
    type: 'theory',
    title: '31. Inner Join',
    description: 'What does Inner Join return?',
    options: ['All left records', 'All right records', 'Matching records in both', 'Both left and right'],
    correctAnswers: [2],
    hints: ['It finds the intersection.']
  },
  {
    id: 40,
    type: 'coding',
    title: '40. Join logic',
    description: 'Join Orders and Customers on id.',
    initialCode: 'SELECT * FROM Orders\nJOIN Customers ON Orders.cid = Customers.id;',
    testCases: [
      { description: 'Join check', expectedOutput: /JOIN/i }
    ],
    hints: ['Use JOIN...ON']
  },

  // SECTION 3: AGGREGATIONS (61–90)
  {
    id: 61,
    type: 'theory',
    title: '61. Count',
    description: 'Function to find total records?',
    options: ['SUM()', 'TOTAL()', 'COUNT()', 'MAX()'],
    correctAnswers: [2],
    hints: ['Literally counting items.']
  },
  {
    id: 70,
    type: 'coding',
    title: '70. Average Price',
    description: 'Find average of price.',
    initialCode: 'SELECT AVG(price) FROM products;',
    testCases: [
      { description: 'Avg check', expectedOutput: /AVG/i }
    ],
    hints: ['Use AVG() function.']
  },

  // SECTION 4: DDL (91–120)
  {
    id: 91,
    type: 'theory',
    title: '91. Create Table',
    description: 'Keyword to create new table?',
    options: ['BUILD', 'MAKE', 'CREATE', 'INIT'],
    correctAnswers: [2],
    hints: ['CREATE TABLE...']
  },
  {
    id: 100,
    type: 'coding',
    title: '100. Insert Row',
    description: 'Insert into Students.',
    initialCode: 'INSERT INTO Students (name) VALUES ("John");',
    testCases: [
      { description: 'Insert check', expectedOutput: /INSERT/i }
    ],
    hints: ['INSERT INTO...']
  },

  // SECTION 5: CONSTRAINTS (121–150)
  {
    id: 121,
    type: 'theory',
    title: '121. Primary Key',
    description: 'Can Primary Key be null?',
    options: ['Yes', 'No', 'Sometimes', 'Only if foreign'],
    correctAnswers: [1],
    hints: ['It must uniquely identify every row.']
  },
  {
    id: 130,
    type: 'blanks',
    title: '130. Foreign Key',
    description: 'A [FOREIGN] KEY links two tables.',
    initialCode: '[FOREIGN] KEY (id) REFERENCES Other(id)',
    correctAnswers: ['FOREIGN'],
    hints: ['External reference.']
  },
  {
    id: 150,
    type: 'theory',
    title: '150. Group By',
    description: 'Used with aggregate functions to group rows?',
    options: ['GROUP BY', 'ORDER BY', 'SORT BY', 'ORGANIZE BY'],
    correctAnswers: [0],
    hints: ['Groups identical data.']
  }
];
