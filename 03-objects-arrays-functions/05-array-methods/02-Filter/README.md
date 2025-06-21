
---

### 🔹 `02-filter/README.md`
```md
# 📍 filter()

## ✅ Explanation:
The `filter()` method creates a **new array** containing **only elements that match a condition**.

The original array remains unchanged.

## 🔑 Key Points:
- Returns a new array with **matched items**
- Skips items that don’t meet the condition
- Commonly used in **search or condition filtering**

## 💡 Example Scenarios:
```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
