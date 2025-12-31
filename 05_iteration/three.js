// ===================== for...of LOOP =====================
// for...of is used to iterate over ITERABLE values.
// Iterable means: arrays, strings, maps, sets.
// It does NOT work directly on objects.

// Examples of iterable collections:
// ["", "", ""]   → array of strings
// [{}, {}, {}]   → array of objects


// --------------------- Array with for...of ---------------------
// Array is iterable, so for...of works directly.

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);    // prints each element of array
}


// --------------------- String with for...of ---------------------
// String is iterable character by character.

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)   // prints each character
}


// ===================== MAPS =====================
// Map stores key–value pairs.
// Keys can be of any data type.
// Map remembers insertion order.
// Duplicate keys are NOT allowed (last value overwrites previous).

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")     // duplicate key → value overwritten

// console.log(map);       // prints full Map object


// --------------------- Looping over Map ---------------------
// Map is iterable, so for...of works directly.
// Each iteration returns an array: [key, value]

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// ===================== OBJECTS =====================
// Objects store key–value pairs.
// Objects are NOT iterable using for...of.

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// ❌ This will NOT work because object is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


// --------------------- Correct way to loop Object ---------------------
// Object.entries() converts object into array of [key, value] pairs

for (const [key, value] of Object.entries(myObject)) {
    // console.log(key, ':-', value);
}
