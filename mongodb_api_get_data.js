const express = require("express");
const dbConnect = require("./mongodb_connection");
const app = express();

const getData = async (collection_name) => {
    let data = await dbConnect(collection_name);
    data = await data.find().toArray();
    return data;
}

app.get("/", async (req, res) => {
    let category_data = await getData("category");
    res.send(category_data);
});

app.listen("5000");