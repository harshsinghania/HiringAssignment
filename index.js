var express = require('express');
var bodyParser = require('body-parser'); 

var dbConnect = require('./DatabaseConfig/dbConnect');
var userRoutes = require('./Routes/userRoutes');
var productRoutes = require('./Routes/productRoutes');
var configuration = require('./config.json')

// Express app creation
var app = express();

// Body parser added to parse the request object.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database Connectivity.
dbConnect.databaseConnection();

// Routes Definition
app.use(userRoutes);
app.use(productRoutes);

// Express port configuration
app.listen(configuration.port, () => {
    console.log("Server started at localhost port:", configuration.port);
})