function greetUser(callback) {
  console.log("Hello! Welcome to the Portal.");
  callback();
}


function loginUser(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            console.log("Asking for login credentials...")
            resolve("User logged in successfully!")

        },2000)    
    })
}

function dashboardView(){
      return new Promise((resolve) => {
       setTimeout(() =>
         resolve("Dashboard is now visible."), 3000);
})
}

async function userLoginFlow(){
const loginMessage = await loginUser()
console.log(loginMessage)

dashboardView()
    .then((message)=>{  
    console.log(message)
    console.log("All tasks completed!")
})
     .catch((error) => {
      console.log("Dashboard error: " + error);
    });

}

async function userLoginFlow(){
const loginMessage = await loginUser()
console.log(loginMessage)

dashboardView()
    .then((message)=>{  
    console.log(message)
    console.log("All tasks completed!")
})
     .catch((error) => {
      console.log("Dashboard error: " + error);
    });

}


greetUser(userLoginFlow)