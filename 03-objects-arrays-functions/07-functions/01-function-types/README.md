
---

### 🔹 `function-declaration-vs-expression.js + README.md`
```md
# 📘 Function Types

## 1. Function Declaration
✅ Can be **called before it's defined** (hoisted)

```js
function greet(name) {
  return `Hello, ${name}`;
}


# JavaScript Functions

## Function Declaration
- Declared with `function`
- Hoisted: Can be called before declared

## Function Expression
- Assigned to a variable
- Not hoisted

## Arrow Function
- Concise syntax
- No own `this` binding

## Anonymous Function
- No name
- Often used as arguments

## Hoisting
- Declarations are hoisted
- Expressions are not

> Use arrow functions for callbacks and short logic. Use declarations for reusable named functions.

---

### 🔹 `arrow-functions.js + README.md`
```md
# 🔼 Arrow Functions

## ✅ Explanation:
Arrow functions provide a **shorter syntax** for writing functions and **do not bind their own `this`**.

## 🔑 Key Points:
- Shorter syntax than `function`
- Does **not** have its own `this`
- Ideal for **callbacks** or short logic
- Cannot be used as **constructors**

## 💡 Syntax:
```js
const add = (a, b) => a + b;

```
| Function Type  | Hoisted | Name     | Use Case                       |
| -------------- | ------- | -------- | ------------------------------ |
| Declaration    | ✅       | Yes      | Reusable functions             |
| Expression     | ❌       | Optional | Callback or runtime definition |
| Arrow Function | ❌       | No       | Short inline functions         |


```
Function Declarations are hoisted and can be called before they are defined.
Function Expressions are not hoisted and can be used after they are assigned to a variable.
Anonymous Functions are useful when passing functions as arguments or defining unnamed functions.
Arrow Functions provide a shorter syntax, ideal for callbacks and inline functions.
Higher-Order Functions like map(), filter(), and reduce() enable powerful, concise functional programming patterns in JavaScript.


```
# 🧠 Functions: Constructor and Generator

---

## 1️⃣ Constructor Functions

### 🧾 What is it?

A constructor function is used to **create multiple similar objects**.

It works like a blueprint (similar to classes).

### 🧩 Syntax:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Rajat", 25);
console.log(user1); // { name: "Rajat", age: 25 }


```
✅ Key Points:
Always start with a capital letter (by convention)

Use new keyword to create an object

this keyword refers to the object being created


## 🔁 2️⃣ Generator Functions

---

## ✅ What is a Generator Function?

A **Generator Function** is a special type of function that allows you to **pause** execution and **resume** it later.

It’s useful when you:
- Want to **yield multiple values one by one**
- Want to create **custom iterators**
- Need to control **execution flow manually**

---

## ✍️ Syntax:

- Use `function*` (with an asterisk `*`)
- Use `yield` instead of `return`
- Call `.next()` to get the next value

```js
function* countSteps() {
  yield 1;
  yield 2;
  yield 3;
}