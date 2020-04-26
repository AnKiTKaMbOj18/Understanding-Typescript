/*
  Union -
*/

// function combine(input1: number, input2: number) {
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

const combinedAges = combine(20, 15);
console.log(combinedAges);

/*
  function combine(input1: number, input2: number) {
    return input1+input2;
  }
  when function will be declared with number input type we gets issue
  [ts] Argument of type '"Max"' is not assignable to parameter of type 'number'. [2345]
  const combinedNames = combine("Max", "Anna");
  if we use above peace of code we will get error
  So to solve this problem of using same function for two different types we can use union
  function combine(input1: number | string, input2: number | string) {
    return input1 + input2;
  }
*/

const combinedNames = combine("Max", "Anna");

console.log(combinedNames);

/*
  Literal - below is the example of literal type using union type
*/

function combined(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-string"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

const combineAges = combined(20, 15, "as-number");
console.log(combineAges);

const combineNames = combined("Max", "Anna", "as-string");

console.log(combineNames);

/*
  Alias - we can use alias type i.e using type keyword to create alias for literal and unions
  and can be used at multiple places instead of repeating same code as we are doing
*/

type COMBINALBLE = number | string;

function combinable(value1: COMBINALBLE, value2: COMBINALBLE) {
  if (typeof value1 === "number" && typeof value2 === "number")
    return +value1 + +value2;
  else return value1.toString() + " " + value2.toString();
}

const combinableNumber = combinable(10, 15.5);
console.log(combinableNumber);

const combinableText = combinable("Ankit", "Kamboj");
console.log(combinableText);
