const fs = require('fs');
const textRead = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textRead);
const textOut = `This is what I know about Avocado ${textRead}\n created on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt',textOut)
console.log("file written");


