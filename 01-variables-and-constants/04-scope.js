var globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar);
}
showGlobal(); // Output: I'm global

function localScope() {
var localVar = "I'm local";
console.log(localVar);
}
localScope();
//console.log(localVar); // Error: not defined
