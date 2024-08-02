const fs = require('fs');

const watcher = fs.watch('watchDir');

watcher.on('change', (eventType, filename) => {
 console.log(`watchDir changed, ${eventType}, ${filename}`);
});

fs.writeFileSync('watchDir/homeworks.json', JSON.stringify(watcher, null, 2));