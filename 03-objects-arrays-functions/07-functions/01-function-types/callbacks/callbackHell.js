//When multiple callbacks are nested inside each other, making the code very hard to read and maintain.

setTimeout(()=>{
    console.log("Task 1")
    setTimeout(()=>{
        console.log("Task 2")
    setTimeout(()=>{
        console.log("Task 3")
    setTimeout(()=>{
        console.log("Task 4")
},1000)
    },1000)
},1000)
},1000)