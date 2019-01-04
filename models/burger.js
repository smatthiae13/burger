// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
     // The variables cols and vals are arrays.
    insertOne: function(cb) {
        orm.insertOne("burgers", table, col, val, function(res) {
            cb(res);
        });
    },

    updateOne: function(cb) {
        orm.updateOne("burgers", function(res) {
            cb(res);
        });
    }
};

module.exports = burger;