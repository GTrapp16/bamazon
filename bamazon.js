//setting up variables for required npm necessary downloads

var mysql=require("mysql");
var inquirer=require("inquirer");
var Table=require("cli-table");
var colors=require("colors/safe");
//creating connection for sql database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "80469D1l",
    database:"bamazon"
});

//connect to my sql server and sql database
connection.connect(function(err) {
    if(err) throw err;
    //run the start function after the connection is made to intiate the prompts
    start();
});

//creating start function 
function start() {
    //use mysql to select propery queries
    connection.query('SELECT item_id, product_name, price, department_name, stock_quantity From products', function (err, result) {
       //log an error if there is one
        if (err) console.log(err);
// creates table to display data and set styling
        var table= new Table ({
            head: ['Item Id#', 'Product Name', 'Price($)', 'Department', 'Remaining Stock'],
            style: {
                //uses colors npm package for more style in content display
                head: ['red'],
                compact: false,
                coAligns: ['center']
            }
        })
        //loops through all the products in the mysql database
        for (var i=0; i<result.length; i++) {
            table.push (
                [result[i].item_id, result[i].product_name, result[i].price, result[i].department_name, result[i].stock_quantity]
            );
        }

        //displays the table with the data populated 
        console.log(table.toString());
        //initiates the product change function to make any additions or subtractions to products
        productChange();

    });
}
//creates a function to change the number of products
function productChange() {
//calls on inquierer so the user may interact and the prompts come up
    inquirer
        .prompt ([{
            //asks the user which item they want to buy (by id#)
            name: "item",
            type: "input",
            message: "What is the id# of the item you would like to purchase?"
        }, {
            //asks the user how many of the selected item they wish to buy
            name: "quantity",
            type: "input",
            message: "How many would you like?"
        }])
            .then(function(answer) {
                // select user requested information from the table using my sql
                connection.query(
                    'SELECT * FROM products WHERE item_id=?', answer.item,
                    function(err, res) {
                        if (err) throw err;
                        //if none then tell the user it is out
                        if (res[0].stock_quantity < answer.quantity) {
                            console.log("We apologize for the inconvenience but we are temporarily out of stock.")
                            //if out of stock repeats user prompts to start over
                            start();
                        } else {
                            //creates variable for the updated stock quantity after the user selects how many
                            var number =(res[0].stock_quantity-answer.quantity);
                            // creates variable for how many the user wants to buy of each item
                            var cost=(res[0].price * answer.quantity);
                            //update the table in mysql to adjust for how many the user purchased
                            connection.query('UPDATE Products SET stock_quantity=? WHERE item_id=?', [number, answer.item], function(err, results) {
                                if (err) throw err;
                                //run through how much everything was for the user
                                console.log(answer.quantity + " items purchased")
                                console.log(res[0].product_name + " " + res[0].price + "$")
                                console.log("Your total cost is " + cost + "$")
                                console.log("Your transaction has been processed!")
                                start();
                        })
                    }
                }
                );
            });
}