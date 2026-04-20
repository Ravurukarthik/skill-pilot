import { Question } from '../types';

export const PYTHON_QUESTIONS: Question[] = [
  // SECTION 1: BASICS (1–20)
  {
    id: 1,
    type: 'theory',
    title: '1. Introduction to Python',
    description: 'What is Python primarily known for?',
    options: [
      'Low-level system programming',
      'High-level, interpreted language with high readability',
      'Strictly for front-end web development',
      'A primary language for database indexing only'
    ],
    correctAnswers: [1],
    hints: ['Think about Python\'s syntax simplicity.']
  },
  {
    id: 2,
    type: 'coding',
    title: '2. Hello World',
    description: 'Write a program to print "Hello, Python!"',
    initialCode: '# Write code here\n',
    testCases: [
      { description: 'Prints correct string', expectedOutput: 'Hello, Python!' }
    ],
    hints: ['Use the print() function.']
  },
  {
    id: 3,
    type: 'blanks',
    title: '3. Variables',
    description: 'Assign the value 10 to a variable named [x].',
    initialCode: '[x] = 10',
    correctAnswers: ['x'],
    hints: ['Variables are assigned using the = operator.']
  },
  {
    id: 4,
    type: 'theory',
    title: '4. Keywords',
    description: 'Which of the following is NOT a reserved keyword in Python?',
    options: ['lambda', 'pass', 'range', 'print'],
    correctAnswers: [3],
    hints: ['print is a built-in function, not a keyword.']
  },
  {
    id: 5,
    type: 'coding',
    title: '5. Addition',
    description: 'Read two integers and print their sum.',
    initialCode: 'a = int(input())\nb = int(input())\n# Print sum\n',
    testCases: [
      { description: 'Addition check', expectedOutput: /print\(a\s*\+\s*b\)/ }
    ],
    hints: ['Use simple addition operator +.']
  },
  {
    id: 6,
    type: 'theory',
    title: '6. Data Types',
    description: 'What is the output of type(3.14)?',
    options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'str'>"],
    correctAnswers: [1],
    hints: ['Decimals in Python are floating point numbers.']
  },
  {
    id: 7,
    type: 'coding',
    title: '7. Area of Rectangle',
    description: 'Given length and width, calculate area.',
    initialCode: 'l = 5\nw = 10\narea = \nprint(area)',
    testCases: [
      { description: 'Area formula', expectedOutput: '50' }
    ],
    hints: ['Area = length * width']
  },
  {
    id: 8,
    type: 'blanks',
    title: '8. Boolean',
    description: 'In Python, the boolean values are [True] and [False].',
    initialCode: 'a = [True]\nb = [False]',
    correctAnswers: ['True', 'False'],
    hints: ['Case sensitivity matters.']
  },
  {
    id: 9,
    type: 'theory',
    title: '9. Comments',
    description: 'Which symbol is used for single-line comments?',
    options: ['//', '/*', '#', '--'],
    correctAnswers: [2],
    hints: ['It starts with an octothorpe.']
  },
  {
    id: 10,
    type: 'coding',
    title: '10. Type Conversion',
    description: 'Convert string "123" to integer.',
    initialCode: 's = "123"\nn = \nprint(n)',
    testCases: [
      { description: 'Conversion check', expectedOutput: '123' }
    ],
    hints: ['Use the int() constructor.']
  },
  {
    id: 11,
    type: 'theory',
    title: '11. String Concat',
    description: "What is 'a' + 'b'?",
    options: ["'ab'", "'a+b'", "'Error'", "0"],
    correctAnswers: [0],
    hints: ['Strings are joined literally.']
  },
  {
    id: 12,
    type: 'coding',
    title: '12. Square',
    description: 'Calculate x to the power of 2.',
    initialCode: 'x = 4\nres = \nprint(res)',
    testCases: [
      { description: 'Power operator', expectedOutput: '16' }
    ],
    hints: ['Use ** operator or pow() function.']
  },
  {
    id: 13,
    type: 'blanks',
    title: '13. Input',
    description: 'Input always returns a [string] data type.',
    initialCode: 'val = input("Name: ") # returns a [string]',
    correctAnswers: ['string'],
    hints: ['You must cast it if you want an integer.']
  },
  {
    id: 14,
    type: 'theory',
    title: '14. Multi-line Strings',
    description: 'Which quotes allow multi-line strings?',
    options: ["' '", '" "', "''' '''", 'All of above'],
    correctAnswers: [2],
    hints: ['Triple quotes are used for multi-line snippets.']
  },
  {
    id: 15,
    type: 'coding',
    title: '15. Swap Variables',
    description: 'Swap values of a and b using Pythonic way.',
    initialCode: 'a = 1\nb = 2\n# Swap here\nprint(a, b)',
    testCases: [
      { description: 'Pythonic swap', expectedOutput: '2 1' }
    ],
    hints: ['a, b = b, a']
  },
  {
    id: 16,
    type: 'theory',
    title: '16. None keyword',
    description: 'What does None represent?',
    options: ['Zero', 'Empty string', 'The absence of a value', 'False'],
    correctAnswers: [2],
    hints: ['It is similar to null in other languages.']
  },
  {
    id: 17,
    type: 'coding',
    title: '17. Absolute Value',
    description: 'Find absolute value of -5.',
    initialCode: 'n = -5\nres = \nprint(res)',
    testCases: [
      { description: 'abs function', expectedOutput: '5' }
    ],
    hints: ['Use the built-in abs() function.']
  },
  {
    id: 18,
    type: 'blanks',
    title: '18. Modulo',
    description: 'The operator [%] returns the remainder.',
    initialCode: 'rem = 10 [%] 3',
    correctAnswers: ['%'],
    hints: ['Percentage sign.']
  },
  {
    id: 19,
    type: 'theory',
    title: '19. Indentation',
    description: 'Why is indentation used in Python?',
    options: ['Better look', 'Defining blocks of code', 'It is optional', 'For comments'],
    correctAnswers: [1],
    hints: ['Python does not use braces for blocks.']
  },
  {
    id: 20,
    type: 'coding',
    title: '20. Round Number',
    description: 'Round 3.14159 to 2 decimal places.',
    initialCode: 'n = 3.14159\nres = \nprint(res)',
    testCases: [
      { description: 'Round check', expectedOutput: '3.14' }
    ],
    hints: ['Use round(number, digits).']
  },

  // SECTION 2: CONTROL FLOW (21–50)
  {
    id: 21,
    type: 'theory',
    title: '21. If Statement',
    description: 'How do you check if x is positive?',
    options: ['if x > 0:', 'if x > 0 then:', 'if (x > 0)', 'if x > 0 then'],
    correctAnswers: [0],
    hints: ['Note the colon at the end.']
  },
  {
    id: 22,
    type: 'coding',
    title: '22. Odd or Even',
    description: 'Check if number is Even.',
    initialCode: 'n = int(input())\nif \n  print("Even")\nelse:\n  print("Odd")',
    testCases: [
      { description: 'Modulo logic', expectedOutput: /n\s*%s*2\s*==\s*0/ }
    ],
    hints: ['n % 2 == 0']
  },
  {
    id: 23,
    type: 'blanks',
    title: '23. Elif',
    description: 'The "else if" in Python is written as [elif].',
    initialCode: 'if a: ... [elif] b: ...',
    correctAnswers: ['elif'],
    hints: ['Combination of else and if.']
  },
  {
    id: 24,
    type: 'theory',
    title: '24. For Loop',
    description: 'What does range(5) produce?',
    options: ['1 to 5', '0 to 4', '0 to 5', '1 to 4'],
    correctAnswers: [1],
    hints: ['It starts at 0 and stops before 5.']
  },
  {
    id: 25,
    type: 'coding',
    title: '25. Sum of first N',
    description: 'Sum numbers from 1 to 10.',
    initialCode: 'total = 0\nfor i in range(1, 11):\n  \nprint(total)',
    testCases: [
      { description: 'Loop sum', expectedOutput: '55' }
    ],
    hints: ['total += i']
  },
  {
    id: 26,
    type: 'theory',
    title: '26. While Loop',
    description: 'When does a while loop stop?',
    options: ['When condition is True', 'When condition is False', 'After 10 iterations', 'Never'],
    correctAnswers: [1],
    hints: ['It executes as long as the condition holds.']
  },
  {
    id: 27,
    type: 'coding',
    title: '27. Countdown',
    description: 'Print numbers 3, 2, 1 using while.',
    initialCode: 'n = 3\nwhile n > 0:\n  print(n)\n  \n',
    testCases: [
      { description: 'Decrement', expectedOutput: '3\n2\n1' }
    ],
    hints: ['n -= 1']
  },
  {
    id: 28,
    type: 'blanks',
    title: '28. Break',
    description: 'Use the [break] keyword to exit a loop prematurely.',
    initialCode: 'while True: [break]',
    correctAnswers: ['break'],
    hints: ['Stops the loop immediately.']
  },
  {
    id: 29,
    type: 'theory',
    title: '29. Continue',
    description: 'What does continue do?',
    options: ['Exits loop', 'Skips current iteration', 'Restarts loop', 'Does nothing'],
    correctAnswers: [1],
    hints: ['Jumps to the next iteration.']
  },
  {
    id: 30,
    type: 'coding',
    title: '30. Multiplication Table',
    description: 'Print 5 * 1 to 5 * 3.',
    initialCode: 'for i in range(1, 4):\n  print("5 *", i, "=", )',
    testCases: [
      { description: 'Table logic', expectedOutput: '5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15' }
    ],
    hints: ['5 * i']
  },
  {
    id: 31,
    type: 'theory',
    title: '31. Pass keyword',
    description: 'What is the purpose of pass?',
    options: ['Exit code', 'A null statement placeholder', 'Skip logic', 'Throw error'],
    correctAnswers: [1],
    hints: ['Used when syntax requires a statement but logic does not.']
  },
  {
    id: 32,
    type: 'coding',
    title: '32. Max of Two',
    description: 'Find max of 10 and 20 using if-else.',
    initialCode: 'a, b = 10, 20\nif a > b:\n  res = a\nelse:\n  res = b\nprint(res)',
    testCases: [
      { description: 'Comparison', expectedOutput: '20' }
    ],
    hints: ['Check which is greater.']
  },
  {
    id: 33,
    type: 'blanks',
    title: '33. Nested If',
    description: 'An if statement inside another is called [nested].',
    initialCode: 'if a: if b: ... # [nested] if',
    correctAnswers: ['nested'],
    hints: ['Like a bird in a nest.']
  },
  {
    id: 34,
    type: 'theory',
    title: '34. List Iteration',
    description: 'Correct way to loop through a list [1, 2]?',
    options: ['for i in list:', 'foreach i in list:', 'for i = 1 to 2:', 'while i < list:'],
    correctAnswers: [0],
    hints: ['Standard for-in syntax.']
  },
  {
    id: 35,
    type: 'coding',
    title: '35. Factorial',
    description: 'Find factorial of 5 (120).',
    initialCode: 'n = 5\nf = 1\nfor i in range(1, n+1):\n  \nprint(f)',
    testCases: [
      { description: 'Multiplication', expectedOutput: '120' }
    ],
    hints: ['f *= i']
  },
  {
    id: 36,
    type: 'theory',
    title: '36. Infinite Loop',
    description: 'Which causes an infinite loop?',
    options: ['while True:', 'while False:', 'for i in range(10):', 'if True:'],
    correctAnswers: [0],
    hints: ['The condition never becomes False.']
  },
  {
    id: 37,
    type: 'coding',
    title: '37. Check Positive',
    description: 'Print "Positive" if x > 0.',
    initialCode: 'x = 5\nif x > 0:\n  ',
    testCases: [
      { description: 'Output check', expectedOutput: 'Positive' }
    ],
    hints: ['print("Positive")']
  },
  {
    id: 38,
    type: 'blanks',
    title: '38. Logic AND',
    description: 'In Python, the logical AND is written as the word [and].',
    initialCode: 'if a [and] b:',
    correctAnswers: ['and'],
    hints: ['Not &&.']
  },
  {
    id: 39,
    type: 'theory',
    title: '39. Logic OR',
    description: 'Logical OR is?',
    options: ['||', 'OR', 'or', '|'],
    correctAnswers: [2],
    hints: ['Lowercase word.']
  },
  {
    id: 40,
    type: 'coding',
    title: '40. FizzBuzz basic',
    description: 'Print "Fizz" if n is multiple of 3.',
    initialCode: 'n = 9\nif n % 3 == 0:\n  ',
    testCases: [
      { description: 'Fizz check', expectedOutput: 'Fizz' }
    ],
    hints: ['Check modulo.']
  },
  {
    id: 41,
    type: 'theory',
    title: '41. Membership',
    description: 'Operator to check if "a" is in "apple"?',
    options: ['exists', 'has', 'in', 'contains'],
    correctAnswers: [2],
    hints: ['"a" in "apple"']
  },
  {
    id: 42,
    type: 'coding',
    title: '42. Range Step',
    description: 'Print even numbers 0, 2, 4.',
    initialCode: 'for i in range(0, 5, 2):\n  print(i)',
    testCases: [
      { description: 'Step check', expectedOutput: '0\n2\n4' }
    ],
    hints: ['Third argument is step.']
  },
  {
    id: 43,
    type: 'blanks',
    title: '43. NOT',
    description: 'Logical negation is [not].',
    initialCode: 'if [not] flag:',
    correctAnswers: ['not'],
    hints: ['Opposite.']
  },
  {
    id: 44,
    type: 'theory',
    title: '44. Ternary',
    description: 'Python ternary syntax?',
    options: ['x ? a : b', 'a if condition else b', 'if condition a else b', 'condition ? a | b'],
    correctAnswers: [1],
    hints: ['Expression before and after if/else.']
  },
  {
    id: 45,
    type: 'coding',
    title: '45. Simple Ternary',
    description: 'Set s = "Yes" if True else "No".',
    initialCode: 's = "Yes" if True else "No"\nprint(s)',
    testCases: [
      { description: 'Ternary check', expectedOutput: 'Yes' }
    ],
    hints: ['Evaluates simply.']
  },
  {
    id: 46,
    type: 'theory',
    title: '46. For-Else',
    description: 'When does loop else execute?',
    options: ['When loop break', 'When loop finishes normally', 'Never', 'Always'],
    correctAnswers: [1],
    hints: ['Executed if loop was not terminated by break.']
  },
  {
    id: 47,
    type: 'coding',
    title: '47. Sum of Digits',
    description: 'Find sum of digits of 123.',
    initialCode: 'n = 123\ns = 0\nfor d in str(n):\n  s += int(d)\nprint(s)',
    testCases: [
      { description: 'Digit sum', expectedOutput: '6' }
    ],
    hints: ['Convert to string to iterate.']
  },
  {
    id: 48,
    type: 'blanks',
    title: '48. Iterator',
    description: 'The [range] function returns an iterator.',
    initialCode: 'it = [range](5)',
    correctAnswers: ['range'],
    hints: ['Sequence generator.']
  },
  {
    id: 49,
    type: 'theory',
    title: '49. Comparison',
    description: 'Which is equality operator?',
    options: ['=', '==', '===', 'eq'],
    correctAnswers: [1],
    hints: ['Double equals.']
  },
  {
    id: 50,
    type: 'coding',
    title: '50. Leap Year',
    description: 'Check if 2024 is leap year.',
    initialCode: 'y = 2024\nif (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0):\n  print("Leap")\nelse:\n  print("Not")',
    testCases: [
      { description: 'Leap check', expectedOutput: 'Leap' }
    ],
    hints: ['Divisible by 4 and (not 100 unless 400).']
  },

  // SECTION 3: FUNCTIONS (51–70)
  {
    id: 51,
    type: 'theory',
    title: '51. Function Def',
    description: 'Keyword to define function?',
    options: ['function', 'def', 'func', 'define'],
    correctAnswers: [1],
    hints: ['Short for define.']
  },
  {
    id: 52,
    type: 'coding',
    title: '52. Simple Function',
    description: 'Define greet() that prints "Hi".',
    initialCode: 'def greet():\n  \ngreet()',
    testCases: [
      { description: 'Output hi', expectedOutput: 'Hi' }
    ],
    hints: ['print("Hi")']
  },
  {
    id: 53,
    type: 'blanks',
    title: '53. Return',
    description: 'Keyword to send value back from function is [return].',
    initialCode: 'def f(): [return] 1',
    correctAnswers: ['return'],
    hints: ['Back to caller.']
  },
  {
    id: 54,
    type: 'theory',
    title: '54. Arguments',
    description: 'Values passed to function are called?',
    options: ['Parameters', 'Arguments', 'Variables', 'Data'],
    correctAnswers: [1],
    hints: ['Parameters are names in def, arguments are values in call.']
  },
  {
    id: 55,
    type: 'coding',
    title: '55. Add Function',
    description: 'Create add(a, b) and return sum.',
    initialCode: 'def add(a, b):\n  \nprint(add(5, 3))',
    testCases: [
      { description: 'Return sum', expectedOutput: '8' }
    ],
    hints: ['return a + b']
  },
  {
    id: 56,
    type: 'theory',
    title: '56. Default Args',
    description: 'How to set default value for arg?',
    options: ['def f(n=1):', 'def f(n:1):', 'def f(n:=1):', 'def f(n?)'],
    correctAnswers: [0],
    hints: ['Use = in parameter list.']
  },
  {
    id: 57,
    type: 'coding',
    title: '57. Default Greet',
    description: 'Greet with default value "Guest".',
    initialCode: 'def hello(name="Guest"):\n  print("Hello", name)\nhello()\nhello("Bob")',
    testCases: [
      { description: 'Default check', expectedOutput: 'Hello Guest\nHello Bob' }
    ],
    hints: ['First call uses default.']
  },
  {
    id: 58,
    type: 'blanks',
    title: '58. Lambda',
    description: 'Anonymous functions are defined using [lambda] keyword.',
    initialCode: 'add = [lambda] x, y: x + y',
    correctAnswers: ['lambda'],
    hints: ['Greek letter.']
  },
  {
    id: 59,
    type: 'theory',
    title: '59. Local vs Global',
    description: 'Variable inside function is?',
    options: ['Global', 'Private', 'Local', 'Protected'],
    correctAnswers: [2],
    hints: ['Scope is restricted to the function.']
  },
  {
    id: 60,
    type: 'coding',
    title: '60. Square Lambda',
    description: 'Create lambda to square x.',
    initialCode: 'sq = lambda x: \nprint(sq(5))',
    testCases: [
      { description: 'Lambda calc', expectedOutput: '25' }
    ],
    hints: ['x * x']
  },
  {
    id: 61,
    type: 'theory',
    title: '61. Docstrings',
    description: 'Used for documenting functions?',
    options: ['#', '""" """', '//', '!!!'],
    correctAnswers: [1],
    hints: ['Triple quotes at start of function.']
  },
  {
    id: 62,
    type: 'coding',
    title: '62. Recursive Factorial',
    description: 'Factorial using recursion.',
    initialCode: 'def fact(n):\n  if n == 0: return 1\n  return n * fact(n-1)\nprint(fact(4))',
    testCases: [
      { description: 'Recursion check', expectedOutput: '24' }
    ],
    hints: ['Function calls itself.']
  },
  {
    id: 63,
    type: 'blanks',
    title: '63. Global keyword',
    description: 'To modify a global var inside function, use [global] keyword.',
    initialCode: '[global] x; x = 1',
    correctAnswers: ['global'],
    hints: ['Tell Python to look outside.']
  },
  {
    id: 64,
    type: 'theory',
    title: '64. *args',
    description: 'What does *args allow?',
    options: ['One argument', 'Variable number of arguments', 'Dictionary arguments', 'No arguments'],
    correctAnswers: [1],
    hints: ['Collects positional arguments into a tuple.']
  },
  {
    id: 65,
    type: 'coding',
    title: '65. Sum All Args',
    description: 'Sum any number of arguments.',
    initialCode: 'def sum_all(*args):\n  return sum(args)\nprint(sum_all(1, 2, 3))',
    testCases: [
      { description: 'Args sum', expectedOutput: '6' }
    ],
    hints: ['Treat args as a tuple.']
  },
  {
    id: 66,
    type: 'theory',
    title: '66. **kwargs',
    description: 'What does **kwargs collect?',
    options: ['List', 'Tuple', 'Dictionary', 'Set'],
    correctAnswers: [2],
    hints: ['Keyword arguments.']
  },
  {
    id: 67,
    type: 'coding',
    title: '67. Filter Even',
    description: 'Return list of evens using filter().',
    initialCode: 'nums = [1, 2, 3, 4]\nevens = list(filter(lambda x: x % 2 == 0, ))\nprint(evens)',
    testCases: [
      { description: 'Filter logic', expectedOutput: '[2, 4]' }
    ],
    hints: ['Pass the list nums.']
  },
  {
    id: 68,
    type: 'blanks',
    title: '68. Map',
    description: 'Apply function to all items in list using [map] function.',
    initialCode: 'res = [map](int, ["1", "2"])',
    correctAnswers: ['map'],
    hints: ['Transforming data.']
  },
  {
    id: 69,
    type: 'theory',
    title: '69. Module Import',
    description: 'Keyword to use other files?',
    options: ['include', 'using', 'require', 'import'],
    correctAnswers: [3],
    hints: ['Standard Python library usage.']
  },
  {
    id: 70,
    type: 'coding',
    title: '70. Import Math',
    description: 'Calculate sqrt(16) using math module.',
    initialCode: 'import math\nprint(math. )',
    testCases: [
      { description: 'Math function', expectedOutput: '4.0' }
    ],
    hints: ['sqrt(16)']
  },

  // SECTION 4: DATA STRUCTURES (71–100)
  {
    id: 71,
    type: 'theory',
    title: '71. List Definition',
    description: 'How to define a list?',
    options: ['(1, 2)', '{1, 2}', '[1, 2]', '<1, 2>'],
    correctAnswers: [2],
    hints: ['Square brackets.']
  },
  {
    id: 72,
    type: 'coding',
    title: '72. List Append',
    description: 'Add 3 to list [1, 2].',
    initialCode: 'li = [1, 2]\n\nprint(li)',
    testCases: [
      { description: 'Append method', expectedOutput: '[1, 2, 3]' }
    ],
    hints: ['li.append(3)']
  },
  {
    id: 73,
    type: 'blanks',
    title: '73. List Index',
    description: 'Python lists use [0]-based indexing.',
    initialCode: 'item = li[[0]] # first item',
    correctAnswers: ['0'],
    hints: ['Starting count.']
  },
  {
    id: 74,
    type: 'theory',
    title: '74. Tuple Mutation',
    description: 'Are tuples mutable?',
    options: ['Yes', 'No', 'Sometimes', 'Only if empty'],
    correctAnswers: [1],
    hints: ['They are constant after creation.']
  },
  {
    id: 75,
    type: 'coding',
    title: '75. Tuple Index',
    description: 'Get second item of (10, 20, 30).',
    initialCode: 't = (10, 20, 30)\nprint(t[ ])',
    testCases: [
      { description: 'Index check', expectedOutput: '20' }
    ],
    hints: ['Index 1.']
  },
  {
    id: 76,
    type: 'theory',
    title: '76. Set Uniqueness',
    description: 'Do sets allow duplicates?',
    options: ['Yes', 'No', 'Only strings', 'Depends on size'],
    correctAnswers: [1],
    hints: ['Every element must be unique.']
  },
  {
    id: 77,
    type: 'coding',
    title: '77. Set Intersection',
    description: 'Intersection of {1, 2} and {2, 3}.',
    initialCode: 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1 & s2)',
    testCases: [
      { description: 'Common items', expectedOutput: '{2}' }
    ],
    hints: ['Use & operator.']
  },
  {
    id: 78,
    type: 'blanks',
    title: '78. Dictionary Key',
    description: 'Access dict value using its [key].',
    initialCode: 'val = d[[key]]',
    correctAnswers: ['key'],
    hints: ['Associative array.']
  },
  {
    id: 79,
    type: 'theory',
    title: '79. Dict Definition',
    description: 'Which symbol defines dictionary?',
    options: ['[]', '()', '{}', '<>'],
    correctAnswers: [2],
    hints: ['Curly braces like a set, but with pairs.']
  },
  {
    id: 80,
    type: 'coding',
    title: '80. Dict Value',
    description: 'Create dict with "a": 1 and print it.',
    initialCode: 'd = \nprint(d["a"])',
    testCases: [
      { description: 'Dict access', expectedOutput: '1' }
    ],
    hints: ['{"a": 1}']
  },
  {
    id: 81,
    type: 'theory',
    title: '81. List Pop',
    description: 'What does pop() do?',
    options: ['Adds item', 'Removes and returns last item', 'Clears list', 'Sorts list'],
    correctAnswers: [1],
    hints: ['Stack behavior.']
  },
  {
    id: 82,
    type: 'coding',
    title: '82. List Reverse',
    description: 'Reverse [1, 2, 3].',
    initialCode: 'li = [1, 2, 3]\nli.reverse()\nprint(li)',
    testCases: [
      { description: 'In-place reverse', expectedOutput: '[3, 2, 1]' }
    ],
    hints: ['Modifies original list.']
  },
  {
    id: 83,
    type: 'blanks',
    title: '83. Sort',
    description: 'Method to sort list in-place is [sort].',
    initialCode: 'li.[sort]()',
    correctAnswers: ['sort'],
    hints: ['Arranging.']
  },
  {
    id: 84,
    type: 'theory',
    title: '84. Length',
    description: 'Function to find size of structure?',
    options: ['size()', 'len()', 'count()', 'length()'],
    correctAnswers: [1],
    hints: ['len(li)']
  },
  {
    id: 85,
    type: 'coding',
    title: '85. List Slicing',
    description: 'Get first two items of [1, 2, 3, 4].',
    initialCode: 'li = [1, 2, 3, 4]\nprint(li[: ])',
    testCases: [
      { description: 'Slice check', expectedOutput: '[1, 2]' }
    ],
    hints: ['[:2]']
  },
  {
    id: 86,
    type: 'theory',
    title: '86. Negative Indexing',
    description: 'What is li[-1]?',
    options: ['First item', 'Last item', 'Error', 'Second last'],
    correctAnswers: [1],
    hints: ['Counting from the end.']
  },
  {
    id: 87,
    type: 'coding',
    title: '87. List Comprehension',
    description: 'Squares of 0-2 using comprehension.',
    initialCode: 'sq = [x*x for x in range(3)]\nprint(sq)',
    testCases: [
      { description: 'Comprehension', expectedOutput: '[0, 1, 4]' }
    ],
    hints: ['Syntactic sugar for loops.']
  },
  {
    id: 88,
    type: 'blanks',
    title: '88. Items',
    description: 'Dict method to get keys and values is [items].',
    initialCode: 'for k, v in d.[items]():',
    correctAnswers: ['items'],
    hints: ['Pairs.']
  },
  {
    id: 90,
    type: 'coding',
    title: '90. Dict Get',
    description: 'Get value of "x" or 0 if missing.',
    initialCode: 'd = {"y": 10}\nprint(d.get("x", 0))',
    testCases: [
      { description: 'Safe access', expectedOutput: '0' }
    ],
    hints: ['get(key, default)']
  },
  {
    id: 91,
    type: 'theory',
    title: '91. Tuple Packing',
    description: 'Writing t = 1, 2, 3 is?',
    options: ['Packing', 'Unpacking', 'Error', 'Casting'],
    correctAnswers: [0],
    hints: ['Groups values into a tuple.']
  },
  {
    id: 92,
    type: 'coding',
    title: '92. List Join',
    description: "Join ['a', 'b'] with '-'.",
    initialCode: 'li = ["a", "b"]\nprint("-".join(li))',
    testCases: [
      { description: 'Separator join', expectedOutput: 'a-b' }
    ],
    hints: ['String method called on separator.']
  },
  {
    id: 93,
    type: 'blanks',
    title: '93. Update',
    description: 'Merge two dictionaries using [update] method.',
    initialCode: 'd1.[update](d2)',
    correctAnswers: ['update'],
    hints: ['Refreshes values.']
  },
  {
    id: 94,
    type: 'theory',
    title: '94. Set Add',
    description: 'Method to add to set?',
    options: ['append', 'push', 'add', 'insert'],
    correctAnswers: [2],
    hints: ['Single argument method.']
  },
  {
    id: 95,
    type: 'coding',
    title: '95. Set Union',
    description: 'Union of {1} and {2}.',
    initialCode: 's1 = {1}\ns2 = {2}\nprint(s1 | s2)',
    testCases: [
      { description: 'Pipe operator', expectedOutput: '{1, 2}' }
    ],
    hints: ['Combines all unique elements.']
  },
  {
    id: 96,
    type: 'theory',
    title: '96. Key Error',
    description: 'Exception for missing dict key?',
    options: ['KeyError', 'IndexError', 'ValueError', 'LookupError'],
    correctAnswers: [0],
    hints: ['Explicitly named after the failing operation.']
  },
  {
    id: 97,
    type: 'coding',
    title: '97. List Insert',
    description: 'Insert "X" at index 0.',
    initialCode: 'li = ["A"]\nli.insert(0, "X")\nprint(li)',
    testCases: [
      { description: 'Insert check', expectedOutput: "['X', 'A']" }
    ],
    hints: ['insert(index, value)']
  },
  {
    id: 98,
    type: 'blanks',
    title: '98. Dictionary Length',
    description: 'Use [len] to find number of items in dict.',
    initialCode: 'size = [len](d)',
    correctAnswers: ['len'],
    hints: ['Same as list.']
  },
  {
    id: 99,
    type: 'theory',
    title: '99. Immutable objects',
    description: 'Which is immutable?',
    options: ['List', 'Dictionary', 'String', 'Set'],
    correctAnswers: [2],
    hints: ['Strings cannot be changed in-place.']
  },
  {
    id: 100,
    type: 'coding',
    title: '100. Remove from list',
    description: 'Remove 1 from [1, 2].',
    initialCode: 'li = [1, 2]\nli.remove(1)\nprint(li)',
    testCases: [
      { description: 'Remove check', expectedOutput: '[2]' }
    ],
    hints: ['Deletes the first occurrence.']
  },

  // SECTION 5: STRINGS (101–120)
  {
    id: 101,
    type: 'theory',
    title: '101. Upper Case',
    description: 'Method to capitalize all letters?',
    options: ['capitalize()', 'upper()', 'toUpper()', 'Uppercase()'],
    correctAnswers: [1],
    hints: ['Loud text.']
  },
  {
    id: 102,
    type: 'coding',
    title: '102. Finding character',
    description: 'Check if "h" is in "hello".',
    initialCode: 's = "hello"\nprint("h" in s)',
    testCases: [
      { description: 'Contains check', expectedOutput: 'True' }
    ],
    hints: ['Use in operator.']
  },
  {
    id: 103,
    type: 'blanks',
    title: '103. Strip',
    description: 'Remove whitespace from ends using [strip].',
    initialCode: 's = "  hi  ".[strip]()',
    correctAnswers: ['strip'],
    hints: ['Clean up.']
  },
  {
    id: 104,
    type: 'theory',
    title: '104. Replace',
    description: "Result of 'cat'.replace('c', 'b')?",
    options: ["'bat'", "'cat'", "'mat'", "'dat'"],
    correctAnswers: [0],
    hints: ['Swaps first arg with second.']
  },
  {
    id: 105,
    type: 'coding',
    title: '105. Split string',
    description: 'Split "a,b,c" by comma.',
    initialCode: 's = "a,b,c"\nprint(s.split(","))',
    testCases: [
      { description: 'Split check', expectedOutput: "['a', 'b', 'c']" }
    ],
    hints: ['Creates a list.']
  },
  {
    id: 106,
    type: 'theory',
    title: '106. String Index',
    description: "s = 'python'; What is s[0]?",
    options: ["'p'", "'y'", "'h'", "'n'"],
    correctAnswers: [0],
    hints: ['Zero-based like lists.']
  },
  {
    id: 107,
    type: 'coding',
    title: '107. String Repeat',
    description: "Print 'Hi' 3 times.",
    initialCode: "print('Hi' * 3)",
    testCases: [
      { description: 'Mult check', expectedOutput: 'HiHiHi' }
    ],
    hints: ['Use asterisk.']
  },
  {
    id: 108,
    type: 'blanks',
    title: '108. Format',
    description: 'Use the [f] prefix for formatted strings.',
    initialCode: '[f]"Hello {name}"',
    correctAnswers: ['f'],
    hints: ['Fast format.']
  },
  {
    id: 109,
    type: 'theory',
    title: '109. IsDigit',
    description: 'Method to check if string is numeric?',
    options: ['isnum()', 'isdigit()', 'numeric()', 'isnumber()'],
    correctAnswers: [1],
    hints: ['Returns True if all characters are digits.']
  },
  {
    id: 110,
    type: 'coding',
    title: '110. Substring check',
    description: 'Check if "world" is at end of "hello world".',
    initialCode: 's = "hello world"\nprint(s.endswith("world"))',
    testCases: [
      { description: 'Ending check', expectedOutput: 'True' }
    ],
    hints: ['Check suffix.']
  },
  {
    id: 111,
    type: 'theory',
    title: '111. String reversing',
    description: 'Pythonic way to reverse string s?',
    options: ['s.reverse()', 's[::-1]', 'rev(s)', 'reversed(s)'],
    correctAnswers: [1],
    hints: ['Slicing trick.']
  },
  {
    id: 112,
    type: 'coding',
    title: '112. Vowel count',
    description: 'Count vowels in "Python".',
    initialCode: 's = "Python"\nc = 0\nfor char in s:\n  if char.lower() in "aeiou":\n    c += 1\nprint(c)',
    testCases: [
      { description: 'Vowel check', expectedOutput: '1' }
    ],
    hints: ['Check if char in vowels.']
  },
  {
    id: 113,
    type: 'blanks',
    title: '113. Lower',
    description: 'Convert string to lowercase using [lower] method.',
    initialCode: 's.[lower]()',
    correctAnswers: ['lower'],
    hints: ['Small letters.']
  },
  {
    id: 114,
    type: 'theory',
    title: '114. Find method',
    description: 'What does find() return if not found?',
    options: ['0', 'None', '-1', 'Error'],
    correctAnswers: [2],
    hints: ['Classic index indicating failure.']
  },
  {
    id: 115,
    type: 'coding',
    title: '115. Character Case',
    description: 'Swap cases of "aB".',
    initialCode: 's = "aB"\nprint(s.swapcase())',
    testCases: [
      { description: 'Swapcase', expectedOutput: 'Ab' }
    ],
    hints: ['Method to flip case.']
  },
  {
    id: 116,
    type: 'theory',
    title: '116. String length',
    description: 'len(" ") result?',
    options: ['0', '1', '2', 'Error'],
    correctAnswers: [1],
    hints: ['Space counts as character.']
  },
  {
    id: 117,
    type: 'coding',
    title: '117. String Padding',
    description: 'Pad "5" with 0 to length 3.',
    initialCode: 's = "5"\nprint(s.zfill(3))',
    testCases: [
      { description: 'Zero fill', expectedOutput: '005' }
    ],
    hints: ['Use zfill() method.']
  },
  {
    id: 118,
    type: 'blanks',
    title: '118. StartsWith',
    description: 'Check prefix using [startswith] method.',
    initialCode: 's.[startswith]("http")',
    correctAnswers: ['startswith'],
    hints: ['Initial part.']
  },
  {
    id: 119,
    type: 'theory',
    title: '119. String slicing indices',
    description: 's = "12345"; s[1:3]?',
    options: ['"12"', '"23"', '"234"', '"123"'],
    correctAnswers: [1],
    hints: ['Index 1 to 2 (3 excluded).']
  },
  {
    id: 120,
    type: 'coding',
    title: '120. Title case',
    description: 'Convert "hello world" to "Hello World".',
    initialCode: 's = "hello world"\nprint(s.title())',
    testCases: [
      { description: 'Title check', expectedOutput: 'Hello World' }
    ],
    hints: ['Capitalize first letter of each word.']
  },

  // SECTION 6: FILE HANDLING (121–135)
  {
    id: 121,
    type: 'theory',
    title: '121. Open File',
    description: 'Function to open file?',
    options: ['open()', 'read()', 'load()', 'file()'],
    correctAnswers: [0],
    hints: ['Basic I/O function.']
  },
  {
    id: 122,
    type: 'blanks',
    title: '122. Read Mode',
    description: 'Default mode for open is [r].',
    initialCode: 'f = open("x.txt", "[r]")',
    correctAnswers: ['r'],
    hints: ['Read-only.']
  },
  {
    id: 123,
    type: 'theory',
    title: '123. Write Mode',
    description: 'Mode to overwrite existing file?',
    options: ['r', 'a', 'w', 'x'],
    correctAnswers: [2],
    hints: ['Wipe and write.']
  },
  {
    id: 124,
    type: 'blanks',
    title: '124. Append Mode',
    description: 'Add to end of file using [a] mode.',
    initialCode: 'f = open("log.txt", "[a]")',
    correctAnswers: ['a'],
    hints: ['Add.']
  },
  {
    id: 125,
    type: 'theory',
    title: '125. Closing File',
    description: 'Important to do after finishing?',
    options: ['save()', 'close()', 'delete()', 'stop()'],
    correctAnswers: [1],
    hints: ['Release resources.']
  },
  {
    id: 126,
    type: 'coding',
    title: '126. With statement',
    description: 'Use "with" to open file.',
    initialCode: 'with open("test.txt", "w") as f:\n  f.write("Hi")\n# file is automatically closed',
    testCases: [
      { description: 'Context manager', expectedOutput: /with/ }
    ],
    hints: ['Clean way to handle files.']
  },
  {
    id: 127,
    type: 'theory',
    title: '127. ReadLines',
    description: 'What does readlines() return?',
    options: ['String', 'Tuple', 'List of lines', 'Generator'],
    correctAnswers: [2],
    hints: ['It reads the whole file into memory as lines.']
  },
  {
    id: 128,
    type: 'blanks',
    title: '128. Write method',
    description: 'To write a string to file, use [write] method.',
    initialCode: 'f.[write]("data")',
    correctAnswers: ['write'],
    hints: ['Not print.']
  },
  {
    id: 129,
    type: 'theory',
    title: '129. Binary Mode',
    description: 'Mode suffix for binary files?',
    options: ['b', 'bin', '8', '2'],
    correctAnswers: [0],
    hints: ['Used like rb or wb.']
  },
  {
    id: 130,
    type: 'coding',
    title: '130. Reading file content',
    description: 'Read entire content of f.',
    initialCode: '# f is open\ncontent = f.read()\nprint(content)',
    testCases: [
      { description: 'Read all', expectedOutput: /read\(\)/ }
    ],
    hints: ['Read method without args.']
  },

  // SECTION 7: EXCEPTION HANDLING (131–140)
  {
    id: 131,
    type: 'theory',
    title: '131. Try block',
    description: 'Keyword for block that might fail?',
    options: ['attempt', 'check', 'try', 'catch'],
    correctAnswers: [2],
    hints: ['Paired with except.']
  },
  {
    id: 132,
    type: 'blanks',
    title: '132. Except',
    description: 'Keyword to handle errors is [except].',
    initialCode: '[except] Exception as e:',
    correctAnswers: ['except'],
    hints: ['Handle error.']
  },
  {
    id: 133,
    type: 'theory',
    title: '133. Finally',
    description: 'When does finally execute?',
    options: ['Only on error', 'Only if no error', 'Always', 'Never'],
    correctAnswers: [2],
    hints: ['Clean up code that MUST run.']
  },
  {
    id: 134,
    type: 'coding',
    title: '134. ZeroDivision',
    description: 'Handle div by zero.',
    initialCode: 'try:\n  1/0\nexcept ZeroDivisionError:\n  print("Zero")',
    testCases: [
      { description: 'Error handle', expectedOutput: 'Zero' }
    ],
    hints: ['Catch specific exception.']
  },
  {
    id: 135,
    type: 'blanks',
    title: '135. Raise',
    description: 'To trigger an exception manually, use [raise] keyword.',
    initialCode: '[raise] ValueError("Bad data")',
    correctAnswers: ['raise'],
    hints: ['Throw error.']
  },

  // SECTION 8: OOP (141–150)
  {
    id: 141,
    type: 'theory',
    title: '141. Class Definition',
    description: 'Keyword for blueprint?',
    options: ['object', 'class', 'struct', 'blueprint'],
    correctAnswers: [1],
    hints: ['Fundamental OOP keyword.']
  },
  {
    id: 142,
    type: 'blanks',
    title: '142. Init',
    description: 'Constructor method is [_ _init_ _].',
    initialCode: 'def [__init__](self):',
    correctAnswers: ['__init__'],
    hints: ['Double underscores.']
  },
  {
    id: 143,
    type: 'theory',
    title: '143. Self keyword',
    description: 'What does self represent?',
    options: ['Parent class', 'Current instance', 'Global scope', 'Nothing'],
    correctAnswers: [1],
    hints: ['Required first argument in instance methods.']
  },
  {
    id: 144,
    type: 'coding',
    title: '144. Simple Class',
    description: 'Create class Dog with name attribute.',
    initialCode: 'class Dog:\n  def __init__(self, name):\n    self.name = name\nd = Dog("Rex")\nprint(d.name)',
    testCases: [
      { description: 'Object attr', expectedOutput: 'Rex' }
    ],
    hints: ['Assign arg to self.']
  },
  {
    id: 145,
    type: 'theory',
    title: '145. Inheritance',
    description: 'Class derived from another is?',
    options: ['Superclass', 'Subclass', 'Main class', 'Base class'],
    correctAnswers: [1],
    hints: ['It inherits features.']
  },
  {
    id: 146,
    type: 'coding',
    title: '146. Method Call',
    description: 'Call method bark().',
    initialCode: 'class Dog:\n  def bark(self): print("Woof")\nd = Dog()\n',
    testCases: [
      { description: 'Method invoke', expectedOutput: /d\.bark\(\)/ }
    ],
    hints: ['d.bark()']
  },
  {
    id: 147,
    type: 'blanks',
    title: '147. Super',
    description: 'Call parent method using [super]().',
    initialCode: '[super]().__init__()',
    correctAnswers: ['super'],
    hints: ['Higher level.']
  },
  {
    id: 148,
    type: 'theory',
    title: '148. Polymorphism',
    description: 'Redefining parent method in subclass is?',
    options: ['Overloading', 'Overriding', 'Inheriting', 'Copying'],
    correctAnswers: [1],
    hints: ['Method overriding.']
  },
  {
    id: 149,
    type: 'coding',
    title: '149. Check Instance',
    description: 'Is d an instance of Dog?',
    initialCode: 'class Dog: pass\nd = Dog()\nprint(isinstance(d, Dog))',
    testCases: [
      { description: 'Instanceof', expectedOutput: 'True' }
    ],
    hints: ['Use isinstance() function.']
  },
  {
    id: 150,
    type: 'theory',
    title: '150. Private variables',
    description: 'Prefix for pseudo-private variables?',
    options: ['__', '@', '$', '_'],
    correctAnswers: [0],
    hints: ['Convention using double underscores.']
  }
];
