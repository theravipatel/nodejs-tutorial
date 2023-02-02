var express = require("express");
var app = express();
var route_level_middleware = require("./express_js_middleware");
var route = express.Router();

route.use(route_level_middleware);

app.get("", (req, res) => {
    res.send("This is Home Page!");
});

route.get("/profile", (req, res) => {
    res.send("This is Profile Page!");
});

app.use("/", route);

app.listen(5000);