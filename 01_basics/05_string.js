const name = "nirdesh"
const repoCount = 50
// console.log(name + repoCount + "value");

console.log(`my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("nirdesh-hc-com")

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newstring = gameName.substring(0,4);
console.log(newstring);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const str = "  nirdesh  "
console.log(str);
console.log(str.trim());

const url = "https://techindia.com/login%20nirdeshbhesaniya"
console.log(url.replace('%20','-'));

console.log(url.includes('sunder'));
console.log(gameName.split('-'));













 