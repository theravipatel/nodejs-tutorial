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