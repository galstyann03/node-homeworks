const fs = require('fs/promises');

async function errorHandling() {
    try {
        const data = await fs.readFile('data.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error('Error occurred:', err.message);
    }
}

errorHandling();