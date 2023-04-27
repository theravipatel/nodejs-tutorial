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
customerSchema.pre("save", function (next) {
  const name = this.name;
  this.name = name.replace(/[^a-zA-Z0-9 ]/g, "");

  const phone = this.phone;
  this.phone = phone.replace(/[^0-9]/g, "");
  next();
});
const customersModel = mongoose.model("customers", customerSchema);

/**
 * Controllers
 */
const createCustomer = async (data) => {
  let modelObj = new customersModel(data);
  let customer = await modelObj.save();
  console.log(customer);
};

/**
 * API Calls
 */
const customerData = {
  name: "John @Doe #1",
  phone: "+919876543210",
};
createCustomer(customerData);
