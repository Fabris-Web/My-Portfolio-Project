// ------------------------------- // VARIABLES // ------------------------------- let name = "John"; // 'let' declares a variable with block scope const age = 30; // 'const' declares a constant value that cannot be reassigned var city = "Nairobi"; // 'var' declares a function-scoped variable (older way)
// ------------------------------- // DATA TYPES // ------------------------------- let number = 10; // Number let text = "Hello"; // String let isTrue = false; // Boolean let fruits = ["apple", "banana"]; // Array let person = { name: "Alice", age: 25 }; // Object let nothing = null; // Null let notDefined; // Undefined
// ------------------------------- // OPERATORS // ------------------------------- let sum = 10 + 5; // Addition let diff = 10 - 5; // Subtraction let prod = 10 * 5; // Multiplication let quot = 10 / 2; // Division let mod = 10 % 3; // Modulus
// ------------------------------- // CONDITIONAL STATEMENTS // ------------------------------- if (age >= 18) { console.log("Adult"); // If condition is true, this runs } else { console.log("Minor"); // If false, this runs }
// ------------------------------- // SWITCH STATEMENT // ------------------------------- let day = "Monday"; switch (day) { case "Monday": console.log("Start of week"); break; case "Friday": console.log("End of week"); break; default: console.log("Another day"); }
// ------------------------------- // LOOPS // ------------------------------- for (let i = 0; i < 5; i++) { console.log(i); // Loops from 0 to 4 }
let j = 0; while (j < 5) { console.log(j); // Loops while condition is true j++; }
// ------------------------------- // FUNCTIONS // ------------------------------- function greet(name) { return "Hello, " + name; // Defines a function }
const sayHi = (name) => { return Hi, ${name}; // Arrow function (ES6) };
// ------------------------------- // EVENTS (browser) // ------------------------------- document.getElementById("myBtn").addEventListener("click", function() { alert("Button clicked!"); // Runs when button is clicked });
// ------------------------------- // DOM MANIPULATION // ------------------------------- let heading = document.getElementById("title"); // Get element by ID heading.innerText = "Updated Title"; // Change text heading.style.color = "blue"; // Change style
// ------------------------------- // CONSOLE METHODS // ------------------------------- console.log("Hello World"); // Logs to console console.error("Error"); // Logs error console.warn("Warning"); // Logs warning
// ------------------------------- // JSON // ------------------------------- let jsonString = '{"name":"Bob", "age":28}'; let obj = JSON.parse(jsonString); // Converts JSON string to object let backToString = JSON.stringify(obj); // Converts object to JSON string


