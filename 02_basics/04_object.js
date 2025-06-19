// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggin = false
// console.log(tinderUser);

const regulerUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "nirdesh",
            lastname : "bhesaniya"
        }
    }

}

console.log(regulerUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2,obj4}
// const obj3 = {...obj1,...obj2,...obj4}
const obj3 = Object.assign(obj1,obj2,obj4)
console.log(obj3)

const user = [
    {
        id:1,
        name:"nirdseh"
    },
    {
        id:2,
        name:"sammy"
    }
]

user[1].name

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty('isLoggin'));

const course = {
    coursename :"javaScript",
    price : "999",
    courseInstrutor : "Nirdesh"
}

// course.coursename = "javaScript"

const {courseInstrutor : instructor} = course
console.log(instructor);
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


