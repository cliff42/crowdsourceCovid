
var bodyParser = require('body-parser');
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json({type: "application/json"});

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

  console.log('Connected to database');
});

module.exports = function(app) {
  
	app.get('/reviews', jsonParser, async function(req, res) {
    console.log(req.body);
    var sql = "SELECT * FROM reviews WHERE restName="+ req.body.restName + " ORDER BY id DESC LIMIT 5";
    connection.query(sql, function(err, results, fields) {
      if (err) {
        return console.error(err.message);
      }

      res.json(results);
    });
  });

  app.post('/reviews', jsonParser, async function(req, res) {
    var sql = "INSERT INTO reviews (restName, name, comment, spaciousness, crowdedness, sanitationAvailability," + 
    " cleanliness, visitorMaskCompliance, staffMaskCompliance) VALUES (" + req.body.restName + "," + req.body.name + "," + 
    req.body.comment + "," + req.body.spaciousness + "," + req.body.crowdedness + "," + req.body.sanitationAvailability + 
    "," + req.body.cleanliness + "," + req.body.visitorMaskCompliance + "," + req.body.staffMaskCompliance + ")";
    
    connection.query(sql, function(err, results, fields) {
      if (err) {
        return console.error(err.message);
      }

      res.json(results);
    });
  });
  
  var request = require('request');
  app.get('/map', async function(req, res) {
    request('https://www.google.com/maps/embed/v1/place?key=AIzaSyCoZWy6kx_-dZvK06BkhverpQZ6nPk4gao&q=Space+Needle,Seattle+WA', function(error, response, body) {
      // console.log(error)
        res.json(body)
    });
  })
	
};