var express = require('express');
var http = require('http');
var _ = require('underscore');
var socketio = require ('socket.io');

// var bootstrap = require('twitter-bootstrap');
var port = process.env.PORT || 7563
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
socketio.listen(server).on('connection', function (socket) {

	socket.on('message', function (msg) {

		console.log('Message Received: ', msg);

		socket.broadcast.emit('message', msg);
});
});