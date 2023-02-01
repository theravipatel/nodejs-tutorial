var express = require("express");
var app = express();

//Homepage with GET method
app.get("", (req, res) => {
    res.send("This is Home Page! - GET method");
});

//Homepage with POST method
app.post("", (req, res) => {
    res.send("This is Home Page! - POST method");
});

//DELETE method
app.delete("/delete-user", (req, res) => {
    res.send("This is delete user route! - DELETE method");
});

app.get("/about-us", (req, res) => {
    res.send("This is About Us Page!");
});

app.get("/contact-us", (req, res) => {
    res.send("This is Contact Us Page!");
});

//app.listen(5000);
var server = app.listen(5000, () => {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, port);
 });