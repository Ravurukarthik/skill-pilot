import { Question } from '../types';
export const PHP_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Use echo to print "Hello, PHP!".',
    initialCode: '<?php\n// Write code here\n',
    testCases: [
      {
        expectedOutput: 'Hello, PHP!',
        description: 'Should print Hello, PHP!'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'PHP Meaning',
    description: 'What does PHP stand for (recursively)?',
    options: ['Private Home Page', 'PHP: Hypertext Preprocessor', 'Personal HTML Processor', 'Public Hyperlink Program'],
    correctAnswers: [1],
    hints: ['Hypertext is part of it.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'Variables',
    description: 'Which symbol is used to start a variable in PHP?',
    options: ['&', '!', '$', '#'],
    correctAnswers: [2],
    hints: ['The dollar sign.']
  },
  {
    id: 4,
    type: 'blanks',
    title: 'String Concatenation',
    description: 'Symbol used to concatenate two strings.',
    initialCode: '$full = "Hello" ___ "World";',
    correctAnswers: ['.'],
    hints: ['A single dot.']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Array Type',
    description: 'Which of the following is an associative array in PHP?',
    options: ['array(1, 2, 3)', 'array("key" => "value")', 'array(true, false)', 'None'],
    correctAnswers: [1],
    hints: ['Uses Key => Value pairs.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Basic Math',
    description: 'Print 10 + 20 using echo.',
    initialCode: '<?php\n// Print sum of 10 and 20\n',
    testCases: [
      {
        expectedOutput: '30',
        description: 'Should print 30'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'Standard Output',
    description: 'Which function is used to output data to the screen besides echo?',
    options: ['print', 'write', 'output', 'display'],
    correctAnswers: [0],
    hints: ['Often used interchangeably with echo.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Closing Tag',
    description: 'How do you close a PHP code block?',
    options: ['?>', '</php>', '}', 'stop;'],
    correctAnswers: [0],
    hints: ['Question mark followed by greater than.']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Function Declaration',
    description: 'Keyword to define a function.',
    initialCode: '___ calculate() { }',
    correctAnswers: ['function'],
    hints: ['Standard across many languages.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'String Length',
    description: 'Use a function to print the length of "SmartEdu". output: "8".',
    initialCode: '<?php\n$s = "SmartEdu";\n// echo length of $s\n',
    testCases: [
      {
        expectedOutput: '8',
        description: 'Should print 8'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'Case Sensitivity',
    description: 'Are user-defined functions case-sensitive in PHP?',
    options: ['Yes', 'No', 'Only if declared so', 'Depends on PHP version'],
    correctAnswers: [1],
    hints: ['Variable names ARE case-sensitive, but function names are NOT.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Loops in PHP',
    description: 'Which loop is specifically designed to iterate over arrays?',
    options: ['for', 'while', 'foreach', 'do-while'],
    correctAnswers: [2],
    hints: ['For each element...']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'POST Data',
    description: 'Superglobal variable for form data submitted via POST.',
    initialCode: '$name = $___["name"];',
    correctAnswers: ['_POST'],
    hints: ['Starts with an underscore and uses all caps.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'Conditional If',
    description: 'If 5 > 3 echo "Yes".',
    initialCode: '<?php\nif (5 > 3) {\n  // echo Yes\n}\n',
    testCases: [
      {
        expectedOutput: 'Yes',
        description: 'Should print Yes'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'File Inclusion',
    description: 'Which statement stops the script execution if the file to be included is not found?',
    options: ['include', 'require', 'include_once', 'add_file'],
    correctAnswers: [1],
    hints: ['It is "required" for the script to continue.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'GET Data',
    description: 'How is data passed to a script via the URL?',
    options: ['POST method', 'GET method', 'SESSION method', 'REQUEST method'],
    correctAnswers: [1],
    hints: ['Visible in the address bar.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Constructor Method',
    description: 'Magic method for constructor in PHP classes.',
    initialCode: 'class MyClass {\n  function ___( ) { }\n}',
    correctAnswers: ['construct'],
    hints: ['Double underscore followed by this word.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'Array Push',
    description: 'Add "Apple" to array $a and print the element.',
    initialCode: '<?php\n$a = [];\n// Add "Apple" to $a and echo $a[0]\n',
    testCases: [
      {
        expectedOutput: 'Apple',
        description: 'Should print Apple'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Constants',
    description: 'Which function is used to define a constant in PHP?',
    options: ['set', 'define', 'const', 'value'],
    correctAnswers: [1],
    hints: ['define("CONST_NAME", value);']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Sessions',
    description: 'Which function must be called at the very beginning of a page to use sessions?',
    options: ['session_begin()', 'session_start()', 'session_init()', 'start_session()'],
    correctAnswers: [1],
    hints: ['It starts the session.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Static Keyword',
    description: 'Keyword to access a static property or method.',
    initialCode: 'MyClass___$myStaticMember;',
    correctAnswers: ['::'],
    hints: ['Double colons (Scope Resolution Operator).']
  },
  {
    id: 22,
    type: 'coding',
    title: 'Switch Statement',
    description: 'Given $x = 1, echo "One".',
    initialCode: '<?php\n$x = 1;\n// switch($x) case 1: echo One\n',
    testCases: [
      {
        expectedOutput: 'One',
        description: 'Should print One'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'PHP Comments',
    description: 'Which of the following is a multi-line comment in PHP?',
    options: ['// comment', '# comment', '/* comment */', '-- comment'],
    correctAnswers: [2],
    hints: ['Same as CSS or C family.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Numeric Arrays',
    description: 'What is the starting index of a numeric array in PHP?',
    options: ['-1', '0', '1', 'Depends'],
    correctAnswers: [1],
    hints: ['Standard zero-based indexing.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'New instance',
    description: 'Keyword to create a new object.',
    initialCode: '$obj = ___ MyClass();',
    correctAnswers: ['new'],
    hints: ['Used for instantiation.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Explode String',
    description: 'Split "a,b" by "," and print the first element "a".',
    initialCode: '<?php\n$s = "a,b";\n// explode and echo first index\n',
    testCases: [
      {
        expectedOutput: 'a',
        description: 'Should print a'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Type Hinting',
    description: 'What does type hinting allow in PHP?',
    options: ['Allows variables to change type', 'Specifies the expected data type of an argument in a function', 'Makes code faster', 'Automatically fixes errors'],
    correctAnswers: [1],
    hints: ['function save(User $u) { ... }']
  },
  {
    id: 28,
    type: 'theory',
    title: 'The "this" variable',
    description: 'What does $this represent in a class?',
    options: ['The parent class', 'The current object instance', 'The static class', 'A global variable'],
    correctAnswers: [1],
    hints: ['Points to "this" specific object.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'NULL coalescing',
    description: 'Operator to provide default if variable is null.',
    initialCode: '$name = $inputName ___ "Guest";',
    correctAnswers: ['??'],
    hints: ['Double question marks.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'PDO',
    description: 'What is PDO in PHP?',
    options: ['PHP Data Objects', 'Personal Data Output', 'PHP Database Optimization', 'Port Data Operator'],
    correctAnswers: [0],
    hints: ['A database access layer providing a uniform method of access.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Variable Prefix',
    description: 'Which character used to prefix variables in PHP?',
    options: ['@', '&', '$', '#'],
    correctAnswers: [2],
    hints: ['Commonly used for money symbol.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Superglobals',
    description: 'Which superglobal stores form data from a POST request?',
    options: ['$_GET', '$_POST', '$_REQUEST', '$_SERVER'],
    correctAnswers: [1],
    hints: ['Matches the HTTP method name.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Print command',
    description: 'Language construct used to output text.',
    initialCode: '___ "Hello World";',
    correctAnswers: ['echo'],
    hints: ['Short four-letter word.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'String concatenation',
    description: 'Which operator is used to concatenate strings?',
    options: ['+', '.', '&', ','],
    correctAnswers: [1],
    hints: ['The dot operator.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Array type',
    description: 'What type of array uses named keys?',
    options: ['Indexed array', 'Associative array', 'Multidimensional array', 'Static array'],
    correctAnswers: [1],
    hints: ['Key-value pairs.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Count Array',
    description: 'Print number of items in [1, 2, 3]. output: "3".',
    initialCode: '$a = [1, 2, 3];\n// print count($a);\n',
    testCases: [
      {
        expectedOutput: '3',
        description: 'Should print 3'
      }
    ]
  },
  {
    id: 37,
    type: 'theory',
    title: 'Include vs Require',
    description: 'What happens if a required file is missing in require()?',
    options: ['Warning only', 'Fatal error and script stops', 'Nothing', 'Script restarts'],
    correctAnswers: [1],
    hints: ['"require" is more strict than "include".']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Closing tag',
    description: 'What is the closing tag for PHP?',
    options: ['?>', '%>', '/php', '</php>'],
    correctAnswers: [0],
    hints: ['Question mark and greater than.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Namespace',
    description: 'Keyword to declare a namespace.',
    initialCode: '___ App\\Models;',
    correctAnswers: ['namespace'],
    hints: ['Organizes classes into logical groups.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'String Length',
    description: 'Print length of "PHP". output: "3".',
    initialCode: '$s = "PHP";\n// print strlen($s);\n',
    testCases: [
      {
        expectedOutput: '3',
        description: 'Should print 3'
      }
    ]
  },
  {
    id: 41,
    type: 'theory',
    title: 'Loose equality',
    description: 'What does 1 == "1" return in PHP?',
    options: ['true', 'false', 'Error', 'null'],
    correctAnswers: [0],
    hints: ['Strict equality === checks type too.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Static keyword',
    description: 'What is a static variable in a function?',
    options: ['A variable that cannot change', 'A variable that retains its value between function calls', 'A global variable', 'A hidden variable'],
    correctAnswers: [1],
    hints: ['Scope is local, but lifetime is script-wide.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Object access',
    description: 'Operator to access methods/properties of an object.',
    initialCode: '$obj___method();',
    correctAnswers: ['->'],
    hints: ['Hyphen and greater than.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Check key',
    description: 'Print "Yes" if "a" exists in ["a" => 1].',
    initialCode: '$d = ["a" => 1];\nif (array_key_exists("a", $d)) echo "Yes";',
    testCases: [
      {
        expectedOutput: 'Yes',
        description: 'Should print Yes'
      }
    ]
  },
  {
    id: 45,
    type: 'theory',
    title: 'Sessions',
    description: 'Where is session data stored normally?',
    options: ['In browser cookies only', 'On the web server', 'In the database', 'In local storage'],
    correctAnswers: [1],
    hints: ['Managed via PHPSESSID cookie.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Composer',
    description: 'What is Composer?',
    options: ['A code editor', 'A dependency manager for PHP', 'A web server', 'A compiler'],
    correctAnswers: [1],
    hints: ['Used to install libraries like Laravel.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Constructor',
    description: 'Method name for a class constructor.',
    initialCode: 'public function ___() { }',
    correctAnswers: ['__construct'],
    hints: ['Double underscores at the start.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Explode',
    description: 'Split "A,B" by "," and print the first element.',
    initialCode: '$s = "A,B";\n$a = explode(",", $s);\necho $a[0];',
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
    title: 'Error handling',
    description: 'Which operator suppresses errors for a statement?',
    options: ['!', '@', '&', '~'],
    correctAnswers: [1],
    hints: ['The "at" symbol.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'PDO',
    description: 'What does PDO stand for?',
    options: ['PHP Data Objects', 'PHP Database Operator', 'Private Data Only', 'PHP Download Optimizer'],
    correctAnswers: [0],
    hints: ['Database abstraction layer.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Inheritance',
    description: 'Keyword for class inheritance.',
    initialCode: 'class B ___ A { }',
    correctAnswers: ['extends'],
    hints: ['Common across many languages.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'JSON encode',
    description: 'Print JSON representation of ["a" => 1]. (output: "{"a":1}").',
    initialCode: '$d = ["a" => 1];\necho json_encode($d);',
    testCases: [
      {
        expectedOutput: '{"a":1}',
        description: 'Should print JSON'
      }
    ]
  },
  {
    id: 53,
    type: 'theory',
    title: 'Trait',
    description: 'What is a trait in PHP?',
    options: ['A type of interface', 'A mechanism for code reuse in single inheritance languages', 'A private class', 'A global function group'],
    correctAnswers: [1],
    hints: ['Used to reduce limitations of single inheritance.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Type hinting',
    description: 'Can you specify return types for functions in PHP 7+?',
    options: ['Yes', 'No', 'Only for integers', 'Only in Laravel'],
    correctAnswers: [0],
    hints: ['function f(): int { ... }']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Global keyword',
    description: 'Keyword to access global variable from inside a function.',
    initialCode: 'function f() {\n  ___ $x;\n}',
    correctAnswers: ['global'],
    hints: ['Alternatively use $GLOBALS.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Constants',
    description: 'Define constant PI as 3.14.',
    initialCode: '___("PI", 3.14);\necho PI;',
    correctAnswers: ['define'],
    hints: ['Function to define constants.']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Magic Methods',
    description: 'Which method is called when an object is treated as a string?',
    options: ['__serialize', '__toString', '__print', '__string'],
    correctAnswers: [1],
    hints: ['Used in echo $obj.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Spaceship operator',
    description: 'What is the symbol for the spaceship operator?',
    options: ['<=>', '<==>', '=>', '<>'],
    correctAnswers: [0],
    hints: ['Returns -1, 0, or 1.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Anonymous functions',
    description: 'Keyword to inherit variable from parent scope in closures.',
    initialCode: '$f = function() ___ ($x) { ... };',
    correctAnswers: ['use'],
    hints: ['Specific to PHP closures.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'PHP Acronym',
    description: 'What was the original meaning of PHP?',
    options: ['Personal Home Page', 'Programmable Hypertext Processor', 'Processor Homepage', 'People\'s Hyperlink Page'],
    correctAnswers: [0],
    hints: ['Now it stands for "PHP: Hypertext Preprocessor".']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Variable Variables',
    description: 'What are variable variables ($$var) in PHP?',
    options: ['Variables that change type', 'Using the value of a variable as the name of another variable', 'Global variables', 'Static variables'],
    correctAnswers: [1],
    hints: ['$a = "hi"; $$a = "world"; // $hi is now "world"']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Type hinting',
    description: 'Can you specify argument types in PHP function definitions?',
    options: ['Yes', 'No', 'Only for strings', 'Only in PHP 8+'],
    correctAnswers: [0],
    hints: ['Example: function add(int $a, int $b)']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Constructor',
    description: 'Magic method for class constructor.',
    initialCode: 'public function ___() { }',
    correctAnswers: ['__construct'],
    hints: ['Starts with two underscores.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'PDO',
    description: 'What does PDO stand for?',
    options: ['PHP Data Objects', 'PHP Database Operator', 'Private Data Only', 'PHP Download Office'],
    correctAnswers: [0],
    hints: ['Database access layer providing a uniform method of access to multiple databases.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Namespaces',
    description: 'Which character is used to separate namespace levels?',
    options: ['/', '.', '\\', ':'],
    correctAnswers: [2],
    hints: ['Backslash separator.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Array merge',
    description: 'Merge $a1 and $a2.',
    initialCode: '$res = ___($a1, $a2);',
    correctAnswers: ['array_merge'],
    hints: ['Standard array function.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Traits',
    description: 'What is a Trait in PHP?',
    options: ['A type of variable', 'A mechanism for code reuse in single inheritance languages like PHP', 'A class that cannot be instantiated', 'A private class'],
    correctAnswers: [1],
    hints: ['Allows horizontal composition of behavior.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Error handling',
    description: 'How to catch exceptions in PHP?',
    options: ['if-else', 'try-catch', 'when-then', 'stop-run'],
    correctAnswers: [1],
    hints: ['Same as many other modern languages.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Visibility',
    description: 'Access modifier for members accessible only within the class itself.',
    initialCode: '___ $secret;',
    correctAnswers: ['private'],
    hints: ['Most restrictive modifier.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Print message',
    description: 'Output "Hello" followed by a newline.',
    initialCode: 'echo "Hello" . ___ ;',
    correctAnswers: ['PHP_EOL'],
    hints: ['Constant for platform-specific end-of-line.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Composer',
    description: 'What is Composer?',
    options: ['A music tool', 'A dependency manager for PHP', 'A web server', 'A PHP compiler'],
    correctAnswers: [1],
    hints: ['Used to install libraries and manage project dependencies.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Superglobals: $_POST',
    description: 'What is the purpose of $_POST?',
    options: ['To store mail settings', 'To collect form data after submitting an HTML form with method="post"', 'To track session data', 'To debug code'],
    correctAnswers: [1],
    hints: ['Associative array of variables passed to the current script via HTTP POST.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Finally block',
    description: 'Block that runs regardless of whether an exception was thrown.',
    initialCode: 'try { ... } catch (E $e) { ... } ___ { ... }',
    correctAnswers: ['finally'],
    hints: ['Useful for cleanup tasks.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Check key exists',
    description: 'Check if "id" exists in array $a.',
    initialCode: 'if (___("id", $a)) { ... }',
    correctAnswers: ['array_key_exists'],
    hints: ['Specific function for key checking.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Session security',
    description: 'How to start a session in PHP?',
    options: ['session_begin()', 'session_start()', 'start_session()', 'session_init()'],
    correctAnswers: [1],
    hints: ['Must be called before any output is sent to the browser.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Encryption',
    description: 'Which function is recommended for password hashing in PHP?',
    options: ['md5()', 'sha1()', 'password_hash()', 'encrypt()'],
    correctAnswers: [2],
    hints: ['Uses strong encryption like bcrypt by default.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Static keyword',
    description: 'Keyword to access static members within a class.',
    initialCode: 'return ___::$count;',
    correctAnswers: ['self'],
    hints: ['Refers to the current class.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Get file content',
    description: 'Read file "f.txt" into a string.',
    initialCode: '$s = ___("f.txt");',
    correctAnswers: ['file_get_contents'],
    hints: ['Quick way to read file data.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Anonymous functions',
    description: 'What is another name for anonymous functions in PHP?',
    options: ['Closures', 'Aliases', 'Lambdas', 'Both A and C'],
    correctAnswers: [3],
    hints: ['Functions that don\'t have a specified name.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Strict types',
    description: 'How to enable strict typing in a file?',
    options: ['strict_types=1;', 'declare(strict_types=1);', 'use strict;', 'enable strict;'],
    correctAnswers: [1],
    hints: ['Must be the first statement in the PHP file.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Include once',
    description: 'Statement similar to include, but ensures file is only included once.',
    initialCode: '___ "config.php";',
    correctAnswers: ['include_once'],
    hints: ['Prevents redeclaration errors.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Explode string',
    description: 'Split "a,b" by comma.',
    initialCode: '$arr = ___(",", "a,b");',
    correctAnswers: ['explode'],
    hints: ['Splits a string into an array.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Magic Constants: __FILE__',
    description: 'What does __FILE__ represent?',
    options: ['File size', 'Full path and filename of the current file', 'Directory name', 'Number of files'],
    correctAnswers: [1],
    hints: ['Resolved at compile time.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Abstract properties',
    description: 'Does PHP support abstract properties?',
    options: ['Yes', 'No', 'Only in PHP 8', 'Only in Interfaces'],
    correctAnswers: [1],
    hints: ['Classes can be abstract, but properties cannot.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Extends keyword',
    description: 'Keyword for class inheritance.',
    initialCode: 'class Child ___ Parent { }',
    correctAnswers: ['extends'],
    hints: ['Same as Java and C#.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Array search',
    description: 'Find index of "red" in $colors.',
    initialCode: '$idx = ___("red", $colors);',
    correctAnswers: ['array_search'],
    hints: ['Returns the key if found.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Xdebug',
    description: 'What is Xdebug?',
    options: ['A PHP security tool', 'An extension for debugging and profiling PHP scripts', 'A web template engine', 'A version control tool'],
    correctAnswers: [1],
    hints: ['Provides stack traces and function traces.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'PHP 8: Match expression',
    description: 'How is "match" different from "switch"?',
    options: ['Switch is faster', 'Match is an expression (returns a value) and does strict comparison', 'No difference', 'Match only works with numbers'],
    correctAnswers: [1],
    hints: ['Added in PHP 8.0.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Implode',
    description: 'Join array elements into a string.',
    initialCode: '$s = ___(",", ["a", "b"]);',
    correctAnswers: ['implode'],
    hints: ['Alias of join().']
  },
  {
    id: 90,
    type: 'theory',
    title: 'PHP Creator',
    description: 'Who created the PHP programming language?',
    options: ['Rasmus Lerdorf', 'Zeev Suraski', 'Andi Gutmans', 'Taylor Otwell'],
    correctAnswers: [0],
    hints: ['Originally meant "Personal Home Page".']
  },
  {
    id: 91,
    type: 'theory',
    title: 'PHP 8: Union Types',
    description: 'How to define a union type for a parameter in PHP 8?',
    options: ['int|string $val', 'int or string $val', 'int, string $val', 'None'],
    correctAnswers: [0],
    hints: ['Uses the vertical bar symbol.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'PHP 8: Named Arguments',
    description: 'What is the syntax for named arguments?',
    options: ['f(name => "val")', 'f(name: "val")', 'f("name" = "val")', 'None'],
    correctAnswers: [1],
    hints: ['Allows passing arguments to a function based on the parameter name.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Null coalescing operator',
    description: 'Symbol for the null coalescing operator.',
    initialCode: '$val = $_GET["p"] ___ "default";',
    correctAnswers: ['??'],
    hints: ['Returns its first operand if it exists and is not null; otherwise it returns its second operand.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'PHP 8: Constructor Property Promotion',
    description: 'What does constructor property promotion do?',
    options: ['Deletes properties', 'Allows declaring and initializing class properties directly in the constructor signature', 'Makes properties public', 'None'],
    correctAnswers: [1],
    hints: ['Reduces boilerplate code significantly.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'PHP 8: Match Expression',
    description: 'How does "match" differ from "switch"?',
    options: ['No difference', 'match returns a value, uses strict comparison (===), and does not require break statements', 'switch is faster', 'None'],
    correctAnswers: [1],
    hints: ['A more powerful and concise way to handle multiple conditions.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Define class',
    description: 'Start class definition for "User".',
    initialCode: '___ User { ... }',
    correctAnswers: ['class'],
    hints: ['Keyword to define a blueprint for objects.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'PHP 8: Attributes',
    description: 'What is the syntax for attributes (annotations) in PHP 8?',
    options: ['@Attr', '[#Attr]', '#[Attr]', 'None'],
    correctAnswers: [2],
    hints: ['Allows adding structured metadata to classes, methods, etc.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'PHP 8: Nullsafe Operator',
    description: 'What is the nullsafe operator?',
    options: ['?->', '??', '?:', 'None'],
    correctAnswers: [0],
    hints: ['Allows calling methods or properties on potentially null objects without an explicit check.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Anonymous function',
    description: 'Keyword used to define an anonymous function.',
    initialCode: '$f = ___(int $x) { return $x * 2; };',
    correctAnswers: ['function'],
    hints: ['Also known as closures.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Array key exists',
    description: 'Check if key "k" is in array $a.',
    initialCode: 'if (___("k", $a)) { ... }',
    correctAnswers: ['array_key_exists'],
    hints: ['Returns true if the given key or index is set in the array.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'PHP Traits',
    description: 'What is a Trait in PHP?',
    options: ['A type of class', 'A mechanism for code reuse in single inheritance languages', 'A private interface', 'None'],
    correctAnswers: [1],
    hints: ['Used to reduce limitations of single inheritance.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Type Hinting: void',
    description: 'What does a "void" return type mean?',
    options: ['Function returns 0', 'Function does not return any value', 'Function returns null', 'None'],
    correctAnswers: [1],
    hints: ['The function must not contain a return statement that returns a value.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Namespace declaration',
    description: 'Keyword used to define a namespace.',
    initialCode: '___ App\\Utils;',
    correctAnswers: ['namespace'],
    hints: ['Must be the first statement in the file.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Get string length',
    description: 'Get length of string $s.',
    initialCode: '$len = ___($s);',
    correctAnswers: ['strlen'],
    hints: ['Returns the number of bytes in a string.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'PHP Sessions',
    description: 'How to start a new session or resume an existing one?',
    options: ['start_session()', 'session_start()', 'session_begin()', 'None'],
    correctAnswers: [1],
    hints: ['Must be called before any output is sent to the browser.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'PDO',
    description: 'What is PDO?',
    options: ['A database', 'PHP Data Objects - a database access layer providing a uniform method of access to multiple databases', 'A templating engine', 'None'],
    correctAnswers: [1],
    hints: ['Provides an abstraction layer for database operations.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Self keyword',
    description: 'Keyword to access static members within the class definition.',
    initialCode: '___::$count',
    correctAnswers: ['self'],
    hints: ['Refers to the current class.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Include file',
    description: 'Include "config.php" once.',
    initialCode: '___ "config.php";',
    correctAnswers: ['include_once'],
    hints: ['Includes the file only if it hasn\'t been included before.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Composer',
    description: 'What is Composer in the PHP world?',
    options: ['A code editor', 'A dependency manager for PHP', 'A web server', 'None'],
    correctAnswers: [1],
    hints: ['Uses a composer.json file to manage project dependencies.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Magic Methods: __get',
    description: 'When is __get() triggered?',
    options: ['When reading data from inaccessible properties', 'When writing data to inaccessible properties', 'When calling a method', 'None'],
    correctAnswers: [0],
    hints: ['Allows dynamic property access.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Static keyword',
    description: 'Keyword to define a member that belongs to the class itself, not instances.',
    initialCode: 'public ___ $count = 0;',
    correctAnswers: ['static'],
    hints: ['Accessed via ::.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Trim string',
    description: 'Remove whitespace from start/end of $s.',
    initialCode: '$s = ___($s);',
    correctAnswers: ['trim'],
    hints: ['Strip whitespace (or other characters) from the beginning and end of a string.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'PHP and JSON',
    description: 'Function to convert a JS value/PHP object to JSON string?',
    options: ['json_encode', 'json_decode', 'json_to_string', 'None'],
    correctAnswers: [0],
    hints: ['Returns the JSON representation of a value.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'The "final" keyword',
    description: 'What happens if a class is marked as "final"?',
    options: ['It cannot be inherited', 'It cannot have properties', 'It is private', 'None'],
    correctAnswers: [0],
    hints: ['Prevents child classes from overriding a method or extending a class.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'This variable',
    description: 'Pseudo-variable that refers to the current object instance.',
    initialCode: '$___->name = "PHP";',
    correctAnswers: ['this'],
    hints: ['Only available inside instance methods.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Count array',
    description: 'Get number of elements in array $a.',
    initialCode: '$n = ___($a);',
    correctAnswers: ['count'],
    hints: ['Returns the number of elements in an array or object.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'PHP 8.1: Enums',
    description: 'How to define an enum in PHP 8.1?',
    options: ['enum State { }', 'class State extends Enum { }', 'define("State", [ ... ])', 'None'],
    correctAnswers: [0],
    hints: ['First-class enums were introduced in PHP 8.1.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Error Handling: Finally',
    description: 'When is the "finally" block executed?',
    options: ['Only if an exception is caught', 'Only if no exception is caught', 'Always, after the try and catch blocks', 'None'],
    correctAnswers: [2],
    hints: ['Useful for cleanup operations.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Global variable access',
    description: 'Superglobal array containing all global variables.',
    initialCode: '$val = $___["myGlobal"];',
    correctAnswers: ['GLOBALS'],
    hints: ['Reference all variables available in global scope.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'PHP Creator',
    description: 'Who created the PHP language?',
    options: ['Rasmus Lerdorf', 'Zeev Suraski', 'Andi Gutmans', 'Larry Wall'],
    correctAnswers: [0],
    hints: ['He created it in 1994 as a set of Common Gateway Interface (CGI) binaries.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Superglobals: $_POST',
    description: 'What is the purpose of the $_POST superglobal?',
    options: ['To collect data after submitting an HTML form with method="post"', 'To send data to the server', 'To store session data', 'None'],
    correctAnswers: [0],
    hints: ['Widely used to pass variables from forms.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Superglobals: $_GET',
    description: 'How is data sent to the server when using $_GET?',
    options: ['In the HTTP body', 'In the URL query string', 'In a cookie', 'None'],
    correctAnswers: [1],
    hints: ['Example: example.com/page.php?id=123.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Include once',
    description: 'Statement to include and evaluate a file only if it has not been included before.',
    initialCode: '___ "header.php";',
    correctAnswers: ['include_once'],
    hints: ['Prevents "function already defined" errors.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'PHP Sessions',
    description: 'Which function must be called at the very beginning of a script to use sessions?',
    options: ['session_start()', 'start_session()', 'use_session()', 'None'],
    correctAnswers: [0],
    hints: ['Initializes session data.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Cookies',
    description: 'Which function is used to send a cookie in PHP?',
    options: ['setcookie()', 'sendcookie()', 'makecookie()', 'None'],
    correctAnswers: [0],
    hints: ['Must be sent before any other output to the browser.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'String Length',
    description: 'Get length of string "hello".',
    initialCode: '$s = "hello";\n$len = ___ ($s);',
    correctAnswers: ['strlen'],
    hints: ['Standard string function.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'PDO',
    description: 'What does PDO stand for in PHP?',
    options: ['PHP Data Objects', 'PHP Database Operator', 'Private Data Only', 'None'],
    correctAnswers: [0],
    hints: ['Database abstraction layer providing a uniform method of access to multiple databases.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Namespaces',
    description: 'Which character is used as the namespace separator in PHP?',
    options: ['.', '/', '\\', ':'],
    correctAnswers: [2],
    hints: ['The backslash.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Class constant',
    description: 'Keyword to define a constant inside a class.',
    initialCode: 'class MyClass {\n    public ___ VERSION = "1.0";\n}',
    correctAnswers: ['const'],
    hints: ['Accessed using the :: operator.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'Array Push',
    description: 'Add value to an array $arr.',
    initialCode: '$arr = [];\n___ ($arr, "val");',
    correctAnswers: ['array_push'],
    hints: ['Can also use $arr[] = "val".']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Traits',
    description: 'What is a "trait" in PHP?',
    options: ['A type of variable', 'A mechanism for code reuse in single inheritance languages (like a partial class or mixin)', 'A database connection', 'None'],
    correctAnswers: [1],
    hints: ['Allows a developer to reuse sets of methods freely in several independent classes.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Abstract Class',
    description: 'Can you instantiate an abstract class in PHP?',
    options: ['Yes', 'No', 'Only if it has no abstract methods', 'Only in PHP 8'],
    correctAnswers: [1],
    hints: ['Abstract classes serve only as templates for other classes.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Interface',
    description: 'Keyword used to implement an interface in a class.',
    initialCode: 'class MyClass ___ MyInterface { }',
    correctAnswers: ['implements'],
    hints: ['Enforces a contract on the class.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Output text',
    description: 'Print "Done" using echo.',
    initialCode: '___ "Done";',
    correctAnswers: ['echo'],
    hints: ['Commonly used for output.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Composer',
    description: 'What is Composer in the PHP ecosystem?',
    options: ['A text editor', 'A dependency manager for PHP', 'A graphics library', 'None'],
    correctAnswers: [1],
    hints: ['Used to install and manage libraries from Packagist.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Autoloading',
    description: 'What is the standard for autoloading in PHP?',
    options: ['PSR-0', 'PSR-4', 'PSR-12', 'None'],
    correctAnswers: [1],
    hints: ['PSR-4 is the modern standard for mapping namespaces to file paths.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Type Hinting',
    description: 'Since which version has PHP significantly improved its scalar type hinting?',
    options: ['PHP 5.3', 'PHP 7.0', 'PHP 8.0', 'None'],
    correctAnswers: [1],
    hints: ['Introduced int, float, string, and bool type hints.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Namespace use',
    description: 'Keyword to import a class from another namespace.',
    initialCode: '___ App\Models\User;',
    correctAnswers: ['use'],
    hints: ['Allows you to refer to the class by its short name.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Foreach loop',
    description: 'Loop over associative array $arr as $key => $val.',
    initialCode: 'foreach ($arr ___ $key => $val) { ... }',
    correctAnswers: ['as'],
    hints: ['Used for iterating through arrays.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'The "var_dump()" function',
    description: 'What is "var_dump()" used for?',
    options: ['To delete a variable', 'To display structured information about one or more expressions that includes its type and value', 'To rename a variable', 'None'],
    correctAnswers: [1],
    hints: ['Essential for debugging.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'Password Hashing',
    description: 'Which function is recommended for password hashing in modern PHP?',
    options: ['md5()', 'sha1()', 'password_hash()', 'None'],
    correctAnswers: [2],
    hints: ['Uses strong encryption algorithms like Bcrypt or Argon2.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Strict types',
    description: 'Directive to enforce strict type checking in a file.',
    initialCode: 'declare(___=1);',
    correctAnswers: ['strict_types'],
    hints: ['Must be at the very top of the file.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'String upper',
    description: 'Convert $s to uppercase.',
    initialCode: '$upper = ___ ($s);',
    correctAnswers: ['strtoupper'],
    hints: ['Standard string transformation.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Superglobals: $_SERVER',
    description: 'What info is stored in $_SERVER?',
    options: ['Form data', 'User details', 'Information about headers, paths, and script locations', 'None'],
    correctAnswers: [2],
    hints: ['Populated by the web server.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Nullable types',
    description: 'How do you mark a parameter type as nullable in PHP 7.1+?',
    options: ['null string $s', '?string $s', 'string|null $s', 'None'],
    correctAnswers: [1],
    hints: ['Uses the question mark before the type.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Magic constant',
    description: 'Magic constant that returns the current directory of the file.',
    initialCode: '$dir = __ ___ ;',
    correctAnswers: ['DIR'],
    hints: ['Note the double underscores on both sides (e.g. __DIR__).']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Explode string',
    description: 'Split string by comma into an array.',
    initialCode: '$arr = ___ (",", $s);',
    correctAnswers: ['explode'],
    hints: ['Equivalent to "split" in other languages.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Null Coalescing Operator',
    description: 'Which operator is the null coalescing operator?',
    options: ['?:', '??', '||', '&&'],
    correctAnswers: [1],
    hints: ['Introduced in PHP 7.0; returns first operand if it exists and is not null.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Inheritence: Final',
    description: 'What does marking a method as "final" do?',
    options: ['Makes it public', 'Prevents it from being overridden in child classes', 'Makes it static', 'None'],
    correctAnswers: [1],
    hints: ['Similar to Java.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Class instantiation',
    description: 'Keyword to create a new object of a class.',
    initialCode: '$obj = ___ MyClass();',
    correctAnswers: ['new'],
    hints: ['Standard object creation.']
  }
];
