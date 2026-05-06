import { Question } from '../types';
export const CPP_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World in C++',
    description: 'Write a program using cout to print "Hello, C++!".',
    initialCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n  // Write code here\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'Hello, C++!',
        description: 'Should print Hello, C++!'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'C++ Classes',
    description: 'Which keyword is used to start a class definition in C++?',
    options: ['struct', 'class', 'object', 'template'],
    correctAnswers: [1],
    hints: ['It is a fundamental keyword in OOP C++.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'C++ Namespaces',
    description: 'What is the utility of the "std" namespace in C++?',
    options: ['It stores the compiler settings', 'It contains standard library functions', 'It is used for memory management', 'It defines global variables'],
    correctAnswers: [1],
    hints: ['Standard components like cout and cin reside here.']
  },
  {
    id: 4,
    type: 'blanks',
    title: 'Input with cin',
    description: 'Complete the statement to read an integer from standard input into variable "x".',
    initialCode: 'int x;\ncin ___ x;',
    correctAnswers: ['>>'],
    hints: ['The extraction operator.']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Constructors',
    description: 'Which of the following describes a constructor?',
    options: ['A function to delete an object', 'A method to initialize an object', 'A member that is always static', 'A function with no return type but a name different from the class'],
    correctAnswers: [1],
    hints: ['It has the same name as the class.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Rectangle Area',
    description: 'Calculate and print the area of a rectangle with width 5 and height 10. Output: "50".',
    initialCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n  int w = 5, h = 10;\n  // Calculate and print\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '50',
        description: 'Should print 50'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'Polymorphism',
    description: 'Which of the following is an example of compile-time polymorphism?',
    options: ['Function Overloading', 'Virtual Functions', 'Inheritance', 'Interface Implementation'],
    correctAnswers: [0],
    hints: ['Occurs when multiple functions have the same name but different parameters.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Access Modifiers',
    description: 'Which access modifier allows members to be accessed only within the same class and its subclasses?',
    options: ['private', 'public', 'protected', 'internal'],
    correctAnswers: [2],
    hints: ['Starts with "p" and ends with "d".']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Dynamic Allocation',
    description: 'Use the "new" keyword to allocate an integer dynamically.',
    initialCode: 'int* ptr = ___ int;',
    correctAnswers: ['new'],
    hints: ['Allocates memory on the heap.']
  },
  {
    id: 10,
    type: 'theory',
    title: 'Destructors',
    description: 'What is the prefix symbol used for a destructor in C++?',
    options: ['*', '&', '~', '#'],
    correctAnswers: [2],
    hints: ['The tilde symbol.']
  },
  {
    id: 11,
    type: 'coding',
    title: 'String Concatenation',
    description: 'Concatenate "Smart" and "Edu" and print "SmartEdu".',
    initialCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string s1 = "Smart", s2 = "Edu";\n  // Concatenate and print\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'SmartEdu',
        description: 'Should print SmartEdu'
      }
    ]
  },
  {
    id: 12,
    type: 'theory',
    title: 'Standard Template Library',
    description: 'What does STL stand for in C++?',
    options: ['Standard Text Library', 'Simple Template Logic', 'Standard Template Library', 'Static Template List'],
    correctAnswers: [2],
    hints: ['Includes vectors, lists, and maps.']
  },
  {
    id: 13,
    type: 'theory',
    title: 'C++ Vectors',
    description: 'Which property of a C++ vector is true?',
    options: ['Fixed size', 'Manual memory management', 'Dynamic size', 'No bounds checking'],
    correctAnswers: [2],
    hints: ['It can grow or shrink as needed.']
  },
  {
    id: 14,
    type: 'blanks',
    title: 'Scope Resolution',
    description: 'Which operator is used to access a global variable from inside a function where a local variable with the same name exists?',
    initialCode: 'int x = 5;\n{\n  int x = 10;\n  cout << ___x; // Prints 5\n}',
    correctAnswers: ['::'],
    hints: ['Double colons.']
  },
  {
    id: 15,
    type: 'theory',
    title: 'Inline Functions',
    description: 'What is the main benefit of an inline function?',
    options: ['Reduces memory usage', 'Faster execution by reducing function call overhead', 'Allows recursion', 'Increases modularity'],
    correctAnswers: [1],
    hints: ['The compiler replaces the function call with the actual code.']
  },
  {
    id: 16,
    type: 'coding',
    title: 'Vector Push Back',
    description: 'Create a vector, push 7 into it, and print the first element. output: "7".',
    initialCode: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n  vector<int> v;\n  // Push back 7 and print v[0]\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '7',
        description: 'Should print 7'
      }
    ]
  },
  {
    id: 17,
    type: 'theory',
    title: 'Inheritance Types',
    description: 'Which inheritance type allows a class to inherit from more than one base class?',
    options: ['Single', 'Multiple', 'Multilevel', 'Hybrid'],
    correctAnswers: [1],
    hints: ['Multiple base classes.']
  },
  {
    id: 18,
    type: 'theory',
    title: 'Abstract Classes',
    description: 'How is an abstract class created in C++?',
    options: ['Using the abstract keyword', 'By declaring all members private', 'By declaring at least one pure virtual function', 'By making the constructor private'],
    correctAnswers: [2],
    hints: ['A function with "= 0".']
  },
  {
    id: 19,
    type: 'blanks',
    title: 'Template Syntax',
    description: 'Fill in the keyword to define a generic function template.',
    initialCode: '___ <typename T>\nT sum(T a, T b) { return a + b; }',
    correctAnswers: ['template'],
    hints: ['The keyword for generic programming.']
  },
  {
    id: 20,
    type: 'coding',
    title: 'Find Minimum in Vector',
    description: 'Given a vector with {15, 5, 20}, print the minimum value "5".',
    initialCode: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n  vector<int> v = {15, 5, 20};\n  // Find and print min element\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '5',
        description: 'Should print 5'
      }
    ]
  },
  {
    id: 21,
    type: 'theory',
    title: 'References vs Pointers',
    description: 'Which is true about references in C++?',
    options: ['They can be null', 'They can be reassigned', 'They must be initialized when declared', 'They are objects themselves'],
    correctAnswers: [2],
    hints: ['A reference is an alias for an existing variable.']
  },
  {
    id: 22,
    type: 'theory',
    title: 'Friend Function',
    description: 'What can a friend function do?',
    options: ['It can access only public members', 'It can access private and protected members of the class it is a friend of', 'It must be a member of the class', 'It is defined using the "colleague" keyword'],
    correctAnswers: [1],
    hints: ['It is declared using the keyword "friend".']
  },
  {
    id: 23,
    type: 'blanks',
    title: 'Boolean Literal',
    description: 'Which keyword represents the truth value in C++?',
    initialCode: 'bool isFinished = ___;',
    correctAnswers: ['true'],
    hints: ['Opposite of false.']
  },
  {
    id: 24,
    type: 'coding',
    title: 'Simple For Loop',
    description: 'Print numbers from 1 to 3 separated by space: "1 2 3".',
    initialCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n  // Print 1 2 3 using loop\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '1 2 3',
        description: 'Should print 1 2 3'
      }
    ]
  },
  {
    id: 25,
    type: 'theory',
    title: 'Static Members',
    description: 'What is shared among all objects of a class?',
    options: ['Private members', 'Static members', 'Virtual functions', 'Constructors'],
    correctAnswers: [1],
    hints: ['Only one copy of this member exists for the whole class.']
  },
  {
    id: 26,
    type: 'theory',
    title: 'Exception Handling',
    description: 'Which block is used to catch an exception in C++?',
    options: ['try', 'catch', 'throw', 'finally'],
    correctAnswers: [1],
    hints: ['Paired with a try block.']
  },
  {
    id: 27,
    type: 'blanks',
    title: 'Pointer Declaration',
    description: 'Complete the line to declare a pointer to an integer named "p".',
    initialCode: 'int ___ = nullptr;',
    correctAnswers: ['*p'],
    hints: ['Asterisk before the name.']
  },
  {
    id: 28,
    type: 'coding',
    title: 'Power of Number',
    description: 'Print the value of 2 raised to power 3. Output: "8".',
    initialCode: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n  // Print pow(2,3)\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '8',
        description: 'Should print 8'
      }
    ]
  },
  {
    id: 29,
    type: 'theory',
    title: 'File Streams',
    description: 'Which class is used for writing data to files in C++?',
    options: ['ifstream', 'ofstream', 'iostream', 'fstream'],
    correctAnswers: [1],
    hints: ['"o" stands for output.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Auto Keyword',
    description: 'What does the "auto" keyword do in modern C++ (C++11 and later)?',
    options: ['Static memory allocation', 'Automatic type deduction', 'Defines a local variable', 'Reserves space on the stack'],
    correctAnswers: [1],
    hints: ['The compiler deduces the type from the initializer.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Reference Declaration',
    description: 'How do you declare a reference to an integer x?',
    options: ['int &ref = x;', 'int *ref = x;', 'int ref = &x;', 'int ref = *x;'],
    correctAnswers: [0],
    hints: ['Uses the ampersand symbol.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Friend Function',
    description: 'What is a friend function in C++?',
    options: ['A function inside a class', 'A non-member function that has access to private members', 'A function that only accepts class objects', 'A static function'],
    correctAnswers: [1],
    hints: ['Declared using the "friend" keyword inside the class.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'New operator',
    description: 'Operator used for dynamic memory allocation.',
    initialCode: 'int *p = ___ int;',
    correctAnswers: ['new'],
    hints: ['Allocates memory on the heap.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Standard Library',
    description: 'Which header provides std::vector?',
    options: ['<array>', '<list>', '<vector>', '<deque>'],
    correctAnswers: [2],
    hints: ['Name is the same as the type.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Copy Constructor',
    description: 'When is a copy constructor called?',
    options: ['When an object is initialized from another object of same type', 'When an object is assigned to another', 'When an object is deleted', 'Never'],
    correctAnswers: [0],
    hints: ['MyClass c2 = c1;']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Output sum',
    description: 'Print "Sum: 30" using 10 and 20.',
    initialCode: '#include <iostream>\nusing namespace std;\nint main() {\n  // cout\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'Sum: 30',
        description: 'Should print Sum: 30'
      }
    ]
  },
  {
    id: 37,
    type: 'theory',
    title: 'Implicit conversion',
    description: 'Can a constructor be marked to prevent implicit conversions?',
    options: ['Yes, using explicit keyword', 'No', 'Only for int constructors', 'Automatic'],
    correctAnswers: [0],
    hints: ['Prevents "MyClass c = 5;" to call a single-arg constructor.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Template Syntax',
    description: 'How do you define a function template?',
    options: ['template <typename T>', 'template (type T)', 'class template <T>', 'define T'],
    correctAnswers: [0],
    hints: ['Uses angle brackets.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Namespace access',
    description: 'Operator to access members of a namespace.',
    initialCode: 'std___cout << "Hi";',
    correctAnswers: ['::'],
    hints: ['Double colon.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Boolean output',
    description: 'Print "True" if 5 > 3.',
    initialCode: '#include <iostream>\nusing namespace std;\nint main() {\n  if (5 > 3) cout << "True";\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'True',
        description: 'Should print True'
      }
    ]
  },
  {
    id: 41,
    type: 'theory',
    title: 'Static Data Member',
    description: 'How many copies of a static data member exist for a class with 10 objects?',
    options: ['0', '1', '10', 'Depends on memory'],
    correctAnswers: [1],
    hints: ['Static members belong to the class, not instances.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Multiple Inheritance',
    description: 'Does C++ support multiple inheritance?',
    options: ['Yes', 'No', 'Only through interfaces', 'Only in C++20'],
    correctAnswers: [0],
    hints: ['A class can inherit from more than one base class.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Destructor symbol',
    description: 'Prefix symbol for a destructor.',
    initialCode: 'class A {\n  ___A() { }\n};',
    correctAnswers: ['~'],
    hints: ['Tilde symbol.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Iterate vector',
    description: 'Print "123" by iterating {1,2,3} with range-based for.',
    initialCode: '#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n  vector<int> v = {1, 2, 3};\n  for (int x : v) cout << x;\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '123',
        description: 'Should print 123'
      }
    ]
  },
  {
    id: 45,
    type: 'theory',
    title: 'Abstract Class',
    description: 'A class with at least one pure virtual function is called?',
    options: ['Base class', 'Abstract class', 'Hidden class', 'Static class'],
    correctAnswers: [1],
    hints: ['You cannot instantiate it.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Inline Function',
    description: 'What is the purpose of the "inline" keyword?',
    options: ['To speed up execution by replacing function call with code', 'To hide the function', 'To allow recursion', 'To make function static'],
    correctAnswers: [0],
    hints: ['Reduces function call overhead.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Exception throw',
    description: 'Keyword to signal an error.',
    initialCode: '___ "Error occurred";',
    correctAnswers: ['throw'],
    hints: ['Used inside a try block.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Default Argument',
    description: 'Function say(msg="Hi") - print it.',
    initialCode: '#include <iostream>\nusing namespace std;\nvoid say(string m = "Hi") { cout << m; }\nint main() {\n  say();\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'Hi',
        description: 'Should print Hi'
      }
    ]
  },
  {
    id: 49,
    type: 'theory',
    title: 'Virtual Destructor',
    description: 'Why should base classes with virtual functions have a virtual destructor?',
    options: ['To allow instantiation', 'To ensure proper cleanup of derived objects', 'To save memory', 'Syntax requirement'],
    correctAnswers: [1],
    hints: ['Prevents memory leaks in inheritance.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'STL Map',
    description: 'What type of structure is std::map?',
    options: ['Hash table', 'Sorted balanced tree', 'Unordered list', 'Queue'],
    correctAnswers: [1],
    hints: ['Elements are sorted by key.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Member access',
    description: 'Keyword to access current instance members.',
    initialCode: 'this___data = 5;',
    correctAnswers: ['->'],
    hints: ['this is a pointer.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'String concat',
    description: 'Print "AB" using two strings.',
    initialCode: '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string s = "A";\n  cout << s + "B";\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'AB',
        description: 'Should print AB'
      }
    ]
  },
  {
    id: 53,
    type: 'theory',
    title: 'Const member function',
    description: 'What does marking a member function as const do?',
    options: ['Prevents it from modifying object data members', 'Prevents it from returning a value', 'Makes it faster', 'Allows it to be static'],
    correctAnswers: [0],
    hints: ['void get() const;']
  },
  {
    id: 54,
    type: 'theory',
    title: 'RAII',
    description: 'What does RAII stand for in C++?',
    options: ['Resource Allocation Is Initial', 'Resource Acquisition Is Initialization', 'Runtime Array Internal Index', 'Robust Application Internal Interface'],
    correctAnswers: [1],
    hints: ['Crucial pattern for memory safety.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Override keyword',
    description: 'Keyword to specify a function overrides a base one.',
    initialCode: 'void draw() ___ { }',
    correctAnswers: ['override'],
    hints: ['Introduced in C++11.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Max of two',
    description: 'Print max of 10 and 20.',
    initialCode: '#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n  cout << max(10, 20);\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '20',
        description: 'Should print 20'
      }
    ]
  },
  {
    id: 57,
    type: 'theory',
    title: 'Smart Pointers',
    description: 'Which smart pointer allows shared ownership?',
    options: ['unique_ptr', 'shared_ptr', 'auto_ptr', 'weak_ptr'],
    correctAnswers: [1],
    hints: ['Uses reference counting.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Lambda Capture',
    description: 'In [=] (int x) { ... }, what does the [=] mean?',
    options: ['Capture all by reference', 'Capture all by value', 'Capture nothing', 'Capture only x'],
    correctAnswers: [1],
    hints: ['Equals sign means value copy.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Type deduction',
    description: 'Keyword to automatically deduce variable type.',
    initialCode: '___ x = 5.5;',
    correctAnswers: ['auto'],
    hints: ['Commonly used in iterations.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'C++ Standard',
    description: 'Which version introduced move semantics and auto?',
    options: ['C++98', 'C++03', 'C++11', 'C++17'],
    correctAnswers: [2],
    hints: ['The big modernization release.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Standard Template Library (STL)',
    description: 'What is the STL?',
    options: ['A library for science', 'A powerful set of C++ template classes to provide common programming data structures and functions', 'A graphics library', 'A network library'],
    correctAnswers: [1],
    hints: ['Includes vectors, lists, stacks, and algorithms.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Vector vs List',
    description: 'Which STL container stores elements in contiguous memory?',
    options: ['std::list', 'std::vector', 'std::map', 'std::set'],
    correctAnswers: [1],
    hints: ['Allows for random access O(1).']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Iterator',
    description: 'Object that can be used to traverse a container.',
    initialCode: 'std::vector<int>::___ it;',
    correctAnswers: ['iterator'],
    hints: ['Behaves like a pointer.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'References',
    description: 'Can a reference be null in C++?',
    options: ['Yes', 'No', 'Only if cast from pointer', 'Depends on compiler'],
    correctAnswers: [1],
    hints: ['A reference must always refer to a valid object.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'RAII',
    description: 'What does RAII stand for?',
    options: ['Resource Allocation Is Intelligent', 'Resource Acquisition Is Initialization', 'Random Access Internal Index', 'Read All Internal info'],
    correctAnswers: [1],
    hints: ['Core C++ idiom where resource lifecycle is tied to object lifetime.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Vector push',
    description: 'Add 1 to vector<int> v.',
    initialCode: 'v.___ (1);',
    correctAnswers: ['push_back'],
    hints: ['Method to add items to the end.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Pure Virtual Function',
    description: 'How to declare a pure virtual function?',
    options: ['virtual void f() = 0;', 'virtual void f();', 'void f() = virtual;', 'pure virtual f();'],
    correctAnswers: [0],
    hints: ['Makes the class abstract.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Multiple Inheritance',
    description: 'Does C++ support multiple inheritance?',
    options: ['Yes', 'No', 'Only for interfaces', 'Only in C++20'],
    correctAnswers: [0],
    hints: ['A class can inherit from more than one base class.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'This pointer',
    description: 'Does "this" point to the current object?',
    initialCode: 'class A {\n  void f() { return ___; }\n}',
    correctAnswers: ['this'],
    hints: ['An implicit parameter to all non-static member functions.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'New object',
    description: 'Allocate an int on the heap.',
    initialCode: 'int *p = ___ int;',
    correctAnswers: ['new'],
    hints: ['Operator for dynamic memory allocation.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Destructor',
    description: 'What is the syntax for a destructor of class A?',
    options: ['~A()', '!A()', 'destroy A()', 'void A()'],
    correctAnswers: [0],
    hints: ['Name begins with a tilde.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Operator Overloading',
    description: 'Can you overload the dot (.) operator?',
    options: ['Yes', 'No', 'Only in structs', 'Only for static members'],
    correctAnswers: [1],
    hints: ['One of the few operators that cannot be overloaded.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Template keyword',
    description: 'Keyword used to define a template function.',
    initialCode: '___ <typename T>\nvoid f(T x) { }',
    correctAnswers: ['template'],
    hints: ['Support for generic programming.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Input string',
    description: 'Read a line of text into string s.',
    initialCode: 'std::___(std::cin, s);',
    correctAnswers: ['getline'],
    hints: ['Reads until newline.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Explicit keyword',
    description: 'What does "explicit" do when applied to a constructor?',
    options: ['Makes it faster', 'Prevents implicit conversions from being performed', 'Hides the constructor', 'Makes it static'],
    correctAnswers: [1],
    hints: ['Useful for constructors taking a single argument.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Static Cast',
    description: 'Which cast is used for well-defined conversions (e.g. enum to int)?',
    options: ['static_cast', 'dynamic_cast', 'reinterpret_cast', 'const_cast'],
    correctAnswers: [0],
    hints: ['Performs compile-time check.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Friend keyword',
    description: 'Keyword to allow a non-member function access to private members.',
    initialCode: '___ void f(MyClass&);',
    correctAnswers: ['friend'],
    hints: ['Bypasses encapsulation.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Check size',
    description: 'Get size of string s.',
    initialCode: 'int len = s.___();',
    correctAnswers: ['size'],
    hints: ['Can also use length().']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Dynamic Cast',
    description: 'When is dynamic_cast useful?',
    options: ['Any type conversion', 'Safe downcasting in a class hierarchy', 'Removing const-ness', 'Converting pointers to integers'],
    correctAnswers: [1],
    hints: ['Requires RTTI (Run-Time Type Information).']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Exception Safety',
    description: 'What is the "strong exception guarantee"?',
    options: ['No exceptions will ever happen', 'If an exception happens, the program state is rolled back to before the operation started', 'Exceptions are handled immediately', 'Program crashes safely'],
    correctAnswers: [1],
    hints: ['"All or nothing" behavior.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Smart Pointers',
    description: 'A smart pointer that cannot be copied, only moved.',
    initialCode: 'std::___<int> p;',
    correctAnswers: ['unique_ptr'],
    hints: ['Introduced in C++11 to replace auto_ptr.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Move semantics',
    description: 'Convert lvalue to rvalue.',
    initialCode: 'res = std::___(val);',
    correctAnswers: ['move'],
    hints: ['Used to trigger move constructors.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Inline Functions',
    description: 'What is the purpose of the "inline" keyword?',
    options: ['To speed up the app', 'To suggest to the compiler to replace the function call with the actual code', 'To define a function in one line', 'To make code readable'],
    correctAnswers: [1],
    hints: ['Reduces call overhead for small functions.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Mutable keyword',
    description: 'What does "mutable" allow on a class member?',
    options: ['It can be changed anywhere', 'It can be modified even if the object is const', 'It is public', 'It is static'],
    correctAnswers: [1],
    hints: ['Useful for caches or mutexes inside const objects.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Namespace alias',
    description: 'Rename namespace long::name::here to short.',
    initialCode: 'namespace short = ___;',
    correctAnswers: ['long::name::here'],
    hints: ['Saves typing long paths.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Lambda capture',
    description: 'Capture all local variables by value.',
    initialCode: '[___](int x) { ... }',
    correctAnswers: ['='],
    hints: ['Equals sign in capture clause.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'C++ version',
    description: 'Which C++ version introduced auto, range-based for loops, and lambdas?',
    options: ['C++98', 'C++03', 'C++11', 'C++17'],
    correctAnswers: [2],
    hints: ['The "Modern C++" revolution started here.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Function objects',
    description: 'What is a "functor"?',
    options: ['A funny function', 'A class that overloads the () operator so it can be called like a function', 'A pointer to a function', 'A built-in macro'],
    correctAnswers: [1],
    hints: ['Allows maintaining state between calls.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Size of array',
    description: 'Get elements count in static array "int a[10]".',
    initialCode: 'size_t n = sizeof(a) / sizeof(___);',
    correctAnswers: ['a[0]'],
    hints: ['Size of entire array divided by size of one element.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'C++ Creator',
    description: 'Who created the C++ programming language?',
    options: ['Bjarne Stroustrup', 'Dennis Ritchie', 'Ken Thompson', 'Anders Hejlsberg'],
    correctAnswers: [0],
    hints: ['Originally called it "C with Classes".']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Standard Template Library',
    description: 'What are the three main components of STL?',
    options: ['Algorithms, Containers, Iterators', 'Classes, Objects, Methods', 'Files, Streams, Buffers', 'None'],
    correctAnswers: [0],
    hints: ['Provides a set of general-purpose classes and functions.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Range-based for loop',
    description: 'Which C++ version introduced range-based for loops?',
    options: ['C++98', 'C++03', 'C++11', 'C++17'],
    correctAnswers: [2],
    hints: ['for (auto& x : container) { ... }']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Auto keyword',
    description: 'Keyword for automatic type deduction.',
    initialCode: '___ i = 5; // i is int',
    correctAnswers: ['auto'],
    hints: ['Introduced in C++11.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Override keyword',
    description: 'What does the "override" keyword do?',
    options: ['Deletes a function', 'Explicitly marks a virtual function as overriding a base class function', 'Makes a function private', 'None'],
    correctAnswers: [1],
    hints: ['Helps prevent errors by catching mismatches in function signatures at compile time.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Final keyword',
    description: 'What does "final" mean when applied to a class?',
    options: ['The class is the last one in the file', 'The class cannot be inherited from', 'The class is private', 'None'],
    correctAnswers: [1],
    hints: ['Can also be applied to virtual functions.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Output text',
    description: 'Print "Hello" with a newline using std::cout.',
    initialCode: 'std::cout << "Hello" << ___;',
    correctAnswers: ['std::endl'],
    hints: ['Inserts a newline and flushes the stream.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Smart Pointers: unique_ptr',
    description: 'Can a unique_ptr be copied?',
    options: ['Yes', 'No', 'Only if it points to NULL', 'Only in C++20'],
    correctAnswers: [1],
    hints: ['It represents exclusive ownership of a pointer.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Smart Pointers: shared_ptr',
    description: 'What does a shared_ptr do?',
    options: ['Hides a pointer', 'Allows multiple pointers to share ownership of a single object', 'Deletes a pointer immediately', 'None'],
    correctAnswers: [1],
    hints: ['Uses reference counting to manage object lifetime.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Lambda expression',
    description: 'Character used for the capture list in a lambda.',
    initialCode: '___(int x) { return x * 2; }',
    correctAnswers: ['[]'],
    hints: ['Brackets used at the start of lambda.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Vector declaration',
    description: 'Declare a vector of integers.',
    initialCode: 'std::___<int> v;',
    correctAnswers: ['vector'],
    hints: ['Dynamic array container.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'RAII',
    description: 'What does RAII stand for?',
    options: ['Rapid Application Interface Integration', 'Resource Acquisition Is Initialization', 'Random Access Internal Index', 'None'],
    correctAnswers: [1],
    hints: ['C++ programming technique which binds the lifecycle of a resource to the lifetime of an object.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Move Semantics',
    description: 'What is the purpose of move semantics?',
    options: ['To move objects between files', 'To efficiently transfer resources from one object to another instead of copying them', 'To move code to the cloud', 'None'],
    correctAnswers: [1],
    hints: ['Uses rvalue references (&&).']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Explicit keyword',
    description: 'Keyword used to prevent implicit conversions in constructors.',
    initialCode: '___ Class(int x);',
    correctAnswers: ['explicit'],
    hints: ['Avoids accidental type conversions.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Reference parameter',
    description: 'Pass x as a reference to function f.',
    initialCode: 'void f(int ___x) { ... }',
    correctAnswers: ['&'],
    hints: ['Allows the function to modify the original variable.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Mutable keyword',
    description: 'What does "mutable" allow?',
    options: ['Changing a class', 'Modifying a class member even within a const member function', 'Creating multiple instances', 'None'],
    correctAnswers: [1],
    hints: ['Used for members that are not part of the visible state of the object.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Friend classes',
    description: 'What can a friend class do?',
    options: ['Call public methods', 'Access the private and protected members of the class where it is declared as a friend', 'Inherit from the class', 'None'],
    correctAnswers: [1],
    hints: ['Breaks encapsulation for specific trusted classes.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Template keyword',
    description: 'Keyword to start a generic class or function definition.',
    initialCode: '___ <typename T>\nT add(T a, T b) { return a + b; }',
    correctAnswers: ['template'],
    hints: ['Allows generic programming.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Delete object',
    description: 'Free memory allocated with new.',
    initialCode: 'User *u = new User();\n___ u;',
    correctAnswers: ['delete'],
    hints: ['Calls the destructor and deallocates memory.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Pure virtual function',
    description: 'How is a pure virtual function declared?',
    options: ['virtual void f() = 0;', 'pure virtual void f();', 'virtual void f() pure;', 'None'],
    correctAnswers: [0],
    hints: ['Makes the class abstract.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Diamond Problem',
    description: 'What solves the "Diamond Problem" in C++ inheritance?',
    options: ['Multiple inheritance', 'Virtual inheritance', 'Interface implementation', 'None'],
    correctAnswers: [1],
    hints: ['Ensures only one instance of a common base class is present.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Namespace using',
    description: 'Keyword to bring all members of a namespace into the current scope.',
    initialCode: '___ namespace std;',
    correctAnswers: ['using'],
    hints: ['Commonly used with "std".']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Input text',
    description: 'Read an integer from std::cin.',
    initialCode: 'std::cin ___ x;',
    correctAnswers: ['>>'],
    hints: ['Extraction operator.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Compile-time constants',
    description: 'Which keyword defines a true compile-time constant expression?',
    options: ['const', 'constexpr', 'static', 'final'],
    correctAnswers: [1],
    hints: ['Introduced in C++11 and expanded in later versions.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Static Cast',
    description: 'What is static_cast used for?',
    options: ['Casting to static variables', 'Performing standard type conversions at compile time', 'Casting pointers to integers only', 'None'],
    correctAnswers: [1],
    hints: ['Checked by the compiler for safety.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Operator overloading',
    description: 'Keyword used to redefine the behavior of C++ operators.',
    initialCode: 'Vector ___+(const Vector& v) { ... }',
    correctAnswers: ['operator'],
    hints: ['Enables natural usage of user-defined types.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Find in vector',
    description: 'Check if x is in vector v.',
    initialCode: 'auto it = std::___(v.begin(), v.end(), x);',
    correctAnswers: ['find'],
    hints: ['Generic algorithm from <algorithm>.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Constructor delegation',
    description: 'What is constructor delegation?',
    options: ['Asking a friend to write the constructor', 'One constructor calling another constructor of the same class', 'Inheriting constructors', 'None'],
    correctAnswers: [1],
    hints: ['Reduces code duplication in constructors.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Initializers',
    description: 'How to initialize members using a member initializer list?',
    options: ['Inside the constructor body', 'After the constructor signature and a colon', 'Using static block', 'None'],
    correctAnswers: [1],
    hints: ['More efficient than assignment in the body.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Function macro',
    description: 'Keyword for a function whose body is substituted at the call site.',
    initialCode: '___ int add(int a, int b) { return a + b; }',
    correctAnswers: ['inline'],
    hints: ['Suggestion to the compiler to avoid function call overhead.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'C++ Creator',
    description: 'Who created the C++ language?',
    options: ['Bjarne Stroustrup', 'Dennis Ritchie', 'Ken Thompson', 'Linus Torvalds'],
    correctAnswers: [0],
    hints: ['He started working on "C with Classes" in 1979.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Standard Template Library (STL)',
    description: 'What are the three main components of STL?',
    options: ['Classes, Objects, Methods', 'Algorithms, Containers, Iterators', 'Heads, Bodys, Tails', 'None'],
    correctAnswers: [1],
    hints: ['Provides standard implementations of common data structures.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Smart Pointers',
    description: 'Which smart pointer allows multiple owners of the same pointer?',
    options: ['unique_ptr', 'shared_ptr', 'weak_ptr', 'auto_ptr'],
    correctAnswers: [1],
    hints: ['Uses reference counting.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Range-based for loop',
    description: 'Syntax for iterating over a vector "v".',
    initialCode: 'for (auto x ___ v) { ... }',
    correctAnswers: [':'],
    hints: ['A single colon.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Lvalue vs Rvalue',
    description: 'What is an rvalue in C++?',
    options: ['A persistent object', 'A temporary value that does not persist beyond the expression that uses it', 'A variable on the left side of assignment', 'None'],
    correctAnswers: [1],
    hints: ['Example: the result of 2 + 2.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Move Semantics',
    description: 'Which keyword is used to cast an lvalue to an rvalue reference to enable moving?',
    options: ['move', 'std::move', 'static_cast', 'reinterpret_cast'],
    correctAnswers: [1],
    hints: ['Enables efficient transfer of resources.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Vector push_back',
    description: 'Add 1 to end of std::vector<int> v.',
    initialCode: 'std::vector<int> v;\nv.___ (1);',
    correctAnswers: ['push_back'],
    hints: ['Common vector method.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Friend Function',
    description: 'What can a "friend" function do?',
    options: ['Call private methods only', 'Access private and protected members of the class it is a friend of', 'Only access public members', 'None'],
    correctAnswers: [1],
    hints: ['Breaks encapsulation but can be useful for certain operators.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Explicit Keyword',
    description: 'What is the "explicit" keyword used for on constructors?',
    options: ['To make them public', 'To prevent implicit conversions or copy-initialization', 'To speed up the code', 'None'],
    correctAnswers: [1],
    hints: ['Prevents accidental type conversions.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Dynamic Cast',
    description: 'Operator used for safe downcasting in an inheritance hierarchy.',
    initialCode: 'B* b = ___ <B*>(a);',
    correctAnswers: ['dynamic_cast'],
    hints: ['Requires RTTI to be enabled.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'String length',
    description: 'Get length of std::string s.',
    initialCode: 'std::string s = "hi";\nint len = s.___ ();',
    correctAnswers: ['length'],
    hints: ['Can also use size().']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Virtual Destructor',
    description: 'Why should a base class have a virtual destructor?',
    options: ['To allow cloning', 'To ensure the derived class destructor is called when deleting via base pointer', 'To make the class abstract', 'None'],
    correctAnswers: [1],
    hints: ['Prevents memory leaks in inheritance.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Operator Overloading',
    description: 'Can you overload the dot (.) operator in C++?',
    options: ['Yes', 'No', 'Only in C++20', 'Only for static classes'],
    correctAnswers: [1],
    hints: ['Some operators like ., ::, ?:, and sizeof cannot be overloaded.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'C++11 nullptr',
    description: 'Preferred keyword for null pointer in C++11 and later.',
    initialCode: 'int* p = ___ ;',
    correctAnswers: ['nullptr'],
    hints: ['Prevents ambiguity with integer 0.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Template class',
    description: 'Define a template prefix for a class.',
    initialCode: '___ <typename T>\nclass Box { T data; };',
    correctAnswers: ['template'],
    hints: ['Used for generic programming.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'RAII',
    description: 'What does RAII stand for?',
    options: ['Resource Allocation Is Intelligent', 'Resource Acquisition Is Initialization', 'Random Access Internal Interface', 'None'],
    correctAnswers: [1],
    hints: ['Fundamental C++ idiom for resource management.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Lambda capture',
    description: 'How do you capture all local variables by value in a lambda?',
    options: ['[&]', '[=]', '[val]', 'None'],
    correctAnswers: [1],
    hints: ['The equal sign captures by value, ampersand by reference.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Final keyword',
    description: 'What does the "final" specifier do when applied to a virtual function?',
    options: ['Hides the function', 'Prevents further overriding in derived classes', 'Makes the function static', 'None'],
    correctAnswers: [1],
    hints: ['Similar to "final" in Java or C#.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Override keyword',
    description: 'Specifier to ensure that a member function is overriding a virtual function from a base class.',
    initialCode: 'void draw() ___ { ... }',
    correctAnswers: ['override'],
    hints: ['Helps catch errors if the base function signature changes.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Sort vector',
    description: 'Sort vector v from begin to end.',
    initialCode: 'std::sort(v.___ (), v.___ ());',
    correctAnswers: ['begin', 'end'],
    hints: ['Uses iterators from the container.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Constexpr',
    description: 'What is the purpose of "constexpr"?',
    options: ['To define a constant variable', 'To specify that the value of a variable or function can be evaluated at compile time', 'To make a variable global', 'None'],
    correctAnswers: [1],
    hints: ['Stronger than const; it guarantees compile-time evaluation.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'Mutable Keyword',
    description: 'What does "mutable" allow on a class member?',
    options: ['It can be changed even in a const member function', 'It is shared across all instances', 'It is private', 'None'],
    correctAnswers: [0],
    hints: ['Useful for caches or mutexes that don\'t change the logical state of an object.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Static Cast',
    description: 'Keyword for standard type conversion performed at compile time.',
    initialCode: 'double d = 3.14;\nint i = ___ <int>(d);',
    correctAnswers: ['static_cast'],
    hints: ['Safer than C-style casts.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'Include IO',
    description: 'Include the standard input/output stream header.',
    initialCode: '#include <___>',
    correctAnswers: ['iostream'],
    hints: ['Required for using cin and cout.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Multiple Inheritance: Virtual',
    description: 'What is a virtual base class used for in multiple inheritance?',
    options: ['To speed up code', 'To resolve ambiguity and prevent multiple instances of a base class (the "Diamond Problem")', 'To hide methods', 'None'],
    correctAnswers: [1],
    hints: ['Ensures only one copy of the base class is inherited.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'RTTI',
    description: 'What does RTTI stand for?',
    options: ['Run-Time Type Information', 'Random Type Transfer Info', 'Recursive Type Testing Interface', 'None'],
    correctAnswers: [0],
    hints: ['Mechanism that allows the type of an object to be determined at runtime.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Auto keyword',
    description: 'Keyword used for automatic type deduction since C++11.',
    initialCode: '___ x = 5; // x is int',
    correctAnswers: ['auto'],
    hints: ['Deduces the type from the initializer expression.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Output text',
    description: 'Print "OK" using cout.',
    initialCode: 'std::cout << "OK" << ___ ;',
    correctAnswers: ['std::endl'],
    hints: ['Inserts a newline and flushes the stream.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Delegating Constructor',
    description: 'What version of C++ introduced delegating constructors?',
    options: ['C++98', 'C++03', 'C++11', 'C++17'],
    correctAnswers: [2],
    hints: ['Allows one constructor to call another of the same class.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Noexcept',
    description: 'What does the "noexcept" specifier indicate?',
    options: ['The function returns nothing', 'The function does not throw any exceptions', 'The function is private', 'None'],
    correctAnswers: [1],
    hints: ['Helps the compiler optimize code (e.g. move instead of copy).']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'This pointer',
    description: 'The keyword for the pointer to the current object instance.',
    initialCode: 'this->name = name;',
    correctAnswers: ['this'],
    hints: ['Implicitly passed to all non-static member functions.']
  }
];
