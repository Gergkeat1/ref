var mysql      = require('mysql');

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
conn.connect(function(err){
if(!err) {
    console.log("Database is connected ... ^ w ^");
} else {
    console.log("Error connecting database ... - w - !!");
}
});

module.exports = conn;