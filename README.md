# Nodejs Tutorial
- Node.js is an open source server environment.
- Node.js allows you to run JavaScript on the server. (v8 engine)
- Node.js uses asynchronous programming!


## 1) Install Node & Node Package Manager(NPM)
- Download node from https://nodejs.org/en/ and install it.

## 2) Check node version 
```
node -v
```

## 3) Check NPM version 
```
npm -v
```

## 4) Make first nodejs program
- Create index.js
```
console.log("Hello World!");
```

- In terminal, run below command. It will print "Hello World!"
```
node index.js
```

## 5) Module
- Consider modules to be the same as JavaScript libraries.
- A set of functions you want to include in your application.
- Modules can be of two type like 1) Core or Built-In Module and 2) Custom/User Created or Local Module
- Each modules can be Global or Non-Global.
- Global Modules: Modules which need not be import and can access directly i.e. console.log();
- Non-Global Modules: Modules which need to be import first i.e. file module -> var fs = require("fs");

## 6) Core Modules
- core_module.js
```
console.log("Console is core global module.");
```

```
var fs = require("fs"); // File System (fs) is core non global module.
fs.writeFileSync("file_name.txt","This is file content.");
```

```
// Above code can be write as below to reduce load
var fs = require("fs").writeFileSync;
fs("file_name.txt","This is file content.");
```

## 7) User Created or Local module
- local_module.js
```
module.exports = {
    x: 10,
    y: 20,
    my_function: function () {
        return "Hello from function!";
    }
}
```

- app.js
```
var local_module = require('./local_module');

console.log(local_module.x); // Print 10
console.log(local_module.y); // Print 20
console.log(local_module.x + local_module.y); // Print 30
console.log(local_module.my_function()); // Call my_function
```

## 8) HTTP Module
- It is a built-in module, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
- Include HTTP module by using `var http = require('http');`
- It is also used to create an HTTP server that listens to server ports and gives a response back to the client. Use the `createServer()` method to create an HTTP server.
- create_server.js
```
var http = require('http');

//create a server object:
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // 200 status, HTML content type
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(5000); //the server object listens on port 5000
```
- Now run `node create_server.js` in terminal and `http://localhost:5000` in browser