function add(a, b) {
    return a + b;
}

console.log("Addition of 5 and 3:", add(5, 3));

// Conditional Statements
let age = 25;

if (age >= 18) {   
    console.log("You are an adult.");
}else if (age >= 13) {
    console.log("You are a teenager.");
}else{
    console.log("You are a child.");
}

// for loop
console.log("For Loop:");

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

let arrList = ["apple", "banana", "cherry"];
for (let i = 0; i < arrList.length; i++) {
    console.log("Array Element:", arrList[i]);
}

arrList.forEach(function(element) {
    console.log("Array Element using forEach:", element);
});

// while loop
console.log("While Loop:");
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}

// do-while loop
console.log("Do-While Loop:");
let doCount = 0;    
do {
    console.log("Do Count:", doCount);
    doCount++;
} while (doCount < 5);

// switch statement
let day = 3;    
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Ternary Operator
let isMember = true;
let discount = isMember ? 0.1 : 0;  
console.log("Discount:", discount);

// Functions with default parameters
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greet()); // Uses default parameter
console.log(greet("Alice")); // Overrides default parameter

// Arrow function
const multiply = (x, y) => x * y;
console.log("Multiplication of 4 and 5:", multiply(4, 5));

// Recursion
function factorial(n) {
    if (n === 0) {  
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

// Higher-order function
function filterArray(arr, callback) {
    let result = [];    
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = filterArray(numbers, function(num) {
    return num % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

// Closures
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {  
        console.log("Outer Variable:", outerVariable);
        console.log("Inner Variable:", innerVariable);
    };
}
const newFunction = outerFunction("Hello");
newFunction("World");

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE!");
})();

// Callback function
function fetchData(callback) {
    setTimeout(function() {
        let data = "Fetched data";
        callback(data);
    }, 2000);
}

fetchData(function(result) {
    console.log(result);
});



// Three functions to run in steps
function step1() {
  return Promise.resolve("A");
}
function step2(value) {
  return Promise.resolve(value + "B");
}
function step3(value) {
  return Promise.resolve(value + "C");
}



// Run the three functions in steps
step1()
.then(function(value) {
  return step2(value);
})
.then(function(value) {
  return step3(value);
})


// Function to run the three functions in steps
async function run() {
  let v1 = await step1();
  let v2 = await step2(v1);
  let v3 = await step3(v2);
    console.log("Final Value:", v3);
}

run();
