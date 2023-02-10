const express = require("express");
const dbConnect = require("./mongodb_connection");
const mongodb = require("mongodb");
const app = express();

// 'express.json()' for parsing data from request. Express 4.6+ feature
app.use(express.json());

const deleteData = async (collection_name, where) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.deleteOne(where);

    return result;
}

app.delete("/:id", async (req, res) => {
    let where = { _id: new mongodb.ObjectId(req.params.id) };
    let result = await deleteData("category", where);
    res.send(result);
});

app.listen("5000");