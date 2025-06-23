// const pizzaOrder = new Promise(function (resolve,reject){

//     let isDelivered = true;

//     if(isDelivered){
//         resolve("Pizza is delivered");
//     }
//     else{
//         reject("Pizza delivery failed")
//     }
// });

// pizzaOrder
//     .then(function(message){
//     console.log("Success:" +message)
// })
// .catch(function(error){

//     console.log("Error:" +error)
// })


//Examples

let gymWorkout = new Promise(function(resolve,reject){

    let isMotivated = true

    if(isMotivated){
        resolve("You had a great workout! 💪")
    }

    else{
        reject("You skipped the gym. 😴")
    }
})


gymWorkout
.then(function(message){
    console.log("Success :" + message)
})
.catch(function(error){

    console.log("Error:" + message)
})




// Real Time example 

//✅ Scenario 1: Wait for a Button to Appear
// You visit a login page.
// You need to wait for the "Login" button to appear.

// If the button appears within 5 seconds → ✅ "Login button found"

// If it doesn't → ❌ "Login button not found or timed out"


const buttonAppear = new Promise(function(resolve,reject){

    isbutton = false

    if(isbutton){
        
        resolve("Login button found")
    }
    else{

        reject("Login button not found or timed out")
    }

})

buttonAppear.then(function(message){

    console.log(message)
})
.catch(function(error){
    console.log(error)

})


