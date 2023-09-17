// Đường link URL - route
const express = require('express');
const {
	getHomepage,
	getApp,
	getRyo_IT,
} = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route',handler)
router.get('/', getHomepage);
// more route => localhost:3000/abc
router.get('/abc', getApp);
router.get('/ryoit', getRyo_IT);

module.exports = router;
