const fs = require('fs/promises');

async function readAndPrintMetadata() {
    try {
        const stats = await fs.stat(__filename);
        console.log(`File size: ${stats.size}`);
        console.log(`Creation date: ${stats.birthtime}`);
        await fs.chmod(__filename, fs.constants.O_RDONLY);
    } catch (err) {
        console.error('Error occurred:', err.message);
    }
}

readAndPrintMetadata();