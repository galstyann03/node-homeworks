const fs = require('fs/promises');

const filePath = 'users.json';
const newUser = {
    name: 'Narek',
    age: 21
};

async function jsonFileHandling() {
    try {
        const users  = await fs.readFile(filePath, 'utf8');
        const parsedUsers = JSON.parse(users);
        parsedUsers.users.push(newUser);
        await fs.writeFile(filePath, JSON.stringify(parsedUsers, null, 2));
    } catch (err) {
        console.log('Error occurred:', err.message);
    }
}

jsonFileHandling();