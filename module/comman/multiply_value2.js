const{key,firstName} = require('./multiply_value')

function printItems(items) {
    for (const value of items) {
        console.log(value);
    }
}
printItems(key);
console.log(firstName);

//multiply value transfer one file to anoter file access