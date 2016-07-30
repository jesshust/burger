//call the orm functions for burger input
var orm = require('../config/orm.js'); 

var burger = {

	all: function(selectAll){
		orm.all('burgers', function(res){
			selectAll(res); 
		}); 
	}, 

	insert: function(insertOne)
}