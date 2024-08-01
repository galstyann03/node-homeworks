const fs = require('fs');

const watcher = fs.watch('watchDir');

watcher.on('change', (eventType, filename) => {
 console.log(`watchDir changed, ${eventType}, ${filename}`);
});