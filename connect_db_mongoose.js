const mongoose = require("mongoose");

const init = async () => {
    // Database string
    await mongoose.connect("mongodb://localhost:27017/blog");

    // Schema
    const categorySchema = new mongoose.Schema({
        name: String,
        status: String
    });

    // Model
    const categoryModel = mongoose.model("category", categorySchema, "category");

    // Save Data demo - here 'status' will not save as it is not defined in the 'categorySchema'
    let data = new categoryModel({ name: "Test 8", status: "active" });
    let result = await data.save();

    console.log(result);
}

init();