CREATE DATABASE "";

USE "";

CREATE TABLE sellers;
(
    seller_id INTEGER NOT NULL AUTO_INCREMENT,
	seller_name VARCHAR(255) NOT NULL,
	PRIMARY KEY (seller_id)
);

CREATE TABLE products
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	department VARCHAR(255) NOT NULL,
	product_cost INTEGER NOT NULL,
    department TEXT (1000) NOT NULL,
	seller_id INTEGER NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);