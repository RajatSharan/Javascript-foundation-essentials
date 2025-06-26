//🛒 Scenario:You’re building an e-commerce website. You want to create multiple product objects using a constructor function.

function Product(name,price,category){

    this.name = name,
    this.price=price,
    this.category= category
}

const product1= new Product("Laptop","₹50000","Electronics")
const product2 = new Product("Shoes","₹2000","Footwear")
console.log(product1.category)
console.log(product2)



function User(username,email){

    this.username=username,
    this.email=email,
    this.isVerified=false

}

let user1 =  new User("rajat123", "rajat@example.com")
let user2 = new User("priya88", "priya@example.com")

console.log(user1)
console.log(user2)