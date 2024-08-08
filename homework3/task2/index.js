const { Transform } = require('stream');
const fs = require('fs');

const inputFile = 'todos.json';
const outputFile = 'todosWithTimestamps.json';

// Transform stream that adds a 'timestamp' to each todo item
const addTimestampTr  = new Transform({
<<<<<<< HEAD
    transform(chunk, encoding, callback) {
        // parsing the chunk of code and extracting 'todos' array
=======
    objectMode: true,
    transform(chunk, encoding, callback) {
        console.log(chunk);
>>>>>>> streams-homework
        const todos = JSON.parse(chunk).todos;

        // adding 'timestamp' property to each todo item
        const transformedTodos = todos.map(todo => ({...todo, timestamp: new Date().toLocaleString()}));

        // converting the object back to a JSON string and pushing to readable stream
<<<<<<< HEAD
        this.push(JSON.stringify({todos: transformedTodos}, null, 2));
        callback();
    }
});

const readableStream = fs.createReadStream(inputFile);
=======
        callback(null, JSON.stringify({todos: transformedTodos}, null, 2));
    }
});

const readableStream = fs.createReadStream(inputFile, "utf-8");
>>>>>>> streams-homework
const writeableStream = fs.createWriteStream(outputFile);

readableStream.pipe(addTimestampTr).pipe(writeableStream);