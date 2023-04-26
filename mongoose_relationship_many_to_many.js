/**
 * Set ExpressJs
 */
const express = require("express");
const app = express();
app.use(express.json());

/**
 * Mongoose Connection
 */
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/relationships")
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch((err) => console.error("Connection error", err));

/**
 * Models & Schemas
 */
const tagsSchema = new mongoose.Schema({
  name: String,
  products: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }
  ]
});
const tagsModel = mongoose.model("tags", tagsSchema);

const productsSchema = new mongoose.Schema({
  name: String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tags",
    },
  ],
});
const productsModel = mongoose.model("products", productsSchema);

/**
 * Controllers
 */
const createProduct = (data) => {
  return productsModel
    .create(data)
    .then((result) => {
      console.log("Product Created.");
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
const createTag = (data) => {
  return tagsModel
    .create(data)
    .then((result) => {
      console.log("Tag Created.");
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const addTagToProduct = (prod_id, data) => {
    console.log("Add Tag To Post Function",data);
    return productsModel
    .findByIdAndUpdate(
        prod_id,
        { $push: { tags: data._id } },
        { new: true }
    )
    .then((result) => {
      console.log(`Tag Added to Product id ${prod_id}`);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const addProductToTag = (tag_id, data) => {
    console.log("Add Product To Tag Function",data);
    return tagsModel
    .findByIdAndUpdate(
        tag_id,
        { $push: { products: data._id } },
        { new: true }
    )
    .then((result) => {
      console.log(`Product Added to Tag id ${tag_id}`);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};


/**
 * API Calls
 */
const run = async () => {
  var prod1 = await createProduct({
    name: "Product 1",
  });
  console.log(prod1);

  var prod2 = await createProduct({
    name: "Product 2",
  });
  console.log(prod2);

  var tag1 = await createTag({
    name: "Tag 1",
  });
  console.log(tag1);
  
  var tag2 = await createTag({
    name: "Tag 2",
  });
  console.log(tag2);

  const res1 = await addTagToProduct(prod1._id, tag1._id);
  const res2 = await addTagToProduct(prod1._id, tag2._id);
  const res3 = await addProductToTag(tag1._id, prod1._id);
  const res4 = await addProductToTag(tag1._id, prod2._id);

};

/**
 * run() function is just for inserting data into the database
 * so we can able to execute find method to get data after commented it.
 */
run();

/**
 * GET API
 */
app.get("/get-products", async (req, res) => {
  const result = await productsModel.find().populate("tags", "name -_id");
  console.log(result);
  res.send(result);
});
app.get("/get-tags", async (req, res) => {
  const result = await tagsModel.find().populate("products", "name -_id");
  console.log(result);
  res.send(result);
});
app.listen(5000);
