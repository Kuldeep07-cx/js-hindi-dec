const hero_old = ["shaktiman", "tarzan", " hero"] ;
const hero_new = ["superman", "perman", "batman"];



//hero_new.push(hero_old);

//console.log(hero_new);
//console.log(hero_new[3][1]);



const villain = hero_new.concat(hero_old); // concat we use because merge to different arrays which contain elems in words or numbers
//console.log(villain);



const heroji = [...hero_new, ...hero_old]
//console.log(heroji)


// flat() is used to create a new array by flattening sub-arrays into a single array
const array = [1,2,3,[4,5,6],7,8,9,[[10,11,12],[13,14]],15,16,17];
const array1 = array.flat(Infinity)
console.log(array1)



console.log(Array.isArray("kuldeep"))// checking of  array
console.log(Array.from("kuldeep")) // Araay.from() used to make array using name Kuldeep
console.log(Array.from({name: "hitesh"})) // interesting


let score1 = 100
const score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of() used to make array of different varibles 