# JavaScript Cheatsheet

This cheatsheet provides a quick reference for essential JavaScript concepts, perfect for a quick recap.

---

## 00-Setup & Execution

* **Browser Console**: Open developer tools (F12) and go to the "Console" tab.

* **Node.js**:

    * **Installation**: Download from [nodejs.org](https://nodejs.org/).

    * **Execute a file**:

        ```javascript
        node your-file.js
        ```

* **HTML Script Tag**:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JS Cheatsheet</title>
    </head>
    <body>
        <h1>Check the console!</h1>
        <script src="your-script.js"></script>
        <script>
            // Inline JavaScript
            console.log("Hello from inline script!");
        </script>
    </body>
    </html>
    ```

---

## 01-Datatypes

* **Primitive Types**:

    ```javascript
    let isDone = false;           // Boolean
    let decimal = 6;              // Number
    let color = "blue";           // String
    let bigNum = 10n;             // BigInt (ES2020)
    let sym = Symbol('id');       // Symbol (ES2015)
    let notDefined;               // Undefined
    let emptyValue = null;        // Null (primitive, but typeof returns 'object')
    ```

* **Non-Primitive Type**:

    ```javascript
    let obj = { name: "Alice" };  // Object
    let arr = [1, 2, 3];          // Array (special type of object)
    let func = function() {};     // Function (special type of object)
    ```

* **Checking Type**:

    ```javascript
    console.log(typeof isDone);     // "boolean"
    console.log(typeof decimal);    // "number"
    console.log(typeof color);      // "string"
    console.log(typeof notDefined); // "undefined"
    console.log(typeof emptyValue); // "object" (historical bug)
    console.log(typeof obj);        // "object"
    console.log(typeof arr);        // "object"
    console.log(typeof func);       // "function"
    ```

---

## 02-Functions

* **Function Declaration**:

    ```javascript
    function add(x, y) {
        return x + y;
    }
    ```

* **Function Expression**:

    ```javascript
    const subtract = function(x, y) {
        return x - y;
    };
    ```

* **Arrow Function (ES2015)**:

    ```javascript
    const multiply = (x, y) => x * y;
    const greet = name => console.log(`Hello, ${name}!`);
    ```

* **Optional Parameters (via default values or checks)**:

    ```javascript
    function greetUser(name, greeting) {
        return `${greeting || "Hello"}, ${name}!`;
    }
    ```

* **Default Parameters (ES2015)**:

    ```javascript
    function greetDefault(name, greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }
    ```

* **Rest Parameters (ES2015)**: Gather remaining arguments into an array.

    ```javascript
    function sumAll(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }
    console.log(sumAll(1, 2, 3, 4)); // 10
    ```

* **Function Overloading (JavaScript does not have native function overloading by signature. Achieve with conditional logic)**:

    ```javascript
    function displayInfo(arg) {
        if (typeof arg === 'string') {
            console.log(`Name: ${arg}`);
        } else if (typeof arg === 'number') {
            console.log(`Age: ${arg}`);
        } else {
            console.log("Unknown argument type.");
        }
    }
    displayInfo("Alice"); // Name: Alice
    displayInfo(30);      // Age: 30
    ```

---

## 03-Objects

* **Object Literals**:

    ```javascript
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isStudent: false,
        greet: function() {
            console.log(`Hello, my name is ${this.firstName}.`);
        }
    };

    console.log(person.firstName);      // "John" (dot notation)
    console.log(person["lastName"]);    // "Doe" (bracket notation)
    person.greet();                     // "Hello, my name is John."
    ```

* **Adding/Modifying Properties**:

    ```javascript
    person.city = "New York";
    person.age = 31;
    ```

---

## 04-Variables (`var`, `let`, `const`)

* **`var` (Function-scoped, can be re-declared and re-assigned)**:

    ```javascript
    var x = 10;
    if (true) {
        var x = 20; // Same variable, re-declared
        console.log(x); // 20
    }
    console.log(x); // 20
    ```

* **`let` (Block-scoped, can be re-assigned but not re-declared)**:

    ```javascript
    let y = 10;
    if (true) {
        let y = 20; // Different variable (block-scoped)
        console.log(y); // 20
    }
    console.log(y); // 10
    ```

* **`const` (Block-scoped, cannot be re-assigned or re-declared)**:

    ```javascript
    const z = 10;
    // z = 20; // Error: Assignment to constant variable.

    const obj = { name: "Bob" };
    obj.name = "Robert"; // OK: Can modify object properties
    // obj = { name: "Charlie" }; // Error: Cannot re-assign obj
    ```

---

## 05-Arrays

* **Creating Arrays**:

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const fruits = ["apple", "banana", "cherry"];
    const mixed = [1, "hello", true, { id: 1 }];
    ```

