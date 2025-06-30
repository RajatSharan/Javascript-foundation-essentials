/*🧠 Exercise 1: Null Object Check
Objective: Access a property of an object that may be null or undefined.

🧪 Your Task:

Write a function that takes a user object.

Try to access user.name.first and print it.

If user or name is undefined, catch the error and log a friendly message.*/

function userProfile(user){

    try{
        console.log(user.name.first)
    }
    catch{
        console.log("Oops! Cannot access 'name.first' because 'user' or 'name' is undefined.")
    }

}
    const validUser= {
        name :{
            first:"Rajat",
            last:"Sharan"
        },
        age:25
    }


userProfile(validUser)

const invalidUser={
    age : 25
}

userProfile(invalidUser)

const nullUser= null

userProfile(null)