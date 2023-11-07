//************************** PATH ***************************
//the parth module provide a way of working with dictories and file paths.

const path = require('path');
const { isAbsolute } = require('path/posix');

//__dirname**************

// console.log(__dirname);
// C:\Users\ASUS\Desktop\node-tut\coremodule

//__filename*******************

// console.log(__filename);
// C:\Users\ASUS\Desktop\node-tut\coremodule\path.js

//path.basename(filepath)***************
//return the file name with extension
//current file name access

// console.log(path.basename(__filename));
// path.js

//path.dirname*********************
//return directory name of any file

//console.log(path.dirname(__filename));

//path.extname******************
//return file extension name

//console.log(path.extname(__filename));

//path.resolve(directoryname , filename)*************************
//return resolve path

//console.log(path.resolve(__dirname,'test.js'));

//path.isAbsolute***************
//return true if path is absolute and flase if path is relative

console.log(path.isAbsolute(__filename));