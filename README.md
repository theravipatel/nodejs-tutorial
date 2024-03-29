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

## 22) ExpressJs: Intro of EJS Template Engine
- EJS or Embedded Javascript Templating is a templating engine used by Node.js. Template engine helps to create an HTML template with minimal code. Also, it can inject data into HTML template at the client side and produce the final HTML. EJS is a simple templating language which is used to generate HTML markup with plain JavaScript.
- Install EJS using `npm install ejs`
- To work with EJS, Create `views` folder in the root directory and in that folder, all view files have `.ejs` extension.
- The `app.set(name, value)` function is used to assigns the setting name to value and the `app.get('title'))` function used to get the value. You may store any value that you want, but certain names can be used to configure the behavior of the server.
- The `res.render(view [, locals] [, callback])` function is used to render a view and sends the rendered HTML string to the client.
- The `app.render(view, [locals], callback)` function is used to rendered HTML of a view via the callback function. This function returns the html in the callback function.
- In view file, we can include other view file by using `<%- include('common/header'); %>` where `common` is a folder within `views` folder for common files like header, footer etc.
- express_js_intro_ejs_template_engine.js
```
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("", (req, res) => {
    res.render("index");
});

app.get("/profile", (req, res) => {
    var user = {
        name: 'Ravi Patel',
        email: 'ravi@test.com',
        skills: ['PHP', 'Laravel', 'MySQL', 'VueJs', 'NodeJs']
    }
    res.render("profile", {user});
});

app.render('email', function (err, html) {
    if (err) console.log(err);
    console.log(html);
});

app.listen(5000);
```

## 23) ExpressJs: Middleware
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.
- It can be application level middleware, route level middleware, error handling middleware, built-in middleware, third party middleware.

    - Application Level Middleware: It will apply to all routes
    - express_js_application_level_middleware.js
    ```
    var express = require("express");
    var app = express();

    var app_level_middleware = (req, res, next) => {
        if (!req.query.isLogin) {
            res.send("Please login to access pages..! 111");
        } else if (req.query.isLogin != 'true') {
            res.send("Please login to access pages..! 222");
        }
        next(); // <<<--- Don't forgot to add next() function.
    }

    app.use(app_level_middleware);

    app.get("", (req, res) => {
        res.send("This is Home Page!");
    });

    app.get("/profile", (req, res) => {
        res.send("This is Profile Page!");
    });

    app.listen(5000);
    ```
    
    - Route Level Middleware: It will apply to only selected routes
    - express_js_route_level_middleware.js
    ```
    var express = require("express");
    var app = express();

    var route_level_middleware = (req, res, next) => {
        if (!req.query.isLogin) {
            res.send("Please login to access pages..! 111");
        } else if (req.query.isLogin != 'true') {
            res.send("Please login to access pages..! 222");
        }
        next(); // <<<--- Don't forgot to add next() function.
    }

    app.get("", (req, res) => {
        res.send("This is Home Page!");
    });

    app.get("/profile", route_level_middleware, (req, res) => {
        res.send("This is Profile Page!");
    });

    app.listen(5000);
    ```

## 24) ExpressJs: Apply route level middleware using Route() and use separate middleware file
- Create separate express_js_middleware.js file and add filter code there.
```
module.exports = route_level_middleware = (req, res, next) => {
    if (!req.query.isLogin) {
        res.send("Please login to access pages..! 111");
    } else if (req.query.isLogin != 'true') {
        res.send("Please login to access pages..! 222");
    }
    next(); // <<<--- Don't forgot to add next() function.
}
```

- Import middleware.js in to other file
- express_js_import_middleware.js
```
var express = require("express");
var app = express();
var route_level_middleware = require("./express_js_middleware");
var route = express.Router();

route.use(route_level_middleware);

app.get("", (req, res) => {
    res.send("This is Home Page!");
});

route.get("/profile", (req, res) => {
    res.send("This is Profile Page!");
});

app.use("/", route);

app.listen(5000);
```

