require("./mongoose_connection");

// Set ExpressJs
const express = require("express");
const app = express();
app.use(express.json());

// Include model file
const categoryModel = require("./mongoose_api_category_schema_and_model");

// Search API 
app.get("/search/:keyword", async (req, res) => {
    let result = await categoryModel.find(
        {
            $or: [
                { name: { $regex: req.params.keyword } },
                { status: { $regex: req.params.keyword } }
            ]
        }
    );

    res.send(result);
});

app.listen(5000);