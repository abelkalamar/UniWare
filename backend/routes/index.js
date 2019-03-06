const express = require('express');
const subjectController = require('../controllers/subject.controller');
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/authorization');

const router = express.Router();
router.use(express.json());

router.get('/subject', auth.authorizeUser, subjectController.getSubjects),
router.post('/subject', auth.authorizeUser, subjectController.postSubjects),
router.get('/subject/search', auth.authorizeUser, subjectController.searchSubjects )

router.post('/register', userController.registerController);

router.post('/login', userController.loginController);

module.exports = router;
