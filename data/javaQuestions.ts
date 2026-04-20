import { Question } from '../types';

export const JAVA_QUESTIONS: Question[] = [
  // SECTION 1: BASICS (1–20)
  {
    id: 1,
    type: 'theory',
    title: '1. Java Introduction',
    description: 'What is the main advantage of Java?',
    options: ['Direct hardware access', 'Platform independence (Write Once, Run Anywhere)', 'No need for a compiler', 'Strictly procedural nature'],
    correctAnswers: [1],
    hints: ['JVM is the key.']
  },
  {
    id: 2,
    type: 'coding',
    title: '2. Hello World',
    description: 'Write a class Main with a main method that prints "Hello Java".',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    \n  }\n}',
    testCases: [
      { description: 'Print correctly', expectedOutput: 'Hello Java' }
    ],
    hints: ['System.out.println("Hello Java");']
  },
  {
    id: 3,
    type: 'blanks',
    title: '3. Data Types',
    description: 'The keyword for a 32-bit integer in Java is [int].',
    initialCode: '[int] x = 10;',
    correctAnswers: ['int'],
    hints: ['Short for integer.']
  },
  {
    id: 4,
    type: 'theory',
    title: '4. Memory Management',
    description: 'How is memory managed in Java?',
    options: ['Manual using free()', 'Automatic Garbage Collection', 'No dynamic memory', 'Reference counting only'],
    correctAnswers: [1],
    hints: ['The JVM periodically cleans up unused objects.']
  },
  {
    id: 5,
    type: 'coding',
    title: '5. Final Keyword',
    description: 'Declare a constant PI with value 3.14.',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    \n  }\n}',
    testCases: [
      { description: 'Final check', expectedOutput: /final\s+double\s+PI\s*=\s*3\.14/ }
    ],
    hints: ['Use the final keyword.']
  },
  {
    id: 6,
    type: 'theory',
    title: '6. Strings',
    description: 'Strings in Java are?',
    options: ['Mutable', 'Primitive type', 'Immutable objects', 'Arrays of integers'],
    correctAnswers: [2],
    hints: ['Once created, they cannot be changed.']
  },
  {
    id: 7,
    type: 'coding',
    title: '7. Addition',
    description: 'Print sum of 10 and 20.',
    initialCode: 'System.out.println(10 + 20);',
    testCases: [
      { description: 'Math check', expectedOutput: '30' }
    ],
    hints: ['Basic arithmetic.']
  },
  {
    id: 8,
    type: 'blanks',
    title: '8. Boolean',
    description: 'The boolean literals in Java are [true] and [false].',
    initialCode: 'boolean b = [true];',
    correctAnswers: ['true'],
    hints: ['All lowercase.']
  },
  {
    id: 9,
    type: 'theory',
    title: '9. JVM',
    description: 'What does JVM stand for?',
    options: ['Java Visual Maker', 'Java Virtual Machine', 'Joint Virtual Module', 'Java Variable Manager'],
    correctAnswers: [1],
    hints: ['It executes the bytecode.']
  },
  {
    id: 10,
    type: 'coding',
    title: '10. Type Casting',
    description: 'Cast double 9.8 to int.',
    initialCode: 'double d = 9.8;\nint i = \nSystem.out.println(i);',
    testCases: [
      { description: 'Explicit cast', expectedOutput: '9' }
    ],
    hints: ['(int) d']
  },
  {
    id: 11,
    type: 'theory',
    title: '11. Operators',
    description: 'Which is NOT a logical operator?',
    options: ['&&', '||', '!', '&='],
    correctAnswers: [3],
    hints: ['&= is a bitwise assignment.']
  },
  {
    id: 12,
    type: 'coding',
    title: '12. Character Input',
    description: 'Print char literal A.',
    initialCode: 'char c = \nSystem.out.println(c);',
    testCases: [
      { description: 'Char check', expectedOutput: 'A' }
    ],
    hints: ["'A'"]
  },
  {
    id: 13,
    type: 'blanks',
    title: '13. Public Static Void Main',
    description: 'The entry point method header ends with [String[] args].',
    initialCode: 'public static void main([String[] args])',
    correctAnswers: ['String[] args'],
    hints: ['Array of command line arguments.']
  },
  {
    id: 14,
    type: 'theory',
    title: '14. Naming Convention',
    description: 'Convention for Java classes?',
    options: ['camelCase', 'PascalCase', 'snake_case', 'lowercase'],
    correctAnswers: [1],
    hints: ['Starts with Uppercase.']
  },
  {
    id: 15,
    type: 'coding',
    title: '15. Modulo',
    description: 'Find 10 % 3.',
    initialCode: 'System.out.println(10 % 3);',
    testCases: [
      { description: 'Remainder', expectedOutput: '1' }
    ],
    hints: ['10 divided by 3 has remainder 1.']
  },
  {
    id: 16,
    type: 'theory',
    title: '16. Byte range',
    description: 'Range of byte data type?',
    options: ['0 to 255', '-128 to 127', '0 to 65535', '-1M to 1M'],
    correctAnswers: [1],
    hints: ['8-bit signed integer.']
  },
  {
    id: 17,
    type: 'coding',
    title: '17. Increment',
    description: 'Add 1 to x using ++.',
    initialCode: 'int x = 5;\nx++;\nSystem.out.println(x);',
    testCases: [
      { description: 'Unary ops', expectedOutput: '6' }
    ],
    hints: ['Post-increment.']
  },
  {
    id: 18,
    type: 'blanks',
    title: '18. Class Keyword',
    description: 'A class is declared using the [class] keyword.',
    initialCode: '[class] User {}',
    correctAnswers: ['class'],
    hints: ['Blueprint.']
  },
  {
    id: 19,
    type: 'theory',
    title: '19. Scope',
    description: 'Variables defined in a method are?',
    options: ['Static', 'Member variables', 'Local variables', 'Global'],
    correctAnswers: [2],
    hints: ['Scoped to that method block.']
  },
  {
    id: 20,
    type: 'coding',
    title: '20. String Length',
    description: 'Find length of "Java".',
    initialCode: 'String s = "Java";\nSystem.out.println(s.length());',
    testCases: [
      { description: 'Method call', expectedOutput: '4' }
    ],
    hints: ['Strings have a length() method.']
  },

  // SECTION 2: CONTROL FLOW (21–50)
  {
    id: 21,
    type: 'theory',
    title: '21. If condition',
    description: 'Correct if syntax?',
    options: ['if x > 5 {}', 'if (x > 5) {}', 'if x > 5 then {}', 'if (x > 5):'],
    correctAnswers: [1],
    hints: ['Parentheses are required.']
  },
  {
    id: 22,
    type: 'coding',
    title: '22. Max of Two',
    description: 'Print larger of 10, 20.',
    initialCode: 'int a = 10, b = 20;\nif (a > b) System.out.println(a);\nelse System.out.println(b);',
    testCases: [
      { description: 'Comparison', expectedOutput: '20' }
    ],
    hints: ['Else branch executes.']
  },
  {
    id: 23,
    type: 'blanks',
    title: '23. Switch case',
    description: 'The keyword to exit case block is [break].',
    initialCode: 'case 1: ... [break];',
    correctAnswers: ['break'],
    hints: ['Prevents fall-through.']
  },
  {
    id: 24,
    type: 'theory',
    title: '24. Switch types',
    description: 'Which can NOT be used in switch?',
    options: ['int', 'String', 'char', 'float'],
    correctAnswers: [3],
    hints: ['Floating points are not discrete values for equality.']
  },
  {
    id: 25,
    type: 'coding',
    title: '25. For loop',
    description: 'Print 1 to 3.',
    initialCode: 'for (int i = 1; i <= 3; i++) {\n  System.out.println(i);\n}',
    testCases: [
      { description: 'Iteration', expectedOutput: '1\n2\n3' }
    ],
    hints: ['Start, condition, increment.']
  },
  {
    id: 26,
    type: 'theory',
    title: '26. While loop',
    description: 'Difference between while and do-while?',
    options: ['While runs at least once', 'Do-while runs at least once', 'No difference', 'Do-while is faster'],
    correctAnswers: [1],
    hints: ['In do-while, condition is checked at the end.']
  },
  {
    id: 27,
    type: 'coding',
    title: '27. Countdown',
    description: 'While loop from 3 down to 1.',
    initialCode: 'int n = 3;\nwhile (n > 0) {\n  System.out.println(n);\n  n--;\n}',
    testCases: [
      { description: 'Decrement check', expectedOutput: '3\n2\n1' }
    ],
    hints: ['Decrease n in each step.']
  },
  {
    id: 28,
    type: 'blanks',
    title: '28. Continue',
    description: 'To skip to next iteration, use [continue].',
    initialCode: 'if (fail) [continue];',
    correctAnswers: ['continue'],
    hints: ['Jumps to increment part of loop.']
  },
  {
    id: 29,
    type: 'theory',
    title: '29. Ternary Operator',
    description: 'Java ternary syntax?',
    options: ['c ? t : f', 'if c t else f', 'condition if true', 'c ! t | f'],
    correctAnswers: [0],
    hints: ['Requires ? and :.']
  },
  {
    id: 30,
    type: 'coding',
    title: '30. Sum of first 5',
    description: 'Sum numbers 1 to 5.',
    initialCode: 'int s = 0;\nfor(int i=1; i<=5; i++) s+=i;\nSystem.out.println(s);',
    testCases: [
      { description: 'Loop accumulation', expectedOutput: '15' }
    ],
    hints: ['1+2+3+4+5 = 15.']
  },
  {
    id: 31,
    type: 'theory',
    title: '31. For-each loop',
    description: 'Syntax for iterating array arr?',
    options: ['for(x : arr)', 'foreach(x in arr)', 'for(int x : arr)', 'for(int i=0 to arr.length)'],
    correctAnswers: [2],
    hints: ['Type must be declared.']
  },
  {
    id: 32,
    type: 'coding',
    title: '32. Factorial of 4',
    description: 'Return 24.',
    initialCode: 'int n = 4, f = 1;\nfor(int i=1; i<=n; i++) f*=i;\nSystem.out.println(f);',
    testCases: [
      { description: 'Factorial logic', expectedOutput: '24' }
    ],
    hints: ['Simple loop.']
  },
  {
    id: 33,
    type: 'blanks',
    title: '33. Default Case',
    description: 'In switch, the fallback block is [default].',
    initialCode: 'switch(x) { [default]: ... }',
    correctAnswers: ['default'],
    hints: ['Like else.']
  },
  {
    id: 34,
    type: 'theory',
    title: '34. Logical AND',
    description: 'Which operator is short-circuiting?',
    options: ['&', '&&', '|', '!'],
    correctAnswers: [1],
    hints: ['If first part is false, second part is not evaluated.']
  },
  {
    id: 35,
    type: 'coding',
    title: '35. Even/Odd',
    description: 'Check if 10 is even.',
    initialCode: 'if (10 % 2 == 0) System.out.println("Even");',
    testCases: [
      { description: 'Modulo', expectedOutput: 'Even' }
    ],
    hints: ['Divided by 2, remainder 0.']
  },
  {
    id: 36,
    type: 'theory',
    title: '36. Infinite Loop',
    description: 'Cause of infinite loop?',
    options: ['while(true)', 'while(false)', 'for(;;)', 'A & C'],
    correctAnswers: [3],
    hints: ['Both are common ways to loop forever.']
  },
  {
    id: 37,
    type: 'coding',
    title: '37. Multiples of 3',
    description: 'Print 3, 6.',
    initialCode: 'for(int i=3; i<=6; i+=3) System.out.println(i);',
    testCases: [
      { description: 'Step check', expectedOutput: '3\n6' }
    ],
    hints: ['Add 3 in each iteration.']
  },
  {
    id: 38,
    type: 'blanks',
    title: '38. Logic OR',
    description: 'Short-circuiting OR is [||].',
    initialCode: 'if (a [||] b)',
    correctAnswers: ['||'],
    hints: ['Double pipes.']
  },
  {
    id: 39,
    type: 'theory',
    title: '39. Nested Loop',
    description: 'Inner loop for 2 rows, 2 cols?',
    options: ['for(i=1..2){for(j=1..2){}}', 'for..for..', 'while..for..', 'Any of above'],
    correctAnswers: [3],
    hints: ['Loops can be mixed and matched.']
  },
  {
    id: 40,
    type: 'coding',
    title: '40. Power calculation',
    description: 'Calculate 2^3 (8).',
    initialCode: 'System.out.println(Math.pow(2, 3));',
    testCases: [
      { description: 'Math.pow', expectedOutput: '8.0' }
    ],
    hints: ['Use the Math library.']
  },
  {
    id: 50,
    type: 'theory',
    title: '50. Break labeled',
    description: 'Use of labeled break?',
    options: ['Exit specific loop', 'Stop all loops', 'Exit current method', 'Jump to tag'],
    correctAnswers: [0],
    hints: ['Breaks to the statement marked with the label.']
  },

  // SECTION 3: ARRAYS (51–70)
  {
    id: 51,
    type: 'theory',
    title: '51. Array Definition',
    description: 'Correct way to declare int array?',
    options: ['int arr[]', 'int[] arr', 'Array<int> arr', 'Both A & B'],
    correctAnswers: [3],
    hints: ['Java supports both styles, but int[] arr is idiomatic.']
  },
  {
    id: 52,
    type: 'coding',
    title: '52. Create Array',
    description: 'Create array of size 5.',
    initialCode: 'int[] arr = \nSystem.out.println(arr.length);',
    testCases: [
      { description: 'New operator', expectedOutput: '5' }
    ],
    hints: ['new int[5]']
  },
  {
    id: 53,
    type: 'blanks',
    title: '53. Access Array',
    description: 'Access 3rd element using index [[2]].',
    initialCode: 'int x = arr[[2]];',
    correctAnswers: ['2'],
    hints: ['Starts at 0.']
  },
  {
    id: 54,
    type: 'theory',
    title: '54. Array Size',
    description: 'Can array size be changed after creation?',
    options: ['Yes', 'No', 'Only if empty', 'Using resize()'],
    correctAnswers: [1],
    hints: ['Arrays in Java are fixed size.']
  },
  {
    id: 55,
    type: 'coding',
    title: '55. Initialize Array',
    description: 'Print first element of {1, 2, 3}.',
    initialCode: 'int[] arr = {1, 2, 3};\nSystem.out.println(arr[0]);',
    testCases: [
      { description: 'Literal check', expectedOutput: '1' }
    ],
    hints: ['Shorthand initialization.']
  },
  {
    id: 56,
    type: 'theory',
    title: '56. ArrayIndexOutOfBounds',
    description: 'Occurs when?',
    options: ['Index is negative', 'Index == length', 'Index > length', 'All of above'],
    correctAnswers: [3],
    hints: ['Valid indices are 0 to length-1.']
  },
  {
    id: 57,
    type: 'coding',
    title: '57. Iterating Array',
    description: 'Sum of {10, 20}.',
    initialCode: 'int[] nums = {10, 20};\nint sum = 0;\nfor(int n : nums) sum += n;\nSystem.out.println(sum);',
    testCases: [
      { description: 'Sum check', expectedOutput: '30' }
    ],
    hints: ['Use enhanced for loop.']
  },
  {
    id: 58,
    type: 'blanks',
    title: '58. Length Property',
    description: 'To find array size, use the attribute [length].',
    initialCode: 'int n = arr.[length];',
    correctAnswers: ['length'],
    hints: ['Not a method, so no ().']
  },
  {
    id: 59,
    type: 'theory',
    title: '59. Multi-dimensional',
    description: 'Syntax for 2x2 matrix?',
    options: ['int[2,2] m', 'int[][] m', 'int m[2][2]', 'B & C'],
    correctAnswers: [3],
    hints: ['Arrays of arrays.']
  },
  {
    id: 60,
    type: 'coding',
    title: '60. 2D Access',
    description: 'Get first element of matrix.',
    initialCode: 'int[][] m = {{5}};\nSystem.out.println(m[0][0]);',
    testCases: [
      { description: 'Row/Col check', expectedOutput: '5' }
    ],
    hints: ['First row, first column.']
  },

  // SECTION 4: OOP (71–100)
  {
    id: 71,
    type: 'theory',
    title: '71. Object instantiation',
    description: 'Keyword to create object?',
    options: ['create', 'new', 'malloc', 'make'],
    correctAnswers: [1],
    hints: ['new MyClass();']
  },
  {
    id: 72,
    type: 'coding',
    title: '72. Constructor',
    description: 'Create object with int arg.',
    initialCode: 'class Box { \n  int val;\n  Box(int v) { val = v; }\n}\nBox b = new Box(100);\nSystem.out.println(b.val);',
    testCases: [
      { description: 'Ctor check', expectedOutput: '100' }
    ],
    hints: ['Pass value to constructor.']
  },
  {
    id: 73,
    type: 'blanks',
    title: '73. Constructor Name',
    description: 'Constructors must have the same name as the [class].',
    initialCode: 'class User { [User]() {} }',
    correctAnswers: ['User'],
    hints: ['Identifier matching.']
  },
  {
    id: 74,
    type: 'theory',
    title: '74. This keyword',
    description: 'Refers to?',
    options: ['Parent class', 'Current class instance', 'Base class', 'None'],
    correctAnswers: [1],
    hints: ['Always points to the object it belongs to.']
  },
  {
    id: 75,
    type: 'coding',
    title: '75. Method Call',
    description: 'Call msg().',
    initialCode: 'class A { void msg() { System.out.println("Ok"); } }\nnew A().msg();',
    testCases: [
      { description: 'Invoke', expectedOutput: 'Ok' }
    ],
    hints: ['Dot operator.']
  },
  {
    id: 76,
    type: 'theory',
    title: '76. Static Keyword',
    description: 'A static member belongs to?',
    options: ['Object', 'Class', 'Heap', 'Stack'],
    correctAnswers: [1],
    hints: ['Accessed via class name directly.']
  },
  {
    id: 77,
    type: 'coding',
    title: '77. Static Method',
    description: 'Call static add(1, 1).',
    initialCode: 'class Cal { static int add(int a, int b) { return a+b; } }\nSystem.out.println(Cal.add(1, 1));',
    testCases: [
      { description: 'Static access', expectedOutput: '2' }
    ],
    hints: ['No object needed.']
  },
  {
    id: 78,
    type: 'blanks',
    title: '78. Inheritance',
    description: 'A class inherits from another using [extends].',
    initialCode: 'class B [extends] A {}',
    correctAnswers: ['extends'],
    hints: ['Extending functionality.']
  },
  {
    id: 79,
    type: 'theory',
    title: '79. Access Modifier',
    description: 'Most restrictive?',
    options: ['public', 'protected', 'default', 'private'],
    correctAnswers: [3],
    hints: ['Only visible within same class.']
  },
  {
    id: 80,
    type: 'coding',
    title: '80. Super constructor',
    description: 'Call parent constructor.',
    initialCode: 'class A { A() { System.out.println("A"); } }\nclass B extends A { B() { super(); } }\nnew B();',
    testCases: [
      { description: 'Super check', expectedOutput: 'A' }
    ],
    hints: ['super() must be first line.']
  },
  {
    id: 90,
    type: 'theory',
    title: '90. Polymorphism',
    description: 'Runtime polymorphism achieved via?',
    options: ['Method overloading', 'Method overriding', 'Variables', 'Constructors'],
    correctAnswers: [1],
    hints: ['Subclass provides specific implementation.']
  },
  {
    id: 91,
    type: 'coding',
    title: '91. Interface',
    description: 'Implement Printable.',
    initialCode: 'interface Printable { void p(); }\nclass X implements Printable {\n  public void p() { System.out.println("X"); }\n}\nnew X().p();',
    testCases: [
      { description: 'Interface impl', expectedOutput: 'X' }
    ],
    hints: ['Use public for interface methods.']
  },
  {
    id: 92,
    type: 'blanks',
    title: '92. Abstract',
    description: 'A class that cannot be instantiated is [abstract].',
    initialCode: '[abstract] class Shape {}',
    correctAnswers: ['abstract'],
    hints: ['Concept only.']
  },
  {
    id: 100,
    type: 'theory',
    title: '100. Encapulation',
    description: 'Main mechanism?',
    options: ['Methods', 'Private data + Public methods', 'Packages', 'Polymorphism'],
    correctAnswers: [1],
    hints: ['Hiding data.']
  },

  // SECTION 5: ADVANCED & EXCEPTIONS (101–150)
  {
    id: 101,
    type: 'theory',
    title: '101. Exception Handling',
    description: 'Block to handle error?',
    options: ['try', 'catch', 'finally', 'thrown'],
    correctAnswers: [1],
    hints: ['catch(Exception e) {}']
  },
  {
    id: 102,
    type: 'coding',
    title: '102. Throw basic',
    description: 'Manually throw exception.',
    initialCode: 'throw new ArithmeticException("Err");',
    testCases: [
      { description: 'Exception check', expectedOutput: /ArithmeticException/ }
    ],
    hints: ['Use the throw keyword.']
  },
  {
    id: 103,
    type: 'blanks',
    title: '103. Multi-catch',
    description: 'One try can have multiple [catch] blocks.',
    initialCode: 'try {..} [catch](A e) {..} [catch](B e) {..}',
    correctAnswers: ['catch'],
    hints: ['Catch different types.']
  },
  {
    id: 104,
    type: 'theory',
    title: '104. Throws clause',
    description: 'Declared in?',
    options: ['Try block', 'Method signature', 'Class header', 'Package definition'],
    correctAnswers: [1],
    hints: ['void m() throws Exception']
  },
  {
    id: 105,
    type: 'coding',
    title: '105. ArrayList',
    description: 'Add 5 to ArrayList.',
    initialCode: 'java.util.ArrayList<Integer> l = new java.util.ArrayList<>();\nl.add(5);\nSystem.out.println(l.get(0));',
    testCases: [
      { description: 'Add/Get', expectedOutput: '5' }
    ],
    hints: ['Dynamic array.']
  },
  {
    id: 110,
    type: 'theory',
    title: '110. HashMap',
    description: 'Stores data in?',
    options: ['Pairs (Key, Value)', 'Lists', 'B-Trees', 'Queues'],
    correctAnswers: [0],
    hints: ['Map interface.']
  },
  {
    id: 120,
    type: 'coding',
    title: '120. Threads',
    description: 'Start a thread logic.',
    initialCode: 'new Thread(() -> System.out.println("Run")).start();',
    testCases: [
      { description: 'Thread start', expectedOutput: 'Run' }
    ],
    hints: ['start() method.']
  },
  {
    id: 130,
    type: 'theory',
    title: '130. Java Packages',
    description: 'Keyword to create?',
    options: ['namespace', 'package', 'module', 'lib'],
    correctAnswers: [1],
    hints: ['At the top of the file.']
  },
  {
    id: 140,
    type: 'coding',
    title: '140. File Read',
    description: 'Simulate read logic.',
    initialCode: '// Using Scanner\njava.util.Scanner s = new java.util.Scanner("Data");\nSystem.out.println(s.nextLine());',
    testCases: [
      { description: 'Scanner check', expectedOutput: 'Data' }
    ],
    hints: ['Read from stream.']
  },
  {
    id: 150,
    type: 'theory',
    title: '150. Lambda Java 8+',
    description: 'Correct syntax?',
    options: ['() -> {}', 'func() {}', 'lambda => {}', '() => {}'],
    correctAnswers: [0],
    hints: ['Arrow operator in Java.']
  }
];
