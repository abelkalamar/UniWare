const express = require('express');
const subjectController = require('../controllers/subject.controller');

const userController = require('../controllers/user.controller');

const router = express.Router();
router.use(express.json());

router.get('/subject', subjectController.getSubjects),
router.post('/subject', subjectController.postSubjects),
router.get('/subject/search', subjectController.searchSubjects )

router.post('/register', userController.registerController);

router.post('/login', userController.loginController);

module.exports = router;
