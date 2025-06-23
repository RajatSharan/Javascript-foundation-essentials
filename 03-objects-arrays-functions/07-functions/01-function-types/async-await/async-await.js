function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data is ready");
    }, 2000);
  });
}

async function fetchData() {
  console.log("Start");
  const result = await getData();
  console.log(result);
  console.log("End");
}