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