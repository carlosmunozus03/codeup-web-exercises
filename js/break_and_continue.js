'use strict';

//var userNum = parseFloat(prompt('Enter a number between 1 and 50'));
//
//console.log("Random odd number to skip is " + userNum);
//
//for (var i = 1; i < 50; i++) {
//    if (i % 2 === 0) {
//        continue;
//    }
//    if (userNum === i) {
//        console.log("Yikes! Skipping number " + userNum);
//    }
//    console.log('Here is a odd number: ' + i);
//}
var oddNumber = parseInt(prompt('Enter a number between 1 and 50'));
function isNumberEven(num) {
    return num % 2 === 0;
    //f(num % 2 === 0) {
    //   return true;
    // else {
    //   return false;
    //
}
function isNumberInRange(num) {
    return num >= 1 && num <= 50;
}
while(true) {
    if (!isNumberEven(oddNumber) && isNumberEven()) {
        break;
    }
    oddNumber = parseInt(prompt('Enter number 1 - 50'));
}
for (var i = 1;i < 50;i += 2) {
    if (i === oddNumber) {
        console.log('skyp' + oddNumber);
    }
}
// falta terminar