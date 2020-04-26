"use strict";
/**
 * Typescript
 * Types in Typescript - number , string , boolean , array , null , undefined , tuple , any , unknown
 * unknown: "unknown" is new type similar to "any" type but it throws compile time errors
    unless we have proper checks in place
 */
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
/**
 * Below with the help of hasName function we are checking myVariable is an object
   and also does it contains name param then only it works else not.
 */
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
//here below we are assuring compiler that myVariable is actually of type string
myVariable.toUpperCase();
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; [ts] Type 'unknown' is not assignable to type 'string'. [2322]
// if we add sometype checking it the works and its better than "any"
if (typeof userInput === "string") {
    userName = userInput;
}
