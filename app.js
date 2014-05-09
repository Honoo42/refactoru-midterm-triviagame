var express = require('express');
var _ = require('underscore');
// var bootstrap = require('twitter-bootstrap');

var app = express();
var port = process.env.PORT || 7563
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
