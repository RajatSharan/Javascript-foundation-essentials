// //✅ Practice Task: Send Email Notification with Callback

// // function sendEmail(callback){

// //     console.log("📨 Sending email to user...")
// //     setTimeout(() => {
    
// //   console.log("✅ Email sent successfully!")
// //   callback()

// // }, 2000);

// // }

// // function message(){
// //     console.log("🙏 Thank you for your order!")
// // }


// // sendEmail(message)


// //🔁 Task 1: User Registration Flow

// function registerUser(callback){

//   console.log("🧑 Registering user...")

//   setTimeout(()=>{

//          console.log("✅ User registered!")
//          callback()

// },2000)

// }

// function welcomeMessage(){
//   console.log("🎉 Welcome to our platform!")
// }

// registerUser(welcomeMessage)


//Task 4: Password Reset Flow

function generateResetLink(callback){

  console.log("🔐 Generating password reset link...")
  setTimeout(() => {

    console.log("✅ Reset link sent")
    callback()
    
  }, 2500);


}

function showPopup(){
  console.log("📩 Please check your email for the reset link")
}

generateResetLink(showPopup)


