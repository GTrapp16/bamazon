# Bamazon
CLI Amazon-like Application using MySQL Database


## Description

This application uses a command line based interface to provide a storefront to the user.  

The application utilizes javascript, Node.JS, and MySQL and a select group of NPM packages to allow a user to purchase mock items.  The user may view the current and updated inventory stock before and after a purchase.

A manager and executive section will be added in the future where more utilities can be added such as total sales by department and allow the inventory to be refreshed without having to refresh the MySQL database.

### NPM Packages used

* npm i mysql
* npm i inquirer
* npm i colors
* npm i cli-table


### MySQL Database Setup

To run this application the user must first setup the database in MySQL Workbench.  If not, visit the [MySQL installation page](https://dev.mysql.com/doc/workbench/en/wb-installing.html) to install the version you need for your operating system. Once MySQL is installed, the user can create the bamazon database with the sql file. When this code is run in MySql workbench it will create the bamazon table in the database.

### Bamazon Customer Interface

This customer interface lets the user view current inventory, department, cost, name, and id# of all of the items.  It also prompts the user to select the id of the item they wish to purchase.  It then prompts the user to ask how many of the selected item they wish to purchase.  If the user's input depletes the inventory then it will tell the user it is out of stock. After a purchase the user is shown the updated inventory screen and is prompted to make further purchases. If all goes well the user is shown a success message and a calculation of how much they spent.

###Instructions to run in console (after MySQL database and username/password connection is set up in bamazon.js)
* git clone https://github.com/GTrapp16/bamazon.git
* cd bamazon
* npm i mysql
* npm i inquirer
* npm i colors
* npm i cli-table
* node bamazon.js

The program will run and the user will be prompted.  If the user wishes to restart then the lightning bolt can be clicked in MySQL to refresh the database inventory.

###Here is a quick video running through the program.

* https://drive.google.com/open?id=1ss-e2U8AJCeSSzSqxg1E6gw72_K1jtaf

Greg Trapp  [Github](https://github.com/GTrapp16)