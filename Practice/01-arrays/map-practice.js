
//Problem-1 :You have a list of numbers. Convert each number into its square.

let number = [1,3,6,7,8,5]

let square = number.map(n=>n*n)

console.log(square)


// Problem 2 : You receive a list of city names in lowercase. Convert each city name to uppercase.

let cityName = ["Jaipur","Taxes","Udaipur","Goa"]

let Up= cityName.map(upr => upr.toUpperCase())

console.log(Up)


//Problem 3 :: You are given an array of user objects. Extract just the names from each object

const users = [
  { id: 1, name: 'Rajat', age: 28 },
  { id: 2, name: 'Aman', age: 25 },
  { id: 3, name: 'Sneha', age: 30 },
  { id: 4, name: 'Karan', age: 27 }
];

let names = users.map(n => n.name)
console.log(names)

//Problem: You have an array of prices as strings with currency symbols (like "₹100"). Convert them into numbers.

const priceStrings = ["₹199", "₹349", "₹1500", "₹75", "₹999"]

let price = priceStrings.map(p => Number(p.replace("₹","")))

console.log(price)

//You are given a list of fruits. Add the index number to each fruit string (e.g., "1. Apple").

const fruits =["Apple","Banana","cherry","Kiwi"]

let indexFruits = fruits.map((fruit,index) => `${index+1}.${fruit}`)

console.log(indexFruits)

//You get an array of dates in ISO format. Convert them to dd-mm-yyyy format.

const isoDates = [
  "2025-06-24T10:30:00Z",
  "2024-12-18T14:00:00Z",
  "2023-09-10T08:45:00Z",
  "2022-01-01T00:00:00Z",
  "2021-07-15T18:20:00Z"
];


const dateChange = isoDates.map(dates=>{
    const date =new Date(dates);
    const day = String(date.getDate()).padStart('2','0');
    const month =String(date.getMonth()+1).padStart(2,'0');
    const year = date.getFullYear()

    return `${day}-${month}-${year}`
})

console.log(dateChange)



//Problem: You have a list of file names. Remove the file extension from each.

const fileNames = [
  "report.pdf",
  "invoice.xlsx",
  "photo.jpg",
  "notes.txt",
  "presentation.pptx"
];

let withoutExt= fileNames.map(ext => ext.split(".")[1])

console.log(withoutExt)


//Problem You have user data with names and ages. Convert it to only show names with age in brackets (e.g., "Rajat (28)").

const user = [
  { name: "Rajat", age: 28 }, 
  { name: "Aman", age: 25 },
  { name: "Sneha", age: 30 },
  { name: "Karan", age: 27 },
  { name: "Neha", age: 26 }
];

const record = user.map(n=>`${n.name} (${n.age})`)

console.log(record)
