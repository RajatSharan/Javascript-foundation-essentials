## What Are Exceptions in JavaScript?

An **exception** is a runtime error that disrupts the normal flow of a program.

JavaScript, being dynamically typed, doesn't catch all errors at compile time.

```js
let user;
console.log(user.name); // Runtime Error: Cannot read property 'name' of undefined
