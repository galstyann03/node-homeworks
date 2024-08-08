const fs = require('fs');

const readableStream = fs.createReadStream('readFile.txt', {highWaterMark: 30});
const writableStream = fs.createWriteStream('writeFile.txt', {highWaterMark: 20});

<<<<<<< HEAD
let backpressureCount = 1;

writableStream.on('drain', () => console.log("The writable buffer drained. Ready for accepting more data.", backpressureCount++));
readableStream.pipe(writableStream);
=======
readableStream.on('data',  (chunk) => {
    const shouldContinue = writableStream.write(chunk);
    if (!shouldContinue) readableStream.pause();
});

writableStream.on('drain', () => {
    readableStream.resume();
});
>>>>>>> streams-homework
