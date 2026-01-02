// Array of programming languages (simple string array)
const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach using normal function
// Loops through each element and prints the value
// Does not return anything
coding.forEach(function (val) {
    console.log(val);
})

// forEach using arrow function
// Shorter and cleaner syntax than normal function
coding.forEach((item) => {
    console.log(item);
})

// Function defined separately
// Can be reused in multiple places
function printMe(item){
    console.log(item);
}

// Passing function reference to forEach
// forEach calls printMe for every array element
coding.forEach(printMe)

// forEach with item, index, and full array
// Useful for debugging and tracking position
coding.forEach((item, index, arr)=> {
    console.log(item, index, arr);
})

// Array of objects (common in APIs / frontend projects)
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// forEach on array of objects
// Access object properties using dot notation
myCoding.forEach((item) => {
    console.log(item.languageName);
})
