let num = 5;
let numDouble = 42.3;
let twoNum = 2;

let numLong = 42345.3456456;

console.log("Plus:", num + numDouble);
console.log("Minus:", num - numDouble);
console.log("Multiply:", num * numDouble);
console.log("Divide:", num / numDouble);
console.log("Modulus:", num % numDouble);
console.log("Exponentiation:", num ** twoNum);

console.log(" Assignment Operators ");

// Assignment Operators
let a = 10;
a += 5; // a = a + 5
console.log("a after += 5:", a);
a -= 3; // a = a - 3
console.log("a after -= 3:", a);
a *= 2; // a = a * 2
console.log("a after *= 2:", a);
a /= 4; // a = a / 4        
console.log("a after /= 4:", a);
a %= 3; // a = a % 3
console.log("a after %= 3:", a);
a **= 2; // a = a ** 2
console.log("a after **= 2:", a);   

// Comparison Operators
let x = 10;
console.log("Equal to (==):", x == "10");
console.log("StrictEqual (===):", x === "10");
console.log("Not equal (!=):", x != "10");
console.log("NotStrictEqual (!==):", x !== "10");
console.log("Greater than (>):", x > 5);
console.log("Less than (<):", x < 15);
console.log("Greater than or equal (>=):", x >= 10);
console.log("Less than or equal (<=):", x <= 10);

console.log("Logical Operators");
// Logical Operators
let y = 5;
let z = 10;
console.log("Logical AND (&&):", y > 0 && z < 15);
console.log("Logical OR (||):", y < 0 || z < 15);
console.log("Logical NOT (!):", !(y > 0));


