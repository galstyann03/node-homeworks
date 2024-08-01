const fs = require('fs/promises');

const dirPath = 'testDir';
const filePath = dirPath + '/testFile.txt';
const newFilePath = dirPath + '/renamedFile.txt';

async function fileAndDirectoryManagement() {
    try {
        await fs.mkdir(dirPath);
        console.log('directory created');

        await fs.writeFile(filePath, 'It is the file inside the testDir directory.');
        console.log('file created');

        await fs.rename(filePath, newFilePath);
        console.log('file renamed');

        await fs.unlink(newFilePath);
        console.log('file removed');

        await fs.rmdir(dirPath);
        console.log('directory removed');
    } catch (err) {
        console.error("Error occurred:", err.message);
    }
}

fileAndDirectoryManagement();