var dbConnect = require("./mongodb_connection");

const deleteData = async (collection_name, where) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.deleteOne(where);

    console.log(result);

    if (result.acknowledged) {
        console.warn("data is deleted")
    }
}

var category_where = { name: "Test 11" };
deleteData("category", category_where);