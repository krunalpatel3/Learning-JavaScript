
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log("Cars:", cars);

const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

const cars1 = new Array("Saab", "Volvo", "BMW");
console.log("Cars:", cars1);

// Array methods
console.log("Array Length:", fruits.length);
fruits.push("Orange");
console.log("After push:", fruits);
fruits.pop();
console.log("After pop:", fruits);
fruits.shift();
console.log("After shift:", fruits);
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);
console.log("Array IndexOf 'Banana':", fruits.indexOf("Banana"));
fruits.splice(1, 1);
console.log("After splice:", fruits);
fruits.sort();
console.log("After sort:", fruits);
fruits.reverse();
console.log("After reverse:", fruits);

fruits.indexOf("Cherry") !== -1 ? console.log("Cherry is in the array") : console.log("Cherry is not in the array");

let position = fruits.lastIndexOf("Apple") + 1;
if (position > 0) {
    console.log("Apple is in the array at position:", position);
} else {
    console.log("Apple is not in the array");
}   


console.log("includes 'Banana':", fruits.includes("Banana"));
console.log("includes 'Orange':", fruits.includes("Orange"));


// Multidimensional Arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element at [1][2]:", matrix[1][2]);

// Array Iteration
console.log("Iterating with for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("Iterating with forEach:");
fruits.forEach(function(fruit) {
    console.log(fruit);
});

console.log("Iterating with for...of:");
for (let fruit of fruits) {
    console.log(fruit);
}

console.log("Iterating with for...in:");
for (let index in fruits) {
    console.log(fruits[index]);
}

fruits.push("Grapes");
console.log("After push Grapes:", fruits);

// Array Destructuring
const [firstFruit, secondFruit,thirdFruit] = fruits;
console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);
console.log("Third Fruit:", thirdFruit);

// Spread Operator
const moreFruits = ["Mango", "Pineapple"];
const allFruits = [...fruits, ...moreFruits];
console.log("All Fruits:", allFruits);

// Array Methods: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);


// Array of Objects
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

console.log("People:", people);
console.log("First Person's Name:", people[0].name);
console.log("Second Person's Age:", people[1].age);

