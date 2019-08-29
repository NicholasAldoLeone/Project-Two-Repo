CREATE DATABASE prime_purchase_db;

USE prime_purchase_db;

CREATE TABLE sellers;
(
    seller_id INTEGER NOT NULL AUTO_INCREMENT,
	seller_name VARCHAR(255) NOT NULL,
    items_quatity INTEGER
	PRIMARY KEY (seller_id)
);

CREATE TABLE products
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	product_department VARCHAR(255) NOT NULL,
	product_cost INTEGER ,
    product_description TEXT (1000) NOT NULL,
	seller_id INTEGER NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (seller_id) REFERENCES seller(id)
);