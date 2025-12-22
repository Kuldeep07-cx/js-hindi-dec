// Dates

let myDate = new Date() // Creates Date object with current date & time

console.log(myDate.toString());        // Full date string with timezone
console.log(myDate.toDateString());    // Date only (no time)
console.log(myDate.toLocaleString());  // Localized date & time
console.log(typeof myDate);            // object


// Creating custom dates

// let myCreatedDate = new Date(2023, 0, 23)        // Jan 23, 2023 (month is 0-based)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // Jan 23, 2023, 5:03 AM
// let myCreatedDate = new Date("2023-01-14")      // ISO format (recommended)

let myCreatedDate = new Date("01-14-2023")        // MM-DD-YYYY (local format)
console.log(myCreatedDate.toLocaleString());      // Local readable output


// Timestamps

let myTimeStamp = Date.now() // Current timestamp in milliseconds (since 1970)

console.log(myTimeStamp);                     // Current time (ms)
console.log(myCreatedDate.getTime());         // Timestamp of created date (ms)
console.log(Math.floor(Date.now() / 1000));   // Timestamp in seconds


// Working with Date parts

let newDate = new Date() // Create new Date object
console.log(newDate);    // ISO format date

console.log(newDate.getMonth() + 1); // Month (1–12)
console.log(newDate.getDay());       // Day of week (0–Sunday, 6–Saturday)


// Template Literal – used for string interpolation
console.log(`${newDate.getDay()} and the time`);


// Get weekday name using Intl API

console.log(
  newDate.toLocaleString('default', {
    weekday: "long", // Full weekday name (e.g., Monday)
  })
);
