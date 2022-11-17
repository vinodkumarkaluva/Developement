var servernum=1336;
var customers;

  
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mycustomers"
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected5");
    var sql = "SELECT * FROM customers";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("result ",JSON.stringify(result));
      customers=result;
    });
  });

  var http = require('http');
  http.createServer(function (req, res) {
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end(JSON.stringify(customers));
  }).listen(servernum);

  console.log('Server running at http://127.0.0.1:'+servernum); 
  console.log("result ",JSON.stringify(customers));



