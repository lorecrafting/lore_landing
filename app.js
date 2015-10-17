var express = require('express');
	http    = require('http');

var app     = express();

//setup environmental variables
app.set('port', process.env.PORT || 3000)


//express exposing public folder to http requests
app.use(express.static(process.cwd() + '/public'))

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});



