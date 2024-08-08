const http = require('http');
const {Server} = require('socket.io');
const {Transform} = require('stream');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("Internal Server Error");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Client connected');

    // Create a Transform stream to convert input to uppercase
    const upperCaseTr = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().toUpperCase());
            callback();
        }
    });

    // Listen for 'inputStream' event from the client
    socket.on('inputStream', (data) => {
        // Write the input data to the Transform stream
        upperCaseTr.write(data);

        // Handle the transformed data when it becomes available
        upperCaseTr.on('data', (chunk) => {
            // Send the transformed data back to the client using 'outputStream' event
            socket.emit('outputStream', chunk.toString());
        });
    });

    socket.on('disconnect', () => {
        console.log(`Client disconnected`);
    });
});

server.listen(3000);