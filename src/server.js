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

const app = express(); // instance express.js
const port = process.env.PORT || 8888; // port - in file .env
const hostname = process.env.HOST_NAME;

// ejs - config template engine => render giao điệu and access image/css/is in public
// config static file
configViewEngine(app);

// Khai bao Route
// "/" => /home | /test => /test/home
app.use('/', webRoutes);

// chay server
app.listen(port, hostname, () => {
	console.log(`Example app is listening on port ${port}`);
});
