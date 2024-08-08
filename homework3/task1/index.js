const fs = require('fs');

const readableStream = fs.createReadStream("data1.txt");
const writableStream = fs.createWriteStream("data2.txt");

// with pipes
// readableStream.pipe(writableStream);


// without pipes
readableStream.on('data', (chunk) => {
    writableStream.write(chunk);
});

readableStream.on('end', () => {
    writeableStream.end();
});