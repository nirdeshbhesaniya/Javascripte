
const user = {
    username : "nirdesh",
    price : 100,

    welcomeMassage : function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
// user.welcomeMassage()
// user.username="romil"
// user.welcomeMassage()

console.log(this);

// function chai()
// {
//     let name = "nirdesh"
//     console.log(this.name);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () =>
{
    let username = "hitesh"
    console.log(this.username);
}

chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2)=>num1+num2
// const addTwo = (num1,num2)=>(num1+num2)
const addTwo = (num1,num2)=>({username:"nirdesh"})
console.log(addTwo(5,6));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()






