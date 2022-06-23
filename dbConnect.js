const mysql = require("mysql2");
const promise = require("mysql2-promise");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'AeA7!7!7!',
    database: 'company_db'
  },
  console.log(`Connected to the employees_db database.`)
);

db.connect(function(err) {
  if (err) throw err;
});

module.exports = db;











