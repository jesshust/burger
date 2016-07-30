//setup the code to connect Node to MySQL
var mysql = require('mysql'); 

//port readable for heroku
var PORT: process.env.PORT || 3306; 

var connection = mysql.createConnection({ 
	host: process.env.db_host 'localhost', 
	user: process.env.db_user || 'root', 
	password: process.env.db_pw || ''
	database: process.env.db || 'burgers_db'
}); 

connection.connect(function(err){
	if(err){
		console.error('error connecting: ' + err.stack); 
		return; 
	}

	console.log('connected as id ' + connection.threadId); 
}); 

//export the connection 
module.exports = connection; 