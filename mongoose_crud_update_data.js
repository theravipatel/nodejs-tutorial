const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const updateData = async (collection_name, collection_schema, data, where) => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Model
    const collectionModel = mongoose.model(collection_name, collection_schema, collection_name);

    let result = await collectionModel.updateOne(where, data);
    console.log(result);
}

var category_data = {
    status: "deactive"
}
var category_where = { name: "Test 1" };
updateData("category", categorySchema, category_data, category_where);