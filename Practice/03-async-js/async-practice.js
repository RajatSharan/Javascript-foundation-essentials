// function fetchName(){
//     return new Promise((resolve)=>{

//          console.log("Waiting for response")


//         setTimeout(()=>{

//             resolve("Rajat")
           
//         },2000)

//     })
// }

// // async function showName(){

// //     const name = await fetchName()
// //     console.log(" Name " + name)

// // }


// function showName(){
//     fetchName().then((resolve)=>{

//         console.log(" Name " + resolve)
//     })
// }

// showName()



function loginUser() {
   return new Promise((resolve) => {
       setTimeout(() => resolve("Logged in as Sidharth"), 6000);
   });
}


