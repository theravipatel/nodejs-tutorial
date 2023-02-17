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

## 46) NodeJs/ExpressJs - Upload File API using Multer
- Install `multer` package which is used for uploading file.
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

## 47) OS Module
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

## 48) Events module and Event Emitter object
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

## 49) REPL - Read-Eval-Print-Loop
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

## 50) MySQL with Node Js: MySQL package installation and Database Connection
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

## 51) MySQL with NodeJs/ExpressJs - Basic APIs - POST/PUT/GET/DELETE APIs
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