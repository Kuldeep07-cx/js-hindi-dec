const kul = "kuldeep"

// Object literals

const mySym = Symbol("key1")

const rawat = {
    name: "kamlesh",
    email: "kuldeep7908@gmail.com",
    phone : "7065169576",
    "location": "noida",
 [mySym]: "mykey1",
  lastLoginDays: ["Monday", "Saturday"],

}

console.log(rawat["name"]);
console.log(rawat["location"]);
console.log(rawat[mySym]) // output will be mykey1
console.log(rawat["lastLoginDays"]);
console.log(rawat["lastLoginDays"].at(1)); 

rawat.email = "kamlesh7908@gmail.com"
  //Object.freeze(rawat)

rawat.email = "synny7908@gmail.com"
//console.log(rawat["email"])
   

// Using function in objects

rawat.greeting = function(){
    console.log("Hello JS user");
}
rawat.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(rawat.greeting());
console.log(rawat.greetingTwo());


// Used function in normal way

const sunny = function(){
  return "agya yeto";
}

const pooja= function(){
  return " mausi";
}


console.log(sunny());
console.log(pooja());









