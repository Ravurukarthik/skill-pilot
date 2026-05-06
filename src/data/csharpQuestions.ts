import { Question } from '../types';
export const CSHARP_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Use Console.WriteLine() to print "Hello, C#!".',
    initialCode: 'using System;\n\nclass Program {\n    static void Main() {\n        // Write code here\n    }\n}',
    testCases: [
      {
        expectedOutput: 'Hello, C#!',
        description: 'Should print Hello, C#!'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'C# Framework',
    description: 'Which framework is primarily associated with C#?',
    options: ['.NET', 'Spring', 'Django', 'Laravel'],
    correctAnswers: [0],
    hints: ['Developed by Microsoft.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'Value Types',
    description: 'In C#, which of the following is a value type?',
    options: ['Class', 'Interface', 'Struct', 'String'],
    correctAnswers: [2],
    hints: ['Structs are allocated on the stack.']
  },
  {
    id: 4,
    type: 'blanks',
    title: 'Variable Type Deducing',
    description: 'Keyword to let the compiler determine the variable type.',
    initialCode: '___ name = "C#";',
    correctAnswers: ['var'],
    hints: ['Used for implicit typing.']
  },
  {
    id: 5,
    type: 'theory',
    title: 'C# Access Modifier',
    description: 'What is the default access modifier for members in a class?',
    options: ['public', 'private', 'protected', 'internal'],
    correctAnswers: [1],
    hints: ['Members are hidden by default.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Simple Addition',
    description: 'Print the sum of 50 and 50. Output: "100".',
    initialCode: 'using System;\nclass P {\n  static void Main() {\n    // Print sum\n  }\n}',
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
    title: 'Inheritance Syntax',
    description: 'Which symbol is used for inheritance in C#?',
    options: [':', '::', 'extends', '->'],
    correctAnswers: [0],
    hints: ['A single colon.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'C# String',
    description: 'Are strings objects in C#?',
    options: ['Yes', 'No', 'Only if declared new', 'Depends on .NET version'],
    correctAnswers: [0],
    hints: ['System.String is a class.']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Read Only',
    description: 'Modifier for a field that can only be assigned in declaration or constructor.',
    initialCode: 'public ___ int Id = 1;',
    correctAnswers: ['readonly'],
    hints: ['Read and only.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'Check Null',
    description: 'Use the null-conditional operator to access "Name" length safely from a nullable string "s" (if null, output nothing).',
    initialCode: 'using System;\nclass P {\n  static void Main() {\n    string s = null;\n    // Console.Write(s?.Length)\n  }\n}',
    testCases: [
      {
        expectedOutput: '',
        description: 'Should print nothing for null'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'Properties',
    description: 'What is the "get" and "set" syntax used for in C#?',
    options: ['Constructors', 'Methods', 'Properties', 'Fields'],
    correctAnswers: [2],
    hints: ['They provide accessors for private fields.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Garbage Collection',
    description: 'What component of .NET handles garbage collection?',
    options: ['CLR', 'FCL', 'Visual Studio', 'NuGet'],
    correctAnswers: [0],
    hints: ['Common Language Runtime.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Using Directive',
    description: 'Directive used to pull in a namespace.',
    initialCode: '___ System.Collections.Generic;',
    correctAnswers: ['using'],
    hints: ['Top of the file keyword.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'Array Length',
    description: 'Print the length of int[] arr = {1, 2, 3}. Output: "3".',
    initialCode: 'using System;\nclass P {\n  static void Main() {\n    int[] arr = {1, 2, 3};\n    // print length\n  }\n}',
    testCases: [
      {
        expectedOutput: '3',
        description: 'Should print 3'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'Generics',
    description: 'What is a generic collection class in C#?',
    options: ['ArrayList', 'List<T>', 'Hashtable', 'Queue'],
    correctAnswers: [1],
    hints: ['Supports type safety with angle brackets.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Abstractions',
    description: 'Can you inherit from multiple classes in C#?',
    options: ['Yes', 'No', 'Only from static classes', 'Only in C# 10+'],
    correctAnswers: [1],
    hints: ['C# only supports single class inheritance but multiple interface implementation.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Interface Declaration',
    description: 'Keyword for an interface.',
    initialCode: '___ IRepository { }',
    correctAnswers: ['interface'],
    hints: ['Standard OOP keyword.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'String Interpolation',
    description: 'Use interpolation to print "Val: 10" given int x = 10.',
    initialCode: 'using System;\nclass P {\n  static void Main() {\n    int x = 10;\n    // Console.WriteLine($"Val: {x}");\n  }\n}',
    testCases: [
      {
        expectedOutput: 'Val: 10',
        description: 'Should print Val: 10'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'LINQ',
    description: 'What does LINQ stand for?',
    options: ['Language Integrated Query', 'List Internal Network Query', 'Large Integrated Network', 'None'],
    correctAnswers: [0],
    hints: ['Allows querying data in a SQL-like way within C#.']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Async Await',
    description: 'What is the return type of an async method that does not return a value?',
    options: ['void', 'Task', 'AsyncResult', 'Thread'],
    correctAnswers: [1],
    hints: ['Task represents the async operation.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Static Keyword',
    description: 'Keyword for a member belonging to the type itself.',
    initialCode: 'public ___ void Help() { }',
    correctAnswers: ['static'],
    hints: ['Shared across instances.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'Foreach Loop',
    description: 'Iterate {1, 2} and print each.',
    initialCode: 'using System;\nclass P {\n  static void Main() {\n    int[] arr = {1, 2};\n    // foreach and print\n  }\n}',
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
    title: 'C# Namespaces',
    description: 'What keyword defines a scope that contains a set of related objects?',
    options: ['container', 'namespace', 'module', 'package'],
    correctAnswers: [1],
    hints: ['Groups classes and other types.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Delegates',
    description: 'What is a delegate in C#?',
    options: ['A type of loop', 'A type-safe function pointer', 'A generic class', 'An interface'],
    correctAnswers: [1],
    hints: ['References methods with a specific signature.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Nullable Type',
    description: 'Shorthand for Nullable<int>.',
    initialCode: 'int___ x = null;',
    correctAnswers: ['?'],
    hints: ['The question mark.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Nullable Coalescing',
    description: 'Print x if not null, else print 0. x is null here.',
    initialCode: 'using System;\nclass P {\n  static void Main() {\n    int? x = null;\n    // print x ?? 0\n  }\n}',
    testCases: [
      {
        expectedOutput: '0',
        description: 'Should print 0'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Base Keyword',
    description: 'What is the "base" keyword used for?',
    options: ['To create a new object', 'To refer to the parent class member', 'To exit a function', 'To define a static field'],
    correctAnswers: [1],
    hints: ['Opposite of "this".']
  },
  {
    id: 28,
    type: 'theory',
    title: 'Exceptions',
    description: 'Which block is used to finally release resources?',
    options: ['catch', 'finally', 'end', 'cleanup'],
    correctAnswers: [1],
    hints: ['Always executes.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Lambda Symbol',
    description: 'The "goes to" operator in C# lambdas.',
    initialCode: 'Func<int, int> sq = x ___ x * x;',
    correctAnswers: ['=>'],
    hints: ['Equals and greater than.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Virtual Keyword',
    description: 'What does the "virtual" keyword allow?',
    options: ['Makes class static', 'Allows a member to be overridden in a derived class', 'Prevents inheritance', 'Makes variable private'],
    correctAnswers: [1],
    hints: ['Paired with "override" in subclasses.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Value Types vs Reference Types',
    description: 'Which of these is a value type in C#?',
    options: ['string', 'class', 'struct', 'interface'],
    correctAnswers: [2],
    hints: ['Value types are stored on the stack.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Nullable Types',
    description: 'How to declare a nullable integer x?',
    options: ['int? x;', 'nullable<int> x;', 'int x = null;', 'Both int? and Nullable<int>'],
    correctAnswers: [3],
    hints: ['The question mark is a shorthand for Nullable<T>.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Async method',
    description: 'Keyword to define an asynchronous method.',
    initialCode: 'public ___ Task Run() { ... }',
    correctAnswers: ['async'],
    hints: ['Pairs with "await".']
  },
  {
    id: 34,
    type: 'theory',
    title: 'LINQ',
    description: 'What does LINQ stand for?',
    options: ['Language Integrated Query', 'Local Internal Network Query', 'Large Integrated Network', 'Logical Internal Query'],
    correctAnswers: [0],
    hints: ['Provides SQL-like querying capabilities in C#.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Inheritance symbol',
    description: 'Which symbol is used for inheritance in C#?',
    options: [':', 'extends', 'inherits', '::'],
    correctAnswers: [0],
    hints: ['Same as colon operator.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Print Variable',
    description: 'Print "Val: 10" using string interpolation.',
    initialCode: 'int x = 10;\nConsole.WriteLine($"___");',
    correctAnswers: ['Val: {x}'],
    hints: ['Uses curly braces inside a $ string.']
  },
  {
    id: 37,
    type: 'theory',
    title: 'Abstract vs Interface',
    description: 'Can an interface in C# 8.0+ contain a default implementation?',
    options: ['Yes', 'No', 'Only for static methods', 'Only in Java'],
    correctAnswers: [0],
    hints: ['New feature introduced in C# 8.0.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Properties',
    description: 'What is a property with both get and set called?',
    options: ['Auto-implemented property', 'Full property', 'Public field', 'Method'],
    correctAnswers: [0],
    hints: ['public int Age { get; set; }']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Static keyword',
    description: 'Keyword to make a member belong to the class rather than instances.',
    initialCode: 'public ___ void Main() { }',
    correctAnswers: ['static'],
    hints: ['Standard entry point keyword.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'List Add',
    description: 'Add 1 to List<int> items.',
    initialCode: 'var items = new List<int>();\nitems.___ (1);',
    correctAnswers: ['Add'],
    hints: ['Standard list method.']
  },
  {
    id: 41,
    type: 'theory',
    title: 'Boxing',
    description: 'What is boxing in C#?',
    options: ['Packaging code', 'Converting a value type to a reference type', 'Removing code', 'A UI component'],
    correctAnswers: [1],
    hints: ['Moving value from stack to heap.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Garbage Collection',
    description: 'Which class manages garbage collection in C#?',
    options: ['Clean', 'GC', 'Memory', 'Disposable'],
    correctAnswers: [1],
    hints: ['Short abbreviation.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Constructor',
    description: 'Keyword used inside a class to refer to current instance.',
    initialCode: '___.name = name;',
    correctAnswers: ['this'],
    hints: ['Common across many languages.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Foreach loop',
    description: 'Iterate {1,2} and print.',
    initialCode: 'int[] a = {1, 2};\n___ (int x in a) Console.Write(x);',
    correctAnswers: ['foreach'],
    hints: ['Specialized loop for collections.']
  },
  {
    id: 45,
    type: 'theory',
    title: 'Namespace',
    description: 'What is the purpose of "using namespace" in C#?',
    options: ['To speed up code', 'To organize code and avoid name collisions', 'To import physical files', 'To create instances'],
    correctAnswers: [1],
    hints: ['Matches the directory structure usually.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Sealed Class',
    description: 'What does the "sealed" keyword do?',
    options: ['Hides a class', 'Prevents a class from being inherited', 'Makes a class static', 'Protects a class from deletion'],
    correctAnswers: [1],
    hints: ['Like "final" in Java.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Constant',
    description: 'Keyword for a variable whose value cannot be changed.',
    initialCode: 'public ___ int MAX = 100;',
    correctAnswers: ['const'],
    hints: ['Short for constant.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Check Null',
    description: 'Use null-conditional operator to access Length of string s.',
    initialCode: 'string s = null;\nint? len = s___Length;',
    correctAnswers: ['?.'],
    hints: ['Question mark and dot.']
  },
  {
    id: 49,
    type: 'theory',
    title: 'Delegates',
    description: 'What is a delegate in C#?',
    options: ['A type-safe function pointer', 'A group of classes', 'A specialized loop', 'A database connection'],
    correctAnswers: [0],
    hints: ['Used for event handling.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Events',
    description: 'What keyword defines an event?',
    options: ['trigger', 'action', 'event', 'signal'],
    correctAnswers: [2],
    hints: ['Self-explanatory keyword.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Override',
    description: 'Keyword to provide a new implementation of a virtual member.',
    initialCode: 'public ___ void Run() { }',
    correctAnswers: ['override'],
    hints: ['Pairs with "virtual" in base class.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Dictionary Access',
    description: 'Get value of "A" from Dictionary<string, int> d.',
    initialCode: 'var d = new Dictionary<string, int> { {"A", 1} };\nint v = d["___"];',
    correctAnswers: ['A'],
    hints: ['Uses the key as index.']
  },
  {
    id: 53,
    type: 'theory',
    title: 'Yield Return',
    description: 'What is "yield return" used for?',
    options: ['To stop a method', 'To iterate over a collection lazily (custom iteration)', 'To return multiple values at once', 'To pause the computer'],
    correctAnswers: [1],
    hints: ['Used in methods returning IEnumerable.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Dependency Injection',
    description: 'What is a common pattern for managing dependencies in .NET applications?',
    options: ['Singleton', 'Dependency Injection', 'Factory', 'Observer'],
    correctAnswers: [1],
    hints: ['Often using Constructor Injection.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Partial Class',
    description: 'Keyword to split class definition across multiple files.',
    initialCode: 'public ___ class MyClass { }',
    correctAnswers: ['partial'],
    hints: ['Common in WinForms or generated code.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Parse Integer',
    description: 'Convert "123" to int.',
    initialCode: 'string s = "123";\nint i = int.___ (s);',
    correctAnswers: ['Parse'],
    hints: ['Can also use TryParse.']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Reflection',
    description: 'What is Reflection in C#?',
    options: ['A way to see your code in a mirror', 'The ability to inspect metadata at runtime', 'A graphics library', 'Automatically backing up files'],
    correctAnswers: [1],
    hints: ['Uses System.Reflection namespace.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Attributes',
    description: 'How do you apply an attribute to a class?',
    options: ['[MyAttribute]', '(MyAttribute)', '<MyAttribute>', '@MyAttribute'],
    correctAnswers: [0],
    hints: ['Uses square brackets.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Base constructor',
    description: 'Keyword to call parent constructor.',
    initialCode: 'public B() : ___() { }',
    correctAnswers: ['base'],
    hints: ['Equivalent of super() in Java.']
  },
  {
    id: 60,
    type: 'theory',
    title: '.NET Ecosystem',
    description: 'What is the modern cross-platform version of .NET called?',
    options: ['.NET Framework', '.NET Core / .NET 5+', '.NET Standard', 'Mono'],
    correctAnswers: [1],
    hints: ['Simply called ".NET" now.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Value vs Reference Types',
    description: 'Which of the following is a value type in C#?',
    options: ['string', 'class', 'struct', 'interface'],
    correctAnswers: [2],
    hints: ['Value types are stored on the stack.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Nullable Types',
    description: 'How to declare a nullable integer?',
    options: ['int?', 'int null', 'Nullable int', 'Optional<int>'],
    correctAnswers: [0],
    hints: ['Uses the question mark shorthand.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Enumeration',
    description: 'Keyword to define a set of named constants.',
    initialCode: 'public ___ Color { Red, Green, Blue }',
    correctAnswers: ['enum'],
    hints: ['Used to make code more readable.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Abstract vs Virtual',
    description: 'What is the difference?',
    options: ['No difference', 'Abstract methods have no implementation, Virtual methods have a default implementation', 'Virtual methods cannot be overridden', 'Abstract is for classes only'],
    correctAnswers: [1],
    hints: ['Both enable polymorphism.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'The "var" keyword',
    description: 'What does "var" do?',
    options: ['Creates a dynamic variable', 'Instructs the compiler to infer the type of the variable from its initialization', 'Makes the variable nullable', 'It is a variant type'],
    correctAnswers: [1],
    hints: ['Must be initialized on the same line.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Array length',
    description: 'Get length of array int[] a.',
    initialCode: 'int[] a = {1, 2};\nint len = a.___',
    correctAnswers: ['Length'],
    hints: ['It is a property, starts with capital L.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Boxing',
    description: 'What is boxing in C#?',
    options: ['Wrapping code in a box', 'Converting a value type to a reference type (object)', 'A type of UI layout', 'Variable hiding'],
    correctAnswers: [1],
    hints: ['Implicit conversion of value types to object.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Unboxing',
    description: 'What is unboxing?',
    options: ['Deleting code', 'Explicit conversion of reference type back to value type', 'Opening a file', 'None'],
    correctAnswers: [1],
    hints: ['The reverse of boxing.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Constructor',
    description: 'Method called when a class is instantiated.',
    initialCode: 'public class User {\n  public ___() { }\n}',
    correctAnswers: ['User'],
    hints: ['Has the same name as the class.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'String interpolate',
    description: 'Print "Hello Jon" using interpolation.',
    initialCode: 'string n = "Jon";\nConsole.WriteLine(___)',
    correctAnswers: ['$"Hello {n}"'],
    hints: ['Uses the dollar sign prefix.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Generics',
    description: 'Which class is a generic list?',
    options: ['ArrayList', 'List<T>', 'Array', 'Vector'],
    correctAnswers: [1],
    hints: ['Introduced in .NET 2.0.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Delegates',
    description: 'What is a delegate?',
    options: ['A person in charge', 'A type that represents references to methods with a particular parameter list and return type', 'A type of loop', 'A security group'],
    correctAnswers: [1],
    hints: ['Similar to function pointers in C++.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Partial class',
    description: 'Keyword to split a class definition across multiple files.',
    initialCode: 'public ___ class MyUI { }',
    correctAnswers: ['partial'],
    hints: ['Commonly used in WinForms or WPF generated code.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Check type',
    description: 'Check if o is a string.',
    initialCode: 'if (o ___ string) { ... }',
    correctAnswers: ['is'],
    hints: ['Operator for type checking.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'LINQ',
    description: 'What does LINQ stand for?',
    options: ['Language Integrated Query', 'List Internal Network Query', 'Local Item Name Quest', 'Language Internal Node Query'],
    correctAnswers: [0],
    hints: ['Provides unified set of query operators for different data sources.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Asynchronous Await',
    description: 'What keyword is used with "async" to wait for task completion?',
    options: ['wait', 'await', 'hold', 'stop'],
    correctAnswers: [1],
    hints: ['Non-blocking wait.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Yield return',
    description: 'Keyword to return one element at a time from an iterator block.',
    initialCode: 'foreach (var i in list) ___ i;',
    correctAnswers: ['yield return'],
    hints: ['Allows creating stateful iterators easily.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Foreach loop',
    description: 'Iterate over list "items".',
    initialCode: '___ (var item in items) { ... }',
    correctAnswers: ['foreach'],
    hints: ['Convenience loop for collections.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Properties',
    description: 'What is the syntax for a auto-implemented property "Age"?',
    options: ['public int Age;', 'public int Age { get; set; }', 'int Age();', 'property Age int'],
    correctAnswers: [1],
    hints: ['Combines field and access methods.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Null conditional',
    description: 'Which symbol is the null-conditional operator?',
    options: ['?', '?.', '??', '?!'],
    correctAnswers: [1],
    hints: ['Avoids NullReferenceException when accessing members.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Namespace using',
    description: 'Keyword to include a namespace.',
    initialCode: '___ System.Linq;',
    correctAnswers: ['using'],
    hints: ['Appears at the very top of the file.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Cast safely',
    description: 'Cast object o to string (return null if not string).',
    initialCode: 'string s = o ___ string;',
    correctAnswers: ['as'],
    hints: ['Safe casting operator.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Static class',
    description: 'Can a static class contain instance members?',
    options: ['Yes', 'No', 'Only if private', 'Only in C# 10+'],
    correctAnswers: [1],
    hints: ['Static classes can only contain static members.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Extension Methods',
    description: 'How do you identify the class being extended in an extension method?',
    options: ['Using extends keyword', 'Using "this" keyword before the first parameter', 'Using static keyword', 'You cannot'],
    correctAnswers: [1],
    hints: ['public static void MyExt(this string s) { ... }']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Const vs Readonly',
    description: 'Keyword for a field evaluated at runtime, but cannot be changed after initialization.',
    initialCode: 'public ___ int x = 10;',
    correctAnswers: ['readonly'],
    hints: ['Const is evaluated at compile time.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Tuple',
    description: 'Create a tuple (1, "a").',
    initialCode: 'var t = (___);',
    correctAnswers: ['1, "a"'],
    hints: ['Lightweight data structure.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Dependency Injection',
    description: 'What is DI in .NET?',
    options: ['A database tool', 'Technique for achieving Inversion of Control (IoC) between classes and their dependencies', 'A virus', 'None'],
    correctAnswers: [1],
    hints: ['Built-in middleware in ASP.NET Core.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Internal access',
    description: 'What does "internal" modifier mean?',
    options: ['Private to the class', 'Accessible only within the same assembly', 'Accessible from anywhere', 'Accessible to child classes'],
    correctAnswers: [1],
    hints: ['Limits visibility to the project boundary.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Task type',
    description: 'Type representing an asynchronous operation that returns a value of type T.',
    initialCode: 'public async ___<int> Get()',
    correctAnswers: ['Task'],
    hints: ['Found in System.Threading.Tasks.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'C# Creator',
    description: 'Who is the lead architect of C#?',
    options: ['Anders Hejlsberg', 'Bill Gates', 'Steve Jobs', 'James Gosling'],
    correctAnswers: [0],
    hints: ['Also created Turbo Pascal and Delphi; lead architect of TypeScript.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'C# 9.0 Records',
    description: 'What is a "record" in C# 9.0?',
    options: ['A type for music', 'A reference type that provides built-in functionality for encapsulating data and provides value-based equality', 'A database entry', 'None'],
    correctAnswers: [1],
    hints: ['Immutable by default if using positional parameters.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Nullable Reference Types',
    description: 'Which C# version introduced nullable reference types?',
    options: ['C# 5.0', 'C# 7.0', 'C# 8.0', 'C# 10.0'],
    correctAnswers: [2],
    hints: ['Allows the compiler to help you avoid NullReferenceExceptions.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Pattern matching: property',
    description: 'Pattern matching syntax for checking properties.',
    initialCode: 'if (o is User { Name: "___" })',
    correctAnswers: ['Admin'],
    hints: ['Checks if the Name property equals a specific value.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Span<T>',
    description: 'What is the purpose of Span<T>?',
    options: ['To span across multiple threads', 'To provide a type-safe and memory-safe representation of a contiguous region of arbitrary memory', 'To display text', 'None'],
    correctAnswers: [1],
    hints: ['Enables high-performance scenarios by avoiding allocations.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'The "init" accessor',
    description: 'What does the "init" property accessor do?',
    options: ['Initializes a variable', 'Allows property values to be set only during object initialization', 'Deletes a value', 'None'],
    correctAnswers: [1],
    hints: ['Supports data immutability.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Interpolated strings',
    description: 'Create an interpolated string with variable "v".',
    initialCode: 'string s = ___"Value is {v}";',
    correctAnswers: ['$'],
    hints: ['Dollar sign prefix.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'ValueTask<T>',
    description: 'When should you prefer ValueTask<T> over Task<T>?',
    options: ['Always', 'When the result of an operation is likely available synchronously, reducing allocations', 'Never', 'Only in UI apps'],
    correctAnswers: [1],
    hints: ['A struct-based alternative to the class-based Task.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Partial methods',
    description: 'What is a partial method?',
    options: ['A method that only runs half the time', 'A method declared in one part of a partial class and optionally implemented in another', 'A private method', 'None'],
    correctAnswers: [1],
    hints: ['Useful for generated code.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Indices and Ranges',
    description: 'Operator to get the last element of an array.',
    initialCode: 'var last = arr[___1];',
    correctAnswers: ['^'],
    hints: ['Hat operator.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Coalesce assignment',
    description: 'Assign "val" to x if x is null.',
    initialCode: 'x ___= val;',
    correctAnswers: ['??'],
    hints: ['Null-coalescing assignment operator.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Default Interface Methods',
    description: 'Can interfaces have method implementations in recent C# versions?',
    options: ['Yes (since C# 8.0)', 'No', 'Only static methods', 'Only private methods'],
    correctAnswers: [0],
    hints: ['Allows evolving interfaces without breaking existing implementations.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Stackalloc',
    description: 'What does stackalloc do?',
    options: ['Allocates memory on the heap', 'Allocates a block of memory on the stack', 'Moves code to stack', 'None'],
    correctAnswers: [1],
    hints: ['Used for high-performance memory management.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Discard variable',
    description: 'The underscore character representing a dummy variable that is intentionally unused.',
    initialCode: '_ = ___(int.TryParse("1", out _))',
    correctAnswers: ['bool'],
    hints: ['Called "discards".']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Using declaration',
    description: 'Declare a resource that is disposed at the end of the scope.',
    initialCode: '___ var stream = new FileStream(...);',
    correctAnswers: ['using'],
    hints: ['Simplified syntax introduced in C# 8.0.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Primary Constructors',
    description: 'Which C# version introduced primary constructors for all classes and structs?',
    options: ['C# 9.0', 'C# 10.0', 'C# 11.0', 'C# 12.0'],
    correctAnswers: [3],
    hints: ['Allows parameters to be defined directly on the class declaration.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'File-scoped namespaces',
    description: 'What is a file-scoped namespace?',
    options: ['A namespace that spans files', 'A namespace declared for the entire file without curly braces', 'A private namespace', 'None'],
    correctAnswers: [1],
    hints: ['Reduces indentation in the file.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Raw string literal',
    description: 'Prefix for raw string literals with multiple double quotes.',
    initialCode: 'string s = ___"""\n  Path: "C:\\"\n  """;',
    correctAnswers: [''],
    hints: ['Requires at least three double quotes. No prefix needed if only quotes are used.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Expression-bodied member',
    description: 'Define a property using expression body.',
    initialCode: 'public string Name ___ "User";',
    correctAnswers: ['=>'],
    hints: ['Fat arrow syntax for concise methods or properties.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Global Using Directive',
    description: 'What is a "global using" directive?',
    options: ['A namespace from outer space', 'A using directive that applies to the entire project', 'A public using', 'None'],
    correctAnswers: [1],
    hints: ['Usually placed in a single file like GlobalUsings.cs.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Constant Interp. Strings',
    description: 'Can interpolated strings be constant in C# 10?',
    options: ['Yes, if the variables are also constants', 'No', 'Only for numbers', 'None'],
    correctAnswers: [0],
    hints: ['Enables things like [Obsolete($"Use {nameof(NewFunc)}")]']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Required keyword',
    description: 'Keyword to force properties to be set during object initialization.',
    initialCode: 'public ___ string Name { get; set; }',
    correctAnswers: ['required'],
    hints: ['Introduced in C# 11.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Alias type',
    description: 'Create an alias for a tuple.',
    initialCode: 'using Point = ___;',
    correctAnswers: ['(int X, int Y)'],
    hints: ['Requires C# 12 for generic types/tuples.']
  },
  {
    id: 113,
    type: 'theory',
    title: '.NET Standard',
    description: 'What was the purpose of .NET Standard?',
    options: ['To replace .NET Core', 'To provide a formal specification of .NET APIs that are intended to be available on all .NET implementations', 'A version of Windows', 'None'],
    correctAnswers: [1],
    hints: ['Obsolete now with .NET 5+ unify.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'JIT: Tiered Compilation',
    description: 'What is tiered compilation in .NET?',
    options: ['Compiling on multiple tiers of servers', 'A way for the JIT to compile methods quickly first, and then re-optimize hot methods later', 'A data tier', 'None'],
    correctAnswers: [1],
    hints: ['Improves startup time and steady-state performance.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Lock keyword',
    description: 'Keyword to acquire a mutual-exclusion lock for a given object.',
    initialCode: '___(obj) { ... }',
    correctAnswers: ['lock'],
    hints: ['Syntactic sugar for Monitor.Enter and Monitor.Exit.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Get type of T',
    description: 'Get System.Type for T.',
    initialCode: 'Type t = typeof(___);',
    correctAnswers: ['T'],
    hints: ['Compile-time operator.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'IAsyncEnumerable',
    description: 'What is IAsyncEnumerable useful for?',
    options: ['Sorting lists', 'Streaming data asynchronously using await foreach', 'Executing SQL', 'None'],
    correctAnswers: [1],
    hints: ['Introduced in C# 8.0.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Generic Constraints: notnull',
    description: 'What does the "notnull" constraint do?',
    options: ['Forces a value', 'Ensures that the type argument is a non-nullable type', 'Deletes nulls', 'None'],
    correctAnswers: [1],
    hints: ['Added with nullable reference types.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Params keyword',
    description: 'Keyword that allows a method to accept a variable number of arguments.',
    initialCode: 'void Sum(___ int[] nums) { ... }',
    correctAnswers: ['params'],
    hints: ['Must be the last parameter in the list.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'C# Creator',
    description: 'Who is the lead architect of the C# language?',
    options: ['Anders Hejlsberg', 'James Gosling', 'Bjarne Stroustrup', 'Dennis Ritchie'],
    correctAnswers: [0],
    hints: ['He also designed TypeScript.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'C#: Properties',
    description: 'What is the purpose of properties in C#?',
    options: ['To store data publically', 'To provide a flexible mechanism to read, write, or compute the value of a private field', 'To define classes', 'None'],
    correctAnswers: [1],
    hints: ['Uses get and set accessors.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'C#: LINQ',
    description: 'What does LINQ stand for?',
    options: ['Language Integrated Network Query', 'Language Integrated Query', 'List Internal Query', 'None'],
    correctAnswers: [1],
    hints: ['Set of features that extends powerful query capabilities to the language syntax of C#.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'C#: Var keyword',
    description: 'Keyword for implicitly typed local variables.',
    initialCode: '___ name = "Alice";',
    correctAnswers: ['var'],
    hints: ['Deduces the type from the expression on the right side.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'C#: Generic Collections',
    description: 'Which namespace contains generic collections like List<T>?',
    options: ['System.Collections', 'System.Collections.Generic', 'System.Linq', 'None'],
    correctAnswers: [1],
    hints: ['Provides type-safe collections.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'C#: Partial Classes',
    description: 'What is a partial class?',
    options: ['A class that is not finished', 'A class whose definition can be split across multiple files', 'A private class', 'None'],
    correctAnswers: [1],
    hints: ['Used by designers and code generators.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'C#: List Add',
    description: 'Add 1 to List<int> list.',
    initialCode: 'var list = new List<int>();\nlist.___ (1);',
    correctAnswers: ['Add'],
    hints: ['Standard collection method.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'C#: Nullable Types',
    description: 'How do you declare a nullable int in C#?',
    options: ['int? x', 'nullable int x', 'int x = null', 'None'],
    correctAnswers: [0],
    hints: ['Uses the question mark suffix.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'C#: Dependency Injection',
    description: 'What is DI in .NET context?',
    options: ['Data Inspection', 'Dependency Injection (design pattern for achieving Inversion of Control)', 'Direct Interface', 'None'],
    correctAnswers: [1],
    hints: ['Built-in support in ASP.NET Core.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'C#: Static using',
    description: 'Directive to import static members of a class so they can be used without qualification.',
    initialCode: '___ static System.Math;',
    correctAnswers: ['using'],
    hints: ['Allows you to call Sqrt() instead of Math.Sqrt().']
  },
  {
    id: 130,
    type: 'coding',
    title: 'C#: Array length',
    description: 'Get length of int[] arr.',
    initialCode: 'int[] arr = {1, 2};\nint len = arr.___ ;',
    correctAnswers: ['Length'],
    hints: ['It is a property of the array object.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'C#: Struct vs Class',
    description: 'What is the main difference between struct and class in C#?',
    options: ['Structs are reference types, classes are value types', 'Structs are value types, classes are reference types', 'No difference', 'None'],
    correctAnswers: [1],
    hints: ['Structs are stored on the stack or inline.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'C#: Interface implementation',
    description: 'Can a C# class inherit from multiple interfaces?',
    options: ['Yes', 'No', 'Only if they are empty', 'None'],
    correctAnswers: [0],
    hints: ['Classes support single inheritance for classes but multiple for interfaces.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'C#: Throw keyword',
    description: 'Keyword used to signal the occurrence of an exception.',
    initialCode: 'if (x < 0) ___ new Exception();',
    correctAnswers: ['throw'],
    hints: ['Interrupts normal execution flow.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'C#: String interpolation',
    description: 'Print "Val: 10" using interpolation.',
    initialCode: 'int x = 10;\nConsole.WriteLine(___ "Val: {x}");',
    correctAnswers: ['$'],
    hints: ['The dollar sign prefix.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'C#: Async/Await',
    description: 'What return type is typically used for async methods that don\'t return a value?',
    options: ['void', 'Task', 'Awaitable', 'None'],
    correctAnswers: [1],
    hints: ['Task represents an asynchronous operation.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'C#: Delegates',
    description: 'What is a delegate in C#?',
    options: ['A type of variable', 'A type that represents references to methods with a particular parameter list and return type', 'A design pattern', 'None'],
    correctAnswers: [1],
    hints: ['Used for event handling and callbacks.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'C#: Events',
    description: 'What is an event in C#?',
    options: ['A holiday', 'A mechanism for a class to notify other classes when something of interest occurs', 'A static method', 'None'],
    correctAnswers: [1],
    hints: ['Built upon delegates.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'C#: Yield keyword',
    description: 'Keyword used to indicate that a method is an iterator.',
    initialCode: 'public IEnumerable<int> GetNumbers() {\n    ___ return 1;\n}',
    correctAnswers: ['yield'],
    hints: ['Allows returning elements one at a time.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'C#: String contains',
    description: 'Check if string "s" contains "a".',
    initialCode: 'bool hasA = s.___ ("a");',
    correctAnswers: ['Contains'],
    hints: ['Standard string utility.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'C#: Extension Methods',
    description: 'What are extension methods?',
    options: ['Methods that extend a file', 'Methods that allow you to "add" methods to existing types without creating a new derived type', 'Private methods', 'None'],
    correctAnswers: [1],
    hints: ['Defined as static methods in a static class.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'C#: Virtual keyword',
    description: 'What does the "virtual" keyword allow?',
    options: ['A method to be private', 'A method to be overridden in a derived class', 'A method to be static', 'None'],
    correctAnswers: [1],
    hints: ['Enables polymorphism.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'C#: Override keyword',
    description: 'Keyword used to provide a new implementation of a virtual or abstract member from a base class.',
    initialCode: 'public ___ void MyMethod() { ... }',
    correctAnswers: ['override'],
    hints: ['Must match the signature of the base member.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'C#: ToList',
    description: 'Convert an IEnumerable to a List.',
    initialCode: 'var list = myEnum.___ ();',
    correctAnswers: ['ToList'],
    hints: ['Part of System.Linq.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'C#: Reflection',
    description: 'What is reflection in C#?',
    options: ['A mirror effect in UI', 'The ability of a program to inspect and interact with its own metadata at runtime', 'A graphics library', 'None'],
    correctAnswers: [1],
    hints: ['Uses System.Reflection namespace.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'C#: Indexers',
    description: 'What is an indexer in C#?',
    options: ['A search engine', 'A member that allows an object to be indexed like an array (e.g. obj[i])', 'A type of loop', 'None'],
    correctAnswers: [1],
    hints: ['Uses the "this" keyword in its definition.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'C#: Readonly keyword',
    description: 'Keyword for fields that can only be assigned during initialization or in a constructor.',
    initialCode: 'private ___ int id;',
    correctAnswers: ['readonly'],
    hints: ['Different from "const" which is evaluated at compile time.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'C#: Any in Linq',
    description: 'Check if list has any elements.',
    initialCode: 'bool hasItems = list.___ ();',
    correctAnswers: ['Any'],
    hints: ['Returns true if the collection contains any elements.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'C#: Generics constraints',
    description: 'What is the "where" clause used for in generics?',
    options: ['To filter data', 'To specify constraints on the types that can be used as arguments for a type parameter', 'To define a loop', 'None'],
    correctAnswers: [1],
    hints: ['Example: where T : class.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'C#: Tuples',
    description: 'What are ValueTuples in C#?',
    options: ['A type of array', 'Lightweight data structures that provide an easy way to group multiple data elements', 'A database object', 'None'],
    correctAnswers: [1],
    hints: ['Example: (int, string) t = (1, "hi").']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'C#: Nameof operator',
    description: 'Operator that returns the name of a variable, type, or member as a string.',
    initialCode: 'string s = ___ (myVar);',
    correctAnswers: ['nameof'],
    hints: ['Helps keep code refactor-friendly.']
  }
];