## 25) MongoDB: Install MongoDB (6.0) and Mongodb Compass Tool
- For **Windows OS System** below are the steps to install MongoDB (6.0)
- Go to https://www.mongodb.com/try/download/community, select version/OS i.e. windows, macOS etc and download & install it.
- Set Environment Variable >> path variable with the installed mongodb bin path i.e. `C:\Program Files\MongoDB\Server\6.0\bin` if not automatically set
- In terminal run `mongod --version`
- To start MongoDB server run `mongod`. But it will give error as below:
```
"msg":"DBException in initAndListen, terminating","attr":{"error":"NonExistentPath: Data directory C:\\data\\db\\ not found. Create the missing directory or specify another path using (1) the --dbpath command line option, or (2) by adding the 'storage.dbPath' option in the configuration file."
```
- So to fix error for MongoDB 6.0 version, we need to create `data/db/` folder in `C:\` drive. Now in terminal run `mongod` to start MongoDB server.
- Now to Create/Access MongoDB using terminal, we need to download MongoDB Shell from https://www.mongodb.com/try/download/shell >> Tool section. Download zip file >> extract zip file and put in `C:\` drive. Now inside `bin` folder >> execute `mongosh.exe`. 
- We can also use `Mongodb Compass Tool` which is a **GUI interface** for mongodb like `phpmyadmin` for MySQL for Create/Access MongoDB. To connect with MongoDB server from MongoDB Compass Tool, we need to first start MongoDB server (Run `mongod`)

## 26) MongoDB: Basics of MongoDB
- Using terminal there are few basic MongoDB commands to show/create/delete DB, collections etc as below:
- `show dbs` = Shows all databases
- `use DATABASE_NAME` = Create a new database
- `db.dropDatabase()` = Delete current database
- `db.createCollection('COLLECTION_NAME', [options])` = Create a collection of current db. **options** can be `{autoIndexID : true}` or `{capped : true, size : 6142800}`
- `show collections` = Show current database's all collections
- `db.COLLECTION_NAME.drop()` = Delete current database of particular collection

## 27) MongoDB: CRUD Operations
- CRUD Operatios using terminal in MongoDB can be done using below commands:
- Create/Insert
    - `insertOne()`
    ```
    db.posts.insertOne({
        title: "Post Title 1",
        category: "News",
        likes: 1,
        tags: ["news", "events"],
        date: Date()
    })
    ```
    - `insertMany()`
    ```
    db.posts.insertMany(
        [
            {
                title: "Post Title 1",
                category: "Event",
                likes: 2,
                tags: ["news", "events"],
                date: Date()
            },
            {
                title: "Post Title 2",
                category: "Event",
                likes: 1,
                tags: ["news", "events"],
                date: Date()
            }
        ]
    )
    ```
- Read/Find
    - `find()` - This method accepts a query object. If left empty, all documents will be returned.
    ```
    db.posts.find() // Return all documents
    db.posts.find({category: "Event"}) // Return only matched documents
    ```
    - `findOne()` - This method accepts a query object. If left empty, it will return the first document it finds.
    ```
    db.posts.findOne()
    db.posts.findOne({category: "Event"})
    ```
- Update
    - `db.posts.updateOne()` - This method accepts two args objects: 1) SELECTION_CRITERIA, 2) UPDATED_DATA
    - If you would like to insert the document if it is not found, you can use the `upsert` option.
    ```
    // This will update document
    db.posts.updateOne({ title: "Post Title 1" }, { $set: { likes: 2 } })
    ```
    ```
    // This will update document if match found but if match not found then data will be inserted
    db.posts.updateOne({ title: "Post Title 5" }, { $set: { likes: 4 } }, { upsert: true })
    ```
    - `updateMany()` - The method will update all documents that match the provided query.
    ```
    db.posts.updateMany({ category: "Event" }, { $set: { likes: 50 } })
    ```
- Delete
    - `deleteOne()` - This method will delete the first document that matches the query provided.
    ```
    db.posts.deleteOne({ title: "Post Title 1" })
    ```
    - `deleteMany()` - This method will delete all documents that match the query provided.
    ```
    db.posts.deleteMany({ likes: 20 })
    ```

## 28) MongoDB: Query Operators
- MongoDB query operator includes comparison, logical, evaluation, element, geospatial, array, bitwise, and comment operators. Few basic operators are listed below:
- Comparison - The following operators can be used in queries to compare values:
    - `$eq`: Values are equal.
        - **Ex.**: `db.posts.find({ likes: { $eq: 20 } })`
    - `$ne`: Values are not equal.
        - **Ex.**: `db.posts.find({ likes: { $ne: 20} })`
    - `$gt`: Value is greater than another value.
        - **Ex.**: `db.posts.find({ likes: { $gt: 20} })`
    - `$gte`: Value is greater than or equal to another value.
        - **Ex.**: `db.posts.find({ likes: { $gte: 20} })`
    - `$lt`: Value is less than another value.
        - **Ex.**: `db.posts.find({ likes: { $lt: 20} })`
    - `$lte`: Value is less than or equal to another value.
        - **Ex.**: `db.posts.find({ likes: { $lte: 20} })`
    - `$in`: Value is matched within an array.
        - **Ex.**: `db.posts.find({ category: { $in: ["Event", "News"]} })`

- Logical - The following operators can logically compare multiple queries.
    - `$and`: Returns documents where both queries match.
        - **Ex.**: `db.posts.find({ $and: [{ likes: { $ne: 200 }}, {title: { $eq: 'Post Title 1' }}] })`
    - `$or`: Returns documents where either query matches.
        - **Ex.**: `db.posts.find({ $or: [{ likes: { $ne: 200 }}, {title: { $eq: 'Post Title 1' }}] })`
    - `$nor`: Returns documents where both queries fail to match.
        - **Ex.**: `db.posts.find({ $nor: [{ likes: { $ne: 200 }}, {title: { $eq: 'Post Title 1' }}] })`
    - `$not`: Returns documents where the query does not match.
        - **Ex.**: `db.posts.find({ likes: { $not: { $gt: 20 }} })`

- Evaluation - The following operators assist in evaluating documents.
    - `$regex`: Allows the use of regular expressions when evaluating field values.
        - **Ex.**: `db.posts.find({ title: { $regex: /[a-zA-Z0-2]$/} })`
    - `$text`: Performs a text search.
        - **Ex.**: `db.posts.find({ $text: { $search: "Post", $caseSensitive: true } })` - If text index is set then it will give erorr "text index required for $text query"
    - `$where`: Uses a JavaScript expression to match documents. 
        - **Ex.**: 
        ```
        db.posts.find({
            $where: {
                function() {
                    return (hex_md5(this.title) == "8141353da0aa50e45583807510610dc6");
                } 
            }
        })
        ```

## 29) MongoDB: Update Field and Array Operators
- MongoDB update operator includes Field, Array operators as below:
- Field - Operators can be used to update fields
    - `$currentDate`: This operator is used to set the value of a field to current date, either as a Date or a Timestamp.
        - **Ex.**: `db.posts.updateOne( {title: "Post Title 2"}, {$currentDate: {date: true}} )`
    - `$inc`: This operator is used to increment the value of the field by the specified amount.
        - **Ex.**: `db.posts.updateOne( {title: "Post Title 2"}, {$inc: {likes: 2}} )`
    - `$min`: This operator is used only to update the field if the specified value is less than the existing field value.
        - **Ex.**: `db.posts.updateOne( {title: "Post Title 2"}, {$min: {likes: 49}} )`
    - `$max`: This operator is used only to update the field if the specified value is greater than the existing field value.
        - **Ex.**: `db.posts.updateOne( {title: "Post Title 2"}, {$max: {likes: 55}} )`
    - `$mul`: This operator is used to multiply the value of the field by the specified amount.
        - **Ex.**: `db.posts.updateOne( {title: "Post Title 2"}, {$mul: {likes: 2}} )`
    - `$rename`: This operator is used to rename a field.
        - **Ex.**: `db.posts.updateOne( {title: "Post Title 2"}, {$rename: {likes: 'post_likes'}} )`
    - `$setOnInsert`: This operator is used to set the value of a field if an update results in an insert of a document. It has no effect on update operations that modify existing documents.
        - **Ex.**: `db.posts.updateOne({ title: "Post Title 1", category: "Event"}, { $currentDate: {date: true}}, { $setOnInsert: {likes: 20} }, { upsert: true })`
    - `$unset`: Removes the field from the document
        - **Ex.**: `db.posts.updateOne({ title: "Post Title 10"}, { $unset: {post_likes: ''}})`
- Array - Operators assist with updating arrays
    - `$addToSet`: Adds distinct elements to an array
        - **Ex.**: `db.posts.updateOne({ title: "Post Title 10"}, {$addToSet: {tags: "event"}})`
    - `$pop`: Removes the first (-1) or last (1) element of an array
        - **Ex.**: `db.posts.updateOne({ title: "Post Title 5"}, {$pop: {tags: 1}})`
    - `$pull`: Removes all elements from an array that match the query
        - **Ex.**: `db.posts.updateOne({ title: "Post Title 5"}, {$pull: {tags: { $in: ["article", "test"]}}})`
    - `$push`: Adds an element to an array. If the specified field in the $push operator is not an array, then this operation will fails.
        - **Ex.**: `db.posts.updateOne({ title: "Post Title 5"}, {$push: {tags: "article"}})`
    - `$push` with Modifiers: To add multiple values to array, sort, slice array use following modifiers
        - `$each`: Add multiple documents to the specified field array
            - **Ex.**: `db.posts.updateOne({ title: "Post Title 5"}, {$push: {tags: { $each: ["test 2", "test 1"]}}})`
        - `$sort`: Sort all the items of the specified field array in ascending.
            - **Ex.**: `db.posts.updateOne({ title: "Post Title 5"}, {$push: {tags: { $each: ["test 2", "test 1"], $sort: 1}}})`
        - `$slice`: keep only the first specified sorted items of the specified field array
            - **Ex.**: `db.posts.updateOne({ title: "Post Title 5"}, {$push: {tags: { $each: ["test 2", "test 1"], $sort: 1, $slice: 3}}})`

## 30) Connect MongoDB with Node js
- Install package from https://www.npmjs.com/package/mongodb
```
npm i mongodb
```
- connect_db_mongodb.js
```
// Include mongodb package
var { MongoClient } = require("mongodb");

// Mongodb Localhost URL
var url = "mongodb://localhost:27017";

// Database Name
var db_name = "blog";

// Mongodb client object
var client = new MongoClient(url);

async function getPostData() {
    //Connect with mongodb
    var conn = await client.connect();
    var db = conn.db(db_name);

    var posts_collection = db.collection("posts");
    var posts_data = await posts_collection.find().toArray();

    console.log(posts_data);
}

getPostData();
```

## 31) MongoDB with NodeJs - CRUD Operation - Read/Get Data
- Make a separate connection file and include it in all other file where required.
- mongodb_connection.js
```
// Include mongodb package
var { MongoClient } = require("mongodb");

// Mongodb Localhost URL
var url = "mongodb://localhost:27017";

// Database Name
var db_name = "blog";

// Mongodb client object
var client = new MongoClient(url);

async function dbConnect(collection_name) {
    let result = await client.connect();
    db= result.db(db_name);
    return db.collection(collection_name);
  
}
module.exports= dbConnect;
```
- mongodb_crud_read_get_data.js
```
var dbConnect = require("./mongodb_connection");

/*** Method 1 ***/

dbConnect("posts").then((data) => {
    data.find().toArray().then((data) => {
        console.log(data);
    });
});

