
let arr =[1,2,4,5,]
//console.log(arr[6/2])

let myArray = new Array(1,2,3,4,5,6);
//console.log(myArray[2]);


// Array methods
myArray.push(7)
myArray.push(12)
 myArray.pop() // remove from last

myArray.unshift(10); // add in the place of index 0
myArray.shift()  // removes 0th index element 
console.log(myArray);

const kul = [1,2,3,4,5]
//console.log(kul[3]);


//Includes / index of
let kuld = new Array(1,2,3,4,5,6)
//console.log(kuld[1]);
console.log(kul.includes(3)); // Includes gives us result that element is present or not 
//console.log(kul.indexOf(4))


// Join
let rawat = kuld.join() // Join helps to convert an array into string 
//console.log(rawat);
//console.log(typeof(rawat));
console.log( "A ", kuld);

//slice
let kamlesh = kuld.slice(0,3) // Not manipulative , and gives copy of array
console.log( "B " ,kamlesh);


//splice
let sunny = kuld.splice(1,4) // It manipulates the oriignal array
console.log("C ", sunny);
console.log("C ", kuld);





