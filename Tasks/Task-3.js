//Convert the below Promise into async/await

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

// function runWithPromise() {
//   wait(3000)
//     .then((msg) => {
//       console.log(msg);
//       console.log("FUNCTION-02: End (promise)");
//     });
// }

async function runAppPromise(){

    const newFunction = await wait()
    console.log("FUNCTION-02: End (promise)")
}

console.log("FUNCTION-03: This runs immediately after async call");

runAppPromise();
