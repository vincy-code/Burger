// Set up MySQL connection.
var mysql = require("mysql"); 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Loupgarou17!",
    database: "burgers_db" 
  });
};


// Make connection.
connection.connect();

  // if (err) {
  //   console.error("error connecting: " + err.stack);
  //   return;
  // }
  // console.log("connected as id " + connection.threadId);

// Export connection for our ORM to use.
module.exports = connection;
