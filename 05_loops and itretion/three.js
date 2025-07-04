
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

const map = new Map()

map.set("IN","India")
map.set("US","United States")
map.set("UK","United Kingdom")
map.set("FR","Fransh")

console.log(map);

for(const [key, value] of map)
{
    console.log(`Key is ${key} and value is ${value}`); 
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);    
// }