/*
 Typescript Types - Object
 - Objects - Any javascript object ,more specific types (type of object) are possible
   object example - {age: 30}
*/

// interface personObject {
//   name: string;
//   age: number;
//   mobile: number;
//   hobbies: Array<string>;
// }

// const person: personObject = {
const person = {
  name: "Ankit",
  age: 25,
  mobile: 1234567890,
  hobbies: ["Sports", "Cooking"]
};

/*
  console.log(person.nickName);
  Above will give error i.e [ts] Property 'nickName' does not exist on type
    '{ name: string; age: number; number: number; }'. [2339]
  So will get error during development or compile time ,whereas in javascript is not an issue and
  it will break the page on runtime when we run our app/page in browser.
*/

console.log(person.age);
console.log(person.name);
console.log(person.mobile);

/*
  Array - Any Javascript array , type can be flexible or strict (regarding the element types)
  Array prototype is Object , we can say array is object.
  Array in javascript can be on any type string , number or multitype (:any)
  values like ['test' , 2 , true , null];
*/

let favoriteActivities: string[];

favoriteActivities = ["Sports"];
favoriteActivities.push("Running");

for (const hobby of person.hobbies) {
  // for of loop used to get values of an array
  console.log(hobby.toUpperCase());
}

for (const hobby in person.hobbies) {
  // for in loop used to get index of values in array
  console.log(hobby);
}
