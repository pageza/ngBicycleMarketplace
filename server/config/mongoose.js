const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Setting a DB name
const DB = 'ngBicycleMarketplace';

// Connecting to MongoDB
mongoose.connect(
    'mongodb://localhost/' + DB,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

// Using path to assign the path to the models into a constant
const models_path = path.join(__dirname + './../models');

// using directory read only sync from 'fs' to pull the models and schemas
fs.readdirSync(models_path).forEach( (file) => {
    if(file.indexOf('.js') >= 0 ) {
        require(models_path + '/' + file)
    }
});