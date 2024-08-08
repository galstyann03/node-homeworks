const fs = require('fs');

const readableStream = fs.createReadStream('readFile.txt', {highWaterMark: 30});
const writableStream = fs.createWriteStream('writeFile.txt', {highWaterMark: 20});

readableStream.on('data',  (chunk) => {
    const shouldContinue = writableStream.write(chunk);
    if (!shouldContinue) readableStream.pause();
});

writableStream.on('drain', () => {
    readableStream.resume();
});