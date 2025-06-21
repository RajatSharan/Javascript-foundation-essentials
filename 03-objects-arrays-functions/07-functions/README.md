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