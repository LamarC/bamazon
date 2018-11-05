DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE table products (
    id INT(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,4) DEFAULT NULL,
    stock_quantity INT(25) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Echo Dot', 'Electronics', 29.99, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Cards Against Humanity','Toys / Board Games', 25.00, 17);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Nintendo - Switch 32GB Console', 'Electronics', 299.99, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Women Hooded Knit Cardigans' 'Apparel', 41.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Ripped Boyfriend Jeans', 'Apparel', 26.75, 8);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Ceramic Hanging Planter ' 'Home Decor', 22.50, 45);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('15-Piece Non-Stick Cookware Set', 'Kitchen & Dining', 159.99, 3);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Vans U Authentic, Unisex', 'Apparel', 33.95, 84);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('School Backpack Vintage', 'Luggage & Travel Gear', 36.99, 1);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Paula: A Memoir', 'Books & Audibles', 12.95, 26);

