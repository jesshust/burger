var express = require('express');  
var methodOverride = require('method-override'); 
var bodyParser = require('body-Parser');

var app = express(); 

//static content
app.use(express.static(process.cwd() + '/public')); 

app.use(bodyParser.urlencoded({
	extended: false
}))


//override with POST command
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars'); 
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
})); 
app.set('view engine', 'handlebars'); 

var routes = require('.controllers/burgers_controller.js'); 
app.use('/', routes); 

var port = 3000; 
app.listen(port); 
