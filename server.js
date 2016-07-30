var express = require('express');  
var methodOverride = require('method-override'); 
var bodyParser = require('body-Parser');
var app = express(); 

var PORT = process.env.PORT || 3000; 

var exphbs = require('express-handlebars');


//static content
app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({
	extended: false
})); 


//override with POST command
app.use(methodOverride('_method')); 
 
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
})); 

app.set('view engine', 'handlebars'); 

var routes = require('./controllers/burgers_controller.js'); 
app.use('/', routes); 

 
app.listen(PORT); 
