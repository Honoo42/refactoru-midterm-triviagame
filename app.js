var express = require('express');
var _ = require('underscore');
// var bootstrap = require('twitter-bootstrap');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(7563, function() {
	console.log('Express server listening on port ' + server.address().port);
});