* **Accessing Elements**:

    ```javascript
    console.log(fruits[0]); // "apple"
    console.log(fruits.length); // 3
    ```

* **Modifying Elements**:

    ```javascript
    fruits[1] = "blueberry"; // ["apple", "blueberry", "cherry"]
    ```

* **Common Array Methods**: See **15-Arrays** for more.

---

## 06-Classes (ES2015 OOP)

* **Class Definition**:

    ```javascript
    class Animal {
        constructor(name) {
            this.name = name;
        }

        move(distanceInMeters = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    const dog = new Animal("Buddy");
    dog.move(5); // "Buddy moved 5m."
    ```

---

## 07-Constructors

* **Constructor Basics**: Special method inside a class for creating and initializing an object created with `new`.

    ```javascript
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }

        display() {
            console.log(`Car: ${this.make} ${this.model}`);
        }
    }

    const myCar = new Car("Toyota", "Camry");
    myCar.display(); // "Car: Toyota Camry"
    ```

---

## 08-Static Methods

* **Static Properties and Methods**: Belong to the class itself, not instances. Accessed directly on the class name.

    ```javascript
    class Calculator {
        static PI = 3.14159; // Static property (ES2022)

        static add(x, y) {
            return x + y;
        }
    }

    console.log(Calculator.PI);     // 3.14159
    console.log(Calculator.add(5, 3)); // 8
    ```

---

## 09-Access Modifiers (JavaScript)

* JavaScript classes have public properties and methods by default.

* **Private Class Fields (ES2020)**: Use `#` prefix for truly private members.

    ```javascript
    class BankAccount {
        #balance; // Private field

        constructor(initialBalance) {
            this.#balance = initialBalance;
        }

        deposit(amount) {
            this.#balance += amount;
        }

        getBalance() {
            return this.#balance;
        }
    }

    const account = new BankAccount(100);
    account.deposit(50);
    console.log(account.getBalance()); // 150
    // console.log(account.#balance); // Syntax Error: Private field '#balance' must be declared in an enclosing class.
    ```

* **Convention for "Protected"**: Often, a leading underscore `_` is used to indicate a "protected" property, but it's just a convention and not enforced by the language.

---

## 10-Inheritance

* **`extends` Keyword**: A class can inherit from another class.

* **`super()`**: Used in the subclass constructor to call the parent class's constructor. Also used to call parent class methods.

    ```javascript
    class Vehicle {
        constructor(speed) {
            this.speed = speed;
        }
        move() {
            console.log(`Moving at ${this.speed} km/h`);
        }
    }

    class Bicycle extends Vehicle {
        constructor(speed, gears) {
            super(speed); // Call parent constructor
            this.gears = gears;
        }
        move() {
            super.move(); // Call parent move method
            console.log(`Pedaling with ${this.gears} gears.`);
        }
    }

    const bike = new Bicycle(20, 7);
    bike.move();
    // Output:
    // Moving at 20 km/h
    // Pedaling with 7 gears.
    ```

---

## 11-Method Overloading (JavaScript)

* As mentioned in **02-Functions**, JavaScript does not have native method overloading based on signature. You handle different argument types or counts within a single method using conditional logic.

---

## 12-Method Overriding

* See **10-Inheritance** for examples of method overriding using `super()`.

---

## 13-Maps

* **`Map` Object (ES2015)**: A collection of key-value pairs. Keys can be of any type (objects, functions, primitives).

    ```javascript
    const myMap = new Map();
    myMap.set("apple", 1);
    myMap.set("banana", 2);
    myMap.set({}, 3); // Object as a key

    console.log(myMap.get("apple"));    // 1
    console.log(myMap.has("banana"));   // true
    myMap.delete("apple");
    console.log(myMap.size);            // 2 (banana and the object key)

    for (let [key, value] of myMap) {
        console.log(`${key}: ${value}`);
    }
    ```

---

## 14-String Methods

