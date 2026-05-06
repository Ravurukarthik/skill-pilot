import { Question } from '../types';
export const KOTLIN_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Use println() to output "Hello, Kotlin!".',
    initialCode: 'fun main() {\n    // Write code here\n}',
    testCases: [
      {
        expectedOutput: 'Hello, Kotlin!',
        description: 'Should print Hello, Kotlin!'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Kotlin Origin',
    description: 'Which company created Kotlin?',
    options: ['Google', 'JetBrains', 'Oracle', 'Microsoft'],
    correctAnswers: [1],
    hints: ['The same company behind IntelliJ IDEA.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'Null Safety',
    description: 'How does Kotlin handle potential null values by default?',
    options: ['Variables are nullable by default', 'Variables are non-nullable by default', 'Uses "Optional" class like Java', 'Doesn\'t support nulls'],
    correctAnswers: [1],
    hints: ['You must use a "?" to make a type nullable.']
  },
  {
    id: 4,
    type: 'blanks',
    title: 'Variable Declaration',
    description: 'Keyword for a read-only (constant) variable.',
    initialCode: '___ name = "Kotlin"',
    correctAnswers: ['val'],
    hints: ['Short for "value".']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Primary Platform',
    description: 'Kotlin is the preferred language for developing which apps?',
    options: ['iOS', 'Android', 'Windows Desktop', 'Web Frontend'],
    correctAnswers: [1],
    hints: ['Official language for this mobile platform since 2017.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Math Addition',
    description: 'Print the result of 30 + 70. Output: "100".',
    initialCode: 'fun main() {\n  // println()\n}',
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
    title: 'Interoperability',
    description: 'Is Kotlin fully interoperable with Java?',
    options: ['Yes', 'No', 'Only with Kotlin 2.0', 'Only for basic types'],
    correctAnswers: [0],
    hints: ['You can call Java from Kotlin and vice versa.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Data Classes',
    description: 'What is a "data class" in Kotlin?',
    options: ['A class for database connections', 'A class whose main purpose is to hold data', 'A static class', 'An abstract class'],
    correctAnswers: [1],
    hints: ['It automatically generates equals(), hashCode(), and toString().']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Function definition',
    description: 'Keyword to declare a function.',
    initialCode: '___ getResult(): Int { return 1 }',
    correctAnswers: ['fun'],
    hints: ['Short for function.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'String Templates',
    description: 'Given val x = 5, print "Value is 5" using string templates.',
    initialCode: 'fun main() {\n  val x = 5\n  // println("...")\n}',
    testCases: [
      {
        expectedOutput: 'Value is 5',
        description: 'Should print with template'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'Extension Functions',
    description: 'Can you add new functions to existing classes without inheriting from them?',
    options: ['Yes (Extension functions)', 'No', 'Only if the class is open', 'Only for String class'],
    correctAnswers: [0],
    hints: ['fun String.addHello() = "Hello $this"']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Smart Casts',
    description: 'Does Kotlin feature smart casting (automatic casting after an "is" check)?',
    options: ['Yes', 'No', 'Only in switch statements', 'Only for integers'],
    correctAnswers: [0],
    hints: ['if (x is String) { println(x.length) } works without manual cast.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'When Expression',
    description: 'Kotlin equivalent of the switch statement.',
    initialCode: '___ (x) {\n  1 -> print("One")\n}',
    correctAnswers: ['when'],
    hints: ['Can be used as an expression or statement.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'List creation',
    description: 'Create an immutable list [1, 2] and print length. output: "2".',
    initialCode: 'fun main() {\n  val list = listOf(1, 2)\n  // print size\n}',
    testCases: [
      {
        expectedOutput: '2',
        description: 'Should print 2'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'Primary Constructor',
    description: 'Where is the primary constructor defined in Kotlin?',
    options: ['Inside the class body', 'In the class header', 'In a separate file', 'In the "init" block only'],
    correctAnswers: [1],
    hints: ['class User(val name: String) { ... }']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Coroutines',
    description: 'What are Kotlin Coroutines used for?',
    options: ['UI design', 'Asynchronous programming and concurrency', 'Database schemas', 'Unit testing'],
    correctAnswers: [1],
    hints: ['They are "lightweight threads".']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Safe Call',
    description: 'Operator for safe calls on nullable types.',
    initialCode: 'val length = name___length',
    correctAnswers: ['?.'],
    hints: ['Question mark followed by a dot.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'Map iteration',
    description: 'Iterate map of "a" to 1 and print key. output: "a".',
    initialCode: 'fun main() {\n  val m = mapOf("a" to 1)\n  for ((k, v) in m) {\n    print(k)\n  }\n}',
    testCases: [
      {
        expectedOutput: 'a',
        description: 'Should print a'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Elvish Operator',
    description: 'What does the "?:" operator do in Kotlin?',
    options: ['Conditional check', 'Returns the value if not null, otherwise returns the right-hand value', 'Safe cast', 'Ternary operator'],
    correctAnswers: [1],
    hints: ['Also known as the Elvis operator.']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Ranges',
    description: 'How do you create a range from 1 to 10 in Kotlin?',
    options: ['1..10', '1 to 10', 'range(1, 10)', '[1, 10]'],
    correctAnswers: [0],
    hints: ['Uses two dots.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Inheritance Keyword',
    description: 'Keyword to allow a class to be inherited from.',
    initialCode: '___ class Base { }',
    correctAnswers: ['open'],
    hints: ['In Kotlin, classes are "final" by default.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'Filter List',
    description: 'Filter [1, 2, 3] for > 1 and print. output: "[2, 3]".',
    initialCode: 'fun main() {\n  val l = listOf(1, 2, 3)\n  val r = l.filter { it > 1 }\n  print(r)\n}',
    testCases: [
      {
        expectedOutput: '[2, 3]',
        description: 'Should print [2, 3]'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'Sealed Classes',
    description: 'What is a sealed class in Kotlin?',
    options: ['A class that cannot be inherited from', 'A class that represents restricted class hierarchies', 'A private class', 'A class for cryptography'],
    correctAnswers: [1],
    hints: ['Useful for state management (e.g., Success, Error, Loading).']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Lambdas',
    description: 'What is the implicit name for a single parameter in a lambda?',
    options: ['this', 'it', 'me', 'self'],
    correctAnswers: [1],
    hints: ['list.map { ___ + 1 }']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Lazy Initialization',
    description: 'Keyword for property whose value is computed only on first access.',
    initialCode: 'val name: String by ___ { "Result" }',
    correctAnswers: ['lazy'],
    hints: ['A delegate.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Check Null',
    description: 'If s is null, print "Empty" using Elvis operator.',
    initialCode: 'fun main() {\n  val s: String? = null\n  print(s ?: "Empty")\n}',
    testCases: [
      {
        expectedOutput: 'Empty',
        description: 'Should print Empty'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Object Keyword',
    description: 'What is the "object" keyword used for?',
    options: ['To create a class', 'To declare a singleton', 'To create an instance of a class', 'To define an interface'],
    correctAnswers: [1],
    hints: ['One instance in the whole app.']
  },
  {
    id: 28,
    type: 'theory',
    title: 'Standard Library',
    description: 'Which function is used to execute a block of code within the context of an object and return the result?',
    options: ['run', 'apply', 'also', 'let'],
    correctAnswers: [0],
    hints: ['Common scope functions.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Companion Object',
    description: 'Keyword for creating static-like members in a class.',
    initialCode: 'class A {\n  ___ object { }\n}',
    correctAnswers: ['companion'],
    hints: ['Associated with the class itself.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'JVM',
    description: 'Which virtual machine does Kotlin usually run on?',
    options: ['V8', 'JVM', 'CLR', 'LLVM'],
    correctAnswers: [1],
    hints: ['Same as Java.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Null Safety',
    description: 'How to declare a nullable string in Kotlin?',
    options: ['String?', 'String!', 'String null', 'Optional<String>'],
    correctAnswers: [0],
    hints: ['Uses the question mark suffix.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Smart Casts',
    description: 'What is a smart cast in Kotlin?',
    options: ['Automatic type conversion after a type check', 'Explicitly casting with "as"', 'A way to cast objects over network', 'Casting to any type'],
    correctAnswers: [0],
    hints: ['If (x is String) { x.length } works without explicit cast.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Variable Type',
    description: 'Keyword to declare a read-only local variable.',
    initialCode: '___ name = "Kotlin"',
    correctAnswers: ['val'],
    hints: ['Similar to final in Java.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Data Classes',
    description: 'What is the primary purpose of a "data class"?',
    options: ['To store large amounts of data', 'To hold data and automatically provide utility methods like equals/hashCode/toString', 'To create a database table', 'To hide data from other classes'],
    correctAnswers: [1],
    hints: ['Keyword: data class.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Extension Functions',
    description: 'Can you add new methods to existing classes (like String) without inheriting from them?',
    options: ['Yes, using extension functions', 'No', 'Only if the class is not final', 'Only in Java'],
    correctAnswers: [0],
    hints: ['fun String.shout() = this.uppercase()']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Print Variable',
    description: 'Print "Value: 10" using string template.',
    initialCode: 'val x = 10\nprintln("___")',
    correctAnswers: ['Value: $x'],
    hints: ['Uses the dollar sign.']
  },
  {
    id: 37,
    type: 'theory',
    title: 'Primary Constructor',
    description: 'Where is the primary constructor defined in Kotlin?',
    options: ['Inside the class body', 'Directly in the class header', 'In a separate file', 'Kotlin doesn\'t have constructors'],
    correctAnswers: [1],
    hints: ['class Person(val name: String) { ... }']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Default Arguments',
    description: 'Does Kotlin support default values for function parameters?',
    options: ['Yes', 'No', 'Only for strings', 'Only in functions with one parameter'],
    correctAnswers: [0],
    hints: ['fun log(msg: String, level: Int = 0)']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Lateinit',
    description: 'Modifier for non-null properties that are initialized after object creation.',
    initialCode: '___ var name: String',
    correctAnswers: ['lateinit'],
    hints: ['Prevents null checks for properties initialized via dependency injection.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'List creation',
    description: 'Create an immutable list [1, 2].',
    initialCode: 'val a = ___ (1, 2)',
    correctAnswers: ['listOf'],
    hints: ['Standard library utility.']
  },
  {
    id: 41,
    type: 'theory',
    title: 'Delegated Properties',
    description: 'Which keyword is used for property delegation?',
    options: ['by', 'uses', 'delegate', 'from'],
    correctAnswers: [0],
    hints: ['val x: String by lazy { ... }']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Sealed Classes',
    description: 'What is a sealed class?',
    options: ['A class that cannot be opened', 'A class with a restricted hierarchy (restricted set of subclasses)', 'A private class', 'A final class'],
    correctAnswers: [1],
    hints: ['Useful for representing limited states or options.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Unit type',
    description: 'The return type of a function that does not return any meaningful value.',
    initialCode: 'fun printHi(): ___ { ... }',
    correctAnswers: ['Unit'],
    hints: ['Equivalent of void in Java.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Elvis operator',
    description: 'Return "N/A" if val name is null.',
    initialCode: 'val displayName = name ___ "N/A"',
    correctAnswers: ['?:'],
    hints: ['Question mark and colon.']
  },
  {
    id: 45,
    type: 'theory',
    title: 'Coroutines',
    description: 'What are coroutines in Kotlin?',
    options: ['A type of loop', 'Lightweight threads for asynchronous programming', 'A data structure', 'A security layer'],
    correctAnswers: [1],
    hints: ['Allow writing async code in a sequential manner.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Companion Objects',
    description: 'What is a "companion object"?',
    options: ['A static class', 'An object tied to a class that can be accessed like static members in Java', 'An object for friends', 'A background service'],
    correctAnswers: [1],
    hints: ['Kotlin replaces static members with companion objects.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Init block',
    description: 'Block of code that runs during primary constructor execution.',
    initialCode: '___ { println("Created") }',
    correctAnswers: ['init'],
    hints: ['Used for initialization logic.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'When expression',
    description: 'Return "Yes" if x is true.',
    initialCode: 'val res = when(x) {\n  true -> "Yes"\n  ___ -> "No"\n}',
    correctAnswers: ['else'],
    hints: ['Catch-all branch.']
  },
  {
    id: 49,
    type: 'theory',
    title: 'Range syntax',
    description: 'How to represent a range from 1 to 5 inclusive?',
    options: ['1..5', '1 to 5', '1...5', '[1, 5]'],
    correctAnswers: [0],
    hints: ['Double dot operator.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Visibility modifiers',
    description: 'What is the default visibility modifier in Kotlin?',
    options: ['private', 'protected', 'internal', 'public'],
    correctAnswers: [3],
    hints: ['More open by default than Java.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Object keyword',
    description: 'Keyword used to define a Singleton.',
    initialCode: '___ DatabaseConfig { ... }',
    correctAnswers: ['object'],
    hints: ['Both a declaration and an instance.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Map filter',
    description: 'Filter list for items > 5.',
    initialCode: 'val list = listOf(1, 10)\nval res = list.___ { it > 5 }',
    correctAnswers: ['filter'],
    hints: ['Common collection method.']
  },
  {
    id: 53,
    type: 'theory',
    title: 'Infix functions',
    description: 'What does "infix" allow?',
    options: ['Calling functions with dot notation only', 'Calling functions without parentheses or dots', 'Defining private functions', 'Faster recursion'],
    correctAnswers: [1],
    hints: ['Example: val pairs = 1 to "one"']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Destructuring',
    description: 'How do you destructure a pair (a, b)?',
    options: ['val (x, y) = pair', 'val {x, y} = pair', 'let x, y = pair', 'none'],
    correctAnswers: [0],
    hints: ['Uses parentheses on the left side.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Open keyword',
    description: 'Keyword to make a class or method inheritable/overridable.',
    initialCode: '___ class Base { }',
    correctAnswers: ['open'],
    hints: ['Classes in Kotlin are final by default.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Safe call',
    description: 'Safely access Length of nullable string s.',
    initialCode: 'val len = s___length',
    correctAnswers: ['?.'],
    hints: ['Question mark and dot.']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Secondary Constructors',
    description: 'How do you define a secondary constructor?',
    options: ['constructor(args) { ... }', 'secondary constructor(args) { ... }', 'init constructor(args) { ... }', 'none'],
    correctAnswers: [0],
    hints: ['Uses the "constructor" keyword inside the class body.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Higher Order Functions',
    description: 'What is a higher order function?',
    options: ['A function with a high index', 'A function that takes another function as a parameter or returns one', 'A function defined at the top of a file', 'A function that uses recursion'],
    correctAnswers: [1],
    hints: ['Cornerstone of functional programming in Kotlin.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Named arguments',
    description: 'Syntax to call function f(a, b) specifically passing b.',
    initialCode: 'f(___ = 10)',
    correctAnswers: ['b'],
    hints: ['Uses the parameter name followed by equals.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Kotlin Creator',
    description: 'Which company created Kotlin?',
    options: ['Google', 'JetBrains', 'Oracle', 'Microsoft'],
    correctAnswers: [1],
    hints: ['Based in Saint Petersburg, also creators of IntelliJ IDEA.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Interoperability',
    description: 'Is Kotlin 100% interoperable with Java?',
    options: ['Yes', 'No', 'Only for classes', 'Only for variables'],
    correctAnswers: [0],
    hints: ['You can call Kotlin code from Java and vice-versa.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Null Safety',
    description: 'How to declare a nullable string in Kotlin?',
    options: ['String?', 'String!', 'String null', 'Optional<String>'],
    correctAnswers: [0],
    hints: ['Kotlin distinguishes between nullable and non-nullable types.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Variable declaration',
    description: 'Keyword to declare a read-only variable.',
    initialCode: '___ name = "Kotlin"',
    correctAnswers: ['val'],
    hints: ['Similar to "final" in Java.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Data Classes',
    description: 'What is the main purpose of a "data class"?',
    options: ['To store secret data', 'To hold data and automatically provide methods like equals(), hashCode(), and toString()', 'To speed up the app', 'To hide code'],
    correctAnswers: [1],
    hints: ['Very useful for POJOs.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Extension Functions',
    description: 'What is an extension function?',
    options: ['A function that grows longer', 'A function that adds functionality to a class without inheriting from it', 'A global function', 'None'],
    correctAnswers: [1],
    hints: ['fun String.shout() = this.toUpperCase() + "!"']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Array creation',
    description: 'Create an array of elements 1, 2, 3.',
    initialCode: 'val a = ___(1, 2, 3)',
    correctAnswers: ['arrayOf'],
    hints: ['Standard utility function.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Smart Casts',
    description: 'What is a smart cast?',
    options: ['A cast that costs money', 'The compiler automatically casts a variable if it has already been checked with "is"', 'A manual cast', 'None'],
    correctAnswers: [1],
    hints: ['if (x is String) { println(x.length) } // x is smart-cast to String.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Elvis Operator',
    description: 'Which symbol is the Elvis operator?',
    options: ['?', '?:', '!!', '?.'],
    correctAnswers: [1],
    hints: ['Returns the right-hand operand if the left-hand operand is null.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Primary constructor',
    description: 'Keyword to define a constructor in the class header.',
    initialCode: 'class User ___ (val name: String)',
    correctAnswers: ['constructor'],
    hints: ['Often omitted if there are no annotations or visibility modifiers.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Print message',
    description: 'Print "Hello" with a newline.',
    initialCode: '___("Hello")',
    correctAnswers: ['println'],
    hints: ['Standard output function.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Sealed Classes',
    description: 'What is a sealed class?',
    options: ['A class that cannot be opened', 'A class with a restricted hierarchy (all subclasses must be defined in the same file)', 'A private class', 'A final class'],
    correctAnswers: [1],
    hints: ['Similar to enums but with more flexibility.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Coroutines',
    description: 'What are coroutines used for in Kotlin?',
    options: ['Creating UI layers', 'Simplified asynchronous programming', 'Storing data', 'Running tests'],
    correctAnswers: [1],
    hints: ['They are "lightweight threads".']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Lateinit',
    description: 'Modifier for properties that will be initialized after constructor call.',
    initialCode: '___ var name: String',
    correctAnswers: ['lateinit'],
    hints: ['Only for mutable properties and non-primitive types.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'String interpolate',
    description: 'Insert variable "x" into string.',
    initialCode: '"Val: ___"',
    correctAnswers: ['${x}'],
    hints: ['Uses dollar sign and curly braces.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Primary vs Secondary Constructor',
    description: 'Can a Kotlin class have multiple secondary constructors?',
    options: ['Yes', 'No', 'Only if they have no parameters', 'Only in data classes'],
    correctAnswers: [0],
    hints: ['Each must call the primary constructor if it exists.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Higher-Order Functions',
    description: 'What is a higher-order function?',
    options: ['A function with high priority', 'A function that takes another function as a parameter or returns a function', 'A function inside a class', 'None'],
    correctAnswers: [1],
    hints: ['Example: filter { ... }, map { ... }']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Safe call operator',
    description: 'Symbol for safe call on nullable variables.',
    initialCode: 'val len = name___length',
    correctAnswers: ['?.'],
    hints: ['Returns null if the variable is null.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'When expression',
    description: 'Start a "when" block for variable x.',
    initialCode: '___(x) {\n  1 -> print(1)\n}',
    correctAnswers: ['when'],
    hints: ['Kotlin\'s more powerful alternative to switch.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Unit type',
    description: 'What is the "Unit" type in Kotlin?',
    options: ['Representing No-Value (similar to void)', 'A mathematical unit', 'A testing unit', 'None'],
    correctAnswers: [0],
    hints: ['It is a real object with one instance.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Object expressions',
    description: 'What is an "object" expression used for?',
    options: ['Creating an instance of a class', 'Creating anonymous classes', 'Deleting an object', 'None'],
    correctAnswers: [1],
    hints: ['val listener = object : MyListener { ... }']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Companion object',
    description: 'Modifier for an object inside a class that can be accessed without creating a class instance.',
    initialCode: '___ object { val TAG = "U" }',
    correctAnswers: ['companion'],
    hints: ['Similar to static members in Java.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Check type',
    description: 'Check if x is a String.',
    initialCode: 'if (x ___ String) { ... }',
    correctAnswers: ['is'],
    hints: ['Operator for type check.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Inheritance modifier',
    description: 'By default, are Kotlin classes open for inheritance?',
    options: ['Yes', 'No (they are final)', 'Only if no constructor', 'Only data classes'],
    correctAnswers: [1],
    hints: ['You must use the "open" keyword to allow inheritance.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Inner Classes',
    description: 'How to make a nested class aware of its outer class?',
    options: ['Use the "inner" keyword', 'Use the "static" keyword', 'They are aware by default', 'They cannot be'],
    correctAnswers: [0],
    hints: ['Outer class members are accessible in inner classes.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Iterate loop',
    description: 'Keyword for looping over a collection.',
    initialCode: '___ (item in items) { ... }',
    correctAnswers: ['for'],
    hints: ['Standard loop keyword.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Range',
    description: 'Check if index is between 1 and 5 (inclusive).',
    initialCode: 'if (index in 1___5) { ... }',
    correctAnswers: ['..'],
    hints: ['Double dot operator.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Android Development',
    description: 'Which company announced Kotlin as a first-class language for Android development?',
    options: ['Google', 'Oracle', 'Facebook', 'JetBrains'],
    correctAnswers: [0],
    hints: ['Announced at Google I/O 2017.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Scope Functions',
    description: 'Which of these is NOT a Kotlin scope function?',
    options: ['let', 'run', 'with', 'foreach'],
    correctAnswers: [3],
    hints: ['let, run, with, apply, and also are scope functions.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Nullable call',
    description: 'Operator to assert that a value is non-null (throws NPE if it is).',
    initialCode: 'val x = name___',
    correctAnswers: ['!!'],
    hints: ['Double exclamation marks.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'Kotlin Creator',
    description: 'Which company created Kotlin?',
    options: ['JetBrains', 'Google', 'Sun', 'Microsoft'],
    correctAnswers: [0],
    hints: ['The same company that created IntelliJ IDEA.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Kotlin: Data Classes',
    description: 'What is a key benefit of a data class in Kotlin?',
    options: ['It runs faster', 'The compiler automatically derives member functions such as equals(), hashCode(), and toString() from the properties', 'It can only store strings', 'None'],
    correctAnswers: [1],
    hints: ['Simplifies creating classes that primarily hold data.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Kotlin: Null Safety',
    description: 'How do you declare a nullable String in Kotlin?',
    options: ['String?', 'String!', 'String(null)', 'None'],
    correctAnswers: [0],
    hints: ['Uses the question mark suffix.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Kotlin: Primary Constructor',
    description: 'Keyword used to define a constructor in the class header.',
    initialCode: 'class User ___ (val name: String) { }',
    correctAnswers: ['constructor'],
    hints: ['Can be omitted if there are no annotations or access modifiers.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Kotlin: Sealed Classes',
    description: 'What is a sealed class used for?',
    options: ['To hide code', 'To represent restricted class hierarchies, where a value can have one of the types from a limited set', 'To speed up memory', 'None'],
    correctAnswers: [1],
    hints: ['Ideal for use with "when" expressions.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Kotlin: Extension Functions',
    description: 'What do extension functions allow you to do?',
    options: ['Extend a file', 'Extend a class with new functionality without having to inherit from the class', 'Make code private', 'None'],
    correctAnswers: [1],
    hints: ['Can be used on classes you don\'t own, like String or Int.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Kotlin: List mapping',
    description: 'Convert a list of ints to squares.',
    initialCode: 'val s = list.___ { it * it }',
    correctAnswers: ['map'],
    hints: ['Standard functional transformation.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Kotlin: Object Expression',
    description: 'What keyword is used to create an anonymous class instance?',
    options: ['anonymous', 'new', 'object', 'None'],
    correctAnswers: [2],
    hints: ['Example: object : MyInterface { ... }']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Kotlin: Lateinit',
    description: 'What is "lateinit" used for?',
    options: ['Delayed initialization of a non-null property', 'Creating a loop', 'Making a property constant', 'None'],
    correctAnswers: [0],
    hints: ['Useful for properties initialized via dependency injection or setup methods.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Kotlin: When expression',
    description: 'The keyword for Kotlin\'s version of a switch statement.',
    initialCode: '___ (x) {\n    1 -> print("one")\n    else -> print("else")\n}',
    correctAnswers: ['when'],
    hints: ['Can be used as a statement or an expression.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Kotlin: Filter list',
    description: 'Filter list for values > 10.',
    initialCode: 'val res = list.___ { it > 10 }',
    correctAnswers: ['filter'],
    hints: ['Standard functional filter.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Kotlin: Target',
    description: 'What platforms can Kotlin target?',
    options: ['Only JVM', 'JVM, Android, JavaScript, and Native', 'Only Android', 'None'],
    correctAnswers: [1],
    hints: ['Kotlin is a multiplatform language.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Kotlin: Companion Objects',
    description: 'What are companion objects used for?',
    options: ['To add friends', 'To provide functionality similar to static members in Java', 'To hide code', 'None'],
    correctAnswers: [1],
    hints: ['An object declaration inside a class marked with the companion keyword.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Kotlin: Init block',
    description: 'Keyword for an initializer block run after the primary constructor.',
    initialCode: '___ {\n    println("Init done")\n}',
    correctAnswers: ['init'],
    hints: ['Contains code for initialization logic.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Kotlin: String template',
    description: 'Print "Hello Alice" using template.',
    initialCode: 'val name = "Alice"\nprintln("Hello ___")',
    correctAnswers: ['$name'],
    hints: ['The dollar sign prefix followed by the variable name.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Kotlin: Delegation',
    description: 'What keyword is used for property or class delegation?',
    options: ['delegate', 'by', 'using', 'None'],
    correctAnswers: [1],
    hints: ['Allows delegating property access to another object.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Kotlin: Smart Casts',
    description: 'What is a smart cast?',
    options: ['A way to cast objects manually', 'The compiler automatically tracks type checks (like is) and performs casts when safe', 'A hidden feature', 'None'],
    correctAnswers: [1],
    hints: ['Saves you from writing explicit casts.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Kotlin: Elvis operator',
    description: 'Operator to provide a default value if an expression is null.',
    initialCode: 'val len = name?.length ___ 0',
    correctAnswers: ['?:'],
    hints: ['Named after its resemblance to Elvis Presley\'s hairstyle.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Kotlin: Range iteration',
    description: 'Loop from 1 to 5 inclusive.',
    initialCode: 'for (i in 1 ___ 5) { ... }',
    correctAnswers: ['..'],
    hints: ['Double dot operator.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Kotlin: High-Order Functions',
    description: 'What is a high-order function?',
    options: ['A function written in a high place', 'A function that takes another function as a parameter or returns a function', 'A main function', 'None'],
    correctAnswers: [1],
    hints: ['Core part of Kotlin\'s functional programming support.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Kotlin: Coroutines',
    description: 'What are coroutines mainly used for?',
    options: ['Managing memory', 'Asynchronous programming and non-blocking code', 'Creating classes', 'None'],
    correctAnswers: [1],
    hints: ['Lightweight threads for concurrency.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Kotlin: Suspend keyword',
    description: 'Keyword to mark a function that can be paused and resumed (used in coroutines).',
    initialCode: '___ fun fetchData() { ... }',
    correctAnswers: ['suspend'],
    hints: ['Can only be called from a coroutine or another suspend function.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Kotlin: Safe call',
    description: 'Call length on a nullable string "s" safely.',
    initialCode: 'val len = s___ .length',
    correctAnswers: ['?'],
    hints: ['Returns null if the caller is null.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Kotlin: Interfaces',
    description: 'Can Kotlin interfaces contain implementation code?',
    options: ['Yes, they can have default implementations', 'No, only abstract methods', 'Only if they are empty', 'None'],
    correctAnswers: [0],
    hints: ['Similar to default methods in Java 8.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Kotlin: Reified type parameters',
    description: 'What does "reified" allow?',
    options: ['Faster loops', 'Accessing the type of a generic parameter at runtime within an inline function', 'Private variables', 'None'],
    correctAnswers: [1],
    hints: ['Solves the problem of type erasure.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Kotlin: Val vs Var',
    description: 'Keyword for a read-only local variable.',
    initialCode: '___ name = "Alice"',
    correctAnswers: ['val'],
    hints: ['Assigned only once.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Kotlin: Check type',
    description: 'Check if obj is a String.',
    initialCode: 'if (obj ___ String) { ... }',
    correctAnswers: ['is'],
    hints: ['Type check operator.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Kotlin: Inlining',
    description: 'What is the purpose of the "inline" keyword?',
    options: ['To put code on one line', 'To reduce the overhead of high-order functions by inlining their body and parameters at the call site', 'To speed up loops', 'None'],
    correctAnswers: [1],
    hints: ['Replaces function calls with actual body code.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Kotlin: Visibility modifiers',
    description: 'What is the default visibility modifier in Kotlin?',
    options: ['private', 'protected', 'internal', 'public'],
    correctAnswers: [3],
    hints: ['Accessible everywhere.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Kotlin: Import keyword',
    description: 'Keyword to bring classes or functions from other packages.',
    initialCode: '___ kotlin.math.PI',
    correctAnswers: ['import'],
    hints: ['Standard across many languages.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'Kotlin: Standard Library',
    description: 'Does Kotlin have its own standard library or does it only use Java\'s?',
    options: ['Only uses Java\'s', 'It has its own idiomatic standard library built on top of the target platform\'s standard library', 'Only uses Node.js', 'None'],
    correctAnswers: [1],
    hints: ['Provides many utility functions for collections, strings, etc.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Kotlin: Property getters/setters',
    description: 'Where do you define custom getters and setters for a property?',
    options: ['Inside the constructor', 'Directly below the property declaration using "get()" and "set(value)"', 'In a separate class', 'None'],
    correctAnswers: [1],
    hints: ['Allows adding logic when a property is accessed or modified.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Kotlin: Nullable collection',
    description: 'What is the difference between List<String?> and List<String>?',
    options: ['None', 'List<String?> can contain null elements, while List<String> cannot', 'List<String?> is read-only', 'None'],
    correctAnswers: [1],
    hints: ['Type safety applies to collection elements as well.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Kotlin: Tailrec keyword',
    description: 'Keyword for a recursive function that can be optimized by the compiler to prevent stack overflow.',
    initialCode: '___ fun factorial(n: Int): Int { ... }',
    correctAnswers: ['tailrec'],
    hints: ['Requires the recursive call to be the last operation.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Kotlin: Destructuring',
    description: 'What is destructuring in Kotlin?',
    options: ['Breaking down an object into multiple variables (e.g. val (name, age) = person)', 'Deleting an object', 'Changing a type at runtime', 'None'],
    correctAnswers: [0],
    hints: ['Works automatically for data classes (as they provide componentN functions).']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Kotlin: Infix notation',
    description: 'What does the "infix" keyword allow?',
    options: ['Calling functions using dot notation', 'Calling functions without parentheses or dots (e.g. "a" to 1)', 'Making code faster', 'None'],
    correctAnswers: [1],
    hints: ['Used for functions with a single parameter.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Kotlin: String length',
    description: 'Get length of string "s".',
    initialCode: 'val len = s.___',
    correctAnswers: ['length'],
    hints: ['Standard property for string size.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Kotlin: Ranges',
    description: 'How do you create a range from 1 to 5 excluding 5?',
    options: ['1..5', '1 until 5', '1 to 5', 'None'],
    correctAnswers: [1],
    hints: ['The "until" keyword creates an exclusive range.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Kotlin: Type alias',
    description: 'How do you define a type alias?',
    options: ['alias Name = Type', 'typealias Name = Type', 'type Name = Type', 'None'],
    correctAnswers: [1],
    hints: ['Makes complex types easier to read.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Kotlin: Repeat function',
    description: 'Standard library function to run a block of code N times.',
    initialCode: '___ (5) { println("Hi") }',
    correctAnswers: ['repeat'],
    hints: ['Takes count and action as parameters.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'Kotlin: Pair creation',
    description: 'Create a Pair of "a" and 1.',
    initialCode: 'val p = "a" ___ 1',
    correctAnswers: ['to'],
    hints: ['The "to" infix function creates a Pair object.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Kotlin: Map property',
    description: 'What is the "it" keyword in lambda expressions?',
    options: ['Iterate', 'Implicit name of a single parameter', 'A type of class', 'None'],
    correctAnswers: [1],
    hints: ['Available if the lambda has only one parameter.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Kotlin: Safe cast',
    description: 'What is the "as?" operator?',
    options: ['A regular cast', 'A safe cast that returns null if the cast fails', 'A way to rename a variable', 'None'],
    correctAnswers: [1],
    hints: ['Avoids ClassCastException.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Kotlin: For loop',
    description: 'Keyword used to iterate over a range or collection.',
    initialCode: '___ (item in items) { println(item) }',
    correctAnswers: ['for'],
    hints: ['Standard iteration keyword.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Kotlin: Join to string',
    description: 'Convert list to comma-separated string.',
    initialCode: 'val s = list.___ (separator = ", ")',
    correctAnswers: ['joinToString'],
    hints: ['Standard library utility for collections.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Kotlin: Property access',
    description: 'Does Kotlin have field-level access like in Java?',
    options: ['Yes', 'No, it uses property-level access which automatically calls getters/setters', 'Only for static fields', 'None'],
    correctAnswers: [1],
    hints: ['Promotes encapsulation.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Kotlin: Standard functions',
    description: 'What is the purpose of the "apply" function?',
    options: ['To filter a list', 'To perform multiple operations on an object and return the object itself', 'To delete an object', 'None'],
    correctAnswers: [1],
    hints: ['Commonly used for object configuration.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Kotlin: Also function',
    description: 'What is the difference between "apply" and "also"?',
    options: ['None', '"apply" has the object context as "this", while "also" has it as "it"', 'One is faster', 'None'],
    correctAnswers: [1],
    hints: ['"also" is useful for actions that don\'t modify the object but use it (e.g. logging).']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Kotlin: Lazy delegation',
    description: 'Standard delegation for a property that is computed only once on first access.',
    initialCode: 'val s: String ___ lazy { "computed" }',
    correctAnswers: ['by'],
    hints: ['Property delegation keyword.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Kotlin: FlatMap',
    description: 'Flatten a nested list [ [1, 2], [3] ].',
    initialCode: 'val res = list.___ { it }',
    correctAnswers: ['flatMap'],
    hints: ['Transforms each element into a collection and flattens the result.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Kotlin: Operator overloading',
    description: 'Which keyword is used to overload an operator like + or -?',
    options: ['operator', 'overload', 'plus', 'None'],
    correctAnswers: [0],
    hints: ['Allows you to provide implementations for a predefined set of operators.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'Kotlin: Type check narrowing',
    description: 'What happens after "if (x is String)"?',
    options: ['x is still Any', 'x is automatically cast to String in the true branch (Smart Cast)', 'Compilation error', 'None'],
    correctAnswers: [1],
    hints: ['One of Kotlin\'s most powerful compiler features.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Kotlin: Field keyword',
    description: 'Keyword used inside a property setter to access the underlying backing field.',
    initialCode: 'set(value) {\n    ___ = value\n}',
    correctAnswers: ['field'],
    hints: ['Avoids recursive calls to the setter.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'Kotlin: Count items',
    description: 'Count items in "list" that match a predicate.',
    initialCode: 'val c = list.___ { it > 5 }',
    correctAnswers: ['count'],
    hints: ['Standard library collection method.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Kotlin: Nested vs Inner classes',
    description: 'What is the "inner" keyword used for?',
    options: ['To make the class private', 'To allow a nested class to access members of its outer class', 'To speed up class loading', 'None'],
    correctAnswers: [1],
    hints: ['By default, nested classes in Kotlin are static and don\'t have access to the outer class instance.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Kotlin: Functional interfaces',
    description: 'What is a "fun interface"?',
    options: ['An interface that is fun to write', 'A SAM (Single Abstract Method) interface that can be implemented with a lambda', 'A protected interface', 'None'],
    correctAnswers: [1],
    hints: ['Useful for interoperability with Java and functional patterns.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Kotlin: This keyword',
    description: 'Keyword used to refer to the current instance of a class.',
    initialCode: 'this.name = name',
    correctAnswers: ['this'],
    hints: ['Standard in OOP.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Kotlin: Sorted by',
    description: 'Sort list of users by age.',
    initialCode: 'val s = users.___ { it.age }',
    correctAnswers: ['sortedBy'],
    hints: ['Returns a new list sorted by the given selector.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Kotlin: Generic constraints',
    description: 'How do you specify that T must be a subclass of Number?',
    options: ['<T : Number>', '<T extends Number>', '<T where Number>', 'None'],
    correctAnswers: [0],
    hints: ['Uses the colon syntax for upper bound.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Kotlin: Nothing type',
    description: 'What is the "Nothing" type in Kotlin?',
    options: ['Same as void', 'A type that has no instances and is used to mark functions that never return (e.g. throw an exception)', 'An empty string', 'None'],
    correctAnswers: [1],
    hints: ['Different from Unit, which has one instance.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Kotlin: Import alias',
    description: 'Keyword used to rename an import to avoid name conflicts.',
    initialCode: 'import com.example.Foo ___ MyFoo',
    correctAnswers: ['as'],
    hints: ['Allows you to refer to Foo as MyFoo.']
  }
];
