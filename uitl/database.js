const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  port: 8889,
  database: "node-complete",
});

module.exports = connection.promise();
