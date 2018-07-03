var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('console.table');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,

  // Your username
  user: 'root',

  // Your password
  password: 'root',
  database: 'bamazon'
});

// Acquire new products details
var deptQuestions = [
  {
    name: 'department',
    type: 'input',
    message: 'Please enter the name of the department you would like to add.'
  },
  {
    name: 'overheadcosts',
    type: 'input',
    message: 'Please enter the overhead cost for the department.'
  }
];

connection.connect(function(err) {
  if (err) throw err;
  promptSup();
});

// Main supervisor interface
function promptSup() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View Product Sales by Department', 'Create New Department']
    })
    .then(function(answer) {
      switch (answer.action) {
        case 'View Product Sales by Department':
          viewDeptSales();
          break;

        case 'Create New Department':
          addDepartment();
          break;
      }
    });
}

// View summarized sales by department
function viewDeptSales() {
  salesByDept();
}

// Collect the department details to add
function addDepartment() {
  inquirer.prompt(deptQuestions).then(function(answer) {
    addNewDept(answer.department, answer.overheadcosts);
  });
}

// Add a completely new department with details
function addNewDept(department, overheadcosts) {
  var query =
    'INSERT INTO departments (department_name, over_head_costs) VALUES (?, ?)';
  connection.query(query, [department.toLowerCase(), overheadcosts], function(
    err,
    res
  ) {
    if (err) {
      throw err;
    } else {
      console.log(
        `You have added the ${department} department to the departments database.`
      );
      reset();
    }
  });
}

// Calculate sales by department
function salesByDept() {
  var query =
    'SELECT departments.department_id, departments.department_name, over_head_costs, SUM(product_sales) AS total_sales, (SUM(product_sales) - over_head_costs) AS total_profit ';
  query +=
    'FROM departments INNER JOIN products ON (departments.department_name = products.department_name) ';
  query += 'GROUP BY departments.department_name';
  connection.query(query, function(err, res) {
    if (err) {
      throw err;
    } else {
      console.table(res);
      reset();
    }
  });
}

// Restart the Supervisor console
function reset() {
  inquirer
    .prompt({
      name: 'reset',
      type: 'confirm',
      message: 'Do you want to place another transaction?'
    })
    .then(function(answer) {
      if (answer.reset === true) {
        promptSup();
      } else {
        console.log('Goodbye.');
        process.exit(0);
      }
    });
}
