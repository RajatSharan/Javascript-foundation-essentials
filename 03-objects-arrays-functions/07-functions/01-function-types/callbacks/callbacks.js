function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function askQuestion() {
  console.log("How are you?");
}

greet("Rajat", askQuestion);


// console.log("/************/")

// function fetchData(callback){
//     setTimeout(()=>{

//         console.log("Data Received")
//         callback()


//     },1000)
// }

// fetchData(()=> console.log("Processing data..."));


// console.log("/************/")

// function greetLater() {
//   console.log("Hello after 2 seconds!");
// }

// setTimeout(greetLater, 2000);




function finishHomework(subject,callback){

    console.log("Finished my" + subject + "homework.")
    callback()

}
function watchTV(){
    console.log("After that watch TV")
}

finishHomework('Maths',watchTV)
