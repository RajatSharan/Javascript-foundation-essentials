let testResult = ['Pass','Fail','Pass','Fail','Pass','Pass','Skipped','Skipped']

// let countStatus = testResult.reduce((acc,status)=> {
//     acc[status]=(acc[status]||0) + 1;
// return acc
// },{});
// console.log(countStatus)


let countStatus = testResult.reduce((count,result)=>{

    if(count[result]){
        count[result]=count[result]+1
    }
    else{
        count[result] =1
    }
    return count
},{})

console.log(countStatus)