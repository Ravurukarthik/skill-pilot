
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
    correctAnswers: [2], // 'string' is not a basic type in C (it's char array)
    hints: ['Think about the most primitive types defined in the C standard.']
  },
  {
    id: 3,
    type: 'coding',
    title: 'Addition of Two Numbers',
    description: 'Write a program that adds two integers (e.g., 5 and 10) and prints the result.',
    initialCode: '#include <stdio.h>\n\nint main() {\n  int a = 5, b = 10;\n  // Calculate sum and print it\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '15',
        description: 'Should print 15'
      }
    ]
  },
  {
    id: 4,
    type: 'theory',
    title: 'Memory Management',
    description: 'Which function is used to dynamically allocate memory in C?',
    options: ['alloc()', 'malloc()', 'new()', 'assign()'],
    correctAnswers: [1],
    hints: ['It stands for memory allocation.']
  },
  {
    id: 5,
    type: 'blanks',
    title: 'Pointers in C',
    description: 'Complete the code to declare a pointer to an integer named "ptr" that points to the variable "x".',
    initialCode: 'int x = 10;\nint ___ = &x;',
    correctAnswers: ['*ptr'],
    hints: ['The asterisk symbol is used to declare a pointer.']
  },
  {
    id: 6,
    type: 'theory',
    title: 'Looping in C',
    description: 'Which loop is guaranteed to execute at least once?',
    options: ['for loop', 'while loop', 'do-while loop', 'none of the above'],
    correctAnswers: [2],
    hints: ['This loop checks the condition after executing the body.']
  },
  {
    id: 7,
    type: 'theory',
    title: 'C Strings',
    description: 'What is the last character in every string in C?',
    options: ['\\n', '\\t', '\\0', '.'],
    correctAnswers: [2],
    hints: ['It is called the null terminator.']
  },
  {
    id: 8,
    type: 'coding',
    title: 'Factorial of a Number',
    description: 'Write a program to calculate the factorial of 5 and print it.',
    initialCode: '#include <stdio.h>\n\nint main() {\n  int n = 5, fact = 1;\n  // Calculate factorial\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '120',
        description: 'Should print 120'
      }
    ]
  },
  {
    id: 9,
    type: 'theory',
    title: 'C Structures',
    description: 'Which keyword is used to define a structure in C?',
    options: ['struct', 'record', 'class', 'object'],
    correctAnswers: [0],
    hints: ['It is a shortened version of the word "structure".']
  },
  {
    id: 11,
    type: 'theory',
    title: 'C Preprocessor',
    description: 'Which directive is used to define a constant in C?',
    options: ['#const', '#define', '#include', '#lib'],
    correctAnswers: [1],
    hints: ['It starts with a hash and is used for macros.']
  },
  {
    id: 12,
    type: 'coding',
    title: 'Check Even or Odd',
    description: 'Write a program that takes an integer 7 and prints "Odd".',
    initialCode: '#include <stdio.h>\n\nint main() {\n  int n = 7;\n  // Check if n is even or odd\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'Odd',
        description: 'Should print Odd'
      }
    ]
  },
  {
    id: 13,
    type: 'theory',
    title: 'Sizeof Operator',
    description: 'What does the sizeof operator return?',
    options: ['Bits', 'Bytes', 'Characters', 'Words'],
    correctAnswers: [1],
    hints: ['Storage size is measured in blocks of 8 bits.']
  },
  {
    id: 14,
    type: 'blanks',
    title: 'Array Initialization',
    description: 'Complete the declaration of an integer array named "vals" with 3 elements: 1, 2, 3.',
    initialCode: 'int vals[3] = {___};',
    correctAnswers: ['1, 2, 3'],
    hints: ['Comma separated values inside the braces.']
  },
  {
    id: 15,
    type: 'theory',
    title: 'Standard Input',
    description: 'Which function is used to read formatted input from the keyboard?',
    options: ['input()', 'read()', 'scanf()', 'getch()'],
    correctAnswers: [2],
    hints: ['It is the counterpart to printf.']
  },
  {
    id: 16,
    type: 'coding',
    title: 'Find Maximum',
    description: 'Write a program to find the maximum of two numbers 25 and 40, and print "40".',
    initialCode: '#include <stdio.h>\n\nint main() {\n  int a = 25, b = 40;\n  // Use if-else to find max and print it\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '40',
        description: 'Should print 40'
      }
    ]
  },
  {
    id: 17,
    type: 'theory',
    title: 'Switch Statement',
    description: 'Which keyword is used to exit from a switch-case block?',
    options: ['exit', 'stop', 'break', 'return'],
    correctAnswers: [2],
    hints: ['It prevents falling through to the next case.']
  },
  {
    id: 18,
    type: 'blanks',
    title: 'Return Type',
    description: 'What is the return type of a function that does not return any value?',
    initialCode: '___ myFunction() { }',
    correctAnswers: ['void'],
    hints: ['Empty or null return type.']
  },
  {
    id: 19,
    type: 'theory',
    title: 'Address Operator',
    description: 'Which operator is used to get the address of a variable?',
    options: ['*', '&', '$', '#'],
    correctAnswers: [1],
    hints: ['It is also known as the ampersand.']
  },
  {
    id: 20,
    type: 'coding',
    title: 'Reverse a Number',
    description: 'Write a program to reverse the number 123 and print "321".',
    initialCode: '#include <stdio.h>\n\nint main() {\n  int n = 123, rev = 0;\n  // Reverse logically and print\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '321',
        description: 'Should print 321'
      }
    ]
  },
  {
    id: 21,
    type: 'theory',
    title: 'Escape Sequences',
    description: 'Which escape sequence represents a tab character?',
    options: ['\\\\n', '\\\\b', '\\\\t', '\\\\r'],
    correctAnswers: [2],
    hints: ['"t" stands for tab.']
  },
  {
    id: 22,
    type: 'theory',
    title: 'Global Variables',
    description: 'Where are global variables stored in memory?',
    options: ['Stack', 'Heap', 'Data Segment', 'Registers'],
    correctAnswers: [2],
    hints: ['They persist throughout the program execution.']
  },
  {
    id: 23,
    type: 'blanks',
    title: 'Header Guards',
    description: 'Commonly used in header files to prevent multiple inclusion.',
    initialCode: '#ifndef HEADER_H\n#define HEADER_H\n...\n#___',
    correctAnswers: ['endif'],
    hints: ['Closes the #ifndef block.']
  },
  {
    id: 24,
    type: 'coding',
    title: 'Calculate Average',
    description: 'Calculate the average of 10, 20, 30 and print "20.00".',
    initialCode: '#include <stdio.h>\n\nint main() {\n  float avg = (10 + 20 + 30) / 3.0;\n  // Print avg with 2 decimal places\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '20.00',
        description: 'Should print 20.00'
      }
    ]
  },
  {
    id: 25,
    type: 'theory',
    title: 'Typedef',
    description: 'What is the purpose of the typedef keyword?',
    options: ['Define a new variable', 'Create an alias for a type', 'Define a macro', 'Allocate memory'],
    correctAnswers: [1],
    hints: ['Allows you to define custom type names.']
  },
  {
    id: 26,
    type: 'theory',
    title: 'Recursion',
    description: 'What is a function called that calls itself?',
    options: ['Self-call', 'Recursive function', 'Iteration', 'Nested function'],
    correctAnswers: [1],
    hints: ['Factorials are often calculated using this technique.']
  },
  {
    id: 27,
    type: 'blanks',
    title: 'Increment Operator',
    description: 'Add 1 to variable x using the increment operator.',
    initialCode: 'x___;',
    correctAnswers: ['++'],
    hints: ['Double plus signs.']
  },
  {
    id: 28,
    type: 'coding',
    title: 'Print Multiples',
    description: 'Print the first 3 multiples of 5 (5 10 15).',
    initialCode: '#include <stdio.h>\n\nint main() {\n  // Using a loop print 5 10 15\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '5 10 15',
        description: 'Should print 5 10 15'
      }
    ]
  },
  {
    id: 29,
    type: 'theory',
    title: 'Logical AND',
    description: 'Which operator represents the logical AND in C?',
    options: ['&', '&&', '|', '||'],
    correctAnswers: [1],
    hints: ['Double ampersand.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Bitwise XOR',
    description: 'Which operator represents the bitwise XOR in C?',
    options: ['^', '~', '&', '|'],
    correctAnswers: [0],
    hints: ['It is a caret symbol.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Format Specifier for double',
    description: 'Which format specifier is used for a double in printf()?',
    options: ['%f', '%d', '%lf', '%c'],
    correctAnswers: [2],
    hints: ['L is for long.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Sizeof operator',
    description: 'What does the sizeof operator return?',
    options: ['Size of variable in bits', 'Size of variable in bytes', 'Value of the variable', 'Memory address'],
    correctAnswers: [1],
    hints: ['Standard unit of storage.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Null terminator',
    description: 'Character used to terminate strings in C.',
    initialCode: 'char s[] = "Hi"; // last char is ___',
    correctAnswers: ['\\0'],
    hints: ['Backslash zero.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'C Preprocessor',
    description: 'Which symbol starts a preprocessor directive?',
    options: ['@', '$', '#', '&'],
    correctAnswers: [2],
    hints: ['Think of #include.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Infinite Loop',
    description: 'Which of these is an infinite loop?',
    options: ['for(;;)', 'while(1)', 'do{}while(1);', 'All of the above'],
    correctAnswers: [3],
    hints: ['Any condition that is always true.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Multiplication',
    description: 'Print result of 6 * 7.',
    initialCode: '#include <stdio.h>\nint main() {\n  // printf\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '42',
        description: 'Should print 42'
      }
    ]
  },
  {
    id: 37,
    type: 'theory',
    title: 'malloc return type',
    description: 'What does malloc() return if successful?',
    options: ['int', 'float', 'void*', 'char*'],
    correctAnswers: [2],
    hints: ['Generic pointer.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Switch Expression',
    description: 'Can a float be used in a switch statement?',
    options: ['Yes', 'No', 'Only if cast to int', 'Depends on compiler'],
    correctAnswers: [1],
    hints: ['Switch requires integral or enumeration types.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Pointer addition',
    description: 'If p is int* and p=1000, what is p+1 (assuming 4-byte int)?',
    initialCode: 'int *p = 1000;\n// p+1 value is ___',
    correctAnswers: ['1004'],
    hints: ['Increments by size of data type.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Odd or Even',
    description: 'Print "Odd" if 7 is odd, else "Even".',
    initialCode: '#include <stdio.h>\nint main() {\n  int n = 7;\n  if (n % 2 != 0) printf("Odd");\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'Odd',
        description: 'Should print Odd'
      }
    ]
  },
  {
    id: 41,
    type: 'theory',
    title: 'Standard Error',
    description: 'Which stream is used for error messages?',
    options: ['stdin', 'stdout', 'stderr', 'stdlog'],
    correctAnswers: [2],
    hints: ['Abbreviation for standard error.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Structure alignment',
    description: 'What is adding bytes between members for alignment called?',
    options: ['Squeezing', 'Padding', 'Stretching', 'Filling'],
    correctAnswers: [1],
    hints: ['Ensures CPU memory access efficiency.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Comparison operator',
    description: 'Operator for "not equal to".',
    initialCode: 'if (a ___ b)',
    correctAnswers: ['!='],
    hints: ['Exclamation mark and equals.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Array access',
    description: 'Given arr[3]={1,2,3}, print arr[2].',
    initialCode: '#include <stdio.h>\nint main() {\n  int arr[] = {1, 2, 3};\n  // print third element\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '3',
        description: 'Should print 3'
      }
    ]
  },
  {
    id: 45,
    type: 'theory',
    title: 'Unions',
    description: 'How much memory does a union allocate?',
    options: ['Sum of all members', 'Size of its largest member', 'Size of its smallest member', 'Depends on OS'],
    correctAnswers: [1],
    hints: ['All members share the same memory location.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Register keyword',
    description: 'What does "register" hint to the compiler?',
    options: ['Store in RAM', 'Store in a CPU register', 'Do not optimize', 'Make it static'],
    correctAnswers: [1],
    hints: ['For faster access.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Logical AND',
    description: 'Operator for logical AND.',
    initialCode: 'if (a > 0 ___ b < 0)',
    correctAnswers: ['&&'],
    hints: ['Double ampersand.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Character print',
    description: 'Print character "A".',
    initialCode: '#include <stdio.h>\nint main() {\n  printf("%c", \'A\');\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: 'A',
        description: 'Should print A'
      }
    ]
  },
  {
    id: 49,
    type: 'theory',
    title: 'File Open Mode',
    description: 'Which mode opens a file for appending?',
    options: ['r', 'w', 'a', 'x'],
    correctAnswers: [2],
    hints: ['Short for append.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Recursion',
    description: 'What is a function calling itself called?',
    options: ['Iteration', 'Recursion', 'Looping', 'Redundancy'],
    correctAnswers: [1],
    hints: ['Commonly used for factorials.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Bitwise OR',
    description: 'Operator for bitwise OR.',
    initialCode: 'int c = a ___ b;',
    correctAnswers: ['|'],
    hints: ['Single vertical bar.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Increment',
    description: 'Given x=5, print ++x.',
    initialCode: '#include <stdio.h>\nint main() {\n  int x = 5;\n  printf("%d", ++x);\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '6',
        description: 'Should print 6'
      }
    ]
  },
  {
    id: 53,
    type: 'theory',
    title: 'volatile keyword',
    description: 'What does "volatile" prevent?',
    options: ['Compilation', 'Optimization on the variable', 'Memory leaks', 'Syntax errors'],
    correctAnswers: [1],
    hints: ['Used for memory-mapped I/O.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Standard Library Header',
    description: 'Which header contains exit() function?',
    options: ['stdio.h', 'stdlib.h', 'string.h', 'math.h'],
    correctAnswers: [1],
    hints: ['Standard library utility header.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Ternary operator',
    description: 'First part of ternary operator symbol.',
    initialCode: 'int a = (b > c) ___ b : c;',
    correctAnswers: ['?'],
    hints: ['Question mark.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Factorial logic',
    description: 'Print 4 factorial (output: "24").',
    initialCode: '#include <stdio.h>\nint main() {\n  int f = 1 * 2 * 3 * 4;\n  printf("%d", f);\n  return 0;\n}',
    testCases: [
      {
        expectedOutput: '24',
        description: 'Should print 24'
      }
    ]
  },
  {
    id: 57,
    type: 'theory',
    title: 'Array pointer equivalence',
    description: 'Is an array name treated as a constant pointer to the first element?',
    options: ['Yes', 'No', 'Only for integers', 'Depends on context'],
    correctAnswers: [0],
    hints: ['arr is equivalent to &arr[0].']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Header Guards',
    description: 'Why are #ifndef and #define used in headers?',
    options: ['To speed up compilation', 'To prevent multiple inclusion', 'To define constants', 'To hide code'],
    correctAnswers: [1],
    hints: ['Avoids redefinition errors.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Arrow operator',
    description: 'Operator to access struct member via pointer.',
    initialCode: 'ptr___member = 10;',
    correctAnswers: ['->'],
    hints: ['Hyphen and greater than.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'C Standard',
    description: 'Which is a widely used C standard released in 1999?',
    options: ['C89', 'C90', 'C99', 'C11'],
    correctAnswers: [2],
    hints: ['Named after the year 1999.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Pointers and Arrays',
    description: 'Is an array name treated like a pointer in C?',
    options: ['Yes', 'No', 'Only for character arrays', 'Only in C99'],
    correctAnswers: [0],
    hints: ['It acts as a constant pointer to the first element.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Void Pointer',
    description: 'What is a void pointer (void*)?',
    options: ['A pointer that points to nothing', 'A generic pointer that can hold address of any type', 'An invalid pointer', 'A pointer to a function'],
    correctAnswers: [1],
    hints: ['Must be cast to another type before dereferencing.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'File Open',
    description: 'Function to open a file.',
    initialCode: 'FILE *f = ___("test.txt", "r");',
    correctAnswers: ['fopen'],
    hints: ['Stands for file open.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Struct Memory',
    description: 'How is memory allocated for a Struct?',
    options: ['One shared slot for all members', 'Contiguous block of memory for all members', 'Randomly distributed', 'Only for pointers'],
    correctAnswers: [1],
    hints: ['Size is the sum of sizes of members (plus padding).']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Union Memory',
    description: 'What is the size of a Union?',
    options: ['Sum of all member sizes', 'Size of its largest member', 'Size of its smallest member', 'Fixed at 8 bytes'],
    correctAnswers: [1],
    hints: ['All members share the same memory location.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'String length',
    description: 'Get length of "abc". output: "3".',
    initialCode: '#include <string.h>\n// int len = strlen("abc");\n',
    testCases: [
      {
        expectedOutput: '3',
        description: 'Should print length of string'
      }
    ]
  },
  {
    id: 67,
    type: 'theory',
    title: 'Recursion',
    description: 'What is recursion in C?',
    options: ['A faster loop', 'A function calling itself', 'A special variable type', 'A network protocol'],
    correctAnswers: [1],
    hints: ['Requires a base case to prevent infinite calls.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Static keyword (local)',
    description: 'What happens to a static local variable after a function returns?',
    options: ['It is destroyed', 'It retains its value for the next call', 'It becomes global', 'It causes an error'],
    correctAnswers: [1],
    hints: ['Initialized only once.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Character Constant',
    description: 'Single quotes are used for characters.',
    initialCode: 'char c = ___A___;',
    correctAnswers: ["'"],
    hints: ['Comparison: string literals use double quotes.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Pointer addition',
    description: 'Add 1 to int pointer p.',
    initialCode: 'int *p = arr;\np___;',
    correctAnswers: ['++'],
    hints: ['Moves to the next integer in memory.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Typedef',
    description: 'What is the purpose of "typedef"?',
    options: ['To create a new variable', 'To define a new name for an existing type', 'To delete a type', 'To speed up the compiler'],
    correctAnswers: [1],
    hints: ['Example: typedef unsigned long ulong;']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Binary operators',
    description: 'Which operator is Bitwise AND?',
    options: ['&&', '&', '|', '^'],
    correctAnswers: [1],
    hints: ['Single ampersand.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Return statement',
    description: 'Keyword to exit a function and return a value.',
    initialCode: '___ 0;',
    correctAnswers: ['return'],
    hints: ['Used at the end of methods.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Check even',
    description: 'Check if x is even using modulo.',
    initialCode: 'if (x ___ 2 == 0) { ... }',
    correctAnswers: ['%'],
    hints: ['The remainder operator.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Header Guards',
    description: 'Why do we use #ifndef ... #define ... #endif in headers?',
    options: ['To make them fast', 'To prevent multiple inclusion errors', 'To encrypt them', 'To set file permissions'],
    correctAnswers: [1],
    hints: ['Commonly called include guards.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Conditional operator',
    description: 'What is the symbol for the ternary operator?',
    options: ['if-else', '?:', '??', '&&'],
    correctAnswers: [1],
    hints: ['Expression ? True : False']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Main arguments',
    description: 'Name of the first argument to main (number of arguments).',
    initialCode: 'int main(int ___, char *argv[])',
    correctAnswers: ['argc'],
    hints: ['Short for argument count.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Compare string',
    description: 'Compare two strings s1, s2.',
    initialCode: 'if (___(s1, s2) == 0) { ... }',
    correctAnswers: ['strcmp'],
    hints: ['Standard string function.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Floating point',
    description: 'Which type has higher precision?',
    options: ['float', 'double', 'int', 'char'],
    correctAnswers: [1],
    hints: ['Occupies 8 bytes usually.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Enums',
    description: 'What are the default values for enum constants (starting from the first)?',
    options: ['1, 2, 3...', '0, 1, 2...', 'A, B, C...', 'Random'],
    correctAnswers: [1],
    hints: ['0-indexed by default.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Format string',
    description: 'Specifier for an integer in printf.',
    initialCode: 'printf("Val: ___", val);',
    correctAnswers: ['%d'],
    hints: ['D stands for decimal.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Scan input',
    description: 'Read an integer x.',
    initialCode: 'scanf("%d", ___x);',
    correctAnswers: ['&'],
    hints: ['Requires address-of operator.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Memory alignment',
    description: 'What is structure padding?',
    options: ['Adding extra data', 'Adding empty bytes between members to align them to machine word boundaries', 'Removing data', 'Compressing structure'],
    correctAnswers: [1],
    hints: ['Improves CPU read efficiency.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Dangling pointer',
    description: 'What is a dangling pointer?',
    options: ['A pointer that points to a deleted memory location', 'A pointer that points to NULL', 'An uninitialized pointer', 'A pointer to a function'],
    correctAnswers: [0],
    hints: ['Happens after free() if pointer is not set to NULL.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Exit program',
    description: 'Function to terminate the program immediately.',
    initialCode: '___(0);',
    correctAnswers: ['exit'],
    hints: ['Found in stdlib.h.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Bitwise shift',
    description: 'Multiply x by 2 using left shift.',
    initialCode: 'res = x ___ 1;',
    correctAnswers: ['<<'],
    hints: ['Shift bits to the left.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'C Standard',
    description: 'Which C standard introduced "long long" and "//" comments?',
    options: ['C89', 'C90', 'C99', 'C11'],
    correctAnswers: [2],
    hints: ['A major update to the language.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Macro expansion',
    description: 'When are #define macros expanded?',
    options: ['At runtime', 'During preprocessing (before compilation)', 'By the linker', 'By the OS'],
    correctAnswers: [1],
    hints: ['Handled by the preprocessor.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Sizeof variable',
    description: 'Operator to find size of "int".',
    initialCode: 'int n = ___(int);',
    correctAnswers: ['sizeof'],
    hints: ['Returns size in bytes.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'C Creator',
    description: 'Who created the C programming language?',
    options: ['Dennis Ritchie', 'Ken Thompson', 'Bjarne Stroustrup', 'James Gosling'],
    correctAnswers: [0],
    hints: ['Developed at Bell Labs.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Storage Classes',
    description: 'Which storage class is used for global variables by default?',
    options: ['auto', 'register', 'static', 'extern'],
    correctAnswers: [3],
    hints: ['Variables defined outside functions have external linkage by default.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Memory Leak',
    description: 'What causes a memory leak in C?',
    options: ['Too many variables', 'Allocating memory with malloc() but never calling free()', 'Using pointers', 'Recursive functions'],
    correctAnswers: [1],
    hints: ['Heap memory must be manually managed.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Sizeof operator',
    description: 'Operator used to find the size of a data type in bytes.',
    initialCode: 'int s = ___(int);',
    correctAnswers: ['sizeof'],
    hints: ['Evaluated at compile time.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'The "volatile" keyword',
    description: 'What does "volatile" tell the compiler?',
    options: ['The variable value can change at any time without any action being taken by the code', 'The variable is very large', 'The variable is private', 'None'],
    correctAnswers: [0],
    hints: ['Prevents the compiler from optimizing away reads/writes to the variable.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Array indexing',
    description: 'What is the index of the last element in an array of size N?',
    options: ['N', 'N+1', 'N-1', '0'],
    correctAnswers: [2],
    hints: ['C uses zero-based indexing.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Character input',
    description: 'Read a single character into char c.',
    initialCode: 'scanf("___", &c);',
    correctAnswers: ['%c'],
    hints: ['Format specifier for char.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'File end',
    description: 'What constant represents the end of a file in C?',
    options: ['NULL', 'EOF', 'END', 'FIN'],
    correctAnswers: [1],
    hints: ['Usually defined as -1.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Logical OR',
    description: 'Which operator represents logical OR?',
    options: ['&', '|', '&&', '||'],
    correctAnswers: [3],
    hints: ['Double vertical bar.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Break statement',
    description: 'Keyword to exit a switch or loop immediately.',
    initialCode: 'if (i == 5) ___ ;',
    correctAnswers: ['break'],
    hints: ['Transfers control to the statement following the loop/switch.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'String length',
    description: 'Find length of string s.',
    initialCode: 'int len = ___(s);',
    correctAnswers: ['strlen'],
    hints: ['Found in <string.h>.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Dangling Pointer',
    description: 'What is a dangling pointer?',
    options: ['A pointer pointing to a valid memory address', 'A pointer pointing to a memory location that has been freed', 'A NULL pointer', 'None'],
    correctAnswers: [1],
    hints: ['Can lead to unpredictable behavior if dereferenced.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'C Standards',
    description: 'Which C standard introduced "long long int"?',
    options: ['C89', 'C90', 'C99', 'C11'],
    correctAnswers: [2],
    hints: ['Major revision of the C standard.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Macro definition',
    description: 'Preprocessor directive to define a constant macro.',
    initialCode: '#___ PI 3.14',
    correctAnswers: ['define'],
    hints: ['Starts with hash.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Condition syntax',
    description: 'If x is greater than 10.',
    initialCode: 'if ___ { ... }',
    correctAnswers: ['(x > 10)'],
    hints: ['Condition must be enclosed in parentheses.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Function Pointer',
    description: 'What is a function pointer?',
    options: ['A pointer that points to a variable', 'A pointer that stores the address of a function', 'A function that returns a pointer', 'None'],
    correctAnswers: [1],
    hints: ['Allows passing functions as arguments to other functions.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Binary files',
    description: 'Which mode is used to open a file for binary reading?',
    options: ['r', 'w', 'rb', 'wb'],
    correctAnswers: [2],
    hints: ['Append "b" to the mode string.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Case keyword',
    description: 'Keyword used in switch to define a branch.',
    initialCode: '___ 1: do_this(); break;',
    correctAnswers: ['case'],
    hints: ['Followed by a constant expression and a colon.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Return value',
    description: 'Return 0 from main.',
    initialCode: '___ 0;',
    correctAnswers: ['return'],
    hints: ['Standard way to exit a function.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Static inside function',
    description: 'What happens to a static variable inside a function?',
    options: ['It is destroyed after the function returns', 'It retains its value between function calls', 'It becomes global', 'None'],
    correctAnswers: [1],
    hints: ['Allocated only once during program execution.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'The "register" keyword',
    description: 'What is a "register" variable?',
    options: ['A variable that is fast', 'A suggestion to the compiler to store the variable in a CPU register', 'A variable that can\'t be changed', 'None'],
    correctAnswers: [1],
    hints: ['Cannot take the address (&) of a register variable.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Typedef',
    description: 'Keyword used to create a new name for an existing data type.',
    initialCode: '___ unsigned long ulong;',
    correctAnswers: ['typedef'],
    hints: ['Improves code readability.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Infinite loop',
    description: 'Create an infinite loop using while.',
    initialCode: 'while(___) { ... }',
    correctAnswers: ['1'],
    hints: ['Any non-zero value is true.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Wild Pointer',
    description: 'What is a wild pointer?',
    options: ['A pointer that points to a random location', 'An uninitialized pointer', 'A pointer that points to NULL', 'None'],
    correctAnswers: [1],
    hints: ['Always initialize your pointers to NULL if they don\'t points to anything yet.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Call by reference',
    description: 'How is call by reference simulated in C?',
    options: ['Using reference variables', 'Passing the address of a variable using pointers', 'Using global variables', 'None'],
    correctAnswers: [1],
    hints: ['C technically only has call by value.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Header guard',
    description: 'Directive to check if a macro is NOT defined.',
    initialCode: '#___ MY_HEADER_H',
    correctAnswers: ['ifndef'],
    hints: ['Used to prevent multiple inclusions of a header file.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Allocate float',
    description: 'Allocate memory for 10 floats.',
    initialCode: 'float *p = (float*)malloc(10 * ___);',
    correctAnswers: ['sizeof(float)'],
    hints: ['Calculate total bytes needed.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Recursive function',
    description: 'What is a recursive function?',
    options: ['A function that calls another function', 'A function that calls itself', 'A function that never returns', 'None'],
    correctAnswers: [1],
    hints: ['Must have a base case to terminate.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Multi-dimensional arrays',
    description: 'How is a 2D array matrix[2][3] stored in memory?',
    options: ['Row by row', 'Column by column', 'Scattered', 'None'],
    correctAnswers: [0],
    hints: ['C uses row-major order.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Continue statement',
    description: 'Keyword to skip the rest of the current loop iteration.',
    initialCode: 'if (skip) ___ ;',
    correctAnswers: ['continue'],
    hints: ['Gives control to the next iteration of the loop.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'C Origin',
    description: 'Where was the C programming language developed?',
    options: ['CERN', 'Bell Labs', 'Stanford', 'MIT'],
    correctAnswers: [1],
    hints: ['Created there along with Unix.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Storage Classes',
    description: 'Which storage class specifies that a variable should be stored in a register?',
    options: ['auto', 'static', 'extern', 'register'],
    correctAnswers: [3],
    hints: ['Used for frequently accessed variables like counters.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Bitwise AND',
    description: 'What is the result of 5 & 3 in C?',
    options: ['1', '7', '8', '2'],
    correctAnswers: [0],
    hints: ['Binary 101 & 011 = 001.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Union size',
    description: 'The size of a union is equal to the size of its ___ member.',
    initialCode: 'union U { int a; char b[10]; }; // size is ___',
    correctAnswers: ['largest'],
    hints: ['All members share the same memory location.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Conditional Operator',
    description: 'What is the only ternary operator in C?',
    options: ['&&', '||', '?:', '!='],
    correctAnswers: [2],
    hints: ['Used for inline if-else.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Header Guards',
    description: 'What is the purpose of #ifndef / #define / #endif in headers?',
    options: ['To speed up compilation', 'To prevent multiple inclusions of the same header file', 'To define global variables', 'None'],
    correctAnswers: [1],
    hints: ['Also called include guards.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Power calculation',
    description: 'Use pow(2, 3) to print 8.0 (output: "8.000000").',
    initialCode: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n  printf("%f", ___ (2, 3));\n  return 0;\n}',
    correctAnswers: ['pow'],
    hints: ['Found in math.h.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Function Prototype',
    description: 'What is a function prototype?',
    options: ['A full function definition', 'A declaration that tells the compiler about the function’s name, return type, and parameters', 'A type of comment', 'A macro'],
    correctAnswers: [1],
    hints: ['Usually placed at the top of the file or in a header.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Signal Handling',
    description: 'Which header is used for signal handling in C?',
    options: ['<stdio.h>', '<stdlib.h>', '<signal.h>', '<time.h>'],
    correctAnswers: [2],
    hints: ['Used to handle asynchronous events like Ctrl+C.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Pointer null',
    description: 'Standard constant used to represent a pointer that points to nothing.',
    initialCode: 'int *p = ___ ;',
    correctAnswers: ['NULL'],
    hints: ['Usually defined as ((void *)0).']
  },
  {
    id: 130,
    type: 'coding',
    title: 'String length',
    description: 'Print length of "hello" (output: "5").',
    initialCode: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n  printf("%d", (int)___ ("hello"));\n  return 0;\n}',
    correctAnswers: ['strlen'],
    hints: ['Excludes the null terminator.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Command Line Args',
    description: 'What is the type of the second argument (argv) in main(int argc, char *argv[])?',
    options: ['An integer', 'An array of character pointers (strings)', 'A single pointer', 'A file handle'],
    correctAnswers: [1],
    hints: ['Contains the command line strings.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Memory Leak',
    description: 'What causes a memory leak in C?',
    options: ['Allocating too much memory', 'Failing to free dynamically allocated memory', 'Using uninitialized pointers', 'Infinite recursion'],
    correctAnswers: [1],
    hints: ['Memory remains allocated but unreachable.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Typecast',
    description: 'Syntax to cast an int "x" to float.',
    initialCode: 'float f = (___) x;',
    correctAnswers: ['float'],
    hints: ['Parentheses around the type name.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'File Open',
    description: 'Open "data.txt" for reading.',
    initialCode: '#include <stdio.h>\n\nint main() {\n  FILE *f = ___ ("data.txt", "r");\n  return 0;\n}',
    correctAnswers: ['fopen'],
    hints: ['Returns a FILE pointer.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Enum value',
    description: 'What is the default integer value of the first member of an enum?',
    options: ['1', '0', '-1', 'undefined'],
    correctAnswers: [1],
    hints: ['Increments by 1 for each subsequent member.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Volatile Keyword',
    description: 'What does the "volatile" keyword tell the compiler?',
    options: ['The variable value cannot change', 'The variable value may be changed by something outside the control of the program (e.g. hardware)', 'The variable should be stored in a register', 'The variable is global'],
    correctAnswers: [1],
    hints: ['Prevents the compiler from optimizing away memory reads.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Dynamic Allocation size',
    description: 'Which function allocates memory and initializes all bits to zero?',
    options: ['malloc', 'calloc', 'realloc', 'free'],
    correctAnswers: [1],
    hints: ['Stands for contiguous allocation.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Pre-processor',
    description: 'Keyword used to undefine a macro.',
    initialCode: '#___ MY_MACRO',
    correctAnswers: ['undef'],
    hints: ['Removes a definition.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Abs calculation',
    description: 'Call function to get absolute value of -5 (integer).',
    initialCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n  printf("%d", ___ (-5));\n  return 0;\n}',
    correctAnswers: ['abs'],
    hints: ['Found in stdlib.h.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Static inside function',
    description: 'What happens to a static variable declared inside a function?',
    options: ['It is destroyed when the function returns', 'It retains its value between function calls', 'It is accessible by other functions', 'It cannot be modified'],
    correctAnswers: [1],
    hints: ['Initialized only once.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'Void Pointer',
    description: 'What can a void pointer (void *) store?',
    options: ['Only characters', 'Only integers', 'The address of any data type', 'Nothing'],
    correctAnswers: [2],
    hints: ['Generic pointer type.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Character Constant',
    description: 'The numerical value of the null character \'\\0\'.',
    initialCode: 'int nullVal = ___ ;',
    correctAnswers: ['0'],
    hints: ['Different from the character \'0\'.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'Exit program',
    description: 'Terminate the program with status 0.',
    initialCode: '#include <stdlib.h>\n\nint main() {\n  ___ (0);\n  return 0;\n}',
    correctAnswers: ['exit'],
    hints: ['Immediately closes the program.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Structure padding',
    description: 'Why do structures often have padding in C?',
    options: ['To waste memory', 'To ensure members are aligned on word boundaries for faster access', 'To store metadata', 'None'],
    correctAnswers: [1],
    hints: ['Depends on the architecture.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Linkage',
    description: 'What is "external linkage" in C?',
    options: ['Names visible only within a file', 'Names visible across multiple translation units (files)', 'Connection to a database', 'None'],
    correctAnswers: [1],
    hints: ['By default, global functions have this.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Floating point',
    description: 'Format specifier for a "double" in printf.',
    initialCode: 'double d = 1.0;\nprintf("%___", d);',
    correctAnswers: ['f'],
    hints: ['Note that in scanf, you use %lf.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Memory size',
    description: 'Get size of float in bytes.',
    initialCode: 'int s = ___ (float);',
    correctAnswers: ['sizeof'],
    hints: ['Compiled at compile time usually.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Goto statement',
    description: 'What is the "goto" statement used for?',
    options: ['To repeat a loop', 'To jump to a labeled statement in the same function', 'To call a function', 'None'],
    correctAnswers: [1],
    hints: ['Considered harmful by many, use sparingly.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Assert',
    description: 'Which header provides the "assert" macro?',
    options: ['<stdio.h>', '<stdlib.h>', '<assert.h>', '<math.h>'],
    correctAnswers: [2],
    hints: ['Used for debugging assumptions.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Bool type',
    description: 'Keyword for boolean type in C99 (requires stdbool.h).',
    initialCode: '#include <stdbool.h>\n___ isOk = true;',
    correctAnswers: ['bool'],
    hints: ['Alias for _Bool.']
  }
];
