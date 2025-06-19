
// if

// const isUserLoggedIn = false;
const temperature = 41;

if(temperature===40)
{
    console.log("less than 40");
}
else{
    console.log("temperature is greterthan 40")
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200;
if(score === 200)
{
    let power = "fly";
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");
}

const isUserLoggedIn = true;
const isdebited =  true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn && isdebited && 2==3)
{
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User logged in");
    
}



 
