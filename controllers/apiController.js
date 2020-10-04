
var bodyparser = require('body-parser');
var mysql = require('mysql');

var urlencodedParser = bodyparser.urlencoded({ extended: false });
var jsonParser = bodyparser.json();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected');
});

module.exports = function(app) {
  
	app.get('/reviews', async function(req, res) {
    var sql = "SELECT * FROM reviews ORDER BY id DESC LIMIT 3";
    connection.query(sql, function(err, results, fields) {
      if (err) {
        return console.error(err.message);
      }

      res.json(results);
    });
	});
	
};