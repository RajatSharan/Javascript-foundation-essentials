function step1(){
    return Promise.resolve("Step1")
}
function step2(prev){
    return Promise.resolve(prev + " → Step 2");
}

step1()
.then(step2)
.then(result => console.log(result));