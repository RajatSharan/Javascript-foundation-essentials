const colors = ["red", "green", "blue"];

console.log(colors[0]);         
console.log(colors.length);    


for(let i=0 ; i<colors.length ;i++)
{
    console.log(colors[i]);
}


console.log("****************************");

//Morden way to access elements

for (let color of colors) {
  console.log(color);
}

console.log("****************************");

for(let i in colors){
  console.log(colors[i])
}

console.log("****************************");


let color = ["red", "green", "blue"];
color.forEach(function(color) {
    console.log(color);
});
