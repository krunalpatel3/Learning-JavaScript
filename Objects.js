const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

// Accessing object properties
console.log(car.type); // Output: Fiat
console.log(car.model); // Output: 500



const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});
console.log(person.lastName);

let age = person.age;
console.log("Person's age:", age);

let ageNotation = person["age"];
console.log("Person's age using bracket notation:", ageNotation);

// change the value of a property
person.age = 51;
console.log("Updated person's age:", person.age);

// DELETE a property
delete person.eyeColor;
console.log("Person after deleting eyeColor:", person);

// Function as a property of an object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Full Name:", person1.fullName());

// Constructor function
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

const myFather = new Person("John", "Doe", 50, "blue");
console.log("My Father:", myFather);

const myMother = new Person("Sally", "Rally", 48, "green");
console.log("My Mother:", myMother);


// Object with getter and setter
const personTwo = {
  firstName: "John",
  lastName: "Doe",
  
  language: "",
  
  set lang(lang) {
    this.language = lang;
  },
  
  get getlanguage() {
    return this.language;
  },

   get getLastName() {
    return this.lastName;
  }
};

personTwo.lang = "English";
console.log("Person's language:", personTwo.getlanguage);

console.log("Person's last name:", personTwo.getLastName);

// Object with method
const personThree = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log("Person's full name:", personThree.fullName());

// Object with nested objects
const personFour = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  }
};
console.log("Person's street:", personFour.address.street);
console.log("Person's city:", personFour.address.city);
console.log("Person's state:", personFour.address.state);

// Object with nested arrays
const personFive = {
  firstName: "John",    
  lastName: "Doe",
  age: 50,
  hobbies: ["reading", "traveling", "swimming"]
};
console.log("Person's hobbies:", personFive.hobbies);
console.log("Person's first hobby:", personFive.hobbies[0]);
console.log("Person's second hobby:", personFive.hobbies[1]);

// Object with nested objects and arrays
const personSix = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  },
  hobbies: ["reading", "traveling", "swimming"]
};
console.log("Person's address:", personSix.address); 

// Create an Object:
const personFourUpdated = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

//JavaScript Object.defineProperty()
// Define a new property fullName with a getter 
// add function in personFourUpdated object.
Object.defineProperty(personFourUpdated, "fullName", {
  get: function() {
    return this.firstName + " " + this.lastName;
  }
});

console.log("Person's full name:", personFourUpdated.fullName);

// Add a Property
Object.defineProperty(personFourUpdated, "year", {value:"2008"});
console.log("Person's year:", personFourUpdated.year);

// Change a Property
Object.defineProperty(personFourUpdated, "language", {value : "HINDI"});
console.log("Person's language:", personFourUpdated.language);


// Prevents adding object properties in personFourUpdated object.
Object.preventExtensions(personFourUpdated)

// Returns true if properties can be added to an object, otherwise false.
console.log("isExtensible:", Object.isExtensible(personFourUpdated));

// Returns true if properties can be added to an object, otherwise false.
Object.seal(personFourUpdated)

// Returns true if object is sealed
console.log("isSealed:", Object.isSealed(personFourUpdated));

// Prevents any changes to an object
Object.freeze(personFourUpdated)


// Returns true if object is frozen
console.log("isFrozen:", Object.isFrozen(personFourUpdated));


// Prototype used to add properties and methods to an object constructor.
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

const myFatherUpdated = new Person("John", "Doe", 50, "blue");
console.log("My Father's full name:", myFatherUpdated.fullName());

Person.prototype.nationality = "English";
console.log("My Father's nationality:", myFatherUpdated.nationality);





