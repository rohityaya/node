const http = require('http')
const fs = require('fs');

let server = http.createServer((req, res) => {
    let stream = fs.createReadStream('country.json');

    //small data

    // stream.on('data', (chunk) => {
    //     res.end(chunk.toString())
    // })

    // stream.on('end',()=>{
    //     res.end();
    // })

    //large data

    stream.on('open',()=>{
        stream.pipe(res);
    })
})

server.listen(3000, () => {
    console.log("server running");
})





























// const fs = require('fs')

// // let data = fs.readFileSync('test.txt','utf-8');

// // let stream = fs.createReadStream('test.txt');//fast data input

// let stream = fs.createReadStream('country.json');

// stream.on('data' , (chunk) =>{
//     console.log(chunk.toString());
// })
// stream.on('end',()=>{
//     console.log("stream end");
// })

// stream.on('error',(err)=>{
//     console.log(err);
// })
// //console.log(data);