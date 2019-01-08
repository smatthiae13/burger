var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
var bodyParser = require("body-parser");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//data?
//var burgers = [];

//routes
// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers WHERE burger_name = ?", [req.param.burger_name], function(err, result){
//         if (err) throw err;
//         console.log(results);
//     })
// })
var routes = require("./controllers/burger_controllers.js");

// Import routes and give the server access to them.
app.use(routes);

//listening
app.listen(PORT, function(){
    console.log("App now listening on: http://localhost:" + PORT);
});


