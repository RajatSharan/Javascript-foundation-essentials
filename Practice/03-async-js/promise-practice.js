// // 🍔 Scenario:
// // You're simulating a food delivery app flow. Here's what should happen:


// let restaurantOpen =true


// function placeOrder(){

// return new Promise((resolve,reject)=>{

//     console.log("🛎️ Checking if restaurant is open...")

// setTimeout(()=>{
//     if (restaurantOpen){
//          resolve("🍕 Order accepted! Your food is on the way!");
//     }
//     else{
//          reject("❌ Sorry, the restaurant is closed.");
//     }
// },2000)
// })
// }


// placeOrder()
// .then((message)=>{
//     console.log("✅ SUCCESS: " + message)
// })
// .catch((error) =>{
//     console.log("🚫 ERROR: " + error)
// })
// .finally(()=>{
//     console.log("🧾 Order flow complete.")
// })



//✅ 1. Timing Issues (Element not found / not visible)


// let buttonVisible =false

// function elementFind(){


//    return new Promise((resolve,reject)=>{

        
//     console.log("checking the element inside the DOM..")

//     setTimeout(()=>{
//         if(buttonVisible){
//             resolve ("Element Found Successfully")
//         }else{
//             reject (" Element not found or Cannot click on undefined")
//         }

//     },2000)

// })
// }

// elementFind()
// .then((message)=>{

//     console.log("Success "+ message)

// })
// .catch((error)=>{

//     console.log("Error" + error)
// })



// Scenario 1: User Login Flow

//🧠 Use Case:Simulate a user trying to log in with a username and password.


// function loginUser(username, password){

//     return new Promise((resolve,reject)=>{

//         console.log("Enter the user and password")

//     setTimeout(()=>{
//     if(username==='rajat' && password==='1234'){
//         resolve ("✅ Welcome, rajat!")
//     }
//     else {
//         reject( "❌ Invalid credentials")
//     }
// },2000)
//     })
// }

// loginUser('rajat','12345').then((message)=>{
//     console.log("Success" + message)
// })
// .catch((error)=>{

//     console.log("Error" + error)
// })

// 📦 Scenario 2: Product Availability Checker
// 🧠 Use Case:
// Check if a product is in stock before allowing checkout.

function checkProductAvailability(productName,stock){

    return new Promise((resolve,reject)=>{

        console.log("Find the product..")

        setTimeout(()=>{

            if(productName ==='Laptop' && stock >0){

                resolve("Product available")
            }
            else{
                reject(" Out of stock") 
            }
        },2000)
    })
}

checkProductAvailability("Laptop",0).then((message)=>{

    console.log("Success" + message )
}).catch((Error)=>{
    console.log("Error" + Error)
})
.finally(() => {
  console.log("🛒 Product check process completed.");
});