import { Question } from '../types';
export const MONGODB_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'theory',
    title: 'Database Type',
    description: 'What type of database is MongoDB?',
    options: ['Relational (SQL)', 'Document-oriented (NoSQL)', 'Graph database', 'Key-value store'],
    correctAnswers: [1],
    hints: ['It stores data in flexible, JSON-like documents.']
  },
  {
    id: 2,
    type: 'theory',
    title: 'Data Format',
    description: 'What is the binary representation of JSON used by MongoDB?',
    options: ['XML', 'BSON', 'CSV', 'YAML'],
    correctAnswers: [1],
    hints: ['Binary JSON.']
  },
  {
    id: 3,
    type: 'blanks',
    title: 'Primary Key',
    description: 'The default unique identifier field in MongoDB documents.',
    initialCode: '{ "___": ObjectId("...") }',
    correctAnswers: ['_id'],
    hints: ['Starts with an underscore.']
  },
  {
    id: 4,
    type: 'theory',
    title: 'Collections',
    description: 'In MongoDB, what is the equivalent of a "table" in SQL?',
    options: ['Row', 'Database', 'Collection', 'Schema'],
    correctAnswers: [2],
    hints: ['A group of documents.']
  },
  {
    id: 5,
    type: 'coding',
    title: 'Find All',
    description: 'Use the mongo shell command to find all documents in "users" collection.',
    initialCode: 'db.users.___()',
    correctAnswers: ['find'],
    hints: ['The most common query method.']
  },
  {
    id: 6,
    type: 'theory',
    title: 'Aggregation',
    description: 'What is the aggregation framework in MongoDB used for?',
    options: ['Creating backups', 'Data processing and transformation', 'Defining user roles', 'Managing network traffic'],
    correctAnswers: [1],
    hints: ['Similar to GROUP BY in SQL but more powerful.']
  },
  {
    id: 7,
    type: 'blanks',
    title: 'Insert One',
    description: 'Method to add a single document to a collection.',
    initialCode: 'db.posts.___( { title: "Hello" } )',
    correctAnswers: ['insertOne'],
    hints: ['Camel case name.']
  },
  {
    id: 8,
    type: 'theory',
    title: 'Capped Collections',
    description: 'What is a capped collection in MongoDB?',
    options: ['A collection with a password', 'A fixed-size collection that automatically overwrites oldest entries', 'A hidden collection', 'A collection with a maximum of 10 documents'],
    correctAnswers: [1],
    hints: ['Maintains order and has a size limit.']
  },
  {
    id: 9,
    type: 'theory',
    title: 'Indexing',
    description: 'Why are indexes used in MongoDB?',
    options: ['To store more data', 'To improve query performance', 'To encrypt documents', 'To create relationships'],
    correctAnswers: [1],
    hints: ['Without them, MongoDB must perform a collection scan.']
  },
  {
    id: 10,
    type: 'blanks',
    title: 'Update Operator',
    description: 'Operator used to set the value of a field.',
    initialCode: 'db.users.updateOne({name: "A"}, { ___: { age: 30 } })',
    correctAnswers: ['$set'],
    hints: ['Starts with a dollar sign.']
  },
  {
    id: 11,
    type: 'theory',
    title: 'Sharding',
    description: 'What is sharding in MongoDB?',
    options: ['Data encryption', 'Distributing data across multiple machines', 'Backing up a database', 'Merging two collections'],
    correctAnswers: [1],
    hints: ['A method for horizontal scaling.']
  },
  {
    id: 12,
    type: 'theory',
    title: 'Replication',
    description: 'What is a "Replica Set"?',
    options: ['A set of identical documents', 'A group of mongodb processes that maintain the same data set', 'A collection of indexes', 'A development environment'],
    correctAnswers: [1],
    hints: ['Provides redundancy and high availability.']
  },
  {
    id: 13,
    type: 'blanks',
    title: 'Delete Many',
    description: 'Method to remove multiple documents matching a filter.',
    initialCode: 'db.logs.___( { status: "old" } )',
    correctAnswers: ['deleteMany'],
    hints: ['Deletes everything that matches.']
  },
  {
    id: 14,
    type: 'theory',
    title: 'GridFS',
    description: 'What is GridFS used for?',
    options: ['Storing small documents', 'Storing and retrieving large files (e.g., > 16MB)', 'Graph computations', 'Creating web servers'],
    correctAnswers: [1],
    hints: ['Bypasses the 16MB document size limit.']
  },
  {
    id: 15,
    type: 'theory',
    title: 'Flexible Schema',
    description: 'Does MongoDB require all documents in a collection to have the same fields?',
    options: ['Yes', 'No', 'Only if using indexes', 'Depends on the version'],
    correctAnswers: [1],
    hints: ['This is known as being "schema-less" or having a flexible schema.']
  },
  {
    id: 16,
    type: 'blanks',
    title: 'Logical OR',
    description: 'Operator for logical OR in a query.',
    initialCode: '{ ___: [ {a: 1}, {b: 2} ] }',
    correctAnswers: ['$or'],
    hints: ['Dollar sign or.']
  },
  {
    id: 17,
    type: 'theory',
    title: 'Lookup',
    description: 'Which aggregation stage is used to perform a join-like operation?',
    options: ['$match', '$group', '$lookup', '$project'],
    correctAnswers: [2],
    hints: ['Performs a left outer join to another collection.']
  },
  {
    id: 18,
    type: 'theory',
    title: 'WiredTiger',
    description: 'What is WiredTiger in MongoDB?',
    options: ['A special security feature', 'The default storage engine', 'An analytics tool', 'A network protocol'],
    correctAnswers: [1],
    hints: ['Manages how data is written to and read from disk.']
  },
  {
    id: 19,
    type: 'blanks',
    title: 'Sort Method',
    description: 'Method used to order search results.',
    initialCode: 'db.items.find().___({ price: 1 })',
    correctAnswers: ['sort'],
    hints: ['Usually called after find().']
  },
  {
    id: 20,
    type: 'theory',
    title: 'Comparison Operator',
    description: 'Which operator stands for "greater than"?',
    options: ['$gt', '$lt', '$eq', '$ne'],
    correctAnswers: [0],
    hints: ['G.T.']
  },
  {
    id: 21,
    type: 'theory',
    title: 'Mongoose',
    description: 'What is Mongoose?',
    options: ['A MongoDB GUI', 'An Object Data Modeling (ODM) library for MongoDB and Node.js', 'A cluster management tool', 'A query language'],
    correctAnswers: [1],
    hints: ['Commonly used with Express and Node.js.']
  },
  {
    id: 22,
    type: 'blanks',
    title: 'Increment',
    description: 'Operator used to increase a numeric field value.',
    initialCode: '{ ___: { views: 1 } }',
    correctAnswers: ['$inc'],
    hints: ['Short for increment.']
  },
  {
    id: 23,
    type: 'theory',
    title: 'Atomic Operations',
    description: 'Are write operations in MongoDB atomic at the document level?',
    options: ['Yes', 'No', 'Only for inserts', 'Only for deletes'],
    correctAnswers: [0],
    hints: ['A single document write is guaranteed to be atomic.']
  },
  {
    id: 24,
    type: 'theory',
    title: 'Projection',
    description: 'What is projection in MongoDB?',
    options: ['Displaying data on a screen', 'Selecting only the necessary fields from a document', 'Mapping coordinates', 'Enlarging a database'],
    correctAnswers: [1],
    hints: ['The second argument in find().']
  },
  {
    id: 25,
    type: 'blanks',
    title: 'Match Stage',
    description: 'Aggregation stage that filters the documents.',
    initialCode: '[ { ___: { status: "A" } } ]',
    correctAnswers: ['$match'],
    hints: ['Similar to the find() query filter.']
  },
  {
    id: 26,
    type: 'theory',
    title: 'Compass',
    description: 'What is MongoDB Compass?',
    options: ['A command line tool', 'A GUI for exploring and interacting with MongoDB data', 'A navigation library', 'A cloud hosting service'],
    correctAnswers: [1],
    hints: ['Visual tool provided by MongoDB.']
  },
  {
    id: 27,
    type: 'theory',
    title: 'Atlas',
    description: 'What is MongoDB Atlas?',
    options: ['A collection of maps', 'MongoDB\'s fully managed cloud database service', 'A local installation guide', 'A performance monitoring plugin'],
    correctAnswers: [1],
    hints: ['PaaS offering.']
  },
  {
    id: 28,
    type: 'blanks',
    title: 'Counting Documents',
    description: 'Method to count documents in a collection.',
    initialCode: 'db.users.___()',
    correctAnswers: ['countDocuments'],
    hints: ['More accurate than just count().']
  },
  {
    id: 29,
    type: 'theory',
    title: 'TTL Index',
    description: 'What is a TTL (Time To Live) index used for?',
    options: ['To speed up text searches', 'To automatically remove documents after a certain amount of time', 'To track user sessions', 'To encrypt old data'],
    correctAnswers: [1],
    hints: ['Documents expire and get deleted automatically.']
  },
  {
    id: 30,
    type: 'theory',
    title: 'Embedded Documents',
    description: 'What is the "Denormalization" approach in MongoDB often involving?',
    options: ['Creating many small collections', 'Using embedded (nested) documents', 'Normalizing all data into 3NF', 'Removing all indexes'],
    correctAnswers: [1],
    hints: ['Storing related data together in one document.']
  },
  {
    id: 31,
    type: 'theory',
    title: 'Covering Query',
    description: 'What is a covering query in MongoDB?',
    options: ['A query that uses all fields', 'A query that can be satisfied entirely by an index', 'A query that covers the whole collection', 'None'],
    correctAnswers: [1],
    hints: ['The index contains all the fields projected by the query.']
  },
  {
    id: 32,
    type: 'theory',
    title: 'Index Order',
    description: 'How do you specify a descending index in MongoDB?',
    options: ['1', '-1', 'desc', 'descending'],
    correctAnswers: [1],
    hints: ['1 is for ascending.']
  },
  {
    id: 33,
    type: 'blanks',
    title: 'Slice operator',
    description: 'Operator used to limit the number of array elements returned.',
    initialCode: '{ $project: { comments: { ___: 5 } } }',
    correctAnswers: ['$slice'],
    hints: ['Starts with a dollar sign.']
  },
  {
    id: 34,
    type: 'blanks',
    title: 'ElemMatch',
    description: 'Operator to match documents where at least one array element matches all criteria.',
    initialCode: '{ tags: { ___: { $eq: "red", $gt: 5 } } }',
    correctAnswers: ['$elemMatch'],
    hints: ['Used for array of objects.']
  },
  {
    id: 35,
    type: 'theory',
    title: 'Weighting',
    description: 'Can we assign different importance (weights) to fields in a text index?',
    options: ['Yes', 'No', 'Only for the _id field', 'Only for numeric fields'],
    correctAnswers: [0],
    hints: ['Text search weights allow certain fields to count more in the score.']
  },
  {
    id: 36,
    type: 'theory',
    title: 'Sparse Indexes',
    description: 'What is a sparse index?',
    options: ['A small index', 'An index that only contains entries for documents that have the indexed field', 'A broken index', 'An index with many null values'],
    correctAnswers: [1],
    hints: ['Helps when many documents are missing the field.']
  },
  {
    id: 37,
    type: 'theory',
    title: 'Unique Indexes',
    description: 'What happens if you try to insert a duplicate value into a field with a unique index?',
    options: ['It overwrites the old doc', 'It throws an error', 'It ignores the new doc', 'It creates a second index'],
    correctAnswers: [1],
    hints: ['Enforces uniqueness across the collection.']
  },
  {
    id: 38,
    type: 'blanks',
    title: 'Bucket stage',
    description: 'Aggregation stage that categorizes documents into groups based on specified boundaries.',
    initialCode: '[ { ___: { groupBy: "$price", ... } } ]',
    correctAnswers: ['$bucket'],
    hints: ['Used for histograms or price ranges.']
  },
  {
    id: 39,
    type: 'blanks',
    title: 'Facet stage',
    description: 'Aggregation stage that allows running multiple pipelines within a single stage.',
    initialCode: '[ { ___: { output1: [...], output2: [...] } } ]',
    correctAnswers: ['$facet'],
    hints: ['Great for building faceted navigation.']
  },
  {
    id: 40,
    type: 'coding',
    title: 'DB Stats',
    description: 'Command to get storage statistics for the current database.',
    initialCode: 'db.___()',
    correctAnswers: ['stats'],
    hints: ['Shows data size, index size, etc.']
  },
  {
    id: 41,
    type: 'blanks',
    title: 'Size operator',
    description: 'Operator to match arrays of a specific length.',
    initialCode: '{ tags: { ___: 3 } }',
    correctAnswers: ['$size'],
    hints: ['Exact size match only.']
  },
  {
    id: 42,
    type: 'blanks',
    title: 'All operator',
    description: 'Operator that matches arrays that contain all specified elements.',
    initialCode: '{ tags: { ___: ["red", "blue"] } }',
    correctAnswers: ['$all'],
    hints: ['Order doesn\'t matter.']
  },
  {
    id: 43,
    type: 'blanks',
    title: 'Exists Check',
    description: 'Operator to check if a field exists in a document.',
    initialCode: '{ "deletedAt": { ___: true } }',
    correctAnswers: ['$exists'],
    hints: ['Matches documents that have the field.']
  },
  {
    id: 44,
    type: 'blanks',
    title: 'Type Check',
    description: 'Operator to match fields of a specific BSON type.',
    initialCode: '{ age: { ___: "number" } }',
    correctAnswers: ['$type'],
    hints: ['Can use strings or numbers for types.']
  },
  {
    id: 45,
    type: 'blanks',
    title: 'Regex Match',
    description: 'Operator used for pattern matching in queries.',
    initialCode: '{ name: { ___: "^A" } }',
    correctAnswers: ['$regex'],
    hints: ['Regular expressions.']
  },
  {
    id: 46,
    type: 'theory',
    title: 'Journaling',
    description: 'What is the purpose of the journal in MongoDB?',
    options: ['To track user logins', 'To provide crash recovery and data durability', 'To store long-term logs', 'To index text fields'],
    correctAnswers: [1],
    hints: ['Record operations between checkpoints.']
  },
  {
    id: 47,
    type: 'theory',
    title: 'Read Concern',
    description: 'What does readConcern: "majority" ensure?',
    options: ['The data is on at least one node', 'The data has been acknowledged by a majority of the replica set', 'The data is encrypted', 'The data is newer than 1 hour'],
    correctAnswers: [1],
    hints: ['Prevents reading data that might be rolled back.']
  },
  {
    id: 48,
    type: 'theory',
    title: 'Write Concern',
    description: 'What happens if writeConcern "w" is higher than the number of available nodes?',
    options: ['It waits indefinitely or until timeout', 'It writes only to primary', 'It throws error immediately', 'It creates temporary nodes'],
    correctAnswers: [0],
    hints: ['The operation will block.']
  },
  {
    id: 49,
    type: 'theory',
    title: 'Election',
    description: 'What happens in a replica set if the primary goes offline?',
    options: ['The set stops working', 'A new primary is elected from available secondaries', 'Data is deleted', 'It switches to SQL mode'],
    correctAnswers: [1],
    hints: ['Automatic failover.']
  },
  {
    id: 50,
    type: 'theory',
    title: 'Arbiter',
    description: 'What is an "Arbiter" node in a replica set?',
    options: ['A node that stores data', 'A node that only participates in elections and does not store data', 'The primary node', 'An external backup'],
    correctAnswers: [1],
    hints: ['Used to maintain an odd number of voting members.']
  },
  {
    id: 51,
    type: 'theory',
    title: 'Secondary Delay',
    description: 'What is a "delayed secondary"?',
    options: ['A slow server', 'A member that purposefully stays some time behind the primary', 'A member with low priority', 'None'],
    correctAnswers: [1],
    hints: ['Helpful for recovering from accidentally deleted data.']
  },
  {
    id: 52,
    type: 'theory',
    title: 'Priority',
    description: 'How can you prevent a secondary from ever becoming a primary?',
    options: ['Set priority to 10', 'Set priority to 0', 'Remove its votes', 'Disconnect it'],
    correctAnswers: [1],
    hints: ['Priority 0 prevents election to primary.']
  },
  {
    id: 53,
    type: 'theory',
    title: 'Oplog',
    description: 'What is the MongoDB oplog?',
    options: ['A list of users', 'A capped collection that stores a history of write operations', 'An index storage', 'A monitoring tool'],
    correctAnswers: [1],
    hints: ['Used by replication.']
  },
  {
    id: 54,
    type: 'theory',
    title: 'Initial Sync',
    description: 'What is the process of a new member getting all data from the primary called?',
    options: ['Copying', 'Initial Sync', 'Cloning', 'Hydration'],
    correctAnswers: [1],
    hints: ['The startup process for a new node.']
  },
  {
    id: 55,
    type: 'theory',
    title: 'DBRefs',
    description: 'What are DBRefs?',
    options: ['Database references using a specific convention (col, id, db)', 'Automatic joins', 'Foreign keys', 'None'],
    correctAnswers: [0],
    hints: ['A standardized format for linking documents.']
  },
  {
    id: 56,
    type: 'theory',
    title: 'Manual References',
    description: 'What is the most common way to reference a document in another collection?',
    options: ['DBRefs', 'Storing the ObjectId of the target document', 'Storing the entire target document', 'Using SQL JOIN'],
    correctAnswers: [1],
    hints: ['Keep it simple by storing just the ID.']
  },
  {
    id: 57,
    type: 'blanks',
    title: 'Group ID',
    description: 'The mandatory field used to specify the grouping key in $group.',
    initialCode: '{ $group: { ___: "$category", ... } }',
    correctAnswers: ['_id'],
    hints: ['Every group must have a unique ID.']
  },
  {
    id: 58,
    type: 'blanks',
    title: 'Average operator',
    description: 'Aggregation accumulator to calculate the mean.',
    initialCode: '{ $group: { _id: null, avgScore: { ___: "$score" } } }',
    correctAnswers: ['$avg'],
    hints: ['Short for average.']
  },
  {
    id: 59,
    type: 'blanks',
    title: 'Sum operator',
    description: 'Aggregation accumulator to count or total values.',
    initialCode: '{ $group: { _id: null, count: { ___: 1 } } }',
    correctAnswers: ['$sum'],
    hints: ['Used to add values together.']
  },
  {
    id: 60,
    type: 'blanks',
    title: 'Max operator',
    description: 'Aggregation accumulator to find the highest value.',
    initialCode: '{ $group: { _id: null, top: { ___: "$score" } } }',
    correctAnswers: ['$max'],
    hints: ['Opposite of $min.']
  },
  {
    id: 61,
    type: 'theory',
    title: 'Atomic Operations',
    description: 'Are MongoDB operations atomic at the document level?',
    options: ['Yes', 'No', 'Only for integers', 'Only in replicas'],
    correctAnswers: [0],
    hints: ['A single write operation to a single document is atomic.']
  },
  {
    id: 62,
    type: 'theory',
    title: 'Transactions',
    description: 'Does MongoDB support multi-document ACID transactions?',
    options: ['Yes, since version 4.0', 'No', 'Only for local databases', 'Only in Atlas'],
    correctAnswers: [0],
    hints: ['Supports transactions across multiple documents, collections, and databases.']
  },
  {
    id: 63,
    type: 'blanks',
    title: 'Sort result',
    description: 'Method call to sort results by "age" ascending.',
    initialCode: 'db.collection.find().___({ age: 1 })',
    correctAnswers: ['sort'],
    hints: ['Standard sorting keyword.']
  },
  {
    id: 64,
    type: 'theory',
    title: 'TTL Index',
    description: 'What is a TTL (Time To Live) index used for?',
    options: ['To speed up queries', 'To automatically remove documents from a collection after a certain amount of time', 'To track document history', 'To encrypt data'],
    correctAnswers: [1],
    hints: ['Useful for machine-generated event data or logs.']
  },
  {
    id: 65,
    type: 'theory',
    title: 'Capped Collections',
    description: 'What is a "capped collection"?',
    options: ['A collection with a password', 'A fixed-size collection that rolls over when it reaches its maximum size', 'A collection that only stores numbers', 'A private collection'],
    correctAnswers: [1],
    hints: ['Ideal for logging as it maintains insertion order.']
  },
  {
    id: 66,
    type: 'coding',
    title: 'Count Docs',
    description: 'Count documents in "users" collection.',
    initialCode: 'db.users.___()',
    correctAnswers: ['countDocuments'],
    hints: ['Modern method for counting. count() is deprecated.']
  },
  {
    id: 67,
    type: 'theory',
    title: 'Secondary index',
    description: 'Can you create multiple indexes on a single MongoDB collection?',
    options: ['Yes', 'No', 'Max 2', 'Only 1'],
    correctAnswers: [0],
    hints: ['Helps optimize different query patterns.']
  },
  {
    id: 68,
    type: 'theory',
    title: 'Compound Index',
    description: 'What is a compound index?',
    options: ['An index on multiple fields', 'A compressed index', 'Index on a nested document', 'A unique index'],
    correctAnswers: [0],
    hints: ['Example: { name: 1, age: -1 }.']
  },
  {
    id: 69,
    type: 'blanks',
    title: 'Rename Field',
    description: 'Operator to rename a field in $project stage.',
    initialCode: '{ $project: { ___: "$oldName" } }',
    correctAnswers: ['newName'],
    hints: ['Providing a new key for the value of the old field.']
  },
  {
    id: 70,
    type: 'coding',
    title: 'Push to array',
    description: 'Add "red" to "colors" array field in document with id 1.',
    initialCode: 'db.docs.updateOne({_id: 1}, { $___: { colors: "red" } })',
    correctAnswers: ['push'],
    hints: ['Array update operator.']
  },
  {
    id: 71,
    type: 'theory',
    title: 'Text Search',
    description: 'Which index type is required for performing text searches?',
    options: ['string', 'text', 'search', 'phrase'],
    correctAnswers: [1],
    hints: ['Allows for keyword searches and language-specific rules.']
  },
  {
    id: 72,
    type: 'theory',
    title: 'Geospatial queries',
    description: 'Which command is used to find nearby points?',
    options: ['$near', '$close', '$around', '$geo'],
    correctAnswers: [0],
    hints: ['Requires a 2dsphere index.']
  },
  {
    id: 73,
    type: 'blanks',
    title: 'Limit results',
    description: 'Method call to get only first 5 results.',
    initialCode: 'db.coll.find().___(5)',
    correctAnswers: ['limit'],
    hints: ['Same as SQL.']
  },
  {
    id: 74,
    type: 'coding',
    title: 'Delete many',
    description: 'Delete all users with age < 18.',
    initialCode: 'db.users.___({ age: { $lt: 18 } })',
    correctAnswers: ['deleteMany'],
    hints: ['Method to remove multiple documents.']
  },
  {
    id: 75,
    type: 'theory',
    title: 'Change Streams',
    description: 'What are Change Streams?',
    options: ['Faster data downloads', 'Real-time notifications of changes to a collection, database, or cluster', 'A way to stream videos', 'A type of aggregation'],
    correctAnswers: [1],
    hints: ['Uses replica set op-log under the hood.']
  },
  {
    id: 76,
    type: 'theory',
    title: 'Data Modeling',
    description: 'What is "Embedding" in MongoDB modeling?',
    options: ['Storing related data in separate collections', 'Storing related data in the same document', 'Encrypting data', 'Hiding data'],
    correctAnswers: [1],
    hints: ['Contrasted with "Referencing".']
  },
  {
    id: 77,
    type: 'blanks',
    title: 'Skip results',
    description: 'Method to skip first 10 documents.',
    initialCode: 'db.coll.find().___(10)',
    correctAnswers: ['skip'],
    hints: ['Used for pagination.']
  },
  {
    id: 78,
    type: 'coding',
    title: 'Replace Doc',
    description: 'Replace whole document with id 1.',
    initialCode: 'db.items.___({_id: 1}, { name: "new" })',
    correctAnswers: ['replaceOne'],
    hints: ['Unlike updateOne, it replaces the entire content.']
  },
  {
    id: 79,
    type: 'theory',
    title: 'Write Concern',
    description: 'What is "w: 1" in write concern?',
    options: ['Wait for acknowledgment from primary only', 'Wait for acknowledgment from all replicas', 'No acknowledgment', 'Retry once'],
    correctAnswers: [0],
    hints: ['Default for most cases.']
  },
  {
    id: 80,
    type: 'theory',
    title: 'Read Preference',
    description: 'Where to read from if setting is "secondary"?',
    options: ['Only primary', 'Only secondary nodes', 'Closest node', 'Random node'],
    correctAnswers: [1],
    hints: ['Helps scale read operations across the cluster.']
  },
  {
    id: 81,
    type: 'blanks',
    title: 'Upsert',
    description: 'Option to update a document if found, otherwise insert it.',
    initialCode: 'db.coll.updateOne(..., { ___: true })',
    correctAnswers: ['upsert'],
    hints: ['Portmanteau of update and insert.']
  },
  {
    id: 82,
    type: 'coding',
    title: 'In array check',
    description: 'Find users where job is "dev" or "ceo".',
    initialCode: 'db.users.find({ job: { $___: ["dev", "ceo"] } })',
    correctAnswers: ['in'],
    hints: ['Operator for matching any value in a list.']
  },
  {
    id: 83,
    type: 'theory',
    title: 'Explain plan',
    description: 'What does the explain() method do?',
    options: ['Provides documentation', 'Returns information on query execution and index usage', 'Explains why a field is missing', 'Translates queries'],
    correctAnswers: [1],
    hints: ['Crucial for query optimization.']
  },
  {
    id: 84,
    type: 'theory',
    title: 'GridFS',
    description: 'What is GridFS used for?',
    options: ['Managing clusters', 'Storing and retrieving files that exceed the 16MB document limit', 'Drawing grids on maps', 'Performance testing'],
    correctAnswers: [1],
    hints: ['Chunks files into smaller documents.']
  },
  {
    id: 85,
    type: 'blanks',
    title: 'Unset field',
    description: 'Operator to remove a specific field from a document.',
    initialCode: 'db.coll.updateOne(..., { $___: { oldField: "" } })',
    correctAnswers: ['unset'],
    hints: ['Removes field entirely.']
  },
  {
    id: 86,
    type: 'coding',
    title: 'Not Equal',
    description: 'Find products where price is not 10.',
    initialCode: 'db.p.find({ price: { $___: 10 } })',
    correctAnswers: ['ne'],
    hints: ['Short for not equal.']
  },
  {
    id: 87,
    type: 'theory',
    title: 'Multikey Index',
    description: 'What is a multikey index?',
    options: ['An index on many keys', 'An index on a field that contains an array', 'A compressed index', 'A primary index'],
    correctAnswers: [1],
    hints: ['MongoDB creates a separate index entry for every element in the array.']
  },
  {
    id: 88,
    type: 'theory',
    title: 'WiredTiger',
    description: 'What is WiredTiger?',
    options: ['A security tool', 'The default storage engine for MongoDB since 3.2', 'A type of database cluster', 'A cloud service'],
    correctAnswers: [1],
    hints: ['Provides document-level concurrency and compression.']
  },
  {
    id: 89,
    type: 'blanks',
    title: 'BSON Type',
    description: 'Number representing "string" type in MongoDB queries.',
    initialCode: 'db.coll.find({ field: { $type: ___ } })',
    correctAnswers: ['2'],
    hints: ['BSON spec defines types by numerical IDs.']
  },
  {
    id: 90,
    type: 'theory',
    title: 'MongoDB Query Language',
    description: 'What is the format of an MQL query?',
    options: ['XML', 'BSON (JSON-like documents)', 'Plain text', 'SQL'],
    correctAnswers: [1],
    hints: ['Native to the document structure.']
  },
  {
    id: 91,
    type: 'theory',
    title: 'Text Search',
    description: 'How to perform a text search in MongoDB?',
    options: ['Using $regex', 'Using $text operator', 'Using $search', 'Using $find'],
    correctAnswers: [1],
    hints: ['Requires a text index on the collection.']
  },
  {
    id: 92,
    type: 'theory',
    title: 'TTL Indexes',
    description: 'What is a TTL (Time To Live) index?',
    options: ['An index that speeds up searches', 'An index that automatically removes documents after a certain amount of time', 'An index for time-series data', 'None'],
    correctAnswers: [1],
    hints: ['Useful for machine-generated data like logs or sessions.']
  },
  {
    id: 93,
    type: 'blanks',
    title: 'Lookup operator',
    description: 'Operator used for left outer joins in aggregation.',
    initialCode: '{ $___: { from: "orders", ... } }',
    correctAnswers: ['lookup'],
    hints: ['Allows joining data from different collections.']
  },
  {
    id: 94,
    type: 'theory',
    title: 'Partial Indexes',
    description: 'What is a partial index?',
    options: ['An index on half the fields', 'An index that only indexes documents that meet a specified filter expression', 'A broken index', 'None'],
    correctAnswers: [1],
    hints: ['Saves storage space and improves performance.']
  },
  {
    id: 95,
    type: 'theory',
    title: 'Read Preference',
    description: 'What does "primaryPreferred" read preference mean?',
    options: ['Only read from primary', 'Read from primary if available, otherwise from a secondary', 'Read from secondary only', 'Randomly select member'],
    correctAnswers: [1],
    hints: ['Useful for read-heavy applications.']
  },
  {
    id: 96,
    type: 'coding',
    title: 'Create Index',
    description: 'Create an ascending index on "email".',
    initialCode: 'db.users.___({ email: 1 })',
    correctAnswers: ['createIndex'],
    hints: ['Method to improve query performance.']
  },
  {
    id: 97,
    type: 'theory',
    title: 'WiredTiger',
    description: 'What is WiredTiger?',
    options: ['A type of cat', 'The default storage engine for MongoDB', 'A networking tool', 'A backup manager'],
    correctAnswers: [1],
    hints: ['Introduced as the default engine in version 3.2.']
  },
  {
    id: 98,
    type: 'theory',
    title: 'Collation',
    description: 'What is collation in MongoDB?',
    options: ['Combining files', 'A set of rules for string comparison (e.g. case sensitivity)', 'Deleting data', 'None'],
    correctAnswers: [1],
    hints: ['Allows specifying language-specific rules for search and sort.']
  },
  {
    id: 99,
    type: 'blanks',
    title: 'Out operator',
    description: 'Aggregation operator that writes the results to a collection.',
    initialCode: '{ $___: "result_collection" }',
    correctAnswers: ['out'],
    hints: ['Must be the last stage in the pipeline.']
  },
  {
    id: 100,
    type: 'coding',
    title: 'Push to array',
    description: 'Add "admin" to roles array.',
    initialCode: 'db.users.updateOne({ _id: 1 }, { $___: { roles: "admin" } })',
    correctAnswers: ['push'],
    hints: ['Updates array by adding an element.']
  },
  {
    id: 101,
    type: 'theory',
    title: 'Schema Validation',
    description: 'Can MongoDB enforce a schema?',
    options: ['Yes, using JSON Schema', 'No, it is strictly schemaless', 'Only for integers', 'Only in Atlas'],
    correctAnswers: [0],
    hints: ['Allows validating document structure during insertion or update.']
  },
  {
    id: 102,
    type: 'theory',
    title: 'GridFS',
    description: 'What is GridFS used for?',
    options: ['Sorting grids', 'Storing and retrieving files that exceed the 16MB document size limit', 'Building websites', 'None'],
    correctAnswers: [1],
    hints: ['Splits files into smaller chunks.']
  },
  {
    id: 103,
    type: 'blanks',
    title: 'Match operator',
    description: 'Aggregation stage that filters documents.',
    initialCode: '{ $___: { status: "A" } }',
    correctAnswers: ['match'],
    hints: ['Equivalent to the find() filter.']
  },
  {
    id: 104,
    type: 'coding',
    title: 'Rename field',
    description: 'Rename "user_name" to "username".',
    initialCode: 'db.u.updateMany({}, { $___: { user_name: "username" } })',
    correctAnswers: ['rename'],
    hints: ['Field update operator.']
  },
  {
    id: 105,
    type: 'theory',
    title: 'Transactions',
    description: 'In which version did MongoDB introduce multi-document transactions?',
    options: ['2.4', '3.0', '4.0', '5.0'],
    correctAnswers: [2],
    hints: ['Providing ACID properties across multiple documents.']
  },
  {
    id: 106,
    type: 'theory',
    title: 'Capped Collections',
    description: 'What is a capped collection?',
    options: ['Collection with a password', 'Fixed-size collection that overwrites oldest documents when full', 'A hidden collection', 'None'],
    correctAnswers: [1],
    hints: ['Maintains documents in insertion order.']
  },
  {
    id: 107,
    type: 'blanks',
    title: 'Set operator',
    description: 'Operator to update specific fields in a document.',
    initialCode: '{ $___: { age: 30 } }',
    correctAnswers: ['set'],
    hints: ['If the field doesn\'t exist, it will be added.']
  },
  {
    id: 108,
    type: 'coding',
    title: 'Drop collection',
    description: 'Drop collection "tmp".',
    initialCode: 'db.tmp.___()',
    correctAnswers: ['drop'],
    hints: ['Removes a collection from the database.']
  },
  {
    id: 109,
    type: 'theory',
    title: 'Change Streams',
    description: 'What are Change Streams?',
    options: ['Watching movies', 'A way to listen for real-time data changes in the database', 'A data migration tool', 'None'],
    correctAnswers: [1],
    hints: ['Built on top of the oplog.']
  },
  {
    id: 110,
    type: 'theory',
    title: 'Write Concern',
    description: 'What does "w: 1" mean?',
    options: ['Wait for one second', 'Wait for acknowledgment from the primary only', 'Wait for all nodes', 'None'],
    correctAnswers: [1],
    hints: ['Specifies the level of acknowledgment requested from MongoDB.']
  },
  {
    id: 111,
    type: 'blanks',
    title: 'Project operator',
    description: 'Aggregation stage that reshapes documents (select fields).',
    initialCode: '{ $___: { name: 1, _id: 0 } }',
    correctAnswers: ['project'],
    hints: ['Determines which fields are included in the output.']
  },
  {
    id: 112,
    type: 'coding',
    title: 'Increment field',
    description: 'Increment score by 5.',
    initialCode: '{ $___: { score: 5 } }',
    correctAnswers: ['inc'],
    hints: ['Adds a specified value to a numeric field.']
  },
  {
    id: 113,
    type: 'theory',
    title: 'MongoDB Atlas',
    description: 'What is MongoDB Atlas?',
    options: ['A map of databases', 'A fully managed cloud database service', 'A command line tool', 'A local server'],
    correctAnswers: [1],
    hints: ['Available on AWS, Azure, and GCP.']
  },
  {
    id: 114,
    type: 'theory',
    title: 'Hashed Indexes',
    description: 'What are hashed indexes useful for?',
    options: ['Range queries', 'Sharding on fields with large range of values', 'Multi-key queries', 'None'],
    correctAnswers: [1],
    hints: ['Maintain entries with hashes of the values of the indexed field.']
  },
  {
    id: 115,
    type: 'blanks',
    title: 'Group operator',
    description: 'Aggregation stage that groups documents by a specific key.',
    initialCode: '{ $___: { _id: "$dept", total: { $sum: 1 } } }',
    correctAnswers: ['group'],
    hints: ['Essential for data analysis.']
  },
  {
    id: 116,
    type: 'coding',
    title: 'Sort records',
    description: 'Sort by age descending.',
    initialCode: 'db.users.find().sort({ age: ___ })',
    correctAnswers: ['-1'],
    hints: ['1 for ascending, -1 for descending.']
  },
  {
    id: 117,
    type: 'theory',
    title: 'Explain method',
    description: 'What does .explain() do?',
    options: ['Provides information on query execution plan', 'Deletes data', 'Formats code', 'None'],
    correctAnswers: [0],
    hints: ['Helps in optimizing query performance.']
  },
  {
    id: 118,
    type: 'theory',
    title: 'Compass',
    description: 'What is MongoDB Compass?',
    options: ['A tool for navigation', 'A GUI for MongoDB', 'A backup tool', 'A driver'],
    correctAnswers: [1],
    hints: ['Allows you to visualize and explore your data.']
  },
  {
    id: 119,
    type: 'blanks',
    title: 'Limit records',
    description: 'Method to limit number of documents returned.',
    initialCode: 'db.u.find().___(10)',
    correctAnswers: ['limit'],
    hints: ['Helpful for pagination.']
  },
  {
    id: 120,
    type: 'theory',
    title: 'Document-based',
    description: 'What format are MongoDB documents stored in?',
    options: ['JSON', 'BSON (Binary JSON)', 'XML', 'YAML'],
    correctAnswers: [1],
    hints: ['Binary-encoded serialization of JSON-like documents.']
  },
  {
    id: 121,
    type: 'theory',
    title: 'MongoDB: ObjectId',
    description: 'What is an ObjectId in MongoDB?',
    options: ['A random string', 'A 12-byte identifier for documents, typically used as the primary key (_id)', 'An integer', 'None'],
    correctAnswers: [1],
    hints: ['Automatically generated if not provided.']
  },
  {
    id: 122,
    type: 'theory',
    title: 'MongoDB: FindOne',
    description: 'What does the db.collection.findOne() method do?',
    options: ['Returns all documents matching a query', 'Returns one document that satisfies the specified query criteria', 'Deletes one document', 'None'],
    correctAnswers: [1],
    hints: ['Efficient for retrieving a single record.']
  },
  {
    id: 123,
    type: 'blanks',
    title: 'MongoDB: Update One',
    description: 'Method to update a single document.',
    initialCode: 'db.users.___ ({ name: "A" }, { $set: { age: 20 } })',
    correctAnswers: ['updateOne'],
    hints: ['Updates the first document that matches the filter.']
  },
  {
    id: 124,
    type: 'theory',
    title: 'MongoDB: Capped Collections',
    description: 'What is a capped collection?',
    options: ['A collection with a password', 'Fixed-size collections that support high-throughput operations that insert and retrieve documents based on insertion order', 'A collection that can\'t be modified', 'None'],
    correctAnswers: [1],
    hints: ['Works like a circular buffer.']
  },
  {
    id: 125,
    type: 'theory',
    title: 'MongoDB: Replica Set',
    description: 'What is the purpose of a replica set?',
    options: ['To speed up writes', 'To provide high availability and redundancy through data replication', 'To store images', 'None'],
    correctAnswers: [1],
    hints: ['Consists of multiple nodes keeping the same data.']
  },
  {
    id: 126,
    type: 'coding',
    title: 'MongoDB: Delete Many',
    description: 'Delete all users with age < 18.',
    initialCode: 'db.users.___ ({ age: { $lt: 18 } })',
    correctAnswers: ['deleteMany'],
    hints: ['Removes all documents matching the filter.']
  },
  {
    id: 127,
    type: 'theory',
    title: 'MongoDB: Upsert',
    description: 'What does "upsert: true" do in an update operation?',
    options: ['Throws an error if doc not found', 'If no document matches the query, a new document is created', 'Updates only if doc exists', 'None'],
    correctAnswers: [1],
    hints: ['Combination of "update" and "insert".']
  },
  {
    id: 128,
    type: 'theory',
    title: 'MongoDB: Aggregation Pipeline',
    description: 'What is the aggregation pipeline?',
    options: ['A way to delete data', 'A framework for data aggregation modeled on the concept of data processing pipelines', 'A type of index', 'None'],
    correctAnswers: [1],
    hints: ['Uses stages like $match, $group, $sort.']
  },
  {
    id: 129,
    type: 'blanks',
    title: 'MongoDB: Project Stage',
    description: 'Aggregation stage that reshapes each document in the stream (e.g. including/excluding fields).',
    initialCode: '{ $___: { name: 1, age: 0 } }',
    correctAnswers: ['project'],
    hints: ['Passes along the documents with the requested fields.']
  },
  {
    id: 130,
    type: 'coding',
    title: 'MongoDB: Count documents',
    description: 'Count total documents in collection "c".',
    initialCode: 'db.c.___ ({})',
    correctAnswers: ['countDocuments'],
    hints: ['Returns the count of documents that match the query.']
  },
  {
    id: 131,
    type: 'theory',
    title: 'MongoDB: GridFS',
    description: 'What is GridFS used for?',
    options: ['Storing small documents', 'Storing and retrieving files that exceed the BSON-document size limit of 16MB', 'Creating indexes', 'None'],
    correctAnswers: [1],
    hints: ['Divides the file into chunks.']
  },
  {
    id: 132,
    type: 'theory',
    title: 'MongoDB: TTL Indexes',
    description: 'What are TTL (Time To Live) indexes used for?',
    options: ['Data encryption', 'Automatically removing documents from a collection after a certain amount of time', 'Speeding up search', 'None'],
    correctAnswers: [1],
    hints: ['Useful for machine-generated data like logs or session information.']
  },
  {
    id: 133,
    type: 'blanks',
    title: 'MongoDB: In operator',
    description: 'Operator to match values in an array.',
    initialCode: '{ age: { $___: [20, 30] } }',
    correctAnswers: ['in'],
    hints: ['Checks if the field value is in the specified list.']
  },
  {
    id: 134,
    type: 'coding',
    title: 'MongoDB: Unwind stage',
    description: 'Deconstruct an array field from the input documents to output a document for each element.',
    initialCode: '{ $___: "$tags" }',
    correctAnswers: ['unwind'],
    hints: ['Aggregation stage for arrays.']
  },
  {
    id: 135,
    type: 'theory',
    title: 'MongoDB: WiredTiger',
    description: 'What is WiredTiger in MongoDB?',
    options: ['The documentation site', 'The default storage engine', 'A security tool', 'None'],
    correctAnswers: [1],
    hints: ['Introduced in MongoDB 3.0.']
  },
  {
    id: 136,
    type: 'theory',
    title: 'MongoDB: Indexes',
    description: 'What is the purpose of indexes in MongoDB?',
    options: ['To encrypt data', 'To store documents', 'To significantly improve query performance by reducing the amount of data the database needs to scan', 'None'],
    correctAnswers: [2],
    hints: ['Similar to an index in a book.']
  },
  {
    id: 137,
    type: 'theory',
    title: 'MongoDB: compound index',
    description: 'What is a compound index?',
    options: ['An index on one field', 'An index on multiple fields', 'A hashed index', 'None'],
    correctAnswers: [1],
    hints: ['Allows for queries on multiple fields.']
  },
  {
    id: 138,
    type: 'blanks',
    title: 'MongoDB: Text index',
    description: 'Operator used to search for string content within a text index.',
    initialCode: 'db.articles.find({ $___: { $search: "coffee" } })',
    correctAnswers: ['text'],
    hints: ['Enables full-text search capability.']
  },
  {
    id: 139,
    type: 'coding',
    title: 'MongoDB: Array push',
    description: 'Append "cool" to the "tags" array.',
    initialCode: 'db.p.update({ id: 1 }, { $___: { tags: "cool" } })',
    correctAnswers: ['push'],
    hints: ['Adds an element to an array.']
  },
  {
    id: 140,
    type: 'theory',
    title: 'MongoDB: Write Concern',
    description: 'What does "write concern" describe?',
    options: ['The speed of writes', 'The level of acknowledgment requested from MongoDB for write operations', 'The size of documents', 'None'],
    correctAnswers: [1],
    hints: ['Can range from "unacknowledged" to "majority".']
  },
  {
    id: 141,
    type: 'theory',
    title: 'MongoDB: Read Preference',
    description: 'What is "read preference" in MongoDB?',
    options: ['User\'s favorite language', 'Determines how the client routes read operations to the members of a replica set (e.g. primary vs secondary)', 'A type of index', 'None'],
    correctAnswers: [1],
    hints: ['Used for offloading read load to secondaries.']
  },
  {
    id: 142,
    type: 'blanks',
    title: 'MongoDB: Set operator',
    description: 'Operator to replace the value of a field with the specified value.',
    initialCode: 'db.u.update({ _id: 1 }, { $___: { status: "A" } })',
    correctAnswers: ['set'],
    hints: ['Core update operator.']
  },
  {
    id: 143,
    type: 'coding',
    title: 'MongoDB: Rename field',
    description: 'Rename "user_name" to "username".',
    initialCode: 'db.u.updateMany({}, { $___: { "user_name": "username" } })',
    correctAnswers: ['rename'],
    hints: ['Used to modify field names.']
  },
  {
    id: 144,
    type: 'theory',
    title: 'MongoDB: Cursor',
    description: 'What is a cursor in MongoDB?',
    options: ['A mouse pointer on screen', 'A pointer to the result set of a query', 'A database role', 'None'],
    correctAnswers: [1],
    hints: ['Allows you to iterate through the documents returned by find().']
  },
  {
    id: 145,
    type: 'theory',
    title: 'MongoDB: Change Streams',
    description: 'What are change streams useful for?',
    options: ['Editing code', 'Allowing applications to access real-time data changes without the complexity of tailing the oplog', 'Managing users', 'None'],
    correctAnswers: [1],
    hints: ['Available starting in MongoDB 3.6.']
  },
  {
    id: 146,
    type: 'blanks',
    title: 'MongoDB: Out stage',
    description: 'Aggregation stage that writes the resulting documents to a new collection.',
    initialCode: '{ $___: "newCollection" }',
    correctAnswers: ['out'],
    hints: ['Must be the last stage in the pipeline.']
  },
  {
    id: 147,
    type: 'coding',
    title: 'MongoDB: Pull operator',
    description: 'Remove element "bad" from array "tags".',
    initialCode: 'db.p.updateMany({}, { $___: { tags: "bad" } })',
    correctAnswers: ['pull'],
    hints: ['Removes all instances of a value from an existing array.']
  },
  {
    id: 148,
    type: 'theory',
    title: 'MongoDB: Transactions',
    description: 'Does MongoDB support multi-document transactions?',
    options: ['No, never', 'Yes, since version 4.0 (for replica sets) and 4.2 (for sharded clusters)', 'Only for single documents', 'None'],
    correctAnswers: [1],
    hints: ['Provides ACID properties for multi-document operations.']
  },
  {
    id: 149,
    type: 'theory',
    title: 'MongoDB: Schema Validation',
    description: 'What is MongoDB Schema Validation?',
    options: ['A tool to check data manually', 'A way to prescribe a schema for a collection, enforcing rules on the structure and content of documents', 'A backup strategy', 'None'],
    correctAnswers: [1],
    hints: ['Uses JSON Schema format.']
  },
  {
    id: 150,
    type: 'blanks',
    title: 'MongoDB: Match stage',
    description: 'Aggregation stage used to filter the documents.',
    initialCode: '{ $___: { status: "active" } }',
    correctAnswers: ['match'],
    hints: ['Similar to the find() query filter.']
  }
];
