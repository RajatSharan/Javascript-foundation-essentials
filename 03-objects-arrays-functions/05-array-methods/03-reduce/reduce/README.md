
---

### 🔹 `03-reduce/README.md`
```md
# 📍 reduce()

## ✅ Explanation:
The `reduce()` method applies a function to **accumulate** all array values into a **single output value**.

## 🔑 Key Points:
- Returns a **single result**
- Requires a **reducer function** with `(accumulator, currentValue)`
- Can be used for:
  - Sum / Average
  - Combine arrays
  - Build objects

## 💡 Example Scenario (Sum):
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10


## 💡 How It Works:
acc = 0, val = 1 → acc = 1

acc = 1, val = 2 → acc = 3

acc = 3, val = 3 → acc = 6

acc = 6, val = 4 → acc = 10

Final result: 10