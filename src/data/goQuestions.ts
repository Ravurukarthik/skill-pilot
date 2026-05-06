import { Question } from '../types';
export const GO_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Hello World',
    description: 'Use fmt.Println() to print "Hello, Go!".',
    initialCode: 'package main\nimport "fmt"\n\nfunc main() {\n    // Write code here\n}',
    testCases: [
      {
        expectedOutput: 'Hello, Go!',
        description: 'Should print Hello, Go!'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Go Origin',
    description: 'Which company developed the Go programming language?',
    options: ['Microsoft', 'Apple', 'Google', 'Facebook'],
    correctAnswers: [2],
    hints: ['Also known as Golang.']
  },
  {
    id: 3,
    type: 'theory',
    title: 'Compilation',
    description: 'Is Go a compiled or interpreted language?',
    options: ['Compiled', 'Interpreted', 'Both', 'Neither'],
    correctAnswers: [0],
    hints: ['It compiles directly to machine code.']
  },
  {
    id: 4,
    type: 'blanks',
    title: 'Variable Declaration',
    description: 'Short variable declaration operator.',
    initialCode: 'name ___ "Go"',
    correctAnswers: [':='],
    hints: ['Colon and equals.']
  },
  {
    id: 5,
    type: 'theory',
    title: 'Go Routines',
    description: 'What is a goroutine?',
    options: ['A heavy-weight thread', 'A lightweight execution thread managed by Go runtime', 'A type of loop', 'A global variable'],
    correctAnswers: [1],
    hints: ['Enables concurrency.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Integer sum',
    description: 'Print the sum of 100 and 200. Output: "300".',
    initialCode: 'package main\nimport "fmt"\nfunc main() {\n  // Print sum\n}',
    testCases: [
      {
        expectedOutput: '300',
        description: 'Should print 300'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'Public vs Private',
    description: 'How are identifiers made public (exported) in Go?',
    options: ['Using "public" keyword', 'Starting with an Uppercase letter', 'Using an underscore', 'Using "export" prefix'],
    correctAnswers: [1],
    hints: ['Capitalization matters for visibility.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Channels',
    description: 'What are channels used for in Go?',
    options: ['HTTP requests', 'Communication between goroutines', 'Database connections', 'File I/O'],
    correctAnswers: [1],
    hints: ['They allow goroutines to synchronize and exchange data.']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Function definition',
    description: 'Keyword to declare a function.',
    initialCode: '___ calculate(a int) int { }',
    correctAnswers: ['func'],
    hints: ['Short for function.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'Length of string',
    description: 'Use len() to print length of "Golang". output: "6".',
    initialCode: 'package main\nimport "fmt"\nfunc main() {\n  s := "Golang"\n  // fmt.Print(len(s))\n}',
    testCases: [
      {
        expectedOutput: '6',
        description: 'Should print 6'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'Inheritance in Go',
    description: 'Does Go support traditional class-based inheritance?',
    options: ['Yes', 'No', 'Only through interfaces', 'Only in Go 2.0'],
    correctAnswers: [1],
    hints: ['Go uses composition and interfaces instead of classes and inheritance.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Zero Value',
    description: 'What is the zero value of an "int" in Go?',
    options: ['null', '0', 'undefined', '-1'],
    correctAnswers: [1],
    hints: ['Numerical types default to zero.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Infinite Loop',
    description: 'Keyword used for loops in Go.',
    initialCode: '___ { \n  // infinite loop\n}',
    correctAnswers: ['for'],
    hints: ['Go only has one looping construct.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'Array Slicing',
    description: 'Given s := []int{1, 2, 3}, print the second element "2".',
    initialCode: 'package main\nimport "fmt"\nfunc main() {\n  s := []int{1, 2, 3}\n  // print s[1]\n}',
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
    title: 'Pointers',
    description: 'Does Go have pointers?',
    options: ['Yes', 'No', 'Only for strings', 'Only for integers'],
    correctAnswers: [0],
    hints: ['But it doesn\'t have pointer arithmetic.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'Interfaces',
    description: 'In Go, how is an interface implemented?',
    options: ['Using "implements" keyword', 'Implicitly (by implementing the methods)', 'Using "extends"', 'Interfaces are not used in Go'],
    correctAnswers: [1],
    hints: ['If a type defines all methods of an interface, it implements it.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Struct definition',
    description: 'Keyword to define a composite record type.',
    initialCode: 'type User ___ { \n  Name string \n}',
    correctAnswers: ['struct'],
    hints: ['Short for structure.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'Map usage',
    description: 'Declare a map string to int. Set "A" to 1. Print it.',
    initialCode: 'package main\nimport "fmt"\nfunc main() {\n  m := make(map[string]int)\n  m["A"] = 1\n  fmt.Print(m["A"])\n}',
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
    title: 'Defer',
    description: 'What does the "defer" keyword do?',
    options: ['Delays function execution until the surrounding function returns', 'Exits the program', 'Runs code in a goroutine', 'Loops through an array'],
    correctAnswers: [0],
    hints: ['Commonly used for cleanup (e.g., closing files).']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Select',
    description: 'What is the "select" statement used for?',
    options: ['Choosing a database', 'Waiting on multiple channel operations', 'Switching between cases', 'Filtering slices'],
    correctAnswers: [1],
    hints: ['It\'s like a switch for channels.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Package declaration',
    description: 'First line of any Go file.',
    initialCode: '___ main',
    correctAnswers: ['package'],
    hints: ['Defines the workspace.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'Range through slice',
    description: 'Print "01" using range on []int{5, 6} (print only keys).',
    initialCode: 'package main\nimport "fmt"\nfunc main() {\n  s := []int{5, 6}\n  for k, _ := range s {\n    fmt.Print(k)\n  }\n}',
    testCases: [
      {
        expectedOutput: '01',
        description: 'Should print 01'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'Error Handling',
    description: 'How are errors typically handled in Go?',
    options: ['Exceptions (try/catch)', 'Returning an error value as the last return parameter', 'Through global error variables', 'None'],
    correctAnswers: [1],
    hints: ['if err != nil { ... } is common.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Go Modules',
    description: 'What is "go.mod" used for?',
    options: ['Binary configuration', 'Dependency management', 'Source code storage', 'Environment variables'],
    correctAnswers: [1],
    hints: ['Specifies module paths and dependencies.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Type Switch',
    description: 'Syntax for type checking in a switch.',
    initialCode: 'switch v := i.(type) ___ ',
    correctAnswers: ['{'],
    hints: ['Follows standard block syntax.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'Make slice',
    description: 'Create a slice of length 5 using make. Print its length.',
    initialCode: 'package main\nimport "fmt"\nfunc main() {\n  s := make([]int, 5)\n  fmt.Print(len(s))\n}',
    testCases: [
      {
        expectedOutput: '5',
        description: 'Should print 5'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Variadic Functions',
    description: 'How do you define a function that takes any number of int arguments?',
    options: ['func sum(nums []int)', 'func sum(nums ...int)', 'func sum(nums *int)', 'func sum(nums int...)'],
    correctAnswers: [1],
    hints: ['Uses the ellipses prefix.']
  },
  {
    id: 28,
    type: 'theory',
    title: 'Constants',
    description: 'Which value is UNACCEPTABLE for a "const" in Go?',
    options: ['Boolean', 'Floating point', 'Result of a function call at runtime', 'String'],
    correctAnswers: [2],
    hints: ['Constants must be known at compile time.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Panic',
    description: 'Function to stop natural flow and start panicking.',
    initialCode: '___("something went wrong")',
    correctAnswers: ['panic'],
    hints: ['Used for unrecoverable errors.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Go Runtime',
    description: 'What manages memory and goroutines in Go?',
    options: ['The OS', 'The Go Runtime', 'Visual Studio Code', 'JVM'],
    correctAnswers: [1],
    hints: ['It handles garbage collection and scheduling.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Interfaces',
    description: 'How are interfaces implemented in Go?',
    options: ['Explicitly using "implements" keyword', 'Implicitly (if a type defines all methods of an interface)', 'Through inheritance', 'They aren\'t supported'],
    correctAnswers: [1],
    hints: ['Sometimes called "structural typing".']
  },
  {
    id: 32,
    type: 'theory',
    title: 'GOPATH',
    description: 'What is GOPATH used for in older Go versions?',
    options: ['To store the OS paths', 'To specify the workspace location', 'To define network protocols', 'To map users'],
    correctAnswers: [1],
    hints: ['Modern Go uses Modules instead.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Public vs Private',
    description: 'How do you make a function/member exported (public) in Go?',
    initialCode: 'func ___This() { }',
    correctAnswers: ['Export'],
    hints: ['The name must start with an uppercase letter.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Defer keyword',
    description: 'When does a "defer" statement execute?',
    options: ['Immediately', 'When the surrounding function returns', 'After 5 seconds', 'In a separate thread'],
    correctAnswers: [1],
    hints: ['Useful for closing resources like files or database connections.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Select statement',
    description: 'What is "select" used for in Go?',
    options: ['Choosing a database', 'Waiting on multiple channel operations', 'A faster switch statement', 'Selecting text'],
    correctAnswers: [1],
    hints: ['Often used with goroutines and channels.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Append slice',
    description: 'Append 3 to slice []int{1, 2}.',
    initialCode: 's := []int{1, 2}\ns = ___ (s, 3)\nfmt.Println(s)',
    correctAnswers: ['append'],
    hints: ['Built-in function to grow slices.']
  },
  {
    id: 37,
    type: 'theory',
    title: 'Constant values',
    description: 'Can you use := to declare a constant?',
    options: ['Yes', 'No', 'Only for strings', 'Depends on Go version'],
    correctAnswers: [1],
    hints: ['Constants must be declared with "const".']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Maps',
    description: 'What is the syntax to create a map of string keys to int values?',
    options: ['map[string]int', 'map(string, int)', 'dict<string, int>', '{string: int}'],
    correctAnswers: [0],
    hints: ['Uses square brackets for the key type.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Panic',
    description: 'Function used to signal a fatal error that stops execution.',
    initialCode: 'if err != nil {\n  ___(err)\n}',
    correctAnswers: ['panic'],
    hints: ['Can be caught using recover().']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Check map key',
    description: 'Check if key "k" is in map m.',
    initialCode: 'm := map[string]int{"k": 1}\n_, ok := m["k"]\nif ok { fmt.Println("true") }',
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
    title: 'Pointers',
    description: 'Does Go support pointer arithmetic (like p++)?',
    options: ['Yes', 'No', 'Only with unsafe package', 'Only for arrays'],
    correctAnswers: [1],
    hints: ['Go pointers are safer than C pointers.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Zero value',
    description: 'What is the zero value of an uninitialized string?',
    options: ['nil', '"" (empty string)', 'undefined', 'null'],
    correctAnswers: [1],
    hints: ['Go variables always have a default value.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Iota',
    description: 'Keyword used in const blocks for auto-incrementing numbers.',
    initialCode: 'const (\n  A = ___\n  B\n)',
    correctAnswers: ['iota'],
    hints: ['Helps define sets of constants.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Range loop',
    description: 'Iterate slice s and print items.',
    initialCode: 's := []int{1, 2}\nfor _, v := ___ s {\n  fmt.Print(v)\n}',
    correctAnswers: ['range'],
    hints: ['Keyword to iterate over slices, maps, or channels.']
  },
  {
    id: 45,
    type: 'theory',
    title: 'Struct Tags',
    description: 'What are tags used for in Go structs?',
    options: ['Documentation only', 'Providing metadata (e.g., for JSON marshaling)', 'To specify inheritance', 'To hide fields'],
    correctAnswers: [1],
    hints: ['Usually written in backticks: `json:"name"`.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Composition',
    description: 'How does Go achieve reuse of code instead of inheritance?',
    options: ['Classes', 'Composition (struct embedding)', 'Traits', 'Macros'],
    correctAnswers: [1],
    hints: ['Embed one struct into another.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Recover',
    description: 'Function to regain control of a panicking goroutine.',
    initialCode: 'defer func() {\n  if r := ___(); r != nil { ... }\n}()',
    correctAnswers: ['recover'],
    hints: ['Must be called within a deferred function.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Go Routine',
    description: 'Start a function f in a new goroutine.',
    initialCode: '___ f()',
    correctAnswers: ['go'],
    hints: ['Smallest keyword.']
  },
  {
    id: 49,
    type: 'theory',
    title: 'Unused Variables',
    description: 'What happens if you declare a variable but do not use it in Go?',
    options: ['Warning', 'Compiler error', 'Nothing', 'Variable is deleted'],
    correctAnswers: [1],
    hints: ['Go enforces strict cleanliness.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'WaitGroups',
    description: 'What is a WaitGroup used for?',
    options: ['Pausing a loop', 'Waiting for a collection of goroutines to finish', 'Grouping network requests', 'Managing memory'],
    correctAnswers: [1],
    hints: ['Found in the sync package.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Make vs New',
    description: 'Which function is used to initialize slices, maps, and channels?',
    initialCode: 's := ___([]int, 0, 10)',
    correctAnswers: ['make'],
    hints: ['new() only allocates memory and returns a pointer.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'String Length',
    description: 'Print number of bytes in string "abc".',
    initialCode: 's := "abc"\nfmt.Println(___ (s))',
    correctAnswers: ['len'],
    hints: ['Built-in length function.']
  },
  {
    id: 53,
    type: 'theory',
    title: 'Array vs Slice',
    description: 'What is a key difference between an array and a slice in Go?',
    options: ['Array has fixed size, slice is dynamic', 'Slice is faster', 'Array uses different memory', 'No difference'],
    correctAnswers: [0],
    hints: ['Slices are just descriptors for underlying array segments.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Go Modules',
    description: 'What file defines a Go module?',
    options: ['main.go', 'go.mod', 'config.json', 'package.go'],
    correctAnswers: [1],
    hints: ['Introduced as the new standard for dependency management.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Type Switch',
    description: 'Syntax for a type switch.',
    initialCode: 'switch v := i.(type) { ___ }',
    correctAnswers: ['case int:'],
    hints: ['Uses the case keyword with a type.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Read Channel',
    description: 'Read a value from channel ch into variable x.',
    initialCode: 'x ___ ch',
    correctAnswers: ['<-'],
    hints: ['Arrow points to where data goes.']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Context Package',
    description: 'What is the "context" package used for?',
    options: ['Graphic context', 'Carrying deadlines, cancellation signals, and request-scoped values', 'Text processing', 'Database driver'],
    correctAnswers: [1],
    hints: ['Essential for handling concurrent requests.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Internal directory',
    description: 'What is special about the "internal" directory in a Go package?',
    options: ['It is faster', 'It can only be imported by packages within the same parent tree', 'It is hidden from editors', 'It contains only private variables'],
    correctAnswers: [1],
    hints: ['Mechanism for encapsulation at the package level.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Blank Identifier',
    description: 'Special variable name used to ignore values.',
    initialCode: 'val, ___ := getTwoValues()',
    correctAnswers: ['_'],
    hints: ['Underscore symbol.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Go Creator',
    description: 'Which company created Go?',
    options: ['Microsoft', 'Google', 'Facebook', 'Amazon'],
    correctAnswers: [1],
    hints: ['Developed by Robert Griesemer, Rob Pike, and Ken Thompson.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Zero Values',
    description: 'What is the zero value of a string in Go?',
    options: ['nil', '"" (empty string)', 'undefined', 'null'],
    correctAnswers: [1],
    hints: ['Go variables are initialized to a default value.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Short Variable Declaration',
    description: 'Which symbol is used for short variable declaration?',
    options: ['=', ':=', '::=', '=:'],
    correctAnswers: [1],
    hints: ['Can only be used inside functions.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Constant',
    description: 'Keyword to declare a constant.',
    initialCode: '___ MaxUsers = 100',
    correctAnswers: ['const'],
    hints: ['Values that cannot be changed.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Arrays vs Slices',
    description: 'Which one has a variable length?',
    options: ['Array', 'Slice', 'Both', 'Neither'],
    correctAnswers: [1],
    hints: ['Slices are more common in Go for dynamic data.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'The "append" function',
    description: 'What does append() return?',
    options: ['Nothing', 'A new slice containing all elements', 'The length of the slice', 'An error'],
    correctAnswers: [1],
    hints: ['Must assign the result back to a slice variable.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Slice creation',
    description: 'Create a slice of ints with length 5.',
    initialCode: 's := ___([]int, 5)',
    correctAnswers: ['make'],
    hints: ['Built-in function for allocating and initializing slices, maps, and channels.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Pointers',
    description: 'Which operator returns the memory address of a variable?',
    options: ['*', '&', '@', '$'],
    correctAnswers: [1],
    hints: ['The address-of operator.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Structs',
    description: 'How to define a struct "User" with field "Name"?',
    options: ['type User struct { Name string }', 'class User { Name string }', 'struct User { Name string }', 'type User class { Name string }'],
    correctAnswers: [0],
    hints: ['Go uses structs instead of classes.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Method Receiver',
    description: 'The variable between "func" and the method name.',
    initialCode: 'func (u User) ___() { }',
    correctAnswers: ['SayHi'],
    hints: ['Binds the function to a type.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Map creation',
    description: 'Create a map of string keys and int values.',
    initialCode: 'm := make(map[___]int)',
    correctAnswers: ['string'],
    hints: ['Key type goes inside brackets.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Interfaces',
    description: 'Does Go have explicit interface implementation (like "implements" in Java)?',
    options: ['Yes', 'No (implicitly implemented)', 'Optional', 'Only in Go 1.18+'],
    correctAnswers: [1],
    hints: ['A type implements an interface by implementing its methods.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Errors',
    description: 'What is the idiomatic way to handle errors in Go?',
    options: ['try-catch', 'Returning the error as the last return value', 'panic-recover only', 'global error variable'],
    correctAnswers: [1],
    hints: ['if err != nil { return err }']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Defer',
    description: 'Keyword to schedule a function call to run immediately before the surrounding function returns.',
    initialCode: '___ file.Close()',
    correctAnswers: ['defer'],
    hints: ['Commonly used for cleanup.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Check map key',
    description: 'Check if key "k" exists in map m.',
    initialCode: '_, ___ := m["k"]',
    correctAnswers: ['ok'],
    hints: ['The "comma ok" idiom.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Goroutines',
    description: 'How to start a goroutine?',
    options: ['thread f()', 'go f()', 'async f()', 'launch f()'],
    correctAnswers: [1],
    hints: ['Keyword for lightweight concurrent execution.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Channels',
    description: 'What are channels used for?',
    options: ['Watching TV', 'Communication and synchronization between goroutines', 'Storing data', 'Routing requests'],
    correctAnswers: [1],
    hints: ['"Don\'t communicate by sharing memory; share memory by communicating."']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Select statement',
    description: 'Statement used to wait on multiple channel operations.',
    initialCode: '___ {\n  case msg1 := <-c1: ...\n}',
    correctAnswers: ['select'],
    hints: ['Similar to switch but for channels.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Print formatted',
    description: 'Print "Val: 10" using fmt.',
    initialCode: 'fmt.___("Val: %d", 10)',
    correctAnswers: ['Printf'],
    hints: ['Formatted print.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Exported Identifiers',
    description: 'How do you export a name from a package?',
    options: ['Using export keyword', 'Capitalizing the first letter', 'Adding it to a manifest', 'Using public keyword'],
    correctAnswers: [1],
    hints: ['Names starting with uppercase letters are visible outside the package.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Panic and Recover',
    description: 'What does recover() do?',
    options: ['Crashes the app', 'Stops a panicking goroutine and returns the panic value', 'Restarts the server', 'Frees memory'],
    correctAnswers: [1],
    hints: ['Only useful inside deferred functions.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Package declaration',
    description: 'First line of a Go source file.',
    initialCode: '___ main',
    correctAnswers: ['package'],
    hints: ['Specifies which package the file belongs to.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'Range loop',
    description: 'Iterate over slice "items".',
    initialCode: 'for i, v := ___ items { ... }',
    correctAnswers: ['range'],
    hints: ['Iterates over entries in a slice, map, string, or channel.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Init function',
    description: 'What is the purpose of the init() function?',
    options: ['To start the program', 'To perform initialization before main() runs', 'To define a class', 'To clean up memory'],
    correctAnswers: [1],
    hints: ['Multiple init() functions can exist in one package.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Generics (Go 1.18+)',
    description: 'What are type constraints?',
    options: ['Fixed types', 'Interfaces that define the set of allowed types for a type parameter', 'Error messages', 'Complexity limits'],
    correctAnswers: [1],
    hints: ['Allows writing generic functions and types.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Break statement',
    description: 'Keyword to exit a loop or switch.',
    initialCode: 'if stop { ___ }',
    correctAnswers: ['break'],
    hints: ['Standard loop control.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Type cast',
    description: 'Convert int i to float64.',
    initialCode: 'f := ___(i)',
    correctAnswers: ['float64'],
    hints: ['Go requires explicit conversion for different types.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Gofmt',
    description: 'What is gofmt?',
    options: ['A testing tool', 'A tool that automatically formats Go source code', 'A network library', 'A compiler'],
    correctAnswers: [1],
    hints: ['Ensures a consistent code style across all Go projects.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Modules (go.mod)',
    description: 'What is the purpose of go.mod?',
    options: ['To store code', 'To define the module path and dependency requirements', 'To run the app', 'To document the api'],
    correctAnswers: [1],
    hints: ['Introduced as the standard dependency management system.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Fallthrough',
    description: 'Keyword used in switch to execute the next case.',
    initialCode: 'case 1:\n  f()\n  ___',
    correctAnswers: ['fallthrough'],
    hints: ['Go switch cases don\'t fall through by default.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'Go Creator',
    description: 'Which company created Go?',
    options: ['Google', 'Sun Microsystems', 'Microsoft', 'Bell Labs'],
    correctAnswers: [0],
    hints: ['Designed by Robert Griesemer, Rob Pike, and Ken Thompson.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Go Channels: Buffered',
    description: 'What is a buffered channel?',
    options: ['A channel that only holds one value', 'A channel with a capacity, allowing it to hold multiple values before blocking', 'A fast channel', 'None'],
    correctAnswers: [1],
    hints: ['Created with a capacity argument: make(chan int, 10).']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Go: select statement',
    description: 'What is the "select" statement used for?',
    options: ['Selecting database records', 'Waiting on multiple channel operations', 'Choosing a variable', 'None'],
    correctAnswers: [1],
    hints: ['Blocks until one of its cases can run.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Go panics',
    description: 'Function to stop ordinary flow of control and begin panicking.',
    initialCode: 'if err != nil { ___("Fatal error") }',
    correctAnswers: ['panic'],
    hints: ['Should be used sparingly for unrecoverable errors.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Go: recover',
    description: 'What does the "recover" function do?',
    options: ['Restarts the computer', 'Regains control of a panicking goroutine', 'Deletes data', 'None'],
    correctAnswers: [1],
    hints: ['Only useful inside deferred functions.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Go: init function',
    description: 'What is the purpose of the "init" function?',
    options: ['To start the program', 'To perform initialization logic before the main function runs', 'To load files', 'None'],
    correctAnswers: [1],
    hints: ['Each package can have multiple init functions.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Array length',
    description: 'Get length of slice s.',
    initialCode: 'l := ___(s)',
    correctAnswers: ['len'],
    hints: ['Built-in function for length.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'Go: Blank Identifier',
    description: 'What is the blank identifier in Go?',
    options: ['blank', '_ (underscore)', 'nil', 'null'],
    correctAnswers: [1],
    hints: ['Used to ignore values returned by functions.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Go: Variadic Functions',
    description: 'How to define a variadic parameter in Go?',
    options: ['args ...int', 'args []int', 'args int*', 'None'],
    correctAnswers: [0],
    hints: ['The parameter is treated as a slice inside the function.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Go string to bytes',
    description: 'Type conversion from string to byte slice.',
    initialCode: 'b := []___("hello")',
    correctAnswers: ['byte'],
    hints: ['Converts string representation to its raw bytes.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Check key in map',
    description: 'Check if key "k" is in map m.',
    initialCode: 'val, ok := m["k"]\nif ___ { ... }',
    correctAnswers: ['ok'],
    hints: ['The second return value is a boolean indicating presence.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Go Modules',
    description: 'Which file defines the module name and dependencies?',
    options: ['package.json', 'go.mod', 'manifest.xml', 'None'],
    correctAnswers: [1],
    hints: ['Introduced as the standard dependency management system.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'Go: Zero Values',
    description: 'What is the zero value for a string in Go?',
    options: ['nil', '"" (empty string)', 'undefined', 'None'],
    correctAnswers: [1],
    hints: ['Every type has a default zero value.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Pointer operator',
    description: 'Operator to get the address of a variable.',
    initialCode: 'p := ___x',
    correctAnswers: ['&'],
    hints: ['Ampersand.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Print formatted',
    description: 'Print "Val: 10" using fmt.',
    initialCode: 'fmt.___("Val: %d", 10)',
    correctAnswers: ['Printf'],
    hints: ['Standard formatting function.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Go: Constant definition',
    description: 'Can constants be arrays or slices in Go?',
    options: ['Yes', 'No (only character, string, boolean, or numeric values)', 'Only slices', 'None'],
    correctAnswers: [1],
    hints: ['Constants are fixed at compile time.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Go: Shadowing',
    description: 'What is variable shadowing?',
    options: ['Hiding a variable', 'A variable declared in an inner scope having the same name as one in an outer scope', 'Deleting a variable', 'None'],
    correctAnswers: [1],
    hints: ['Can lead to confusion and bugs.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Go type assertion',
    description: 'Syntax for type assertion from interface i to string.',
    initialCode: 's := i.(___)',
    correctAnswers: ['string'],
    hints: ['Provides access to an interface value\'s underlying concrete value.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Append to slice',
    description: 'Append 1 to slice s.',
    initialCode: 's = ___(s, 1)',
    correctAnswers: ['append'],
    hints: ['Build-in function to grow a slice.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Go: Workspace',
    description: 'What is GOPATH?',
    options: ['The location of the Go compiler', 'An environment variable that specifies the location of your workspace', 'A command line tool', 'None'],
    correctAnswers: [1],
    hints: ['Less important now with Go Modules.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Go: Struct tagging',
    description: 'What are struct tags used for?',
    options: ['Naming the struct', 'Providing metadata for fields, often used for JSON/XML encoding', 'Sorting fields', 'None'],
    correctAnswers: [1],
    hints: ['Example: `json:"name"`.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Go constant iota',
    description: 'Keyword used in constant declarations to simplify definitions of incrementing numbers.',
    initialCode: 'const (\n  A = ___\n  B\n)',
    correctAnswers: ['iota'],
    hints: ['Resets to 0 whenever the word const appears in the source code.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Range loop',
    description: 'Iterate over slice s.',
    initialCode: 'for i, v := ___ range s { ... }',
    correctAnswers: [''],
    hints: ['No keyword needed before "range" if using :=. Wait, the prompt meant the "range" keyword itself.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Go: Type Embedding',
    description: 'What is type embedding in Go?',
    options: ['Inheritance', 'A way to compose types by including one struct/interface as a field in another', 'Converting types', 'None'],
    correctAnswers: [1],
    hints: ['Promotes methods of the embedded type to the outer type.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Go: Rune',
    description: 'What is a "rune" in Go?',
    options: ['A special code', 'An alias for int32, representing a Unicode code point', 'A small string', 'None'],
    correctAnswers: [1],
    hints: ['Go source code is UTF-8.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Go interface declaration',
    description: 'Keyword to define an interface.',
    initialCode: 'type Reader ___ { Read() }',
    correctAnswers: ['interface'],
    hints: ['Defines a set of method signatures.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Close channel',
    description: 'Close channel ch.',
    initialCode: '___(ch)',
    correctAnswers: ['close'],
    hints: ['Built-in function to signal no more values will be sent.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Go: Garbage Collection Type',
    description: 'What type of Garbage Collector does Go use?',
    options: ['Reference counting', 'Concurrent Mark-and-Sweep', 'Mark-and-compact', 'None'],
    correctAnswers: [1],
    hints: ['Designed for low latency.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Go: Context package',
    description: 'What is the "context" package used for?',
    options: ['Graphics', 'Carrying deadlines, cancellation signals, and other request-scoped values across API boundaries', 'Mathematics', 'None'],
    correctAnswers: [1],
    hints: ['Commonly passed as the first argument to functions.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Go map declaration',
    description: 'Function to initialize a map.',
    initialCode: 'm := ___(map[string]int)',
    correctAnswers: ['make'],
    hints: ['Allocates and initializes memory for dynamic types.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'Go Origin',
    description: 'Where was Go developed?',
    options: ['Facebook', 'Google', 'Microsoft', 'Amazon'],
    correctAnswers: [1],
    hints: ['Designed by Robert Griesemer, Rob Pike, and Ken Thompson at Google.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Go: Zero Value',
    description: 'What is the zero value for an uninitialized int variable in Go?',
    options: ['nil', '0', 'undefined', 'None'],
    correctAnswers: [1],
    hints: ['Every type in Go has a default zero value.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Go: Goroutines',
    description: 'What keyword is used to start a new goroutine?',
    options: ['async', 'start', 'go', 'thread'],
    correctAnswers: [2],
    hints: ['A lightweight thread managed by the Go runtime.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Go: Constants',
    description: 'Keyword to declare a constant value.',
    initialCode: '___ MAX_SIZE = 100',
    correctAnswers: ['const'],
    hints: ['Cannot be reassigned after creation.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Go: Slices',
    description: 'What is a slice in Go?',
    options: ['A fixed-size array', 'A dynamically-sized, flexible view into the elements of an array', 'A linked list', 'None'],
    correctAnswers: [1],
    hints: ['More common than arrays in Go code.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Go: Error Handling',
    description: 'How are errors typically handled in Go?',
    options: ['Using try-catch blocks', 'Returning an error as the last return value from a function', 'Using global error variables', 'None'],
    correctAnswers: [1],
    hints: ['Go prefers explicit error checking.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Go: Append',
    description: 'Add element 1 to slice "s".',
    initialCode: 's = ___ (s, 1)',
    correctAnswers: ['append'],
    hints: ['Standard function to add elements to a slice.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'Go: Channels',
    description: 'What are channels used for in Go?',
    options: ['To store data in a database', 'To communicate between goroutines', 'To define network protocols', 'None'],
    correctAnswers: [1],
    hints: ['Provides a way for goroutines to synchronize and exchange data.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Go: Pointers',
    description: 'Does Go support pointer arithmetic?',
    options: ['Yes', 'No', 'Only for arrays', 'None'],
    correctAnswers: [1],
    hints: ['Pointers exist, but you cannot perform arithmetic on them like in C.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Go: Package main',
    description: 'The package name for an executable Go program.',
    initialCode: 'package ___',
    correctAnswers: ['main'],
    hints: ['The entry point for any executable script.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'Go: Length of slice',
    description: 'Get length of slice "s".',
    initialCode: 'l := ___ (s)',
    correctAnswers: ['len'],
    hints: ['Built-in function for length.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Go: Interface',
    description: 'How are interfaces implemented in Go?',
    options: ['Explicitly, using the "implements" keyword', 'Implicitly, if a type provides the methods defined by the interface', 'Using inheritance', 'None'],
    correctAnswers: [1],
    hints: ['A type satisfies an interface by implementing its methods.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Go: Public vs Private',
    description: 'How do you export a function or variable from a package in Go?',
    options: ['By using the "export" keyword', 'By starting the name with an uppercase letter', 'By using the "public" keyword', 'None'],
    correctAnswers: [1],
    hints: ['Capitalized names are visible outside the package.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Go: Range loop',
    description: 'Keyword to iterate over a slice or map.',
    initialCode: 'for i, v := ___ s { ... }',
    correctAnswers: ['range'],
    hints: ['Iterates over index and value for slices.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Go: Print formatted',
    description: 'Print "Value: 10" using fmt.',
    initialCode: 'fmt.___ ("Value: %d", x)',
    correctAnswers: ['Printf'],
    hints: ['Common formatting print function.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Go: Modules',
    description: 'What command is used to initialize a new Go module?',
    options: ['go init', 'go mod init', 'go start', 'go new'],
    correctAnswers: [1],
    hints: ['Creates a go.mod file to track dependencies.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Go: Structs',
    description: 'What is a struct in Go?',
    options: ['A built-in data type', 'A user-defined type that contains a collection of named fields', 'A type of function', 'None'],
    correctAnswers: [1],
    hints: ['Used to create complex data structures.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Go: Tags',
    description: 'What are struct tags used for in Go?',
    options: ['To add comments to fields', 'To provide metadata about fields (often used for JSON/XML encoding/decoding)', 'To speed up access to fields', 'None'],
    correctAnswers: [1],
    hints: ['Example: `json:"id"`.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Go: Defer keyword',
    description: 'Keyword to schedule a function call to be run immediately before the surrounding function returns.',
    initialCode: 'f, _ := os.Open("file.txt")\n___ f.Close()',
    correctAnswers: ['defer'],
    hints: ['Commonly used for resource cleanup.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Go: Create map',
    description: 'Create a map with string keys and int values.',
    initialCode: 'm := ___ (map[string]int)',
    correctAnswers: ['make'],
    hints: ['Initializes the map so it is ready for use.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Go: Typing',
    description: 'Is Go statically typed or dynamically typed?',
    options: ['Statically typed', 'Dynamically typed', 'Both', 'None'],
    correctAnswers: [0],
    hints: ['Types are checked at compile-time.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'Go: Panic and Recover',
    description: 'What is the purpose of "recover" in Go?',
    options: ['To stop the program', 'To regain control of a panicking goroutine', 'To delete a file', 'None'],
    correctAnswers: [1],
    hints: ['Used inside a deferred function.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Go: Blank identifier',
    description: 'Character used for variables that are not used.',
    initialCode: '___, err := someFunc()',
    correctAnswers: ['_'],
    hints: ['The underscore character.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'Go: String splitting',
    description: 'Split string by comma using strings package.',
    initialCode: 'res := strings.___ (s, ",")',
    correctAnswers: ['Split'],
    hints: ['Standard library string utility.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Go: Pointer receiver',
    description: 'Why use a pointer receiver for a method?',
    options: ['To make the method private', 'To allow the method to modify the value the receiver points to and to avoid copying the value on each method call', 'To speed up compilation', 'None'],
    correctAnswers: [1],
    hints: ['Allows updating the struct state.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Go: Iota',
    description: 'What is "iota" used for in constant declarations?',
    options: ['To create loops', 'To simplify definitions of increments numbers (0, 1, 2...)', 'To define strings', 'None'],
    correctAnswers: [1],
    hints: ['Auto-increments within a const block.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Go: Select keyword',
    description: 'Keyword used to wait on multiple channel operations.',
    initialCode: '___ {\n  case msg1 := <-c1: ...\n  case msg2 := <-c2: ...\n}',
    correctAnswers: ['select'],
    hints: ['Blocking wait until one of its cases can run.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Go: Scan input',
    description: 'Read an integer from standard input.',
    initialCode: 'var i int\nfmt.___ (&i)',
    correctAnswers: ['Scan'],
    hints: ['Reads space-separated values.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Go: Concurrency',
    description: 'What is the philosophy of Go concurrency?',
    options: ['Share memory to communicate', 'Do not communicate by sharing memory; instead, share memory by communicating', 'Use locks for everything', 'None'],
    correctAnswers: [1],
    hints: ['Promotes using channels over shared state.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Go: Vendoring',
    description: 'What does "go mod vendor" do?',
    options: ['Sells your code', 'Resets the module', 'Copies all dependencies into a vendor directory in the main module', 'None'],
    correctAnswers: [2],
    hints: ['Useful for offline builds.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Go: Type assertion',
    description: 'How do you check if an interface "i" holds a type T?',
    initialCode: 'v, ok := i.___ (T)',
    correctAnswers: ['.'],
    hints: ['Uses the dot syntax (e.g. i.(T)).']
  }
];
