const connection = require('../config/database');

const getAllUsers = async () => {
	let [results, fields] = await connection.query('select * from Users');
	return results;
};

const getUserById = async (id) => {
	let [results, fields] = await connection.query(
		'select * from Users where id = ?',
		[id]
	);
	// check if data is empty or not
	let user = results && results.length > 0 ? results[0] : {};

	return user;
};

const updateUserById = async (email, name, city, userId) => {
	let [results, fields] = await connection.query(
		`
		UPDATE Users 
		SET email = ?, name = ?, city = ? 
		WHERE id = ?
		`,
		[email, name, city, userId]
	);
	console.log('Check update by Id:', results);
};

module.exports = {
	getAllUsers,
	getUserById,
	updateUserById,
};
