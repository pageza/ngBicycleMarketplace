// Import the Express framework
const express = require("express");

// Import mongoose framework
const mongoose = require("mongoose");

// Setting a port for the app to run on
const PORT = 6789;

// Assigning Express to a constant to access the functions therein
const app = express();

// Setting the Express app to use the dist folders for the Angular app
app.use(express.static(__dirname + "/public/dist/public"));

// Enable POST requests for the app
app.use(express.urlencoded({extended: true}));

// Enabling JSON for the responses
app.use(express.json());

// Accessing the Mongoose logic
require('./server/config/mongoose.js');

// Accessing the routes
require('./server/config/routes.js')(app);

// Setting the port on the localhost
app.listen(PORT, () => console.log("Running on port: " + PORT));