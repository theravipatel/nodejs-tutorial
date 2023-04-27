const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch((err) => console.error("Connection error", err));

/**
 * Models & Schemas
 */
const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
});
customerSchema.post("save", function (doc, next) {
    console.log("--------------");
    console.log("Save POST hook", doc.name);
    console.log("--------------");
    next();
});
const customersModel = mongoose.model("customers", customerSchema);

/**
 * Controllers
*/
const createCustomer = async (data) => {
    let modelObj = new customersModel(data);
    let customer = await modelObj.save();
    console.log("--------------");
    console.log("Create Customer Method", customer);
    console.log("--------------");
};

/**
 * API Calls
 */
const customerData = {
  name: "Jane Doe",
  phone: "+919876543210",
};
createCustomer(customerData);
