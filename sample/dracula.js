// This is a single line comment

/* This is a
   multi-line comment */

// Global variable
let globalVar = 10;

// Object
let obj = {
  name: "John",
  age: 30,
  city: "New York"
};

// Array
let arr = [1, 2, 3, 4, 5];

// Function
function add(a, b) {
  return a + b;
}

// Arrow function
const subtract = (a, b) => a - b;

// Class
class Circle {
  constructor(r) {
    this.radius = r;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Promise
let promise = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

// Async/Await
async function asyncFunc() {
  const result = await promise;
  console.log(result);
}

// If-else statement
if (globalVar > 5) {
  console.log("globalVar is greater than 5");
} else {
  console.log("globalVar is less than or equal to 5");
}

// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While loop
while (globalVar < 15) {
  globalVar++;
}

// Do-while loop
do {
  globalVar--;
} while (globalVar > 0);

// Switch case
switch (globalVar) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Default");
}

// Map
let map = new Map();
map.set('one', 1);
map.set('two', 2);
map.set('three', 3);

// Set
let set = new Set([1, 2, 3, 4, 5]);

// Template literals
let str = `Hello, ${obj.name}!`;

// Destructuring assignment
let {name, age} = obj;

// Spread operator
let arr2 = [...arr, 6, 7, 8, 9, 10];

// Rest parameters
function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}