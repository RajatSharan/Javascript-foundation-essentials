let car ={
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("Car started");
    },
    stop: function() {
        console.log("Car stopped");
    }
}

console.log(car.brand); 
console.log(car["model"]); 

car.start(); 