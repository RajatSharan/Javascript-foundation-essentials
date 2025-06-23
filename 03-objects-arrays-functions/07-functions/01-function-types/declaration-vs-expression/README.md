
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