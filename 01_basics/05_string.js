//  ` ` backticks and below is a example of string interpolation

/*Any valid JavaScript expression can be placed inside the curly braces, including: 
Variables
Mathematical operations
Function calls
Ternary operators
Objects (which call their toString() method) */


let name = "kuldeep"
let repocount = 74
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('kuldeep')

console.log(gameName[6]);
console.log(gameName.__proto__);

console.log(gameName.charAt('5'));
console.log(gameName.indexOf('e'))



// dividing gameName into a substring
const divide = gameName.substring(0,5)
console.log(divide)



// use of trim which helps to remove extra space 

const string = '   kuldeep   '
console.log(string)
console.log(string.trim())


// split()
//split() is a string method used to divide a string into an array of substrings based on a specified separator. 
 
const kul = "kuldeep&singh&rawat";
console.log(kul.split('&'));

const fruits = "apple,banana,orange";
const fruitsArray = fruits.split(",");
console.log(fruitsArray);
