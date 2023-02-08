// Include mongodb package
var { MongoClient } = require("mongodb");

// Mongodb Localhost URL
var url = "mongodb://localhost:27017";

// Database Name
var db_name = "blog";

// Mongodb client object
var client = new MongoClient(url);

async function getPostData() {
    //Connect with mongodb
    var conn = await client.connect();
    var db = conn.db(db_name);

    var posts_collection = db.collection("posts");
    var posts_data = await posts_collection.find().toArray();

    console.log(posts_data);
}

getPostData();