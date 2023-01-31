var fs = require("fs");
var path = require("path");

var myDirPath = path.join(__dirname, "my_folder"); 

// need to create folder maually 
for (var i = 1; i<=5; i++) {
	fs.writeFileSync(`${myDirPath}/my_file_${i}.txt`, "This is my file content");
}