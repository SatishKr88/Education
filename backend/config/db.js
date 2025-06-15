require('dotenv').config(); 
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",      
  user: process.env.DB_USER || "root",           
  password: process.env.DB_PASSWORD,           
  port: process.env.DB_PORT,
  database: process.env.DB_NAME           
});

con.connect((err) => {
  if (err) {
    console.log("Not connected to MySQL!");
    console.error(err);   
    return;
  }
  console.log("Connected to MySQL!");
});

module.exports=con;