import { Question } from '../types';

export const SQL_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'coding',
    title: 'Select All',
    description: 'Write a query to select all columns from the "users" table.',
    initialCode: '-- Write your SQL here\n',
    testCases: [
      {
        expectedOutput: 'SELECT * FROM users',
        description: 'Should use SELECT *'
      }
    ]
  },
  {
    id: 2,
    type: 'theory',
    title: 'Primary Key',
    description: 'What is the main purpose of a Primary Key in SQL?',
    options: [
      'To allow null values',
      'To uniquely identify each record',
      'To link two tables',
      'To speed up calculations'
    ],
    correctAnswers: [1],
    hints: ['A primary key must be unique and not null.']
  },
  {
    id: 4,
    type: 'theory',
    title: 'SQL WHERE Clause',
    description: 'Which clause is used to filter records in a SELECT statement?',
    options: ['HAVING', 'WHERE', 'ORDER BY', 'GROUP BY'],
    correctAnswers: [1],
    hints: ['It comes after the FROM clause.']
  },
  {
    id: 5,
    type: 'blanks',
    title: 'Insert Into',
    description: 'Complete the statement to add a new record to the "customers" table.',
    initialCode: 'INSERT ___ customers (name) VALUES ("RK");',
    correctAnswers: ['INTO'],
    hints: ['The keyword that follows INSERT.']
  },
  {
    id: 6,
    type: 'coding',
    title: 'Select Specific Column',
    description: 'Write a query to select the "name" column from the "students" table.',
    initialCode: '-- Write SQL\n',
    testCases: [
      {
        expectedOutput: 'SELECT name FROM students',
        description: 'Should select name column'
      }
    ]
  },
  {
    id: 7,
    type: 'theory',
    title: 'SQL Distinct',
    description: 'Which keyword is used to return only unique values?',
    options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'SINGLE'],
    correctAnswers: [1],
    hints: ['It starts with "D".']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Order By',
    description: 'Which keyword is used to sort the result-set?',
    options: ['ORDER BY', 'SORT BY', 'SEQUENCE', 'GROUP BY'],
    correctAnswers: [0],
    hints: ['It can sort ascending or descending.']
  },
  {
    id: 9,
    type: 'blanks',
    title: 'Update Statement',
    description: 'Change the age to 20 for user with id 1.',
    initialCode: 'UPDATE users ___ age = 20 WHERE id = 1;',
    correctAnswers: ['SET'],
    hints: ['Used to assign new values in an update.']
  },
  {
    id: 10,
    type: 'coding',
    title: 'Filter with WHERE',
    description: 'Select all columns where age is greater than 18 from "users".',
    initialCode: '-- Write SQL\n',
    testCases: [
      {
        expectedOutput: 'SELECT * FROM users WHERE age > 18',
        description: 'Should filter by age > 18'
      }
    ]
  },
  {
    id: 11,
    type: 'theory',
    title: 'SQL Delete',
    description: 'Which statement is used to remove data from a database?',
    options: ['REMOVE', 'DROP', 'DELETE', 'TRUNCATE'],
    correctAnswers: [2],
    hints: ['It deletes specific rows based on a condition.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'SQL NULL',
    description: 'How do you check for a NULL value in SQL?',
    options: ['= NULL', '!= NULL', 'IS NULL', 'EXISTS NULL'],
    correctAnswers: [2],
    hints: ['You use the "IS" operator.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Alias Usage',
    description: 'Rename the "customers" table as "c" in the query.',
    initialCode: 'SELECT * FROM customers ___ c;',
    correctAnswers: ['AS'],
    hints: ['Used to create an alias.']
  },
  {
    id: 14,
    type: 'coding',
    title: 'Aggregate Count',
    description: 'Count all records in the "orders" table.',
    initialCode: '-- Write SQL\n',
    testCases: [
      {
        expectedOutput: 'SELECT COUNT(*) FROM orders',
        description: 'Should use COUNT(*)'
      }
    ]
  },
  {
    id: 15,
    type: 'theory',
    title: 'Group By',
    description: 'Which clause is used with aggregate functions to group the result-set by one or more columns?',
    options: ['GROUP BY', 'SORT BY', 'CLUSTER BY', 'COLLECT BY'],
    correctAnswers: [0],
    hints: ['Often used with COUNT, MAX, SUM.']
  },
  {
    id: 16,
    type: 'theory',
    title: 'SQL Having',
    description: 'What is the purpose of the HAVING clause?',
    options: ['To filter rows before grouping', 'To filter groups after grouping', 'To sort groups', 'To join tables'],
    correctAnswers: [1],
    hints: ['It is like WHERE but for groups.']
  },
  {
    id: 17,
    type: 'blanks',
    title: 'Like Operator',
    description: 'Find names starting with "A".',
    initialCode: 'SELECT * FROM users WHERE name LIKE "___%";',
    correctAnswers: ['A'],
    hints: ['The character to search for.']
  },
  {
    id: 18,
    type: 'coding',
    title: 'SQL Between',
    description: 'Select all users with age between 20 and 30.',
    initialCode: '-- Write SQL\n',
    testCases: [
      {
        expectedOutput: 'SELECT * FROM users WHERE age BETWEEN 20 AND 30',
        description: 'Should use BETWEEN keyword'
      }
    ]
  },
  {
    id: 19,
    type: 'theory',
    title: 'Foreign Key',
    description: 'What is a Foreign Key?',
    options: ['A key that uniquely identifies a row', 'A field that refers to the Primary Key in another table', 'A key used for encryption', 'A temporary key'],
    correctAnswers: [1],
    hints: ['It establishes a relationship between two tables.']
  },
  {
    id: 20,
    type: 'theory',
    title: 'SQL Inner Join',
    description: 'What does an INNER JOIN return?',
    options: ['All rows from left table', 'All rows from right table', 'Rows that have matching values in both tables', 'All rows from both tables'],
    correctAnswers: [2],
    hints: ['It is the most common join type.']
  },
  {
    id: 21,
    type: 'blanks',
    title: 'Drop Table',
    description: 'Command to permanently remove a table named "old_data".',
    initialCode: '___ TABLE old_data;',
    correctAnswers: ['DROP'],
    hints: ['Deletes the structure and the data.']
  },
  {
    id: 22,
    type: 'coding',
    title: 'SQL In Operator',
    description: 'Select users from "London" or "Paris" using IN operator.',
    initialCode: '-- Write SQL\n',
    testCases: [
      {
        expectedOutput: 'SELECT * FROM users WHERE city IN ("London", "Paris")',
        description: 'Should use IN ("London", "Paris")'
      }
    ]
  },
  {
    id: 23,
    type: 'theory',
    title: 'SQL Union',
    description: 'What is the purpose of the UNION operator?',
    options: ['To join tables horizontally', 'To combine the result-set of two or more SELECT statements', 'To find common records', 'To multiply sets'],
    correctAnswers: [1],
    hints: ['Combines results vertically (rows must have same columns).']
  },
  {
    id: 24,
    type: 'theory',
    title: 'SQL Injection',
    description: 'What is SQL Injection?',
    options: ['A method to speed up queries', 'A security vulnerability where attackers can execute malicious SQL', 'A way to insert data automatically', 'A database optimization technique'],
    correctAnswers: [1],
    hints: ['Malicious code is "injected" into queries.']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Boolean Values',
    description: 'SQL keyword for a truthy boolean.',
    initialCode: 'UPDATE settings SET is_active = ___ WHERE id = 1;',
    correctAnswers: ['TRUE'],
    hints: ['Standard boolean value.']
  },
  {
    id: 26,
    type: 'coding',
    title: 'SQL Max value',
    description: 'Find the maximum age in "users" table.',
    initialCode: '-- Write SQL\n',
    testCases: [
      {
        expectedOutput: 'SELECT MAX(age) FROM users',
        description: 'Should use MAX aggregate'
      }
    ]
  },
  {
    id: 27,
    type: 'theory',
    title: 'Truncate vs Delete',
    description: 'What is the main difference between TRUNCATE and DELETE?',
    options: ['DELETE is faster', 'TRUNCATE can have a WHERE clause', 'TRUNCATE removes all rows and is faster (DDL), while DELETE is DML', 'There is no difference'],
    correctAnswers: [2],
    hints: ['Truncate is a structural operation that clears the table.']
  },
  {
    id: 28,
    type: 'theory',
    title: 'SQL Views',
    description: 'What is a SQL VIEW?',
    options: ['A physical table', 'A virtual table based on the result-set of an SQL statement', 'A way to see the table data visually', 'A database index'],
    correctAnswers: [1],
    hints: ['It acts like a table but doesn\'t store data itself.']
  },
  {
    id: 29,
    type: 'blanks',
    title: 'Create Database',
    description: 'Complete the statement to create a new database.',
    initialCode: '___ DATABASE school;',
    correctAnswers: ['CREATE'],
    hints: ['The basic DDL keyword for creation.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'SQL Indexes',
    description: 'What is the primary purpose of an Index in a database?',
    options: ['To save space', 'To speed up data retrieval', 'To secure the data', 'To validate input'],
    correctAnswers: [1],
    hints: ['Like an index in a book, it helps find information quickly.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'GROUP BY',
    description: 'What is the purpose of the GROUP BY statement?',
    options: ['To sort results', 'To filter rows', 'To group rows that have the same values into summary rows', 'To join tables'],
    correctAnswers: [2],
    hints: ['Often used with aggregate functions like COUNT, MAX, SUM.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'HAVING Clause',
    description: 'Why do we use HAVING instead of WHERE with aggregate functions?',
    options: ['WHERE can only filter columns, HAVING can filter groups', 'HAVING is faster', 'WHERE is for strings only', 'No reason, they are same'],
    correctAnswers: [0],
    hints: ['WHERE cannot be used with aggregate functions.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Unique constraint',
    description: 'Keyword to ensure all values in a column are different.',
    initialCode: 'CREATE TABLE Users (\n  ID int ___,\n  ...\n);',
    correctAnswers: ['UNIQUE'],
    hints: ['Self-explanatory keyword.']
  },
  {
    id: 34,
    type: 'theory',
    title: 'Self Join',
    description: 'What is a self join?',
    options: ['Joining a table to itself', 'Joining two identical tables', 'A join with no conditions', 'A join that only returns one row'],
    correctAnswers: [0],
    hints: ['Useful for hierarchical data in the same table.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'UNION vs UNION ALL',
    description: 'What is the difference between UNION and UNION ALL?',
    options: ['UNION returns distinct values, UNION ALL returns all', 'UNION ALL is faster because it doesn\'t remove duplicates', 'Both a and b', 'No difference'],
    correctAnswers: [2],
    hints: ['UNION performs an extra step to remove duplicates.']
  },
  {
    id: 36,
    type: 'coding',
    title: 'Count rows',
    description: 'Count rows in table "orders". output: "SELECT COUNT(*) FROM orders;".',
    initialCode: 'SELECT ___ FROM orders;',
    correctAnswers: ['COUNT(*)'],
    hints: ['The count aggregate function.']
  },
  {
    id: 37,
    type: 'theory',
    title: 'View',
    description: 'What is an SQL View?',
    options: ['A physical table', 'A virtual table based on the result-set of an SQL statement', 'A summary of the database', 'A visual report'],
    correctAnswers: [1],
    hints: ['It behaves like a table but doesn\'t store data itself.']
  },
  {
    id: 38,
    type: 'theory',
    title: 'Index',
    description: 'What is the main benefit of creating an index on a column?',
    options: ['Data security', 'Faster data retrieval', 'Space saving', 'Prevents null values'],
    correctAnswers: [1],
    hints: ['Trade-off is slower data insertion.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Default value',
    description: 'Keyword to provide a default value for a column.',
    initialCode: 'City varchar(255) ___ \'Unknown\'',
    correctAnswers: ['DEFAULT'],
    hints: ['English word for it.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'Distinct values',
    description: 'Get unique cities from customers table.',
    initialCode: 'SELECT ___ city FROM customers;',
    correctAnswers: ['DISTINCT'],
    hints: ['Keyword for uniqueness in SELECT.']
  },
  {
    id: 41,
    type: 'theory',
    title: 'Normalization',
    description: 'What is the goal of database normalization?',
    options: ['To increase redundancy', 'To minimize data redundancy', 'To make the database larger', 'To combine all tables into one'],
    correctAnswers: [1],
    hints: ['Involves 1NF, 2NF, 3NF etc.']
  },
  {
    id: 42,
    type: 'theory',
    title: 'Acid Properties',
    description: 'What does "Atomicity" mean in ACID?',
    options: ['Data is small', 'A transaction is "all or nothing"', 'Database is fast', 'Concurrent access is allowed'],
    correctAnswers: [1],
    hints: ['Either the whole transaction succeeds or none of it.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Column Alias',
    description: 'Keyword to rename a column in results.',
    initialCode: 'SELECT name ___ username FROM users;',
    correctAnswers: ['AS'],
    hints: ['Short two-letter word.']
  },
  {
    id: 44,
    type: 'coding',
    title: 'Greater than',
    description: 'Select products with price > 100.',
    initialCode: 'SELECT * FROM products WHERE price ___ 100;',
    correctAnswers: ['>'],
    hints: ['Standard math symbol.']
  },
  {
    id: 45,
    type: 'theory',
    title: 'Primary vs Unique key',
    description: 'Can a table have multiple PRIMARY KEYs?',
    options: ['Yes', 'No', 'Only if they are integers', 'Depends on DB engine'],
    correctAnswers: [1],
    hints: ['But it can have multiple UNIQUE keys.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Stored Procedure',
    description: 'What is a stored procedure?',
    options: ['A backup of the database', 'A prepared SQL code that you can save and reuse', 'A type of join', 'A log of all actions'],
    correctAnswers: [1],
    hints: ['Resides on the database server.']
  },
  {
    id: 47,
    type: 'blanks',
    title: 'Delete everything',
    description: 'Command to remove all records from a table without deleting the table itself.',
    initialCode: '___ TABLE Customers;',
    correctAnswers: ['TRUNCATE'],
    hints: ['Faster than DELETE and releases storage space.']
  },
  {
    id: 48,
    type: 'coding',
    title: 'Between check',
    description: 'Select products with price between 10 and 20.',
    initialCode: 'SELECT * FROM products WHERE price ___ 10 AND 20;',
    correctAnswers: ['BETWEEN'],
    hints: ['Keyword for a range of values.']
  },
  {
    id: 49,
    type: 'theory',
    title: 'Inner vs Outer Join',
    description: 'Which join returns only the matching rows from both tables?',
    options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN'],
    correctAnswers: [2],
    hints: ['The most common type of join.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'LIKE Operator',
    description: 'What does WHERE name LIKE \'a%\' match?',
    options: ['Names ending with a', 'Names starting with a', 'Names containing a', 'Names equal to a'],
    correctAnswers: [1],
    hints: ['The percent sign is a wildcard for any character.']
  },
  {
    id: 51,
    type: 'blanks',
    title: 'Insert into',
    description: 'Clause used to add values.',
    initialCode: 'INSERT INTO table (col) ___ (val);',
    correctAnswers: ['VALUES'],
    hints: ['Plural keyword.']
  },
  {
    id: 52,
    type: 'coding',
    title: 'Update data',
    description: 'Set price=50 where id=1.',
    initialCode: 'UPDATE products ___ price = 50 WHERE id = 1;',
    correctAnswers: ['SET'],
    hints: ['Used to specify new values.']
  },
  {
    id: 53,
    type: 'theory',
    title: 'Trigger',
    description: 'What is an SQL trigger?',
    options: ['A hardware button', 'A stored program that automatically executes when an event occurs', 'A dangerous command', 'A type of index'],
    correctAnswers: [1],
    hints: ['Executed on INSERT, UPDATE, or DELETE.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Foreign Key',
    description: 'What is the primary purpose of a Foreign Key?',
    options: ['To speed up queries', 'To link two tables together and enforce referential integrity', 'To encrypt data', 'To uniquely identify a row'],
    correctAnswers: [1],
    hints: ['Points to the Primary Key in another table.']
  },
  {
    id: 55,
    type: 'blanks',
    title: 'Drop Table',
    description: 'Command to permanently delete a table and its data.',
    initialCode: '___ TABLE Students;',
    correctAnswers: ['DROP'],
    hints: ['Be careful with this command.']
  },
  {
    id: 56,
    type: 'coding',
    title: 'Null check',
    description: 'Select rows where email is null.',
    initialCode: 'SELECT * FROM users WHERE email ___ NULL;',
    correctAnswers: ['IS'],
    hints: ['Cannot use = for NULL comparison.']
  },
  {
    id: 57,
    type: 'theory',
    title: 'Aggregation',
    description: 'Which function finds the highest value?',
    options: ['SUM()', 'COUNT()', 'MAX()', 'MIN()'],
    correctAnswers: [2],
    hints: ['Short for maximum.']
  },
  {
    id: 58,
    type: 'theory',
    title: 'Comment syntax',
    description: 'How do you start a single-line comment in standard SQL?',
    options: ['//', '#', '--', '/*'],
    correctAnswers: [2],
    hints: ['Double hyphen.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Check constraint',
    description: 'Constraint to limit value range in a column.',
    initialCode: 'Age int, ___ (Age >= 18)',
    correctAnswers: ['CHECK'],
    hints: ['Verifies a condition.']
  },
  {
    id: 60,
    type: 'theory',
    title: 'Subquery',
    description: 'What is a subquery?',
    options: ['A query that is slow', 'A query nested inside another query', 'A query on a subset of data', 'A query with no results'],
    correctAnswers: [1],
    hints: ['Also known as an inner query.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Normalization',
    description: 'What is the main goal of database normalization?',
    options: ['To increase data redundancy', 'To minimize data redundancy and dependency', 'To make queries slower', 'To use more disk space'],
    correctAnswers: [1],
    hints: ['Dividing large tables into smaller ones.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Primary Key',
    description: 'Can a primary key contain NULL values?',
    options: ['Yes', 'No', 'Only in some databases', 'Only if it is a string'],
    correctAnswers: [1],
    hints: ['Primary key must uniquely identify each record.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Unique constraint',
    description: 'Keyword to ensure all values in a column are different.',
    initialCode: 'CREATE TABLE Users (\n  ID int ___,\n  ...\n);',
    correctAnswers: ['UNIQUE'],
    hints: ['Similar to primary key but allows one NULL.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'Self Join',
    description: 'What is a self-join?',
    options: ['Joining a table with another table', 'Joining a table with itself', 'A join that doesn\'t work', 'Joining three tables'],
    correctAnswers: [1],
    hints: ['Used to compare rows within the same table.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Triggers',
    description: 'What is a SQL Trigger?',
    options: ['A fast query', 'A stored procedure that automatically runs when an event occurs', 'A button in the UI', 'A type of index'],
    correctAnswers: [1],
    hints: ['Can run BEFORE or AFTER INSERT/UPDATE/DELETE.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Union query',
    description: 'Combine results of two select statements (removing duplicates).',
    initialCode: 'SELECT n FROM t1\n___\nSELECT n FROM t2;',
    correctAnswers: ['UNION'],
    hints: ['Set operator for combining result sets.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'ACID Properties',
    description: 'What does "A" stand for in ACID?',
    options: ['Accuracy', 'Atomicity', 'Availability', 'Array'],
    correctAnswers: [1],
    hints: ['Ensures that each transaction is "all or nothing".']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Views',
    description: 'What is a SQL View?',
    options: ['A physical table', 'A virtual table based on the result-set of a SQL statement', 'A way to see the database structure', 'A user profile'],
    correctAnswers: [1],
    hints: ['Allows simplifying complex queries.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Truncate',
    description: 'Command to delete all rows in a table without deleting the table structure (cannot be rolled back in some DBs).',
    initialCode: '___ TABLE Logs;',
    correctAnswers: ['TRUNCATE'],
    hints: ['Faster than DELETE as it doesn\'t log individual row deletions.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Inner join',
    description: 'Join Orders and Customers on customer_id.',
    initialCode: 'SELECT * FROM Orders\n___ Customers ON Orders.customer_id = Customers.id;',
    correctAnswers: ['INNER JOIN'],
    hints: ['Returns records with matching values in both tables.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Index types',
    description: 'Which index is created automatically for a Primary Key?',
    options: ['Non-clustered', 'Clustered', 'B-Tree', 'Hash'],
    correctAnswers: [1],
    hints: ['Sorts and stores the data rows in the table based on their key values.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Foreign Key',
    description: 'What is a Foreign Key used for?',
    options: ['To speed up database', 'To link two tables together', 'To encrypt data', 'To uniquely identify a row'],
    correctAnswers: [1],
    hints: ['Refers to a Primary Key in another table.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Group by',
    description: 'Clause to arrange identical data into groups.',
    initialCode: 'SELECT country, COUNT(*) FROM Users\n___ country;',
    correctAnswers: ['GROUP BY'],
    hints: ['Often used with aggregate functions.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Insert into',
    description: 'Insert "Jon" into "name" column of Users.',
    initialCode: 'INSERT INTO Users (name) ___ ("Jon");',
    correctAnswers: ['VALUES'],
    hints: ['Keyword before the data parenthetical.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Null functions',
    description: 'Which function returns an alternative value when an expression is NULL?',
    options: ['COALESCE (or ISNULL/NVL)', 'EXISTS', 'IN', 'BETWEEN'],
    correctAnswers: [0],
    hints: ['Standard SQL uses COALESCE.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Constraint: Default',
    description: 'What is the "DEFAULT" constraint used for?',
    options: ['To set a fixed value for a column if no value is specified', 'To make a column required', 'To hide a column', 'To link tables'],
    correctAnswers: [0],
    hints: ['Example: age int DEFAULT 18.']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Order by DESC',
    description: 'Sort results by age from highest to lowest.',
    initialCode: 'SELECT * FROM Users ORDER BY age ___;',
    correctAnswers: ['DESC'],
    hints: ['Short for descending.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Delete specific',
    description: 'Delete user with id 5.',
    initialCode: 'DELETE FROM Users ___ id = 5;',
    correctAnswers: ['WHERE'],
    hints: ['Criteria clause.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Cross Join',
    description: 'What is a Cross Join?',
    options: ['Join on common column', 'Cartesian product of both tables', 'Join between two databases', 'Join that returns no results'],
    correctAnswers: [1],
    hints: ['Produces every possible combination of rows.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Case statement',
    description: 'What keyword follows WHEN in a CASE expression?',
    options: ['THEN', 'ELSE', 'DO', 'IF'],
    correctAnswers: [0],
    hints: ['CASE WHEN condition THEN result ... END']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Limit record',
    description: 'Clause to specify number of records to return (MySQL/PostgreSQL).',
    initialCode: 'SELECT * FROM Users ___ 10;',
    correctAnswers: ['LIMIT'],
    hints: ['SQL Server uses TOP.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'In clause',
    description: 'Find users from USA or UK.',
    initialCode: 'SELECT * FROM Users WHERE country ___ ("USA", "UK");',
    correctAnswers: ['IN'],
    hints: ['Operator to specify multiple values in WHERE clause.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Aggregate: Avg',
    description: 'Which function returns the average value of a numeric column?',
    options: ['AVG()', 'MEAN()', 'SUM() / COUNT()', 'Both A and C'],
    correctAnswers: [3],
    hints: ['AVG is the standard function.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'Wildcards',
    description: 'Which wildcard represents zero or more characters in LIKE?',
    options: ['%', '_', '*', '?'],
    correctAnswers: [0],
    hints: ['Used with LIKE operator.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Distinct',
    description: 'Keyword to return only unique values.',
    initialCode: 'SELECT ___ country FROM Users;',
    correctAnswers: ['DISTINCT'],
    hints: ['Removes duplicate rows from result set.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Between check',
    description: 'Find users with age between 20 and 30.',
    initialCode: 'SELECT * FROM Users WHERE age ___ 20 AND 30;',
    correctAnswers: ['BETWEEN'],
    hints: ['Search for a range.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Referential Integrity',
    description: 'What does ON DELETE CASCADE do?',
    options: ['Stops deletion', 'Deletes child rows when parent row is deleted', 'Backs up data', 'Throws an error'],
    correctAnswers: [1],
    hints: ['Maintains parent-child consistency.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'Subquery',
    description: 'What is a subquery?',
    options: ['A query written in lowercase', 'A query nested inside another query', 'A smaller database', 'A fast query'],
    correctAnswers: [1],
    hints: ['Also known as inner query.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'Update set',
    description: 'Keyword after UPDATE table_name.',
    initialCode: 'UPDATE Users ___ age = 20 WHERE id = 1;',
    correctAnswers: ['SET'],
    hints: ['Used to specify the columns to update.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'SQL meaning',
    description: 'What does SQL stand for?',
    options: ['Structured Query Language', 'Simple Query Language', 'Strong Question Language', 'Standard Quality Language'],
    correctAnswers: [0],
    hints: ['The standard language for RDBMS.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'SQL Comments',
    description: 'How to write a single-line comment in SQL?',
    options: ['// comment', '-- comment', '# comment', '/* comment */'],
    correctAnswers: [1],
    hints: ['Uses two dashes.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'Normalization',
    description: 'What is the goal of database normalization?',
    options: ['To increase redundancy', 'To minimize redundancy and dependency by organizing fields and table of a database', 'To delete all tables', 'None'],
    correctAnswers: [1],
    hints: ['Dividing large tables into smaller ones and defining relationships between them.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Unique constraint',
    description: 'Constraint that ensures all values in a column are different.',
    initialCode: 'CREATE TABLE U (\n  id int ___,\n)',
    correctAnswers: ['UNIQUE'],
    hints: ['Similar to PRIMARY KEY but allows one NULL.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Default values',
    description: 'How to set a default value for a column "City"?',
    options: ['City varchar(255) DEFAULT "N"', 'City varchar(255) FIXED "N"', 'City varchar(255) START "N"', 'None'],
    correctAnswers: [0],
    hints: ['Uses the DEFAULT keyword.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Scalar functions',
    description: 'What is a scalar function in SQL?',
    options: ['A function that returns multiple values', 'A function that returns a single value based on the input value', 'A function for scaling images', 'None'],
    correctAnswers: [1],
    hints: ['Examples: LEN(), ROUND(), UPPER().']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Select unique',
    description: 'Select unique cities from Customers.',
    initialCode: 'SELECT ___ City FROM Customers;',
    correctAnswers: ['DISTINCT'],
    hints: ['Keyword to return only different values.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'SQL Union',
    description: 'What is the difference between UNION and UNION ALL?',
    options: ['No difference', 'UNION selects only distinct values, UNION ALL selects all values (including duplicates)', 'UNION ALL is faster', 'None'],
    correctAnswers: [1],
    hints: ['UNION performs a distinct check on the result set.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Primary Key vs Unique Key',
    description: 'Can a table have multiple Primary Keys?',
    options: ['Yes', 'No', 'Only in SQL Server', 'Only in Oracle'],
    correctAnswers: [1],
    hints: ['A table can have only one primary key, but multiple unique keys.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Auto Increment',
    description: 'Keyword for auto-incrementing in MySQL.',
    initialCode: 'id int ___ PRIMARY KEY',
    correctAnswers: ['AUTO_INCREMENT'],
    hints: ['Automatically generates a unique number when a new record is inserted.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Select nulls',
    description: 'Select customers where Address is null.',
    initialCode: 'SELECT * FROM Customers WHERE Address ___ ;',
    correctAnswers: ['IS NULL'],
    hints: ['NULL values cannot be compared with =.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Data Integrity',
    description: 'What are the three types of data integrity?',
    options: ['Entity, Domain, Referential', 'Local, Global, Private', 'Fast, Slow, Medium', 'None'],
    correctAnswers: [0],
    hints: ['Ensures the accuracy and consistency of data over its entire life-cycle.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'SQL Injection',
    description: 'What is SQL Injection?',
    options: ['A way to speed up queries', 'A vulnerability where an attacker can interfere with the queries that an application makes to its database', 'A data type', 'None'],
    correctAnswers: [1],
    hints: ['Often caused by concatenating user input directly into SQL strings.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Alias',
    description: 'Keyword used to give a table or a column a temporary name.',
    initialCode: 'SELECT Name ___ CustomerName FROM C;',
    correctAnswers: ['AS'],
    hints: ['Makes column headings more readable.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Between range',
    description: 'Select products with price between 10 and 20.',
    initialCode: 'SELECT * FROM P WHERE Price ___ 10 AND 20;',
    correctAnswers: ['BETWEEN'],
    hints: ['Operator for selecting values within a given range.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'EXISTS operator',
    description: 'What does the EXISTS operator do?',
    options: ['Deletes a record', 'Tests for the existence of any record in a subquery', 'Checks if a table is empty', 'None'],
    correctAnswers: [1],
    hints: ['Returns true if the subquery returns one or more records.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'ANY and ALL',
    description: 'What is the purpose of the ANY operator?',
    options: ['To select any record', 'Returns true if any of the subquery values meet the condition', 'To sort records', 'None'],
    correctAnswers: [1],
    hints: ['Used with WHERE or HAVING.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Case expression',
    description: 'SQL command for if-then-else logic.',
    initialCode: '___ WHEN age > 18 THEN "Adult" ELSE "Minor" END',
    correctAnswers: ['CASE'],
    hints: ['Evaluates conditions and returns a value when the first condition is met.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Update record',
    description: 'Update City to "Paris" for ID 1.',
    initialCode: '___ Customers SET City = "Paris" WHERE ID = 1;',
    correctAnswers: ['UPDATE'],
    hints: ['Keyword for modifying existing records.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'SQL Triggers',
    description: 'What is a SQL Trigger?',
    options: ['A button in the UI', 'A stored procedure that automatically runs when an event occurs in the database server', 'A validation rule', 'None'],
    correctAnswers: [1],
    hints: ['Can fire BEFORE or AFTER an insert, update, or delete.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Correlated Subquery',
    description: 'What is a correlated subquery?',
    options: ['A subquery that is unrelated to the outer query', 'A subquery that uses values from the outer query', 'A very fast subquery', 'None'],
    correctAnswers: [1],
    hints: ['Execution of the subquery depends on data from the outer query.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Self join',
    description: 'What kind of join occurs when a table is joined with itself?',
    initialCode: 'SELECT * FROM T1 A, T1 B WHERE A.ID = B.PID; // this is a ___ join',
    correctAnswers: ['SELF'],
    hints: ['Useful for querying hierarchical data.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Delete records',
    description: 'Delete all records from table "Logs".',
    initialCode: '___ FROM Logs;',
    correctAnswers: ['DELETE'],
    hints: ['Removes records but keeps the table structure.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'Truncate vs Delete',
    description: 'What is the main difference?',
    options: ['No difference', 'DELETE can be rolled back and filtered with WHERE; TRUNCATE is faster and removes all rows without logging individual deletions', 'TRUNCATE is for files only', 'None'],
    correctAnswers: [1],
    hints: ['TRUNCATE is a DDL operation; DELETE is DML.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Transaction Log',
    description: 'What is the purpose of a transaction log?',
    options: ['To store user passwords', 'To record all changes made to the database, allowing for recovery', 'To list all users', 'None'],
    correctAnswers: [1],
    hints: ['Used by the DBMS to guarantee ACID properties in the event of a crash.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Commit transaction',
    description: 'Command to save changes made in a transaction.',
    initialCode: 'BEGIN TRANSACTION;\n...\n___;',
    correctAnswers: ['COMMIT'],
    hints: ['Makes the changes permanent.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Count total',
    description: 'Count number of rows in table "Users".',
    initialCode: 'SELECT ___(ID) FROM Users;',
    correctAnswers: ['COUNT'],
    hints: ['Aggregate function to count records.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Views',
    description: 'What is a SQL View?',
    options: ['A physical table', 'A virtual table based on the result-set of an SQL statement', 'An image of a table', 'None'],
    correctAnswers: [1],
    hints: ['Contains rows and columns, just like a real table.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'SQL Comments: Multi-line',
    description: 'How to write a multi-line comment?',
    options: ['-- comment --', '/* comment */', '// comment', 'None'],
    correctAnswers: [1],
    hints: ['Uses slash-star and star-slash.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Rollback transaction',
    description: 'Command to undo changes made in a transaction.',
    initialCode: '___;',
    correctAnswers: ['ROLLBACK'],
    hints: ['Reverts the database to its previous state.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'SQL Origin',
    description: 'Which company originally developed SQL?',
    options: ['Microsoft', 'IBM', 'Oracle', 'Sun'],
    correctAnswers: [1],
    hints: ['Originally called SEQUEL in the early 1970s.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'Self Join',
    description: 'What is a self-join?',
    options: ['Joining a table with another table', 'Joining a table with itself', 'A join that doesn\'t work', 'Joining three tables'],
    correctAnswers: [1],
    hints: ['Useful for hierarchical data in a single table.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'Cross Join',
    description: 'What is the result of a CROSS JOIN?',
    options: ['Matching rows only', 'All rows from both tables (Cartesian Product)', 'Only non-matching rows', 'None'],
    correctAnswers: [1],
    hints: ['If table A has 5 rows and B has 4 rows, result has 20 rows.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'Aliasing',
    description: 'Keyword used to give a table or a column a temporary name.',
    initialCode: 'SELECT name ___ username FROM Users;',
    correctAnswers: ['AS'],
    hints: ['Makes columns more readable.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'Full Outer Join',
    description: 'What does a FULL OUTER JOIN return?',
    options: ['Only matching rows', 'All rows when there is a match in either left or right table', 'Only non-matching rows from left', 'None'],
    correctAnswers: [1],
    hints: ['Combines result of both LEFT and RIGHT joins.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'Case Statement',
    description: 'What is the SQL equivalent of if-then-else logic?',
    options: ['IF block', 'CASE expression', 'WHERE clause', 'None'],
    correctAnswers: [1],
    hints: ['Syntax: CASE WHEN condition THEN result ELSE result END.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'Union operation',
    description: 'Combine results of two SELECTs (removing duplicates).',
    initialCode: 'SELECT name FROM A\n___ \nSELECT name FROM B;',
    correctAnswers: ['UNION'],
    hints: ['Columns must have same data types.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'View',
    description: 'What is a database VIEW?',
    options: ['A physical table', 'A virtual table based on the result-set of an SQL statement', 'A way to see data in Excel', 'None'],
    correctAnswers: [1],
    hints: ['Contains rows and columns, just like a real table.']
  },
  {
    id: 128,
    type: 'theory',
    title: 'Stored Procedures',
    description: 'What is a stored procedure?',
    options: ['A backup of the database', 'A prepared SQL code that you can save and reuse over and over again', 'A type of variable', 'None'],
    correctAnswers: [1],
    hints: ['Stored on the server for performance and security.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'Foreign Key',
    description: 'Constraint used to link two tables together.',
    initialCode: 'CREATE TABLE Orders (\n  OrderID int,\n  UserID int ___ (Users.ID)\n);',
    correctAnswers: ['REFERENCES'],
    hints: ['Ensures referential integrity.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'String length',
    description: 'Get length of "abc" (use standard function).',
    initialCode: 'SELECT ___ ("abc");',
    correctAnswers: ['LENGTH'],
    hints: ['In SQL Server, use LEN().']
  },
  {
    id: 131,
    type: 'theory',
    title: 'Transaction Rollback',
    description: 'What does ROLLBACK do?',
    options: ['Saves the changes', 'Undoes the changes made in the current transaction', 'Deletes the database', 'None'],
    correctAnswers: [1],
    hints: ['Restores data to last committed state.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'Savepoints',
    description: 'What is a SAVEPOINT in transactions?',
    options: ['A place to save the file', 'A way to roll back only part of a transaction', 'A backup of a single table', 'None'],
    correctAnswers: [1],
    hints: ['Allows partial rollbacks.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'Auto Increment',
    description: 'Keyword to automatically generate a unique number for a new record (MySQL).',
    initialCode: 'ID int PRIMARY KEY ___',
    correctAnswers: ['AUTO_INCREMENT'],
    hints: ['In SQL Server, use IDENTITY.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'Upper case',
    description: 'Convert "hello" to "HELLO".',
    initialCode: 'SELECT ___ ("hello");',
    correctAnswers: ['UPPER'],
    hints: ['Standard string function.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'Date function',
    description: 'Standard function to get current date and time.',
    options: ['NOW()', 'GETDATE()', 'CURRENT_TIMESTAMP', 'All of the above (depending on DB)'],
    correctAnswers: [3],
    hints: ['Syntax varies between MySQL, SQL Server, and PostgreSQL.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'Normalization: 1NF',
    description: 'What is required for the First Normal Form (1NF)?',
    options: ['No partial dependencies', 'Atomic values in each column and no repeating groups', 'No transitive dependencies', 'Using integers as primary keys'],
    correctAnswers: [1],
    hints: ['The absolute basic level of normalization.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'Indexing: B-Tree',
    description: 'What is the most common data structure used for database indexes?',
    options: ['Linked List', 'B-Tree', 'Hash Map', 'Array'],
    correctAnswers: [1],
    hints: ['Balanced tree structure allows for fast searches, insertions, and deletions.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'Drop Table',
    description: 'Keyword to completely remove a table from the database.',
    initialCode: '___ TABLE ObsoleteData;',
    correctAnswers: ['DROP'],
    hints: ['Irreversible operation.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'Delete rows',
    description: 'Delete all users whose age is over 100.',
    initialCode: 'DELETE FROM Users ___ age > 100;',
    correctAnswers: ['WHERE'],
    hints: ['Filters which rows are deleted.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'Aggregation: HAVING',
    description: 'When is the HAVING clause used?',
    options: ['To filter rows before grouping', 'To filter groups after the GROUP BY clause', 'To sort results', 'None'],
    correctAnswers: [1],
    hints: ['Equivalent of WHERE for aggregate functions.']
  },
  {
    id: 141,
    type: 'theory',
    title: 'ACID: Consistency',
    description: 'What does Consistency mean in ACID?',
    options: ['Data is always fast', 'Data moves from one valid state to another valid state, maintaining all rules and constraints', 'Data is stored in one file', 'None'],
    correctAnswers: [1],
    hints: ['Ensures DB rules like foreign keys are never violated.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'Comment syntax',
    description: 'Character used for a single-line comment in standard SQL.',
    initialCode: '___ This is a comment',
    correctAnswers: ['--'],
    hints: ['Two hyphens.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'Coalesce function',
    description: 'Return the first non-null value among (col1, col2, "Default").',
    initialCode: 'SELECT ___ (col1, col2, "Default") FROM T;',
    correctAnswers: ['COALESCE'],
    hints: ['Handles null values by providing fallbacks.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'Relational Database',
    description: 'Who invented the relational model for databases?',
    options: ['Bill Gates', 'E.F. Codd', 'Larry Ellison', 'Mark Zuckerberg'],
    correctAnswers: [1],
    hints: ['Published "A Relational Model of Data for Large Shared Data Banks" in 1970.']
  },
  {
    id: 145,
    type: 'theory',
    title: 'Query Optimization',
    description: 'What is an "execution plan" in SQL context?',
    options: ['A document on how to write code', 'The path the database engine takes to execute a query', 'A backup schedule', 'None'],
    correctAnswers: [1],
    hints: ['Shows how indexes and tables are accessed.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'Between operator',
    description: 'Operator used to search for values within a range.',
    initialCode: 'SELECT * FROM P WHERE Price ___ 10 AND 20;',
    correctAnswers: ['BETWEEN'],
    hints: ['Includes both the beginning and end values.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'Rounding',
    description: 'Round 3.14159 to 2 decimal places.',
    initialCode: 'SELECT ___ (3.14159, 2);',
    correctAnswers: ['ROUND'],
    hints: ['Standard math function.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'Triggers',
    description: 'What is a database TRIGGER?',
    options: ['A button in the UI', 'A procedural code that automatically executes in response to certain events on a table', 'A way to stop a query', 'None'],
    correctAnswers: [1],
    hints: ['Can be set for INSERT, UPDATE, or DELETE.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'Denormalization',
    description: 'When might you use denormalization?',
    options: ['To save storage space', 'To improve read performance by reducing the number of joins', 'To follow strict 3NF rules', 'None'],
    correctAnswers: [1],
    hints: ['Trade-off between write speed/consistency and read speed.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'Unique index',
    description: 'Statement to create an index that ensures no two rows have the same value in a column.',
    initialCode: 'CREATE ___ INDEX uidx ON Users(email);',
    correctAnswers: ['UNIQUE'],
    hints: ['Combination of indexing and constraint.']
  }
];
