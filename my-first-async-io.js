const fs = require('fs');
var buffer = fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;
    const file = data.toString();
    console.log(file.split('\n').length - 1)
})