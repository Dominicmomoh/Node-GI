const fs = require('fs');
var buffer = fs.readFileSync(process.argv[2], "utf8");
const bufferArray = buffer.split("\n");
console.log(bufferArray.length - 1);