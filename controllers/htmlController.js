var bodyparser = require('body-parser');

var urlencodedParser = bodyparser.urlencoded({ extended: false });
var jsonParser = bodyparser.json();

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index');
	});
	
};