/**
 * Typescript
 * Types in Typescript - number , string , boolean , array , null , undefined , tuple , any , unknown
 * unknown: "unknown" is new type similar to "any" type but it throws compile time errors
    unless we have proper checks in place
 */

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
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
(myVariable as string).toUpperCase();
