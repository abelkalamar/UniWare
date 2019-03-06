const express = require('express');

const auth = require('../middlewares/authorization');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', userController.registerController);

router.post('/login', userController.loginController);

router.post('/subscribe', auth.authorizeUser, userController.subscribeController);

router.get('/usersubjects', auth.authorizeUser, userController.userSubjectsController);

router.get('/users', auth.authorizeUser, userController.allUsersController);

router.get('/auth', auth.authorizeUser, userController.authorizationController);

router.post('/user', auth.authorizeUser, userController.oneUserController);

module.exports = router;
