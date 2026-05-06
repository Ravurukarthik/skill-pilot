import { Question } from '../types';
export const TYPESCRIPT_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'theory',
    title: 'TypeScript Type',
    description: 'What is TypeScript?',
    options: ['A new language', 'A superset of JavaScript', 'A style sheet language', 'A database engine'],
    correctAnswers: [1],
    hints: ['It adds static typing to JavaScript.']
  },
  {
    id: 2,
    type: 'blanks',
    title: 'Type Annotation',
    description: 'Annotate variable "n" as a number.',
    initialCode: 'let n ___ = 10;',
    correctAnswers: [': number'],
    hints: ['Colon followed by the type name.']
  },
  {
    id: 3,
    type: 'coding',
    title: 'Interface Usage',
    description: 'Interface "User" has "name" string. Log "RK".',
    initialCode: 'interface User { name: string; }\nconst u: User = { name: "RK" };\n// log u.name\n',
    testCases: [
      {
        expectedOutput: 'RK',
        description: 'Should log RK'
      }
    ]
  },
  {
    id: 4,
    type: 'theory',
    title: 'TypeScript Enums',
    description: 'What is an enum in TypeScript?',
    options: ['A type of loop', 'A collection of related constants', 'A way to format strings', 'A decorator'],
    correctAnswers: [1],
    hints: ['Short for "enumeration".']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Any Type',
    description: 'What does the "any" type indicate in TypeScript?',
    options: ['Strict typing', 'Opt-out of type checking', 'Only numbers allowed', 'Required property'],
    correctAnswers: [1],
    hints: ['It allows any value to be assigned.']
  },
  {
    id: 6,
    type: 'blanks',
    title: 'Optional Property',
    description: 'Make "age" property optional in interface User.',
    initialCode: 'interface User {\n  name: string;\n  age___: number;\n}',
    correctAnswers: ['?'],
    hints: ['The question mark symbol.']
  },
  {
    id: 7,
    type: 'coding',
    title: 'Function Types',
    description: 'Define a function sum(a: number, b: number): number that returns a+b. log sum(5,5).',
    initialCode: '// Write sum function and log sum(5,5)\n',
    testCases: [
      {
        expectedOutput: '10',
        description: 'Should log 10'
      }
    ]
  },
  {
    id: 8,
    type: 'theory',
    title: 'Union Types',
    description: 'Which symbol represents a Union Type in TS?',
    options: ['&', '|', '||', '&&'],
    correctAnswers: [1],
    hints: ['Variable can be one of multiple types.']
  },
  {
    id: 9,
    type: 'theory',
    title: 'Intersection Types',
    description: 'Which symbol represents an Intersection Type in TS?',
    options: ['&', '|', '+', '*'],
    correctAnswers: [0],
    hints: ['Combines multiple types into one.']
  },
  {
    id: 10,
    type: 'blanks',
    title: 'Readonly Property',
    description: 'Mark "id" as immutable inside a class.',
    initialCode: 'class Device {\n  ___ id: string;\n}',
    correctAnswers: ['readonly'],
    hints: ['Property cannot be changed after initialization.']
  },
  {
    id: 11,
    type: 'coding',
    title: 'Generic Function',
    description: 'Define identity<T>(arg: T): T. log identity(7).',
    initialCode: '// Write generic identity and log it with 7\n',
    testCases: [
      {
        expectedOutput: '7',
        description: 'Should log 7'
      }
    ]
  },
  {
    id: 12,
    type: 'theory',
    title: 'Tuples',
    description: 'What is a Tuple in TypeScript?',
    options: ['An array with fixed length and specific types for each index', 'A dynamic list', 'A key-value pair', 'A type of function'],
    correctAnswers: [0],
    hints: ['[number, string] is a tuple.']
  },
  {
    id: 13,
    type: 'theory',
    title: 'Unknown vs Any',
    description: 'What is the main difference between unknown and any?',
    options: ['Any is safer', 'Unknown is more restrictive (forced type check before usage)', 'Unknown is only for numbers', 'There is no difference'],
    correctAnswers: [1],
    hints: ['Unknown requires a type guard or assertion before usage.']
  },
  {
    id: 14,
    type: 'blanks',
    title: 'Type Assertion',
    description: 'Assert "val" is a string.',
    initialCode: 'let strLength = (val ___).length;',
    correctAnswers: ['as string'],
    hints: ['The "as" keyword.']
  },
  {
    id: 15,
    type: 'coding',
    title: 'Type Alias',
    description: 'Define type ID = string | number. log a variable of type ID.',
    initialCode: 'type ID = string | number;\nconst myId: ID = "A101";\n// log myId\n',
    testCases: [
      {
        expectedOutput: 'A101',
        description: 'Should log A101'
      }
    ]
  },
  {
    id: 16,
    type: 'theory',
    title: 'Classes in TS',
    description: 'Which access modifier is the default for class members in TS?',
    options: ['private', 'protected', 'public', 'internal'],
    correctAnswers: [2],
    hints: ['If not specified, members are open.']
  },
  {
    id: 17,
    type: 'theory',
    title: 'TS Config',
    description: 'Which file is used to configure a TypeScript project?',
    options: ['package.json', 'tsconfig.json', 'typedoc.json', 'ts.config'],
    correctAnswers: [1],
    hints: ['Defines compiler options.']
  },
  {
    id: 18,
    type: 'blanks',
    title: 'Inheritance',
    description: 'Keyword for class inheritance.',
    initialCode: 'class Student ___ Person { }',
    correctAnswers: ['extends'],
    hints: ['Same as in Java.']
  },
  {
    id: 19,
    type: 'coding',
    title: 'Strict Null Checks',
    description: 'With strict null checks on, can a string variable be null directly? No. log "No".',
    initialCode: '// Log answer\n',
    testCases: [
      {
        expectedOutput: 'No',
        description: 'Should log No'
      }
    ]
  },
  {
    id: 20,
    type: 'theory',
    title: 'Interface vs Type',
    description: 'Which one can be augmented (merged) by redeclaring it?',
    options: ['Interface', 'Type Alias', 'Both', 'Neither'],
    correctAnswers: [0],
    hints: ['Interfaces support declaration merging.']
  },
  {
    id: 21,
    type: 'theory',
    title: 'Abstract Classes',
    description: 'Can you instantiate an abstract class?',
    options: ['Yes', 'No', 'Only with new keyword', 'Only if it has no abstract methods'],
    correctAnswers: [1],
    hints: ['Abstract classes are meant to be inherited, not instantiated.']
  },
  {
    id: 22,
    type: 'blanks',
    title: 'Never Type',
    description: 'Type for a function that never returns (e.g., throws error).',
    initialCode: 'function error(msg: string): ___ { throw new Error(msg); }',
    correctAnswers: ['never'],
    hints: ['Indicates values that will never occur.']
  },
  {
    id: 23,
    type: 'coding',
    title: 'Literal Types',
    description: 'Type Direction = "Up" | "Down". log "Up".',
    initialCode: 'type Direction = "Up" | "Down";\nconst d: Direction = "Up";\n// log d\n',
    testCases: [
      {
        expectedOutput: 'Up',
        description: 'Should log Up'
      }
    ]
  },
  {
    id: 24,
    type: 'theory',
    title: 'Decorators',
    description: 'What is a decorator in TS?',
    options: ['A way to add styles', 'A special kind of declaration that can be attached to a class or member', 'A type of variable', 'An error handler'],
    correctAnswers: [1],
    hints: ['Uses the @ expression.']
  },
  {
    id: 25,
    type: 'theory',
    title: 'Partial Utility',
    description: 'What does Partial<T> utility do?',
    options: ['Makes all properties of T required', 'Makes all properties of T optional', 'Removes all properties', 'Creates a set'],
    correctAnswers: [1],
    hints: ['Transforms an interface into its optional version.']
  },
  {
    id: 26,
    type: 'blanks',
    title: 'Keyof operator',
    description: 'Operator to get the keys of a type.',
    initialCode: 'type UserKeys = ___ User;',
    correctAnswers: ['keyof'],
    hints: ['Returns a union of the keys.']
  },
  {
    id: 27,
    type: 'coding',
    title: 'Array Type',
    description: 'Declare list of strings. log "TS".',
    initialCode: 'const list: string[] = ["TS"];\n// log list[0]\n',
    testCases: [
      {
        expectedOutput: 'TS',
        description: 'Should log TS'
      }
    ]
  },
  {
    id: 28,
    type: 'theory',
    title: 'ReadonlyArray',
    description: 'What is true about ReadonlyArray?',
    options: ['It is faster', 'It has no push() or pop() methods', 'It is only for numbers', 'It is a keyword'],
    correctAnswers: [1],
    hints: ['An array that cannot be mutated.']
  },
  {
    id: 29,
    type: 'theory',
    title: 'Utility Types',
    description: 'Which utility type constructs a type with some properties of T removed?',
    options: ['Pick', 'Omit', 'Exclude', 'Extract'],
    correctAnswers: [1],
    hints: ['Counters "Pick".']
  },
  {
    id: 30,
    type: 'blanks',
    title: 'Module Import',
    description: 'Import only the User interface from a module.',
    initialCode: 'import ___ from "./models";',
    correctAnswers: ['{ User }'],
    hints: ['Destructured import syntax.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Type Aliases',
    description: 'How to define a type alias "ID" for string or number?',
    options: ['type ID = string | number;', 'interface ID { val: string | number; }', 'alias ID = string | number;', 'let ID: string | number;'],
    correctAnswers: [0],
    hints: ['Uses the "type" keyword.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'ReadOnly Array',
    description: 'How to declare an array that cannot be modified?',
    options: ['let a: readonly number[];', 'let a: const number[];', 'const a: number[];', 'immutable a: number[];'],
    correctAnswers: [0],
    hints: ['Uses the "readonly" keyword before the type.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Unknown type',
    description: 'A safer alternative to "any" when the type is not yet known.',
    initialCode: 'let x: ___ = 10;\nx = "hi";',
    correctAnswers: ['unknown'],
    hints: ['Requires a type check before performing operations on it.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Tuple Type',
    description: 'How to define a tuple with a string and a number?',
    options: ['[string, number]', '{string, number}', '(string, number)', '<string, number>'],
    correctAnswers: [0],
    hints: ['Uses square brackets.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Union Types',
    description: 'What does "string | null" mean?',
    options: ['String and null', 'String or null', 'Neither string nor null', 'Optional string'],
    correctAnswers: [1],
    hints: ['The pipe symbol represents "OR".']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Generic function',
    description: 'Complete the identity function signature.',
    initialCode: 'function id<___>(arg: ___): ___ { return arg; }',
    correctAnswers: ['T', 'T', 'T'],
    hints: ['Use the letter T by convention.']
  },
  {
    id: 37,
    type: 'theory',
    title: 'Accessibility modifiers',
    description: 'Which modifier makes a member accessible only within its class and subclasses?',
    options: ['private', 'public', 'protected', 'internal'],
    correctAnswers: [2],
    hints: ['More permissive than private, less than public.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Literal Types',
    description: 'What does let x: "one" | "two"; mean?',
    options: ['x can be any string', 'x can only be the string "one" or "two"', 'x is a constant', 'x is an enum'],
    correctAnswers: [1],
    hints: ['Exhaustive set of allowed string values.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Abstract class',
    description: 'Keyword for a class that cannot be instantiated directly.',
    initialCode: '___ class Shape { }',
    correctAnswers: ['abstract'],
    hints: ['Common keyword in Java and C# as well.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Enum value',
    description: 'Print "0" for the first member of an uninitialized enum.',
    initialCode: 'enum Color { Red, Green }\nconsole.log(Color.Red);',
    testCases: [
      {
        expectedOutput: '0',
        description: 'Should print 0'
      }
    ]
  },
  {
    id: 41,
    type: 'theory',
    title: 'Keyof operator',
    description: 'What does "keyof T" return?',
    options: ['Values of T', 'A union of the property keys of T', 'The class name of T', 'Size of T'],
    correctAnswers: [1],
    hints: ['Index type query operator.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Mapped Types',
    description: 'Which syntax represents a mapped type?',
    options: ['{ [P in K]: T }', '{ P: K }', 'Map<K, T>', 'for (P in K)'],
    correctAnswers: [0],
    hints: ['Allows creating new types based on existing ones.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Non-null assertion',
    description: 'Operator to tell TS a value is NOT null/undefined.',
    initialCode: 'const x = obj.prop___;',
    correctAnswers: ['!'],
    hints: ['Exclamation mark.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Partial type',
    description: 'Declare a partial User object from interface User { id: number; }.',
    initialCode: 'interface User { id: number; }\nconst u: ___<User> = {};',
    correctAnswers: ['Partial'],
    hints: ['Utility type.']
  },
  {
    id: 45,
    type: 'theory',
    title: 'Module Resolution',
    description: 'What are the two main module resolution strategies in TS?',
    options: ['Classic and Node', 'CommonJS and ESM', 'Local and Remote', 'Fast and Slow'],
    correctAnswers: [0],
    hints: ['Node is the default and modern one.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Namespace',
    description: 'What is the purpose of "namespace"?',
    options: ['To manage different servers', 'To group related code and avoid global scope pollution', 'To define physical files', 'To speed up execution'],
    correctAnswers: [1],
    hints: ['An older way of organizing code, replaced largely by modules.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Strict null checks',
    description: 'Compiler option to catch null/undefined errors.',
    initialCode: '{ "compilerOptions": { "___": true } }',
    correctAnswers: ['strictNullChecks'],
    hints: ['Camel case name in tsconfig.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Type guard',
    description: 'Check if var is string using "typeof".',
    initialCode: 'function f(x: any) {\n  if (typeof x === "___") return true;\n}',
    correctAnswers: ['string'],
    hints: ['Standard JS typeof result.']
  },
  {
    id: 49,
    type: 'theory',
    title: 'Intersection Types',
    description: 'What does "Person & Serializable" create?',
    options: ['A type that is Person or Serializable', 'A type that has properties of both Person and Serializable', 'A clash', 'Nothing'],
    correctAnswers: [1],
    hints: ['Uses the ampersand symbol.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Decorator metadata',
    description: 'What is needed for decorators to store metadata?',
    options: ['reflection-api', 'reflect-metadata', 'meta-data-lib', 'ts-reflect'],
    correctAnswers: [1],
    hints: ['A polyfill library commonly used with Angular.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Override',
    description: 'Modifier for a member that overrides a base member (TS 4.3+).',
    initialCode: 'class B extends A {\n  ___ run() {}\n}',
    correctAnswers: ['override'],
    hints: ['Makes inheritance explicit.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Record utility',
    description: 'Define type for string keys to number values.',
    initialCode: 'type S2N = ___<string, number>;',
    correctAnswers: ['Record'],
    hints: ['Utility type with two parameters.']
  },
  {
    id: 53,
    type: 'theory',
    title: 'Infer keyword',
    description: 'Where is the "infer" keyword used?',
    options: ['In standard variable declarations', 'Within the "extends" clause of a conditional type', 'In loops', 'In imports'],
    correctAnswers: [1],
    hints: ['Allows declaring a type variable that is inferred from a pattern.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Omit utility',
    description: 'What does Omit<T, K> do?',
    options: ['Creates a type with only keys in K', 'Creates a type by picking all properties from T and then removing K', 'Combines types', 'Removes nulls'],
    correctAnswers: [1],
    hints: ['Opposite of Pick.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Exhaustive check',
    description: 'Primitive type that cannot have any value.',
    initialCode: 'const exhaustiveCheck: ___ = val;',
    correctAnswers: ['never'],
    hints: ['Bottom type in TS.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Required utility',
    description: 'Convert User { name? } to its version where name is required.',
    initialCode: 'interface User { name?: string; }\ntype ReqUser = ___<User>;',
    correctAnswers: ['Required'],
    hints: ['Utility type.']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Compiler target',
    description: 'What does the "target" option in tsconfig do?',
    options: ['Sets the output directory', 'Sets the JavaScript version for the generated code', 'Sets the source files', 'Sets the entry point'],
    correctAnswers: [1],
    hints: ['Examples: ES5, ES2015, ESNEXT.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Declaration files',
    description: 'What is the extension for TypeScript declaration files?',
    options: ['.ts', '.js', '.d.ts', '.df.ts'],
    correctAnswers: [2],
    hints: ['They describe the shape of JavaScript code.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Property key',
    description: 'Type representing all valid object key types.',
    initialCode: 'type Keys = ___ | number | symbol;',
    correctAnswers: ['string'],
    hints: ['Most common key type.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'TypeScript Superset',
    description: 'Can any valid JavaScript code be run as TypeScript?',
    options: ['Yes', 'No', 'Only if it has no classes', 'Depends on Node version'],
    correctAnswers: [0],
    hints: ['TS is a strict syntactical superset of JS.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Type Inference',
    description: 'What is type inference in TypeScript?',
    options: ['The programmer must declare every type', 'The compiler automatically determines the type based on the value', 'Converting one type to another', 'Hiding types from the compiler'],
    correctAnswers: [1],
    hints: ['let x = 10; // x is inferred as number.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Union Types',
    description: 'How to specify a variable that can be either a string or a number?',
    options: ['string | number', 'string & number', 'string or number', 'any'],
    correctAnswers: [0],
    hints: ['Uses the vertical bar (pipe) symbol.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Interface extends',
    description: 'Keyword to inherit one interface from another.',
    initialCode: 'interface Admin ___ User { ... }',
    correctAnswers: ['extends'],
    hints: ['Similar to class inheritance.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Literal Types',
    description: 'What is a string literal type?',
    options: ['Any string', 'A type that exactly matches a specific string value', 'A documentation string', 'A private string'],
    correctAnswers: [1],
    hints: ['Example: type Side = "left" | "right";']
  },
  {
    id: 65,
    type: 'theory',
    title: 'The "never" type',
    description: 'When is the "never" type used?',
    options: ['For functions that return null', 'For values that will never occur (e.g. function that throws an error)', 'For variables with no value', 'Never used'],
    correctAnswers: [1],
    hints: ['Represents the type of values that never occur.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Array type',
    description: 'Declare an array of numbers.',
    initialCode: 'const arr: ___ = [1, 2, 3];',
    correctAnswers: ['number[]'],
    hints: ['Type followed by brackets.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Readonly properties',
    description: 'Which keyword makes a property of an interface immutable?',
    options: ['const', 'readonly', 'final', 'private'],
    correctAnswers: [1],
    hints: ['Properties can be marked as readonly.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Enums in TS',
    description: 'What are enums?',
    options: ['A type of loop', 'A way to define a set of named constants', 'A list of variables', 'A mathematical function'],
    correctAnswers: [1],
    hints: ['Allows for clearer intent and documentation.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Type assertion',
    description: 'Keyword for type assertion (alternative to angle bracket syntax).',
    initialCode: 'const n = val ___ number;',
    correctAnswers: ['as'],
    hints: ['Informs the compiler to treat the value as a specific type.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Function type',
    description: 'Define type for function taking (x: number) returning string.',
    initialCode: 'type MyFn = (x: number) ___ string;',
    correctAnswers: ['=>'],
    hints: ['Equals and greater than.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Generics',
    description: 'What symbol represents a generic type parameter by convention?',
    options: ['G', 'T', 'X', 'Type'],
    correctAnswers: [1],
    hints: ['Stands for "Type".']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Optional Chaining',
    description: 'Which symbol is used for optional chaining?',
    options: ['?', '?.', '??', '?!'],
    correctAnswers: [1],
    hints: ['Safely accesses nested properties.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Static members',
    description: 'Keyword for members belonging to the class itself, not instances.',
    initialCode: 'class Utils {\n  ___ count = 0;\n}',
    correctAnswers: ['static'],
    hints: ['Shared across all instances.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Tuple type',
    description: 'Define type for [number, string].',
    initialCode: 'let t: [___];',
    correctAnswers: ['number, string'],
    hints: ['Fixed-length array with specific types per index.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Mapped Types',
    description: 'What are mapped types used for?',
    options: ['Creating maps/dictionaries', 'Creating new types based on existing ones by iterating over keys', 'Hiding types', 'Debugging'],
    correctAnswers: [1],
    hints: ['Used in utility types like Partial or Readonly.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Abstract Classes',
    description: 'Can you instantiate an abstract class directly?',
    options: ['Yes', 'No', 'Only in strict mode', 'Only if it has no abstract methods'],
    correctAnswers: [1],
    hints: ['They are intended only to be inherited from.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Access modifier',
    description: 'Modifier that makes a member accessible only within the class and its subclasses.',
    initialCode: '___ name: string;',
    correctAnswers: ['protected'],
    hints: ['More restrictive than public, less than private.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Export default',
    description: 'Export User class as default.',
    initialCode: '___ class User { }',
    correctAnswers: ['export default'],
    hints: ['One default export per file.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Non-null assertion',
    description: 'Which symbol is the non-null assertion operator?',
    options: ['!', '?', '!!', '?!'],
    correctAnswers: [0],
    hints: ['Tells the compiler that an expression is definitely not null or undefined.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Type Guards',
    description: 'What is a type guard?',
    options: ['A security layer', 'An expression that performs a runtime check to narrow a type', 'A type of comment', 'A debugging tool'],
    correctAnswers: [1],
    hints: ['Example: if (typeof x === "string") { ... }']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Ambient declarations',
    description: 'File extension for TypeScript declaration files.',
    initialCode: 'jquery.___',
    correctAnswers: ['d.ts'],
    hints: ['Used to describe existing JS libraries.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Implements interface',
    description: 'Class User implementing Person.',
    initialCode: 'class User ___ Person { }',
    correctAnswers: ['implements'],
    hints: ['Used when a class must adhere to an interface contract.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Unknown vs Any',
    description: 'What is the main difference between "any" and "unknown"?',
    options: ['No difference', '"unknown" is safer because you must perform type checking before using it', '"any" is newer', '"unknown" is for numbers only'],
    correctAnswers: [1],
    hints: ['Prefer unknown over any when possible.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Discriminated Unions',
    description: 'What identifies a discriminated union?',
    options: ['A shared field with a literal type in every variant', 'Different names', 'Different sizes', 'None'],
    correctAnswers: [0],
    hints: ['Allows using specific logic for each variant based on the common key.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Namespace',
    description: 'Keyword to group related code under a single name (older pattern).',
    initialCode: '___ Validation { ... }',
    correctAnswers: ['namespace'],
    hints: ['Replaced mostly by modules in modern TS.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Decorator',
    description: 'Decorator syntax for class User.',
    initialCode: '___ \nclass User { }',
    correctAnswers: ['@sealed'],
    hints: ['Experimental feature starts with at symbol.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Utility Type: Partial',
    description: 'What does Partial<User> do?',
    options: ['Makes items private', 'Makes all properties of User optional', 'Makes items readonly', 'Returns half the properties'],
    correctAnswers: [1],
    hints: ['Very useful for update objects.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Template Literal Types',
    description: 'How do you combine literal types like type Color = "red" | "blue" into type Theme = `${Color}-mode`?',
    options: ['Concatenation', 'Template literal types', 'Addition', 'Strings only'],
    correctAnswers: [1],
    hints: ['Uses the same syntax as JS template literals but in types.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Super call',
    description: 'Keyword to call constructor of base class.',
    initialCode: 'constructor() { ___(); }',
    correctAnswers: ['super'],
    hints: ['Must be called before using "this" in a derived class.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'TS Creator',
    description: 'Which company developed TypeScript?',
    options: ['Google', 'Microsoft', 'Facebook', 'Netscape'],
    correctAnswers: [1],
    hints: ['Anders Hejlsberg is the lead architect.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'The "unknown" type',
    description: 'What is the "unknown" type in TypeScript?',
    options: ['Same as any', 'Type-safe sibling of any; you must perform some type checking before performing operations', 'A hidden type', 'None'],
    correctAnswers: [1],
    hints: ['Preferred over any for values whose type is not known at compile time.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Never type',
    description: 'What does the "never" type represent?',
    options: ['A type for objects', 'The type of values that never occur (e.g. function that always throws)', 'A type for numbers', 'None'],
    correctAnswers: [1],
    hints: ['Used for functions that reach the end of the script or loop infinitely.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Template Literal Types',
    description: 'What is the syntax for template literal types?',
    initialCode: 'type World = "world";\ntype Greeting = `hello ${___}`;',
    correctAnswers: ['World'],
    hints: ['Build on string literal types.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Type Aliases vs Interfaces',
    description: 'Which one can be merged (declaration merging)?',
    options: ['Type Aliases', 'Interfaces', 'Both', 'None'],
    correctAnswers: [1],
    hints: ['Interfaces are open-ended; type aliases are not.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Record Utility',
    description: 'What does Record<K, T> represent?',
    options: ['A list of recordings', 'An object type whose property keys are K and whose property values are T', 'A database record', 'None'],
    correctAnswers: [1],
    hints: ['Commonly used to map properties of one type to another.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Pick Utility',
    description: 'Pick "id" from type User.',
    initialCode: 'type UserId = ___<User, "id">;',
    correctAnswers: ['Pick'],
    hints: ['Utility type that constructs a type by picking the set of properties K from T.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Mapped Types',
    description: 'What are mapped types used for?',
    options: ['Mapping coordinates', 'Creating a new type based on another type by iterating through its properties', 'Hiding types', 'None'],
    correctAnswers: [1],
    hints: ['{ [P in K]: T } syntax.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Keyof operator',
    description: 'What does the keyof operator do?',
    options: ['Opens a key', 'Produces a string or numeric literal union of all known, public property names of a type', 'Deletes a key', 'None'],
    correctAnswers: [1],
    hints: ['Useful for generic constraints.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Lookup types',
    description: 'Syntax for indexed access (lookup) types.',
    initialCode: 'type Age = User["___"];',
    correctAnswers: ['age'],
    hints: ['Access the type of a specific property.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Partial Utility',
    description: 'Make all properties of User optional.',
    initialCode: 'type PUser = ___<User>;',
    correctAnswers: ['Partial'],
    hints: ['Constructs a type with all properties of T set to optional.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Conditional Types',
    description: 'What is the syntax for conditional types?',
    options: ['T extends U ? X : Y', 'if (T) { X } else { Y }', 'T ? U : V', 'None'],
    correctAnswers: [0],
    hints: ['Ternary-like syntax at the type level.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Infer keyword',
    description: 'What is the purpose of the "infer" keyword?',
    options: ['To guess types', 'To declare a type variable within a condition in a conditional type', 'To hide types', 'None'],
    correctAnswers: [1],
    hints: ['Commonly used in ReturnType definition.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Exclude Utility',
    description: 'Utility to filter out types from a union.',
    initialCode: 'type T = ___<"a" | "b" | "c", "a">; // Result: "b" | "c"',
    correctAnswers: ['Exclude'],
    hints: ['Opposite of Extract.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'ReturnType Utility',
    description: 'Get return type of function f.',
    initialCode: 'type R = ___<typeof f>;',
    correctAnswers: ['ReturnType'],
    hints: ['Obtains the return type of a function type.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Discriminated Unions',
    description: 'What makes a union type "discriminated"?',
    options: ['It is filtered', 'A common property with a literal type that can be used to distinguish between variants', 'It is complex', 'None'],
    correctAnswers: [1],
    hints: ['Often uses a "type" or "kind" field.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'TypeScript Config: strict',
    description: 'What does "strict": true do in tsconfig.json?',
    options: ['Makes compilation slow', 'Enables a wide range of type checking behavior that results in stronger guarantees of program correctness', 'Deletes all comments', 'None'],
    correctAnswers: [1],
    hints: ['Includes noImplicitAny, strictNullChecks, etc.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Namespace keyword',
    description: 'Internal module system in TypeScript (aliased as module).',
    initialCode: '___ Utils { export function run() {} }',
    correctAnswers: ['namespace'],
    hints: ['Used for grouping related code. ES Modules are preferred now.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Required Utility',
    description: 'Make all optional properties of User required.',
    initialCode: 'type RUser = ___<User>;',
    correctAnswers: ['Required'],
    hints: ['Opposite of Partial.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'TypeScript Mixins',
    description: 'How are mixins implemented in TypeScript?',
    options: ['Using extends keyword', 'Using class expressions and functions that take a constructor and return a new class extending it', 'Using interfaces only', 'None'],
    correctAnswers: [1],
    hints: ['A pattern for composing classes.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Experimental Decorators',
    description: 'Which flag is needed to enable decorators in TypeScript?',
    options: ['decorators: true', 'experimentalDecorators: true', 'enableDecorators: true', 'None'],
    correctAnswers: [1],
    hints: ['Needed for frameworks like Angular or libraries like TypeORM.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Abstract class',
    description: 'Keyword for a class that cannot be instantiated and may have abstract methods.',
    initialCode: '___ class Shape { abstract getArea(): number; }',
    correctAnswers: ['abstract'],
    hints: ['Base class for other shapes.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Extract Utility',
    description: 'Extract "a" from a union.',
    initialCode: 'type T = ___<"a" | "b", "a">;',
    correctAnswers: ['Extract'],
    hints: ['Constructs a type by extracting from Union all members that are assignable to T.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Ambient Declarations',
    description: 'What is a .d.ts file used for?',
    options: ['To store data', 'To provide type information for JavaScript libraries that don\'t have types', 'To speed up code', 'None'],
    correctAnswers: [1],
    hints: ['Declaration files.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'NonNullable Utility',
    description: 'What does NonNullable<T> do?',
    options: ['Makes a type nullable', 'Constructs a type by excluding null and undefined from T', 'Requires a value', 'None'],
    correctAnswers: [1],
    hints: ['Filters out null-ish values.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Satisfies operator',
    description: 'Operator to validate an expression matches a type WITHOUT changing its inferred type.',
    initialCode: 'const config = { host: "localhost" } ___ Config;',
    correctAnswers: ['satisfies'],
    hints: ['Introduced in TypeScript 4.9.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'InstanceType Utility',
    description: 'Get instance type of class User.',
    initialCode: 'type U = ___<typeof User>;',
    correctAnswers: ['InstanceType'],
    hints: ['Utility for getting the instance type of a constructor function type.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'TS and Modules',
    description: 'Which module systems are supported by the "module" flag in tsconfig?',
    options: ['CommonJS, ESNext, AMD, UMD', 'Only CommonJS', 'Only ESNext', 'None'],
    correctAnswers: [0],
    hints: ['TS is very flexible with module outputs.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Type assertions: <Type>',
    description: 'What is a common alternative to "val as Type" for assertions?',
    options: ['val : Type', '<Type>val', 'val(Type)', 'None'],
    correctAnswers: [1],
    hints: ['Note: React (JSX) requires "as" instead because of bracket ambiguity.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Private modifier',
    description: 'Keyword to restrict property access to only within the class.',
    initialCode: '___ id: string;',
    correctAnswers: ['private'],
    hints: ['Can also use the # prefix for run-time private fields.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'TypeScript Creator',
    description: 'Who created TypeScript?',
    options: ['Anders Hejlsberg', 'Brendan Eich', 'Guido van Rossum', 'Bjarne Stroustrup'],
    correctAnswers: [0],
    hints: ['Also created C# and Turbo Pascal.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'TypeScript: Interface vs Type',
    description: 'What is a key difference between an interface and a type alias?',
    options: ['Interfaces can be merged; type aliases cannot', 'Types are faster', 'Interfaces only work for objects', 'None'],
    correctAnswers: [0],
    hints: ['Interface merging allows adding fields to the same interface name across different files.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'TypeScript: Union Types',
    description: 'What is a union type?',
    options: ['A type that can be one of several types', 'A type that combines multiple types into one', 'A type of array', 'None'],
    correctAnswers: [0],
    hints: ['Uses the pipe symbol (e.g. string | number).']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'TypeScript: Intersection',
    description: 'Operator used to combine multiple types.',
    initialCode: 'type Combined = TypeA ___ TypeB;',
    correctAnswers: ['&'],
    hints: ['The ampersand symbol.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'TypeScript: Generics',
    description: 'What do generics allow you to do?',
    options: ['Make code run faster', 'Create components that work over a variety of types rather than a single one', 'Use only strings', 'None'],
    correctAnswers: [1],
    hints: ['Uses placeholders like <T>.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'TypeScript: Enum',
    description: 'What is a "const enum"?',
    options: ['A constant variable', 'An enum that is completely removed during compilation and replaced by literal values', 'A private enum', 'None'],
    correctAnswers: [1],
    hints: ['Improves performance and reduces code size.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'TypeScript: Array Type',
    description: 'Define an array of numbers.',
    initialCode: 'const list: ___ = [1, 2, 3];',
    correctAnswers: ['number[]'],
    hints: ['Can also use Array<number>.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'TypeScript: Utility Types: Partial',
    description: 'What does the Partial<T> utility type do?',
    options: ['Makes all properties in T required', 'Makes all properties in T optional', 'Deletes half the properties', 'None'],
    correctAnswers: [1],
    hints: ['Useful for update operations.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'TypeScript: Readonly',
    description: 'What is the "readonly" modifier used for?',
    options: ['To make a class private', 'To make properties of an object immutable after initialization', 'To speed up reading', 'None'],
    correctAnswers: [1],
    hints: ['Enforced by the compiler at compile time.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'TypeScript: Type Assertion',
    description: 'Keyword used to tell the compiler a specific type of a variable.',
    initialCode: 'const val = someVar ___ string;',
    correctAnswers: ['as'],
    hints: ['Used when you know more about a value\'s type than TypeScript does.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'TypeScript: Tuple',
    description: 'Define a tuple containing a string and a number.',
    initialCode: 'let x: ___ = ["hello", 10];',
    correctAnswers: ['[string, number]'],
    hints: ['Fixed-length array where each element has a defined type.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'TypeScript: Never Type',
    description: 'When is the "never" type used?',
    options: ['For variables that change often', 'For values that will never occur (e.g. a function that always throws an error)', 'Instead of any', 'None'],
    correctAnswers: [1],
    hints: ['Represents the type of values that never occur.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'TypeScript: Unknown Type',
    description: 'What is the main advantage of "unknown" over "any"?',
    options: ['It is shorter', 'It is safer because you must perform some type checking before performing operations on the value', 'It is faster', 'None'],
    correctAnswers: [1],
    hints: ['"Top type" that is type-safe.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'TypeScript: Implements',
    description: 'Keyword to enforce that a class follows an interface.',
    initialCode: 'class MyClass ___ MyInterface { }',
    correctAnswers: ['implements'],
    hints: ['Similar to Java or C#.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'TypeScript: Optional Property',
    description: 'Make "age" property optional in interface User.',
    initialCode: 'interface User {\n    name: string;\n    age___ : number;\n}',
    correctAnswers: ['?'],
    hints: ['The question mark modifier.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'TypeScript: Target',
    description: 'What does the "target" option in tsconfig.json do?',
    options: ['Specifies the root directory', 'Specifies the JavaScript language version to which the TypeScript code should be compiled (e.g. ES5, ES6)', 'Sets the goal of the project', 'None'],
    correctAnswers: [1],
    hints: ['Determines compatibility with browsers or runtime environments.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'TypeScript: Namespace',
    description: 'What is a TypeScript namespace?',
    options: ['A type of variable', 'A way to group related code and avoid global scope pollution', 'A database connection', 'None'],
    correctAnswers: [1],
    hints: ['Commonly used for older script-based codebases.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'TypeScript: Static Class Members',
    description: 'What is a "static" member of a class?',
    options: ['A member that cannot be changed', 'A member that exists on the class itself rather than on instances of the class', 'A private member', 'None'],
    correctAnswers: [1],
    hints: ['Accessed using the class name (e.g. MyClass.prop).']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'TypeScript: Pick Utility',
    description: 'Utility type to create a type by picking a set of properties from an existing type.',
    initialCode: 'type NameOnly = ___ <User, "name">;',
    correctAnswers: ['Pick'],
    hints: ['The opposite of Omit.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'TypeScript: Function Type',
    description: 'Define a type for a function that takes string and returns void.',
    initialCode: 'type Logger = (msg: string) ___ void;',
    correctAnswers: ['=>'],
    hints: ['Uses the arrow syntax.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'TypeScript: Module resolution',
    description: 'What does "moduleResolution" in tsconfig.json determine?',
    options: ['How TypeScript imports work', 'The process of resolving module imports (e.g. "node" or "bundler")', 'The output directory', 'None'],
    correctAnswers: [1],
    hints: ['Affects how compiler looks for files matched by import statements.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'TypeScript: Abstract Classes',
    description: 'Can abstract classes be instantiated in TypeScript?',
    options: ['Yes', 'No', 'Only if they have no abstract methods', 'None'],
    correctAnswers: [1],
    hints: ['Used as base classes for other classes.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'TypeScript: Record Utility',
    description: 'Utility type to create an object type where keys are K and values are T.',
    initialCode: 'const map: ___ <string, number> = { "a": 1 };',
    correctAnswers: ['Record'],
    hints: ['Useful for mapping keys to values.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'TypeScript: Constructor',
    description: 'Use parameter properties to automatically define and initialize a member.',
    initialCode: 'class User {\n    constructor(___ public name: string) { }\n}',
    correctAnswers: ['private'],
    hints: ['Adding an access modifier (public, private, protected) to a constructor parameter creates a property.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'TypeScript: Discriminated Unions',
    description: 'What is a discriminated union?',
    options: ['A union of types with a common string literal property used to narrow down the specific type', 'A type of interface', 'A way to hide types', 'None'],
    correctAnswers: [0],
    hints: ['Also known as "tagged unions".']
  },
  {
    id: 145,
    type: 'theory',
    title: 'TypeScript: Type Guards',
    description: 'What is a user-defined type guard?',
    options: ['A function that returns a boolean', 'A function whose return type is a "type predicate" (e.g. pet is Fish)', 'A way to protect variables', 'None'],
    correctAnswers: [1],
    hints: ['Used to narrow down types in conditional blocks.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'TypeScript: Exclude Utility',
    description: 'Utility type to exclude types from a union that are assignable to another.',
    initialCode: 'type T0 = ___ <"a" | "b" | "c", "a">; // "b" | "c"',
    correctAnswers: ['Exclude'],
    hints: ['Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'TypeScript: NonNullable',
    description: 'Remove null and undefined from string | null | undefined.',
    initialCode: 'type T1 = ___ <string | null | undefined>;',
    correctAnswers: ['NonNullable'],
    hints: ['Standard utility type.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'TypeScript: Infer keyword',
    description: 'Where is the "infer" keyword used?',
    options: ['Inside loops', 'Within conditional types to introduce a type variable to be inferred', 'In classes', 'None'],
    correctAnswers: [1],
    hints: ['Used after the extends keyword.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'TypeScript: Template Literal Types',
    description: 'What do template literal types allow?',
    options: ['Embedding variables in strings', 'Building types based on string interpolation syntax (e.g. `world_${Lang}`)', 'Using HTML in types', 'None'],
    correctAnswers: [1],
    hints: ['Allows for powerful string manipulation in types.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'TypeScript: Strict flag',
    description: 'Configuration flag in tsconfig that enables all strict type-checking options.',
    initialCode: '"___": true',
    correctAnswers: ['strict'],
    hints: ['Includes noImplicitAny, strictNullChecks, etc.']
  }
];
