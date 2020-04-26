"use strict";
/**
 * Typescript - TypeScript is an open-source programming language developed and maintained by Microsoft.
 * It is a strict syntactical superset of JavaScript and adds optional static typing to the language.
 * TypeScript is designed for development of large applications and transcompiles to JavaScript
 * Main benefit using typescript is we can fix issue during development
 * Issues can be caught at compile time whereas in Javascript they can only be caught at runtime
 * Lesser number of issues will occur during runtime as compared to javascript
 * That means. Typescript's type system only helps you during development (i.e before the
   code gets compiled)
 * The key difference is: Javscript uses "dynamic types" (resolved at runtime),
    Typescript uses "static types" (set during development)

 * Note - Typescript only supports during development as browsers dont support typescript
 */
//Typescript Types - number , string , boolean , object , null , undefined , tuple , symbol
function add(n1, n2, showResult, phrase) {
    // below commented code is javascript way of handling types which can be avoided using typescript
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //   throw new Error("Incorrect input!");
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return result;
}
var number1 = 10;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
