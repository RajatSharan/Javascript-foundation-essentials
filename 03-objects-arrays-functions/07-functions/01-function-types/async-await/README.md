# ⏳ Async / Await in JavaScript

---

## ✅ What is Async/Await?

A modern way to write async code that looks **like normal (sync) code**.

It’s built **on top of Promises**.

---

## 🧩 Example:

```js
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

fetchData();

🧠 Key Points:
async keyword is added to functions

await can only be used inside an async function

Use try/catch to handle errors

