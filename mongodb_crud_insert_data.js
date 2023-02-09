var dbConnect = require("./mongodb_connection");

const insertData = async (collection_name, data) => {
    var collection = await dbConnect(collection_name);
    var result = await collection.insertMany(data);

    console.log(result);

    if (result.acknowledged) {
        console.warn("data is inserted")
    }
}

var category_data = [
    { name: "Test 1", status: "active" },
    { name: "Test 2", status: "active" },
    { name: "Test 3", status: "active" }
];
insertData("category", category_data);