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