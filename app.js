require('dotenv').config();
var express = require('express');
var app = express();

var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/', function (req, res, next) {
	next();
});

htmlController(app);
apiController(app);

app.listen(port);