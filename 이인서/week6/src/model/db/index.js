const mysql = require("mysql2/promise");

// connection pool을 형성합니다
const DBPool = mysql.createPool({
  host: process.env.DB_HOST, //127
  port: Number(process.env.DB_PORT), //보통 3306
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

module.exports = DBPool;
