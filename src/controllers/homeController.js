const connection = require('../config/database');
// Controller - process data,render,post,get...
const getHomepage = (req, res) => {
	// xu ly data - process data
	// call modal
	// let users = [];
	// connection.query('SELECT * FROM Users u', function (err, results, fields) {
	// 	users = results;
	// 	console.log('--result= ', results); // results contains rows returned by server
	// 	// console.log('--- check user: ', users);
	// 	res.send(JSON.stringify(users));
	// });

	return res.render('home.ejs');
};

const getApp = (req, res) => {
	// send => not render
	res.send('HELLO WORLD by RYO IT');
};

const getRyo_IT = (req, res) => {
	// res.send('<h1>ABC by RYO IT</h1>');
	res.render('sample.ejs');
};

const postCreateUser = (req, res) => {
	// req => yeu cau
	// Code long:
	// let email = req.body.email;
	// let name = req.body.name;
	// let city = req.body.city;

	// code short: <= should write
	let { email, name, city } = req.body;
	console.log('--res body: ', req.body);

	connection.query(
		`INSERT INTO Users (email,name,city)
		VALUES (?,?,?)`,
		[email, name, city],
		function (err, results) {
			console.log(results);
			res.send('Create User Successfully!!!');
		}
	);
};

// su dung nhieu bien thi su dung cap { }
module.exports = {
	getHomepage,
	getApp,
	getRyo_IT,
	postCreateUser,
};