/*** Method 2 ***/
const getData = async (collection_name) => {
   let data = await dbConnect(collection_name);
   data = await data.find().toArray();
   console.log(data);
}

getData("category");
getData("posts");
```

## 32) MongoDB with NodeJs - CRUD Operation - Insert Data
- mongodb_crud_insert_data.js
```
var dbConnect = require("./mongodb_connection");

const insertData = async (collection_name, data) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.insertMany(data);

    console.log(result);

    if (result.acknowledged) {
        console.warn("data is inserted")
    }
}

var category_data = [
    { name: "Test 1", status: "active" },
    { name: "Test 2", status: "active" },
    { name: "Test 3", status: "active" }
];
insertData("category", category_data);
```

## 33) MongoDB with NodeJs - CRUD Operation - Update Data
- mongodb_crud_update_data.js
```
var dbConnect = require("./mongodb_connection");

const updateData = async (collection_name, data, where) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.updateOne(where, data);

    console.log(result);

    if (result.acknowledged) {
        console.warn("data is updated")
    }
}

var category_data = { $set: { name: "Test 11", status: "deactive" }};
var category_where = { name: "Test 1" };
updateData("category", category_data, category_where);
```

## 34) MongoDB with NodeJs - CRUD Operation - Delete Data
- mongodb_crud_delete_data.js
```
var dbConnect = require("./mongodb_connection");

const deleteData = async (collection_name, where) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.deleteOne(where);

    console.log(result);

    if (result.acknowledged) {
        console.warn("data is deleted")
    }
}

var category_where = { name: "Test 11" };
deleteData("category", category_where);
```

## 35) MongoDB with NodeJs/ExpressJs - Basic APIs - GET API
- mongodb_api_get_data.js
```
const express = require("express");
const dbConnect = require("./mongodb_connection");
const app = express();

const getData = async (collection_name) => {
    let data = await dbConnect(collection_name);
    data = await data.find().toArray();
    return data;
}

app.get("/", async (req, res) => {
    let category_data = await getData("category");
    res.send(category_data);
});

app.listen("5000");
```

## 36) MongoDB with NodeJs/ExpressJs - Basic APIs - POST API
- mongodb_api_post_data.js
```
const express = require("express");
const dbConnect = require("./mongodb_connection");
const app = express();

// 'express.json()' for parsing POST data from request. Express 4.6+ feature
app.use(express.json());

const insertData = async (collection_name, data) => {
    let collection = await dbConnect(collection_name);
    let result = await collection.insertOne(data);
    return result;
}

app.post("/", async (req, res) => {
    let result = await insertData("category", req.body);
    res.send(result);
});

app.listen("5000");
```

## 37) MongoDB with NodeJs/ExpressJs - Basic APIs - PUT API
- mongodb_api_put_data.js
```
const express = require("express");
const dbConnect = require("./mongodb_connection");
const app = express();

// 'express.json()' for parsing data from request. Express 4.6+ feature
app.use(express.json());

const updateData = async (collection_name, data, where) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.updateOne(where, data);

    return result;
}

app.put("/:name", async (req, res) => {
    let where = { name: req.params.name };
    let data = { $set: req.body };
    let result = await updateData("category", data, where);
    res.send(result);
});

app.listen("5000");
```

## 38) MongoDB with NodeJs/ExpressJs - Basic APIs - DELETE API
- Delete document/record/row using **"id"**, `where condition` can be written like `{ _id: new mongodb.ObjectId(req.params.id) }` and for that we need to include **mongodb package** in the file.
- mongodb_api_delete_data.js
```
const express = require("express");
const dbConnect = require("./mongodb_connection");
const mongodb = require("mongodb");
const app = express();

// 'express.json()' for parsing data from request. Express 4.6+ feature
app.use(express.json());

const deleteData = async (collection_name, where) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.deleteOne(where);

    return result;
}

app.delete("/:id", async (req, res) => {
    let where = { _id: new mongodb.ObjectId(req.params.id) };
    let result = await deleteData("category", where);
    res.send(result);
});

app.listen("5000");
```

## 39) Introduction to Mongoose with NodeJs
- Mongoose is an **ODM(Object Data Modelling)** Library made for NodeJS and MongoDB Database, it enables users to create and manage relationships between data by mapping objects from MongoDB to NodeJS and managing the schema validations for the data.
- MongoDB is a very flexible database since it is a NoSQL Database, which works on the concept of storing documents as just JSON Objects, however, to perform basic schema validations and manage the data easily we would need a library like Mongoose.
- Terminologies to Know Before Getting Started:
    - `Schema`: We do know that MongoDB is a schema-less database but still, we need to define the schema of the application user using mongoose for validation purposes, schema just means the overall structure and how the data is organized in the database.
    - `Models`: Models in our context will be just high-level functions that will take defined schema and create an instance of the MongoDB document.
- Install Mongoose using below command:
```
npm i mongoose
```
- Connect with database using mongoose
- connect_db_mongoose.js
```
const mongoose = require("mongoose");

const init = async () => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Schema
    const categorySchema = new mongoose.Schema({
        name: String,
        status: String
    });

    // Model
    const categoryModel = mongoose.model("category", categorySchema, "category");

    // Save Data demo - here 'status' will not save as it is not defined in the 'categorySchema'
    let data = new categoryModel({ name: "Test 8", status: "active" });
    let result = await data.save();

    console.log(result);
}

init();
```

## 40) Mongoose with NodeJs - CRUD Operation - Create/Insert Data
- mongoose_crud_insert_data.js
```
const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const insertData = async (collection_name, collection_schema, data) => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Model
    const collectionModel = mongoose.model(collection_name, collection_schema, collection_name);

    let modelObj = new collectionModel(data);
    let result = await modelObj.save();

    console.log(result);
}

var category_data = {
    name: "Test 5",
    status: "active"
}
insertData("category", categorySchema, category_data);
```

## 41) Mongoose with NodeJs - CRUD Operation - Read/Get Data
- mongoose_crud_read_get_data.js
```
const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const getData = async (collection_name, collection_schema) => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Model
    const collectionModel = mongoose.model(collection_name, collection_schema, collection_name);

    let result = await collectionModel.find();
    console.log(result);
}

getData("category", categorySchema);
```

## 42) Mongoose with NodeJs - CRUD Operation - Update Data
- mongoose_crud_update_data.js
```
const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const updateData = async (collection_name, collection_schema, data, where) => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Model
    const collectionModel = mongoose.model(collection_name, collection_schema, collection_name);

    let result = await collectionModel.updateOne(where, data);
    console.log(result);
}

var category_data = {
    status: "deactive"
}
var category_where = { name: "Test 1" };
updateData("category", categorySchema, category_data, category_where);
```

## 43) Mongoose with NodeJs - CRUD Operation - Delete Data
- mongoose_crud_delete_data.js
```
const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const deleteData = async (collection_name, collection_schema, where) => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Model
    const collectionModel = mongoose.model(collection_name, collection_schema, collection_name);

    let result = await collectionModel.deleteOne(where);
    console.log(result);
}

var category_data = {
    status: "deactive"
}
var category_where = { name: "Test 5" };
deleteData("category", categorySchema, category_where);
```

## 44) Mongoose with NodeJs/ExpressJs - POST/PUT/GET/DELETE APIs
- Make a separate connection file and include it in all other file where required.
- Make a separate file for defining Schema and Model
- Include above file where required.
- mongoose_connection.js
```
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog");
```
- mongoose_api_category_schema_and_model.js
```
const mongoose = require("mongoose");

const collection_name = "category";

const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const categoryModel = mongoose.model(collection_name, categorySchema, collection_name);

module.exports = categoryModel;
```
- mongoose_api_basic_apis.js
```
require("./mongoose_connection");

