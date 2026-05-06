import { Question } from '../types';
export const SWIFT_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Use print() to output "Hello, Swift!".',
    initialCode: '// Write code here\n',
    testCases: [
      {
        expectedOutput: 'Hello, Swift!',
        description: 'Should print Hello, Swift!'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Swift Platform',
    description: 'Swift is primarily used for developing apps for which ecosystem?',
    options: ['Android', 'Apple (iOS, macOS, etc.)', 'Windows', 'Linux Servers'],
    correctAnswers: [1],
    hints: ['Developed by Apple.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'Optionals',
    description: 'What is an Optional in Swift?',
    options: ['A required variable', 'A type that can hold either a value or "nil"', 'A constant', 'An asynchronous function'],
    correctAnswers: [1],
    hints: ['Represented by a question mark (?).']
  },
  {
    id: 4,
    type: 'blanks',
    title: 'Variable Declaration',
    description: 'Keyword for a variable that can be changed.',
    initialCode: '___ count = 10',
    correctAnswers: ['var'],
    hints: ['Opposite of "let".']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Constants',
    description: 'Which keyword is used to declare a constant in Swift?',
    options: ['var', 'let', 'const', 'fix'],
    correctAnswers: [1],
    hints: ['Values that do not change.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Integer sum',
    description: 'Print the sum of 50 and 25. Output: "75".',
    initialCode: '// Print sum\n',
    testCases: [
      {
        expectedOutput: '75',
        description: 'Should print 75'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'Type Inference',
    description: 'Does Swift support type inference?',
    options: ['Yes', 'No', 'Only for numbers', 'Only in Swift 5+'],
    correctAnswers: [0],
    hints: ['The compiler can often guess the type of a variable.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Switch Statement',
    description: 'In Swift, do switch cases fall through by default?',
    options: ['Yes', 'No', 'Only if using "goto"', 'Only for integers'],
    correctAnswers: [1],
    hints: ['You don\'t need a "break" statement at the end of each case.']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Guard statement',
    description: 'Statement for early exit if a condition is not met.',
    initialCode: '___ let name = user.name else { return }',
    correctAnswers: ['guard'],
    hints: ['Often used for unwrapping optionals.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'Array usage',
    description: 'Create array [1, 2, 3] and print count. Output: "3".',
    initialCode: 'let arr = [1, 2, 3]\n// print(arr.count)\n',
    testCases: [
      {
        expectedOutput: '3',
        description: 'Should print 3'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'Structs vs Classes',
    description: 'In Swift, which one is a value type?',
    options: ['Class', 'Struct', 'Internal Protocol', 'Singleton'],
    correctAnswers: [1],
    hints: ['Structs are copied when passed around.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Automatic Reference Counting',
    description: 'What does ARC stand for in Swift?',
    options: ['Apple Resource Control', 'Automatic Reference Counting', 'Advanced Runtime Compiler', 'Array Row Count'],
    correctAnswers: [1],
    hints: ['It manages memory automatically.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Function definition',
    description: 'Keyword to define a function.',
    initialCode: '___ sayHello() { }',
    correctAnswers: ['func'],
    hints: ['Short for function.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'String length',
    description: 'Print "7" as length of "SwiftUI".',
    initialCode: 'let s = "SwiftUI"\n// print(s.count)\n',
    testCases: [
      {
        expectedOutput: '7',
        description: 'Should print 7'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'Tuples',
    description: 'What is a tuple in Swift?',
    options: ['A way to group multiple values into a single compound value', 'A type of loop', 'A graphics library', 'An error type'],
    correctAnswers: [0],
    hints: ['(name: "RK", age: 25) is a tuple.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Protocols',
    description: 'What is a protocol in Swift equivalent to in other languages?',
    options: ['An Interface', 'A Class', 'A Decorator', 'A Namespace'],
    correctAnswers: [0],
    hints: ['Defines a blueprint of methods or properties.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Optional Chaining',
    description: 'Operator for optional chaining.',
    initialCode: 'let name = user___name',
    correctAnswers: ['?.'],
    hints: ['Question mark followed by dot.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'Dictionary usage',
    description: 'Create dict ["A": 1] and print the value for "A". output: "1".',
    initialCode: 'let d = ["A": 1]\n// print value for A\n',
    testCases: [
      {
        expectedOutput: '1',
        description: 'Should print 1'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Closures',
    description: 'What is a closure in Swift?',
    options: ['A way to close a file', 'A self-contained block of functionality that can be passed around', 'A private class member', 'An enum variant'],
    correctAnswers: [1],
    hints: ['Similar to lambdas in other languages.']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Extension',
    description: 'What is an "extension" used for in Swift?',
    options: ['To add new functionality to an existing class or struct', 'To make a variable public', 'To connect to a server', 'To delete an object'],
    correctAnswers: [0],
    hints: ['Can extend even built-in types like Int.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Enum Declaration',
    description: 'Keyword for an enumeration.',
    initialCode: '___ CompassPoint { case north, south }',
    correctAnswers: ['enum'],
    hints: ['Standard across languages.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'For-in loop',
    description: 'Iterate [1, 2] and print each.',
    initialCode: 'for x in [1, 2] {\n  // print(x)\n}\n',
    testCases: [
      {
        expectedOutput: '12',
        description: 'Should print 12'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'Error Handling',
    description: 'Which keyword is used to handle errors in Swift?',
    options: ['catch', 'rescue', 'except', 'handle'],
    correctAnswers: [0],
    hints: ['Used in a do-catch block.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Generics',
    description: 'What symbol is used for generic type parameters?',
    options: ['( )', '[ ]', '< >', '{ }'],
    correctAnswers: [2],
    hints: ['Angle brackets.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Initializer',
    description: 'Keyword to define a constructor.',
    initialCode: '___(name: String) {\n  self.name = name\n}',
    correctAnswers: ['init'],
    hints: ['Short for initialization.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Range operator',
    description: 'Use closed range to iterate 1 to 3 and print. output: "123".',
    initialCode: 'for i in 1___3 {\n  print(i, terminator: "")\n}',
    correctAnswers: ['...'],
    hints: ['Three dots.']
  },
  {
    id: 27,
    type: 'theory',
    title: 'Deinitializer',
    description: 'Keyword for clean up before a class instance is deallocated.',
    initialCode: 'deinit { }',
    options: ['destructor', 'deinit', 'finalize', 'cleanup'],
    correctAnswers: [1],
    hints: ['Only for classes.']
  },
  {
    id: 28,
    type: 'theory',
    title: 'Property Observers',
    description: 'Which observer runs AFTER a property has changed?',
    options: ['willSet', 'didSet', 'afterChange', 'onUpdate'],
    correctAnswers: [1],
    hints: ['"did" indicates something already happened.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Type Casting',
    description: 'Conditional downcast operator.',
    initialCode: 'let s = item ___? String',
    correctAnswers: ['as'],
    hints: ['Used for casting.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'SwiftUI',
    description: 'What is SwiftUI?',
    options: ['A database', 'A declarative framework for building user interfaces', 'A server-side runtime', 'A testing tool'],
    correctAnswers: [1],
    hints: ['New way to build UI for all Apple platforms.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Optionals',
    description: 'How do you declare an optional integer in Swift?',
    options: ['Int?', 'Optional<Int>', 'int x = null;', 'Both Int? and Optional<Int>'],
    correctAnswers: [3],
    hints: ['The question mark is a shorthand for the Optional enum.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Optional Unwrapping',
    description: 'What does "if let" do in Swift?',
    options: ['Loop through items', 'Safely unwrap an optional', 'Define a constant', 'Check for nil only'],
    correctAnswers: [1],
    hints: ['Checks if optional has a value and assigns it to a new constant.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Guard statement',
    description: 'Statement used to exit early if a condition is not met.',
    initialCode: '___ let val = optional else { return }',
    correctAnswers: ['guard'],
    hints: ['Helps avoid "pyramid of doom" indentation.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Value vs Reference',
    description: 'In Swift, what type of thing is a "Struct"?',
    options: ['Reference type', 'Value type', 'Hybrid type', 'Class type'],
    correctAnswers: [1],
    hints: ['Classes are reference types, Structs/Enums are value types.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Closures',
    description: 'What is a closure in Swift?',
    options: ['A self-contained block of functionality that can be passed around', 'A way to close a file', 'A type of enum', 'A class destructor'],
    correctAnswers: [0],
    hints: ['Similar to lambdas in other languages.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Array Append',
    description: 'Add 3 to var a = [1, 2].',
    initialCode: 'var a = [1, 2]\na.___ (3)',
    correctAnswers: ['append'],
    hints: ['Standard array method.']
  },
  {
    id: 37,
    type: 'theory',
    title: 'Properties',
    description: 'What is a "computed property"?',
    options: ['A property that calculates its value each time it is accessed', 'A property stored in flash memory', 'A static property', 'A protected property'],
    correctAnswers: [0],
    hints: ['Uses getter and optionally setter logic.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Property Observers',
    description: 'Which observer runs AFTER a property value changes?',
    options: ['willSet', 'didSet', 'afterSet', 'resultSet'],
    correctAnswers: [1],
    hints: ['The name starts with "did".']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Enum with values',
    description: 'Enums in Swift can store values of each case. These are called ___ values.',
    initialCode: 'enum Result {\n  case success(___)\n}',
    correctAnswers: ['associated'],
    hints: ['Different from raw values.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Dictionary Access',
    description: 'Get value for key "A" from dict d.',
    initialCode: 'let d = ["A": 1]\nlet v = d["___"]',
    correctAnswers: ['A'],
    hints: ['Result is an optional.']
  },
  {
    id: 41,
    type: 'theory',
    title: 'Protocols',
    description: 'What is a Protocol in Swift?',
    options: ['A network standard', 'A blueprint of methods or properties for classes/structs to adopt', 'A type of inheritance', 'A private function'],
    correctAnswers: [1],
    hints: ['Similar to interfaces in Java/C#.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Extensions',
    description: 'What can Extensions do in Swift?',
    options: ['Add functionality to an existing type', 'Increase file size', 'Add new stored properties', 'Only add comments'],
    correctAnswers: [0],
    hints: ['Useful for adding protocols to types you don\'t own.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Initialization',
    description: 'Keyword for a constructor in Swift.',
    initialCode: '___(name: String) {\n  self.name = name\n}',
    correctAnswers: ['init'],
    hints: ['Short for initialize.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'For-in loop',
    description: 'Iterate 1 to 3 inclusive.',
    initialCode: 'for i in 1___3 {\n  print(i)\n}',
    correctAnswers: ['...'],
    hints: ['Closed range operator.']
  },
  {
    id: 45,
    type: 'theory',
    title: 'ARC',
    description: 'What does ARC stand for in Swift memory management?',
    options: ['Automatic Resource Control', 'Automatic Reference Counting', 'Advanced Runtime Cache', 'Array Reference Counter'],
    correctAnswers: [1],
    hints: ['Manages memory automatically for reference types.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Weak vs Strong',
    description: 'Why use a "weak" reference?',
    options: ['To save power', 'To prevent strong reference cycles (memory leaks)', 'To make code faster', 'To allow nil values only'],
    correctAnswers: [1],
    hints: ['Example: delegate pattern.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Deinitialization',
    description: 'Keyword for a destructor in Swift.',
    initialCode: '___ {\n  // cleanup\n}',
    correctAnswers: ['deinit'],
    hints: ['Called when object is deallocated.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'String interpolation',
    description: 'Print "Age: 20" using variable age.',
    initialCode: 'let age = 20\nprint("Age: ___")',
    correctAnswers: ['\\(age)'],
    hints: ['Backslash and parentheses.']
  },
  {
    id: 49,
    type: 'theory',
    title: 'Access Control',
    description: 'Which access level makes an entity accessible only within the defining source file?',
    options: ['private', 'fileprivate', 'internal', 'public'],
    correctAnswers: [1],
    hints: ['Starts with "file".']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Generics',
    description: 'How do you define a generic function in Swift?',
    options: ['func f<T>(arg: T)', 'func f(T arg)', 'class f<T>', 'define f(T)'],
    correctAnswers: [0],
    hints: ['Uses angle brackets.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Try keyword',
    description: 'Keyword used before calling a throwing function.',
    initialCode: 'do {\n  ___ canThrowError()\n} catch { ... }',
    correctAnswers: ['try'],
    hints: ['Signifies that the call might fail.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Map array',
    description: 'Double [1, 2] using map (output: "[2, 4]").',
    initialCode: 'let a = [1, 2]\nlet b = a.map { $0 * 2 }\nprint(b)',
    testCases: [
      {
        expectedOutput: '[2, 4]',
        description: 'Should print doubled array'
      }
    ]
  },
  {
    id: 53,
    type: 'theory',
    title: 'Type Aliases',
    description: 'How to define a name "Feet" for type Int?',
    options: ['typealias Feet = Int', 'type Feet = Int', 'alias Feet = Int', 'let Feet = Int'],
    correctAnswers: [0],
    hints: ['One word keyword.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Tuple labels',
    description: 'Can Swift tuples have labeled elements?',
    options: ['Yes', 'No', 'Only for two elements', 'Only in Swift 5.0+'],
    correctAnswers: [0],
    hints: ['let point = (x: 10, y: 20)']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Self',
    description: 'Keyword used to refer to current type inside its definition (e.g., inside a method).',
    initialCode: 'static function create() -> ___ { ... }',
    correctAnswers: ['Self'],
    hints: ['Capitalized.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Check type',
    description: 'Use "is" to check if object is String.',
    initialCode: 'if obj ___ String {\n  print("Yes")\n}',
    correctAnswers: ['is'],
    hints: ['Two letter keyword.']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Error Protocol',
    description: 'What must a type conform to in order to be thrown using "throw"?',
    options: ['Exception', 'Error', 'Throwable', 'Failure'],
    correctAnswers: [1],
    hints: ['A built-in protocol.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Opaque Types',
    description: 'What does the "some" keyword signify in a return type?',
    options: ['Optional type', 'Opaque result type (hides specific type details)', 'Generic type', 'Any type'],
    correctAnswers: [1],
    hints: ['Used heavily in SwiftUI.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Lazy property',
    description: 'Keyword for a property that is calculated only when first used.',
    initialCode: '___ var heavy = calculation()',
    correctAnswers: ['lazy'],
    hints: ['Improves performance by delaying work.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Swift Creator',
    description: 'Which company created Swift?',
    options: ['Microsoft', 'Apple', 'Google', 'Oracle'],
    correctAnswers: [1],
    hints: ['Replacement for Objective-C.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Type Inference',
    description: 'Does Swift support type inference?',
    options: ['Yes', 'No', 'Only for integers', 'Only in Swift 5+'],
    correctAnswers: [0],
    hints: ['let name = "Swift" // inferred as String.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Optionals',
    description: 'How do you declare a nullable string in Swift?',
    options: ['String?', 'String!', 'String null', 'Optional<String>'],
    correctAnswers: [0],
    hints: ['Uses the question mark.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Constant',
    description: 'Keyword to declare a constant.',
    initialCode: '___ version = 5.0',
    correctAnswers: ['let'],
    hints: ['Immutable variable.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Value vs Reference Types',
    description: 'Is a Swift "struct" a value type or a reference type?',
    options: ['Value Type', 'Reference Type', 'Both', 'Neither'],
    correctAnswers: [0],
    hints: ['Copied when passed around.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Classes in Swift',
    description: 'Is a Swift "class" a value type or a reference type?',
    options: ['Value Type', 'Reference Type', 'Both', 'Neither'],
    correctAnswers: [1],
    hints: ['Shares a single instance when passed around.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Array append',
    description: 'Add "red" to array colors.',
    initialCode: 'colors.___("red")',
    correctAnswers: ['append'],
    hints: ['Standard method to add to end.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Forced Unwrapping',
    description: 'Which symbol is used for forced unwrapping of an optional?',
    options: ['?', '!', '*', '&'],
    correctAnswers: [1],
    hints: ['Use with caution, it can crash if nil.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Optional Binding',
    description: 'What is the syntax for optional binding?',
    options: ['if let x = optional { ... }', 'if optional { ... }', 'let x = optional!', 'none'],
    correctAnswers: [0],
    hints: ['Safely unwraps an optional if it has a value.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'String interpolate',
    description: 'Syntax to insert variable "x" into string.',
    initialCode: '"Val: ___"',
    correctAnswers: ['\(x)'],
    hints: ['Uses backslash and parentheses.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Count items',
    description: 'Get number of items in array "a".',
    initialCode: 'let n = a.___',
    correctAnswers: ['count'],
    hints: ['Property of collections.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Protocols',
    description: 'What is a Protocol in Swift?',
    options: ['A type of variable', 'A blueprint of methods, properties, and other requirements', 'A network layer', 'A GUI framework'],
    correctAnswers: [1],
    hints: ['Similar to Interfaces in other languages.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Extensions',
    description: 'What do Swift extensions do?',
    options: ['Increase file size', 'Add new functionality to an existing class, struct, enum, or protocol type', 'Delete code', 'None'],
    correctAnswers: [1],
    hints: ['Can add methods even to types you don\'t own code for.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Guard statement',
    description: 'Statement for early exit if a condition is not met.',
    initialCode: '___ let x = optional else { return }',
    correctAnswers: ['guard'],
    hints: ['Requires an else block.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Check even',
    description: 'Check if n is even.',
    initialCode: 'if n ___ 2 == 0 { ... }',
    correctAnswers: ['%'],
    hints: ['Modulo operator.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Closures',
    description: 'What are closures?',
    options: ['Closing a file', 'Self-contained blocks of functionality that can be passed around and used in your code', 'Class destructors', 'None'],
    correctAnswers: [1],
    hints: ['Similar to lambdas in other languages.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'ARC',
    description: 'What does ARC stand for?',
    options: ['Automatic Resource Control', 'Automatic Reference Counting', 'Apple Resource Compiler', 'Advanced Run Context'],
    correctAnswers: [1],
    hints: ['Swift\'s memory management system.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Switch break',
    description: 'Does Swift need an explicit break in switch cases?',
    initialCode: 'switch x { case 1: print(1) } // needs break___?',
    correctAnswers: ['no'],
    hints: ['Execution does not fall through by default.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Print message',
    description: 'Print "Hello".',
    initialCode: '___("Hello")',
    correctAnswers: ['print'],
    hints: ['Standard output function.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Enumerations',
    description: 'Can Swift enums have methods?',
    options: ['Yes', 'No', 'Only in classes', 'Only for strings'],
    correctAnswers: [0],
    hints: ['They can also have computed properties.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Computed Properties',
    description: 'What is a computed property?',
    options: ['A property that calculates its value each time it is accessed', 'A fast property', 'A property saved to disk', 'A property that never changes'],
    correctAnswers: [0],
    hints: ['Uses get and set blocks.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Init keyword',
    description: 'Method called during object initialization.',
    initialCode: '___(name: String) { self.name = name }',
    correctAnswers: ['init'],
    hints: ['Standard initializer name.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Map array',
    description: 'Transform [1, 2] to doubles.',
    initialCode: 'let res = [1, 2].___ { $0 * 2 }',
    correctAnswers: ['map'],
    hints: ['Standard functional method.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Error Handling',
    description: 'Which keyword is used to mark a function that can throw an error?',
    options: ['error', 'throws', 'exception', 'canThrow'],
    correctAnswers: [1],
    hints: ['Called with "try".']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Access Control',
    description: 'What is the "private" access level?',
    options: ['Accessible anywhere', 'Restricts the use of an entity to the enclosing declaration', 'Accessible in the same module', 'Accessible in child classes only'],
    correctAnswers: [1],
    hints: ['Most restrictive level.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Self keyword',
    description: 'Keyword to refer to the current instance.',
    initialCode: 'self.___ = val',
    correctAnswers: ['propName'],
    hints: ['Used to disambiguate parameters and properties.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Check empty',
    description: 'Check if array "a" is empty.',
    initialCode: 'if a.___ { ... }',
    correctAnswers: ['isEmpty'],
    hints: ['Property of collections.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'SwiftUI',
    description: 'What is SwiftUI?',
    options: ['A Swift compiler', 'A framework for building user interfaces across all Apple platforms', 'A database', 'A testing tool'],
    correctAnswers: [1],
    hints: ['Uses a declarative syntax.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Generics',
    description: 'What symbol is used for type parameters in Swift generics?',
    options: ['( )', '[ ]', '< >', '{ }'],
    correctAnswers: [2],
    hints: ['Angle brackets.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Case statement',
    description: 'What keyword follows WHEN in a switch statement?',
    initialCode: 'case .active ___ 1 > 0:',
    correctAnswers: ['where'],
    hints: ['Used for additional conditions in case matching.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'Swift Creator',
    description: 'Which company created Swift?',
    options: ['Apple', 'IBM', 'Google', 'Microsoft'],
    correctAnswers: [0],
    hints: ['Introduced at WWDC 2014.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Swift: Type Aliases',
    description: 'What is a type alias in Swift?',
    options: ['A new name for an existing type', 'A copy of a type', 'A private type', 'None'],
    correctAnswers: [0],
    hints: ['typealias AudioSample = UInt16']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Swift: Tuples',
    description: 'What are tuples in Swift?',
    options: ['Sets of unique values', 'Group multiple values into a single compound value', 'Arrays of strings', 'None'],
    correctAnswers: [1],
    hints: ['Example: (404, "Not Found")']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Optional binding',
    description: 'Syntax for optional binding to safely unwrap a value.',
    initialCode: 'if ___ let name = optionalName { ... }',
    correctAnswers: ['let'],
    hints: ['Checks if the optional contains a value.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Swift: Nil-Coalescing',
    description: 'What is the nil-coalescing operator in Swift?',
    options: ['??', '?:', '!!', 'None'],
    correctAnswers: [0],
    hints: ['Unwraps an optional if it contains a value, or returns a default value otherwise.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Swift: Range Operators',
    description: 'What does "1...5" represent?',
    options: ['1 to 4', '1 to 5 (inclusive)', '1 and 5', 'None'],
    correctAnswers: [1],
    hints: ['Closed range operator.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Define class',
    description: 'Start class definition for "User".',
    initialCode: '___ User { ... }',
    correctAnswers: ['class'],
    hints: ['Keyword for defining a class.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Swift: Structures vs Classes',
    description: 'What is a key difference?',
    options: ['Classes are value types, structs are reference types', 'Structs are value types, classes are reference types', 'No difference', 'None'],
    correctAnswers: [1],
    hints: ['Reference types are shared; value types are copied.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Swift: Properties',
    description: 'What is a computed property?',
    options: ['A property that stores a value', 'A property that does not store a value, but provides a getter and an optional setter', 'A static property', 'None'],
    correctAnswers: [1],
    hints: ['Calculates its value every time it is accessed.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Swift init',
    description: 'Keyword for defining a constructor.',
    initialCode: '___(name: String) { self.name = name }',
    correctAnswers: ['init'],
    hints: ['Short for initializer.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Array append',
    description: 'Add 1 to array "a".',
    initialCode: 'a.___ (1)',
    correctAnswers: ['append'],
    hints: ['Method to add a new element to the end of an array.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Swift: Protocols',
    description: 'What is a Protocol?',
    options: ['A concrete type', 'A blueprint of methods, properties, and other requirements', 'A networking rule', 'None'],
    correctAnswers: [1],
    hints: ['Similar to interfaces in other languages.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Swift: Extensions',
    description: 'What do extensions allow?',
    options: ['Deleting code', 'Adding new functionality to an existing class, structure, enumeration, or protocol type', 'Hiding code', 'None'],
    correctAnswers: [1],
    hints: ['Can even extend types for which you do not have access to the original source code.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Generic syntax',
    description: 'Syntax for a generic function parameter.',
    initialCode: 'func swap<___>(inout a: T, inout b: T)',
    correctAnswers: ['T'],
    hints: ['Place-holder type name.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Check type',
    description: 'Check if v is a String.',
    initialCode: 'if v ___ String { ... }',
    correctAnswers: ['is'],
    hints: ['Type check operator.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Swift: ARC',
    description: 'What does ARC stand for?',
    options: ['Automatic Reference Counting', 'Apple Runtime Core', 'Advanced Resource Control', 'None'],
    correctAnswers: [0],
    hints: ['Swift uses this to track and manage your app\'s memory usage.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Swift: Strong, Weak, Unowned',
    description: 'Which one should be used to avoid retain cycles?',
    options: ['strong', 'weak', 'Both weak and unowned', 'None'],
    correctAnswers: [2],
    hints: ['Depends on the relative lifetimes of the objects.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Guarding',
    description: 'Keyword for early exit in a function.',
    initialCode: '___ let id = user.id else { return }',
    correctAnswers: ['guard'],
    hints: ['Transfer program control out of a scope if one or more conditions aren\'t met.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Deinitializer',
    description: 'Define a deinitializer.',
    initialCode: '___ { println("bye") }',
    correctAnswers: ['deinit'],
    hints: ['Called immediately before a class instance is deallocated.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Swift: Error Handling',
    description: 'How to mark a function that can throw an error?',
    options: ['func run() error', 'func run() throws', 'func run() can_fail', 'None'],
    correctAnswers: [1],
    hints: ['The keyword is placed after the parameter list.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Swift: Access Control',
    description: 'Which level restricts access to the defining source file?',
    options: ['public', 'internal', 'fileprivate', 'private'],
    correctAnswers: [2],
    hints: ['More restrictive than internal, less than private.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Static property',
    description: 'Keyword to define a property that belongs to the type itself.',
    initialCode: '___ var count = 0',
    correctAnswers: ['static'],
    hints: ['Can also use "class" for computed properties in classes.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Try expression',
    description: 'Call a throwing function.',
    initialCode: '___ methodThatThrows()',
    correctAnswers: ['try'],
    hints: ['Indicates that the following code can throw an error.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Swift: Closures',
    description: 'What are Closures?',
    options: ['Self-contained blocks of functionality that can be passed around and used in your code', 'Class destructors', 'File openers', 'None'],
    correctAnswers: [0],
    hints: ['Similar to lambdas in other languages.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Swift: Opaque Types',
    description: 'What is the "some" keyword used for?',
    options: ['Random values', 'Opaque return types (hiding the concrete return type)', 'Private members', 'None'],
    correctAnswers: [1],
    hints: ['Commonly seen in SwiftUI: var body: some View.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Defer keyword',
    description: 'Keyword to execute a block of code just before the current scope exits.',
    initialCode: '___ { file.close() }',
    correctAnswers: ['defer'],
    hints: ['Useful for cleanup tasks.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Filter array',
    description: 'Filter even numbers.',
    initialCode: 'let evens = nums.___ { $0 % 2 == 0 }',
    correctAnswers: ['filter'],
    hints: ['Returns a new array containing the elements that satisfy the predicate.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Swift: Result type',
    description: 'What is the Result type used for?',
    options: ['To return 0', 'To represent the value of a successful operation or a failure with an error', 'To sort data', 'None'],
    correctAnswers: [1],
    hints: ['An enum with two cases: .success and .failure.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Swift: Main actor',
    description: 'What does @MainActor ensure?',
    options: ['Performance', 'That the code runs on the main thread', 'Security', 'None'],
    correctAnswers: [1],
    hints: ['Essential for UI updates in asynchronous code.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Swift enumeration',
    description: 'Keyword to define an enumeration.',
    initialCode: '___ Direction { case north, south }',
    correctAnswers: ['enum'],
    hints: ['A common type for a group of related values.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'Swift Creator',
    description: 'Which company developed Swift?',
    options: ['Google', 'Apple', 'Microsoft', 'JetBrains'],
    correctAnswers: [1],
    hints: ['Introduced at WWDC 2014.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Swift: Optional Binding',
    description: 'Which keyword is used for optional binding?',
    options: ['if let', 'if optional', 'bind', 'None'],
    correctAnswers: [0],
    hints: ['Safely unwraps an optional value.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Swift: Guard',
    description: 'What is the "guard" statement used for?',
    options: ['To repeat code', 'To exit a scope early if a condition is not met', 'To create a class', 'None'],
    correctAnswers: [1],
    hints: ['Improves readability of code by reducing nested if statements.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Swift: Range',
    description: 'Operator for a closed range (includes both values).',
    initialCode: 'for i in 1 ___ 5 { ... }',
    correctAnswers: ['...'],
    hints: ['Three dots.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Swift: Closures',
    description: 'What are closures in Swift?',
    options: ['Self-contained blocks of functionality that can be passed around and used in your code', 'A way to close a file', 'A type of variable', 'None'],
    correctAnswers: [0],
    hints: ['Similar to lambdas in other languages.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Swift: Defer',
    description: 'When does a "defer" block execute?',
    options: ['At the beginning of a function', 'Just before code execution leaves the current scope', 'Only if an error occurs', 'None'],
    correctAnswers: [1],
    hints: ['Useful for cleanup actions.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Swift: Append',
    description: 'Add 1 to an array "arr".',
    initialCode: 'var arr = [2]\narr.___ (1)',
    correctAnswers: ['append'],
    hints: ['Standard array modification.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Swift: Struct vs Class',
    description: 'What is the main difference between a struct and a class in Swift?',
    options: ['Structs are reference types, classes are value types', 'Structs are value types, classes are reference types', 'No difference', 'None'],
    correctAnswers: [1],
    hints: ['Structs are copied when passed around; classes are shared.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Swift: ARC',
    description: 'What does ARC stand for in Swift?',
    options: ['Automatic Resource Control', 'Automatic Reference Counting', 'Apple Runtime Compiler', 'None'],
    correctAnswers: [1],
    hints: ['Used to track and manage application memory usage.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Swift: Typealias',
    description: 'Keyword to define an alternative name for an existing type.',
    initialCode: '___ AudioSample = UInt16',
    correctAnswers: ['typealias'],
    hints: ['Makes code more descriptive.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'Swift: String length',
    description: 'Get number of characters in string "s".',
    initialCode: 'let s = "hello"\nlet count = s.___ .count',
    correctAnswers: ['count'],
    hints: ['You can use .count directly on the string in recent Swift versions.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Swift: Computed Properties',
    description: 'What is a computed property?',
    options: ['A property that is shared between instances', 'A property that provides a getter and an optional setter to retrieve and set other properties indirectly', 'A property that is calculated only once', 'None'],
    correctAnswers: [1],
    hints: ['Does not actually store a value.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Swift: Protocol',
    description: 'What is a protocol in Swift?',
    options: ['A way to communicate with a server', 'A blueprint of methods, properties, and other requirements that suit a particular task or piece of functionality', 'A type of class', 'None'],
    correctAnswers: [1],
    hints: ['Similar to interfaces in other languages.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Swift: Initializer',
    description: 'Keyword used to define a constructor for a class or struct.',
    initialCode: '___ (name: String) {\n    self.name = name\n}',
    correctAnswers: ['init'],
    hints: ['Prepares a new instance of a type for use.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Swift: Filter array',
    description: 'Filter array "nums" for values > 5.',
    initialCode: 'let res = nums.___ { $0 > 5 }',
    correctAnswers: ['filter'],
    hints: ['Standard functional method.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Swift: Generics',
    description: 'What is the purpose of generics in Swift?',
    options: ['To make code faster', 'To write flexible, reusable functions and types that can work with any type, subject to requirements you define', 'To generate random numbers', 'None'],
    correctAnswers: [1],
    hints: ['Avoids code duplication.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Swift: Type Inference',
    description: 'What is type inference in Swift?',
    options: ['You must declare types for all variables', 'The compiler automatically deduces the type of an expression when it compiles your code', 'A way to change types at runtime', 'None'],
    correctAnswers: [1],
    hints: ['Allows you to omit type declarations in many cases.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Swift: Error Handling',
    description: 'Which keywords are used for error handling in Swift?',
    options: ['try, catch, throw', 'try, except, raise', 'begin, rescue, end', 'None'],
    correctAnswers: [0],
    hints: ['Similar to Java.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Swift: Mutating keyword',
    description: 'Keyword to allow a method in a struct to modify its own properties.',
    initialCode: '___ func moveBy(x: Double) { self.x += x }',
    correctAnswers: ['mutating'],
    hints: ['Necessary because structs are value types.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Swift: Map array',
    description: 'Multiply each element of [1, 2] by 2.',
    initialCode: 'let res = [1, 2].___ { $0 * 2 }',
    correctAnswers: ['map'],
    hints: ['Standard functional transformation.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Swift: Extensions',
    description: 'What are extensions used for in Swift?',
    options: ['To create new classes', 'To add new functionality to an existing class, struct, enumeration, or protocol type', 'To hide code', 'None'],
    correctAnswers: [1],
    hints: ['Allows extending types you don\'t own (like String or Int).']
  },
  {
    id: 141,
    type: 'theory',
    title: 'Swift: Access Control',
    description: 'Which access level allows access only within the defining entity?',
    options: ['public', 'internal', 'fileprivate', 'private'],
    correctAnswers: [3],
    hints: ['The most restrictive access level.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Swift: Any keyword',
    description: 'Type that can represent an instance of any type at all, including function types.',
    initialCode: 'var values: [___] = [1, "hi"]',
    correctAnswers: ['Any'],
    hints: ['Use sparingly to maintain type safety.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'Swift: Print text',
    description: 'Print "Hello" to the console.',
    initialCode: '___ ("Hello")',
    correctAnswers: ['print'],
    hints: ['Standard output function.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Swift: Deinitializer',
    description: 'What is a "deinit" in Swift?',
    options: ['A way to delete a file', 'A deinitializer that is called immediately before a class instance is deallocated', 'A type of function', 'None'],
    correctAnswers: [1],
    hints: ['Only available for class types.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Swift: Optional Chaining',
    description: 'What is the purpose of optional chaining?',
    options: ['To loop over optionals', 'Process for querying and calling properties, methods, and subscripts on an optional that might currently be nil', 'To force unwrap optionals', 'None'],
    correctAnswers: [1],
    hints: ['Returns nil gracefully if the optional is nil.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Swift: Super keyword',
    description: 'Keyword to access methods of the superclass.',
    initialCode: 'override func viewWillAppear() {\n    ___ .viewWillAppear()\n}',
    correctAnswers: ['super'],
    hints: ['Used in class inheritance.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Swift: First element',
    description: 'Get the first element of array "arr".',
    initialCode: 'let first = arr.___',
    correctAnswers: ['first'],
    hints: ['Returns an optional because the array might be empty.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Swift: Tuples',
    description: 'What is a tuple in Swift?',
    options: ['A fancy name for an array', 'A group of multiple values into a single compound value', 'A graphics object', 'None'],
    correctAnswers: [1],
    hints: ['Example: (404, "Not Found").']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Swift: Associated Types',
    description: 'Where are associated types used in Swift?',
    options: ['In classes', 'In protocols', 'In structs', 'None'],
    correctAnswers: [1],
    hints: ['Provides a placeholder name for a type that is used as part of the protocol.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Swift: Self keyword',
    description: 'The keyword for the current instance of a type.',
    initialCode: 'self.name = name',
    correctAnswers: ['self'],
    hints: ['Used to distinguish property names from parameter names.']
  }
];
