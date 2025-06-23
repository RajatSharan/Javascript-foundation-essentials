function* fruitGenrator(){
    yield "Apple"
    yield "banana"
    yield "cherry"
}

const fruits = fruitGenrator()

console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)

//Infinite Generator (with manual control)

function* infiniteCounter(){
    let count =1
    while (true){
        yield count++
    }
}

const counter =  infiniteCounter()

console.log(counter.next().value)
console.log(counter.next().value)