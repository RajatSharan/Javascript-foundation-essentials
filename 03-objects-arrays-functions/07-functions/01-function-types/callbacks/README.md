# 🔄 Callbacks in JavaScript

---

## ✅ What is a Callback?

A callback is a function that you pass into another function as an argument, and that function is called back (executed) later.


🔁 Think of it like telling someone: “When you're done, call me back.”

📦 Real-Life Example (Very Simple)
Imagine:

You order food online 🍔.

You tell the restaurant:

"When the food is ready, call me."

You go back to doing your work 📱💻.

When the food is ready, the restaurant calls you back ☎️.

That’s a callback!


---

## 🧩 Simple Example:

```js
function greetUser(name, callback) {
  console.log("Hi " + name);
  callback(); // calling the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Rajat", sayBye);

 What’s happening here?
greetUser is the main function.

sayBye is the callback function that is passed into greetUser.

When greetUser runs, it says Hi Rajat, and then calls the sayBye function (which is the callback).

🛠 Why Use Callbacks?
Callbacks are used when:

Something takes time to complete (like waiting for a file, API, or timer).

You want to do something AFTER that task finishes.

| Term        | Meaning                                              |
| ----------- | ---------------------------------------------------- |
| Callback    | A function you give to another function to run later |
| Why useful? | Helps with **asynchronous** (delayed) tasks          |
| Common uses | API calls, setTimeout, event listeners               |

