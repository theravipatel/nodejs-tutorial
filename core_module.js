console.log("Console is core global module.");

var fs = require("fs"); // File System (fs) is core non global module.
fs.writeFileSync("file_name.txt","This is file content.");

/**
 * Above code can be write as below to reduce load
 * var fs = require("fs").writeFileSync;
 * fs("file_name.txt","This is file content.");
 */