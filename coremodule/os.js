//*************************** OS  (OPERATING SYSTEM) ******************************
const os = require('os');
const { uptime } = require('process');

//os.freemem()**************************
//return total free memory in RAM
//it return total free bytes in main memory

//console.log(os.freemem());
//840839168 bits

//console.log(os.freemem()/1024/1024/1024);
// 0.8654136657714844

//os.totalmen*************************
//return total memory in RAM
//it return total free bytes in main memory

//console.log(os.totalmem()/1024/1024/1024);
//3.4510879516601562

//os.homedir********************************
//return home directroy of user

// console.log(os.homedir());
// C:\Users\ASUS

//os.platform************************
//return platform of os

// console.log(os.platform());
// win32

//os.arch***************************
//return ARCHITECTURE of os

// console.log(os.arch());
// x64

//os.uptime****************************
//return time from windows os

//console.log(os.uptime());

//os.userInfo*******************
//user information

// console.log(os.userInfo());
// {
//     uid: -1,
//     gid: -1,
//     username: 'ASUS',
//     homedir: 'C:\\Users\\ASUS',
//     shell: null
//   }

//os.version****************************
//return version of os

// console.log(os.version());
// Windows 10 Home Single Language

//os.cups***********************************
//return information about proccess in CPU

//console.log(os.cpus());

//os.release************************************
//return os release version

// console.log(os.release());
// 10.0.22000

//os.type*******************************
//return the os name by type

// console.log(os.type());
// Windows_NT