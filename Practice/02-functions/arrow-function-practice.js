/*You're building part of the logic for an online grocery store. The store runs weekly discounts on selected items. 
You have an array of items in the cart, 
and you need to calculate the discounted price for each item using arrow functions.*/

const cartItems = [
  { name: "Rice", price: 80, discountPercent: 10 },
  { name: "Wheat", price: 60, discountPercent: 5 },
  { name: "Milk", price: 50, discountPercent: 0 },
  { name: "Oil", price: 120, discountPercent: 15 },
];

const discountPrice= cartItems.map(items =>({
    name : items.name,
    price : items.price,
    finalPrice: items.price-(items.price*items.discountPercent/100).toFixed(2)

}))

console.log(discountPrice)

// Scenario 1: To-Do List – Mark Completed Tasks

const tasks = [
  { title: "Write report", done: true },
  { title: "Fix login bug", done: false },
  { title: "Deploy to production", done: true }
];

const toDo= tasks.map(list => {
  
  if(list.done===true){
    return ("✅" +" " + list.title)
  }
  else{
    return ("❌" +" " +  list.title)
  }
})

console.log(toDo)



//✅ Scenario 3: Bug Tracking – Format Logs

const bugs = [
  { id: 101, severity: "High", summary: "Login fails on Firefox" },
  { id: 102, severity: "Medium", summary: "Page reloads twice" }
];



const tracker = bugs.map(checks => 

    `#${checks.id} [${checks.severity}] - ${checks.summary}`


)

console.log(tracker)

//✅ Scenario 5: Website Logs – Extract Timestamps

const logs = [
  { user: "Rajat", timestamp: "2025-06-25T08:45:00Z" },
  { user: "Admin", timestamp: "2025-06-25T09:10:00Z" }
];

const timestamp= logs.map()