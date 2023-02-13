const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const insertData = async (collection_name, collection_schema, data) => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Model
    const collectionModel = mongoose.model(collection_name, collection_schema, collection_name);

    let modelObj = new collectionModel(data);
    let result = await modelObj.save();

    console.log(result);
}

var category_data = {
    name: "Test 5",
    status: "active"
}
insertData("category", categorySchema, category_data);