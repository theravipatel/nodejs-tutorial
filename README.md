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

## 9) Package.json file
- It is the manifest file of any Node.js project and contains the metadata of the project.
- It can be categorised into below categories:
    - **Identifying metadata properties**: It basically consists of the properties to identify the module/project such as the name of the project, current version of the module, licence, author of the project, description about the project etc. 
    - **Functional metadata properties**: As the name suggests, it consists of the functional values/properties of the project/module such as the entry/starting point of the module, dependencies in project, scripts being used, repository links of Node project etc.
- It can be create using command `npm init`
- Package.json file properties as below:
    - **name**: The name of the application/project. 
    - **version**: The version of application. The version should follow semantic versioning rules. 
    - **description**: The description about the application, purpose of the application, technology used like React, MongoDB, etc. 
    - **main**: This is the entry/starting point of the app. It specifies the main file of the application that triggers when the application starts. Application can be started using npm start. 
    - **scripts**: The scripts which needs to be included in the application to run properly. 
    - **engines**: The versions of the node and npm used. These versions are specified in case the application is deployed on cloud like heroku or google-cloud. 
    - **keywords**: It specifies the array of strings that characterizes the application. 
    - **author**: It consist of the information about the author like name, email and other author related information. 
    - **license**: The license to which the application confirms are mentioned in this key-value pair. 
    - **dependencies**: The third party package or modules installed using npm are specified in this segment. 
    - **devDependencies**: The dependencies that are used only in the development part of the application are specified in this segment. These dependencies do not get rolled out when the application is in production stage. 
    - **repository**: It contain the information about the type and url of the repository where the code of the application lives is mentioned here in this segment. 
    - **bugs**: The url and email where the bugs in the application should be reported are mentioned in this segment.
- **NOTE** that after installing external package to the project, it will create **node_modules** folder which may contains multiple packages so to avoid pushing it to github repository, add **node_module** folder to **.gitignore** file. 

## 10) Getting input from command line
- To get input and use/display it in the program from command, use `progress.argv` as below:
- get_input_from_command.js
```
console.log(process.argv);
```

- In terminal run:
```
node get_input_from_command.js Hi Hello
```

- It will display result like below:
```
[
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\xampp\\htdocs\\demo\\nodejs\\get_input_from_command.js',
  'Hi',
  'Hello'
]
```