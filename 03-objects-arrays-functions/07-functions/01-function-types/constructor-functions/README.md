# 🏗️ Constructor Functions in JavaScript

---

## ✅ What is a Constructor Function?

A **constructor function** is used to **create and initialize objects**.  
It acts as a **blueprint** to create multiple similar objects.

---

## ✍️ Syntax:

```js
function Person(name, age) {
  this.name = name;  // 'this' refers to the new object
  this.age = age;
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log(person1.name); // John
console.log(person2.age);  // 25



🧠 Key Concepts:
✅ Constructor functions are called using the new keyword.

✅ this refers to the new object being created.

✅ You can assign properties and methods inside the constructor.