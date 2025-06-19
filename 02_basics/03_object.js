// singalton
//Object.create

//object literal
const mySym = Symbol("key1")
const JsUser = {
    name : "Nirdesh",
    "full name" : "nirdesh bhesaniya",
    [mySym] : "mykey1",
    age : 19,
    location : "Ahmedabad",
    email : "nirdesh@google.com",
    isLoggin : false,
    lastLoginDay : ["monday","saturnday"]
}
// types of acesss mathods
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "nirdesh@chatgpt.com"

JsUser.email = "nirdesh@113.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS User ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

Object.freeze(JsUser) // don't be change is happen in Object







