// config connection database - note: ko bao gio de thong tin database o ngoai server.js, phai tac rieng o file khac.

const mysql = require('mysql2');
require('dotenv').config();

// create the connection to database
// import dotenv => lay tham so
// const connection = mysql.createConnection({
// 	host: process.env.DB_HOST,
// 	port: process.env.DB_PORT, // default 3306
// 	user: process.env.DB_USER, // default: empty
// 	password: process.env.DB_PASSWORD,
// 	database: process.env.DB_NAME,
// });

// connection pool
const connection = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT, // default 3306
	user: process.env.DB_USER, // default: empty
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

// export similar export of reactjs
module.exports = connection;

/* connection pool 

Khi một ứng dụng cần truy cập cơ sở dữ liệu, nó không tạo kết nối mới mỗi lần,
 mà thay vào đó sử dụng một kết nối từ connection pool nếu có sẵn. Sau khi ứng 
 dụng hoàn thành truy vấn hoặc giao tiếp với cơ sở dữ liệu, nó trả lại kết nối này 
 vào pool thay vì đóng nó. Điều này giúp tiết kiệm thời gian và tài nguyên so với 
 việc tạo và đóng kết nối liên tục.

 */
