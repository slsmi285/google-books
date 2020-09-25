//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const path = require();
const PORT = process.env.PORT || 3001;



// Add routes, both API and view
app.use(routes);

// Connect to Mongoose
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Start Server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});