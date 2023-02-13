const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const getData = async (collection_name, collection_schema) => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Model
    const collectionModel = mongoose.model(collection_name, collection_schema, collection_name);

    let result = await collectionModel.find();
    console.log(result);
}

getData("category", categorySchema);