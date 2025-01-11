const fs = require('fs');
const { start } = require('repl');

//Blocking syncronous way
/*
const textRead = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textRead);
const textOut = `This is what I know about Avocado ${textRead}\n created on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt',textOut)
console.log("file written");
*/

//Non blocking async way 

/*
fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
    console.log(data);
});
console.log("Will Read File");
*/

//Call Back way of reading file 

fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2);
        fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
                console.log("Your file has been written 😀");
                fs.readFile('./txt/final.txt','utf-8',(err,data4)=>{
                    console.log(data4);
                })
            })

        })
    })
})
