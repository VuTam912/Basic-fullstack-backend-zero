// Đường link URL - route và handle Post and get thông qua URL
const express = require('express');
const {
	getHomepage,
	getCreatePage,
	getApp,
	getRyo_IT,
	postCreateUser,
} = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route',handler)
router.get('/', getHomepage);
router.get('/create', getCreatePage);
// more route => localhost:3000/abc
router.get('/abc', getApp);
router.get('/ryoit', getRyo_IT);

router.post('/create-user', postCreateUser);

module.exports = router;
