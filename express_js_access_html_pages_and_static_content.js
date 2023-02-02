var express = require("express");
var path = require("path"); //To access 'public' directory, use 'path' module

var publicPath = path.join(__dirname, "public");
var app = express();

app.use(express.static(publicPath));

app.listen(5000);