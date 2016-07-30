//setup the code to connect Node to MySQL
var mysql = require('mysql'); 


var connection; 

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
	connection = mysql.createConnection ('burgers_db', 'root', {	 
	host: process.env.db_host || 'localhost', 
	password: process.env.db_pw || '',
	port: '3306'
  })
}  

connection.connect(); 

//export the connection 
module.exports = connection; 