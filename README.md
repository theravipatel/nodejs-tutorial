# Nodejs Tutorial

## 1) Install Node & Node Package Manager(NPM)
- Download node from https://nodejs.org/en/ and install it.

## 2) Check node version 
``
node -v
``

## 3) Check NPM version 
``
npm -v
``

## 4) Make first nodejs program
- Create index.js
``
console.log("Hello World!");
``

- In terminal, run below command. It will print "Hello World!"
``
node index.js
``

## 5) Local module - Created by user
- local_module.js
``
module.exports = {
    x: 10,
    y: 20,
    my_function: function () {
        return "Hello from function!";
    }
}
``

- app.js
``
var local_module = require('./local_module');

console.log(local_module.x); // Print 10
console.log(local_module.y); // Print 20
console.log(local_module.x + local_module.y); // Print 30
console.log(local_module.my_function()); // Call my_function
``