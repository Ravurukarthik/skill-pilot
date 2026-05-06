import { Question } from '../types';
export const RUST_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Use println!() to output "Hello, Rust!".',
    initialCode: 'fn main() {\n    // Write code here\n}',
    testCases: [
      {
        expectedOutput: 'Hello, Rust!',
        description: 'Should print Hello, Rust!'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Rust Focus',
    description: 'What are the three main goals of Rust?',
    options: ['Speed, Safety, and Concurrency', 'Dynamic typing, Ease of use, Portability', 'Graphics, Multimedia, Networking', 'Artificial Intelligence, Big Data, Cloud'],
    correctAnswers: [0],
    hints: ['Safety is a very big part of Rust.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'Ownership',
    description: 'What is the Ownership system in Rust used for?',
    options: ['Managing memory without a garbage collector', 'Defining classes', 'Handling HTTP requests', 'Managing user accounts'],
    correctAnswers: [0],
    hints: ['It manages memory at compile-time.']
  },
  {
    id: 4,
    type: 'blanks',
    title: 'Variable Immutability',
    description: 'By default, variables in Rust are ___.',
    initialCode: 'let x = 5; // x is ___',
    correctAnswers: ['immutable'],
    hints: ['They cannot be changed unless specified.']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Mutable Variables',
    description: 'Which keyword makes a variable mutable?',
    options: ['var', 'mut', 'mutable', 'change'],
    correctAnswers: [1],
    hints: ['let ___ x = 10;']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Simple sum',
    description: 'Print the sum of 40 and 60. Output: "100".',
    initialCode: 'fn main() {\n  // println!("{}")\n}',
    testCases: [
      {
        expectedOutput: '100',
        description: 'Should print 100'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'Cargo',
    description: 'What is Cargo in the Rust ecosystem?',
    options: ['The Rust compiler', 'Rust\'s build system and package manager', 'A type of variable', 'A database engine'],
    correctAnswers: [1],
    hints: ['Used to create, build, and run Rust projects.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Borrowing',
    description: 'What is a "reference" in Rust?',
    options: ['A copy of a value', 'A way to refer to some value without taking ownership of it', 'A global constant', 'An error type'],
    correctAnswers: [1],
    hints: ['Represented by an ampersand (&).']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Function definition',
    description: 'Keyword to define a function.',
    initialCode: '___ get_value() -> i32 { 10 }',
    correctAnswers: ['fn'],
    hints: ['Short for function.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'Array length',
    description: 'Print length of [1, 2, 3]. Output: "3".',
    initialCode: 'fn main() {\n  let a = [1, 2, 3];\n  // print length\n}',
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
    title: 'Match Pattern',
    description: 'Which keyword is used for powerful pattern matching in Rust?',
    options: ['switch', 'case', 'match', 'select'],
    correctAnswers: [2],
    hints: ['It must be exhaustive.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Option Type',
    description: 'How does Rust handle the absence of a value (instead of null)?',
    options: ['Nil', 'null', 'Option enum (Some or None)', 'undefined'],
    correctAnswers: [2],
    hints: ['It forces the developer to handle the case where a value might not exist.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Return type',
    description: 'Symbol used to specify return type.',
    initialCode: 'fn add(a: i32) ___ i32 { a + 1 }',
    correctAnswers: ['->'],
    hints: ['An arrow.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'String usage',
    description: 'Print "7" for length of "Rustace".',
    initialCode: 'fn main() {\n  let s = "Rustace";\n  // println!("{}", s.len());\n}',
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
    title: 'Vector',
    description: 'What is a Vec<T> in Rust?',
    options: ['A fixed-size array', 'A growable, heap-allocated array', 'A type of pointer', 'A mathematical vector only'],
    correctAnswers: [1],
    hints: ['Contrast with primitive arrays.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Panic!',
    description: 'What does the panic!() macro do?',
    options: ['Cleans up memory', 'Causes the current thread to terminate immediately', 'Retries a function', 'Logs a warning'],
    correctAnswers: [1],
    hints: ['Used for unrecoverable errors.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Struct definition',
    description: 'Keyword for a custom data type.',
    initialCode: '___ User {\n  username: String\n}',
    correctAnswers: ['struct'],
    hints: ['Short for structure.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'Loop',
    description: 'Print "5" using an infinite loop and break.',
    initialCode: 'fn main() {\n  loop {\n    print!("5");\n    break;\n  }\n}',
    testCases: [
      {
        expectedOutput: '5',
        description: 'Should print 5'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Enums',
    description: 'Can Rust enums hold data?',
    options: ['Yes', 'No', 'Only integers', 'Only strings'],
    correctAnswers: [0],
    hints: ['enum Message { Quit, Move { x: i32, y: i32 } }']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Traits',
    description: 'What is a "trait" in Rust equivalent to?',
    options: ['An interface', 'A class', 'A package', 'A variable'],
    correctAnswers: [0],
    hints: ['Defines functionality a type can implement.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Implementation',
    description: 'Keyword to implement methods for a struct.',
    initialCode: '___ User {\n  fn get_name(&self) {}\n}',
    correctAnswers: ['impl'],
    hints: ['Short for implementation.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'If-else',
    description: 'Given x=5, if x>2 print "Big".',
    initialCode: 'fn main() {\n  let x = 5;\n  if x > 2 {\n    print!("Big");\n  }\n}',
    testCases: [
      {
        expectedOutput: 'Big',
        description: 'Should print Big'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'Unwrap',
    description: 'What happens if you call .unwrap() on a None value?',
    options: ['Returns 0', 'The program panics', 'It returns a default string', 'Nothing happens'],
    correctAnswers: [1],
    hints: ['Useful for quick prototyping but dangerous in production.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Crates',
    description: 'What is a "crate" in Rust?',
    options: ['A compilation unit (binary or library)', 'A physical box', 'A type of error', 'A deployment tool'],
    correctAnswers: [0],
    hints: ['The package manager Cargo downloads crates.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Macro',
    description: 'Symbol used to invoke a macro.',
    initialCode: 'println___("Hello")',
    correctAnswers: ['!'],
    hints: ['The exclamation mark.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Range syntax',
    description: 'Print "12" using 1..3 in a for loop.',
    initialCode: 'fn main() {\n  for i in 1..3 {\n    print!("{}", i);\n  }\n}',
    testCases: [
      {
        expectedOutput: '12',
        description: 'Should print 12'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Smart Pointers',
    description: 'Which of the following is a smart pointer in Rust?',
    options: ['Box<T>', 'int', 'bool', 'char'],
    correctAnswers: [0],
    hints: ['Used to allocate on the heap.']
  },
  {
    id: 28,
    type: 'theory',
    title: 'Attributes',
    description: 'What is used to add metadata to Rust code (e.g., #[derive(Debug)])?',
    options: ['Comments', 'Attributes', 'Traits', 'Macros'],
    correctAnswers: [1],
    hints: ['They start with a #.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Type Alias',
    description: 'Keyword for creating a new name for an existing type.',
    initialCode: '___ Kilometers = i32;',
    correctAnswers: ['type'],
    hints: ['Same as in TypeScript or C.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Static Dispatch',
    description: 'Does Rust use static or dynamic dispatch by default for generics?',
    options: ['Static (Monomorphization)', 'Dynamic', 'Depends on OS', 'Neither'],
    correctAnswers: [0],
    hints: ['The compiler generates specific code for each type used.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Ownership Rules',
    description: 'Which is NOT a rule of ownership in Rust?',
    options: ['Each value has an owner', 'There can only be one owner at a time', 'When the owner goes out of scope, the value is dropped', 'A value can have multiple owners simultaneously'],
    correctAnswers: [3],
    hints: ['Ownership is unique unless using smart pointers like Rc.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Borrowing',
    description: 'What is the rule for mutable references in Rust?',
    options: ['You can have as many as you want', 'You can have only one mutable reference to a piece of data in a particular scope', 'You cannot have mutable references', 'Mutable references are shared by default'],
    correctAnswers: [1],
    hints: ['Prevents data races at compile time.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'String Type',
    description: 'The standard growable, heap-allocated string type.',
    initialCode: 'let s = ___::new();',
    correctAnswers: ['String'],
    hints: ['Capital S.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Match Expression',
    description: 'Must a "match" expression in Rust be exhaustive?',
    options: ['Yes', 'No', 'Only for integers', 'Only in debug mode'],
    correctAnswers: [0],
    hints: ['You must handle all possible cases or use a catch-all pattern.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Option Enum',
    description: 'How to represent a value that could be something or nothing?',
    options: ['Option<T>', 'Maybe<T>', 'Result<T, E>', 'Nullable<T>'],
    correctAnswers: [0],
    hints: ['Has variants Some(T) and None.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Print Macro',
    description: 'Print "x is 5" using the x variable.',
    initialCode: 'let x = 5;\nprintln!("x is ___", x);',
    correctAnswers: ['{}'],
    hints: ['Placeholder curly braces.']
  },
  {
    id: 37,
    type: 'theory',
    title: 'Reference syntax',
    description: 'Symbol for an immutable reference.',
    options: ['*', '&', '@', '$'],
    correctAnswers: [1],
    hints: ['The ampersand.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Vectors',
    description: 'How to create a vector containing [1, 2, 3] using a macro?',
    options: ['vec![1, 2, 3]', 'vector!(1, 2, 3)', '[1, 2, 3]', 'list!(1, 2, 3)'],
    correctAnswers: [0],
    hints: ['Uses the vec! macro.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Unwrap',
    description: 'Method call that returns the value inside Some or panics if None.',
    initialCode: 'let x = some_option.___();',
    correctAnswers: ['unwrap'],
    hints: ['Quick but dangerous way to access optional values.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Mutable Variable',
    description: 'Make x mutable.',
    initialCode: 'let ___ x = 5;\nx = 6;',
    correctAnswers: ['mut'],
    hints: ['Short for mutable.']
  },
  {
    id: 41,
    type: 'theory',
    title: 'Cargo',
    description: 'What is Cargo in the Rust ecosystem?',
    options: ['A visual debugger', 'The build system and package manager', 'A text editor', 'A deployment server'],
    correctAnswers: [1],
    hints: ['Used to compile projects and manage dependencies.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Traits',
    description: 'What is a Trait in Rust?',
    options: ['A type of variable', 'A way to define shared behavior (interfaces)', 'A security feature', 'A looping construct'],
    correctAnswers: [1],
    hints: ['Similar to interfaces in other languages.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Main function',
    description: 'The keyword used to define a function.',
    initialCode: '___ main() { }',
    correctAnswers: ['fn'],
    hints: ['Short two-letter keyword.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Result check',
    description: 'Check if result "res" is successful.',
    initialCode: 'if res.is____() { println!("Ok") }',
    correctAnswers: ['ok'],
    hints: ['One of the variants of Result.']
  },
  {
    id: 45,
    type: 'theory',
    title: 'Zero cost abstractions',
    description: 'What does "zero-cost abstractions" mean in Rust?',
    options: ['Using them is free of charge', 'What you don\'t use, you don\'t pay for. And what you do use, you couldn\'t hand-code any better', 'They don\'t use any RAM', 'They are easy to learn'],
    correctAnswers: [1],
    hints: ['A core design goal of C++ and Rust.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Lifetimes',
    description: 'What are lifetimes used for?',
    options: ['To track how long a user stays on a site', 'To ensure that references are valid as long as we need them to be', 'To set timeouts for threads', 'To measure code performance'],
    correctAnswers: [1],
    hints: ['Annotated with a single quote: \'a.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Public access',
    description: 'Keyword to make a function or struct public.',
    initialCode: '___ fn run() { }',
    correctAnswers: ['pub'],
    hints: ['Prefix for public members.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Loop forever',
    description: 'Start an infinite loop.',
    initialCode: '___ { println!("hi"); }',
    correctAnswers: ['loop'],
    hints: ['Goes on forever unless broken.']
  },
  {
    id: 49,
    type: 'theory',
    title: 'Smart Pointers',
    description: 'Which smart pointer allows for multiple ownership?',
    options: ['Box<T>', 'Rc<T>', 'String', 'Mutex<T>'],
    correctAnswers: [1],
    hints: ['Reference Counting pointer.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Fearless Concurrency',
    description: 'Why is Rust concurrency called "fearless"?',
    options: ['Users are brave', 'The compiler catches many common concurrency bugs at compile time', 'Threads are very fast', 'Memory never runs out'],
    correctAnswers: [1],
    hints: ['Ownership and borrowing extend to thread safety.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Crate',
    description: 'A compilation unit in Rust (a library or executable).',
    initialCode: 'extern ___ my_lib;',
    correctAnswers: ['crate'],
    hints: ['Individual projects are called crates.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Range collection',
    description: 'Collect 1..=3 into a vector.',
    initialCode: 'let v: Vec<i32> = (1..=3).___();',
    correctAnswers: ['collect'],
    hints: ['Standard iterator method.']
  },
  {
    id: 53,
    type: 'theory',
    title: 'Enums with data',
    description: 'Can Rust enums store data (variants with fields)?',
    options: ['Yes', 'No', 'Only integers', 'Only in latest version'],
    correctAnswers: [0],
    hints: ['They are algebraic data types (ADTs).']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Self keyword',
    description: 'What does "self" refer to in an "impl" block?',
    options: ['The current object instance', 'The current type', 'The module', 'The main function'],
    correctAnswers: [0],
    hints: ['Lowercase self is the instance, uppercase Self is the type.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Unsafe Rust',
    description: 'Keyword to bypass some of Rust\'s safety checks.',
    initialCode: '___ { ... }',
    correctAnswers: ['unsafe'],
    hints: ['Used for low-level hardware or raw pointer manipulation.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Check None',
    description: 'Check if Option is None.',
    initialCode: 'if opt.is____() { ... }',
    correctAnswers: ['none'],
    hints: ['Opposite of is_some().']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Slices',
    description: 'What is a slice in Rust?',
    options: ['A full array on the stack', 'A reference to a contiguous sequence of elements in a collection', 'A type of hash map', 'A way to divide files'],
    correctAnswers: [1],
    hints: ['Examples: &[T], &str.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Derive Macro',
    description: 'What is #[derive(Debug)] used for?',
    options: ['Optimization', 'To automatically implement the Debug trait for a struct', 'To start debugging mode', 'To hide the struct'],
    correctAnswers: [1],
    hints: ['Allows printing structs with {:?}.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Mod keyword',
    description: 'Keyword to declare a module.',
    initialCode: '___ network { ... }',
    correctAnswers: ['mod'],
    hints: ['Helps organize code into hierarchy.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Rust Creator',
    description: 'Where was Rust originally developed?',
    options: ['Google', 'Mozilla', 'Microsoft', 'GitHub'],
    correctAnswers: [1],
    hints: ['Created by Graydon Hoare at Mozilla Research.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Ownership Rules',
    description: 'Which of the following is NOT a rule of ownership in Rust?',
    options: ['Each value in Rust has a variable that\'s called its owner', 'There can be multiple owners for a value at the same time', 'When the owner goes out of scope, the value will be dropped', 'There can only be one owner at a time'],
    correctAnswers: [1],
    hints: ['Rust uses strict ownership to manage memory without a GC.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Borrowing',
    description: 'What is a "reference" in Rust?',
    options: ['A way to own multiple values', 'A way to refer to some value without taking ownership of it', 'A global variable', 'A type of error'],
    correctAnswers: [1],
    hints: ['Created using the ampersand (&) symbol.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Macro print',
    description: 'Macro used to print to the console.',
    initialCode: '___!("Hello, {}!", name);',
    correctAnswers: ['println'],
    hints: ['Macros in Rust end with an exclamation mark.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'The "match" expression',
    description: 'Is "match" in Rust exhaustive?',
    options: ['Yes (must cover all possible cases)', 'No', 'Only for integers', 'Depends on compiler settings'],
    correctAnswers: [0],
    hints: ['The compiler will error if any case is missed.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Cargo',
    description: 'What is Cargo?',
    options: ['A ship', 'Rust\'s build system and package manager', 'A type of variable', 'A compiler flag'],
    correctAnswers: [1],
    hints: ['Used to manage dependencies, compile code, and run tests.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Vector push',
    description: 'Add 1 to vector v.',
    initialCode: 'let mut v = vec![];\nv.___ (1);',
    correctAnswers: ['push'],
    hints: ['Common method for dynamic arrays.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'The "Result" type',
    description: 'What are the two variants of the Result enum?',
    options: ['True and False', 'Ok and Err', 'Some and None', 'Success and Failure'],
    correctAnswers: [1],
    hints: ['Used for potentially recoverable errors.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'The "Option" type',
    description: 'What are the two variants of the Option enum?',
    options: ['Ok and Err', 'Some and None', 'True and False', 'Value and Null'],
    correctAnswers: [1],
    hints: ['Rust doesn\'t have a null value; it uses Option instead.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Struct definition',
    description: 'Keyword to define a structure.',
    initialCode: '___ User {\n  username: String,\n}',
    correctAnswers: ['struct'],
    hints: ['Similar to C.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Iterate vector',
    description: 'Iterate over vector v.',
    initialCode: 'for x in ___ v { ... }',
    correctAnswers: ['&'],
    hints: ['Safest to iterate by reference to avoid moving ownership.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Traits',
    description: 'What is a Trait in Rust?',
    options: ['A type of loop', 'A way to define shared behavior (interfaces)', 'A private class', 'A math function'],
    correctAnswers: [1],
    hints: ['Similar to protocols in Swift or interfaces in Java.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Lifetime annotations',
    description: 'What is the purpose of lifetimes (\'a)?',
    options: ['To speed up the app', 'To tell the compiler how long references should be valid', 'To encrypt data', 'To track execution time'],
    correctAnswers: [1],
    hints: ['Used to prevent dangling references.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Function return',
    description: 'Symbol used to specify return type in function signature.',
    initialCode: 'fn add(a: i32) ___ i32 { ... }',
    correctAnswers: ['->'],
    hints: ['Slim arrow.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Unwrap option',
    description: 'Get value from Some(x) or panic.',
    initialCode: 'let val = opt.___();',
    correctAnswers: ['unwrap'],
    hints: ['Simplest but least safe way to get data from Option/Result.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Immutability',
    description: 'Are variables in Rust mutable by default?',
    options: ['Yes', 'No', 'Depends on type', 'Only for integers'],
    correctAnswers: [1],
    hints: ['You must use the "mut" keyword for mutability.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Panic!',
    description: 'What does the panic!() macro do?',
    options: ['Restarts the computer', 'Stops program execution and prints an error message', 'Speeds up the loop', 'None'],
    correctAnswers: [1],
    hints: ['Unrecoverable error handling.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Crate',
    description: 'Term for a compilation unit (library or binary).',
    initialCode: 'extern ___ my_lib;',
    correctAnswers: ['crate'],
    hints: ['Dependencies in Cargo.toml are added as crates.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'String from',
    description: 'Convert string literal to String object.',
    initialCode: 'let s = String::___("hi");',
    correctAnswers: ['from'],
    hints: ['Static method on String.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Enums with Data',
    description: 'Can Rust enums hold data in their variants?',
    options: ['Yes', 'No', 'Only integers', 'Only in pointers'],
    correctAnswers: [0],
    hints: ['One of the most powerful features of Rust.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'The Borrow Checker',
    description: 'What is the "Borrow Checker"?',
    options: ['A person checking banks', 'A component of the Rust compiler that enforces ownership and borrowing rules', 'A debugging tool', 'A network layer'],
    correctAnswers: [1],
    hints: ['Ensures memory safety at compile time.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Module definition',
    description: 'Keyword to define a module.',
    initialCode: '___ network { ... }',
    correctAnswers: ['mod'],
    hints: ['Used for code organization and privacy.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Slice ref',
    description: 'Get slice of array a from index 1 to 3.',
    initialCode: 'let s = ___a[1..3];',
    correctAnswers: ['&'],
    hints: ['Slices are references to a sequence of elements.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Standard Library',
    description: 'Which module contains common collection types like Vec and HashMap?',
    options: ['std::collections', 'std::list', 'std::data', 'std::io'],
    correctAnswers: [0],
    hints: ['Root namespace is "std".']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Smart Pointers: Box',
    description: 'What is a Box<T>?',
    options: ['A square box', 'A smart pointer for heap allocation', 'A way to encrypt data', 'A type of error'],
    correctAnswers: [1],
    hints: ['The simplest smart pointer.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Unsafe Rust',
    description: 'Keyword to opt-out of some of Rust\'s memory safety guarantees.',
    initialCode: '___ { // do scary pointer stuff }',
    correctAnswers: ['unsafe'],
    hints: ['Necessary for low-level system programming.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Assert equal',
    description: 'Assert that x is 5.',
    initialCode: '___!(x, 5);',
    correctAnswers: ['assert_eq'],
    hints: ['Commonly used in tests.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Zero-Cost Abstractions',
    description: 'What does "zero-cost abstractions" mean in the context of Rust?',
    options: ['The language is free', 'What you don\'t use, you don\'t pay for. And what you do use, you couldn\'t hand-code any better', 'Code has no memory limit', 'None'],
    correctAnswers: [1],
    hints: ['Focus on performance and efficiency.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'String vs &str',
    description: 'What is the main difference?',
    options: ['No difference', 'String is owned/heap-allocated, &str is a reference/slice', 'String is for numbers', 'None'],
    correctAnswers: [1],
    hints: ['UTF-8 encoding applies to both.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Public visibility',
    description: 'Keyword to make a field or function accessible outside its module.',
    initialCode: '___ fn run() { }',
    correctAnswers: ['pub'],
    hints: ['Short for public.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'Rust Creator',
    description: 'Which organization originally developed Rust?',
    options: ['Mozilla', 'Google', 'NASA', 'Microsoft'],
    correctAnswers: [0],
    hints: ['Graydon Hoare started it as a personal project while working there.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Rust: Interior Mutability',
    description: 'What is "Interior Mutability" in Rust?',
    options: ['Changing a house', 'A design pattern that allows you to mutate data even when there are immutable references to that data', 'A bug', 'None'],
    correctAnswers: [1],
    hints: ['Commonly achieved using RefCell<T> or Mutex<T>.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Rust: RefCell<T>',
    description: 'When does RefCell<T> enforce borrowing rules?',
    options: ['At compile time', 'At runtime', 'Never', 'None'],
    correctAnswers: [1],
    hints: ['Useful for mocking or internal state changes that look immutable to the outside.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Rust: Deref trait',
    description: 'Trait used to customize the behavior of the dereference operator (*).',
    initialCode: 'impl ___ for MyBox { ... }',
    correctAnswers: ['Deref'],
    hints: ['Enables things like "deref coercion".']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Rust: Arc<T>',
    description: 'What does Arc stand for?',
    options: ['Atomic Reference Counter', 'Apple Runtime Core', 'Advanced Rust Class', 'None'],
    correctAnswers: [0],
    hints: ['A thread-safe version of Rc<T>.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Rust: Mutex',
    description: 'How to access data inside a Mutex?',
    options: ['m.data', 'm.lock().unwrap()', 'm.get()', 'None'],
    correctAnswers: [1],
    hints: ['Locking returns a guard that provides access to the data.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Define struct',
    description: 'Start struct definition for "User".',
    initialCode: '___ User { ... }',
    correctAnswers: ['struct'],
    hints: ['Used to create custom types.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Rust: Lifetimes',
    description: 'What are lifetimes in Rust?',
    options: ['The age of the programmer', 'A way for the compiler to ensure that all borrows are valid for as long as they are used', 'A type of variable', 'None'],
    correctAnswers: [1],
    hints: ['Most lifetimes are inferred, but some must be annotated (e.g. \'a).']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Rust: Zero-Cost Abstractions',
    description: 'What does "Zero-Cost Abstractions" mean?',
    options: ['Code is free', 'What you don\'t use, you don\'t pay for. And what you do use, you couldn\'t hand-code any better.', 'Easy coding', 'None'],
    correctAnswers: [1],
    hints: ['A core philosophy of Rust and C++.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Rust impl block',
    description: 'Keyword used to implement methods for a struct.',
    initialCode: '___ User { func run() {} }',
    correctAnswers: ['impl'],
    hints: ['Separate from the struct definition itself.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Vec push',
    description: 'Add 1 to vector "v".',
    initialCode: 'v.___ (1);',
    correctAnswers: ['push'],
    hints: ['Method to add an element to the end of a vector.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Rust: FFI',
    description: 'What does FFI stand for?',
    options: ['Foreign Function Interface', 'Fast File Index', 'Free Format Interface', 'None'],
    correctAnswers: [0],
    hints: ['Allows Rust code to call functions written in other languages like C.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Rust: Attributes: [derive]',
    description: 'What does #[derive(Debug)] do?',
    options: ['Deletes a struct', 'Automatically implements the Debug trait for a struct', 'Makes a struct public', 'None'],
    correctAnswers: [1],
    hints: ['Enables formatting a struct for printing with {:?}.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Rust crate',
    description: 'The unit of compilation in Rust.',
    initialCode: 'mod my_module;\n// this is part of a ___',
    correctAnswers: ['crate'],
    hints: ['Can be a library or a binary.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Print formatted',
    description: 'Print variable x.',
    initialCode: 'println!("Val: ___", x);',
    correctAnswers: ['{}'],
    hints: ['Placeholder for values.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Rust: Cargo',
    description: 'What is Cargo?',
    options: ['A shipping container', 'The Rust package manager and build system', 'A code editor', 'None'],
    correctAnswers: [1],
    hints: ['Handles building code, downloading libraries, and building those libraries.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Rust: Cargo.toml',
    description: 'What is the purpose of Cargo.toml?',
    options: ['To store secret keys', 'To define project metadata and dependencies', 'To write code', 'None'],
    correctAnswers: [1],
    hints: ['The manifest file for the Cargo package manager.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Module declaration',
    description: 'Keyword to declare a new module.',
    initialCode: '___ network { ... }',
    correctAnswers: ['mod'],
    hints: ['Helps organize code into packages.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Return value',
    description: 'Assign 5 to x using an expression.',
    initialCode: 'let x = { ___ 5 };',
    correctAnswers: [''],
    hints: ['In Rust, the last expression in a block is the return value (no semicolon). Wait, the prompt meant nothing for the blank.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Rust: Match pattern',
    description: 'Is search pattern in "match" exhaustive?',
    options: ['Yes (you must handle all possible outcomes/cases)', 'No', 'Optional', 'None'],
    correctAnswers: [0],
    hints: ['The compiler ensures we cover all arms of an enum.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Rust: Error propagation',
    description: 'What does the "?" operator do?',
    options: ['Asks a question', 'Propagates an error up the call stack if it exists', 'Deletes an error', 'None'],
    correctAnswers: [1],
    hints: ['Can only be used in functions that return a Result or Option.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Dynamic dispatch',
    description: 'Keyword for creating a trait object.',
    initialCode: 'let x: Box<___ MyTrait> = ...',
    correctAnswers: ['dyn'],
    hints: ['Short for dynamic.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Dereference pointer',
    description: 'Dereference pointer p.',
    initialCode: 'let val = ___p;',
    correctAnswers: ['*'],
    hints: ['Asterisk symbol.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Rust: Raw Pointers',
    description: 'What are raw pointers (*const T, *mut T)?',
    options: ['Safe pointers', 'Unsafe pointers that bypass Rust\'s safety guarantees', 'Fast strings', 'None'],
    correctAnswers: [1],
    hints: ['Required for FFI or low-level memory manipulation.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Rust: Unsafe Block',
    description: 'When is code placed in an "unsafe" block?',
    options: ['When it is broken', 'When performing operations that the compiler cannot guarantee are safe (e.g. dereferencing raw pointers)', 'Always', 'None'],
    correctAnswers: [1],
    hints: ['Does not mean the code is actually dangerous, just that the compiler isn\'t checking it for you.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Static variable',
    description: 'Keyword for a global variable with a fixed memory address.',
    initialCode: '___ COUNTER: i32 = 0;',
    correctAnswers: ['static'],
    hints: ['Lives for the entire duration of the program.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Expect method',
    description: 'Panic with message "err" on None/Err.',
    initialCode: 'v.___ ("err");',
    correctAnswers: ['expect'],
    hints: ['Similar to unwrap() but with a custom error message.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Rust: Slices',
    description: 'What is a slice in Rust?',
    options: ['A piece of pie', 'A reference to a contiguous sequence of elements in a collection', 'A type of array', 'None'],
    correctAnswers: [1],
    hints: ['Represented as &[T].']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Rust: String vs &str',
    description: 'Which one is a heap-allocated string?',
    options: ['&str', 'String', 'Both', 'None'],
    correctAnswers: [1],
    hints: ['&str is usually a reference to part of another string (a slice).']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'External crate',
    description: 'Keyword used to import an external crate in the root of your project.',
    initialCode: '___ extern crate my_lib;',
    correctAnswers: [''],
    hints: ['No longer strictly required in most modern Rust; "use" is enough.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'Rust Creator',
    description: 'Who originally created Rust?',
    options: ['Graydon Hoare', 'Anders Hejlsberg', 'Brendan Eich', 'Guido van Rossum'],
    correctAnswers: [0],
    hints: ['He started it as a personal project at Mozilla Research.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Rust: Ownership',
    description: 'What are the three main rules of ownership in Rust?',
    options: ['One owner, multiple references, no nulls', 'Each value has a variable called its owner, there can only be one owner at a time, and when the owner goes out of scope the value is dropped', 'Multiple owners, no references, immutable only', 'None'],
    correctAnswers: [1],
    hints: ['Core concept for memory safety without a garbage collector.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Rust: Borrowing',
    description: 'What is the restriction on multiple mutable references in the same scope?',
    options: ['No restriction', 'You can have only one mutable reference to a piece of data in a particular scope', 'You can have up to three', 'None'],
    correctAnswers: [1],
    hints: ['Prevents data races at compile time.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Rust: Immutability',
    description: 'Keyword to make a variable mutable in Rust.',
    initialCode: 'let ___ x = 5;',
    correctAnswers: ['mut'],
    hints: ['Variables are immutable by default.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Rust: Option Type',
    description: 'What is the purpose of the Option enum?',
    options: ['To provide optional arguments', 'To represent a value that can either be something (Some) or nothing (None), helping avoid null pointers', 'To sort arrays', 'None'],
    correctAnswers: [1],
    hints: ['Rust does not have a null type.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Rust: Result Type',
    description: 'What is the Result enum used for?',
    options: ['To store calculation results', 'For error handling, representing either success (Ok) or failure (Err)', 'To return from main', 'None'],
    correctAnswers: [1],
    hints: ['Used for functions that can fail.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Rust: Vector push',
    description: 'Add 1 to end of Vec<i32> v.',
    initialCode: 'let mut v = vec![];\nv.___ (1);',
    correctAnswers: ['push'],
    hints: ['Modifies the vector to add an element.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Rust: Traits',
    description: 'What is a trait in Rust?',
    options: ['A way to add graphics', 'A language feature that tells the Rust compiler about functionality a particular type has and can share with other types', 'A type of variable', 'None'],
    correctAnswers: [1],
    hints: ['Similar to interfaces in other languages.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Rust: Patter Matching',
    description: 'Which keyword is used for powerful pattern matching?',
    options: ['switch', 'match', 'case', 'None'],
    correctAnswers: [1],
    hints: ['Exhaustive matching is required.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Rust: Unit type',
    description: 'The type representing an empty tuple, used when a function returns nothing.',
    initialCode: 'fn say_hi() ___ { println!("hi"); }',
    correctAnswers: ['-> ()'],
    hints: ['Uses the arrow and parentheses.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'Rust: String length',
    description: 'Get number of bytes in String s.',
    initialCode: 'let s = String::from("hi");\nlet len = s.___ ();',
    correctAnswers: ['len'],
    hints: ['In UTF-8, this is the number of bytes, not necessarily characters.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Rust: Lifetimes',
    description: 'What is the purpose of lifetime annotations?',
    options: ['To measure performance', 'To ensure that references remain valid for as long as they are needed', 'To define global variables', 'None'],
    correctAnswers: [1],
    hints: ['Syntax uses a tick (e.g. \'a).']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Rust: Cargo',
    description: 'What is Cargo?',
    options: ['A type of variable', 'Rust\'s build system and package manager', 'The compiler itself', 'None'],
    correctAnswers: [1],
    hints: ['Handles building code, downloading libraries, and building those libraries.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Rust: Macros',
    description: 'Special character that identifies a call to a macro.',
    initialCode: 'println ___ ("Hello");',
    correctAnswers: ['!'],
    hints: ['The exclamation mark.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Rust: Parse int',
    description: 'Parse string "5" to i32.',
    initialCode: 'let n: i32 = "5".___ ().unwrap();',
    correctAnswers: ['parse'],
    hints: ['Tries to convert the string to the specified type.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Rust: Enums',
    description: 'Can Rust enums hold data?',
    options: ['Yes', 'No', 'Only integers', 'Only strings'],
    correctAnswers: [0],
    hints: ['Called "sum types" or "tagged unions" in other contexts.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Rust: Structs',
    description: 'What are the three types of structs in Rust?',
    options: ['Classic, Tuple, Unit-like', 'Public, Private, Internal', 'Static, Dynamic, Managed', 'None'],
    correctAnswers: [0],
    hints: ['Structs can have named fields, behave like tuples, or have no fields at all.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Rust: Slice Type',
    description: 'What is a slice in Rust?',
    options: ['A fixed-size array', 'A reference to a contiguous sequence of elements in a collection', 'A type of hash map', 'None'],
    correctAnswers: [1],
    hints: ['Slices are written as &[T].']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Rust: Unwrap',
    description: 'Method on Option/Result that returns the value or panics.',
    initialCode: 'let val = opt.___ ();',
    correctAnswers: ['unwrap'],
    hints: ['Use sparingly; better to handle errors explicitly.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Rust: String append',
    description: 'Append character \'!\' to String s.',
    initialCode: 'let mut s = String::from("Hi");\ns.___ (\'!\');',
    correctAnswers: ['push'],
    hints: ['Similar to Vec::push.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Rust: Unsafe Code',
    description: 'What does the "unsafe" keyword allow?',
    options: ['Deleting files', 'Performing operations that the compiler cannot guarantee are safe (like dereferencing raw pointers)', 'Making all variables public', 'None'],
    correctAnswers: [1],
    hints: ['Does not turn off the borrow checker; just gives extra "powers".']
  },
  {
    id: 141,
    type: 'theory',
    title: 'Rust: Orphan Rule',
    description: 'What is the orphan rule for traits?',
    options: ['You can\'t name a trait after a child', 'You can only implement a trait for a type if either the trait or the type is local to your crate', 'You must implement all traits', 'None'],
    correctAnswers: [1],
    hints: ['Prevents breaking changes when dependencies add traits/types.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Rust: Associated Types',
    description: 'Keyword used inside a trait to define a placeholder type.',
    initialCode: 'trait Iterator {\n    ___ Item;\n    fn next(&mut self) -> Option<Self::Item>;\n}',
    correctAnswers: ['type'],
    hints: ['Connects a type placeholder with a trait.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'Rust: Iteration',
    description: 'Get an iterator from a vector "v".',
    initialCode: 'for x in v.___ () { ... }',
    correctAnswers: ['iter'],
    hints: ['Creates an iterator that borrows elements.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Rust: Smart Pointers',
    description: 'What is "Box<T>"?',
    options: ['A UI element', 'A smart pointer for allocating values on the heap', 'A type of array', 'None'],
    correctAnswers: [1],
    hints: ['Allows storing data on the heap rather than the stack.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Rust: Deref Trait',
    description: 'What does implementing the Deref trait allow?',
    options: ['Deleting an object', 'Customizing the behavior of the dereference operator (*)', 'Cloning an object', 'None'],
    correctAnswers: [1],
    hints: ['Enables "deref coercion".']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Rust: Self keyword',
    description: 'Keyword for the current type in a trait or impl block.',
    initialCode: 'fn new() -> ___ { ... }',
    correctAnswers: ['Self'],
    hints: ['Capital "S" refers to the type itself.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Rust: Range',
    description: 'Iterate from 1 to 4 inclusive.',
    initialCode: 'for i in 1 ___ 5 { ... }',
    correctAnswers: ['..'],
    hints: ['The .. operator is exclusive at the end. Use ..= for inclusive.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Rust: Panic',
    description: 'What happens when "panic!" is macro is called?',
    options: ['The program restarts', 'The program prints an error message, unwinds the stack, and exits', 'The computer reboots', 'None'],
    correctAnswers: [1],
    hints: ['Represents an unrecoverable error.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Rust: Static Lifetime',
    description: 'What does "\'static" lifetime mean?',
    options: ['The reference is valid for the entire duration of the program', 'The reference is valid for 1 second', 'The reference is private', 'None'],
    correctAnswers: [0],
    hints: ['All string literals have \'static lifetime.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Rust: Use keyword',
    description: 'Keyword to bring a path into scope.',
    initialCode: '___ std::collections::HashMap;',
    correctAnswers: ['use'],
    hints: ['Similar to "import" in other languages.']
  }
];
