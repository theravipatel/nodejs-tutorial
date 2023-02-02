var express = require("express");
var app = express();

var route_level_middleware = (req, res, next) => {
    if (!req.query.isLogin) {
        res.send("Please login to access pages..! 111");
    } else if (req.query.isLogin != 'true') {
        res.send("Please login to access pages..! 222");
    }
    next(); // <<<--- Don't forgot to add next() function.
}

app.get("", (req, res) => {
    res.send("This is Home Page!");
});

app.get("/profile", route_level_middleware, (req, res) => {
    res.send("This is Profile Page!");
});

app.listen(5000);