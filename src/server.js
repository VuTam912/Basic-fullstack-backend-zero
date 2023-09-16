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
const express = require('express'); // library express.js similar import
const path = require('path'); // __dirname
require('dotenv').config(); // to run env
// import express from 'express'; // Library express.js'

const app = express(); // instance express.js
const port = process.env.PORT || 8888; // port - in file .env
const hostname = process.env.HOST_NAME;

//ejs - config template engine => render giao điệu website lên html
app.set('views', path.join(__dirname, 'views')); // folder views (store all render)
app.set('view engine', 'ejs');

// khai bao route => vd: / c=> home
app.get('/', (req, res) => {
	res.send('Hello Express by RYO IT');
});
// more route => localhost:3000/abc
app.get('/abc', (req, res) => {
	res.send('HELLO WORLD by RYO IT');
});

app.get('/ryoit', (req, res) => {
	// res.send('<h1>ABC by RYO IT</h1>');
	res.render('sample.ejs');
});

// chay server
app.listen(port, hostname, () => {
	console.log(`Example app is listening on port ${port}`);
});
