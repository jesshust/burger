CREATE DATABASE burgers_db; 

USE burgers_db; 

CREATE TABLE burgers
(

	id int NOT NULL AUTO_INCREMENT, 
	burger_name VARCHAR(250) NOT NULL, 
	devoured BOOLEAN DEFAULT false, 
	date_created TIMESTAMP, 
	PRIMARY KEY (id)
); 