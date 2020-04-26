"use strict";
/*
  functions() -
  function types -
*/
function add(n1, n2) {
    return n1 + n2;
}
var result = add(10, 19);
console.log(result);
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// let combinedValues: Function;
var combinedValues;
combinedValues = add;
// combinedValues=print   Type 'void' is not assignable to type 'number'. [2322]
console.log(combinedValues(8, 8));
// Callback
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function callbackFunc(value) {
    console.log(value);
}
var addHandleResult = addAndHandle(10, 15, callbackFunc);
console.log(addHandleResult);
