import { Question } from '../types';
export const RUBY_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Use "puts" to print "Hello, Ruby!".',
    initialCode: '# Write code here\n',
    testCases: [
      {
        expectedOutput: 'Hello, Ruby!',
        description: 'Should print Hello, Ruby!'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Ruby Type',
    description: 'What kind of language is Ruby?',
    options: ['Strictly typed', 'Dynamically typed', 'Compiled', 'Static only'],
    correctAnswers: [1],
    hints: ['It is known for its flexibility and developer happiness.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'Variable Prefix',
    description: 'Which prefix indicates an instance variable in Ruby?',
    options: ['$', '@', '@@', '#'],
    correctAnswers: [1],
    hints: ['Single symbol before the variable name.']
  },
  {
    id: 4,
    type: 'blanks',
    title: 'Method Definition',
    description: 'Keyword to start a method definition.',
    initialCode: '___ greet\n  puts "Hi"\nend',
    correctAnswers: ['def'],
    hints: ['Short for "define".']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Symbols',
    description: 'What is a symbol in Ruby?',
    options: ['A mutable string', 'An immutable name often prefixed with a colon', 'A type of comment', 'A mathematical operator'],
    correctAnswers: [1],
    hints: [':my_symbol is an example.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Math Addition',
    description: 'Print the result of 15 + 25. Output: "40".',
    initialCode: '# Print sum\n',
    testCases: [
      {
        expectedOutput: '40',
        description: 'Should print 40'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'Arrays',
    description: 'Which method adds an element to the end of an array?',
    options: ['push', 'add', 'append', 'insert'],
    correctAnswers: [0],
    hints: ['Standard stack operation name.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Everything is an Object',
    description: 'Is everything in Ruby an object (including numbers and nil)?',
    options: ['Yes', 'No', 'Only classes are objects', 'Except for booleans'],
    correctAnswers: [0],
    hints: ['Ruby is "purely" object-oriented.']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Class Inheritance',
    description: 'Symbol used to inherit from another class.',
    initialCode: 'class Child ___ Parent\nend',
    correctAnswers: ['<'],
    hints: ['Less than symbol.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'String length',
    description: 'Print the length of "SmartEdu". output: "8".',
    initialCode: 's = "SmartEdu"\n# print length\n',
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
    title: 'Implicit Return',
    description: 'Do Ruby methods return the last evaluated expression automatically?',
    options: ['Yes', 'No', 'Only if return is keywords present', 'Depends on version'],
    correctAnswers: [0],
    hints: ['You don\'t always need to type "return".']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Hashes',
    description: 'What is a Hash in Ruby equivalent to?',
    options: ['A List', 'A Dictionary / Key-value map', 'A Set', 'A Tuple'],
    correctAnswers: [1],
    hints: ['{ "key" => "value" }']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Global Variable',
    description: 'Prefix for a global variable.',
    initialCode: '___global_data = 100',
    correctAnswers: ['$'],
    hints: ['The dollar sign.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'Block Usage',
    description: 'Use .times to print "7" three times. (output: "777").',
    initialCode: '3.times { # write code }\n',
    testCases: [
      {
        expectedOutput: '777',
        description: 'Should print 777'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'Nil Class',
    description: 'What is the object representing "nothing" in Ruby?',
    options: ['null', 'undefined', 'nil', 'None'],
    correctAnswers: [2],
    hints: ['It is an instance of NilClass.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Blocks',
    description: 'What are the two ways to define a block?',
    options: ['{ } and do...end', '[ ] and begin...finish', '( ) and start...stop', '< > and block...end'],
    correctAnswers: [0],
    hints: ['One is for single lines, one for multiple.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Module Definition',
    description: 'Keyword for creating a module.',
    initialCode: '___ Tools\n  def help; end\nend',
    correctAnswers: ['module'],
    hints: ['Used for mixins.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'Array Select',
    description: 'Filter [1, 2, 3, 4] to get even numbers and print (output: "[2, 4]").',
    initialCode: 'a = [1, 2, 3, 4]\n# print a.select { |n| n.even? }\n',
    testCases: [
      {
        expectedOutput: '[2, 4]',
        description: 'Should print [2, 4]'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Gems',
    description: 'What is RubyGems?',
    options: ['The Ruby compiler', 'The package manager for Ruby', 'A type of variable', 'A library for graphics'],
    correctAnswers: [1],
    hints: ['Uses the "gem" command.']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Enumerable',
    description: 'Which module provides traversal and searching methods for collections?',
    options: ['Comparable', 'Enumerable', 'Kernel', 'Object'],
    correctAnswers: [1],
    hints: ['Included in Array and Hash.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Initialize Method',
    description: 'Method name for the constructor.',
    initialCode: 'def ___(name)\n  @name = name\nend',
    correctAnswers: ['initialize'],
    hints: ['Called when .new is used.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'Getter Method',
    description: 'Define an attr_reader for :name. Create object. Print name "RB".',
    initialCode: 'class P\n  attr_reader :name\n  def initialize; @name="RB"; end\nend\n# print P.new.name\n',
    testCases: [
      {
        expectedOutput: 'RB',
        description: 'Should print RB'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'Conditionals',
    description: 'What is the "unless" keyword used for?',
    options: ['Same as "if"', 'Opposite of "if" (if not)', 'To handle errors', 'To start a loop'],
    correctAnswers: [1],
    hints: ['Condition is executed if it evaluates to false.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'String Interpolation',
    description: 'How do you interpolate a variable "x" into a string in Ruby?',
    options: ['"Value: #{x}"', '"Value: $x"', '"Value: {x}"', '"Value: %x"'],
    correctAnswers: [0],
    hints: ['Requires double quotes and a hash symbol.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Lambda Keyword',
    description: 'Keyword for anonymous functions with strict argument checking.',
    initialCode: 'sq = ___ { |x| x * x }',
    correctAnswers: ['lambda'],
    hints: ['Distinct from Procs.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Range',
    description: 'Print (1..5).to_a. (output: "[1, 2, 3, 4, 5]").',
    initialCode: '# Print range as array\n',
    testCases: [
      {
        expectedOutput: '[1, 2, 3, 4, 5]',
        description: 'Should print array'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Self',
    description: 'What does "self" represent in Ruby?',
    options: ['The parent object', 'The current execution context (current object)', 'A static method', 'A global constant'],
    correctAnswers: [1],
    hints: ['Similar to "this" in Java/JS.']
  },
  {
    id: 28,
    type: 'theory',
    title: 'Constants',
    description: 'How are constants defined in Ruby?',
    options: ['Start with lowercase', 'Start with an uppercase letter', 'Must use "const" keyword', 'Must be all caps only'],
    correctAnswers: [1],
    hints: ['CLASSES are constants because they start with an Uppercase letter.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Proc call',
    description: 'Method to execute a Proc.',
    initialCode: 'my_proc.___',
    correctAnswers: ['call'],
    hints: ['Standard execution keyword.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Frameworks',
    description: 'Which famous web framework is written in Ruby?',
    options: ['Django', 'Laravel', 'Ruby on Rails', 'Express'],
    correctAnswers: [2],
    hints: ['Commonly known as "Rails".']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Everything is an Object',
    description: 'Is it true that in Ruby, almost everything (including numbers and nil) is an object?',
    options: ['Yes', 'No', 'Only classes', 'Depends on version'],
    correctAnswers: [0],
    hints: ['Core philosophy of Ruby.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Dynamic Typing',
    description: 'What type of typing system does Ruby use?',
    options: ['Static', 'Dynamic and Strong', 'Dynamic and Weak', 'Manifest'],
    correctAnswers: [1],
    hints: ['Variables don\'t have types, objects do.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'String interpolation',
    description: 'Sequence used to interpolate a variable "x" into a double-quoted string.',
    initialCode: '"Value: ___"',
    correctAnswers: ['#{x}'],
    hints: ['Pound/hash sign and curly braces.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Symbols',
    description: 'What is a symbol in Ruby?',
    options: ['A reusable string', 'An immutable identifier represented by a name starting with colon', 'A mathematical character', 'A type of comment'],
    correctAnswers: [1],
    hints: ['Example: :my_symbol.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Block Syntax',
    description: 'What are the two ways to define a block in Ruby?',
    options: ['{ } and do...end', '[ ] and begin...end', '( ) and func...end', '{ } and block...end'],
    correctAnswers: [0],
    hints: ['Single-line vs multi-line preference.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Array Sort',
    description: 'Print sorted [3, 1, 2]. output: "[1, 2, 3]".',
    initialCode: 'a = [3, 1, 2]\n# p a.sort',
    testCases: [
      {
        expectedOutput: '[1, 2, 3]',
        description: 'Should print sorted array'
      }
    ]
  },
  {
    id: 37,
    type: 'theory',
    title: 'Self keyword',
    description: 'What does "self" refer to in Ruby?',
    options: ['The parent class', 'The current object (receiver)', 'The global namespace', 'The main method'],
    correctAnswers: [1],
    hints: ['Context changes depending on where it is called.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Inheritance',
    description: 'Which symbol is used for class inheritance?',
    options: [':', '<', 'extends', '::'],
    correctAnswers: [1],
    hints: ['Think of "is a subset of".']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Attribute Accessor',
    description: 'Shorthand to create both getter and setter for "name".',
    initialCode: 'class Person\n  ___ :name\nend',
    correctAnswers: ['attr_accessor'],
    hints: ['Combo of reader and writer.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Check key',
    description: 'Print true if hash h = {a: 1} has key :a.',
    initialCode: 'h = {a: 1}\nputs h.key?(:a)',
    testCases: [
      {
        expectedOutput: 'true',
        description: 'Should print true'
      }
    ]
  },
  {
    id: 41,
    type: 'theory',
    title: 'Module vs Class',
    description: 'Can you instantiate a Module in Ruby?',
    options: ['Yes', 'No', 'Only if it has a constructor', 'Only in Ruby 3.0'],
    correctAnswers: [1],
    hints: ['Modules are for namespacing and mixins.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Mixins',
    description: 'How do you include a module\'s methods as instance methods in a class?',
    options: ['include', 'extend', 'require', 'mixin'],
    correctAnswers: [0],
    hints: ['Use "extend" for class methods.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Last expression',
    description: 'Does Ruby automatically return the result of the last expression in a method?',
    initialCode: 'def f\n  10 # returns 10? (___)\nend',
    correctAnswers: ['yes'],
    hints: ['Explicit return is optional.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'String repeat',
    description: 'Print "A" 3 times (output: "AAA").',
    initialCode: 'puts "A" * 3',
    testCases: [
      {
        expectedOutput: 'AAA',
        description: 'Should print AAA'
      }
    ]
  },
  {
    id: 45,
    type: 'theory',
    title: 'Bang methods',
    description: 'What does a exclamation mark (!) at the end of a method usually imply?',
    options: ['It is a critical method', 'It modifies the receiver in-place (destructive)', 'It returns a boolean', 'It is a private method'],
    correctAnswers: [1],
    hints: ['Example: map! vs map.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Yield keyword',
    description: 'What does "yield" do inside a method?',
    options: ['Returns a value', 'Pauses execution and runs the passed block', 'Creates a new thread', 'Stops the loop'],
    correctAnswers: [1],
    hints: ['How custom iterators are built.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Global variables',
    description: 'Prefix for global variables.',
    initialCode: '___global_var = 1',
    correctAnswers: ['$'],
    hints: ['Dollar sign.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Range to array',
    description: 'Print [1, 2, 3] from range 1..3.',
    initialCode: 'p (1..3).to_a',
    testCases: [
      {
        expectedOutput: '[1, 2, 3]',
        description: 'Should print range as array'
      }
    ]
  },
  {
    id: 49,
    type: 'theory',
    title: 'Duck Typing',
    description: 'What is Duck Typing in Ruby?',
    options: ['Writing code related to ducks', 'If an object walks and quacks like a duck, it is a duck (concern with behavior over type)', 'A type of inheritance', 'A performance optimization'],
    correctAnswers: [1],
    hints: ['Central concept in Ruby\'s flexibility.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'RubyGems',
    description: 'What is RubyGems?',
    options: ['A visual editor', 'The package manager for Ruby', 'A type of variable', 'A security tool'],
    correctAnswers: [1],
    hints: ['Install libraries using "gem install".']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Instance variables',
    description: 'Prefix for instance variables.',
    initialCode: 'class A\n  def init\n    ___name = "test"\n  end\nend',
    correctAnswers: ['@'],
    hints: ['At symbol.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Array filter',
    description: 'Select even numbers from [1, 2, 3, 4] (output: "[2, 4]").',
    initialCode: 'a = [1, 2, 3, 4]\n# p a.select { |x| x.even? }',
    testCases: [
      {
        expectedOutput: '[2, 4]',
        description: 'Should print evens'
      }
    ]
  },
  {
    id: 53,
    type: 'theory',
    title: 'Metaprogramming',
    description: 'What is metaprogramming in Ruby?',
    options: ['Writing documentation', 'Writing code that writes code (modifying language at runtime)', 'Using metadata tags', 'Optimizing compilers'],
    correctAnswers: [1],
    hints: ['Ruby is famous for its powerful metaprogramming capabilities.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Lambda vs Proc',
    description: 'What is a key difference between a Lambda and a Proc?',
    options: ['Lambda checks number of arguments, Proc doesn\'t', 'Proc is faster', 'Lambda is only for numbers', 'No difference'],
    correctAnswers: [0],
    hints: ['Also differ in how they handle the "return" keyword.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Class variables',
    description: 'Prefix for class variables.',
    initialCode: 'class MyClass\n  ___count = 0\nend',
    correctAnswers: ['@@'],
    hints: ['Double at symbol.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'String Reverse',
    description: 'Print reversed "ruby".',
    initialCode: 'puts "ruby".___',
    correctAnswers: ['reverse'],
    hints: ['Built-in string method.']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Ruby on Rails',
    description: 'What is Ruby on Rails?',
    options: ['The name of Ruby\'s compiler', 'A popular web application framework', 'An operating system', 'A database engine'],
    correctAnswers: [1],
    hints: ['Follows MVC pattern.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Frozen String Literal',
    description: 'What does "# frozen_string_literal: true" do?',
    options: ['Encrypts the file', 'Makes all string literals in the file frozen (immutable)', 'Speeds up regex', 'Stops execution'],
    correctAnswers: [1],
    hints: ['Performance optimization in modern Ruby.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Predicate methods',
    description: 'Common suffix for methods returning a boolean.',
    initialCode: 'obj.empty___',
    correctAnswers: ['?'],
    hints: ['Question mark.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Ruby Creator',
    description: 'Who created Ruby?',
    options: ['Yukihiro Matsumoto (Matz)', 'Linus Torvalds', 'Rasmus Lerdorf', 'Larry Wall'],
    correctAnswers: [0],
    hints: ['Designed it to be "natural, not simple".']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Dynamic Typing',
    description: 'Is Ruby a statically or dynamically typed language?',
    options: ['Statically', 'Dynamically', 'Both', 'Neither'],
    correctAnswers: [1],
    hints: ['Variables do not have fixed types.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Blocks',
    description: 'What is a block in Ruby?',
    options: ['A type of variable', 'A piece of code that can be passed to a method', 'A network packet', 'An error type'],
    correctAnswers: [1],
    hints: ['Enclosed in do...end or {}.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Constructor',
    description: 'Method called when a new instance of a class is created.',
    initialCode: 'def ___ \n  @name = "Ruby"\nend',
    correctAnswers: ['initialize'],
    hints: ['Standard Ruby method name.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Symbols vs Strings',
    description: 'What is a key benefit of using symbols (:name) over strings ("name") as hash keys?',
    options: ['Symbols are colorful', 'Symbols are immutable and reused in memory', 'Strings are faster', 'No difference'],
    correctAnswers: [1],
    hints: ['Symbols are unique instances for the same name.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Gems',
    description: 'What are RubyGems?',
    options: ['Valuable stones', 'The standard package manager for Ruby', 'A GUI framework', 'A database'],
    correctAnswers: [1],
    hints: ['Used to distribute Ruby libraries.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Array push',
    description: 'Add "red" to array colors.',
    initialCode: 'colors.___ "red"',
    correctAnswers: ['push'],
    hints: ['Can also use << operator.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Inheritance',
    description: 'How to inherit class B from A?',
    options: ['class B < A', 'class B extends A', 'class B : A', 'class B from A'],
    correctAnswers: [0],
    hints: ['Uses the less-than symbol.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Modules',
    description: 'What are Ruby modules used for?',
    options: ['Namespacing and Mixins', 'Storing large data', 'Speeding up code', 'Hiding code'],
    correctAnswers: [0],
    hints: ['Allow sharing methods across many classes.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Instance variable',
    description: 'Prefix for an instance variable.',
    initialCode: '___name = "Jon"',
    correctAnswers: ['@'],
    hints: ['Single at symbol for instance, double for class.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Map array',
    description: 'Transform array [1, 2] to doubles.',
    initialCode: 'res = [1, 2].___ { |n| n * 2 }',
    correctAnswers: ['map'],
    hints: ['Also aliased as collect.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Yield',
    description: 'What does the "yield" keyword do?',
    options: ['Stops execution', 'Calls the block passed to the method', 'Returns a value', 'Creates a new class'],
    correctAnswers: [1],
    hints: ['Allows methods to define where a block is executed.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Parallel Assignment',
    description: 'Is a, b = 1, 2 valid in Ruby?',
    options: ['Yes', 'No', 'Only for strings', 'Only in methods'],
    correctAnswers: [0],
    hints: ['Ruby supports multi-variable assignment.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Predicate method',
    description: 'By convention, method names ending with this character return a boolean.',
    initialCode: 'def empty___ \n  @items.empty?\nend',
    correctAnswers: ['?'],
    hints: ['The question mark.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Check even',
    description: 'Check if n is even.',
    initialCode: 'if n.___ \n  puts "Even"\nend',
    correctAnswers: ['even?'],
    hints: ['Built-in predicate for integers.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Duck Typing',
    description: 'What is Duck Typing?',
    options: ['Type for birds', 'If it walks like a duck and quacks like a duck, it is a duck (focus on behavior over class)', 'Adding methods to a class', 'Strict type checking'],
    correctAnswers: [1],
    hints: ['Core philosophy of Ruby.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Attr_accessor',
    description: 'What does attr_accessor :name do?',
    options: ['Makes name private', 'Creates both getter and setter methods for @name', 'Deletes @name', 'Validates @name'],
    correctAnswers: [1],
    hints: ['Shortcut for writing def name and def name=(val).']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Range',
    description: 'Symbol for inclusive range (1 to 5).',
    initialCode: '1___5',
    correctAnswers: ['..'],
    hints: ['Two dots for inclusive, three for exclusive.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Print message',
    description: 'Print "Hello" with a newline.',
    initialCode: '___ "Hello"',
    correctAnswers: ['puts'],
    hints: ['Short for put string.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Nil is an Object',
    description: 'Is "nil" an object in Ruby?',
    options: ['Yes', 'No', 'Only in some versions', 'It is a keyword'],
    correctAnswers: [0],
    hints: ['Everything is an object in Ruby.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Boolean False',
    description: 'Which values are considered false in Ruby?',
    options: ['false and nil', 'false, nil, and 0', 'false and 0', 'Only false'],
    correctAnswers: [0],
    hints: ['Only false and nil are "falsy"; 0 and "" are "truthy".']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Global variable',
    description: 'Prefix for a global variable.',
    initialCode: '___counter = 0',
    correctAnswers: ['$'],
    hints: ['The dollar sign.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Method definition',
    description: 'Define method "hello".',
    initialCode: '___ hello\n  puts "Hi"\nend',
    correctAnswers: ['def'],
    hints: ['Keyword to start a method.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Metaprogramming',
    description: 'What is metaprogramming?',
    options: ['Writing code that writes code', 'A fast way of coding', 'Coding for VR', 'None'],
    correctAnswers: [0],
    hints: ['Ruby is famous for its dynamic nature and flexible metaprogramming.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Self',
    description: 'What does "self" represent in Ruby?',
    options: ['The current object', 'The class itself', 'The parent class', 'The global scope'],
    correctAnswers: [0],
    hints: ['Refers to the current execution context.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Super keyword',
    description: 'Keyword to call a method of the same name in the superclass.',
    initialCode: 'def f\n  ___ \nend',
    correctAnswers: ['super'],
    hints: ['Used in inheritance.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'String interpolate',
    description: 'Insert variable x into string.',
    initialCode: '"Val: ___"',
    correctAnswers: ['#{x}'],
    hints: ['Uses hash and curly braces.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Ruby on Rails',
    description: 'What is Ruby on Rails?',
    options: ['A type of train', 'A popular web application framework written in Ruby', 'A Ruby IDE', 'A library for math'],
    correctAnswers: [1],
    hints: ['Created by David Heinemeier Hansson (DHH).']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Case sensitivity',
    description: 'Is Ruby case sensitive?',
    options: ['Yes', 'No', 'Only for variables', 'Only for symbols'],
    correctAnswers: [0],
    hints: ['Hello and hello are different.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'End keyword',
    description: 'Keyword used to close classes, methods, and blocks.',
    initialCode: 'class A\n___',
    correctAnswers: ['end'],
    hints: ['Most common closing word.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'Ruby Creator',
    description: 'Who created Ruby?',
    options: ['Yukihiro "Matz" Matsumoto', 'Brendan Eich', 'Larry Wall', 'Guido van Rossum'],
    correctAnswers: [0],
    hints: ['Designed to make programmers happy.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Ruby Constant prefix',
    description: 'How are constants defined in Ruby?',
    options: ['Starting with lowercase', 'Starting with uppercase letter', 'Starting with $', 'None'],
    correctAnswers: [1],
    hints: ['Example: MY_CONST = 10.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Ruby: self',
    description: 'What does "self" refer to in Ruby?',
    options: ['The current object', 'The parent class', 'The script name', 'None'],
    correctAnswers: [0],
    hints: ['Depends on where it is called (instance, class, or top-level).']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Block syntax',
    description: 'Characters used to start/end a multi-line block.',
    initialCode: 'items.each ___ |i|\n  puts i\n___',
    correctAnswers: ['do', 'end'],
    hints: ['Alternative to curly braces for blocks.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Ruby: attr_accessor',
    description: 'What does "attr_accessor :name" generate?',
    options: ['Only a getter', 'Only a setter', 'Both getter and setter methods', 'None'],
    correctAnswers: [2],
    hints: ['Shorthand for defining attribute methods.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Ruby: Duck Typing',
    description: 'What is "Duck Typing" in Ruby?',
    options: ['Coding using a duck', 'The idea that an object is defined by what it can do (its methods) rather than its class', 'Typing very fast', 'None'],
    correctAnswers: [1],
    hints: ['"If it walks like a duck and quacks like a duck, it\'s a duck."']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Define class',
    description: 'Start class definition for "User".',
    initialCode: '___ User\nend',
    correctAnswers: ['class'],
    hints: ['Keyword to create a class.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Ruby: Symbols',
    description: 'What is a Symbol in Ruby?',
    options: ['A mutable string', 'An immutable object used as a label or key', 'A character', 'None'],
    correctAnswers: [1],
    hints: ['Starts with a colon (e.g., :name).']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Ruby: Module',
    description: 'What is the main use of a Module in Ruby?',
    options: ['To create objects', 'For namespacing and mixins', 'To store files', 'None'],
    correctAnswers: [1],
    hints: ['Cannot be instantiated like classes.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Range syntax',
    description: 'Operator to create an inclusive range (1 to 10).',
    initialCode: 'r = 1___10',
    correctAnswers: ['..'],
    hints: ['Two dots for inclusive.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'String interpolation',
    description: 'Interpolate variable "v" in string.',
    initialCode: 's = "Val: ___"',
    correctAnswers: ['#{v}'],
    hints: ['Uses hash and curly braces.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Ruby: yield',
    description: 'What does the "yield" keyword do?',
    options: ['Stops execution', 'Executes the block passed to the method', 'Returns a value', 'None'],
    correctAnswers: [1],
    hints: ['Allows methods to accept and run blocks code.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Ruby: unless',
    description: 'What is "unless x" equivalent to?',
    options: ['if x', 'if not x', 'while x', 'None'],
    correctAnswers: [1],
    hints: ['Executes code if the condition is false.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Method definition',
    description: 'Keyword to define a method.',
    initialCode: '___ greet(name)\n  "Hi #{name}"\nend',
    correctAnswers: ['def'],
    hints: ['Short for "define".']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Array push',
    description: 'Add 1 to array "a".',
    initialCode: 'a ___ 1',
    correctAnswers: ['<<'],
    hints: ['Shovel operator to append elements.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Ruby: Garbage Collection',
    description: 'Does Ruby have automatic garbage collection?',
    options: ['Yes', 'No', 'Only for strings', 'Only in Rails'],
    correctAnswers: [0],
    hints: ['MRI uses mark-and-sweep.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Ruby: Metaprogramming',
    description: 'What is metaprogramming in Ruby?',
    options: ['Writing code about code', 'Technique where programs have the ability to treat other programs as their data', 'Formatting code', 'None'],
    correctAnswers: [1],
    hints: ['Methods like define_method and method_missing are used for this.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Include module',
    description: 'Keyword to include module methods as instance methods.',
    initialCode: 'class A\n  ___ MyModule\nend',
    correctAnswers: ['include'],
    hints: ['Mixin pattern.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Hash access',
    description: 'Access key :x in hash h.',
    initialCode: 'val = h[___]',
    correctAnswers: [':x'],
    hints: ['Uses bracket notation.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Ruby: Lambdas vs Procs',
    description: 'What is a main difference?',
    options: ['Lambdas are faster', 'Lambdas check the number of arguments, Procs do not', 'No difference', 'None'],
    correctAnswers: [1],
    hints: ['Also differ in how "return" behaves.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Ruby: Everything is an Object',
    description: 'Is a number like 5 an object in Ruby?',
    options: ['Yes', 'No', 'Only in memory', 'None'],
    correctAnswers: [0],
    hints: ['You can call methods on numbers: 5.times { ... }']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Alias keyword',
    description: 'Keyword to create a numeric alias or rename a method.',
    initialCode: '___ :new_name :old_name',
    correctAnswers: ['alias'],
    hints: ['Alternative name for a method.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Boolean inverse',
    description: 'Inverse of boolean b.',
    initialCode: 'not_b = ___ b',
    correctAnswers: ['!'],
    hints: ['Exclamation mark.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'RubyGems',
    description: 'What is RubyGems?',
    options: ['A database of gems', 'The package manager for Ruby', 'A code editor', 'None'],
    correctAnswers: [1],
    hints: ['Standard tool for distributing Ruby programs and libraries.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Ruby: Instance variable',
    description: 'How is an instance variable prefixed?',
    options: ['$', '@@', '@', 'None'],
    correctAnswers: [2],
    hints: ['One "at" symbol.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Heritage character',
    description: 'Character used for inheritance.',
    initialCode: 'class Child ___ Parent\nend',
    correctAnswers: ['<'],
    hints: ['Less-than sign.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Check nil',
    description: 'Check if x is nil.',
    initialCode: 'if x.___?',
    correctAnswers: ['nil'],
    hints: ['Ruby convention for boolean methods uses "?".']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Ruby on Rails',
    description: 'What is Ruby on Rails?',
    options: ['A Ruby compiler', 'A web application framework written in Ruby', 'A game engine', 'None'],
    correctAnswers: [1],
    hints: ['Popularized by its "Convention over Configuration" approach.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Ruby: String concat',
    description: 'How to concatenate strings s1 and s2?',
    options: ['s1 + s2', 's1 << s2', 'Both', 'None'],
    correctAnswers: [2],
    hints: ['+ creates new object; << modifies original.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Super keyword',
    description: 'Keyword to call the parent implementation of a method.',
    initialCode: 'def start\n  ___ \nend',
    correctAnswers: ['super'],
    hints: ['Invokes the method of the same name in the superclass.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'Ruby Creator',
    description: 'Who created the Ruby language?',
    options: ['Yukihiro "Matz" Matsumoto', 'Brendan Eich', 'Guido van Rossum', 'Larry Wall'],
    correctAnswers: [0],
    hints: ['He created Ruby to be "natural, not simple".']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Ruby: Unless',
    description: 'What does the "unless" keyword do in Ruby?',
    options: ['It is a loop', 'It is the opposite of an "if" statement', 'It defines a class', 'None'],
    correctAnswers: [1],
    hints: ['Executes code if the condition is false.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Ruby: Until',
    description: 'What is the "until" loop used for?',
    options: ['To repeat code while a condition is true', 'To repeat code while a condition is false', 'To iterate over an array', 'None'],
    correctAnswers: [1],
    hints: ['The opposite of "while".']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Global variables',
    description: 'Character used to start a global variable name.',
    initialCode: '___ count = 10',
    correctAnswers: ['$'],
    hints: ['The dollar sign.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Ruby: Procs vs Lambdas',
    description: 'What is the main difference in how Procs and Lambdas handle "return"?',
    options: ['No difference', 'A lambda returns from the lambda itself; a Proc returns from the enclosing method', 'Lambdas are faster', 'None'],
    correctAnswers: [1],
    hints: ['Procs are more "flexible" with where they return from.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Ruby: Mixins',
    description: 'How do you create a mixin in Ruby?',
    options: ['Using inheritance', 'Using modules and "include" or "extend"', 'Using classes', 'None'],
    correctAnswers: [1],
    hints: ['Provides a way to share code between unrelated classes.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Array Push',
    description: 'Add 1 to an array "arr".',
    initialCode: 'arr = [2, 3]\narr.___ (1)',
    correctAnswers: ['push'],
    hints: ['Can also use the shovel operator (<<).']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Ruby: Method Missing',
    description: 'What is the "method_missing" method used for?',
    options: ['To delete a method', 'To handle calls to methods that are not defined in the class', 'To search for files', 'None'],
    correctAnswers: [1],
    hints: ['Key feature of Ruby\'s metaprogramming capabilities.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Ruby: Blocks',
    description: 'What are the two ways to define blocks in Ruby?',
    options: ['[ ] and { }', 'do...end and { }', 'if...else and { }', 'None'],
    correctAnswers: [1],
    hints: ['Braces are usually used for single-line blocks; do...end for multi-line.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Range',
    description: 'Operator to define a range from 1 to 5 inclusive.',
    initialCode: 'r = 1 ___ 5',
    correctAnswers: ['..'],
    hints: ['Two periods. Three periods (1...5) excludes the end value.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'String Length',
    description: 'Get length of string "ruby".',
    initialCode: 's = "ruby"\nlen = s.___',
    correctAnswers: ['length'],
    hints: ['Can also use size.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Ruby: Duck Typing',
    description: 'What is "Duck Typing" in Ruby?',
    options: ['Typing like a duck', 'The variable type is determined by what the object can do (methods it has) rather than its class', 'A way to sort data', 'None'],
    correctAnswers: [1],
    hints: ['"If it walks like a duck and quacks like a duck, it\'s a duck".']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Ruby: attr_accessor',
    description: 'What does "attr_accessor :name" generate?',
    options: ['Only a getter', 'Only a setter', 'Both a getter and a setter method', 'None'],
    correctAnswers: [2],
    hints: ['Shorthand for defining read and write access to an instance variable.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Initialize',
    description: 'Method called when creating a new object instance.',
    initialCode: 'class User\n  def ___\n    @name = "Guest"\n  end\nend',
    correctAnswers: ['initialize'],
    hints: ['Ruby\'s equivalent of a constructor.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Hash Access',
    description: 'Get value for key :id from hash "h".',
    initialCode: 'h = {id: 1}\nval = h___',
    correctAnswers: ['[:id]'],
    hints: ['Uses square brackets.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Ruby: Gem',
    description: 'What is a "Gem" in the Ruby environment?',
    options: ['A precious stone', 'A packaged library or application', 'A type of class', 'None'],
    correctAnswers: [1],
    hints: ['Managed using the Rubygems system.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Bundler',
    description: 'What is "Bundler" used for in Ruby projects?',
    options: ['To compile Ruby code', 'To manage a project\'s gems and their versions (via Gemfile)', 'To create animations', 'None'],
    correctAnswers: [1],
    hints: ['Ensures that the same gems are used on different machines.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Ruby: Symbols',
    description: 'What is a symbol in Ruby?',
    options: ['A mutable string', 'An immutable, reusable identifier represented by a name (e.g. :name)', 'A math operator', 'None'],
    correctAnswers: [1],
    hints: ['Often used as keys in hashes because they are more efficient than strings.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Module extension',
    description: 'Keyword to add module methods as class methods.',
    initialCode: 'class User\n  ___ MyModule\nend',
    correctAnswers: ['extend'],
    hints: ['Contrasted with "include" which adds methods as instance methods.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Array Sort',
    description: 'Sort an array "arr" in place.',
    initialCode: 'arr = [3, 1, 2]\narr.___ !',
    correctAnswers: ['sort'],
    hints: ['The bang (!) suffix usually indicates the method modifies the receiver.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Ruby: Nil',
    description: 'What is "nil" in Ruby?',
    options: ['An integer 0', 'An object representing nothingness (the only instance of NilClass)', 'An empty string', 'None'],
    correctAnswers: [1],
    hints: ['In Ruby, only nil and false are falsy.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'Ruby: Interpolation',
    description: 'Which syntax is used for string interpolation?',
    options: ['"val is #{x}"', '"val is %{x}"', '"val is {{x}}"', 'None'],
    correctAnswers: [0],
    hints: ['Only works with double-quoted strings.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Standard input',
    description: 'Method to read a line from standard input.',
    initialCode: 'name = ___',
    correctAnswers: ['gets'],
    hints: ['Short for "get string".']
  },
  {
    id: 143,
    type: 'coding',
    title: 'String Split',
    description: 'Split string "a,b" by comma.',
    initialCode: 's = "a,b"\nres = s.___ (",")',
    correctAnswers: ['split'],
    hints: ['Returns an array of substings.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Ruby: Rails MVC',
    description: 'What does MVC stand for in Ruby on Rails?',
    options: ['Main Vision Control', 'Model-View-Controller', 'Map-Value-Class', 'None'],
    correctAnswers: [1],
    hints: ['Architectural pattern used for developing user interfaces.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Ruby: Private Methods',
    description: 'Can you call a private method with an explicit receiver (e.g. self.my_private_method) in standard Ruby?',
    options: ['Yes', 'No', 'Only in Ruby 3+', 'Only for setters'],
    correctAnswers: [1],
    hints: ['Private methods can only be called in an implicit functional way.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Class inheritance',
    description: 'Character used for class inheritance.',
    initialCode: 'class Admin ___ User; end',
    correctAnswers: ['<'],
    hints: ['The less-than sign.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Array Each',
    description: 'Iterate over array "arr".',
    initialCode: 'arr.___ do |val|\n  puts val\nend',
    correctAnswers: ['each'],
    hints: ['Standard iterator method.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Ruby: Self',
    description: 'What does "self" represent in Ruby?',
    options: ['The parent object', 'The current object (the receiver of the current method call)', 'A global variable', 'None'],
    correctAnswers: [1],
    hints: ['Similar to "this" in Java or JS.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Ruby: Symbols vs Strings',
    description: 'Which one is garbage collected?',
    options: ['Symbols', 'Strings', 'Both', 'Neither'],
    correctAnswers: [1],
    hints: ['Symbols are usually not garbage collected (in older versions) or kept for longer; strings are GC\'d regularly.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Ruby: Range exclusive',
    description: 'Operator for an exclusive range (excludes the last number).',
    initialCode: 'r = 1 ___ 5 # 1, 2, 3, 4',
    correctAnswers: ['...'],
    hints: ['Three periods.']
  }
];
