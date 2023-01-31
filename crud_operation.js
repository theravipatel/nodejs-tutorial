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