const kulfi = {}
 
kulfi.id = "123kul"
kulfi.name = "kuldeep rawat"
kulfi.isLOggedIn= false

//console.log(kulfi);

const  regularuser = {
  
    useremail: "kuldeep@gmail.com",

    userFullname : { 
        firstname : "kuldeep",
        lastname : "rawat",

        meranumber :{

            number: 7065354214,
        }
    }

}

//console.log(regularuser.userFullname.meranumber.number);

const obj1 = {1:"a" ,2:"b" ,3:"c"}
const obj2 = {7:"d",4:"e",5:"f"}


// both merge two objects into an object with same values
const obj4 = Object.assign( {} ,obj1,obj2)
//console.log(obj4);


const obj3 ={...obj1,...obj2}
console.log(obj3);