* **Common String Methods**:

    ```javascript
    let message = "Hello JavaScript";

    console.log(message.length);          // 16
    console.log(message.toUpperCase());   // "HELLO JAVASCRIPT"
    console.log(message.toLowerCase());   // "hello javascript"
    console.log(message.substring(0, 5)); // "Hello"
    console.log(message.indexOf("Java")); // 6
    console.log(message.includes("Script")); // true
    console.log(message.replace("Java", "Type")); // "Hello TypeScript"
    console.log(message.split(" "));      // ["Hello", "JavaScript"]
    console.log("  trim me  ".trim());    // "trim me"
    ```

---

## 15-Arrays

* **Common Array Methods**:

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const fruits = ["apple", "banana", "cherry"];

    // Adding/Removing
    fruits.push("date");        // ["apple", "banana", "cherry", "date"] (adds to end)
    fruits.pop();               // "date", fruits is now ["apple", "banana", "cherry"] (removes from end)
    fruits.unshift("grape");    // ["grape", "apple", "banana", "cherry"] (adds to beginning)
    fruits.shift();             // "grape", fruits is now ["apple", "banana", "cherry"] (removes from beginning)

    // Iteration
    numbers.forEach(num => console.log(num * 2)); // 2, 4, 6, 8, 10

    // Transformation
    const doubled = numbers.map(n => n * 2);      // [2, 4, 6, 8, 10]
    const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
    const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

    // Searching
    console.log(fruits.indexOf("banana")); // 1
    console.log(fruits.includes("mango")); // false

    // Slicing/Splicing
    const sliced = numbers.slice(1, 3); // [2, 3] (creates new array)
    const spliced = fruits.splice(1, 1, "kiwi"); // removes "banana", adds "kiwi". fruits is ["apple", "kiwi", "cherry"]
                                                 // spliced returns ["banana"] (removed items)
    ```

---

## 16-Generics (JavaScript)

* JavaScript does not have a direct equivalent of TypeScript's static type-checking generics. Instead, JavaScript functions are inherently flexible and can operate on values of any type at runtime. You write functions that are "generic" by design, handling different data types through their logic.

    ```javascript
    // A "generic" identity function in JavaScript
    function identity(arg) {
        return arg;
    }

    let output1 = identity("myString"); // arg is a string
    let output2 = identity(100);     // arg is a number
    let output3 = identity({ a: 1 }); // arg is an object

    console.log(output1);
    console.log(output2);
    console.log(output3);
    ```

---

## 17-Enums (JavaScript Patterns)

* JavaScript doesn't have a built-in `enum` keyword. Common patterns to simulate enums include:

    * **Plain Objects**:

        ```javascript
        const Direction = {
            UP: 0,
            DOWN: 1,
            LEFT: 2,
            RIGHT: 3
        };
        console.log(Direction.UP); // 0
        ```

    * **Frozen Objects (to prevent modification)**:

        ```javascript
        const Status = Object.freeze({
            SUCCESS: "SUCCESS",
            FAILURE: "FAILURE",
            PENDING: "PENDING"
        });
        console.log(Status.SUCCESS); // "SUCCESS"
        // Status.SUCCESS = "NEW"; // Error in strict mode
        ```

---

## 18-Union Types (JavaScript)

* JavaScript is dynamically typed, so variables can hold values of different types without explicit "union types" at the language level. You handle this flexibility with runtime checks.

    ```javascript
    function printId(id) {
        console.log(`Your ID is: ${id}`);
    }
    printId(101);    // id is a number
    printId("202");  // id is a string
    printId(true);   // id is a boolean (no compile-time error like TS)
    ```

* **Runtime Type Checking**: See **26-Type Checking/Narrowing**.

---

## 19-Import and Export (ES Modules)

* **Exporting (in `math.js`)**:

    ```javascript
    // math.js
    export const PI = 3.14;
    export function add(a, b) {
        return a + b;
    }
    export class Calculator { /* ... */ }
    export default function multiply(a, b) {
        return a * b;
    }
    ```

* **Importing (in `main.js`)**:

    ```javascript
    // main.js
    import { PI, add } from './math.js'; // Named imports
    import MyCalc from './math.js';      // Default import (can be renamed)
    import * as MathUtils from './math.js'; // Import all as an object

    console.log(PI);
    console.log(add(2, 3));
    console.log(MathUtils.PI);
    console.log(MyCalc(4, 5));
    ```

* **Note**: For browser use, include `<script type="module" src="main.js"></script>`. For Node.js, ensure `package.json` has `"type": "module"` or use `.mjs` extension.

---

## 20-Destructuring and Spread (ES2015)

* **Array Destructuring**:

    ```javascript
    const [first, second] = [1, 2];
    const [, , third] = [1, 2, 3]; // Skip elements
    const [a, ...rest] = [1, 2, 3, 4]; // a=1, rest=[2,3,4]
    ```

* **Object Destructuring**:

    ```javascript
    const person = { name: "Alice", age: 30, city: "London" };
    const { name, age } = person; // name="Alice", age=30
    const { name: userName, city } = person; // userName="Alice", city="London"
    const { name: n, ...details } = person; // n="Alice", details={age:30, city:"London"}
    ```

* **Spread Operator (`...`)**:

    * **Array Spreading**:

        ```javascript
        const arr1 = [1, 2];
        const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
        const combined = [...arr1, ...[5, 6]]; // [1, 2, 5, 6]
        ```

    * **Object Spreading (ES2018)**:

        ```javascript
        const obj1 = { a: 1, b: 2 };
        const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
        const obj3 = { ...obj1, b: 20 }; // { a: 1, b: 20 } (overwrites 'b')
    ```

---

## 21-Async/Await (ES2017)

* **Asynchronous Programming**: Simplifies working with Promises.

    ```javascript
    function fetchData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Data fetched!");
            }, 1000);
        });
    }

    async function processData() {
        try {
            console.log("Fetching data...");
            const data = await fetchData(); // Pause execution until Promise resolves
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    processData();
    ```

---

## 22-`typeof` Operator

* **`typeof` Operator**: Returns a string indicating the type of the unevaluated operand.

    ```javascript
    let s = "hello";
    console.log(typeof s); // "string"

    let num = 123;
    console.log(typeof num); // "number"

    let bool = true;
    console.log(typeof bool); // "boolean"

    let obj = {};
    console.log(typeof obj); // "object"

    let arr = [];
    console.log(typeof arr); // "object" (Arrays are objects)

    let func = function() {};
    console.log(typeof func); // "function"

    let undef;
    console.log(typeof undef); // "undefined"

    let nul = null;
    console.log(typeof nul); // "object" (historical bug, still returns "object")
    ```

---

## 23-Object Merging (JavaScript)

* JavaScript doesn't have "intersection types" like TypeScript. Instead, you can merge objects at runtime using:

    * **Spread Syntax (ES2018)**:

        ```javascript
        const objA = { a: 1, b: 2 };
        const objB = { c: 3, d: 4 };
        const mergedObj = { ...objA, ...objB }; // { a: 1, b: 2, c: 3, d: 4 }

        const objC = { x: 1, y: 2 };
        const objD = { y: 3, z: 4 };
        const mergedWithOverlap = { ...objC, ...objD }; // { x: 1, y: 3, z: 4 } (objD's 'y' overwrites objC's 'y')
        ```

    * **`Object.assign()`**:

        ```javascript
        const target = {};
        const mergedAssign = Object.assign(target, objA, objB); // target is modified and returned
        console.log(mergedAssign); // { a: 1, b: 2, c: 3, d: 4 }
        ```

---

## 24-Discriminated Unions (JavaScript Pattern)

* While JavaScript doesn't enforce discriminated unions at compile time, the pattern is very common for runtime logic.

    ```javascript
    // Example objects representing different shapes
    const circle = {
        kind: "circle",
        radius: 10
    };

    const square = {
        kind: "square",
        sideLength: 5
    };

    function getArea(shape) {
        switch (shape.kind) {
            case "circle":
                return Math.PI * shape.radius ** 2;
            case "square":
                return shape.sideLength ** 2;
            default:
                // Handle unknown shapes or throw an error
                console.error("Unknown shape kind:", shape.kind);
                return 0;
        }
    }

    console.log(getArea(circle)); // ~314.159
    console.log(getArea(square)); // 25
    ```

---

## 25-`this` Keyword

* **Context of `this`**: The value of `this` depends on *how* a function is called.

    * **Global Context**: In the global scope (or simple function calls in non-strict mode), `this` refers to the global object (`window` in browsers, `global` in Node.js). In strict mode, `this` is `undefined` in simple function calls.

    * **Method Call**: When a function is called as a method of an object, `this` refers to that object.

    * **Constructor Call (`new`)**: When a function is called with `new`, `this` refers to the newly created instance.

    * **Arrow Functions (ES2015)**: Arrow functions do *not* have their own `this`. They lexically inherit `this` from their enclosing scope. This is a common pattern to avoid `this` binding issues.

    * **Explicit Binding (`call`, `apply`, `bind`)**:

        * `call()` and `apply()`: Immediately invoke the function with a specified `this` value. `call` takes arguments individually, `apply` takes an array of arguments.

        * `bind()`: Returns a *new* function with `this` permanently bound.

    ```javascript
    const obj = {
        name: "MyObject",
        logName: function() {
            console.log(this.name);
        },
        logNameArrow: () => {
            console.log(this.name); // 'this' here refers to the 'this' of the surrounding scope (e.g., global object in this context)
        }
    };

    obj.logName(); // "MyObject" (this is obj)

    const unboundLog = obj.logName;
    // unboundLog(); // undefined (or "window" in non-strict browser) - 'this' is global/undefined

    const boundLog = obj.logName.bind(obj);
    boundLog(); // "MyObject" (this is permanently bound to obj)

    obj.logNameArrow(); // undefined (or "window" in non-strict browser) - 'this' is from global scope
    ```

---

## 26-Type Checking/Narrowing (JavaScript)

* JavaScript uses runtime checks to determine the type of a value.

    * **`typeof`**: Best for primitive types.

        ```javascript
        function processValue(value) {
            if (typeof value === "string") {
                console.log(value.toUpperCase());
            } else if (typeof value === "number") {
                console.log(value.toFixed(2));
            } else {
                console.log("Value is neither string nor number.");
            }
        }
        processValue("hello");
        processValue(123.456);
        processValue(true);
        ```

    * **`instanceof`**: Checks if an object is an instance of a specific class.

        ```javascript
        class Dog { bark() { console.log("Woof!"); } }
        class Cat { meow() { console.log("Meow!"); } }

        function animalSound(animal) {
            if (animal instanceof Dog) {
                animal.bark();
            } else if (animal instanceof Cat) {
                animal.meow();
            } else {
                console.log("Unknown animal type.");
            }
        }
        animalSound(new Dog());
        animalSound(new Cat());
        ```

    * **`in` operator**: Checks if an object has a specific property.

        ```javascript
        const fish = { swim: () => console.log("Swimming!") };
        const bird = { fly: () => console.log("Flying!") };

        function move(animal) {
            if ("swim" in animal) {
                animal.swim();
            } else if ("fly" in animal) {
                animal.fly();
            } else {
                console.log("Cannot move this animal.");
            }
        }
        move(fish);
        move(bird);
        ```

    * **Truthiness/Falsiness**: Values like `null`, `undefined`, `0`, `""`, `false`, `NaN` are "falsy" and evaluate to `false` in a boolean context.

        ```javascript
        function greetUser(name) {
            if (name) { // Checks if name is not null, undefined, "", 0, false, NaN
                console.log(`Hello, ${name}!`);
            } else {
                console.log("Hello, guest!");
            }
        }
        greetUser("Alice");
        greetUser(null);
        ```

---

## 27-Configuration & Tooling (JavaScript)

* JavaScript projects often rely on `package.json` for managing dependencies and scripts, and tools like Babel for transpilation or Webpack/Rollup for bundling.

* **`package.json`**:

    ```json
    {
      "name": "my-js-project",
      "version": "1.0.0",
      "description": "A simple JavaScript project.",
      "main": "index.js",
      "type": "module", // For ES Modules in Node.js
      "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js", // Example with nodemon
        "build": "webpack --mode production" // Example with webpack
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        // runtime dependencies
      },
      "devDependencies": {
        "webpack": "^5.0.0",
        "webpack-cli": "^4.0.0",
        "babel-loader": "^8.0.0",
        "@babel/core": "^7.0.0",
        "@babel/preset-env": "^7.0.0",
        "nodemon": "^2.0.0"
      }
    }
    ```

* **Babel (for transpilation)**: Used to convert modern JavaScript (ES6+) into older versions for broader browser compatibility.

    * `.babelrc` or `babel.config.js`:

        ```json
        {
          "presets": ["@babel/preset-env"]
        }
        ```

* **Webpack (for bundling)**: Combines multiple JavaScript files and other assets into a single bundle.

    * `webpack.config.js`:

        ```javascript
        const path = require('path');

        module.exports = {
          mode: 'development', // 'production' or 'development'
          entry: './src/index.js',
          output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
            ]
          }
        };
        ```