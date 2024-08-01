const fs  = require('fs/promises');

const fileName = 'example.txt';

async function basicFileOperations() {
    try {
        await fs.writeFile(fileName, 'Hello, World!');
        await fs.appendFile(fileName, '\nThis is Node.js FS module.');
        const content = await fs.readFile(fileName, 'utf8');
        console.log(content);
    } catch (err) {
        console.error(err);
    }
}

basicFileOperations();