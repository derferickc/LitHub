var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');

var app = express();

app.use(bodyParser.urlencoded());
app.use(session({secret: '123'}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.set('port', process.env.PORT || 8888);


require('./config/routes.js')(app);

app.listen(app.get('port'), function() {
  	console.log('listening on port: ', app.get('port'));
});
