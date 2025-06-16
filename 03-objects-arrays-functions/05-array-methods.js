let fruits = ["apple", "banana", "cherry"];


//Push
fruits.push("orange"); 
console.log(fruits);

//POP

fruits.pop();
console.log(fruits);

//unShift 

fruits.unshift("Kiwi")
console.log(fruits);

// splice

fruits.splice(1,1,"Pineapple")
console.log(fruits)

//shift

fruits.shift("Kiwi")
console.log(fruits);

//slice

let citrus = fruits.slice(1, 2);
console.log(citrus);

//concat

let moreFruits = ["orange", "kiwi"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//indexOf()

let index = fruits.indexOf("Mike")
console.log(index)


//includes

let hasBanana = fruits.includes("banana");
console.log(hasBanana);