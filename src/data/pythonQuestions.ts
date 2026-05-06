import { Question } from '../types';

export const PYTHON_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Print "Hello, Python!" to the console.',
    initialCode: '# Write your code here\n',
    testCases: [
      {
        expectedOutput: 'Hello, Python!',
        description: 'Should print "Hello, Python!"'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Python Indentation',
    description: 'What is used to define blocks of code in Python?',
    options: ['Braces {}', 'Parentheses ()', 'Indentation', 'Semicolons ;'],
    correctAnswers: [2],
    hints: ['Python does not use curly braces for blocks.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'Python Lists',
    description: 'Which method is used to add an element to the end of a list?',
    options: ['add()', 'push()', 'append()', 'insert()'],
    correctAnswers: [2],
    hints: ['The method name starts with "app".']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Python Dicts',
    description: 'Which symbol is used to define a dictionary in Python?',
    options: ['[]', '()', '{}', '<>'],
    correctAnswers: [2],
    hints: ['Dictionaries use curly braces.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Variables and Math',
    description: 'Assign 10 to a and 5 to b. Print their product.',
    initialCode: '# Write code\n',
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
    title: 'Python Comments',
    description: 'Which character is used to start a single-line comment in Python?',
    options: ['//', '/*', '#', '--'],
    correctAnswers: [2],
    hints: ['It is also called the hash or pound sign.']
  },
  {
    id: 8,
    type: 'blanks',
    title: 'For Loop Range',
    description: 'Complete the loop to print numbers from 0 to 2.',
    initialCode: 'for i in ___(3):\n    print(i)',
    correctAnswers: ['range'],
    hints: ['A built-in function to generate a sequence of numbers.']
  },
  {
    id: 9,
    type: 'theory',
    title: 'Python Strings',
    description: 'How do you check the length of a string named "s"?',
    options: ['s.length()', 'len(s)', 'size(s)', 's.getLen()'],
    correctAnswers: [1],
    hints: ['The len() function is used broadly for sequences.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'String Formatting',
    description: 'Print "Age: 25" using an f-string where age = 25.',
    initialCode: 'age = 25\n# Use f-string to print\n',
    testCases: [
      {
        expectedOutput: 'Age: 25',
        description: 'Should print Age: 25'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'Immutable Types',
    description: 'Which of the following is an immutable data type in Python?',
    options: ['List', 'Dictionary', 'Tuple', 'Set'],
    correctAnswers: [2],
    hints: ['Tuples cannot be changed after creation.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Python Functions',
    description: 'Which keyword is used to define a function in Python?',
    options: ['function', 'def', 'func', 'define'],
    correctAnswers: [1],
    hints: ['Short for "define".']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Input Function',
    description: 'Complete the line to get user input.',
    initialCode: 'name = ___("Enter name: ")',
    correctAnswers: ['input'],
    hints: ['The standard function for reading from stdin.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'List Slicing',
    description: 'Given L = [1, 2, 3, 4], print the first two elements [1, 2].',
    initialCode: 'L = [1, 2, 3, 4]\n# Print slice\n',
    testCases: [
      {
        expectedOutput: '[1, 2]',
        description: 'Should print [1, 2]'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'Boolean Operators',
    description: 'Which of the following is NOT a logical operator in Python?',
    options: ['and', 'or', 'not', 'xor'],
    correctAnswers: [3],
    hints: ['Python uses English words for standard logical gates.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Python Sets',
    description: 'Which statement about Python sets is true?',
    options: ['They are ordered', 'They allow duplicate values', 'They are unordered collections of unique elements', 'They use round brackets ()'],
    correctAnswers: [2],
    hints: ['Sets ensure all elements are unique.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Conditional If',
    description: 'Fill in the colon for the if statement.',
    initialCode: 'if x > 10___\n    print("Big")',
    correctAnswers: [':'],
    hints: ['Required at the end of many Python statements.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'While Loop',
    description: 'Print "Hi" 3 times using a while loop.',
    initialCode: 'i = 0\nwhile i < 3:\n    # print and increment\n',
    testCases: [
      {
        expectedOutput: 'Hi\nHi\nHi',
        description: 'Should print Hi three times'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Exception Handling',
    description: 'Which block in Python is used to catch an exception?',
    options: ['catch', 'except', 'handle', 'error'],
    correctAnswers: [1],
    hints: ['Paired with the "try" block.']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Library Imports',
    description: 'How do you import a module named "math"?',
    options: ['include math', 'require math', 'import math', 'using math'],
    correctAnswers: [2],
    hints: ['The basic keyword for external code.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Class Definition',
    description: 'Keyword to define a blue-print for objects.',
    initialCode: '___ MyClass:\n    pass',
    correctAnswers: ['class'],
    hints: ['Fundamental for OOP.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'Dictionary Access',
    description: 'Given d = {"name": "RK"}, print the value for key "name". Output: "RK".',
    initialCode: 'd = {"name": "RK"}\n# Print value\n',
    testCases: [
      {
        expectedOutput: 'RK',
        description: 'Should print RK'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'Global vs Local',
    description: 'Which keyword is used to modify a global variable inside a function?',
    options: ['global', 'extern', 'static', 'local'],
    correctAnswers: [0],
    hints: ['Explicitly declares the scope.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Python Lambda',
    description: 'What is a lambda function in Python?',
    options: ['A large function', 'A recursive function', 'An anonymous small function', 'A function that returns a list'],
    correctAnswers: [2],
    hints: ['Single expression functions.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Membership Operator',
    description: 'Check if integer 5 is in list [1, 5, 10].',
    initialCode: 'exists = 5 ___ [1, 5, 10]',
    correctAnswers: ['in'],
    hints: ['A two-letter keyword.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'String Methods',
    description: 'Convert "hello" to uppercase and print it.',
    initialCode: 's = "hello"\n# Print uppercase s\n',
    testCases: [
      {
        expectedOutput: 'HELLO',
        description: 'Should print HELLO'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Pip Package Manager',
    description: 'What command is typically used to install Python packages from PyPI?',
    options: ['python install', 'pip install', 'get packages', 'pkg add'],
    correctAnswers: [1],
    hints: ['Pip installs packages.']
  },
  {
    id: 28,
    type: 'theory',
    title: '__init__ Method',
    description: 'What is the purpose of the __init__ method in a Python class?',
    options: ['To destroy the object', 'To initialize the object attributes', 'To print the object', 'To add elements to a list'],
    correctAnswers: [1],
    hints: ['It acts as the constructor.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Boolean Literal',
    description: 'Keyword for the non-true boolean value.',
    initialCode: 'is_ready = ___',
    correctAnswers: ['False'],
    hints: ['Case sensitive in Python.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Type Checking',
    description: 'Which function is used to check the type of an object?',
    options: ['check()', 'isinstance()', 'type()', 'gettype()'],
    correctAnswers: [2],
    hints: ['It returns the class name of the object.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Dictionary Access',
    description: 'How do you get the value of key "a" in d = {"a": 1}?',
    options: ['d["a"]', 'd.a', 'd(a)', 'd{"a"}'],
    correctAnswers: [0],
    hints: ['Uses square brackets.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'List Append',
    description: 'Which method adds an item to the end of a list?',
    options: ['add()', 'append()', 'push()', 'insert()'],
    correctAnswers: [1],
    hints: ['Simple method name.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Import keyword',
    description: 'Keyword to include a module.',
    initialCode: '___ math\nprint(math.sqrt(4))',
    correctAnswers: ['import'],
    hints: ['Common across many languages.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Range function',
    description: 'What does range(5) produce (in Python 3)?',
    options: ['[0, 1, 2, 3, 4, 5]', '[1, 2, 3, 4, 5]', 'An iterable from 0 to 4', 'A list from 0 to 4'],
    correctAnswers: [2],
    hints: ['It does not include the stop value.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Boolean values',
    description: 'Which is a valid boolean in Python?',
    options: ['true', 'True', '1', 'Both True and 1 (conceptually)'],
    correctAnswers: [3],
    hints: ['Python names are case-sensitive.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'List Sum',
    description: 'Print sum of [10, 20, 30]. Output: "60".',
    initialCode: 'l = [10, 20, 30]\n# print sum(l)\n',
    testCases: [
      {
        expectedOutput: '60',
        description: 'Should print 60'
      }
    ]
  },
  {
    id: 37,
    type: 'theory',
    title: 'String immutability',
    description: 'Are strings in Python mutable?',
    options: ['Yes', 'No', 'Only if defined as list', 'Depends on version'],
    correctAnswers: [1],
    hints: ['You cannot change a character in a string after it is created.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Lamda Functions',
    description: 'What is a lambda function?',
    options: ['A large function', 'A small anonymous function', 'A type of class', 'A comment style'],
    correctAnswers: [1],
    hints: ['Defined using "lambda" keyword.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Constructor',
    description: 'Special method name for a class constructor.',
    initialCode: 'class A:\n  def ___(self): pass',
    correctAnswers: ['__init__'],
    hints: ['Double underscores on both sides.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Upper case',
    description: 'Print "PYTHON" from "python".',
    initialCode: 's = "python"\n# print upper case\n',
    testCases: [
      {
        expectedOutput: 'PYTHON',
        description: 'Should print PYTHON'
      }
    ]
  },
  {
    id: 41,
    type: 'theory',
    title: 'PEP 8',
    description: 'What is PEP 8?',
    options: ['A performance tool', 'A style guide for Python code', 'A security patch', 'A database wrapper'],
    correctAnswers: [1],
    hints: ['Python Enhancement Proposal #8.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Tuple vs List',
    description: 'What is the main difference between a tuple and a list?',
    options: ['Tuple is mutable', 'Tuple is immutable', 'List uses parentheses', 'No difference'],
    correctAnswers: [1],
    hints: ['Tuples use ( ) and Lists use [ ].']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Logical AND',
    description: 'Keyword for logical AND.',
    initialCode: 'if a > 0 ___ b < 0:',
    correctAnswers: ['and'],
    hints: ['Uses the English word.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Dictionary keys',
    description: 'Print keys of {"A":1}. Output: "[\'A\']".',
    initialCode: 'd = {"A":1}\n# print(list(d.keys()))\n',
    testCases: [
      {
        expectedOutput: "['A']",
        description: "Should print ['A']"
      }
    ]
  },
  {
    id: 45,
    type: 'theory',
    title: 'Local vs Global',
    description: 'How do you modify a global variable inside a function?',
    options: ['Use "global" keyword', 'Use "local" keyword', 'Just assign it', 'Not possible'],
    correctAnswers: [0],
    hints: ['Must declare the intention.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'f-strings',
    description: 'Which prefix is used for formatted string literals?',
    options: ['p', 's', 'f', 'm'],
    correctAnswers: [2],
    hints: ['Think of "f" for format.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Decorator',
    description: 'Symbol used for decorators.',
    initialCode: '___staticmethod\ndef func(): pass',
    correctAnswers: ['@'],
    hints: ['At symbol.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'List slice',
    description: 'Print [1, 2] from [1, 2, 3] using slicing.',
    initialCode: 'l = [1, 2, 3]\n# print(l[:2])\n',
    testCases: [
      {
        expectedOutput: '[1, 2]',
        description: 'Should print [1, 2]'
      }
    ]
  },
  {
    id: 49,
    type: 'theory',
    title: 'Exception Handling',
    description: 'Which block runs after try/except regardless of errors?',
    options: ['else', 'finally', 'catch', 'rescue'],
    correctAnswers: [1],
    hints: ['Useful for cleanup.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Self parameter',
    description: 'What does "self" represent in instance methods?',
    options: ['The class itself', 'The current instance of the class', 'A keyword from C++', 'A global object'],
    correctAnswers: [1],
    hints: ['Always the first parameter.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Power operator',
    description: 'Operator for exponentiation (power).',
    initialCode: 'result = 2 ___ 3 # result is 8',
    correctAnswers: ['**'],
    hints: ['Double asterisk.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Check existence',
    description: 'Print "In" if "a" is in ["a", "b"].',
    initialCode: 'l = ["a", "b"]\nif "a" in l:\n  print("In")\n',
    testCases: [
      {
        expectedOutput: 'In',
        description: 'Should print In'
      }
    ]
  },
  {
    id: 53,
    type: 'theory',
    title: 'Virtual Environment',
    description: 'Why use virtual environments?',
    options: ['To speed up Python', 'To isolate project dependencies', 'To hide code', 'To prevent crashes'],
    correctAnswers: [1],
    hints: ['Prevents library version conflicts.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'PIP',
    description: 'What is pip?',
    options: ['The Python interpreter', 'A package installer for Python', 'A type of file', 'A web server'],
    correctAnswers: [1],
    hints: ['Used to install libraries from PyPI.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Inheritance',
    description: 'How to inherit class B from class A?',
    initialCode: 'class B___A___:',
    correctAnswers: ['(A)'],
    hints: ['Uses parentheses.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Join strings',
    description: 'Join ["A", "B"] with "-" (output: "A-B").',
    initialCode: 'l = ["A", "B"]\n# print("-".join(l))\n',
    testCases: [
      {
        expectedOutput: 'A-B',
        description: 'Should print A-B'
      }
    ]
  },
  {
    id: 57,
    type: 'theory',
    title: 'Module vs Package',
    description: 'What file makes a directory a package (in older Python versions)?',
    options: ['__init__.py', 'main.py', 'config.py', 'setup.py'],
    correctAnswers: [0],
    hints: ['Init file.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Docstrings',
    description: 'Where are docstrings placed?',
    options: ['At the end of file', 'As the first statement in a module, function, or class', 'In comments only', 'In separate .txt files'],
    correctAnswers: [1],
    hints: ['Uses triple quotes.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Floor Division',
    description: 'Operator for division that discards remainder.',
    initialCode: 'res = 7 ___ 2 # res is 3',
    correctAnswers: ['//'],
    hints: ['Double slash.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Python Creator',
    description: 'Who created Python?',
    options: ['Bill Gates', 'Guido van Rossum', 'Linus Torvalds', 'Dennis Ritchie'],
    correctAnswers: [1],
    hints: ['Commonly known as BDFL.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'List Slicing',
    description: 'What does list[1:3] return?',
    options: ['Elements from index 1 to 3 inclusive', 'Elements from index 1 to 2 inclusive', 'Elements from index 0 to 2', 'Elements from index 1 to end'],
    correctAnswers: [1],
    hints: ['The end index is exclusive.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Dictionary Keys',
    description: 'Can a list be used as a dictionary key?',
    options: ['Yes', 'No', 'Only if it is empty', 'Only if it has one item'],
    correctAnswers: [1],
    hints: ['Dictionary keys must be hashable/immutable.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Function argument',
    description: 'Keyword to pass a variable number of non-keyword arguments to a function.',
    initialCode: 'def my_func(*___):',
    correctAnswers: ['args'],
    hints: ['Commonly used name.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Global keyword',
    description: 'How do you modify a global variable inside a function?',
    options: ['Just assign to it', 'Use the "global" keyword', 'Use the "super" keyword', 'You cannot'],
    correctAnswers: [1],
    hints: ['Informs the function scope that the name refers to the global scope.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Join method',
    description: 'Which method combines elements of a list into a string using a separator?',
    options: ['concatenate()', 'join()', 'combine()', 'glue()'],
    correctAnswers: [1],
    hints: ['Example: ", ".join(my_list)']
  },
  {
    id: 66,
    type: 'coding',
    title: 'List comprehension',
    description: 'Create a list of squares for 0-4. output: "[0, 1, 4, 9, 16]".',
    initialCode: 'res = [x**2 for x in ___ (5)]',
    correctAnswers: ['range'],
    hints: ['Function that generates sequence of numbers.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Virtual Environment',
    description: 'What is the purpose of a virtual environment in Python?',
    options: ['To speed up code', 'To create isolated environments for project dependencies', 'To test code on different OS', 'To run code in the cloud'],
    correctAnswers: [1],
    hints: ['Tools like venv or virtualenv.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Self parameter',
    description: 'What does "self" represent in a class method?',
    options: ['The class itself', 'The instance of the class', 'The parent class', 'The global scope'],
    correctAnswers: [1],
    hints: ['Required as the first argument in instance methods.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Docstring',
    description: 'String literal appearing as the first statement in a function/class for documentation.',
    initialCode: 'def f():\n    ___Doc string here___',
    correctAnswers: ['"""'],
    hints: ['Triple quotes.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Dict get',
    description: 'Get value of "key" from dict d safely (return 0 if missing).',
    initialCode: 'v = d.___ ("key", 0)',
    correctAnswers: ['get'],
    hints: ['Method that avoids KeyError.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Zen of Python',
    description: 'How can you read "The Zen of Python"?',
    options: ['import zen', 'import this', 'help(python)', 'man python'],
    correctAnswers: [1],
    hints: ['A set of 19 guiding principles.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Mutable default args',
    description: 'What is a common pitfall with default arguments like def f(a=[])?',
    options: ['Memory leak', 'The list is shared across all function calls', 'The list is deleted after execution', 'Nothing'],
    correctAnswers: [1],
    hints: ['Default values are evaluated once at definition time.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Super keyword',
    description: 'Function used to call methods of the parent class.',
    initialCode: 'class B(A):\n    def __init__(self):\n        ___().__init__()',
    correctAnswers: ['super'],
    hints: ['Standard inheritance helper.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Check type',
    description: 'Check if x is an instance of int.',
    initialCode: 'if ___ (x, int): print("Yes")',
    correctAnswers: ['isinstance'],
    hints: ['Built-in function for type checking.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Generator',
    description: 'What is a generator in Python?',
    options: ['A function that produces numbers', 'A function that returns an iterator using the yield keyword', 'A tool to generate documentation', 'A type of class'],
    correctAnswers: [1],
    hints: ['Does not store all values in memory.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Decorator',
    description: 'What is a decorator (@decorator)?',
    options: ['A way to add styles to code', 'A function that modifies the behavior of another function', 'A comment tag', 'A variable type'],
    correctAnswers: [1],
    hints: ['Higher-order function.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Static method',
    description: 'Decorator used to define a method that does not receive the instance or class implicitly.',
    initialCode: '___ \ndef my_static():',
    correctAnswers: ['@staticmethod'],
    hints: ['One word decorator.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'File write',
    description: 'Write "hi" to file "f.txt".',
    initialCode: 'with open("f.txt", "w") as f:\n    f.___ ("hi")',
    correctAnswers: ['write'],
    hints: ['Method of file object.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'GIL',
    description: 'What is the Global Interpreter Lock (GIL)?',
    options: ['A security lock', 'A mechanism that allows only one thread to execute Python bytecode at a time', 'A database lock', 'A file system lock'],
    correctAnswers: [1],
    hints: ['Affects multi-threading performance in CPU-bound tasks.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Pickle',
    description: 'What is the "pickle" module used for?',
    options: ['Preserving vegetables', 'Serializing and de-serializing Python objects', 'Encoding JSON', 'Compression'],
    correctAnswers: [1],
    hints: ['Converts objects to byte streams.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Filter',
    description: 'Built-in function that constructs an iterator from elements of an iterable for which a function returns true.',
    initialCode: 'res = ___ (lambda x: x > 0, [-1, 1])',
    correctAnswers: ['filter'],
    hints: ['Common functional programming tool.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Map',
    description: 'Apply int() to ["1", "2"].',
    initialCode: 'a = ["1", "2"]\n# res = list(map(int, a))\n',
    testCases: [
      {
        expectedOutput: '[1, 2]',
        description: 'Should print converted list'
      }
    ]
  },
  {
    id: 83,
    type: 'theory',
    title: 'F-strings',
    description: 'In which Python version were f-strings introduced?',
    options: ['2.7', '3.4', '3.6', '3.8'],
    correctAnswers: [2],
    hints: ['Short for formatted string literals.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Context Manager',
    description: 'What keyword is used to invoke a context manager?',
    options: ['using', 'with', 'try', 'open'],
    correctAnswers: [1],
    hints: ['Used for clean resource management.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Zip',
    description: 'Function that aggregates elements from two or more iterables.',
    initialCode: 'pairs = ___ ([1, 2], ["a", "b"])',
    correctAnswers: ['zip'],
    hints: ['Connects items like a zipper.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Enumerate',
    description: 'Get index and value from ["a", "b"].',
    initialCode: 'for i, v in ___ (["a", "b"]): print(i, v)',
    correctAnswers: ['enumerate'],
    hints: ['Adds a counter to an iterable.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Walrus operator',
    description: 'What is the Walrus operator symbol (introduced in Python 3.8)?',
    options: [':=', '=>', '::=', '<-'],
    correctAnswers: [0],
    hints: ['Assignment expression operator.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Module vs Package',
    description: 'What is a Python package?',
    options: ['A single .py file', 'A directory containing a __init__.py file and other modules', 'A group of installations', 'A compressed archive'],
    correctAnswers: [1],
    hints: ['Way of hierarchical structuring of modules.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Type hinting',
    description: 'Syntax to specify that function f takes an int parameter x.',
    initialCode: 'def f(x ___ int):',
    correctAnswers: [':'],
    hints: ['Uses the colon separator.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'Python creator',
    description: 'Who created the Python programming language?',
    options: ['Guido van Rossum', 'Bjarne Stroustrup', 'James Gosling', 'Dennis Ritchie'],
    correctAnswers: [0],
    hints: ['Formerly the "Benevolent Dictator For Life" (BDFL).']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Mutable Default Arguments',
    description: 'Why should you avoid using mutable objects (like lists) as default arguments in Python functions?',
    options: ['It causes a syntax error', 'Default arguments are evaluated only once at function definition time, leading to shared state between calls', 'It makes the function too slow', 'None'],
    correctAnswers: [1],
    hints: ['def append_to(it, l=[]): ...']
  },
  {
    id: 92,
    type: 'theory',
    title: 'The "__init__" method',
    description: 'What is the purpose of "__init__"?',
    options: ['To initialize a new instance of a class', 'To delete an object', 'To print an object', 'To sort a list'],
    correctAnswers: [0],
    hints: ['It is the constructor-like method in Python.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Self keyword',
    description: 'Convention for the first parameter of an instance method.',
    initialCode: 'class A:\n  def start(___): ...',
    correctAnswers: ['self'],
    hints: ['Represents the instance of the object.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Super keyword',
    description: 'What does super() do?',
    options: ['Creates a superhero', 'Returns a proxy object that delegates method calls to a parent or sibling class', 'Deletes a variable', 'None'],
    correctAnswers: [1],
    hints: ['Commonly used to call the parent class constructor.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Python Namespaces',
    description: 'What is the "LEGB" rule?',
    options: ['A law of coding', 'The order of searching namespaces: Local, Enclosing, Global, Built-in', 'A memory management rule', 'None'],
    correctAnswers: [1],
    hints: ['Determines the scope of variable resolution.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Dictionary creation',
    description: 'Create a dictionary with key "a" and value 1.',
    initialCode: 'd = ___',
    correctAnswers: ['{"a": 1}'],
    hints: ['Uses curly braces and colons.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Garbage Collection',
    description: 'What is the main mechanism Python uses for garbage collection?',
    options: ['Manual deletion', 'Reference counting (augmented by cycle detection)', 'Mark and sweep only', 'None'],
    correctAnswers: [1],
    hints: ['The sys.getrefcount() function can show the current count.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'The "with" statement',
    description: 'What does the "with" statement ensure?',
    options: ['Fast execution', 'Cleanup or closing of resources (using context managers)', 'Type safety', 'None'],
    correctAnswers: [1],
    hints: ['Commonly used with open().']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Pickle module',
    description: 'Module used for serializing and de-serializing Python objects.',
    initialCode: 'import ___',
    correctAnswers: ['pickle'],
    hints: ['Converts objects into byte streams.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Range step',
    description: 'Generate even numbers from 2 up to (including) 10.',
    initialCode: 'nums = list(range(2, ___, 2))',
    correctAnswers: ['11'],
    hints: ['The stop value is exclusive.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Abstract Base Classes',
    description: 'Which module is used to define ABCs in Python?',
    options: ['abc', 'abstract', 'classes', 'sys'],
    correctAnswers: [0],
    hints: ['Allows defining formal hierarchies.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Multiple Inheritance',
    description: 'Does Python support multiple inheritance?',
    options: ['Yes', 'No', 'Only for interfaces', 'Only in Python 2'],
    correctAnswers: [0],
    hints: ['Follows the MRO (Method Resolution Order).']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Raise exception',
    description: 'Keyword to trigger an exception manually.',
    initialCode: '___ ValueError("Bad val")',
    correctAnswers: ['raise'],
    hints: ['Similar to "throw" in other languages.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Check key in dict',
    description: 'Check if "k" is in dict d.',
    initialCode: 'if "k" ___ d: ...',
    correctAnswers: ['in'],
    hints: ['Membership operator.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Decorators',
    description: 'What is a decorator?',
    options: ['A UI design pattern', 'A function that takes another function and extends its behavior without explicitly modifying it', 'A way to comment code', 'None'],
    correctAnswers: [1],
    hints: ['Uses the @ prefix.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Virtual Environments',
    description: 'What is the purpose of a virtual environment?',
    options: ['To run Python in VR', 'To create isolated Python environments for each project', 'To hide code', 'None'],
    correctAnswers: [1],
    hints: ['Common tools include venv and virtualenv.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Yield keyword',
    description: 'Keyword to turn a function into a generator.',
    initialCode: 'def stream():\n  ___ 1',
    correctAnswers: ['yield'],
    hints: ['Produces values lazily one at a time.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Join strings',
    description: 'Join list ["a", "b"] with comma.',
    initialCode: 's = ",".___ (["a", "b"])',
    correctAnswers: ['join'],
    hints: ['String method that takes an iterable.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'GIL',
    description: 'What does GIL stand for?',
    options: ['Global Interpreter Level', 'Global Interpreter Lock', 'General Internal Logic', 'None'],
    correctAnswers: [1],
    hints: ['A mechanism that ensures only one thread executes Python bytecode at a time.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'The "itertools" module',
    description: 'What is "itertools" used for?',
    options: ['Standard math', 'Functions creating iterators for efficient looping', 'Networking', 'None'],
    correctAnswers: [1],
    hints: ['Includes functions like count, cycle, chain.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Global keyword',
    description: 'Keyword to modify a global variable inside a function.',
    initialCode: 'def edit():\n  ___ count\n  count += 1',
    correctAnswers: ['global'],
    hints: ['Declares that a variable refers to the global scope.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Map function',
    description: 'Multiply each element of [1, 2] by 2.',
    initialCode: 'res = map(___, [1, 2])',
    correctAnswers: ['lambda x: x * 2'],
    hints: ['Use an anonymous lambda function.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Pip',
    description: 'What is pip?',
    options: ['A seed', 'The package installer for Python', 'A version of Python', 'None'],
    correctAnswers: [1],
    hints: ['Used to install packages from the Python Package Index (PyPI).']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Walrus Operator',
    description: 'Which symbol is the walrus operator (assignment expression)?',
    options: ['=', '==', ':=', '=>'],
    correctAnswers: [2],
    hints: ['Introduced in Python 3.8.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Nonlocal keyword',
    description: 'Keyword to modify a variable in the nearest enclosing scope (not global).',
    initialCode: 'def outer():\n  x = 1\n  def inner():\n    ___ x',
    correctAnswers: ['nonlocal'],
    hints: ['Used in nested functions.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Sort list in place',
    description: 'Sort list "l" in place.',
    initialCode: 'l.___()',
    correctAnswers: ['sort'],
    hints: ['Modifies the original list.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'CPython',
    description: 'What is CPython?',
    options: ['Python for C programmers', 'The reference implementation of Python, written in C', 'A fast version of Python', 'None'],
    correctAnswers: [1],
    hints: ['The version you download from python.org.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Built-in "bin" function',
    description: 'What does bin(10) return?',
    options: ['1010', '0b1010', 'A binary object', 'None'],
    correctAnswers: [1],
    hints: ['Converts an integer to a binary string prefixed with "0b".']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Type hinting',
    description: 'Character used to start a comment-based type hint or decorator symbol.',
    initialCode: '@___ \ndef f(): ...',
    correctAnswers: ['property'],
    hints: ['Actually used for many built-in decorators like staticmethod.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'Python Creator',
    description: 'Who created the Python language?',
    options: ['Guido van Rossum', 'Larry Wall', 'James Gosling', 'Bjarne Stroustrup'],
    correctAnswers: [0],
    hints: ['He was the "Benevolent Dictator For Life" (BDFL) for a long time.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'List Comprehensions',
    description: 'What is the result of [x**2 for x in range(3)]?',
    options: ['[1, 4, 9]', '[0, 1, 4]', '[1, 2, 3]', '[0, 1, 2]'],
    correctAnswers: [1],
    hints: ['Range(3) produces 0, 1, 2.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Generator Expressions',
    description: 'What is the main advantage of using a generator expression over a list comprehension?',
    options: ['They are faster to write', 'They are more memory efficient (lazy evaluation)', 'They can be sorted', 'None'],
    correctAnswers: [1],
    hints: ['Generators yield items one by one.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Dictionary items',
    description: 'Method to get all key-value pairs from a dictionary.',
    initialCode: 'for k, v in my_dict.___ ():',
    correctAnswers: ['items'],
    hints: ['Returns a view of tuples.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'The "is" vs "=="',
    description: 'What is the difference between "is" and "=="?',
    options: ['No difference', '"is" checks for identity (same memory), "==" checks for equality (same value)', '"is" is for strings only', 'None'],
    correctAnswers: [1],
    hints: ['id(x) == id(y) vs x == y.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Python Path',
    description: 'What environment variable is used to add directories to Python’s module search path?',
    options: ['PYTHONPATH', 'PATH', 'MODULEPATH', 'PY_PATH'],
    correctAnswers: [0],
    hints: ['Similar to CLASSPATH in Java.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'F-string',
    description: 'Print "Val: 10" using an f-string.',
    initialCode: 'x = 10\nprint(f"___")',
    correctAnswers: ['Val: {x}'],
    hints: ['Uses curly braces inside the string.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Decorators',
    description: 'What is a decorator in Python?',
    options: ['A way to add graphics', 'A function that takes another function and extends its behavior without explicitly modifying it', 'A comment block', 'A type of class'],
    correctAnswers: [1],
    hints: ['Uses the @ symbol.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Context Managers',
    description: 'What keyword is used to simplify resource management (like closing files)?',
    options: ['with', 'using', 'open', 'try'],
    correctAnswers: [0],
    hints: ['Used in "with open(...) as f:".']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Lambda function',
    description: 'Keyword used to create small anonymous functions.',
    initialCode: 'sq = ___ x: x*x',
    correctAnswers: ['lambda'],
    hints: ['Single expression functions.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'Map function',
    description: 'Convert list of strings to ints using map.',
    initialCode: 's = ["1", "2"]\ni = list(___(int, s))',
    correctAnswers: ['map'],
    hints: ['Applies a function to all items in an input list.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Mutable vs Immutable',
    description: 'Which of these is a mutable data type in Python?',
    options: ['tuple', 'str', 'int', 'list'],
    correctAnswers: [3],
    hints: ['Tuples and strings cannot be changed after creation.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Exception Handling',
    description: 'Which block in try-except is executed regardless of whether an exception occurred?',
    options: ['except', 'else', 'finally', 'catch'],
    correctAnswers: [2],
    hints: ['Used for cleanup actions.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Inheritence',
    description: 'Syntax for class B inheriting from class A.',
    initialCode: 'class B___: \n    pass',
    correctAnswers: ['(A)'],
    hints: ['Uses regular parentheses.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Zip function',
    description: 'Combine two lists [1, 2] and ["a", "b"] into tuples.',
    initialCode: 'a = [1, 2]\nb = ["a", "b"]\nres = list(___(a, b))',
    correctAnswers: ['zip'],
    hints: ['Iterates over several iterables in parallel.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Docstrings',
    description: 'How are docstrings usually defined in Python?',
    options: ['Using //', 'Using #', 'Using triple quotes (""")', 'Using /* ... */'],
    correctAnswers: [2],
    hints: ['Found at the beginning of modules, classes, and functions.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'The "__init__" method',
    description: 'What is the purpose of the __init__ method in a class?',
    options: ['To destroy an object', 'To initialize a new instance of a class', 'To define static methods', 'None'],
    correctAnswers: [1],
    hints: ['Commonly called a constructor, although it is technically an initializer.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Self in classes',
    description: 'What does the "self" parameter in a class method represent?',
    options: ['The class itself', 'The current instance of the object', 'A reserved keyword that cannot be changed', 'The parent class'],
    correctAnswers: [1],
    hints: ['Required as the first parameter of instance methods.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Input function',
    description: 'Function to read a string from standard input.',
    initialCode: 'name = ___ ("What is your name? ")',
    correctAnswers: ['input'],
    hints: ['Always returns a string.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'String join',
    description: 'Join list ["a", "b"] with a hyphen.',
    initialCode: 'l = ["a", "b"]\nres = "-".___ (l)',
    correctAnswers: ['join'],
    hints: ['Method of the separator string.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Virtual Environment',
    description: 'What is the standard tool for creating isolated Python environments?',
    options: ['pip', 'npm', 'venv', 'conda'],
    correctAnswers: [2],
    hints: ['Built-in module since Python 3.3.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'PIP',
    description: 'What is PIP?',
    options: ['A graphics library', 'The standard package manager for Python', 'A type of variable', 'None'],
    correctAnswers: [1],
    hints: ['Used to install packages from PyPI (Python Package Index).']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Global keyword',
    description: 'Keyword to modify a global variable inside a function.',
    initialCode: 'def f():\n    ___ count\n    count += 1',
    correctAnswers: ['global'],
    hints: ['Allows access to variables outside the local scope.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'Enumerate',
    description: 'Get index and value while looping.',
    initialCode: 'l = ["a", "b"]\nfor idx, val in ___ (l): ...',
    correctAnswers: ['enumerate'],
    hints: ['Returns a sequence of tuples (index, item).']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Inheritence: Multiple',
    description: 'Does Python support multiple inheritance?',
    options: ['Yes', 'No', 'Only in Python 2', 'Only for interfaces'],
    correctAnswers: [0],
    hints: ['A class can inherit from more than one parent class.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'MRO',
    description: 'What does MRO stand for in Python?',
    options: ['Main Resolution Order', 'Method Resolution Order', 'Manual Resource Operation', 'None'],
    correctAnswers: [1],
    hints: ['Determines the order in which base classes are searched for a method.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Super keyword',
    description: 'Function to call a method from the parent class.',
    initialCode: 'class B(A):\n    def f(self):\n        ___ ().f()',
    correctAnswers: ['super'],
    hints: ['Proxies calls to the next class in the MRO.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Filter list',
    description: 'Filter list for items > 5.',
    initialCode: 'l = [1, 10]\nres = list(___(lambda x: x > 5, l))',
    correctAnswers: ['filter'],
    hints: ['Similar to map but for booleans.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'The "pass" statement',
    description: 'What is the "pass" statement used for?',
    options: ['To stop a loop', 'As a null operation (placeholder) where code is syntactically required', 'To return a value', 'To skip an error'],
    correctAnswers: [1],
    hints: ['Often used for empty classes or functions.']
  },
  {
    id: 149,
    type: 'theory',
    title: '__name__ == "__main__"',
    description: 'What is the purpose of this check?',
    options: ['To check if the user is an admin', 'To allow or prevent parts of code from being run when the modules are imported', 'To give a name to the program', 'None'],
    correctAnswers: [1],
    hints: ['Commonly used at the entry point of a script.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Set creation',
    description: 'Which symbol is used to define a set (unordered collection of unique items)?',
    initialCode: 'my_set = ___ 1, 2, 3 ___',
    correctAnswers: ['{', '}'],
    hints: ['Same as dictionaries but without key-value pairs.']
  }
];
