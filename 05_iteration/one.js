//For loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(i==5){
//         console.log(`we get our element ${element}`)
//     }
//     console.log(element)
// }


// for (let i = 1; i < 10; i++) {
//     const kul =i
//     console.log(`table of ${kul}`)
//     for (let j = 1; j <=10; j++) {
       
//         console.log(i + '*' + j + ' = ' + i*j );
        
//     }
// }

let myarray =["hanuman", "batman", "spiderman"]
//console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
}

// Break and continue

for (let index = 0; index < 10; index++) {
    if(index==5){
    console.log("we get 5")
    break
    }
    console.log(`Value of i is ${index}`);
  
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
       
        continue
    }
   console.log(`Value of i is ${index}`);
    
}