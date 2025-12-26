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
//console.log(obj3);


const sum ={
    id: 45,
    email: "sunny@gmail.com",
    kemo : { 

        name : "kamlesh rawat",
        age : 28,
        
    }

}
//console.log(sum.kemo.name);


const obj6 = {...sum,...regularuser}
//console.log(obj6);



// finding keys and values using method and entries  give both in the form of an array

 console.log(Object.keys(kulfi))
 console.log(Object.values(kulfi))
 console.log(Object.entries(kulfi));
console.log(kulfi.hasOwnProperty('name')); // for checking name is the part of kuldeep object or not



// Making objects inside an array 

const masti = [

    {
        id: 34,
        email:"gg@gmail.com",

    },
    {
        id: 56,
        email:"g0@gmail.com",

    },
    {
        id: 94,
        email:"gk@gmail.com",

    },
    
]
console.log(masti[2].email);




const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kuldeep"
}

//course.courseInstructor

const {courseInstructor:instructor} = course

//console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
