// Đường link URL - route và handle Post and get thông qua URL
const express = require('express');
const {
	getHomepage,
	getCreatePage,
	getUpdatePage,
	postCreateUser,
	getApp,
	getRyo_IT,
} = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route',handler)
router.get('/', getHomepage);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);

// Example:
// more route => localhost:3000/abc
router.get('/abc', getApp);
router.get('/ryoit', getRyo_IT);

module.exports = router;
