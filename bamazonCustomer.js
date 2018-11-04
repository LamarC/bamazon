require('dotenv').config();
const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('cli-table');
const chalk = require('chalk');



const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port:3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'bamazon'
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

