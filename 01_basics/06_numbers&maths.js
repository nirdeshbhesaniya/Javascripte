const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const anotherNumber = 289.7746

console.log(anotherNumber.toPrecision(4));

const hundred = 10000000000

console.log(hundred.toLocaleString('en-IN'));

//+++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.floor((Math.random()*10))+1);

const min = 10 
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);








