const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false
console.log(typeof sym1);   // symbol

// Use case: Unique keys
const user = {
  [sym1]: "admin",
  [sym2]: "viewer"
};

console.log(user[sym1]); // admin
console.log(user[sym2]); // viewer
