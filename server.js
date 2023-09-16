const http = require('http'); // library node.js

const hostname = '127.0.0.1'; // localhost
const port = 3000; // port 0 -> 65535 (max)

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n My name is Jen');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
