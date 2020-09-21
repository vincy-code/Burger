// Set up MySQL connection.
var mysql = require("mysql"); 
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: "d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "fa4svypra3fxljo2	",
    password: "gmeawz49ybyhrtt0",
    database: "burgers_db" 
  });
};

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
