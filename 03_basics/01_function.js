
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumber(number1,number2) {
    let sum = number1 + number2;
    return sum;
}

let result = addTwoNumber(10,20);
console.log(result);

function userLoggedMassage(username = "User"){
    if(!username){
        console.log("Please provide a username");
        return;
    }
    console.log(`Welcome ${username} Logged in Successfully`);
}

userLoggedMassage("Nirdesh");

function calculateCartPrice(...num1){
    let total = 0;
    for(let num of num1){
        total +=num;
    }
    return total;
}
console.log(calculateCartPrice(10,20,30,40));

const user = {
    username : "nirdesh",
    price : 100
}

function handalObject(anyObject) {
     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handalObject(user);

// handalObject({username : "romil", price : 2000
// })

const myArray = [10,20,30,40];
 
function returnSecondValue(getarray)
{
    return getarray[1];
}

console.log(returnSecondValue(myArray));

console.log(returnSecondValue([20,39,49,393]));

