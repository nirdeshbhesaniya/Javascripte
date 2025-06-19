//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.32

const isLoggin  = false 
const outSideTem = null

let usrEmail;
const id = Symbol('102');
const anotherId = Symbol('102');
console.log(id === anotherId); 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["nirdesh","hepin","harshil"];
let userthree = {
    email:"nirdesh@g12.com",
    upi:"user@ybl3221"
}


const myFunction = function(){
    console.log("hello World");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) and  heap(non-primitive)

let myname = "Nirdesh Bhesaniya";
let wifeName = myname;
wifeName = "Nish Bhesaniya"
console.log(myname);
console.log(wifeName);

let userOne = {
    email:"nirdesh@google.com",
    upi:"user@ybl21"
}
let userTwo = userOne;
userTwo.email = "nirdeshbhesaniya@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);


