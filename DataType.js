let str = "Hello, World! double quotes work fine";
let str1 = 'Hello, World! single quotes also work';
let num = 42;
let numDouble = 42.3;
let numLong = 42345.3456456;
let bool = true;
let undef;
let nul = null;

let exampleUndefined = undefined;
let exampleUndefined2; // This variable is declared but not assigned, so it is undefined
let $ = "Hello World";

console.log("String:", str);
console.log("String1:", str1);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Null:", nul);
console.log("Explicitly Undefined:", exampleUndefined);
console.log("Implicitly Undefined:", exampleUndefined2);
console.log("Number with Decimal:", numDouble);
console.log("Long Number:", numLong);
console.log("Dollar Sign Variable:", $);

/*

Primitive Data Types in JavaScript, including string, number, boolean, undefined, null 
We also show how to declare variables using let and const, 
and how to handle errors when trying to reassign a constant variable. 

Reference Data Types in JavaScript: Arrays, Objects, 
*/

// Arrays
let arr = [1, 2, 3, "four", true];
console.log("Array:", arr);
console.log("Array get first element:", arr[3]);
// Objects
let obj = { name: "Alice", age: 30 };
console.log("Object:", obj);
console.log("Object name:", obj.name);
console.log("Object age:", obj.age);

