const express = require("express");
const EventEmitter = require("events"); // include "events" module

const app = express();
const event = new EventEmitter(); // create EventEmitter object

var api_call_counter = 0;

// Define/Listen an event
event.on("countAPICalls", (msg) => {
    console.log(msg);
    api_call_counter++;
});


app.get("/create", (req, res) => {
    event.emit("countAPICalls", "Create API called"); // fire event
    res.send("Total API Calls = "+ api_call_counter);
});

app.get("/search", (req, res) => {
    event.emit("countAPICalls", "Search API called"); // fire event
    res.send("Total API Calls = "+ api_call_counter);
});

app.listen(5000);