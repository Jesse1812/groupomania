const mysql = require('mysql2');
require('dotenv').config();

const sql = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

sql.getConnection(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connection à la base de donnée réussie !');
});

module.exports = sql;
