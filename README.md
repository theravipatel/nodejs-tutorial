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

## 11) Create File in Folder
- Create one folder “my_folder”.
- create_file_in_folder.js
```
var fs = require("fs");
var path = require("path");

var myDirPath = path.join(__dirname, "my_folder"); 

// need to create folder manually 
for (var i = 1; i<=5; i++) {
	fs.writeFileSync(`${myDirPath}/my_file_${i}.txt`, "This is my file content");
}
```

## 12) Display file list of folder
- read_file_list.js
```
var fs = require("fs");
var path = require("path");

var myDirPath = path.join(__dirname, "my_folder");

fs.readdir(myDirPath, (error, files) => {
	console.log(files); // List of file in array
	
    files.forEach((item) => {
        console.log(item); // single file list
    });
});
``` 
- Result will be like below:
```
[
  'my_file_1.txt',
  'my_file_2.txt',
  'my_file_3.txt',
  'my_file_4.txt',
  'my_file_5.txt' 
]
my_file_1.txt
my_file_2.txt
my_file_3.txt
my_file_4.txt
my_file_5.txt
```

## 13) CRUD operation with file
- Create, Update, Rename and Delete file
- crud_operation.js
```
var fs = require("fs");
var path = require("path");

var myDirPath = path.join(__dirname, "my_folder"); 
var myFilePath = `${myDirPath}/new_file.txt`;
var newMyFilePath = `${myDirPath}/renamed_file.txt`;
// need to create folder maually 

// Create File
fs.writeFileSync(myFilePath, "This is my file content");

// Read File
fs.readFile(myFilePath, 'utf8', (error, data) => {
    console.log(data);
});

// Update File
fs.appendFile(myFilePath, 'This content is appended to the content of the file.', (error) => {
    if (!error) {
        console.log("file is updated.");
    }

    // Read File
    fs.readFile(myFilePath, 'utf8', (error, data) => {
        console.log(data);
    });
});

// Rename File
fs.rename(myFilePath, newMyFilePath, (error) => {
    if (!error) {
        console.log("file name is changed.");
    }
});

// Delete File
fs.unlinkSync(newMyFilePath);
```

## 14) Asynchronous Programming
- async_program.js
```
// Demo 1
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

```
// Demo 2 - Here Task 3 will execute after Task 1.
console.log("Task 1");
setTimeout(() => {
    console.log("Task 2 will execute last.");
}, 1000);
console.log("Task 3");
```

- Result will be like below:
```
Task 1
Task 2      
Task 3      
============
Task 1      
Task 3      
Task 2
```

## 15) Handle async data
- To handle async data, it can be done using call back function or promise as shown below. 
- handle_async_data.js
```
let x = 10;
let y = 0;

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        y = 20;
        resolve(y);
    }, 1000);
});

promise.then((data) => {
    y = data;
    console.log("10 + 20 = 30 --> ", x + y);
});

console.log("This will execute first as 10 + 0 = 10 --> ", x + y);
console.log("=========");
```

- Result will be like below:
```
This will execute first as 10 + 0 = 10 -->  10
=========
10 + 20 = 30 -->  30
```

## 16) How nodejs works in the background
- In the background, nodejs program execution works like below:
    - Step 1: Call Stack (main() function will call first, followed by first line of code)
    - Step 2: Node APIs (if any, e.g. setTimeout() which is written in c++ etc..)
    - Step 3: Callback Queue (if any, once main() function remove from call stack, callback queue start moving into the call stack for execution)
- We can call Step 1 to 3 process as **Event Loop** 
- nodejs_works_in_back.js
```
console.log("Task 1");

setTimeout(() => {
    console.log("Task 2 will execute last.");
}, 1000);

setTimeout(() => {
    console.log("Task 3");
}, 0);

console.log("Task 4");
```

- Result will be like below:
```
Task 1
Task 4
Task 3
Task 2 will execute last.
```

## 17) Install external packages using npm install and use it
- It will create **node_module** folder and all packages will be saved in that folder
- Create `.gitignore` file and add `/node_modules` to avoid upload node_modules folder to git repo.
- Below are few examples of external node packages: 
- Nodemon - For automatically restarting the node application when file changes in the directory are detected. In terminal run, `nodemon .\external_nodejs_packages.js` and it will restart automatically after any file changes.
```
npm i nodemon -g
```

- Expressjs - framework for Node.js
```
npm i express
```

- Colors - For color and style in your node.js console
```
npm i colors
```

- extrnal_nodejs_packages.js
```
var colors = require("colors");
console.log("Hello world!".green.bgWhite);
console.log("Hello world!".blue.bgYellow.underline);
```

## 18) ExpressJs: Introduction to Express Js
- express_js_intro.js
```
var express = require("express");
var app = express();

//Homepage with GET method
app.get("", (req, res) => {
    res.send("This is Home Page! - GET method");
});

//Homepage with POST method
app.post("", (req, res) => {
    res.send("This is Home Page! - POST method");
});

//DELETE method
app.delete("/delete-user", (req, res) => {
    res.send("This is delete user route! - DELETE method");
});

app.get("/about-us", (req, res) => {
    res.send("This is About Us Page!");
});

app.get("/contact-us", (req, res) => {
    res.send("This is Contact Us Page!");
});

//app.listen(5000);
var server = app.listen(5000, () => {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, port);
 });
```

## 19) ExpressJs: Render HTML and JSON
- express_js_render_html_json.js
- URLs will be like: 
    - 1) http://localhost:5000/?name=ravi
    - 2) http://localhost:5000/view-json-data
```
var express = require("express");
var app = express();

app.get("", (req, res) => {
    var req_name = req.query.name;
    res.send(`<h1>Welcome ${req_name}!</h1>`);
});

app.get("/view-json-data", (req, res) => {
    var json_data = [
        {
            name: 'Ravi Patel', email: 'ravi@test.com'
        },
        {
            name: 'John Doe', email: 'john@test.com'
        }
    ];
    res.send(json_data);
});

app.listen(5000);
```

## 20) ExpressJs: Access HTML pages and static content using express.static
- Create folder i.e. `public` and html files index.html, about-us.html in the new folder
- To access static files, such as images, CSS, JavaScript, etc. we will use `express.static` which is a built-in middleware of Express Js
- express_js_access_html_pages_and_static_content.js
```
var express = require("express");
var path = require("path"); //To access 'public' directory, use 'path' module

var publicPath = path.join(__dirname, "public");
var app = express();

app.use(express.static(publicPath));

app.listen(5000);
```

## 21) ExpressJs: Remove extension from URL and 404 Page
- express_js_remove_extension_404_page.js
```
var express = require("express");
var path = require("path"); //To access 'public' directory, use 'path' module

var publicPath = path.join(__dirname, "public");
var app = express();

//app.use(express.static(publicPath));
app.get("", (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get("/about-us", (req, res) => {
    res.sendFile(`${publicPath}/about-us.html`);
});

app.get("*", (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);
```