const mysql = require('mysql');
const dbConfig = require('../config/db');

// Create a connection to database
const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

// Start connection
connection.connect((err) => {
    if (err) throw err;
    console.log("Database connect success");
    // if (!!err) {
    //     console.log(err);
    // } else {
    //     console.log('Database connect success!!')
    // }
})

module.exports = connection;