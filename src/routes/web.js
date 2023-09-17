const express = require('express');
const router = express.Router();

// khai bao route => vd: / c=> home
router.get('/', (req, res) => {
	res.send('Hello Express by RYO IT');
});
// more route => localhost:3000/abc
router.get('/abc', (req, res) => {
	// send => not render
	res.send('HELLO WORLD by RYO IT');
});

router.get('/ryoit', (req, res) => {
	// res.send('<h1>ABC by RYO IT</h1>');
	res.render('sample.ejs');
});

module.exports = router;
