//  This used for the current context

const user = {
    username: "kuldeep rawat",
    id: 7065,
    welcomeMessage: function(){ 
    console.log(`${this.username}, welcome to this site and your id is ${this.id} `);
    console.log(this)
    }
}

//user.welcomeMessage()
//user.username ="sunny rawat"
//user.welcomeMessage()

//console.log(this)

 //function chai(){
   // let username = "kuldeep"
   // console.log(this.username);
//}

//chai()

// const chai= function(){
// let username = "kuldeep"
// console.log(this.username);
// }

 //chai()

 const chai = () => {
    let username = "kuldeep"
    console.log(this);
 }

chai()


// Basic arrow function4



//Implicit 
//const addtwo = (num1, num2) => num1 + num2;
const addtwo = (num1, num2) => ({name:"kuldeep"}) // Implicit return of an object

console.log(addtwo(2, 3));



//explicit

const add2 = (num1, num2) => {
  return num1 + num2;
};

console.log(add2(2, 3)); // 5

