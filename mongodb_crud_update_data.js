var dbConnect = require("./mongodb_connection");

const updateData = async (collection_name, data, where) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.updateOne(where, data);

    console.log(result);

    if (result.acknowledged) {
        console.warn("data is updated")
    }
}

var category_data = { $set: { name: "Test 11", status: "deactive" }};
var category_where = { name: "Test 1" };
updateData("category", category_data, category_where);