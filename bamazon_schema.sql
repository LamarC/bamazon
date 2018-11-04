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