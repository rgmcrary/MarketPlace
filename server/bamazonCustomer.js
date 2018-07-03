var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('console.table');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'bamazon'
});

var questions = [
  {
    name: 'product',
    type: 'input',
    message: 'Please enter the ID of the products that you would like to buy:'
  },
  {
    name: 'units',
    type: 'input',
    message: 'How many units would you like to buy?'
  }
];

connection.connect(function(err) {
  if (err) throw err;
  tableSearch();
});

// Return items for sale
function tableSearch() {
  var query = 'SELECT item_id, product_name, price FROM products';
  connection.query(query, function(err, res) {
    console.table(res);
    ask();
  });
}

// Item and quantity selection
function ask() {
  inquirer.prompt(questions).then(function(answer) {
    compareInv(answer.product, answer.units);
  });
}

// Compare units requested to inventory available
function compareInv(product, units) {
  var query = 'SELECT * FROM products WHERE item_id = ?';
  connection.query(query, [product], function(err, res) {
    if (units < res[0].stock_quantity) {
      var unitRemainder = res[0].stock_quantity - units;
      var unitSales = res[0].price * units + res[0].product_sales;
      updateTable(product, unitRemainder, unitSales);
    } else {
      console.log('Insufficient quantity available for purchase.');
      reset();
    }
  });
}

// Restart the Manager console
function reset() {
  inquirer
    .prompt({
      name: 'reset',
      type: 'confirm',
      message: 'Do you want to place another order?'
    })
    .then(function(answer) {
      if (answer.reset === true) {
        tableSearch();
      } else {
        console.log('We hope to see you again soon.');
        process.exit(0);
      }
    });
}

// Update inventory quantity in SQL
function updateTable(product, unitRemainder, unitSales) {
  var query =
    'UPDATE products SET stock_quantity = ?, product_sales = ? WHERE item_ID = ?';
  connection.query(query, [unitRemainder, unitSales, product], function(
    err,
    res
  ) {
    if (err) {
      throw err;
    } else {
      console.log(
        `Your order has been place and your total is $${unitSales}. Thank you for your purchase.`
      );
      reset();
    }
  });
}
