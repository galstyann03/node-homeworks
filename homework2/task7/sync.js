const fs = require('fs');

const fruits = 'apple, pear, peach';

try {
    fs.writeFileSync('fruits.txt', fruits);
    const data = fs.readFileSync('fruits.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.error('Error occurred:', err);
}