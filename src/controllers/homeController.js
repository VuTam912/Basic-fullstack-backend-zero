// Controller - process data..

const getHomepage = (req, res) => {
	// xu ly data - process data
	// call modal
	res.send('Hello Express by RYO IT!!!!!!!');
};

const getApp = (req, res) => {
	// send => not render
	res.send('HELLO WORLD by RYO IT');
};

const getRyo_IT = (req, res) => {
	// res.send('<h1>ABC by RYO IT</h1>');
	res.render('sample.ejs');
};

// su dung nhieu bien thi su dung cap { }
module.exports = {
	getHomepage,
	getApp,
	getRyo_IT,
};
