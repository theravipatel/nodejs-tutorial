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