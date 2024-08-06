const http = require('http');
const fs = require('fs');

const filePath = '../package.json'; // assuming it is a large file

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const readableStream = fs.createReadStream(filePath);
    readableStream.on('error', (err) => {
        console.error(err.message);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("Internal Server Error");
    });
    readableStream.pipe(res);
});

server.listen(3001);