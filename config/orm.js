var connection =require ("./connection.js");

// var orm = {
//     //use selectAll(), insertOne(), updateOne()
// selectWhere

// }

var orm = {
    selectAll: function(tableInput, callback) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
        callback(result);
      });
    },

    insertOne: function(table, col, val ) {
        var queryString = "SELECT * ";
        connection.query(queryString, [table, col, val], function(err, results) {
            if (err) throw err;
            console.log(results);
        });
    },

    updateOne: function() {
        var queryString = "";
        connection.query(queryString, [], function(err, results) {
            if (err) throw err;
            console.log(results);
        })
    }
}  

 

module.exports = orm;