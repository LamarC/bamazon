require('dotenv').config();
const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('cli-table');
const chalk = require('chalk');

const connection = mysql.createConnection({
  host:     'localhost',
  port:     3306,
  username: 'user',
  password: 'password',
  database: 'bamazon'
});

//Establish connetion 
connection.connect(function(err) {
  if (err) throw err;
  console.log(chalk.blue('Welcome to Bamazon database as id ' + connection.threadId));
  connection.end();  

  selectProduct();
});

function selectProduct() {
  connection.query('SELECT * FROM products', function(err, res){
    if (err) throw err;

    //Display table with selected colors
    let table = new Table(
      {
        head:['Product ID'.cyan.bold, 'Product Name', cyan.bold, 'Department Name'.cyan.bold, 'Price'.cyan.bold, 'Quantity'.cyan.bold],
        colWidths: [10, 70, 70, 15, 10],
      });

    //
    for(let i=0; i < res.length; i++) {
      table.push(
        [res(i).id, res(i).product_name, res(i).department_name, parseFloat(res(i).price).toFixed, res(i).stock_quantity]
      );
    }

    console.log(table.toString());

    inquirer.prompt([
      {
        type: 'number',
        message: 'Please enter the Item ID of the product that you would like to purchase.'.green,
        name: 'id'
      },
      {
        type: 'number',
        message: 'How many would you like?'.green,
        name: 'quantity'
      },
    ])

    .then(function (cart) {
      let quantity = cart.quantity;
      let itemID = cart.id;

      connection.query('SELECT * FROM products WHERE id= ' + itemID, function(err, selectedItem){
        if (err) throw err;

        if (quantity <= selectedItem.stock_quantity) {
          console.log('The product selected is in stock'.magenta, 'Order is being placed'.bgMagenta);

          let updateQuantity = 'UPDATE products SET stock_quantity = ' + selectedItem.stock_quantity;

          connection.query('UPDATE products SET stock_quantity=? WHERE id=?', selectedItem.stock_quantity)
        }
      })  

    })




  })
}
