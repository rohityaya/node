const http = require('http')
const fs = require('fs')
const path = require('path');
const { log } = require('console');

//SERVER CREATE
let server = http.createServer((req,res)=>{
// console.log(req);
// process.exit();//server close

//HOW TO SEND RESPONE SERVER *************************************

// res.setHeader('content-type','text/html');
// res.write("<h1>hello world </h1>");
// res.end();

//ROUTES IN NODE JS WITH DATA ************************************


// console.log(req.url);

// switch (req.url) {
//     case "/":
//         res.write("<h1>HOME PAGE </h1>");
//         break;
//        case "/about":
//         res.write("<h1>ABOUT PAGE </h1>");
//         break;
//     default:
//         res.write("<h1>404 PAGE </h1>");
//         break;
// }
// res.end();

//FILE ROUTING IN NODE JS**************

// let data = '';
// switch (req.url) {
//         case "/":
//             data = fs.readFileSync(path.join(__dirname,'home.html'));
//             res.end(data);
//             break;
//            case "/about":
//             data = fs.readFileSync(path.join(__dirname,'about.html'));
//             res.end(data);
//             break;
//         default:
//             data = fs.readFileSync(path.join(__dirname,'404.html'));
//             res.end(data);
//             break;
//     }


//GET DATA IN NODE JS IN FORM*********************************

    // if(req.url === '/' && req.method ==="GET"){
    //     res.setHeader('content-type', 'text/html');
    //     let data =fs.readFileSync(path.join(__dirname ,'form.html'));
    //     res.end(data);
    // }
    // if(req.url === '/data' && req.method ==="POST"){
    //   let data =[];
    //     req.on('data',(chunk) =>{
    //         data.push(chunk);
    //   })  
    //   req.on('end',()=>{
    //     let d = Buffer.concat(data).toString();
    //     //console.log(d);
    //     fs.appendFileSync('text.txt',d)
    //   })
    // }

    let data = {
        data0:[
          {count: 1, length: 1, skill: "Activating"},
          {count: 4, length: 1, skill: "Using"},
          {count: 2, length: 1, skill: "Analyzing"}
        ],
        data1: [
          {count: 2, length: 1, skill: "Summarizing"}
        ],
        data2: [
          {count: 1, length: 1, skill: "Predicting"},
          {count: 4, length: 1, skill: "Analyzing"}
        ]
      }
 
      res.setHeader('content-type','application/json');
      res.end(JSON.stringify(data))

})


//server listen
server.listen(4559 ,(port)=>{
    console.log(`server running on port number 4558`);
});
