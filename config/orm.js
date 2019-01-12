var connection =require ("./connection.js");

// var orm = {
//     //use selectAll(), insertOne(), updateOne()
// selectWhere

// }
//var array

var orm = {
    selectAll: function(tableInput, callback) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
        callback(result);
        return (result);
      });
    },

    insertOne: function(table, col, val ) {
        var queryString = "INSERT INTO ?? VALUES ? ";
        connection.query(queryString, [table, col, val], function(err, results) {
            if (err) throw err;
            console.log(results);
        });
    },

    updateOne: function(updateTable, updateCol, val ) {
        var queryString = "UPDATE ?? SET ?? WHERE ??";  //where ??
        connection.query(queryString, [updateTable, updateCol, val], function(err, results) {
            if (err) throw err;
            console.log(results);
        })
    }
}  

 //selectAll(x,y);
 //insertOne();


module.exports = orm;