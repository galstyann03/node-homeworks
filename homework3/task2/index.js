const { Transform } = require('stream');
const fs = require('fs');

const inputFile = 'todos.json';
const outputFile = 'todosWithTimestamps.json';

// Transform stream that adds a 'timestamp' to each todo item
const addTimestampTr  = new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
        console.log(chunk);
        const todos = JSON.parse(chunk).todos;

        // adding 'timestamp' property to each todo item
        const transformedTodos = todos.map(todo => ({...todo, timestamp: new Date().toLocaleString()}));

        // converting the object back to a JSON string and pushing to readable stream
        callback(null, JSON.stringify({todos: transformedTodos}, null, 2));
    }
});

const readableStream = fs.createReadStream(inputFile, "utf-8");
const writeableStream = fs.createWriteStream(outputFile);

readableStream.pipe(addTimestampTr).pipe(writeableStream);