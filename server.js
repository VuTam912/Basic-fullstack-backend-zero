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
const express = require('express'); // library express.js
// import express from 'express'; // Library express.js'

const app = express(); // instance express.js
const port = 3000; // port 3000

app.get('/', (req, res) => {
	res.send('Hello Express');
});

app.listen(port, () => {
	console.log(`Example app is listening on port ${port}`);
});