// Set ExpressJs
const express = require("express");
const app = express();
app.use(express.json());

// Include model file
const categoryModel = require("./mongoose_api_category_schema_and_model");

// POST API
app.post("/create", async (req, res) => {
    let data = req.body;
    let modelObj = new categoryModel(data);
    let result = await modelObj.save();

    res.send(result);
});

// GET API 
app.get("/get", async (req, res) => {
    let result = await categoryModel.find();

    res.send(result);
});


// PUT API - update document using "id" 
app.put("/update/:_id", async (req, res) => {
    let data = req.body;
    let result = await categoryModel.updateOne(
        req.params, //where condition
        { $set: data } // data
    );

    res.send(result);
});

// PUT API - update document using "name" 
app.put("/update/:name", async (req, res) => {
    let data = req.body;
    let result = await categoryModel.updateOne(
        { name: req.params.name }, //where condition
        { $set: data } // data
    );

    res.send(result);
});

// DELETE API - delete document using "id" 
app.delete("/delete/:_id", async (req, res) => {
    let data = req.body;
    let result = await categoryModel.deleteOne(
        req.params, //where condition
    );

    res.send(result);
});

// DELETE API - delete document using "name" 
app.delete("/delete/:name", async (req, res) => {
    let data = req.body;
    let result = await categoryModel.deleteOne(
        { name: req.params.name }, //where condition
    );

    res.send(result);
});

app.listen(5000);
```

## 45) Mongoose with NodeJs/ExpressJs - Search API
- mongoose_api_search_api.js
```
require("./mongoose_connection");

// Set ExpressJs
const express = require("express");
const app = express();
app.use(express.json());

// Include model file
const categoryModel = require("./mongoose_api_category_schema_and_model");

// Search API 
app.get("/search/:keyword", async (req, res) => {
    let result = await categoryModel.find(
        {
            $or: [
                { name: { $regex: req.params.keyword } },
                { status: { $regex: req.params.keyword } }
            ]
        }
    );

    res.send(result);
});

app.listen(5000);
```

## 46) Mongoose with NodeJs/ExpressJs - Relationship - One to One
- MongoDB is not a relational database like MySQL, PostgreSQL, but we can still create relationships that are either embedded or referenced.
- Referenced relationships are more akin to the relations using in relational databases.
- mongoose_relationship_one_to_one.js
- In below example, Customer and Payment collections have one-to-one relation means customer pays only one time at the time of customer creation.
```
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch((err) => console.error("Connection error", err));

/**
 * Models & Schemas
 */
const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
});
const paymentSchema = new mongoose.Schema({
  cardCode: String,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
  },
});

const customersModel = mongoose.model("customers", customerSchema);
const paymentsModel = mongoose.model("payments", paymentSchema);


/**
 * Controllers
 */
const createCustomer = async (data) => {
    let modelObj = new customersModel(data);
    let customer = await modelObj.save();
    return customer;
}
const makePayment = async (data) => {
    let modelObj = new paymentsModel(data);
    let payment = await modelObj.save();
    return payment;
}
const showPayments = async (data) => {
    let result = await paymentsModel.find().populate({ path: "customer", select: "name"});
    console.log(result);
}

const customerData = {
    "name": "User 1",
    "phone": "9876543210",
};
const customer = createCustomer(customerData);
customer
.then((result) => {
    console.log("New Customer");
    
    const paymentData = {
        "cardCode": Math.floor(Math.random() * 1234),
        "customer": result
    };
    makePayment(paymentData)
    .then((result) => {
        showPayments();        
    })
    .catch((err) => {
        console.log(err);
    });
})
.catch((err) => {
    console.log(err);
});
```


## 47) Mongoose with NodeJs/ExpressJs - Relationship - One to Many
- mongoose_relationship_one_to_many.js
- In the below example, "posts" has multiple comments so referenced "comments" collection with "posts" collection.
- Note: Here we need to use route to be able to see returned one-to-many data as in the console it is not showing referenced field i.e. comment's detail 
```
/**
 * Set ExpressJs
 */
const express = require("express");
const app = express();
app.use(express.json());

/**
 * Mongoose Connection
 */
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/relationships")
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch((err) => console.error("Connection error", err));

/**
 * Models & Schemas
 */
const commentsSchema = new mongoose.Schema({
  name: String,
});
const commentsModel = mongoose.model("comments", commentsSchema);

const postsSchema = new mongoose.Schema({
  name: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
});
const postsModel = mongoose.model("posts", postsSchema);

/**
 * Controllers
 */
