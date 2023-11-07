const fs = require('fs')

//synchronous

//mkdirSync***************

// mkdirSync create a folder

//fs.mkdirSync('test');

//proper directory strucher

//console.log(__dirname);

//current file path
//console.log(__filename);

//create folder direct screen

//fs.mkdirSync(__dirname +'test');

//create folder under a folder
//fs.mkdirSync(__dirname +'/test');

//other place create a folder
//let currentDirectory = __dirname;
//fs.mkdirSync(currentDirectory.replace('coremodule','')+'test')

//rmdirSync************************

//used to delete folder
//fs.rmdirSync('test');


//let currentDirectory = __dirname;
//fs.rmdirSync(currentDirectory.replace('coremodule','')+'test')

//writeFileSync**************************

//create a new file if doesn't exist, and if file already exist it delete all content of file and re-write data into it

//fs.writeFileSync('test',`Rohit yadav
//ry3566510@gmail.com`);

//appendFileSync*********************

//data last add is a append
//fs.appendFileSync('test',"\n ffsfsffafshjshssvvvq")

//readFileSync******************************

//read a file and return data

//let data = fs.readFileSync('test','utf-8');
//console.log(data);

//renameSync*********************

//rename file name

//fs.renameSync("test","testing.txt")

//unlinkSync***************************

//used delete file permantly

//fs.unlinkSync('testing.txt');

//****************** ASYNCHRONOUS **************************//
//const fs = require('fs')


//mkdir********************
//create a folder

// fs.mkdir('test',()=>{
//     console.log("folder create");
// });
// console.log("rohit");

//rmdir***************************

// //delete a folder

// fs.rmdir('test',() =>{
//     console.log("delete folder");
// });
// console.log("abcdefg");

//writeFile*******************
//create folder and undera data

// fs.writeFile("testing.txt","rohit yadav",() =>{
//     console.log("file write successfully");
// })

//appendFile***************************
// //add data a file last line

// fs.appendFile("testing.txt","\nfaahgscvcbnshjs",()=>{
//     console.log("append data successfully");
// });

//readFile***************************
//used to read data

// fs.readFile("testing.txt","utf-8",(err,data)=>{
//     console.log(data);
// });

//rename************************
// //used to rename file

// fs.rename('testing.txt','test.txt',()=>{
//     console.log("rename file");
// });

//unlink******************************
//delete a file

fs.unlink('test,txt',(err) =>{
    console.log(err);
})