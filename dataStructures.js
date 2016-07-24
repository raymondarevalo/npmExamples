var express = require('express'),
	buckets = require('buckets-js');

var app = express();

app.get('/', function(req, res) {

	var a = new buckets.Queue();
	a.add(1);
	a.add(3);
	a.add(9);



	var passage = "Message ";	

	a.forEach(function (message) {
		passage = passage + message + " ";
	});

	res.send(passage);



});

app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
});