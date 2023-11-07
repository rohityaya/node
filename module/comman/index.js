const i =require('./item')
/*
comman module 
let items =['pen ','paper']
function printItems(items) {
    for (const value of items) {
        console.log(value);
    }
}
printItems(items)
*/
// one file to another flie access type second
function printItems(items) {
    for (const value of items) {
        console.log(value);
    }
}
printItems(i.items)
//one file to another flie access type first
//console.log(i);