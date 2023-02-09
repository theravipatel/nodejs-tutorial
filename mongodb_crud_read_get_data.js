var dbConnect = require("./mongodb_connection");

/*** Method 1 ***/

dbConnect("posts").then((data) => {
    data.find().toArray().then((data) => {
        console.log(data);
    });
});

/*** Method 2 ***/
const getData = async (collection_name) => {
   let data = await dbConnect(collection_name);
   data = await data.find().toArray();
   console.log(data);
}

getData("category");
getData("posts");