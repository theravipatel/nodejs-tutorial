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