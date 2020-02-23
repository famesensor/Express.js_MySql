const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

const connection = require('./models/db.connec');
const user = require('./routes/api/user');

// set port number
port = process.env.PORT || 5000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', user);

// set port, listen for requests
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});