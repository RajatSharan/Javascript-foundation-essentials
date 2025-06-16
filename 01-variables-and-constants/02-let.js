function exampleLet() {
  let name = "John";
  if (true) {
    let name = "Jane"; // Block-scoped
    console.log(name); // Output: Jane
  }
  console.log(name); // Output: John
}
exampleLet();
