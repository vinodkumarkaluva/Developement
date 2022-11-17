var http = require('http'), 
    mysql = require("mysql"); 

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database_name"
}); 

http.createServer(function (request, response) {
    request.on('end', function () { 
        connection.query('SELECT * FROM table_name', function (error, rows, fields) {            
            console.log('The first field is: ', rows[0].field);
        });
    }); 
}).listen(8001);

console.log("running on localhost:8001");