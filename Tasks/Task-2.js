//2. Convert the below into promise with .then()
/*function fetchDashboard() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Dashboard loaded"), 3000);
   });
}

function fetchVoid() {
   console.log("Void function called");
}


async function runApp() {
   const loginMessage = await loginUser();
   console.log(loginMessage);


   const dashboard = await fetchDashboard();
   console.log(dashboard);
}


runApp();
fetchVoid();

*/


function loginUser(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve("Logged in as Rajat"),6000)
    })
}
function fetchDashboard(){
    return new Promise((resolve)=>{
      setTimeout(()=>resolve("Dashboard Loaded"),3000);
      })
}

function fetchVoid(){
    console.log("Void function called");
}

loginUser().then((message)=>{

    console.log(message)

    fetchDashboard().then((message)=>{

    console.log(message)

})
})
 fetchVoid()



