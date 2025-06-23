## ✅ What is a Promise?

A Promise represents the **result of an asynchronous operation** — either **success or failure**.

---

## 🔁 Promise States:
- **Pending**: Task is running
- **Fulfilled**: Task completed successfully
- **Rejected**: Task failed

---

## 🧩 Example:

```js
let task = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task finished");
  } else {
    reject("Something went wrong");
  }
});

task
  .then(data => console.log(data))
  .catch(err => console.log(err));



  ``` IN SIMPLES WORDS

  🧠 What is a Promise?
A Promise is like a guarantee that you'll get a result in the future — either successfully or with a failure.

Think of it like this:

💬 “I promise to bring you a pizza 🍕 in 30 minutes. If I bring it, great ✅. If I don’t, I’ll tell you I failed ❌.”

🧾 Why is it called a “Promise”?
Because it says:

"I don't have the result right now, but I'll give it to you later."

You can plan what to do when:

✅ It succeeds

❌ It fails

🔄 Real-Life Analogy (Very Simple)
Imagine you ordered food online 🍱.

You get a Promise: "Your food will arrive in 30 minutes."

If it arrives: Resolved ✅

If it fails (rider cancels): Rejected ❌

