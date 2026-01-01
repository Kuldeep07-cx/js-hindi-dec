// ==================================================
// JAVASCRIPT LOOP NOTES – OBJECT, ARRAY, MAP
// ==================================================
//
// RULE TO REMEMBER:
// OBJECT  → for...in
// ARRAY   → for...of / forEach
// MAP     → for...of / forEach
//
// for...in → loops over KEYS (property names)
// for...of → loops over VALUES (iterables)


// ================================
// OBJECT + for...in
// ================================
// ✔ BEST use case of for...in
// ✔ Iterates over object KEYS
// ✔ Access value using object[key]
// ✔ Common in JSON / config objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // key   → js, cpp, rb, swift
    // value → myObject[key]
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// ================================
// ARRAY + for...in (NOT RECOMMENDED)
// ================================
// ⚠ for...in on array gives INDEX, not value
// ⚠ Index is returned as STRING ("0", "1"...)
// ❌ Can loop over extra properties
// ❌ Avoid in interviews
// ✔ Shown only to understand behavior

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // key → index (0,1,2,3,4)
    // value → programming[key]
    console.log(programming[key]);
}


// ================================
// MAP + for...in (DOES NOT WORK)
// ================================
// ❌ for...in does NOT work on Map
// ❌ Map is NOT a plain object
// ❌ Keys are not enumerable properties
// ✔ Correct loops → for...of / forEach

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key); // ❌ no output
}


// ================================
// CORRECT WAY FOR MAP
// ================================
// ✔ for...of works because Map is iterable
// ✔ Destructuring gives key & value

for (const [key, value] of map) {
    console.log(key, value);
}
