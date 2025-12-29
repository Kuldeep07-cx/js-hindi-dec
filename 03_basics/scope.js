//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "kuldeep"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "kuldeep"
    if (username === "kuldeep") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++



// In this type of function decleartion we can use console.log(addone(5)) avove the function decleartion
console.log(addone(5))

function addone(num){
    return num + 1
}
 




// addTwo also known as expression it is like a variable (can hold kson values functions)
// below code will give an error because we trying to access addTwo before Initilization

console.log(addTwo)
const addTwo = function(num){
    return num + 2
}

