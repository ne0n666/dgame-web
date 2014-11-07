var express = require('express');
var compress = require('compression');
var app = express();

app.use(compress()); 
app.use(express.static(__dirname + '/app'));
var port = process.env.PORT || 8000;
app.listen(port, function(){
	console.log('listening on', port);
});
