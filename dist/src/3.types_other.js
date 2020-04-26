"use strict";
/*
  Tuple - Added by Typescript: Fixed-length array
*/
var employee = {
    name: "Ankit",
    age: 25,
    mobile: 1234567890,
    hobbies: ["Sports", "Cooking"],
    role: [2, " author"] // tuple
};
// employee.role.push("admin"); typescript doesn't catch this ,push is allowed in TS for tuple
// push is exception , unfortunately it doesn't get caught by typescript , but we should avoid this
// employee.role[1] = 10;  we get error [ts] Type '10' is not assignable to type 'string'.
// employee.role = [1 , 'Manager' , 'test']; length should be same of tuple , we below error
// Types of property 'length' are incompatible. Type '3' is not assignable to type '2'
console.log(employee.name);
/*
  Enum - example {NEW , OLD}
  Added by Typescript: Automatically enumerated global constant identifiers
  Important: often you'll see enums with all-uppercase values but that's not a must-do.
  You can go with ANY value names.
*/
// we can use constants as below they also works fine, but can also use enum
var ADMIN = 0;
var READ_ONLY = 1;
var author = 2;
/*
  below is enum type , behind the scenes they all have index associated starting from 0
  i.e below enum we have indexs - AMDIN: 0 , READ_ONLY: 1 , AUTHOR: 2
  but these indexes are not fixed we can choose whatever we want like below example -
  we can choose number , string whatever we want thats flexibilty with enums.And they
  are easy to use and maintain

  enum ROLE = {
    ADMIN=10,
    READ_ONLY = 100,
    AUTHOR: 'AUTHOR'
  }
*/
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["READ_ONLY"] = 1] = "READ_ONLY";
    ROLE[ROLE["AUTHOR"] = 2] = "AUTHOR";
})(ROLE || (ROLE = {}));
var user = {
    name: "Ankit",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: ROLE.ADMIN
};
if (user.role === ROLE.ADMIN) {
    console.log("its correct role");
}
/*
  ANY  - any kind of value , no specific type assignment
  Typescript never complain about anything when we use any "any" its really flexible and
  this sound great at first but actually its a big disadvantage absolutely you want to avoid
  "any" whenever possible because any takes away all advantages typescript gives you,
  its like using vanila javascript where we have "any" type on every thing there.
  "ANY" makes sure typescript compiler can't check anything , it can only be used as a fallback
  for scenarios where we don't know which kind of data should be stored there.

  *Note - DON'T use "any" type.
*/
var userArray;
userArray = ["string", 1, true, null, undefined];
console.log(userArray);
