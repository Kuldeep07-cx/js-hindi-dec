 // defining numbers

 let num1 = 10; // Integer
let num2 = 10.5; // Float
console.log(num1, num2); // Output: 10, 10.5

// number to string conversion

let num = 12345;
let numStr = num.toString(); // Convert number to string
console.log(numStr); // Output: "12345"

// Precision in Numbers
let preciseNum = 123.456789;
console.log(preciseNum.toFixed(2)); // Output: "123.46" (Rounded to 2 decimal places)

console.log(preciseNum.toPrecision(4)); // toPrecision used for precise value


//Using the Math Library
let abs =Math.abs(-7)
let rounded = Math.round(4.7); // Output: 5
let ceil = Math.ceil(4.1); // Output: 5
let floor = Math.floor(4.9); // Output: 4
console.log(abs,rounded, ceil, floor);

// Generating random numb
let randomNum = Math.random(); // Random number between 0 and 1
console.log(randomNum);


let random = ((Math.random()*10) +1);
console.log(random)


// Random number in a specific range (e.g., 10 to 20)


let min = 10, max = 20;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min; // impotant
console.log(randomInRange);


//formulas for min and max
let numbers = [10, 20, 30, 40, 50];
let maxValue = Math.max(...numbers); // Find max value in array
let minValue = Math.min(...numbers); // Find min value in array
console.log(maxValue, minValue); // Output: 50, 10


//currency
let k =1000000;
console.log(k.toLocaleString('en-IN'))