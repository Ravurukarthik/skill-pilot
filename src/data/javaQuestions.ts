import { Question } from '../types';

export const JAVA_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Write a program that prints "Hello, Java!" to the console.',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    // Write your code here\n  }\n}',
    testCases: [
      {
        expectedOutput: 'Hello, Java!',
        description: 'Should print "Hello, Java!"'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Java Principles',
    description: 'Which of the following is not a pillar of OOP in Java?',
    options: ['Encapsulation', 'Inheritance', 'Compilation', 'Polymorphism'],
    correctAnswers: [2],
    hints: ['Think about the core concepts like Abstraction, Encapsulation...']
  },
  {
    id: 4,
    type: 'theory',
    title: 'Java Package',
    description: 'Which keyword is used to import a package in Java?',
    options: ['include', 'using', 'import', 'package'],
    correctAnswers: [2],
    hints: ['It is the same keyword as in Python or JavaScript.']
  },
  {
    id: 5,
    type: 'blanks',
    title: 'Variable Declaration',
    description: 'Declare an integer variable named "score" with value 100.',
    initialCode: '___ score = 100;',
    correctAnswers: ['int'],
    hints: ['The basic type for integers.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Addition of Numbers',
    description: 'Print the sum of 5 and 7. Output: "12".',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    // Print 5 + 7\n  }\n}',
    testCases: [
      {
        expectedOutput: '12',
        description: 'Should print 12'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'JRE vs JDK',
    description: 'What does JDK stand for in Java?',
    options: ['Java Runtime Environment', 'Java Development Kit', 'Java Deployment Key', 'Just Digital Knowledge'],
    correctAnswers: [1],
    hints: ['It contains JRE and development tools.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Garbage Collection',
    description: 'Who is responsible for memory management and garbage collection in Java?',
    options: ['The programmer', 'The Operating System', 'The JVM', 'The hardware'],
    correctAnswers: [2],
    hints: ['Java Virtual Machine handles this automatically.']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Printing to Console',
    description: 'Complete the statement to print "Hello".',
    initialCode: 'System.out.___("Hello");',
    correctAnswers: ['println'],
    hints: ['Prints a line.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'String Length',
    description: 'Given String s = "Java", print its length. output: "4".',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    String s = "Java";\n    // Print s.length()\n  }\n}',
    testCases: [
      {
        expectedOutput: '4',
        description: 'Should print 4'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'Final Keyword',
    description: 'What is the purpose of the "final" keyword when applied to a variable?',
    options: ['It makes the variable private', 'It makes the variable a constant', 'It makes the variable static', 'It deletes the variable'],
    correctAnswers: [1],
    hints: ['The value cannot be changed once assigned.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Inheritance in Java',
    description: 'Which keyword is used by a class to inherit from another class?',
    options: ['implements', 'extends', 'inherits', 'derives'],
    correctAnswers: [1],
    hints: ['A class EXTENDS another class.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Boolean Literal',
    description: 'Keyword for truth in Java.',
    initialCode: 'boolean isWorking = ___;',
    correctAnswers: ['true'],
    hints: ['Opposite of false.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'Multiplication Table',
    description: 'Print 2 * 1 = 2.',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    // Print exactly: 2 * 1 = 2\n  }\n}',
    testCases: [
      {
        expectedOutput: '2 * 1 = 2',
        description: 'Should print 2 * 1 = 2'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'Access Modifiers',
    description: 'Which access modifier makes a member accessible only within the same package?',
    options: ['public', 'private', 'protected', 'default (no keyword)'],
    correctAnswers: [3],
    hints: ['It is also known as package-private.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Constructors',
    description: 'Can a constructor have a return type in Java?',
    options: ['Yes, int', 'Yes, void', 'No', 'Only if it returns an object'],
    correctAnswers: [2],
    hints: ['Constructors do not return anything, not even void.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'New Instance',
    description: 'Keyword to create a new object.',
    initialCode: 'MyClass obj = ___ MyClass();',
    correctAnswers: ['new'],
    hints: ['Used for instantiation.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'Array Initialization',
    description: 'Create an int array {1, 2, 3} and print the first element. output: "1".',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    int[] arr = {1, 2, 3};\n    // print arr[0]\n  }\n}',
    testCases: [
      {
        expectedOutput: '1',
        description: 'Should print 1'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Interface vs Abstract Class',
    description: 'In Java 8+, can an interface have method bodies?',
    options: ['No, never', 'Yes, using the static keyword', 'Yes, using the default keyword', 'Both static and default'],
    correctAnswers: [3],
    hints: ['Java 8 introduced default and static methods in interfaces.']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Java Exception Handling',
    description: 'Which block is always executed even if an exception occurs?',
    options: ['try', 'catch', 'finally', 'ensure'],
    correctAnswers: [2],
    hints: ['Used for cleanup code.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Looping with for',
    description: 'Complete the loop header.',
    initialCode: 'for (int i = 0; i < 5; ___) { }',
    correctAnswers: ['i++'],
    hints: ['Increment i.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'Comparison',
    description: 'If 10 > 5 print "Greater".',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    if (10 > 5) {\n      // print Greater\n    }\n  }\n}',
    testCases: [
      {
        expectedOutput: 'Greater',
        description: 'Should print Greater'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'Static Method',
    description: 'Can a static method access non-static instance variables?',
    options: ['Yes, directly', 'Yes, via "this"', 'No, never', 'Only if they are public'],
    correctAnswers: [2],
    hints: ['Static context cannot access instance context without an object reference.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'String Immutability',
    description: 'Are Strings in Java immutable?',
    options: ['Yes', 'No', 'Only if declared final', 'Depends on the JVM'],
    correctAnswers: [0],
    hints: ['Changing a string creates a new string object.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'This Keyword',
    description: 'Keyword used to refer to the current object instance.',
    initialCode: '___ .name = name;',
    correctAnswers: ['this'],
    hints: ['Self-reference in Java.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Switch Case',
    description: 'Given int x = 1, use switch to print "One".',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    int x = 1;\n    // switch(x) case 1: print One\n  }\n}',
    testCases: [
      {
        expectedOutput: 'One',
        description: 'Should print One'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Method Overriding',
    description: 'Which annotation is used to indicate that a method is overriding a parent method?',
    options: ['@Inherit', '@Override', '@Parent', '@Replace'],
    correctAnswers: [1],
    hints: ['Helps with compiler checks.']
  },
  {
    id: 28,
    type: 'theory',
    title: 'Thread Class',
    description: 'Which method is called to start a new thread in Java?',
    options: ['run()', 'start()', 'execute()', 'begin()'],
    correctAnswers: [1],
    hints: ['Calling run() executes it in the current thread instead.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Null Value',
    description: 'Keyword representing no object reference.',
    initialCode: 'String s = ___;',
    correctAnswers: ['null'],
    hints: ['Empty pointer reference.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Java Collections Framework',
    description: 'Which interface does ArrayList implement?',
    options: ['Set', 'Map', 'List', 'Stack'],
    correctAnswers: [2],
    hints: ['It maintains an ordered collection of elements.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Wrapper Classes',
    description: 'What is the wrapper class for "int"?',
    options: ['Int', 'Integer', 'IntWrapper', 'Number'],
    correctAnswers: [1],
    hints: ['Starts with "I" and ends with "r".']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Interface Methods',
    description: 'Prior to Java 8, could interfaces have method bodies?',
    options: ['Yes', 'No', 'Only if static', 'Only if final'],
    correctAnswers: [1],
    hints: ['Java 8 introduced default and static methods in interfaces.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Constructor invocation',
    description: 'Keyword to call a constructor of the same class.',
    initialCode: 'public A() {\n  ___(10);\n}',
    correctAnswers: ['this'],
    hints: ['Must be the first statement.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Encapsulation',
    description: 'Which concept involves hiding data and showing only functionality?',
    options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
    correctAnswers: [2],
    hints: ['Uses private fields and public getters/setters.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Final keyword',
    description: 'What happens if a class is marked as "final"?',
    options: ['It cannot be instantiated', 'It cannot be inherited', 'It must have a main method', 'It is automatically static'],
    correctAnswers: [1],
    hints: ['Example: String class is final.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Math Power',
    description: 'Use Math.pow() to print 2^3. Output: "8.0".',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    // System.out.println\n  }\n}',
    testCases: [
      {
        expectedOutput: '8.0',
        description: 'Should print 8.0'
      }
    ]
  },
  {
    id: 37,
    type: 'theory',
    title: 'Garbage Collection',
    description: 'Can you force the JVM to run garbage collection immediately?',
    options: ['Yes, using System.gc()', 'No, it\'s only a request', 'Yes, using finalize()', 'Java doesn\'t have GC'],
    correctAnswers: [1],
    hints: ['System.gc() only suggests to the JVM that it should run.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Super keyword',
    description: 'What is "super" used for?',
    options: ['To create a new object', 'To refer to immediate parent class object', 'To exit a loop', 'To make a class public'],
    correctAnswers: [1],
    hints: ['Often used to call parent constructors or methods.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Package declaration',
    description: 'Keyword for defining a package.',
    initialCode: '___ com.edu.quiz;',
    correctAnswers: ['package'],
    hints: ['Usually the first line of the file.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'String length',
    description: 'Print length of "JavaLang". output: "8".',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    String s = "JavaLang";\n    System.out.println(s.length());\n  }\n}',
    testCases: [
      {
        expectedOutput: '8',
        description: 'Should print 8'
      }
    ]
  },
  {
    id: 41,
    type: 'theory',
    title: 'Abstract Class',
    description: 'Can an abstract class have a constructor?',
    options: ['Yes', 'No', 'Only if it has no abstract methods', 'Only in Java 17+'],
    correctAnswers: [0],
    hints: ['It is called when a concrete subclass is instantiated.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Checked Exceptions',
    description: 'Which of these is a checked exception?',
    options: ['NullPointerException', 'IOException', 'ArithmeticException', 'ArrayIndexOutOfBoundsException'],
    correctAnswers: [1],
    hints: ['Must be either caught or declared in throws.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Implements keyword',
    description: 'Keyword used by a class to use an interface.',
    initialCode: 'class A ___ Runnable { }',
    correctAnswers: ['implements'],
    hints: ['Used for interfaces.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Array Sort',
    description: 'Sort [3, 1, 2] and print. output: "[1, 2, 3]".',
    initialCode: 'import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    int[] a = {3, 1, 2};\n    Arrays.sort(a);\n    System.out.println(Arrays.toString(a));\n  }\n}',
    testCases: [
      {
        expectedOutput: '[1, 2, 3]',
        description: 'Should print sorted array'
      }
    ]
  },
  {
    id: 45,
    type: 'theory',
    title: 'Static Method',
    description: 'Can a static method access non-static instance variables directly?',
    options: ['Yes', 'No', 'Only if they are public', 'Only if they are final'],
    correctAnswers: [1],
    hints: ['Static context cannot reference non-static variables.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'JRE',
    description: 'What does JRE stand for?',
    options: ['Java Runtime Engine', 'Java Runtime Environment', 'Java Remote Execution', 'Just Real-time Environment'],
    correctAnswers: [1],
    hints: ['Includes the JVM and core libraries.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Generic Type',
    description: 'Diamond operator for type inference.',
    initialCode: 'List<String> l = new ArrayList___();',
    correctAnswers: ['<>'],
    hints: ['Angle brackets with nothing inside.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Boolean Check',
    description: 'Print "Yes" if 10 > 5.',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    if (10 > 5) System.out.print("Yes");\n  }\n}',
    testCases: [
      {
        expectedOutput: 'Yes',
        description: 'Should print Yes'
      }
    ]
  },
  {
    id: 49,
    type: 'theory',
    title: 'Thread Class',
    description: 'Which method starts the execution of a thread?',
    options: ['run()', 'start()', 'execute()', 'init()'],
    correctAnswers: [1],
    hints: ['Calling run() directly doesn\'t start a new thread.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Synchronization',
    description: 'What is the purpose of the "synchronized" keyword?',
    options: ['To speed up threads', 'To prevent multiple threads from accessing a block simultaneously', 'To connect to a database', 'To stop a thread'],
    correctAnswers: [1],
    hints: ['Used for thread safety.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Assertion',
    description: 'Keyword for creating an assertion.',
    initialCode: '___ x > 0 : "Must be positive";',
    correctAnswers: ['assert'],
    hints: ['Used for debugging.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'StringBuilder',
    description: 'Append "A" and "B" using StringBuilder and print.',
    initialCode: 'public class Main {\n  public static void main(String[] args) {\n    StringBuilder sb = new StringBuilder();\n    sb.append("A").append("B");\n    System.out.println(sb.toString());\n  }\n}',
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
    title: 'Transient keyword',
    description: 'What does "transient" do to a variable?',
    options: ['Makes it static', 'Prevents it from being serialized', 'Makes it accessible globally', 'Hides it from subclasses'],
    correctAnswers: [1],
    hints: ['Value will not be saved during serialization.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Enum constructor',
    description: 'Are enum constructors in Java implicitly private?',
    options: ['Yes', 'No', 'Depends on access modifier', 'Enums don\'t have constructors'],
    correctAnswers: [0],
    hints: ['They cannot be invoked from outside the enum.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Annotation',
    description: 'Symbol used before an annotation.',
    initialCode: '___Override\npublic void run() {}',
    correctAnswers: ['@'],
    hints: ['At symbol.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Scanner usage',
    description: 'Create scanner for String "test", print first word.',
    initialCode: 'import java.util.Scanner;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner s = new Scanner("test");\n    System.out.print(s.next());\n  }\n}',
    testCases: [
      {
        expectedOutput: 'test',
        description: 'Should print test'
      }
    ]
  },
  {
    id: 57,
    type: 'theory',
    title: 'Polymorphism',
    description: 'What is method overloading an example of?',
    options: ['Dynamic Polymorphism', 'Static Polymorphism', 'Inheritance', 'Abstraction'],
    correctAnswers: [1],
    hints: ['Decided at compile time.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Autoboxing',
    description: 'What is automatic conversion from primitive to wrapper class called?',
    options: ['Unboxing', 'Autoboxing', 'Casting', 'Wrapping'],
    correctAnswers: [1],
    hints: ['Integer i = 10;']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Module info',
    description: 'File name for Java module system (Java 9+).',
    initialCode: '___-info.java',
    correctAnswers: ['module'],
    hints: ['Defines module dependencies.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Java Platform',
    description: 'Which edition of Java is used for enterprise applications?',
    options: ['Java SE', 'Java EE / Jakarta EE', 'Java ME', 'Java FX'],
    correctAnswers: [1],
    hints: ['Includes EJB, JSP, Servlets.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Interface vs Abstract Class',
    description: 'Which can have instance variables (non-static)?',
    options: ['Interface', 'Abstract Class', 'Both', 'Neither'],
    correctAnswers: [1],
    hints: ['Interfaces can only have static final constants.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Wrapper Classes',
    description: 'What is the wrapper class for "int"?',
    options: ['Int', 'Integer', 'IntWrapper', 'Number'],
    correctAnswers: [1],
    hints: ['Starts with a capital letter and full name.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Final keyword',
    description: 'Keyword to prevent a class from being inherited.',
    initialCode: 'public ___ class MyClass { }',
    correctAnswers: ['final'],
    hints: ['Also used for constants and preventing method overriding.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Static method access',
    description: 'Can a static method access a non-static variable directly?',
    options: ['Yes', 'No', 'Only if the variable is public', 'Only in Java 8+'],
    correctAnswers: [1],
    hints: ['Static context cannot access instance context without an object reference.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Exception Hierarchy',
    description: 'What is the root class for all exceptions in Java?',
    options: ['Exception', 'Throwable', 'Error', 'Object'],
    correctAnswers: [1],
    hints: ['Under which Exception and Error reside.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Array length',
    description: 'Get length of array int[] a.',
    initialCode: 'int[] a = {1, 2};\nint len = a.___',
    correctAnswers: ['length'],
    hints: ['It is a property for arrays, not a method.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Generics',
    description: 'What symbol is used for Generics in Java?',
    options: ['[ ]', '( )', '< >', '{ }'],
    correctAnswers: [2],
    hints: ['Angle brackets.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Garbage Collection',
    description: 'How do you explicitly destroy an object in Java?',
    options: ['Using delete keyword', 'By setting it to null and waiting for GC', 'Calling destroy()', 'It is not possible'],
    correctAnswers: [3],
    hints: ['Development cannot force object destruction.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Constructor',
    description: 'Does a constructor have a return type?',
    initialCode: 'public User() { } // returns ___?',
    correctAnswers: ['no'],
    hints: ['Not even void.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'String concat',
    description: 'Join "A" and "B".',
    initialCode: 'String s = "A" ___ "B";',
    correctAnswers: ['+'],
    hints: ['Overloaded operator for strings.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Method Overloading',
    description: 'What identifies method overloading?',
    options: ['Different return types', 'Different number/type of parameters', 'Different names', 'Different access modifiers'],
    correctAnswers: [1],
    hints: ['Same name, different signature.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Pass by value',
    description: 'Is Java "pass-by-value" or "pass-by-reference"?',
    options: ['Always pass-by-value', 'Always pass-by-reference', 'Depends on type', 'Both'],
    correctAnswers: [0],
    hints: ['References are passed by value.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Package',
    description: 'First statement in a Java file to group related classes.',
    initialCode: '___ com.myapp;',
    correctAnswers: ['package'],
    hints: ['Matches the directory path.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Main function',
    description: 'Complete the main method signature.',
    initialCode: 'public static void main(___[] args)',
    correctAnswers: ['String'],
    hints: ['Array of command line arguments.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Encapsulation',
    description: 'Which principle involves hiding internal details and showing only functionality?',
    options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
    correctAnswers: [2],
    hints: ['Uses private fields and public getters/setters.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Super keyword',
    description: 'What is the purpos of "super"?',
    options: ['To create a new object', 'To refer to immediate parent class object', 'To exit a function', 'To speed up code'],
    correctAnswers: [1],
    hints: ['Can call parent constructor or methods.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Synchronization',
    description: 'Keyword to prevent multiple threads from accessing a method simultaneously.',
    initialCode: 'public ___ void update() { }',
    correctAnswers: ['synchronized'],
    hints: ['Used for thread safety.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Cast type',
    description: 'Cast double d to int.',
    initialCode: 'double d = 1.9;\nint i = (___) d;',
    correctAnswers: ['int'],
    hints: ['Explicit narrowing conversion.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'ArrayList vs Vector',
    description: 'What is a major difference?',
    options: ['ArrayList is synchronized', 'Vector is synchronized', 'ArrayList is slower', 'No difference'],
    correctAnswers: [1],
    hints: ['Vector is thread-safe, ArrayList is not.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'String constant pool',
    description: 'Where are string literals stored in memory?',
    options: ['Stack', 'Heap (in String Constant Pool)', 'System RAM', 'Cache'],
    correctAnswers: [1],
    hints: ['Optimizes memory for identical string values.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Throws keyword',
    description: 'Keyword used in method signature to declare that it may throw exceptions.',
    initialCode: 'void run() ___ IOException { }',
    correctAnswers: ['throws'],
    hints: ['Used for checked exceptions.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Boolean check',
    description: 'Print "Yes" if boolean b is true.',
    initialCode: 'if (b) System.out.___ ("Yes");',
    correctAnswers: ['print'],
    hints: ['Standard output method.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Reflection',
    description: 'What is Java Reflection API?',
    options: ['Drawing icons', 'Ability to inspect or modify runtime behavior of applications', 'Database connectivity', 'User interface design'],
    correctAnswers: [1],
    hints: ['Allows creating instances at runtime based on string names.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Functional Interface',
    description: 'What is a functional interface (Java 8+)?',
    options: ['An interface with many methods', 'An interface with exactly one abstract method', 'A private interface', 'A faster interface'],
    correctAnswers: [1],
    hints: ['Annotated with @FunctionalInterface. Can be used with Lambdas.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Lambda expression',
    description: 'Arrow symbol used in Lambdas.',
    initialCode: '() ___ System.out.println("hi")',
    correctAnswers: ['->'],
    hints: ['Hyphen and greater than.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Stream filter',
    description: 'Filter list for items > 5.',
    initialCode: 'list.stream().___ (x -> x > 5)',
    correctAnswers: ['filter'],
    hints: ['Standard stream operation.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Transient keyword',
    description: 'What does "transient" do?',
    options: ['Speeds up execution', 'Prevents a field from being serialized', 'Marks a field as private', 'Saves a field to disk'],
    correctAnswers: [1],
    hints: ['Good for temporary or sensitive data.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Volatile keyword',
    description: 'What is the purpose of "volatile" in multi-threading?',
    options: ['To stop a thread', 'To ensure that a variable is always read from main memory', 'To encrypt a variable', 'To hide a variable'],
    correctAnswers: [1],
    hints: ['Solves visibility issues in concurrent tasks.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Import',
    description: 'Keyword to use classes from other packages.',
    initialCode: '___ java.util.*;',
    correctAnswers: ['import'],
    hints: ['Appears after package declaration.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'Java Creator',
    description: 'Who is the father of Java?',
    options: ['James Gosling', 'Bjarne Stroustrup', 'Dennis Ritchie', 'Bill Joy'],
    correctAnswers: [0],
    hints: ['Created it at Sun Microsystems.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Wrapper Classes',
    description: 'What is autoboxing in Java?',
    options: ['Boxing in a UI', 'Automatic conversion of primitive types to their corresponding wrapper classes', 'Hidden class', 'None'],
    correctAnswers: [1],
    hints: ['Example: int to Integer.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Functional Interfaces',
    description: 'What is a functional interface?',
    options: ['Interface with many methods', 'Interface with exactly one abstract method', 'Interface for math', 'None'],
    correctAnswers: [1],
    hints: ['Annotated with @FunctionalInterface.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Lambda syntax',
    description: 'Operator used in lambda expressions.',
    initialCode: '(x, y) ___ x + y',
    correctAnswers: ['->'],
    hints: ['Thin arrow.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Streams API',
    description: 'What is the purpose of the Java Streams API?',
    options: ['Watching videos', 'Processing sequences of elements in a functional style', 'Reading files only', 'None'],
    correctAnswers: [1],
    hints: ['Introduced in Java 8.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Optional class',
    description: 'What is the purpose of java.util.Optional?',
    options: ['To make code optional', 'To avoid NullPointerExceptions by representing null as an object', 'To store extra data', 'None'],
    correctAnswers: [1],
    hints: ['Container object which may or may not contain a non-null value.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'List creation',
    description: 'Create a list of strings.',
    initialCode: 'List<String> list = new ___<>();',
    correctAnswers: ['ArrayList'],
    hints: ['Resizable-array implementation of the List interface.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Java Generics',
    description: 'What is Type Erasure?',
    options: ['Deleting all code', 'Process where the compiler removes all information related to type parameters and type arguments within a class or method', 'Hiding types', 'None'],
    correctAnswers: [1],
    hints: ['Ensures backward compatibility with older Java versions.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Java Modules (Project Jigsaw)',
    description: 'Which Java version introduced the module system?',
    options: ['Java 7', 'Java 8', 'Java 9', 'Java 11'],
    correctAnswers: [2],
    hints: ['Uses module-info.java.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Var keyword',
    description: 'Keyword for local variable type inference (Java 10+).',
    initialCode: '___ name = "Java";',
    correctAnswers: ['var'],
    hints: ['Compiler infers the type based on the value.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Check type',
    description: 'Check if obj is an instance of String.',
    initialCode: 'if (obj ___ String) { ... }',
    correctAnswers: ['instanceof'],
    hints: ['Operator to compare an object with a type.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'SerialVersionUID',
    description: 'What is serialVersionUID used for?',
    options: ['To identify the version of a serializable class', 'To speed up code', 'To encrypt data', 'None'],
    correctAnswers: [0],
    hints: ['Ensures that the same class is used during deserialization.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Java RMI',
    description: 'What does RMI stand for?',
    options: ['Remote Method Invocation', 'Real Memory Index', 'Remote Module Interface', 'None'],
    correctAnswers: [0],
    hints: ['Allows an object to invoke methods on an object running in another JVM.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Throw keyword',
    description: 'Keyword to explicitly throw an exception.',
    initialCode: 'if (error) ___ new Exception();',
    correctAnswers: ['throw'],
    hints: ['Followed by an instance of a Throwable class.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Print formatted',
    description: 'Print "Val: 10" using System.out.',
    initialCode: 'System.out.___("Val: %d", 10);',
    correctAnswers: ['printf'],
    hints: ['Similar to C\'s printf.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'JIT Compiler',
    description: 'What does JIT stand for?',
    options: ['Just In Time', 'Jump Internal Token', 'Java Internal Transformer', 'None'],
    correctAnswers: [0],
    hints: ['Compiles bytecode into native machine code at runtime.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'JDBC',
    description: 'What is JDBC used for?',
    options: ['Drawing graphs', 'Connecting and executing queries on a database', 'Building UI', 'None'],
    correctAnswers: [1],
    hints: ['Java Database Connectivity.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Finalize method',
    description: 'Deprecated method called by the garbage collector before an object is destroyed.',
    initialCode: '@Override protected void ___() { }',
    correctAnswers: ['finalize'],
    hints: ['Should be avoided; use try-with-resources or cleaners instead.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Add to map',
    description: 'Add key "k" and value "v" to map.',
    initialCode: 'map.___("k", "v");',
    correctAnswers: ['put'],
    hints: ['Associates the specified value with the specified key in the map.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'JavaFX',
    description: 'What is JavaFX?',
    options: ['A library for math', 'A software platform for creating desktop and rich internet applications', 'A database', 'None'],
    correctAnswers: [1],
    hints: ['Replacement for Swing.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Volatile keyword',
    description: 'What does "volatile" ensure in multi-threaded Java?',
    options: ['Speed', 'Visibility of changes to variables across threads', 'Mutual exclusion', 'None'],
    correctAnswers: [1],
    hints: ['Reads and writes are done to main memory directly.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Synchronized block',
    description: 'Keyword to lock an object for exclusive access.',
    initialCode: '___(this) { ... }',
    correctAnswers: ['synchronized'],
    hints: ['Prevents thread interference and memory consistency errors.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'String length',
    description: 'Get length of string s.',
    initialCode: 'int len = s.___();',
    correctAnswers: ['length'],
    hints: ['Note the parentheses; it\'s a method, not a property.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Maven/Gradle',
    description: 'What are Maven and Gradle?',
    options: ['Java IDEs', 'Build automation and dependency management tools', 'Operating systems', 'None'],
    correctAnswers: [1],
    hints: ['Standard tools in the Java ecosystem.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Enums in Java',
    description: 'Can Java enums have constructors?',
    options: ['Yes', 'No', 'Only if private', 'Only in Java 17+'],
    correctAnswers: [0],
    hints: ['Constructors for enums must be private.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Abstract keyword',
    description: 'Keyword for a class that cannot be instantiated.',
    initialCode: 'public ___ class Vehicle { }',
    correctAnswers: ['abstract'],
    hints: ['May contain abstract methods.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Array access',
    description: 'Access first element of array arr.',
    initialCode: 'int x = arr[___];',
    correctAnswers: ['0'],
    hints: ['Java arrays are zero-indexed.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Java Collections: Queue',
    description: 'Which interface follows First-In-First-Out (FIFO)?',
    options: ['Stack', 'Queue', 'List', 'Set'],
    correctAnswers: [1],
    hints: ['Elements are added at the end and removed from the front.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Garbage Collection: G1',
    description: 'What is the G1 Garbage Collector optimized for?',
    options: ['Small heaps', 'Large heaps with low pause time goals', 'Single-core CPUs', 'None'],
    correctAnswers: [1],
    hints: ['Garbage-First collector.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Package declaration',
    description: 'Keyword for grouping classes into namespaces.',
    initialCode: '___ com.myapp.utils;',
    correctAnswers: ['package'],
    hints: ['Appears at the very top of a Java file.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'Java Creator',
    description: 'Who is known as the father of Java?',
    options: ['James Gosling', 'Bjarne Stroustrup', 'Dennis Ritchie', 'Bill Joy'],
    correctAnswers: [0],
    hints: ['He created Java while working at Sun Microsystems.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Wrapper Classes',
    description: 'Which of the following is the wrapper class for the "char" primitive?',
    options: ['Char', 'Character', 'String', 'None'],
    correctAnswers: [1],
    hints: ['Primitives are not objects, but wrappers are.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Autoboxing',
    description: 'What is autoboxing in Java?',
    options: ['Automatically packaging a JAR file', 'Automatic conversion between primitive types and their corresponding wrapper classes', 'Using boxes to layout UI', 'None'],
    correctAnswers: [1],
    hints: ['Example: Integer x = 5;']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Final keyword',
    description: 'Keyword to prevent a class from being subclassed.',
    initialCode: 'public ___ class MyFinalClass { }',
    correctAnswers: ['final'],
    hints: ['Also used for constants and methods.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Interface: Default methods',
    description: 'Can interfaces have method implementations in modern Java (8+)?',
    options: ['Yes, using the "default" keyword', 'No', 'Only for static methods', 'Only in subclasses'],
    correctAnswers: [0],
    hints: ['Allows adding new methods to interfaces without breaking implementing classes.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Java Beans',
    description: 'What is a Java Bean?',
    options: ['A type of coffee', 'A reusable software component that follows specific conventions (private fields, getters/setters)', 'A database table', 'A graphics object'],
    correctAnswers: [1],
    hints: ['Must be serializable and have a nullary constructor.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'ArrayList Add',
    description: 'Add "Hello" to ArrayList<String> list.',
    initialCode: 'ArrayList<String> list = new ArrayList<>();\nlist.___ ("Hello");',
    correctAnswers: ['add'],
    hints: ['Standard collection method.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Check type',
    description: 'Which operator is used to check if an object is an instance of a specific class?',
    options: ['is', 'typeof', 'instanceof', 'typeCheck'],
    correctAnswers: [2],
    hints: ['Returns a boolean value.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Try with resources',
    description: 'What is the "try-with-resources" statement used for?',
    options: ['To try several resources at once', 'To automatically close objects that implement AutoCloseable', 'To improve code performance', 'None'],
    correctAnswers: [1],
    hints: ['Introduced in Java 7.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Access modifier',
    description: 'Access modifier that makes a member visible only within its own package and subclasses.',
    initialCode: '___ String name;',
    correctAnswers: ['protected'],
    hints: ['Less restrictive than private but more than default (package-private).']
  },
  {
    id: 130,
    type: 'coding',
    title: 'Array length',
    description: 'Get the length of an array int[] nums.',
    initialCode: 'int[] nums = {1, 2, 3};\nint len = nums.___ ;',
    correctAnswers: ['length'],
    hints: ['It is a final field of an array, not a method.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'StringBuilder vs String',
    description: 'Why use StringBuilder instead of String for frequent modifications?',
    options: ['Strings are faster', 'String objects are immutable; modifying them creates new objects, whereas StringBuilder is mutable.', 'StringBuilder is thread-safe', 'None'],
    correctAnswers: [1],
    hints: ['Reduces memory allocation overhead.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Serialization',
    description: 'What is the purpose of the "Serializable" interface?',
    options: ['To sort data', 'To convert an object into a byte stream and vice-versa', 'To make objects immutable', 'None'],
    correctAnswers: [1],
    hints: ['It is a marker interface (no methods).']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Constructor this()',
    description: 'Keyword to call another constructor in the same class.',
    initialCode: 'public User() {\n    ___ ("Guest");\n}',
    correctAnswers: ['this'],
    hints: ['Must be the first statement in the constructor.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'String concat',
    description: 'Concatenate strings "a" and "b".',
    initialCode: 'String s = "a".___ ("b");',
    correctAnswers: ['concat'],
    hints: ['Can also use the + operator.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'The "volatile" keyword',
    description: 'What is the "volatile" keyword used for in Java?',
    options: ['To make a variable constant', 'To signal that a variable\'s value will be modified by different threads', 'To hide a variable', 'None'],
    correctAnswers: [1],
    hints: ['Ensures visibility of changes to variables across threads.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Atomic Classes',
    description: 'Which package contains classes for lock-free, thread-safe programming on single variables?',
    options: ['java.util', 'java.util.concurrent.atomic', 'java.io', 'java.lang.reflect'],
    correctAnswers: [1],
    hints: ['Classes like AtomicInteger, AtomicBoolean.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Functional Interfaces',
    description: 'What defines a functional interface in Java?',
    options: ['It has many methods', 'It has exactly one abstract method', 'It only has static methods', 'It is used for graphics'],
    correctAnswers: [1],
    hints: ['Can be used as the assignment target for a lambda expression.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Lambda syntax',
    description: 'The operator used to separate parameters from the body in a lambda.',
    initialCode: '(x, y) ___ x + y',
    correctAnswers: ['->'],
    hints: ['A hyphen and a greater-than sign.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Stream Filter',
    description: 'Filter a list for strings starting with "A".',
    initialCode: 'list.stream().___ (s -> s.startsWith("A"))',
    correctAnswers: ['filter'],
    hints: ['Common stream operation.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Optional Class',
    description: 'What is the purpose of the "Optional" class introduced in Java 8?',
    options: ['To speed up code', 'To provide a container object which may or may not contain a non-null value, helping avoid NullPointerExceptions', 'To make variables public', 'None'],
    correctAnswers: [1],
    hints: ['Encourages better handling of potentially null values.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'JVM vs JRE vs JDK',
    description: 'Which one is required to only RUN Java applications?',
    options: ['JDK', 'JRE', 'JVM', 'Both JRE and JVM'],
    correctAnswers: [1],
    hints: ['Java Runtime Environment.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Enum keyword',
    description: 'Keyword to define a fixed set of constants.',
    initialCode: 'public ___ Day { MON, TUE, WED }',
    correctAnswers: ['enum'],
    hints: ['Special type of class.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'System output',
    description: 'Print "Success" to the console.',
    initialCode: 'System.out.___ ("Success");',
    correctAnswers: ['println'],
    hints: ['Short for print-line.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Inner Classes',
    description: 'What is an inner class in Java?',
    options: ['A class defined inside another class', 'A class with only private methods', 'A class that is hidden from the user', 'None'],
    correctAnswers: [0],
    hints: ['Can access private members of the outer class.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Transient keyword',
    description: 'What happens to a member variable marked as "transient" during serialization?',
    options: ['It is encrypted', 'It is not serialized (its value is not saved)', 'It is made public', 'It is deleted'],
    correctAnswers: [1],
    hints: ['Used for sensitive data or non-serializable fields.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Main method',
    description: 'Standard signature of the entry point method.',
    initialCode: 'public static ___ main(String[] args)',
    correctAnswers: ['void'],
    hints: ['Does not return any value.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Map Get',
    description: 'Get value for key "ID" from HashMap map.',
    initialCode: 'String val = map.___ ("ID");',
    correctAnswers: ['get'],
    hints: ['Standard map lookup method.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Reflection',
    description: 'What is the Reflection API used for?',
    options: ['To duplicate objects', 'To inspect or modify the runtime behavior of applications', 'To improve code readability', 'None'],
    correctAnswers: [1],
    hints: ['Provides access to metadata about classes and objects.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Checked vs Unchecked Exceptions',
    description: 'Which one must be explicitly caught or declared in the throws clause?',
    options: ['Checked Exceptions', 'Unchecked Exceptions', 'Both', 'Neither'],
    correctAnswers: [0],
    hints: ['Exceptions like IOException or SQLException.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Super keyword',
    description: 'Keyword used to refer to the immediate parent class object.',
    initialCode: '___ .printName();',
    correctAnswers: ['super'],
    hints: ['Used to invoke parent methods or constructors.']
  }
];
