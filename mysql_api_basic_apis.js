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