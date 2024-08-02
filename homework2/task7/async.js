const fs = require('fs');

const fruits = 'banana, plum, orange';

fs.writeFile('fruits.txt', fruits, (err) => {
    if (err) throw err;
});

fs.readFile('fruits.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});