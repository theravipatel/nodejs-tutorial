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
const paymentSchema = new mongoose.Schema({
  cardCode: String,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
  },
});

const customersModel = mongoose.model("customers", customerSchema);
const paymentsModel = mongoose.model("payments", paymentSchema);


/**
 * Controllers
 */
const createCustomer = async (data) => {
    let modelObj = new customersModel(data);
    let customer = await modelObj.save();
    return customer;
}
const makePayment = async (data) => {
    let modelObj = new paymentsModel(data);
    let payment = await modelObj.save();
    return payment;
}
const showPayments = async (data) => {
    let result = await paymentsModel.find().populate({ path: "customer", select: "name"});
    console.log(result);
}


/**
 * API Calls
 */
const customerData = {
    "name": "User 1",
    "phone": "9876543210",
};
const customer = createCustomer(customerData);
customer
.then((result) => {
    console.log("New Customer");
    
    const paymentData = {
        "cardCode": Math.floor(Math.random() * 1234),
        "customer": result
    };
    makePayment(paymentData)
    .then((result) => {
        showPayments();        
    })
    .catch((err) => {
        console.log(err);
    });
})
.catch((err) => {
    console.log(err);
});