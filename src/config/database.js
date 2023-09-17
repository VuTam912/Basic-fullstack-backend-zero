// config connection database - note: ko bao gio de thong tin database o ngoai server.js, phai tac rieng o file khac.

const mysql = require('mysql2');
require('dotenv').config();

// create the connection to database
// import dotenv => lay tham so
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT, // default 3306
	user: process.env.DB_USER, // default: empty
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

// export similar export of reactjs
module.exports = connection;
