const path = require('path');
const express = require('express'); // library express.js similar import

//để render giao điệu website lên html
const configViewEngine = (app) => {
	app.set('views', path.join('./src', 'views')); // folder views
	app.set('view engine', 'ejs');

	// config static file => public (allow access file in public/image/css/js)
	app.use(express.static(path.join('./src', 'public')));
};

// export
module.exports = configViewEngine;
