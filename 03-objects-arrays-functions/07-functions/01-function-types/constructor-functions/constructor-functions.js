function user(name,role){
    this.name = name;
    this.role= role;
}

const admin  = new user("Rajat", "Admin");
const editor = new user("Sana","Editor");

console.log(admin)
console.log(editor)

