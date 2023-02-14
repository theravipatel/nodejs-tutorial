const mongoose = require("mongoose");

const collection_name = "category";

const categorySchema = new mongoose.Schema({
    name: String,
    status: String
});

const categoryModel = mongoose.model(collection_name, categorySchema, collection_name);

module.exports = categoryModel;