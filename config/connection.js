var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Rocket13&",
    database: "burger_db"
});

connection.connect (function(err) {
    if (err) {
    console.log("error connecting: " + err.stack);
    return;
}
console.log("connecting as id: " + connection.threadId);
});

module.exports = connection;