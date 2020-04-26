/*
  functions() -
  function types -
*/

function add(n1: number, n2: number): number {
  return n1 + n2;
}

const result = add(10, 19);
console.log(result);

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues=print   Type 'void' is not assignable to type 'number'. [2322]
console.log(combinedValues(8, 8));

// Callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

function callbackFunc(value: number) {
  console.log(value);
}

const addHandleResult = addAndHandle(10, 15, callbackFunc);

console.log(addHandleResult);
