const connection = require('../config/database');
const {
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
} = require('../services/CRUDService');
// Controller - process data,render,post,get...
const getHomepage = async (req, res) => {
	// xu ly data - process data
	// get data from database
	let results = await getAllUsers();
	console.log('--checks row: ', results);
	// pass data to home.ejs and move home.ejs to handle render data (<%= listUsers %>)
	return res.render('home.ejs', { listUsers: results });
};

const getCreatePage = (req, res) => {
	return res.render('create.ejs');
};

const postCreateUser = async (req, res) => {
	// req = request (yeu cau)
	// Code long:
	// let email = req.body.email;
	// let name = req.body.name;
	// let city = req.body.city;

	// Code short: <= should write
	let { email, name, city } = req.body;

	// connection.query(
	// 	`INSERT INTO Users (email,name,city)
	// 	VALUES (?,?,?)`,
	// 	[email, name, city],
	// 	function (err, results) {
	// 		console.log(results);
	// 		res.send('Create User Successfully!!!');
	// 	}
	// );

	let [results, fields] = await connection.query(
		`INSERT INTO Users (email,name,city)
		VALUES (?,?,?)`,
		[email, name, city]
	);

	console.log('-- check result: ', results);

	res.send('Created user successfully!!');
};

// Update User
const getUpdatePage = async (req, res) => {
	const userId = req.params.id;

	let user = await getUserById(userId);
	// console.log('---check edit result: ', user);

	return res.render('update.ejs', { userEdit: user }); // x <- y
};

const postUpdateUser = async (req, res) => {
	let { email, name, city, userId } = req.body;

	await updateUserById(email, name, city, userId);

	// res.send('Updated user successfully!!');
	// chuyen huong URL home
	res.redirect('/');
};

// Delete a row
const postDeleteUser = async (req, res) => {
	const userId = req.params.id;

	let user = await getUserById(userId);

	res.render('delete.ejs', { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
	// do ko lấy id ở Url mà là name trong input => sử dụng body
	const userId = req.body.userId;

	console.log('check delete ID ', userId);

	await deleteUserById(userId);
	// chuyen toi trang home
	res.redirect('/');
};

// --- Example ---
const getApp = (req, res) => {
	// send => not render
	res.send('HELLO WORLD by RYO IT');
};

const getRyo_IT = (req, res) => {
	// res.send('<h1>ABC by RYO IT</h1>');
	res.render('sample.ejs');
};

// ---

// su dung nhieu bien thi su dung cap { }
module.exports = {
	getHomepage,
	getCreatePage,
	postCreateUser,
	getUpdatePage,
	postUpdateUser,
	postDeleteUser,
	postHandleRemoveUser,
	getApp,
	getRyo_IT,
};
