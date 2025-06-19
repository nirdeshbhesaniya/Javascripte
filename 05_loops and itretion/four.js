
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject)
{
    console.log(key, ':-',myObject[key])
}

const array = [1,2,3,4,5,6]

for(const key in array)
{
    console.log(key, ':-',array[key]);
    
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
