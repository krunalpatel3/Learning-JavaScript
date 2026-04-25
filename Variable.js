var number = 10;
var string = "Hello, World!";
var boolean = true;
var undefinedVariable;
var nullVariable = null;
let anotherNumber = 20; // Using let for block-scoped variable
const constantValue = 3.14; // Using const for a constant value

console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Undefined Variable:", undefinedVariable);
console.log("Null Variable:", nullVariable);
anotherNumber = 30; // Reassigning the value of anotherNumber
console.log("Another Number:", anotherNumber);
try {
    constantValue = 2.71; // This will cause an error because constantValue is a constant
    console.log("Constant Value:", constantValue);
} catch (error) {
    console.error("Error:", error.message);
}