const createPost = (data) => {
  return postsModel
    .create(data)
    .then((result) => {
      console.log("Post Created.");
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
const createComment = (post_id, data) => {
  console.log("Create Comment Function", data);
  return commentsModel
    .create(data)
    .then((result) => {
      console.log("Comment Created.");
      return postsModel.findByIdAndUpdate(
        post_id,
        { $push: { comments: result._id } },
        { new: true }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * API Calls
 */
const run = async () => {
  var post = await createPost({
    name: "Post 1",
  });
  console.log(post);

  var comment = await createComment(post._id, {
    name: "Comment 1",
  });
  console.log(comment);

  var comment = await createComment(post._id, {
    name: "Comment 2",
  });
  console.log(comment);
};

/**
 * run() function is just for inserting data into the database
 * so we can able to execute find method to get data after commented it.
 */
//run();

/**
 * GET API
 */
app.get("/get", async (req, res) => {
  const result = await postsModel.find().populate("comments", "-_id");
  console.log(result);
  res.send(result);
});
app.listen(5000);

```
- Output:
```
[
    {
        "_id": "6448a9bf79e246e6cf877ede",
        "name": "Post 1",
        "comments": [
            {
                "name": "Comment 1"
            },
            {
                "name": "Comment 2"
            }
        ],
        "__v": 0
    }
]
```


## 48) Mongoose with NodeJs/ExpressJs - Relationship - Many to Many
- mongoose_relationship_many_to_many.js
```
/**
 * Set ExpressJs
 */
const express = require("express");
const app = express();
app.use(express.json());

/**
 * Mongoose Connection
 */
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/relationships")
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch((err) => console.error("Connection error", err));

/**
 * Models & Schemas
 */
const tagsSchema = new mongoose.Schema({
  name: String,
  products: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }
  ]
});
const tagsModel = mongoose.model("tags", tagsSchema);

const productsSchema = new mongoose.Schema({
  name: String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tags",
    },
  ],
});
const productsModel = mongoose.model("products", productsSchema);

/**
 * Controllers
 */
const createProduct = (data) => {
  return productsModel
    .create(data)
    .then((result) => {
      console.log("Product Created.");
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
const createTag = (data) => {
  return tagsModel
    .create(data)
    .then((result) => {
      console.log("Tag Created.");
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const addTagToProduct = (prod_id, data) => {
    console.log("Add Tag To Post Function",data);
    return productsModel
    .findByIdAndUpdate(
        prod_id,
        { $push: { tags: data._id } },
        { new: true }
    )
    .then((result) => {
      console.log(`Tag Added to Product id ${prod_id}`);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const addProductToTag = (tag_id, data) => {
    console.log("Add Product To Tag Function",data);
    return tagsModel
    .findByIdAndUpdate(
        tag_id,
        { $push: { products: data._id } },
        { new: true }
    )
    .then((result) => {
      console.log(`Product Added to Tag id ${tag_id}`);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};


/**
 * API Calls
 */
const run = async () => {
  var prod1 = await createProduct({
    name: "Product 1",
  });
  console.log(prod1);

  var prod2 = await createProduct({
    name: "Product 2",
  });
  console.log(prod2);

  var tag1 = await createTag({
    name: "Tag 1",
  });
  console.log(tag1);
  
  var tag2 = await createTag({
    name: "Tag 2",
  });
  console.log(tag2);

  const res1 = await addTagToProduct(prod1._id, tag1._id);
  const res2 = await addTagToProduct(prod1._id, tag2._id);
  const res3 = await addProductToTag(tag1._id, prod1._id);
  const res4 = await addProductToTag(tag1._id, prod2._id);

};

/**
 * run() function is just for inserting data into the database
 * so we can able to execute find method to get data after commented it.
 */
run();

/**
 * GET API
 */
app.get("/get-products", async (req, res) => {
  const result = await productsModel.find().populate("tags", "name -_id");
  console.log(result);
  res.send(result);
});
app.get("/get-tags", async (req, res) => {
  const result = await tagsModel.find().populate("products", "name -_id");
  console.log(result);
  res.send(result);
});
app.listen(5000);

```

- Outpus: **Get Products**
```
[
    {
        "_id": "6448c5152836b87a0e460e2c",
        "name": "Product 1",
        "tags": [
            {
                "name": "Tag 1"
            },
            {
                "name": "Tag 2"
            }
        ],
        "__v": 0
    },
    {
        "_id": "6448c5172836b87a0e460e2f",
        "name": "Product 2",
        "tags": [],
        "__v": 0
    }
]
```

- Outpus: **Get Tags**

```
[
    {
        "_id": "6448c5172836b87a0e460e31",
        "name": "Tag 1",
        "products": [
            {
                "name": "Product 1"
            },
            {
                "name": "Product 2"
            }
        ],
        "__v": 0
    },
    {
        "_id": "6448c5172836b87a0e460e33",
        "name": "Tag 2",
        "products": [],
        "__v": 0
    }
]
```


## 49) Mongoose with NodeJs/ExpressJs - 'pre' Hook Middleware
- `pre` hook is a middleware. It is defined on the schema level and can modify the query or the document itself as it executed.
- For example, if we want to run a function everytime `before` we save a document in the DB, we can use a `pre-hook` for that.
- **Syntax**: `Schema.prototype.pre(methodName, options, callback)`
- **Parameters**: It accepts the following parameters as mentioned above and described below:
    - methodName: It denotes the name of the Schema method name, or regex for the method name, to apply the pre middleware to 
    - options: It is an optional mongoose object that contains options.document and options.query.
    - callback: It is a callback function that accepts the parameter next.
- **Return Type**: It returns a Schema object as a response.
- mongoose_pre_hook.js
- In the below example, `save` pre-hook middleware will be executed on saving of the customer data which will replace special character from the name and phone field.
```
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch((err) => console.error("Connection error", err));

/**
 * Models & Schemas
 */
const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
});
customerSchema.pre("save", function (next) {
  const name = this.name;
  this.name = name.replace(/[^a-zA-Z0-9 ]/g, "");

  const phone = this.phone;
  this.phone = phone.replace(/[^0-9]/g, "");
  next();
});
const customersModel = mongoose.model("customers", customerSchema);

/**
 * Controllers
 */
const createCustomer = async (data) => {
  let modelObj = new customersModel(data);
  let customer = await modelObj.save();
  console.log(customer);
};

/**
 * API Calls
 */
const customerData = {
  name: "John @Doe #1",
  phone: "+919876543210",
};
createCustomer(customerData);
```
- Output:
```
{
  "_id": {
    "$oid": "6448eb26047ca7fd79f49a8f"
  },
  "name": "John Doe 1",
  "phone": "919876543210",
  "__v": 0
}
```


## 50) Mongoose with NodeJs/ExpressJs - 'post' Hook Middleware
- `post` hook is a middleware. It is defined on the schema level and can modify the query or the document itself as it executed.
- For example, if we want to run a function everytime `after` we save a document in the DB, we can use a `post-hook` for that.
- **Syntax**: `Schema.prototype.post(methodName, options, callback)`
- mongoose_post_hook.js
- In the below example, `save` post-hook middleware will be executed on saving of the customer data and display the id of a newly created document.
```
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch((err) => console.error("Connection error", err));

/**
 * Models & Schemas
 */
const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
});
customerSchema.post("save", function (doc, next) {
    console.log("--------------");
    console.log("Save POST hook", doc.name);
    console.log("--------------");
    next();
});
const customersModel = mongoose.model("customers", customerSchema);

/**
 * Controllers
*/
const createCustomer = async (data) => {
    let modelObj = new customersModel(data);
    let customer = await modelObj.save();
    console.log("--------------");
    console.log("Create Customer Method", customer);
    console.log("--------------");
};

/**
 * API Calls
 */
const customerData = {
  name: "Jane Doe",
  phone: "+919876543210",
};
createCustomer(customerData);

```
- Output: In below out as we can see, POST Hook is executed just after save method and then after `console.log("Create Customer Method", customer);` run.
```
--------------
Save POST hook Jane Doe
--------------
--------------
Create Customer Method {
  name: 'Jane Doe',
  phone: '+919876543210',
  _id: new ObjectId("644a05349c11511b0404a890"),
  __v: 0
}
--------------
```


## 51) NodeJs/ExpressJs - Upload File API using Multer
- Install `multer` package which is used for uploading file.
- Ref. : https://stackoverflow.com/a/60408823
```
npm i multer
```
- express_js_upload_file_api.js
```
const path = require("path");
const express = require("express");
const multer = require("multer");
const app = express();

const mult_storage = multer.diskStorage({
    destination: function(req, file, call_back) {
        call_back(null, "my_folder")
    },
    filename: function(req, file, call_back) {
        call_back(null, "my-file-" + Date.now() + path.extname(file.originalname))
    }
});

const mult_file_filter = function(req, file, call_back){
    // Allowed ext
    const filetypes = /png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        call_back(null, true);
    } else {
        call_back(null, false);
        return call_back(new Error('Only .png format allowed!'));
    }
};

const upload = multer({
    storage: mult_storage,
    fileFilter: mult_file_filter
}).single("file_field_name");

app.post("/upload-file", upload, (req, res) => {
    res.send("File has been uploaded.");
});

app.listen(5000);
```

## 52) OS Module
- To get host's operating system's info, we can include `os` module
- os_module.js
```
const os = require("os");
console.log(
    "Architecture", "=", os.arch(), "\n",
    "Free RAM", "=", os.freemem()/(1024*1024*1024), "\n",
    "Total RAM", "=", os.totalmem()/(1024*1024*1024), "\n",
    "Host Name", "=", os.hostname(), "\n",
    "Platform", "=", os.platform(), "\n",
    "User Info", "=", os.userInfo(), "\n",
);
```
- Output will be like
```
Architecture = x64 
 Free RAM = 3.539764404296875
 Total RAM = 7.875644683837891
 Host Name = HP-Autobot
 Platform = win32
 User Info = {
  uid: -1,
  gid: -1,
  username: 'HP',
  homedir: 'C:\\Users\\HP',
  shell: null
}
```

## 53) Events module and Event Emitter object
- Node.js has a built-in module, called `events`, where we can create and listen our own events.
- To include the built-in Events module use the require(events) method. 
- All event properties and methods are an instance of an EventEmitter object so to access these properties and methods, we need to create an `EventEmitter` object.
- events_module.js
```
const express = require("express");
const EventEmitter = require("events"); // include "events" module

const app = express();
const event = new EventEmitter(); // create EventEmitter object

var api_call_counter = 0;

// Define/Listen an event
event.on("countAPICalls", (msg) => {
    console.log(msg);
    api_call_counter++;
});


app.get("/create", (req, res) => {
    event.emit("countAPICalls", "Create API called"); // fire event
    res.send("Total API Calls = "+ api_call_counter);
});

app.get("/search", (req, res) => {
    event.emit("countAPICalls", "Search API called"); // fire event
    res.send("Total API Calls = "+ api_call_counter);
});

app.listen(5000);
```

## 54) REPL - Read-Eval-Print-Loop
- REPL stands for `Read` `Eval` `Print` `Loop` and it represents a computer environment like a Windows console or Unix/Linux shell where a command is entered and the system responds with an output in an interactive mode.
- Node.js or Node comes bundled with a REPL environment. 
- The REPL feature of Node is very useful in experimenting with Node.js codes and to debug JavaScript codes.
- It performs the following tasks -
    - `Read`    − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
    - `Eval`    − Takes and evaluates the data structure.
    - `Print`   − Prints the result.
    - `Loop`    − Loops the above command until the user presses ctrl+c twice.
- REPL can be started by simply running node on shell/console without any arguments and You will see the REPL Command prompt > where you can type any Node.js command as follows:
```
C:\Users\HP>node
Welcome to Node.js v14.17.6.
Type ".help" for more information.
>
```

## 55) MySQL with Node Js: MySQL package installation and Database Connection
- Install package from https://www.npmjs.com/package/mysql
```
npm i mysql
```
- connect_db_mysql.js
```
// Include MySQL package
const mysql = require("mysql");

//Create connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejstest"
});

conn.connect((err) => {
    if (err) {
        console.log("Error!!!", err.message);
    } else {
        console.log("Success!!! Database has been connected");
    }
});
```

## 56) MySQL with NodeJs/ExpressJs - Basic APIs - POST/PUT/GET/DELETE APIs
- Make a separate connection file and include it in all other file where required.
- mysql_connection.js
```
// Include MySQL package
const mysql = require("mysql");

//Create connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejstest"
});

conn.connect((err) => {
    if (err) {
        console.log("Error!!!", err.message);
    } else {
        console.log("Success!!! Database has been connected");
    }
});

module.exports = conn;
```
- mysql_api_basic_apis.js
```
const express = require("express");
const conn = require("./mysql_connection");

const app = express();

app.use(express.json());

// GET API
app.get("/", (req, res) => {
    const query = "SELECT * FROM users";
    conn.query(query, (err, result) => {
        if (err) {
            res.send("Error!!! " + err.message);
        } else {
            res.send(result);
        }
    });
});

// POST API
app.post("/create-user", (req, res) => {
    const data = req.body;
    const query = "INSERT INTO users SET ?";
    conn.query(query, data, (err, result, fields) => {
        if (err) {
            res.send("Error!!! " + err.message);
        } else {
            res.send(result);
            /**
             * Result:
             * {
                    "fieldCount": 0,
                    "affectedRows": 1,
                    "insertId": 6,
                    "serverStatus": 2,
                    "warningCount": 0,
                    "message": "",
                    "protocol41": true,
                    "changedRows": 0
                }
             */
        }
    });
});

// PUT API
app.put("/update-user/:id", (req, res) => {
    /**
     * Here first in the query, first param is 'name', second is 'email' and so... 
     * 'id' is fourth param
     * So we will set data array as per this order only.
    */
    const data = [req.body.name, req.body.email, req.body.phone, req.params.id];

    const query = "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?";
    conn.query(query, data, (err, result, fields) => {
        if (err) {
            res.send("Error!!! " + err.message);
        } else {
            res.send(result);
            /**
             * Result:
                {
                    "fieldCount": 0,
                    "affectedRows": 1,
                    "insertId": 0,
                    "serverStatus": 2,
                    "warningCount": 0,
                    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
                    "protocol41": true,
                    "changedRows": 1
                }
            */
        }
    });
});

// DELETE API
app.delete("/delete-user/:id", (req, res) => {
    const data = req.params.id;
    const query = "DELETE FROM users WHERE id = ?";
    conn.query(query, data, (err, result, fields) => {
        if (err) {
            res.send("Error!!! " + err.message);
        } else {
            res.send(result);
            /**
             * Result:
                {
                    "fieldCount": 0,
                    "affectedRows": 1,
                    "insertId": 0,
                    "serverStatus": 2,
                    "warningCount": 0,
                    "message": "",
                    "protocol41": true,
                    "changedRows": 0
                }
            */
        }
    });
});

app.listen(5000);
```

## 57) MySQL with NodeJs - Create Database
- mysql_create_database.js
```
// Include MySQL package
const mysql = require("mysql");

//Create connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

conn.connect((err) => {
    if (err) {
        console.log("Connection Error!!!", err.message);
    } else {
        conn.query("CREATE DATABASE testnewdb", (err, result) => {
            if (err) {
                console.log("Database Creation Error!!!", err.message);
            } else {
                console.log("Success!!! Database has been created.", result);
                /**
                 * Result:
                 * OkPacket {
                    fieldCount: 0,
                    affectedRows: 1,
                    insertId: 0,
                    serverStatus: 2,
                    warningCount: 0,
                    message: '',
                    protocol41: true,
                    changedRows: 0
                    }
                 */
            }
        });
    }
});
```

## 58) MySQL with NodeJs - Create Table
- mysql_create_table.js
```
// Include MySQL package
const mysql = require("mysql");

//Create connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testnewdb"
});

conn.connect((err) => {
    if (err) {
        console.log("Connection Error!!!", err.message);
    } else {
        const query = "CREATE TABLE users ( id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, email varchar(255) NOT NULL, phone varchar(20) NOT NULL )";
        conn.query(query, (err, result) => {
            if (err) {
                console.log("Database Creation Error!!!", err.message);
            } else {
                console.log("Success!!! Database has been created.", result);
                /**
                 * Result:
                 * OkPacket {
                    fieldCount: 0,
                    affectedRows: 0,
                    insertId: 0,
                    serverStatus: 2,
                    warningCount: 0,
                    message: '',
                    protocol41: true,
                    changedRows: 0
                    }
                 */
            }
        });
    }
});
```

## 59) PostgreSQL with Node Js: PostgreSQL package installation and Database Connection
- - Install node-postgres package from https://www.npmjs.com/package/pg
```
npm i pg
```
- connect_db_postgresql.js
```
const Pool = require("pg").Pool;
const conn = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'blog'
});

conn.connect((err) => {
    if (err) {
        console.log("Error!!!", err.message);
    } else {
        console.log("Success!!! Database has been connected");
    }
});
```

## 60) PostgreSQL with NodeJs/ExpressJs - Basic APIs - POST/PUT/GET/DELETE APIs
- Make a separate connection file and include it in all other file where required.
- postgresql_connection.js
```
const Pool = require("pg").Pool;
const conn = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'blog'
});

