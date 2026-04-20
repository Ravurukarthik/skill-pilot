
import { Question, QuestionType } from '../types';

export const C_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'theory',
    title: "1.1.1. Introduction to a computer",
    description: "Computers are electronic devices that receive input, store or process the input as per user instructions, and provide output in the desired format.\n\nInput-Process-Output Model:\nSimple workflow in a computer is Input ---> Process ---> Output\n\nSelect all the correct statements:",
    options: [
      "Computers can perform complex tasks repeatedly without errors.",
      "Computers are purely electrical (not electronic) devices",
      "Processing is the core function of the computer"
    ],
    correctAnswers: [0, 2],
    hints: ["Think about what 'GIGO' stands for.", "Reliability is a key feature."]
  },
  {
    id: 2,
    type: 'coding',
    title: "1.2.1. Print Hello World",
    description: "Objective: Print 'Hello World' on the screen.\n\nWrite a C program that uses printf() to display 'Hello World'.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    // Type your code here\n    \n    return 0;\n}",
    hints: ["Use printf(\"Hello World\");"],
    testCases: [
      { id: 1, expectedOutput: /Hello World/, description: "Output check" },
      { id: 2, expectedOutput: /printf/, description: "Printf usage" }
    ]
  },
  {
    id: 3,
    type: 'coding',
    title: "1.2.2. Print Name",
    description: "Objective: Print the name 'Karthik' on the screen.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}",
    hints: ["Use printf(\"Karthik\");"],
    testCases: [{ id: 1, expectedOutput: /Karthik/, description: "Output check" }]
  },
  {
    id: 4,
    type: 'coding',
    title: "1.2.3. Print Multiple Lines",
    description: "Objective: Print 'Line1' and 'Line2' on two separate lines.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}",
    hints: ["Use \\n for a new line."],
    testCases: [
      { id: 1, expectedOutput: /Line1\nLine2/, description: "Multi-line output" },
      { id: 2, expectedOutput: /\\n/, description: "New line escape char" }
    ]
  },
  {
    id: 5,
    type: 'coding',
    title: "1.3.1. Add Two Numbers",
    description: "Objective: Declare a=2, b=3 and print their sum.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}",
    hints: ["int a=2, b=3;", "printf(\"%d\", a+b);"],
    testCases: [
      { id: 1, expectedOutput: /5/, description: "Result is 5" },
      { id: 2, expectedOutput: /\+/, description: "Operator check" }
    ]
  },
  {
    id: 6,
    type: 'coding',
    title: "1.3.2. Input and Print",
    description: "Objective: Read an integer and print it.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int a;\n    return 0;\n}",
    hints: ["Use scanf(\"%d\", &a);", "Address operator & is vital."],
    testCases: [
      { id: 1, expectedOutput: /scanf/, description: "Input used" },
      { id: 2, expectedOutput: /&/, description: "Adress operator" }
    ]
  },
  {
    id: 7,
    type: 'coding',
    title: "1.4.1. Area of Rectangle",
    description: "Objective: Read length and breadth and calculate Area = L * B.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int l, b;\n    return 0;\n}",
    hints: ["Read two numbers.", "Multiply them."],
    testCases: [{ id: 1, expectedOutput: /\*/, description: "Multiplication" }]
  },
  {
    id: 8,
    type: 'coding',
    title: "1.5.1. Swap Numbers",
    description: "Objective: Swap values of a=5 and b=10 using third variable t.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int a=5, b=10, t;\n    return 0;\n}",
    hints: ["t=a; a=b; b=t;"],
    testCases: [{ id: 1, expectedOutput: /10 5/, description: "Swapped values" }]
  },
  {
    id: 9,
    type: 'coding',
    title: "1.6.1. Even or Odd",
    description: "Objective: Read a number and print 'Even' or 'Odd'.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n;\n    return 0;\n}",
    hints: ["Check if n % 2 == 0"],
    testCases: [{ id: 1, expectedOutput: /(Even|Odd)/i, description: "Output format" }]
  },
  {
    id: 10,
    type: 'coding',
    title: '10. Largest of three',
    description: 'Read three integers and print the largest one.',
    initialCode: '#include <stdio.h>\nint main() {\n  int a, b, c;\n  scanf("%d %d %d", &a, &b, &c);\n  // Hint: printf("%d",(a>b&&a>c)?a:(b>c?b:c));\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+/, description: 'Prints a number' }],
    hints: ['(a > b && a > c) ? a : (b > c ? b : c)']
  },
  {
    id: 11,
    type: 'coding',
    title: '11. Leap Year',
    description: 'Check if a year is Leap or Not.',
    initialCode: '#include <stdio.h>\nint main() {\n  int y; scanf("%d", &y);\n  return 0;\n}',
    testCases: [{ expectedOutput: /(Leap|Not)/, description: 'Leap/Not check' }],
    hints: ['(y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)']
  },
  {
    id: 12,
    type: 'coding',
    title: '12. Simple interest',
    description: 'Calculate simple interest (P*T*R)/100.',
    initialCode: '#include <stdio.h>\nint main() {\n  int p, t, r;\n  scanf("%d %d %d", &p, &t, &r);\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+/, description: 'Interest calculation' }],
    hints: ['(p*t*r)/100']
  },
  {
    id: 13,
    type: 'coding',
    title: '13. Celsius to Fahrenheit',
    description: 'Convert Celsius to Fahrenheit.',
    initialCode: '#include <stdio.h>\nint main() {\n  float c; scanf("%f", &c);\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+\.\d+/, description: 'Float output' }],
    hints: ['(c * 9/5) + 32']
  },
  {
    id: 14,
    type: 'coding',
    title: '14. ASCII value',
    description: 'Print ASCII value of a character.',
    initialCode: '#include <stdio.h>\nint main() {\n  char c; scanf("%c", &c);\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+/, description: 'ASCII number' }],
    hints: ['Use %d in printf for char.']
  },
  {
    id: 15,
    type: 'coding',
    title: '15. Size of data types',
    description: 'Print the size of int.',
    initialCode: '#include <stdio.h>\nint main() {\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+/, description: 'Size value' }],
    hints: ['sizeof(int)']
  },
  {
    id: 16,
    type: 'coding',
    title: '16. Area of circle',
    description: 'Calculate area of a circle.',
    initialCode: '#include <stdio.h>\nint main() {\n  float r; scanf("%f", &r);\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+\.\d+/, description: 'Area' }],
    hints: ['3.14 * r * r']
  },
  {
    id: 17,
    type: 'coding',
    title: '17. Perimeter of rectangle',
    description: 'Calculate perimeter 2*(l+b).',
    initialCode: '#include <stdio.h>\nint main() {\n  int l, b; scanf("%d %d", &l, &b);\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+/, description: 'Perimeter' }],
    hints: ['2 * (l + b)']
  },
  {
    id: 18,
    type: 'coding',
    title: '18. Square of number',
    description: 'Calculate n*n.',
    initialCode: '#include <stdio.h>\nint main() {\n  int n; scanf("%d", &n);\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+/, description: 'Square' }],
    hints: ['n * n']
  },
  {
    id: 19,
    type: 'coding',
    title: '19. Cube of number',
    description: 'Calculate n*n*n.',
    initialCode: '#include <stdio.h>\nint main() {\n  int n; scanf("%d", &n);\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+/, description: 'Cube' }],
    hints: ['n * n * n']
  },
  {
    id: 20,
    type: 'coding',
    title: '20. Average of 3 numbers',
    description: 'Calculate average of a, b, c.',
    initialCode: '#include <stdio.h>\nint main() {\n  int a, b, c; scanf("%d %d %d", &a, &b, &c);\n  return 0;\n}',
    testCases: [{ expectedOutput: /\d+/, description: 'Average' }],
    hints: ['(a + b + c) / 3']
  },
  // LOOPS (21-50)
  {
    id: 21,
    type: 'coding',
    title: "2.1.1. Print 1–N",
    description: "Objective: Print numbers from 1 to N.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /for/, description: "Loop used" }]
  },
  {
    id: 22,
    type: 'coding',
    title: "2.1.2. Print N–1",
    description: "Objective: Print numbers from N down to 1.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /--/, description: "Decrement" }]
  },
  {
    id: 23,
    type: 'coding',
    title: "2.2.1. Sum of N numbers",
    description: "Objective: Calculate 1 + 2 + ... + N.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n, s=0;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /\+=/, description: "Accumulation" }]
  },
  {
    id: 24,
    type: 'coding',
    title: "2.2.2. Factorial",
    description: "Objective: Calculate N! (N factorial).",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n, f=1;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /\*=/, description: "Product logic" }]
  },
  {
    id: 25,
    type: 'coding',
    title: "2.3.1. Multiplication table",
    description: "Objective: Print table for N (1 to 10).",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /n\s*\*\s*i/, description: "Table math" }]
  },
  {
    id: 26,
    type: 'coding',
    title: "2.4.1. Count digits",
    description: "Objective: Count total digits in number N.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n, c=0;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /\/=/, description: "Digit removal" }]
  },
  {
    id: 27,
    type: 'coding',
    title: "2.4.2. Reverse number",
    description: "Objective: Reverse digits of N.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n, r=0;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /10\s*\+\s*n\s*%/, description: "Reverse math" }]
  },
  {
    id: 28,
    type: 'coding',
    title: "2.4.3. Sum of digits",
    description: "Objective: Sum of all digits of N.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n, s=0;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /n\s*%\s*10/, description: "Digit extraction" }]
  },
  {
    id: 29,
    type: 'coding',
    title: "2.4.4. Palindrome number",
    description: "Objective: Check if N remains same when reversed.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n, t, r=0;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /(Yes|No)/i, description: "Output check" }]
  },
  {
    id: 30,
    type: 'coding',
    title: "2.5.1. Prime number",
    description: "Objective: Check if number N is prime.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int n;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /(Prime|Not)/i, description: "Check status" }]
  },
  {
    id: 31,
    type: 'coding',
    title: "2.6.1. Fibonacci",
    description: "Objective: Print first N terms of Fibonacci sequence.",
    initialCode: "#include <stdio.h>\n\nint main() {\n    int a=0, b=1, c, n;\n    return 0;\n}",
    testCases: [{ id: 1, expectedOutput: /a\s*\+\s*b/, description: "Next term" }]
  },
  // Filling up loops to 50
  { id: 32, type: 'coding', title: "2.7.1. Armstrong Number", description: "Objective: Check if sum of cubes of digits equals the number.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /Yes|No/i, description: "Status check"}] },
  { id: 33, type: 'coding', title: "2.7.2. Strong Number", description: "Objective: Sum of factorial of digits equals the number.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /Yes|No/i, description: "Status check"}] },
  { id: 34, type: 'coding', title: "2.7.3. Perfect Number", description: "Objective: Sum of proper divisors equals the number.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /Yes|No/i, description: "Status check"}] },
  { id: 35, type: 'coding', title: "2.8.1. GCD of two numbers", description: "Objective: Find GCD of a and b.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /scanf/, description: "Input check"}] },
  { id: 36, type: 'coding', title: "2.8.2. LCM of two numbers", description: "Objective: Find LCM of a and b.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /scanf/, description: "Input check"}] },
  { id: 37, type: 'coding', title: "2.9.1. Power of a number", description: "Objective: Calculate base^exponent.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /\*=/, description: "Power check"}] },
  { id: 38, type: 'coding', title: "2.10.1. Binary to Decimal", description: "Objective: Convert binary format to decimal.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /scanf/, description: "Binary input"}] },
  { id: 39, type: 'coding', title: "2.10.2. Decimal to Binary", description: "Objective: Print binary representation of N.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /printf/, description: "Binary output"}] },
  { id: 40, type: 'coding', title: "2.11.1. Decimal to Octal", description: "Objective: Print octal representation of N.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /%o/, description: "Format specifier"}] },
  { id: 41, type: 'coding', title: "2.11.2. Octal to Decimal", description: "Objective: Convert octal input to decimal.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /scanf.*%o/, description: "Format check"}] },
  { id: 42, type: 'coding', title: "2.12.1. Prime Numbers in Range", description: "Objective: Print all primes between 1 and N.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /for.*for/, description: "Nested loops"}] },
  { id: 43, type: 'coding', title: "2.12.2. Armstrong Numbers in Range", description: "Objective: Print all Armstrong numbers up to N.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /for.*while/, description: "Nested logic"}] },
  { id: 44, type: 'coding', title: "2.12.3. Perfect Numbers in Range", description: "Objective: Print all perfect numbers up to N.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /for.*for/, description: "Nested loops"}] },
  { id: 45, type: 'coding', title: "2.13.1. Tables in Range", description: "Objective: Print multiplication tables from 1 to N.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /for.*for/, description: "Nested loops"}] },
  { id: 46, type: 'coding', title: "2.14.1. Factors of Number", description: "Objective: Print all factors of N.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /n\s*%\s*i/, description: "Factor check"}] },
  { id: 47, type: 'coding', title: "2.15.1. Character Type Check", description: "Objective: Read char and check if Alphabet, Digit or Special.", initialCode: "#include <stdio.h>\nint main() {\n    char c;\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /if.*else/, description: "Logic check"}] },
  { id: 48, type: 'coding', title: "2.15.2. Case Check", description: "Objective: Check if char is Uppercase or Lowercase.", initialCode: "#include <stdio.h>\nint main() {\n    char c;\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /A-Z|a-z/, description: "Ranges"}] },
  { id: 49, type: 'coding', title: "2.15.3. Vowel or Consonant", description: "Objective: Read alphabet and check for Vowel.", initialCode: "#include <stdio.h>\nint main() {\n    char c;\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /a|e|i|o|u/i, description: "Vowels"}] },
  { id: 50, type: 'coding', title: "2.16.1. Simple Calculator", description: "Objective: Perform +, -, *, / using Switch Case.", initialCode: "#include <stdio.h>\nint main() {\n    char op;\n    return 0;\n}", testCases: [{id: 1, expectedOutput: /switch/, description: "Uses switch"}] },

  // PATTERNS (51-80)
  { id: 51, type: 'coding', title: "3.1.1. Star Triangle", description: "Objective: Print right-angled triangle of stars.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/for.*for/, description:"Nested loops"}] },
  { id: 52, type: 'coding', title: "3.1.2. Inverted Triangle", description: "Objective: Print inverted right-angled triangle of stars.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/for.*for/, description:"Nested loops"}] },
  ...Array.from({length: 28}, (_, i) => ({
      id: 53 + i,
      type: 'coding' as QuestionType,
      title: `3.${i+2}.1. Pattern Variation ${i+3}`,
      description: `Objective: Create complex pattern challenge #${i+53}.`,
      initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}",
      testCases: [{id:1, expectedOutput:/for/, description:"Loop usage"}]
  })),

  // ARRAYS (81-110)
  { id: 81, type: 'coding', title: "4.1.1. Sum of Array", description: "Objective: Read array and print sum of elements.", initialCode: "#include <stdio.h>\nint main() {\n    int a[100], n;\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\[.*\]/, description:"Array index"}] },
  { id: 82, type: 'coding', title: "4.1.2. Largest element", description: "Objective: Find max value in array.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/>/, description:"Comparison"}] },
  { id: 83, type: 'coding', title: "4.1.3. Smallest element", description: "Objective: Find min value in array.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/</, description:"Comparison"}] },
  { id: 84, type: 'coding', title: "4.2.1. Second largest", description: "Objective: Find the second largest element.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/max/, description:"Logic"}] },
  { id: 85, type: 'coding', title: "4.2.2. Second smallest", description: "Objective: Find the second smallest element.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/min/, description:"Logic"}] },
  { id: 86, type: 'coding', title: "4.3.1. Reverse array", description: "Objective: Reverse the order of elements.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/--/, description:"Reverse traverse"}] },
  { id: 87, type: 'coding', title: "4.4.1. Bubble Sort", description: "Objective: Sort array in ascending order.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/for.*for/, description:"Nested loops"}] },
  { id: 88, type: 'coding', title: "4.5.1. Linear Search", description: "Objective: Search for key in array.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/==/, description:"Match check"}] },
  { id: 89, type: 'coding', title: "4.5.2. Binary Search", description: "Objective: Efficiently search in sorted array.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/mid/, description:"Binary split"}] },
  { id: 90, type: 'coding', title: "4.6.1. Even and Odd Arrays", description: "Objective: Split array into even and odd groups.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/%/, description:"Parity check"}] },
  { id: 91, type: 'coding', title: "4.7.1. Frequency of Elements", description: "Objective: Count occurrences of each element.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/for.*for/, description:"Nested search"}] },
  { id: 92, type: 'coding', title: "4.8.1. Unique elements", description: "Objective: Print elements that appear only once.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/for.*for/, description:"Nested search"}] },
  { id: 93, type: 'coding', title: "4.9.1. Matrix Addition", description: "Objective: Add two 2D matrices.", initialCode: "#include <stdio.h>\nint main() {\n    int a[10][10], b[10][10];\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\[.*\]\[.*\]/, description:"2D array"}] },
  { id: 94, type: 'coding', title: "4.9.2. Matrix Subtraction", description: "Objective: Subtract one matrix from another.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/-/, description:"Subtraction"}] },
  { id: 95, type: 'coding', title: "4.10.1. Matrix Multiplication", description: "Objective: Multiply two compatible matrices.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/for.*for.*for/, description:"Triple nested"}] },
  { id: 96, type: 'coding', title: "4.11.1. Matrix Transpose", description: "Objective: Convert rows to columns.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/a\[j\]\[i\]/, description:"Index flip"}] },
  { id: 97, type: 'coding', title: "4.12.1. Sum of Diagonals", description: "Objective: Sum of main diagonal elements.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/i==j/, description:"Diagonal condition"}] },
  { id: 98, type: 'coding', title: "4.13.1. Identity Matrix", description: "Objective: Check if matrix is identity matrix.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/if/, description:"Check logic"}] },
  ...Array.from({length: 12}, (_, i) => ({
      id: 99 + i,
      type: 'coding' as QuestionType,
      title: `4.${i+14}.1. Advanced Array Task ${i+19}`,
      description: `Objective: Complete array challenge #${i+99}.`,
      initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}",
      testCases: [{id:1, expectedOutput:/\[/, description:"Array index"}]
  })),

  // STRINGS (111-130)
  { id: 111, type: 'coding', title: "5.1.1. String Length", description: "Objective: Find length without strlen().", initialCode: "#include <stdio.h>\nint main() {\n    char s[100];\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\\0/, description:"Null terminator"}] },
  { id: 112, type: 'coding', title: "5.1.2. String Reverse", description: "Objective: Reverse string manually.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/for/, description:"Reverse loop"}] },
  { id: 113, type: 'coding', title: "5.2.1. String Palindrome", description: "Objective: Check if string is palindrome.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/==/, description:"Equality"}] },
  { id: 114, type: 'coding', title: "5.3.1. String Copy", description: "Objective: Copy string manually.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/=/, description:"Assignment"}] },
  { id: 115, type: 'coding', title: "5.4.1. String Comparison", description: "Objective: Compare two strings manually.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/!=/, description:"Difference"}] },
  { id: 116, type: 'coding', title: "5.5.1. Uppercase to Lowercase", description: "Objective: Convert string to lowercase.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\+32/, description:"ASCII gap"}] },
  { id: 117, type: 'coding', title: "5.5.2. Lowercase to Uppercase", description: "Objective: Convert string to uppercase.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/-32/, description:"ASCII gap"}] },
  { id: 118, type: 'coding', title: "5.6.1. Vowels and Consonants", description: "Objective: Count vowels/consonants in string.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/a|e|i|o|u/i, description:"Vowels"}] },
  { id: 119, type: 'coding', title: "5.7.1. Word Count", description: "Objective: Count total words in sentence.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/' '/, description:"Space check"}] },
  { id: 120, type: 'coding', title: "5.8.1. String Concatenation", description: "Objective: Merge two strings.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/for.*for/, description:"Append loops"}] },
  ...Array.from({length: 10}, (_, i) => ({
      id: 121 + i,
      type: 'coding' as QuestionType,
      title: `5.${i+9}.1. Advanced String Task ${i+11}`,
      description: `Objective: Complete string challenge #${i+121}.`,
      initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}",
      testCases: [{id:1, expectedOutput:/'\\0'/, description:"Null char"}]
  })),

  // POINTERS (131-140)
  { id: 131, type: 'coding', title: "6.1.1. Pointer Basics", description: "Objective: Declare pointer and print address.", initialCode: "#include <stdio.h>\nint main() {\n    int a=10, *p=&a;\n    return 0;\n}", testCases: [{id:1, expectedOutput:/%p|%u/, description:"Address output"}] },
  { id: 132, type: 'coding', title: "6.2.1. Swap using Pointers", description: "Objective: Swap using call by reference.", initialCode: "#include <stdio.h>\nvoid swap(int *x, int *y) {\n}\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\*x/, description:"Dereference"}] },
  { id: 133, type: 'coding', title: "6.3.1. Array Pointer", description: "Objective: Traverse array using pointer.", initialCode: "#include <stdio.h>\nint main() {\n    int a[5]={1,2,3,4,5}, *p=a;\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\*p/, description:"Dereference"}] },
  { id: 134, type: 'coding', title: "6.4.1. Max in Array Pointer", description: "Objective: Find max using pointers.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\*p/, description:"Dereference"}] },
  { id: 135, type: 'coding', title: "6.5.1. Pointer Arithmetic", description: "Objective: Increment pointer and print value.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\+\+/, description:"Step"}] },
  ...Array.from({length: 5}, (_, i) => ({
      id: 136 + i,
      type: 'coding' as QuestionType,
      title: `6.${i+6}.1. Pointer Advanced Task ${i+6}`,
      description: `Objective: Complete pointer challenge #${i+136}.`,
      initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}",
      testCases: [{id:1, expectedOutput:/\*/, description:"Pointer ops"}]
  })),

  // STRUCTURES + FILES (141-150)
  { id: 141, type: 'coding', title: "7.1.1. Student Structure", description: "Objective: Store and print student data (name, roll).", initialCode: "#include <stdio.h>\nstruct Student {\n    char name[50];\n    int roll;\n};\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\./, description:"Member access"}] },
  { id: 142, type: 'coding', title: "7.2.1. Array of Structures", description: "Objective: Store data for 3 students.", initialCode: "#include <stdio.h>\nstruct Student {\n    int roll;\n};\nint main() {\n    struct Student s[3];\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\[.*\]\./, description:"Array member"}] },
  { id: 143, type: 'coding', title: "7.3.1. Complex Addition", description: "Objective: Add two complex numbers using struct.", initialCode: "#include <stdio.h>\nstruct Complex {\n    float real, imag;\n};\nint main() {\n    return 1;\n}", testCases: [{id:1, expectedOutput:/\+/, description:"Sum"}] },
  { id: 144, type: 'coding', title: "7.4.1. File Write", description: "Objective: Write 'Hello' to file 'test.txt'.", initialCode: "#include <stdio.h>\nint main() {\n    FILE *fp;\n    return 0;\n}", testCases: [{id:1, expectedOutput:/fopen|fprintf/, description:"File ops"}] },
  { id: 145, type: 'coding', title: "7.4.2. File Read", description: "Objective: Read content from 'test.txt'.", initialCode: "#include <stdio.h>\nint main() {\n    FILE *fp;\n    return 0;\n}", testCases: [{id:1, expectedOutput:/fscanf|fgets/, description:"File input"}] },
  { id: 146, type: 'coding', title: "7.5.1. Distance Addition", description: "Objective: Add two distances (feet, inch).", initialCode: "#include <stdio.h>\nstruct Dist {\n    int ft; float inch;\n};\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/inch/, description:"Member"}] },
  { id: 147, type: 'coding', title: "7.6.1. File Copy", description: "Objective: Copy file1 content to file2.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/fgetc|fputc/, description:"Char ops"}] },
  { id: 148, type: 'coding', title: "7.7.1. Count Lines", description: "Objective: Count total lines in a file.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\\n/, description:"Line match"}] },
  { id: 149, type: 'coding', title: "7.8.1. Append File", description: "Objective: Append text to existing file.", initialCode: "#include <stdio.h>\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\"a\"/, description:"Append mode"}] },
  { id: 150, type: 'coding', title: "7.9.1. Employee Payroll", description: "Objective: Calculate salary using struct components.", initialCode: "#include <stdio.h>\nstruct Emp {\n    int salary, bonus;\n};\nint main() {\n    return 0;\n}", testCases: [{id:1, expectedOutput:/\+/, description:"Total"}] }
];
