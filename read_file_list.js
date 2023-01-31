var fs = require("fs");
var path = require("path");

var myDirPath = path.join(__dirname, "my_folder");

fs.readdir(myDirPath, (error, files) => {
	console.log(files); // List of file in array
	
    files.forEach((item) => {
        console.log(item); // single file list
    });
});