conn.connect((err) => {
    if (err) {
        console.log("Error!!!", err.message);
    } else {
        console.log("Success!!! Database has been connected");
    }
});

module.exports = conn;
```
- postgresql_api_basic_apis.js
```
const express = require("express");
const conn = require("./postgresql_connection");

const app = express();

app.use(express.json());

// GET API
app.get('/', (req, res) => {
    const query = "SELECT * FROM users";
    conn.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Error!!! " + err.message);
        } else {
            console.log(result.rowCount);
            res.status(200).send(result.rows);
        }
    });
});

// POST API
app.post('/create-user', (req, res) => {
    const data = [req.body.name, req.body.email, req.body.phone];
    //const { name, email, phone } = req.body;
    //const data = [name, email, phone];
    
    const query = "INSERT INTO users (name, email, phone) VALUES ($1, $2, $3)";
    conn.query(query, data, (err, result, fields) => {
        if (err) {
            res.status(500).send("Error!!! " + err.message);
        } else {
            res.status(200).send(result);
        }
    });
});

// PUT API
app.put("/update-user/:id", (req, res) => {
    /**
     * Here first in the query, first param is 'name', second is 'email' and so... 
     * 'id' is fourth param
     * So we will set data array as per this order only.
    */
    const data = [req.body.name, req.body.email, req.body.phone, req.params.id];

    const query = "UPDATE users SET name = $1, email = $2, phone = $3 WHERE id = $4";
    conn.query(query, data, (err, result, fields) => {
        if (err) {
            res.status(500).send("Error!!! " + err.message);
        } else {
            res.status(200).send(result);
        }
    });
});

