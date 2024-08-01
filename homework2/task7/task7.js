const fs = require('fs/promises');

const dirPath = '../task3';

async function listFiles() {
    try {
        const entries = await fs.readdir(dirPath, {withFileTypes: true, recursive: true});
        entries.forEach(entry => {
            if (entry.isDirectory()) console.log(`Directory: ${entry.name}`);
            else console.log(`File: ${entry.name}`);
        });
    } catch (err) {
        console.error('Error occurred:', err.message);
    }
}

async function copyDirectory(src, dest) {
    try {
        const entries = await fs.readdir(src, {withFileTypes: true, recursive: true});
        for (const entry of entries) {
            const srcPath = src + `/${entry.name}`;
            const destPath = dest + `/${entry.name}`;

            if (entry.isDirectory()) {
                await fs.mkdir(destPath, { recursive: true });
                await copyDirectory(srcPath, destPath);
            }
            else await fs.copyFile(srcPath, destPath);
        }
    } catch (err) {
        console.error('Error occurred:', err.message);
    }
}

listFiles();
// Directory: asdf
// File: async.js
// File: fruits.txt
// File: sync.js
// File: asdf.js
copyDirectory('../task3', __dirname);

