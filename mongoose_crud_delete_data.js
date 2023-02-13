const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const deleteData = async (collection_name, collection_schema, where) => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Model
    const collectionModel = mongoose.model(collection_name, collection_schema, collection_name);

    let result = await collectionModel.deleteOne(where);
    console.log(result);
}

var category_data = {
    status: "deactive"
}
var category_where = { name: "Test 5" };
deleteData("category", categorySchema, category_where);