// DELETE API
app.delete("/delete-user/:id", (req, res) => {
    const data = [req.params.id];
    const query = "DELETE FROM users WHERE id = $1";
    conn.query(query, data, (err, result, fields) => {
        if (err) {
            res.status(500).send("Error!!! " + err.message);
        } else {
            res.status(200).send(result);
        }
    });
});

app.listen(5000);
```

## 61) JSON Web Token (JWT) Authentication using Node Js / Express Js
- `JSON Web Token` is an open standard for securely transferring data within parties using a JSON object.
- JWT is used for `stateless authentication mechanism` for users and providers, this means maintaining session is on the client-side instead of storing sessions on the server.
- Install jsonwebtoken package from https://www.npmjs.com/package/jsonwebtoken
```
npm i jsonwebtoken
```
- express_js_jwt_auth.js
```
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const TOKEN_SECRET_KEY = "my_secret_key";

// Authentication of token
var authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(" ")[1];
    if (authHeader !== 'undefined') {
        jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {
            if (err) {
                res.status(498).send({
                    message: "Invalid token."
                });
            } else {
                req.user = user;
            }
        });
    } else {
        res.status(498).send({
            message: "Invalid token."
        });
    }
    next();
}

// Login API
app.post("/login", (req, res) => {

    // Get User Data
    const user = {
        id: 1,
        name: "Ravi Patel",
        email: "ravi@test.com"
    }

    //Generate Token and return it in response to client
    jwt.sign({ user }, TOKEN_SECRET_KEY, { expiresIn: '300s' }, (err, token) => {
            if (err) {
                res.status(500).send({
                    message: "Something went wrong."
                });
            } else {
                res.status(200).send({
                    token: token
                });
            }
        }
    );
});

// Profile API
app.post("/profile", authenticateToken, (req, res) => {
    res.status(200).send({
        data: req.user
    });

    // Output:
    /**
     * {
            "data": {
                "user": {
                    "id": 1,
                    "name": "Ravi Patel",
                    "email": "ravi@test.com"
                },
                "iat": 1677161172,
                "exp": 1677161472
            }
        }
     */
});

app.listen(5000);
```

## 62) Passport Js Authentication using Node Js / Express Js
- The Passport JS framework, consists of 2 separate libraries:
    - `Passport JS` library: 
        - It is primary library and always required.
        - It is used to maintain session information for authenticated users.
        - The `session management` will be done by Passport JS.
    - `Strategy` library: 
        - It is dependent on the methodology we use to authenticate a user eg. "local, "facebook", "google" etc.
        - `passport-local` library used to authenticate username and password stored in the database
        - For 3rd party authentication we can use `passport-oauth-google` or `passport-facebook` etc.
- Install passport library from https://www.npmjs.com/package/passport
```
npm i passport
```
- To use passport, we need to install `express-session` library from https://www.npmjs.com/package/express-session
```
npm i express-session
``` 
- Install passport-local library (Local Stretagy) from https://www.npmjs.com/package/passport-local
```
npm i passport-local
```
- login.ejs
```
<form action="/login-process" method="POST">
    Username: <input type="text" name="username">
    <br><br>
    Password: <input type="password" name="password">
    <br><br>
    <button type="submit"> Submit </button>
</form>
```
- dashboard.ejs
```
<h1>Welcome, <%= userData.name %> <small>(<%= userData.email %> / <%= userData.phone %>)</small></h1>
```
- express_js_passport_auth.js
```
const express       = require("express");
const passport      = require("passport");
const session       = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.use(express.urlencoded({extended: false}));

// Set template engine as "EJS"
app.set("view engine", "ejs");

//// Set Middleware

// Init express session
app.use(session({
    secret: "my_secret",
    resave: false,
    saveUninitialized: true,
}));

// Init passport on every API call
app.use(passport.initialize());

// Allow passport to use express session
app.use(passport.session());

//// Set Middleware

// Define authentication strategy - In this example, we will use Local Stretagy
passport.use(new LocalStrategy ((user, password, done) => {
    // passport will populate, user = req.body.username
    // passport will popuplate, password = req.body.password
    console.log("Username: ", user, "Password: ", password);

    /**
     * DB query code goes here
     * Search the email, password in the DB to authenticate the user
     */
    let authenticated_user = { 
        id: 1, 
        name: 'Ravi Patel', 
        email: 'ravi@test.com', 
        phone: '1231234569' 
    }

    /**
     * 1) If the user not found or password does not match in DB, -> done (null, false);
     * 2) If user found in DB, -> done (null, {authenticated_user});
     */
    return done(null, authenticated_user); // done(<err>, <user>)
}));

// Serialize User
passport.serializeUser((userObj, done) => {
    /**
     * In serialization of user process,
     * "express-session" creates a "req.session" obj, when it's invoked via app.use(session())
     * "passport" then adds an additional object "req.session.passport" to this "req.session"
     * All the serializeUser() function does is, receives the "authenticated user" object 
     * from the "Strategy" framework, and 
     * attach the authenticated user to "req.session.passport.user.{..}"
     */
    done(null, userObj);
});

// De-Serialize User
passport.deserializeUser((userObj, done) => {
    /**
     * In de-serialization of user process,
     * When the done (null, user) function is called in the deserializeUser(), 
     * Passport JS takes this last object attached to "req.session.passport.user.{..}", 
     * and attaches it to "req.user" i.e "req.user.{..}"
     */
    done(null, userObj);
});

checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { 
        return next();
    }
    res.redirect("/login");
}

checkLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/dashboard");
    }
    next();
}

app.get("/login", checkLoggedIn, (req, res) => {
    res.render("login");
});

/**
 * The "local" signifies that we are using "local" strategy. 
 * If we are using google or facebook to authenticate, 
 * it would say "google" or "facebook" instead of "local".
 */
app.post("/login-process", passport.authenticate('local', {
   successRedirect: "/dashboard",
   failureRedirect: "/login"
}));

app.get("/dashboard", checkAuthenticated, (req, res) => {
    const userData =  {
        name: req.user.name,
        email: req.user.email,
        phone: req.user.phone,
    };
    res.render("dashboard", {userData});
});

app.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            next(err);
        }
        res.redirect("/login");
    });
});

