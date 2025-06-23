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
