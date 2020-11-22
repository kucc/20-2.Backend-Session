const mysql = require("mysql2/promise"); // mysql2를 비동기로 사용한다

// connection pool을 설정합니다 - mysql server랑 express랑 연결
const DBPool = mysql.createPool({
  host: process.env.DB_HOST, // 127.
  port: Number(process.env.DB_PORT), // 보통 3306
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

module.exports = DBPool;
