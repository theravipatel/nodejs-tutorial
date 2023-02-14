require("./mongoose_connection");

// Set ExpressJs
const express = require("express");
const app = express();
app.use(express.json());

// Include model file
const categoryModel = require("./mongoose_api_category_schema_and_model");

// POST API
app.post("/create", async (req, res) => {
    let data = req.body;
    let modelObj = new categoryModel(data);
    let result = await modelObj.save();

    res.send(result);
});

// GET API 
app.get("/get", async (req, res) => {
    let result = await categoryModel.find();

    res.send(result);
});


// PUT API - update document using "id" 
app.put("/update/:_id", async (req, res) => {
    let data = req.body;
    let result = await categoryModel.updateOne(
        req.params, //where condition
        { $set: data } // data
    );

    res.send(result);
});

// PUT API - update document using "name" 
app.put("/update/:name", async (req, res) => {
    let data = req.body;
    let result = await categoryModel.updateOne(
        { name: req.params.name }, //where condition
        { $set: data } // data
    );

    res.send(result);
});

// DELETE API - delete document using "id" 
app.delete("/delete/:_id", async (req, res) => {
    let data = req.body;
    let result = await categoryModel.deleteOne(
        req.params, //where condition
    );

    res.send(result);
});

// DELETE API - delete document using "name" 
app.delete("/delete/:name", async (req, res) => {
    let data = req.body;
    let result = await categoryModel.deleteOne(
        { name: req.params.name }, //where condition
    );

    res.send(result);
});

app.listen(5000);