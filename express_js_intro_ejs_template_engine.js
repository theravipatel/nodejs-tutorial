var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("", (req, res) => {
    res.render("index");
});

app.get("/profile", (req, res) => {
    var user = {
        name: 'Ravi Patel',
        email: 'ravi@test.com',
        skills: ['PHP', 'Laravel', 'MySQL', 'VueJs', 'NodeJs']
    }
    res.render("profile", {user});
});

app.render('email', function (err, html) {
    if (err) console.log(err);
    console.log(html);
});

app.listen(5000);