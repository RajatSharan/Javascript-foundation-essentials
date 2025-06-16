function exampleVar() {
  var name = "John";
  if (true) {
    var name = "Jane"; // Function-scoped
    console.log(name); // Output: Jane
  }
  console.log(name); // Output: Jane
}
exampleVar();
