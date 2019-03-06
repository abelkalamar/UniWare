const express = require('express');

const auth = require('../middlewares/authorization');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', userController.registerController);

router.post('/login', userController.loginController);

router.post('/subscribe', auth.authorizeUser, userController.subscribeController);

module.exports = router;
