DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NOT NULL,
  product_sales DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bicycle", "sporting goods", 200, 10),
        ("tv", "electronics", 900, 15),
        ("playstation 4", "electronics", 400, 20),
        ("football", "sporting goods", 20, 10),
        ("xbox One", "electronics", 400, 20),
        ("leather jacket", "clothing", 350, 5),
        ("levi's jeans", "clothing", 65, 12),
        ("watch", "jewelry", 375, 8),
        ("diamond Ring", "jewelry", 750, 3),
        ("dr. marten boots", "clothing", 300, 8);


CREATE TABLE departments (
  department_id INT AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(100) NULL,
  over_head_costs DECIMAL(10,2) NULL,
  PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("clothing", 12000),
        ("electronics", 30000),
        ("jewelry", 15000),
        ("sporting goods", 10000);

SELECT * FROM products;
SELECT * FROM departments;
