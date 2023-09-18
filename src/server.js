/*-- Node JS -- */
// const http = require('http'); // library node.js

// const hostname = '127.0.0.1'; // localhost
// const port = 3000; // port 0 -> 65535 (max)

// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello World\n My name is Jen');
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

/* -- Express JS -- */
require('dotenv').config(); // to run env
const express = require('express'); // library express.js similar import
const configViewEngine = require('./config/viewEngine'); // import config/view engine
const webRoutes = require('./routes/web'); // import routes

const connection = require('./config/database'); // import connect database

const app = express(); // instance express.js
const port = process.env.PORT || 8888; // port - in file .env
const hostname = process.env.HOST_NAME;

// config req.body => handle input post
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

// ejs - config template engine => render giao điệu and access image/css/is in public
// config static file
configViewEngine(app);

// Khai bao Route
// "/" => /home | /test => /test/home
app.use('/', webRoutes);

// note: import connection database
// // simple query
// connection.query('SELECT * FROM Users u', function (err, results, fields) {
// 	console.log('--result= ', results); // results contains rows returned by server
// 	// console.log('---fields= ', fields); // fields contains extra meta data about results, if available
// });

// chay server
app.listen(port, hostname, () => {
	console.log(`Example app is listening on port ${port}`);
});
