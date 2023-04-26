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
const commentsSchema = new mongoose.Schema({
  name: String,
});
const commentsModel = mongoose.model("comments", commentsSchema);

const postsSchema = new mongoose.Schema({
  name: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
});
const postsModel = mongoose.model("posts", postsSchema);

/**
 * Controllers
 */
const createPost = (data) => {
  return postsModel
    .create(data)
    .then((result) => {
      console.log("Post Created.");
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
const createComment = (post_id, data) => {
  console.log("Create Comment Function", data);
  return commentsModel
    .create(data)
    .then((result) => {
      console.log("Comment Created.");
      return postsModel.findByIdAndUpdate(
        post_id,
        { $push: { comments: result._id } },
        { new: true }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * API Calls
 */
const run = async () => {
  var post = await createPost({
    name: "Post 1",
  });
  console.log(post);

  var comment = await createComment(post._id, {
    name: "Comment 1",
  });
  console.log(comment);

  var comment = await createComment(post._id, {
    name: "Comment 2",
  });
  console.log(comment);
};

/**
 * run() function is just for inserting data into the database
 * so we can able to execute find method to get data after commented it.
 */
//run();

/**
 * GET API
 */
app.get("/get", async (req, res) => {
  const result = await postsModel.find().populate("comments", "-_id");
  console.log(result);
  res.send(result);
});
app.listen(5000);
