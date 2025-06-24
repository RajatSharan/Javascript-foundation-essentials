 //Problem: You have a list of numbers. Calculate the total sum.

 const numbers = [10, 25, 35, 40, 15, 5];

 const sum = numbers.reduce((acc,num)=>(acc+num),0)

 console.log(sum)

 //🧩 Problem: You are given a list of expenses. Find the total amount spent.

const expenses = [
  { item: "Groceries", amount: 1200 },
  { item: "Electricity Bill", amount: 850 },
  { item: "Internet", amount: 600 },
  { item: "Transport", amount: 300 },
  { item: "Dining Out", amount: 750 }
];
const totalExpend = expenses.reduce((acc,amn)=> acc+amn.amount,0)
console.log(totalExpend)


// Problem: From a list of words, create a single sentence.

const words = ["JavaScript", "is", "fun", "to", "learn"];

const newWord = words.reduce((acc,sen)=> acc+" "+sen)
console.log(newWord)

//Problem: You have an array of votes (e.g., ["yes", "no", "yes"]). Count how many "yes" votes there are.

const votes = ["yes", "no", "yes", "yes", "no", "yes", "no", "yes"];

const count = votes.reduce((acc,res)=> res==='yes'?acc+1:acc,0)

console.log(count)

//  🧩 Problem: You get a list of products with quantity and price. Calculate the total bill (quantity × price for each, then sum).

const cart = [
  { product: "Laptop", quantity: 1, price: 50000 }, 
  { product: "Mouse", quantity: 2, price: 1500 },
  { product: "Keyboard", quantity: 1, price: 3000 }, 
  { product: "Monitor", quantity: 2, price: 12000 }
];

const totalBill = cart.reduce((acc,total)=>{

   const sumValue=total.quantity*total.price;
   return  acc + sumValue
},0)

console.log(totalBill)


// You are given a list of employees. Count how many belong to each department.

const employees = [
  { name: "Rajat", department: "Engineering" },
  { name: "Sneha", department: "HR" },
  { name: "Aman", department: "Engineering" },
  { name: "Karan", department: "Marketing" },
  { name: "Neha", department: "Engineering" },
  { name: "Rohit", department: "HR" }
];

const totalCount= employees.reduce((acc,ename)=>{

    const dept =ename.department

  if(acc[dept]){
    acc[dept]+=1
  }
  else{
    acc[dept]=1
  }

  return acc
},{})

console.log(totalCount)

//🧩 Problem:You have user activity logs with timestamps. Find the earliest timestamp

const logs = [
  { user: "Rajat", timestamp: "2025-06-24T10:30:00Z" },
  { user: "Sneha", timestamp: "2025-06-20T08:15:00Z" },
  { user: "Aman", timestamp: "2025-06-22T14:45:00Z" },
  { user: "Karan", timestamp: "2025-06-21T17:00:00Z" },
  { user: "Neha", timestamp: "2025-06-23T11:00:00Z" }
];

const earliest = logs.reduce((acc,log)=>{

   return new Date(log.timestamp)<new Date(acc.timestamp)? log :acc

})

console.log(earliest.timestamp)

//🧩 Problem You have a list of items with categories. Group them by category.

const items = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
  { name: "Pants", category: "Clothing" },
  { name: "Apple", category: "Grocery" },
  { name: "TV", category: "Electronics" }
];

let groupItem = items.reduce((acc,count)=>{

    categoryCount = count.category

    if(acc[categoryCount]){
        acc[categoryCount].push(count.name)
    }
    else{
        acc[categoryCount] =[count.name]
    }

    return acc

},{})

console.log(groupItem)