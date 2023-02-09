// Include mongodb package
var { MongoClient } = require("mongodb");

// Mongodb Localhost URL
var url = "mongodb://localhost:27017";

// Database Name
var db_name = "blog";

// Mongodb client object
var client = new MongoClient(url);

async function dbConnect(collection_name) {
    let result = await client.connect();
    db= result.db(db_name);
    return db.collection(collection_name);
  
}
module.exports= dbConnect;