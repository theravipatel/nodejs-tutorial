var express = require("express");
var path = require("path"); //To access 'public' directory, use 'path' module

var publicPath = path.join(__dirname, "public");
var app = express();

//app.use(express.static(publicPath));
app.get("", (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get("/about-us", (req, res) => {
    res.sendFile(`${publicPath}/about-us.html`);
});

app.get("*", (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);