app.listen(5000);
```

## 63) Argument Parsing with Yargs in Node Js
- Yargs can be used to make it easier to work with complex command line arguments
- Install Yargs package from https://www.npmjs.com/package/yargs
```
npm i yargs
```

- argument_parsing_with_yargs.js
```
const yargs = require('yargs');
yargs.version('1.0.0');
yargs.command({
    command: "add",
    describe: "Add a static note text!",
    handler: () => {
        console.log("Hello World!");
    }
});
console.log(yargs.argv);
```

- `Adding Command Options`: Options are additional pieces of information passed along with the command. We can set
up options for a command using the `builder` property. Options can be with `--` i.e. `--OptionName=""` with command.
```
const yargs = require('yargs');
yargs.version('1.0.0');
yargs.command({
    command: "add2",
    describe: "Add a dynamic note text from commands options!",
    builder: {
        title: { // Option Name
            describe: "Title of a note!",
            demandOption: true, // True means option is required to pass with the command
            type: String // Type of option
        },
        body: { // Option Name
            describe: "Body of a note!",
            demandOption: false, // false means option is not required to pass with the command
            type: String // Type of option
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
});
console.log(yargs.argv);
```
- Run below command to execute above code:
```
node argument_parsing_with_yargs.js add2 --title="This is title" --body="This is body"
```
- Output
```
Title: This is title
Body: This is body
{
  _: [ 'add2' ],
  title: 'This is title',
  body: 'This is body',
  '$0': 'argument_parsing_with_yargs.js'
}
```

## 64) Storing Data with JSON in Node Js
- JSON, which stands for `JavaScript Object Notation`, is a lightweight data format. 
- JSON makes it easy to store or transfer data.
- Since JSON is nothing more than a string, it can be used to store data in a text file or transfer data via an HTTP requests between two machines.
- JavaScript provides two methods for working with JSON. The first is `JSON.stringify` and the second is `JSON.parse`
- `JSON.stringify`: Converts a JavaScript object into a JSON string.
- `JSON.parse`: Converts a JSON string into a JavaScript object.
- JSON looks similar to a JavaScript object, but there are some differences.
- The most obvious is that all properties are wrapped in `double-quotes`. **Single-quotes can't be used here, as JSON only supports `double-quotes`**.
- storing_data_with_json.js
```
const book = {
    title: 'The NodeJS Tutorial',
    author: 'Ravi Patel'
   }
// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON); // Print: {"title":"The NodeJS Tutorial","author":"Ravi Patel"}

// Covert JSON string into object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject.title); // Print: The NodeJS Tutorial
```

## 65) ES6 Arrow Functions and 'this' Binding
- Arrow functions offer up an alternative syntax from the standard ES5 function. While the syntax is obviously different, we still have the two important pieces, `an arguments list` and `a function body`.
- Arrow functions have an optional shorthand syntax. This is useful **when we have a function that immediately returns a value**.
- es6_arrow_function.js
```
/**
 * ES5 Function
 */
const square1 = function (x) {
    return x * x
}
console.log(square1(2)); // Output: 4


/** 
 * ES6 Standard Arrow Function
 */
const square2 = (x) => {
    return x * x
}
console.log(square2(2)); // Output: 4


/**
 * ES6 Shorthand Arrow Function
 */
const square3 = (x) => x * x

console.log(square3(2)); // Output: 4Function
const square3 = (x) => x * x

```
- `this Binding`: Arrow functions don't bind their own this value. Instead, the this value of the scope in which it was defined is accessible. This makes arrow functions bad candidates for methods, as this won't be a reference to the object the method is defined on.
```
/**
 * 'this' Binding
 */
const eventData = {
    name: 'Birthday Party',
    guestList: ['John', 'Sam', 'Adam'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        });
    }
}
eventData.printGuestList();
/** 
 * Output:
 *      Guest list for Birthday Party
 *      John is attending Birthday Party
 *      Sam is attending Birthday Party
 *      Adam is attending Birthday Party
*/
```

## 66) Error Messages in Node Js
- Error messages contain a lot of useful information, but only if we know what we are looking at.
- Below is a complete error message generated when running code having some error.
- Code with error:
```
console.log(new_var); // here 'new_var' is not defined.
```
- Error message:
```
F:\xampp\htdocs\demo\nodejs\es6_arrow_function.js:1
console.log(new_var);
            ^
ReferenceError: new_var is not defined
    at Object.<anonymous> (F:\xampp\htdocs\demo\nodejs\es6_arrow_function.js:1:13)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
```
- The first few lines of the error contain the most useful information as follows:
    - `First line`: It contains a path to the exact script where the error was thrown. It also contains the line number. Using that line, we could tell that the issue is on line 1 of es6_arrow_function.js. "F:\xampp\htdocs\demo\nodejs\es6_arrow_function.js:1"
    - `Second line`: It shows the line of code that caused the error. "console.log(new_var);"
    - `Third line`: It uses the `^` character to point to the specific part of the line that the error came from.
    - `Fourth line`: It is blank.
    - `Fifth line`: It contains the error message from V8. "ReferenceError: new_var is not defined"
- Everything after the fifth line is part of the stack trace. This shows a list of all the functions that were running to get to the point where the program crashed. The top of the stack trace starts with the function which threw the error


## 67) Making HTTP Requests using Node JS library
- Using HTTP requests from Node we can enable our app to communicate with other APIs and servers to do a wide variety of things.
- Everything from fetching real-time weather data to sending text messages to users.
- There are several libraries that make it easy to fire off HTTP requests. Here we will see `axios` library.
- Install axios package from https://www.npmjs.com/package/axios
```
npm i axios
```
- make_http_request.js
```
const axios = require("axios");

// GET request
axios
  .get("https://reqres.in/api/users/2")
  .then((response) => {
    console.log(response.data);
    console.log(response.data.data.email);
  })
  .catch((error) => {
    console.log(error);
  });
```
- Output:
```
{
  data: { 
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  },
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
  }
}
janet.weaver@reqres.in
```

## 68) Making HTTP Requests without using Node JS library
- Node.js provides two core modules for making HTTP requests so we can make HTTP request withour using node package but we have to write more code unlike using node package like `axios`. 
- The `http module` can be used to make http requests and the `https module` can be used to make https requests.
- make_http_request_without_using_library.js
```
const https = require("https");
const url = "https://reqres.in/api/users/2";
const request = https.request(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data = data + chunk.toString();
    });
    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
        console.log(body.data.email);
    });
});
request.on("error", (error) => {
    console.log("An error", error);
});
request.end();
```
- Output:
```
{
  data: { 
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  },
  support: {
    url: 'https://reqres.in/#support-heading',
    text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
  }
}
janet.weaver@reqres.in
```
- **NOTE: Here we can see both with using library like axios and without using library for making HTTP request, OUTPUT is same in both case.**


## 69) ES6 Object Property Shorthand and Destructuring
- `Property shorthand`: It makes easier to define properties when creating a new object. It provides a shortcut for defining a property whose value comes from a variable of the same name. The shorthand allows you to remove the colon and the reference to the variable. When JavaScript sees this, it’ll get the property value from the variable with the same name.
- `Object Destructuring`: It gives us a syntax for pulling properties off of objects and into standalone variables. This is useful when working with the same object properties throughout our code. For example, Instead of writing **user.name** a dozen times, we could destructure the property into a **name** variable.
- es6_object_prop_shorthand_destructuring.js
```
/**
 * Object Property Shorthand
 */

const name = 'John Doe';
const userAge = 30;

// Normal Object
const user1 = {
    name: name,
    age: userAge,
    location: 'New York'
}
console.log(user1); // Output: { name: 'John', age: 27, location: 'Philadelphia' }


// With Shorthand
const user2 = {
    name,
    age: userAge,
    location: 'New York'
}
console.log(user2); // Output: { name: 'John Doe', age: 30, location: 'New York' }


// Object Destructuring
const { age, location:address } = user1;
console.log(age); // Output: 30
console.log(address); // Output: New York

// Function Arguments Destructuring
const getUserDetail = ({ name, age }) => {
    console.log(age); // Output: 30
    console.log(address); // Output: New York
}
getUserDetail(user1);
```


## 70) Avoiding Global Modules in Node Js
- By avoiding use of Global Modules, we ensures that our application installs all the dependencies we need to run. I.e. when we run `npm install`, it should install all the dependencies which we required for our Node Js app.
- For example, we have installed `nodemon` package globally which will restart our app whenever our app code changed. We can create a dev script with the value `nodemon index.js -e js,ejs`. This will start up the dev server anytime we run `npm run dev`.
- The above dev script needs nodemon to be installed. The issue is that nodemon isn't listed as a dependency in package.json. So when we run `npm install && npm run dev`, it will not work as expected as it requires `nodemon` package to be installed.
- To fix this issue, we can uninstall `nodemon` globally.
```
npm uninstall -g nodemon
```
- Now, install it as a local dependency.
```
npm install nodemon
```
- Now, npm install will be able to install all your application dependencies, including `nodemon`.