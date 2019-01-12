var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//router.get("/", function(req, res) {
    //res.redirect("/burgers")
   //res.send(data);

//});

// router.get("/test", function(req, res) {

//    console.log("Hit test!!!!!!")
//    res.send("chill out postman!")
// });

router.get("/", function (req, res) {
    console.log("hitting this route");

    burger.selectAll(function (data) {
       // res.send(data)

        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("api/burger", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (data) {
            res.redirect("/");
            //still dont completely understand why it redirects to same "/"
        });
});


router.put("/api/burger/:id", function (req, res) {
    console.log("the request", req.params.id);
    var condition = "id =" + req.params.id;
    burger.updateOne(
       condition,
     function(data) {
         console.log(data);
        res.redirect("/");
    });
});


module.exports = router;