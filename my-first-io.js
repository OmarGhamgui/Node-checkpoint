const fs = require('fs');



const fileContent = fs.readFileSync(process.argv[2]).toString();
const contentLength = fileContent.split('\n').length - 1;

console.log(contentLength);