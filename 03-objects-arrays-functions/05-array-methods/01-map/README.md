# 📍 map()

## ✅ Explanation:
The `map()` method creates a **new array** by applying a function to **each element** of an existing array.

It does **not modify** the original array.

## 🔑 Key Points:
- Returns a **new array**
- Same length as original
- Commonly used for transforming data
- Uses a **callback function**
- Frequently used with **arrow functions**

## 💡 Example Scenarios:
```js
const numbers = [1, 2, 3];
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9]
