const fs = require('fs');

const readableStream = fs.createReadStream('readFile.txt', {highWaterMark: 30});
const writableStream = fs.createWriteStream('writeFile.txt', {highWaterMark: 20});

let backpressureCount = 1;

writableStream.on('drain', () => console.log("The writable buffer drained. Ready for accepting more data.", backpressureCount++));
readableStream.pipe(writableStream);