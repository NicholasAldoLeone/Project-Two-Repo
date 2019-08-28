CREATE DATABASE "Prime_Purchase_db";

USE "Prime_Purchase_db";

CREATE TABLE sellers;
(
    seller_id INTEGER NOT NULL AUTO_INCREMENT,
	seller_name VARCHAR(255) NOT NULL,
	PRIMARY KEY (seller_id)
);

CREATE TABLE products (
	id INT AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    product_department VARCHAR(255) NOT NULL,
    product_description TEXT(1000) NOT NULL,
    product_cost INT,
    seller_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(seller_id) REFERENCES sellers(seller_id)
    
);