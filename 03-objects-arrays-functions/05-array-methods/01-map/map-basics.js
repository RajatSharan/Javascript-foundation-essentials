//MAP Function

let number = [1,2,3]

//declaration : array.map(item => action performed in array)

let multiple = number.map(i => i*2)

console.log(multiple)

// Real time example

let username =["TOM","Rajat"]

let testusers = username.map(u => ({username:u,password: 'Test@123'}))

console.log(testusers)


//Examples:: 

const names = ["Rajat","Mohit"]

const upperNames = names.map(n => n.toUpperCase())

console.log(upperNames)


const users = [{ name: "Jatin" }, { name: "Rajat" }];
const userName = users.map(u => ({users:u,password:'Test123'}))

console.log(userName)