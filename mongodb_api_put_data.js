const express = require("express");
const dbConnect = require("./mongodb_connection");
const app = express();

// 'express.json()' for parsing POST data from request. Express 4.6+ feature
app.use(express.json());

const updateData = async (collection_name, data, where) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.updateOne(where, data);

    return result;
}

app.put("/:name", async (req, res) => {
    let where = { name: req.params.name };
    let data = { $set: req.body };
    let result = await updateData("category", data, where);
    res.send(result);
});

app.listen("5000");