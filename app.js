const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

// set port number
port = process.env.PORT || 3000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const myconection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "customer",
    multipleStatements: true
})

myconection.connect((err) => {
    if(!err){
        console.log("Connected");
    }
    else {
        console.log("Fail");
    }

});

// set port, listen for requests
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});