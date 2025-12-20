// Primitive

// 7 types: String, Number , Bigint,  Boolean , null, undefined, Symbol
 




//Reference (Non primitive)

// Array, Object, functions

const heros = ["kuldeep" , "singh" , "rawat"];
let myObj = {
    name: "kuldeep",
    age : 23,
}

let userOne ={
    name: "kuldeep",
    email: "kuldeep7908@gmail.com",

}
 let userTwo = userOne;

 userTwo.email = "kamlesh7908@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 


