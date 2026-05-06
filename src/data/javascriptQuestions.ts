import { Question } from '../types';

export const JAVASCRIPT_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Use console.log() to print "Hello, JavaScript!".',
    initialCode: '// Write your code here\n',
    testCases: [
      {
        expectedOutput: 'Hello, JavaScript!',
        description: 'Should log "Hello, JavaScript!"'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Variables',
    description: 'Which keyword is used to declare a block-scoped variable in modern JS?',
    options: ['var', 'let', 'set', 'dim'],
    correctAnswers: [1],
    hints: ['ES6 introduced this keyword along with const.']
  },
  {
    id: 4,
    type: 'theory',
    title: 'Arrow Functions',
    description: 'Which symbol is used to define an arrow function in JS?',
    options: ['=>', '->', '~>', '==>'],
    correctAnswers: [0],
    hints: ['Commonly used in ES6 and later.']
  },
  {
    id: 5,
    type: 'blanks',
    title: 'Template Literals',
    description: 'Which character is used to define template literals?',
    initialCode: 'const s = ___Hello ${name}___;',
    correctAnswers: ['`'],
    hints: ['The backtick character.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Simple Addition',
    description: 'Print the sum of 10 and 20. Output: "30".',
    initialCode: '// Calculate and log\n',
    testCases: [
      {
        expectedOutput: '30',
        description: 'Should log 30'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'Strict Equality',
    description: 'Which operator checks for both value and type equality?',
    options: ['==', '===', '!=', '!=='],
    correctAnswers: [1],
    hints: ['Triple equals.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'JavaScript Arrays',
    description: 'Which method adds one or more elements to the end of an array?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    correctAnswers: [1],
    hints: ['Opposite of pop().']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Object Property',
    description: 'Access the property "name" from object "person".',
    initialCode: 'const name = person___name;',
    correctAnswers: ['.'],
    hints: ['Dot notation.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'Array Mapping',
    description: 'Given [1, 2], map it to [2, 4] and print result: "[2, 4]".',
    initialCode: 'const arr = [1, 2];\n// map and log\n',
    testCases: [
      {
        expectedOutput: '[2, 4]',
        description: 'Should log [2, 4]'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'Prototypal Inheritance',
    description: 'What is the base of inheritance in JavaScript?',
    options: ['Classes', 'Prototypes', 'Functions', 'Objects'],
    correctAnswers: [1],
    hints: ['Every JS object has a link to this.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Hoisting',
    description: 'Which type of declaration is hoisted to the top of its scope?',
    options: ['let', 'const', 'var', 'None'],
    correctAnswers: [2],
    hints: ['This is why you can use variables before declaring them if using this keyword.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Boolean Literal',
    description: 'Keyword for truth in JS.',
    initialCode: 'const ok = ___;',
    correctAnswers: ['true'],
    hints: ['Lower case truth.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'Template String Join',
    description: 'Join ["a", "b"] with "-" and print: "a-b".',
    initialCode: 'const items = ["a", "b"];\n// join and log\n',
    testCases: [
      {
        expectedOutput: 'a-b',
        description: 'Should log a-b'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'DOM Manipulation',
    description: 'Which method is used to select an element by its ID?',
    options: ['getElementByClass', 'querySelector', 'getElementById', 'selectID'],
    correctAnswers: [2],
    hints: ['Direct access by unique ID.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Asynchronous JS',
    description: 'What does a Promise represent in JavaScript?',
    options: ['A synchronous action', 'The eventual completion or failure of an async operation', 'A fixed value', 'An error handler'],
    correctAnswers: [1],
    hints: ['It is used for tasks that take time, like fetching data.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Async Keyword',
    description: 'Declare an asynchronous function.',
    initialCode: '___ function fetchData() { }',
    correctAnswers: ['async'],
    hints: ['Used before the function keyword.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'Filter Array',
    description: 'Filter [10, 5, 20] to keep only numbers > 10. Output: "[20]".',
    initialCode: 'const arr = [10, 5, 20];\n// filter and log\n',
    testCases: [
      {
        expectedOutput: '[20]',
        description: 'Should log [20]'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Event Bubbling',
    description: 'What is event bubbling in JavaScript?',
    options: ['Event starts at the root and goes down', 'Event starts at the target and bubbles up to the root', 'Event stays at the target only', 'Event is deleted'],
    correctAnswers: [1],
    hints: ['Like a bubble rising in water.']
  },
  {
    id: 20,
    type: 'theory',
    title: 'JSON',
    description: 'Which method converts a JS object to a JSON string?',
    options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toStr()', 'JSON.format()'],
    correctAnswers: [1],
    hints: ['String representation.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Wait for Promise',
    description: 'Wait for a promise to resolve inside an async function.',
    initialCode: 'const data = ___ fetch(url);',
    correctAnswers: ['await'],
    hints: ['Used inside async functions only.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'Check Array Includes',
    description: 'Check if 1 exists in [1, 2] and print: "true".',
    initialCode: 'const arr = [1, 2];\n// use includes and log\n',
    testCases: [
      {
        expectedOutput: 'true',
        description: 'Should log true'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'Rest Parameter',
    description: 'Which syntax is used for the rest parameter in function arguments?',
    options: ['...', '***', '&&&', '---'],
    correctAnswers: [0],
    hints: ['Looks like an ellipsis.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Destructuring',
    description: 'What is the benefit of object destructuring?',
    options: ['Faster code execution', 'Easier to extract properties into variables', 'Lower memory usage', 'No more objects needed'],
    correctAnswers: [1],
    hints: ['const { name } = person;']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Strict Mode',
    description: 'String used to enable strict mode.',
    initialCode: '"___";\nx = 10; // Throws error',
    correctAnswers: ['use strict'],
    hints: ['Helps catch common coding mistakes.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Find in Array',
    description: 'Find number 5 in [1, 5, 10] and print it.',
    initialCode: 'const arr = [1, 5, 10];\n// find and log\n',
    testCases: [
      {
        expectedOutput: '5',
        description: 'Should log 5'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'JavaScript Modules',
    description: 'Which keyword is used to export a function from a module?',
    options: ['send', 'export', 'public', 'share'],
    correctAnswers: [1],
    hints: ['Counterpart to import.']
  },
  {
    id: 28,
    type: 'theory',
    title: 'IIFE',
    description: 'What does IIFE stand for?',
    options: ['Instantly Invoked Function Expression', 'Immediately Invoked Function Expression', 'Internal Interactive Function Engine', 'None'],
    correctAnswers: [1],
    hints: ['(function(){})()']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Spread Operator',
    description: 'Copy an array into a new one using spread.',
    initialCode: 'const copy = [___original];',
    correctAnswers: ['...'],
    hints: ['Same symbol as rest parameter.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Array forEach',
    description: 'What does the forEach() method return?',
    options: ['A new array', 'The sum', 'undefined', 'An iterator'],
    correctAnswers: [2],
    hints: ['It executes a function for each element but does not return a value.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Template Literals',
    description: 'Which character is used to define template literals?',
    options: ["'", '"', '`', '/'],
    correctAnswers: [2],
    hints: ['Backtick symbol.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Spread Operator',
    description: 'What is the spread operator for an array "a"?',
    options: ['...a', '*a', '&a', 'spread(a)'],
    correctAnswers: [0],
    hints: ['Three dots.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Await keyword',
    description: 'Keyword used to wait for a Promise to resolve.',
    initialCode: 'async function f() {\n  const res = ___ fetch(url);\n}',
    correctAnswers: ['await'],
    hints: ['Can only be used inside an async function.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Array findIndex',
    description: 'What does array.findIndex() return if no element is found?',
    options: ['undefined', 'null', '-1', '0'],
    correctAnswers: [2],
    hints: ['Standard index for "not found".']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Strict Mode',
    description: 'How do you enable strict mode in a script?',
    options: ['strict = true', '"use strict"', 'enabled strict', 'mode: strict'],
    correctAnswers: [1],
    hints: ['A string literal at the top.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Object freeze',
    description: 'Print true if Object.isFrozen({}) is false.',
    initialCode: 'const obj = {};\nif (!Object.isFrozen(obj)) console.log("true");\n',
    testCases: [
      {
        expectedOutput: 'true',
        description: 'Should print true'
      }
    ]
  },
  {
    id: 37,
    type: 'theory',
    title: 'This context',
    description: 'What is the value of "this" in an arrow function?',
    options: ['The element that triggered the event', 'The lexical context (lexically bound)', 'The global object always', 'undefined'],
    correctAnswers: [1],
    hints: ['Arrow functions do not have their own "this".']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Array join',
    description: 'Which method returns a string from an array?',
    options: ['toString()', 'join()', 'concat()', 'Both toString and join'],
    correctAnswers: [3],
    hints: ['join() allows custom delimiters.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Default parameter',
    description: 'How to set a default value for parameter "a"?',
    initialCode: 'function sum(a ___ 0) { ... }',
    correctAnswers: ['='],
    hints: ['Assignment symbol.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Destructuring',
    description: 'Print value of "x" from {x: 10, y: 20}.',
    initialCode: 'const { x } = { x: 10, y: 20 };\nconsole.log(x);',
    testCases: [
      {
        expectedOutput: '10',
        description: 'Should print 10'
      }
    ]
  },
  {
    id: 41,
    type: 'theory',
    title: 'Symbol type',
    description: 'What are Symbols used for in JS?',
    options: ['Creating unique identifiers for object properties', 'Defining new math symbols', 'As a replacement for strings', 'To store binary data'],
    correctAnswers: [0],
    hints: ['Guaranteed to be unique.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Event Delegation',
    description: 'What is event delegation?',
    options: ['Delegating code to a worker', 'Attaching one listener to a parent to handle child events', 'Cancelling an event', 'Stopping event propagation'],
    correctAnswers: [1],
    hints: ['Uses event bubbling.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Computed property',
    description: 'Character used for computed property name.',
    initialCode: 'const obj = { ___key___: "value" };',
    correctAnswers: ['[key]'],
    hints: ['Uses square brackets.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Array every',
    description: 'Check if all [1, 2, 3] are > 0. (Print "true").',
    initialCode: 'const a = [1, 2, 3];\nconsole.log(a.every(x => x > 0));',
    testCases: [
      {
        expectedOutput: 'true',
        description: 'Should print true'
      }
    ]
  },
  {
    id: 45,
    type: 'theory',
    title: 'Memoization',
    description: 'What is memoization?',
    options: ['A type of loop', 'Caching return values of expensive function calls', 'A memory leak', 'A way to delete variables'],
    correctAnswers: [1],
    hints: ['Speeds up programs by avoiding repeated work.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Microtasks',
    description: 'Which of these is a microtask?',
    options: ['setTimeout', 'Promise callback', 'setInterval', 'onClick'],
    correctAnswers: [1],
    hints: ['Promises have higher priority than timers in the event loop.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Import alias',
    description: 'Keyword to rename an import.',
    initialCode: 'import { longName ___ shortName } from "./lib";',
    correctAnswers: ['as'],
    hints: ['Common in SQL too.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Reduce method',
    description: 'Sum [1, 2, 3] using reduce and print.',
    initialCode: 'const sum = [1, 2, 3].reduce((acc, crr) => acc + crr, 0);\nconsole.log(sum);',
    testCases: [
      {
        expectedOutput: '6',
        description: 'Should print 6'
      }
    ]
  },
  {
    id: 49,
    type: 'theory',
    title: 'Generator functions',
    description: 'Which symbol defines a generator function?',
    options: ['function&', 'function*', 'function@', 'function%'],
    correctAnswers: [1],
    hints: ['Uses an asterisk.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'WeakMap',
    description: 'What is the main feature of a WeakMap?',
    options: ['It is slower than Map', 'Keys must be objects and can be garbage collected', 'It has a smaller size limit', 'It only stores numbers'],
    correctAnswers: [1],
    hints: ['Allows memory-efficient property storage on objects.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Optional chaining',
    description: 'Operator to access deep properties without erroring if null.',
    initialCode: 'const name = user___profile___name;',
    correctAnswers: ['?.'],
    hints: ['Question mark and dot.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Nullish coalescing',
    description: 'Print "Default" if x is null using ?? operator.',
    initialCode: 'const x = null;\nconsole.log(x ?? "Default");',
    testCases: [
      {
        expectedOutput: 'Default',
        description: 'Should print Default'
      }
    ]
  },
  {
    id: 53,
    type: 'theory',
    title: 'Proxy Object',
    description: 'What does a Proxy object allow you to do?',
    options: ['Connect to a different server', 'Intercept and redefine fundamental operations for an object', 'Create a deep copy of an object', 'Encrypt an object'],
    correctAnswers: [1],
    hints: ['Uses "traps" like get, set, has.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Module exports',
    description: 'What is the standard way to export a function in ES6 modules?',
    options: ['module.exports = f', 'export { f }', 'export function f() {}', 'Both export { f } and export function'],
    correctAnswers: [3],
    hints: ['Different from CommonJS exports.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Yield keyword',
    description: 'Keyword to output values from a generator.',
    initialCode: 'function* g() {\n  ___ 1;\n}',
    correctAnswers: ['yield'],
    hints: ['Pauses generator execution.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Set uniqueness',
    description: 'Create Set from [1, 1, 2], print its size.',
    initialCode: 'const s = new Set([1, 1, 2]);\nconsole.log(s.size);',
    testCases: [
      {
        expectedOutput: '2',
        description: 'Should print 2'
      }
    ]
  },
  {
    id: 57,
    type: 'theory',
    title: 'Temporal Dead Zone (TDZ)',
    description: 'What is the Temporal Dead Zone?',
    options: ['The time between scope entry and variable declaration', 'A bug in the V8 engine', 'When a promise is pending', 'A region in memory'],
    correctAnswers: [0],
    hints: ['Applies to "let" and "const".']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Top-level await',
    description: 'Where can you use top-level await (without an async function)?',
    options: ['Standard scripts', 'ES modules', 'Inside any loop', 'Not possible in JS'],
    correctAnswers: [1],
    hints: ['Available in recent browser versions and Node.js.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Async generator',
    description: 'How to iterate over an async generator?',
    initialCode: 'for ___ (let x of gen()) { }',
    correctAnswers: ['await'],
    hints: ['for await...of']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Ecma International',
    description: 'What is the formal name of JavaScript standard?',
    options: ['JS-Standard', 'ECMAScript', 'WebScript', 'Netscape Standard'],
    correctAnswers: [1],
    hints: ['ES6 stands for ECMAScript 2015.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Template Literals',
    description: 'Which character is used to define a template literal?',
    options: ["'", '"', '`', '/'],
    correctAnswers: [2],
    hints: ['The backtick symbol.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Strict Equality',
    description: 'What is the difference between == and ===?',
    options: ['== checks only value, === checks value and type', '=== is only for numbers', '== is faster', 'No difference'],
    correctAnswers: [0],
    hints: ['=== is generally safer as it avoids type coercion.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Arrow function',
    description: 'Syntax for an arrow function with parameter x.',
    initialCode: 'const f = (x) ___ { return x; };',
    correctAnswers: ['=>'],
    hints: ['Equals and greater than.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Undefined vs Null',
    description: 'What is the type of "null" in JavaScript?',
    options: ['null', 'undefined', 'object', 'number'],
    correctAnswers: [2],
    hints: ['This is a long-standing bug in the language.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'NaN',
    description: 'What does NaN mean?',
    options: ['Not a Number', 'New and Nice', 'Negative and Null', 'Number and Null'],
    correctAnswers: [0],
    hints: ['Result of invalid mathematical operations.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Object property',
    description: 'Access property "name" of object o.',
    initialCode: 'const o = { name: "JS" };\nconst n = o.___',
    correctAnswers: ['name'],
    hints: ['Use dot notation.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'DOM',
    description: 'What does DOM stand for?',
    options: ['Digital Object Model', 'Document Object Model', 'Data Object Mode', 'Document Oriented Model'],
    correctAnswers: [1],
    hints: ['Interface that represents the HTML document as a tree structure.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Event Bubbling',
    description: 'What is event bubbling?',
    options: ['Events popping like bubbles', 'Events traveling from target element up through parents', 'Events canceling each other', 'Events happening once'],
    correctAnswers: [1],
    hints: ['Starts at the innermost element and triggers parents.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Local Storage',
    description: 'Method to save data to local storage.',
    initialCode: 'localStorage.___ ("key", "val");',
    correctAnswers: ['setItem'],
    hints: ['Pairs with getItem.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Array check',
    description: 'Check if [1] is an array.',
    initialCode: 'if (Array.___ ([1])) { ... }',
    correctAnswers: ['isArray'],
    hints: ['Static method on Array class.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Strict Mode',
    description: 'What does "use strict" do?',
    options: ['Makes the code literal', 'Enables a restricted variant of JS for better error catching', 'Hides the code', 'Makes it run faster'],
    correctAnswers: [1],
    hints: ['Catches common coding bloopers.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Map array',
    description: 'What does array.map() return?',
    options: ['The sum of the array', 'A new array with the same length', 'Nothing', 'A boolean'],
    correctAnswers: [1],
    hints: ['Transformative operation.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Spread operator',
    description: 'Operator used to expand elements of an array.',
    initialCode: 'const a = [___otherArr, 1, 2];',
    correctAnswers: ['...'],
    hints: ['Three dots.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'SetTimeout',
    description: 'Call function f after 1 second.',
    initialCode: 'setTimeout(f, ___);',
    correctAnswers: ['1000'],
    hints: ['Time is specified in milliseconds.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Promises',
    description: 'What are the three states of a Promise?',
    options: ['Start, Middle, End', 'Pending, Fulfilled, Rejected', 'Loading, Ready, Error', 'Waiting, Done, Failed'],
    correctAnswers: [1],
    hints: ['Initial, success, and failure states.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Async/Await',
    description: 'What does an "async" function always return?',
    options: ['A value', 'A Promise', 'An object', 'Nothing'],
    correctAnswers: [1],
    hints: ['Even if you return a primitive, it gets wrapped in a resolved promise.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Delete operator',
    description: 'Operator to remove a property from an object.',
    initialCode: '___ obj.prop;',
    correctAnswers: ['delete'],
    hints: ['Language keyword.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'JSON stringify',
    description: 'Convert object o to string.',
    initialCode: 'const s = JSON.___ (o);',
    correctAnswers: ['stringify'],
    hints: ['Opposite of parse.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Higher Order Functions',
    description: 'What is a higher-order function?',
    options: ['A function at the top level', 'A function that takes another function as an argument OR returns it', 'A fast function', 'A function with many lines'],
    correctAnswers: [1],
    hints: ['Examples include map, filter, and reduce.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Hoisting',
    description: 'What is variable hoisting in JS?',
    options: ['Moving all variables to a separate file', 'Moving declarations to the top of their containing scope during compilation', 'Deleting variables', 'Variable hiding'],
    correctAnswers: [1],
    hints: ['Only declarations are hoisted, not initializations.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Fetch API',
    description: 'Method to make network requests.',
    initialCode: '___("https://api.com").then(res => ...)',
    correctAnswers: ['fetch'],
    hints: ['Modern alternative to XMLHttpRequest.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Filter array',
    description: 'Filter [1, 10] for items > 5.',
    initialCode: 'const res = [1, 10].___ (x => x > 5);',
    correctAnswers: ['filter'],
    hints: ['Standard array method.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Scope',
    description: 'Which scope does "var" have?',
    options: ['Block scope', 'Function scope', 'Global scope', 'No scope'],
    correctAnswers: [1],
    hints: ['Contrast with let and const which have block scope.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Rest parameter',
    description: 'Which syntax represents rest parameters?',
    options: ['...args', 'args...', 'arr.rest()', 'all(args)'],
    correctAnswers: [0],
    hints: ['Uses the three dots in a function parameter list.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Class',
    description: 'Keyword to define a class in ES6.',
    initialCode: '___ User { ... }',
    correctAnswers: ['class'],
    hints: ['Syntactic sugar over JS prototype-based inheritance.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Object keys',
    description: 'Get all keys of object o.',
    initialCode: 'const keys = Object.___ (o);',
    correctAnswers: ['keys'],
    hints: ['Static method on Object.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Modules',
    description: 'Keyword to share code between files.',
    options: ['share', 'export', 'give', 'expose'],
    correctAnswers: [1],
    hints: ['Used with "import" in the consuming file.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'This value',
    description: 'Do arrow functions have their own "this"?',
    options: ['Yes', 'No', 'Only in objects', 'Depends on strict mode'],
    correctAnswers: [1],
    hints: ['They inherit "this" from the lexical scope.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Try...Catch',
    description: 'Block that runs whether an error occurred or not.',
    initialCode: 'try { ... } catch { ... } ___ { ... }',
    correctAnswers: ['finally'],
    hints: ['Used for cleanup.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'JavaScript Creator',
    description: 'Who created JavaScript in 10 days?',
    options: ['Brendan Eich', 'Mark Zuckerberg', 'Bill Gates', 'Steve Jobs'],
    correctAnswers: [0],
    hints: ['While working at Netscape.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Promises',
    description: 'What are the three states of a Promise?',
    options: ['Start, Stop, End', 'Pending, Fulfilled, Rejected', 'Loading, Loaded, Error', 'None'],
    correctAnswers: [1],
    hints: ['Initial state is pending.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Async/Await',
    description: 'What does an "async" function always return?',
    options: ['A value', 'A Promise', 'Nothing', 'A generator'],
    correctAnswers: [1],
    hints: ['Even if you return a string, it gets wrapped in a resolved promise.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Template literals',
    description: 'Character used to wrap template literals.',
    initialCode: 'const s = ___Hello ${name}___ ;',
    correctAnswers: ['`'],
    hints: ['The backtick character.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Arrow Functions',
    description: 'Do arrow functions have their own "this" binding?',
    options: ['Yes', 'No (they inherit from parent scope)', 'Only in strict mode', 'Only in classes'],
    correctAnswers: [1],
    hints: ['Lexical scoping for "this".']
  },
  {
    id: 95,
    type: 'theory',
    title: 'The "Spread" operator',
    description: 'Which symbol is the spread operator?',
    options: ['...', '..', '*', '&'],
    correctAnswers: [0],
    hints: ['Used to expand iterables into individual elements.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Array find',
    description: 'Find the first element > 10.',
    initialCode: 'const x = [5, 12, 8].___(n => n > 10);',
    correctAnswers: ['find'],
    hints: ['Returns the value of the first element that passes the test.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'ES Modules',
    description: 'How to import a default export from "lib.js"?',
    options: ['import { default } from "./lib.js"', 'import MyLib from "./lib.js"', 'require("./lib.js")', 'None'],
    correctAnswers: [1],
    hints: ['Default exports can be named anything during import.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Strict Mode',
    description: 'What does "use strict" do?',
    options: ['Speeds up execution', 'Enforces stricter parsing and error handling at runtime', 'Minifies code', 'None'],
    correctAnswers: [1],
    hints: ['Prevents using undeclared variables.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'typeof operator',
    description: 'Result of typeof null.',
    initialCode: 'typeof null === "___"',
    correctAnswers: ['object'],
    hints: ['This is a well-known bug in JavaScript that was never fixed for compatibility.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'JSON stringify',
    description: 'Convert object to JSON string.',
    initialCode: 'const s = JSON.___(obj);',
    correctAnswers: ['stringify'],
    hints: ['Converts a JS value to a JSON string.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Event Bubbling',
    description: 'What is event bubbling?',
    options: ['Events staying at target', 'Events propagating from the target element up to the root', 'Events going down from root', 'None'],
    correctAnswers: [1],
    hints: ['Opposite of event capturing.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'The "Proxy" object',
    description: 'What is a Proxy object used for?',
    options: ['Connecting to a server', 'Defining custom behavior for fundamental operations (e.g. property lookup)', 'Caching data', 'None'],
    correctAnswers: [1],
    hints: ['Intercepts and customizes operations performed on objects.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Set object',
    description: 'Collection that stores unique values of any type.',
    initialCode: 'const s = new ___();',
    correctAnswers: ['Set'],
    hints: ['Values can only occur once in the set.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Check Array',
    description: 'Check if v is an array.',
    initialCode: 'Array.___ (v)',
    correctAnswers: ['isArray'],
    hints: ['Static method on Array.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Fetch API',
    description: 'Does fetch() reject on HTTP error states (like 404)?',
    options: ['Yes', 'No (only rejects on network failure)', 'Depends on browser', 'None'],
    correctAnswers: [1],
    hints: ['You must check response.ok or response.status manually.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'WeakMap',
    description: 'What is the main difference between Map and WeakMap?',
    options: ['WeakMap is faster', 'Keys in WeakMap must be objects and are weakly held (subject to GC)', 'No difference', 'WeakMap only takes strings'],
    correctAnswers: [1],
    hints: ['WeakMap entries are garbage collected if no other references to the key exist.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Generator function',
    description: 'Symbol used to define a generator function.',
    initialCode: 'function___ gen() { yield 1; }',
    correctAnswers: ['*'],
    hints: ['An asterisk.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Parse int',
    description: 'Convert "10" to number.',
    initialCode: 'const n = ___ ("10");',
    correctAnswers: ['parseInt'],
    hints: ['Parses a string argument and returns an integer.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'LocalStorage',
    description: 'What is the storage limit for LocalStorage on most browsers?',
    options: ['1MB', '5MB', '50MB', 'Unlimited'],
    correctAnswers: [1],
    hints: ['Data persists even after the browser is closed.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Destructuring',
    description: 'How to extract "name" from object o?',
    options: ['const name = o.name', 'const { name } = o', 'Both', 'None'],
    correctAnswers: [2],
    hints: ['Property destructuring is a concise syntax.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Bind method',
    description: 'Method to create a new function with a fixed "this" context.',
    initialCode: 'const f = obj.func.___ (obj);',
    correctAnswers: ['bind'],
    hints: ['Does not execute immediately; returns a new function.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Get type',
    description: 'Get type of variable v.',
    initialCode: 'const t = ___ v;',
    correctAnswers: ['typeof'],
    hints: ['Unary operator.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Symbol type',
    description: 'What are Symbols used for?',
    options: ['Mathematical symbols', 'To create unique, private property keys for objects', 'To speed up strings', 'None'],
    correctAnswers: [1],
    hints: ['Guaranteed to be unique.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Object.freeze()',
    description: 'What does Object.freeze() do?',
    options: ['Stops animations', 'Prevents adding, deleting, or modifying properties of an object', 'Cverages memory', 'None'],
    correctAnswers: [1],
    hints: ['Makes an object immutable.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Optional chaining',
    description: 'Symbol for optional chaining.',
    initialCode: 'val = user___addr___zip',
    correctAnswers: ['?.'],
    hints: ['Safely accesses nested properties.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Map array',
    description: 'Transform [1, 2] to doubles.',
    initialCode: 'const res = [1, 2].___ (x => x * 2);',
    correctAnswers: ['map'],
    hints: ['Standard array transformation.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'BigInt',
    description: 'How to create a BigInt from the number 10?',
    options: ['10n', 'BigInt(10)', 'Both', 'None'],
    correctAnswers: [2],
    hints: ['Used for numbers larger than 2^53 - 1.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Modules: export default',
    description: 'How many default exports can a module have?',
    options: ['0', '1', 'Unlimited', '10'],
    correctAnswers: [1],
    hints: ['You can have only one default export per module.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'New keyword',
    description: 'Keyword to create an instance of a constructor or class.',
    initialCode: 'const user = ___ User();',
    correctAnswers: ['new'],
    hints: ['Initializes the execution of the constructor.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'JS Creator',
    description: 'Who created the JavaScript language?',
    options: ['Brendan Eich', 'Bill Joy', 'James Gosling', 'Douglas Crockford'],
    correctAnswers: [0],
    hints: ['He created it in 10 days while working at Netscape.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Arrow Functions',
    description: 'What is the main difference between arrow functions and regular functions regarding "this"?',
    options: ['Arrow functions have no "this"', 'Arrow functions do not have their own "this"; they inherit it from the parent scope', 'Regular functions are faster', 'None'],
    correctAnswers: [1],
    hints: ['Arrow functions capture the "this" value of the enclosing context.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Destructuring',
    description: 'What is the result of const [a, b] = [1, 2, 3]?',
    options: ['a=1, b=2', 'a=1, b=3', 'Error', 'a=[1, 2], b=3'],
    correctAnswers: [0],
    hints: ['The extra elements in the array are ignored.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Spread operator',
    description: 'Operator used to expand an array into individual elements.',
    initialCode: 'const arr = [1, 2];\nconst newArr = [___arr, 3];',
    correctAnswers: ['...'],
    hints: ['Three dots.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Template Literals',
    description: 'Which syntax allows embedding expressions in strings?',
    options: ['"Value: " + x', '`Value: ${x}`', '\'Value: ${x}\'', 'Both A and B'],
    correctAnswers: [1],
    hints: ['Uses backticks and dollar sign with curly braces.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Promise.all',
    description: 'What does Promise.all() do?',
    options: ['Runs promises one by one', 'Waits for all promises to resolve (or any to reject)', 'Deletes all promises', 'None'],
    correctAnswers: [1],
    hints: ['Returns a single promise that resolves when all input promises resolve.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Map array',
    description: 'Multiply each element of [1, 2] by 2.',
    initialCode: 'const l = [1, 2];\nconst res = l.___ (x => x * 2);',
    correctAnswers: ['map'],
    hints: ['Creates a new array with the results of calling a function on every element.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'The "window" object',
    description: 'What is the global object in a browser environment?',
    options: ['global', 'window', 'document', 'process'],
    correctAnswers: [1],
    hints: ['Contains variables, functions, and the DOM.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Local Storage',
    description: 'Where is data stored if you use localStorage.setItem()?',
    options: ['On the server', 'In the user\'s browser (persists after tab close)', 'In a temporary variable', 'None'],
    correctAnswers: [1],
    hints: ['Has no expiration time.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Async function',
    description: 'Keyword to define a function that implicitly returns a Promise.',
    initialCode: '___ function getData() { }',
    correctAnswers: ['async'],
    hints: ['Usually used with "await".']
  },
  {
    id: 130,
    type: 'coding',
    title: 'JSON Parse',
    description: 'Convert JSON string \'{"a":1}\' back to object.',
    initialCode: 'const s = \'{"a":1}\';\nconst o = JSON.___ (s);',
    correctAnswers: ['parse'],
    hints: ['Deserializes the string.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Event Bubbling',
    description: 'What is event bubbling in the DOM?',
    options: ['Events move from parent to child', 'Events move from child to parent (propagate up)', 'Events that pop like bubbles', 'None'],
    correctAnswers: [1],
    hints: ['The default phase of most events.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Strict Mode',
    description: 'What does "use strict" do?',
    options: ['Makes JS faster', 'Enforces stricter parsing and error handling at runtime', 'Only for classes', 'None'],
    correctAnswers: [1],
    hints: ['Catches common coding bloopers.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Object keys',
    description: 'Method to get an array of all keys in an object.',
    initialCode: 'const keys = Object.___ (myObj);',
    correctAnswers: ['keys'],
    hints: ['Returns enumerable property names.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Optional Chaining',
    description: 'Safely access user.profile.name.',
    initialCode: 'const name = user.___ profile.___ name;',
    correctAnswers: ['?.', '?.'],
    hints: ['Uses the question mark and dot.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'The "process" object',
    description: 'What is the global object for environment info in Node.js?',
    options: ['window', 'process', 'globalThis', 'system'],
    correctAnswers: [1],
    hints: ['Contains env, argv, and other platform info.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Functional Components',
    description: 'In React, what is a functional component?',
    options: ['A function that returns JSX', 'A class with a render method', 'A script that runs on the server', 'None'],
    correctAnswers: [0],
    hints: ['The modern way to write React components.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'React Hooks',
    description: 'Which hook is used to manage state in a functional component?',
    options: ['useEffect', 'useState', 'useContext', 'useMemo'],
    correctAnswers: [1],
    hints: ['Returns a stateful value and a function to update it.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Import syntax',
    description: 'Keyword to include a function from another file.',
    initialCode: '___ { myFunc } from "./utils";',
    correctAnswers: ['import'],
    hints: ['Part of ES6 modules.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Array find',
    description: 'Find the first element > 10 in [5, 12, 8, 130, 44].',
    initialCode: 'const list = [5, 12, 8, 130, 44];\nconst found = list.___ (e => e > 10);',
    correctAnswers: ['find'],
    hints: ['Returns the value of the first element that satisfies the condition.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Event Loop',
    description: 'What is the Event Loop in JavaScript?',
    options: ['A tool to repeat code', 'The mechanism that handles asynchronous callbacks (like timers and network requests) by moving them to the call stack when it is empty', 'A graphics engine', 'None'],
    correctAnswers: [1],
    hints: ['Allows JS to be non-blocking despite being single-threaded.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'NPM',
    description: 'What is NPM?',
    options: ['New Program Manager', 'Node Package Manager', 'Net Presence Metric', 'None'],
    correctAnswers: [1],
    hints: ['The default package manager for the Node.js JavaScript runtime.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Constant declaration',
    description: 'Keyword to declare a variable whose value cannot be reassigned.',
    initialCode: '___ PI = 3.14;',
    correctAnswers: ['const'],
    hints: ['Block-scoped like let.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'String Includes',
    description: 'Check if "hello" contains "ell" (return true).',
    initialCode: 'const res = "hello".___ ("ell");',
    correctAnswers: ['includes'],
    hints: ['Case-sensitive search.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Closures',
    description: 'What is a closure in JavaScript?',
    options: ['Closing a browser window', 'A function that remembers its outer lexical environment even when executed outside that environment', 'A private class method', 'None'],
    correctAnswers: [1],
    hints: ['Created every time a function is created, at function creation time.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Hoisting',
    description: 'What is hoisting in JavaScript?',
    options: ['Moving variables to the top of their scope during compilation', 'Lifting the page up', 'Deleting unused code', 'None'],
    correctAnswers: [0],
    hints: ['Variables and function declarations are moved to the top.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Async/Await',
    description: 'Keyword to wait for a promise to resolve inside an async function.',
    initialCode: 'const data = ___ fetchData();',
    correctAnswers: ['await'],
    hints: ['Makes asynchronous code look synchronous.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Array Push',
    description: 'Add 3 to the end of [1, 2].',
    initialCode: 'const l = [1, 2];\nl.___ (3);',
    correctAnswers: ['push'],
    hints: ['Modifies the original array.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Currying',
    description: 'What is currying in functional programming?',
    options: ['A spicy dish', 'The process of converting a function with multiple arguments into a sequence of functions with single arguments', 'A way to repeat functions', 'None'],
    correctAnswers: [1],
    hints: ['Named after Haskell Curry.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'DOM',
    description: 'What does DOM stand for?',
    options: ['Document Object Model', 'Data Object Mode', 'Digital Output Monitor', 'None'],
    correctAnswers: [0],
    hints: ['The programming interface for HTML and XML documents.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Interval',
    description: 'Window method to repeatedly call a function at a set time interval.',
    initialCode: 'window.___ (myFunc, 1000);',
    correctAnswers: ['setInterval'],
    hints: ['Needs to be cleared with clearInterval.']
  }
];
