## Bamazon

<br />

This application is an Amazon-like storefront coded with MySQL and Node.js.  It uses 3 different applications that have their own independent functions:


- Customer
- Manager
- Supervisor

<br />
<br />

**Customer Application**

To use the Customer application, the user will first need to enter “node bamazonCustomer” at the application directory terminal prompt. The user will be returned a list of the items available for purchase with their ID number, Name and Price.

<br />

![Screenshot](/demo%20images/bamazonCustomer1.png)

<br />

The user will then be prompted with two messages.

- The first should ask them the ID of the product they would like to buy.
- The second message should ask how many units of the product they would like to buy.

<br />

![Screenshot](/demo%20images/bamazonCustomer2.png)

<br />

If the entered amount of units to purchase is less than the available inventory amount, the SQL database will be updated to reflect the new quantity amount and the user will be returned a successful order statement including a total cost followed by a prompt asking if the user would like to order another item.

<br />

![Screenshot](/demo%20images/bamazonCustomer3.png)

<br />

If the entered amount of units to purchase is more than the available inventory amount, the user will be returned a message stating that there is insufficient inventory available for the transaction and is followed by a prompt asking if the user would like to order another item.

<br />

![Screenshot](/demo%20images/bamazonCustomer4.png)

<br />
<br />

**Manager Application**

To use the Manager application, the user will first need to enter “node bamazonManager” at the application directory terminal prompt.

Running this application will present a list a set of menu options:

- View Products for Sale
- View Low Inventory
- Add to Inventory
- Add a New Product

<br />

![Screenshot](/demo%20images/bamazonManager1.png)

<br />
<br />

**View Products for Sale**

When this is selected, the user will be presented with a list of every available item.

<br />

![Screenshot](/demo%20images/bamazonManager2.png)

<br />
<br />

**View Low Inventory**

When this is selected, the user will be presented a list all items with an inventory count lower than five.

<br />

![Screenshot](/demo%20images/bamazonManager3.png)

<br />
<br />

**Add to Inventory**

When this is selected, the user will be presented with a prompt that will let the user "add more" inventory to any item currently in the store.

<br />

![Screenshot](/demo%20images/bamazonManager4.png)

<br />
<br />

**Add a New Product**

When this is selected, the user will be presented with a prompt to allow the user to add a completely new product to the store.

<br />

![Screenshot](/demo%20images/bamazonManager5.png)

<br />
<br />

**Supervisor Application**

To use the Supervisor application, you will first need to enter “node bamazonSupervisor” at the application directory terminal prompt. 

Running this application will list a set of menu options:

- View Product Sales by Department
- Create New Department

<br />

![Screenshot](/demo%20images/bamazonSupervisor1.png)

<br />
<br />

**View Product Sales by Department**

When this is selected, the user will be displayed a summarized table in their terminal/bash window. The `total_profit` column is calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` and is not stored in any database.

<br />

![Screenshot](/demo%20images/bamazonSupervisor2.png)

<br />
<br />

**Create New Department**

When this is selected, the user will be presented with a prompt to allow the user to add a completely new department to the database.

![Screenshot](/demo%20images/bamazonSupervisor3.png)


## Built With

* JavaScript
* MySQL
* Node.js


## Installing

npm install











































