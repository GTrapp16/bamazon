DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

USE bamazon;


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Guitar", "Music", "220", "24");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mouse", "Electronics", "20", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", "1100", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keyboard", "Music", "350", "12");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tennis Racket", "Sports", "150", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mountain Bike", "Sports", "600", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hiking Boots", "Sports", "100", "22");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", "1350", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Glove", "Sports", "40", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo", "Electronics", "300", "40");
