<<<<<<< HEAD
<<<<<<< HEAD
 INSERT INTO sellers (seller_name) VALUES ('Hunter'),('David'),('Nick')



INSERT INTO products (product_name, product_department, product_cost, product_description, seller_id) VALUES 
('Blender', 'kitchen', '50', 'The ultimate kitchen appliance! This blender can crush, puree, minse, and obviously blend anything you could imagine!', '1'), ('Butchers Block', 'kitchen', '20', 'The greatestt cutting board ever! This cutting board will last you your entire life!', '2'), (('Frying Pan', 'kitchen', '30', 'The frying pan to end all frying pans!', '3'),)


CREATE TABLE products
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	product_department VARCHAR(255) NOT NULL,
	product_cost INTEGER ,
    product_quantity INTEGER NOT NULL,
    product_description TEXT (1000) NOT NULL,
	seller_id INTEGER NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (seller_id) REFERENCES seller(id)
);
=======
INSERT INTO products (product_name, product_department, product_description, product_cost, createdAt, updatedAt) VALUES ("Blender", "Kitchen Appliances", "This is a simple just a simple blender", 20);

INSERT INTO products (product_name, product_department, product_description, product_cost) VALUES ("Lamp", "Furniture", "This lamp is a top quality lamp, able to light up about 20% of any giving room", 30);

INSERT INTO products (product_name, product_department, product_description, product_cost) VALUES ("Chair", "Furniture", "This Chair is so comfortable that not even a fire could wake you up", 100);
>>>>>>> f9043f21bd0628927a3e12b045e8e1a275e87b2b
=======
>>>>>>> 3c5526175efca9937522a5b0fc9d08327a16e968
