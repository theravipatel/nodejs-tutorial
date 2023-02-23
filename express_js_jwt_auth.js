const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const TOKEN_SECRET_KEY = "my_secret_key";

// Authentication of token
var authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(" ")[1];
    if (authHeader !== 'undefined') {
        jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {
            if (err) {
                res.status(498).send({
                    message: "Invalid token."
                });
            } else {
                req.user = user;
            }
        });
    } else {
        res.status(498).send({
            message: "Invalid token."
        });
    }
    next();
}

// Login API
app.post("/login", (req, res) => {

    // Get User Data
    const user = {
        id: 1,
        name: "Ravi Patel",
        email: "ravi@test.com"
    }

    //Generate Token and return it in response to client
    jwt.sign({ user }, TOKEN_SECRET_KEY, { expiresIn: '300s' }, (err, token) => {
            if (err) {
                res.status(500).send({
                    message: "Something went wrong."
                });
            } else {
                res.status(200).send({
                    token: token
                });
            }
        }
    );
});

// Profile API
app.post("/profile", authenticateToken, (req, res) => {
    res.status(200).send({
        data: req.user
    });

    // Output:
    /**
     * {
            "data": {
                "user": {
                    "id": 1,
                    "name": "Ravi Patel",
                    "email": "ravi@test.com"
                },
                "iat": 1677161172,
                "exp": 1677161472
            }
        }
     */
});

app.listen(5000);