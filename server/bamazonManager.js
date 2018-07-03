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

// Collect new inventory details
var questions = [
    {
        name: 'product',
        type: 'input',
        message:
            'Please enter the ID of the products to which you would like to add inventory.'
    },
    {
        name: 'units',
        type: 'input',
        message: 'How many units would you like to add?'
    }
];

// Acquire new products details
var prodQuestions = [
    {
        name: 'product',
        type: 'input',
        message: 'Please enter the name of the products that you would like to add.'
    },
    {
        name: 'department',
        type: 'input',
        message: 'Please enter the name of the department for the products.'
    },
    {
        name: 'price',
        type: 'input',
        message: 'Please enter the name of the price of the products.'
    },

    {
        name: 'stock',
        type: 'input',
        message: 'Please enter the amount of the stock for the products.'
    }
];

connection.connect(function (err) {
    if (err) throw err;
    promptMgr();
});

// Main manager interface
function promptMgr() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Products for Sale',
                'View Low Inventory',
                'Add to Inventory',
                'Add a New Product'
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case 'View Products for Sale':
                    viewProduct();
                    break;

                case 'View Low Inventory':
                    viewInventory();
                    break;

                case 'Add to Inventory':
                    addInventory();
                    break;

                case 'Add a New Product':
                    addProduct();
                    break;
            }
        });
}

// View all products in stock
function viewProduct() {
    var query =
        'SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity > 0';
    connection.query(query, function (err, res) {
        console.table(res);
        reset();
    });
}

// View low inventory
function viewInventory() {
    var query =
        'SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity < 5';
    connection.query(query, function (err, res) {
        console.table(res);
        reset();
    });
}

// Collect the products details to update inventory
function addInventory() {
    inquirer.prompt(questions).then(function (answer) {
        addUnits(answer.product, answer.units);
    });
}

// Collect the products details to add
function addProduct() {
    inquirer.prompt(prodQuestions).then(function (answer) {
        addNewProd(answer.product, answer.department, answer.price, answer.stock);
    });
}

// Add additional inventory
function addUnits(product, units) {
    var query =
        'SELECT item_id, product_name, stock_quantity FROM products WHERE item_id = ?';
    connection.query(query, [ product ], function (err, res) {
        if (err) {
            throw err;
        } else {
            var newUnitQty = res[ 0 ].stock_quantity + parseInt(units);
            var prodName = res[ 0 ].product_name;
            var query = 'UPDATE products SET stock_quantity = ? WHERE item_ID = ?';
            connection.query(query, [ newUnitQty, product ], function (err, res) {
                console.log(
                    `You have updated the quantity of ${prodName} to ${newUnitQty} units.`
                );
                reset();
            });
        }
    });
}

// Add a completely new products with details
function addNewProd(product, department, price, stock) {
    var query =
        'INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)';
    connection.query(query, [ product.toLowerCase(), department.toLowerCase(), price, stock ], function (
        err,
        res
    ) {
        if (err) {
            throw err;
        } else {
            console.log(`You have added the ${product} to the inventory database.`);
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
            message: 'Do you want to place another transaction?'
        })
        .then(function (answer) {
            if (answer.reset === true) {
                promptMgr();
            } else {
                console.log('Goodbye.');
                process.exit(0);
            }
        });
}


