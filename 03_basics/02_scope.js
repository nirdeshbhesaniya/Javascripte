
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
function one () {
    const username = "nirdesh"
    function two (){
        const website = "nirdesh.com"
        console.log(username);
    }
    two()
}
// one()

if(true)
{
    const username = "nirdesh"
    if(username==="nirdesh")
    {
        const website = "nirdesh.com"
        console.log(username+" "+website);
    }
    // console.log(website);
}

// console.log(username);

//+++++++++++++++++++++++++++++Important++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}

console.log(addTwo(5));

const addTwo = function(num)
{
    return num + 2
}
