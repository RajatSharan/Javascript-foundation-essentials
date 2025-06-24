//Problem : You have a list of numbers. Keep only the even numbers.

const numbers = [2,3,4,5,6,7,8,9]

let evenNumber = numbers.filter(n => n%2==0)

console.log(evenNumber)

//Problem : You are given an array of products. Keep only the products that are "in stock".
const products = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Phone", inStock: false },
  { id: 3, name: "Monitor", inStock: true },
  { id: 4, name: "Keyboard", inStock: false },
  { id: 5, name: "Mouse", inStock: true }
];

let availableProducts = products.filter(product => (product.inStock===true))

console.log(availableProducts)

//Problem : You have a list of students with their scores. Filter out the students who scored below 50.

const students = [
  { name: "Rajat", score: 78 },
  { name: "Aman", score: 45 },
  { name: "Sneha", score: 92 },
  { name: "Karan", score: 33 },
  { name: "Neha", score: 67 },
  { name: "Rohit", score: 49 }
];

let result = students.filter(res => res.score>50)

console.log(result)

// Problem: From an array of strings, keep only those with more than 5 characters.

const words = [
  "apple",
  "banana",
  "grape",
  "pineapple",
  "kiwi",
  "mango",
  "strawberry",
  "pear",
  "orange"
];

let str = words.filter(n=>n.length >5)

console.log(str)

// Problem: You are given a list of tasks. Keep only the ones that are not marked as completed.

const tasks = [
  { id: 1, title: "Write report", completed: true },
  { id: 2, title: "Fix bugs", completed: false },
  { id: 3, title: "Attend meeting", completed: true },
  { id: 4, title: "Submit code review", completed: false },
  { id: 5, title: "Update documentation", completed: false }
];

const results = tasks.filter(status => status.completed ===false)

console.log(results)

//🧩 Problem: From a list of emails, keep only the ones that are from gmail.com.

const emails = [
  "rajat@gmail.com",
  "sneha@yahoo.com",
  "aman@gmail.com",
  "karan@outlook.com",
  "neha@gmail.com",
  "rohit@protonmail.com"
];

const domain = emails.filter(e => e.split('@')[1]==='gmail.com')
console.log(domain)

// Problem: You have employee data. Keep only those who are from the "Engineering" department.

const employees = [
  { id: 1, name: "Rajat", department: "Engineering" },
  { id: 2, name: "Sneha", department: "HR" },
  { id: 3, name: "Aman", department: "Engineering" },
  { id: 4, name: "Karan", department: "Marketing" },
  { id: 5, name: "Neha", department: "Engineering" }
];

let checkDepartment = employees.filter(dep => dep.department === 'Engineering')
console.log(checkDepartment)

// Problem: You are given a list of messages. Filter out the ones marked as "spam".

const messages = [
  { id: 1, text: "Hello, how are you?", type: "inbox" },
  { id: 2, text: "Limited time offer!!!", type: "spam" },
  { id: 3, text: "Meeting at 3 PM", type: "inbox" },
  { id: 4, text: "You've won a prize!", type: "spam" },
  { id: 5, text: "Let's catch up soon", type: "inbox" }
];

const emailType = messages.filter(msg => msg.type !=='spam')
console.log(emailType)