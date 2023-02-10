const express = require("express");
const dbConnect = require("./mongodb_connection");
const app = express();

// 'express.json()' for parsing POST data from request. Express 4.6+ feature
app.use(express.json());

const insertData = async (collection_name, data) => {
    let collection = await dbConnect(collection_name);
    let result = await collection.insertOne(data);
    return result;
}

app.post("/", async (req, res) => {
    let result = await insertData("category", req.body);
    res.send(result);
});

app.listen("5000");