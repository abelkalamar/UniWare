const express = require('express');
const subjectController = require('../controllers/subject.controller');
const auth = require('../middlewares/authorization');
const userController = require('../controllers/user.controller');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const router = express.Router();
router.use(express.json());

router.get('/subject', auth.authorizeUser, subjectController.getSubjects);

router.post('/subject', auth.authorizeUser, subjectController.postSubjects);

router.get('/subject/search', auth.authorizeUser, subjectController.searchSubjects );

router.post('/subject/file', auth.authorizeUser, upload.single('path'), subjectController.postFiles);

router.get('/subject/file', auth.authorizeUser, subjectController.downloadFiles);

router.post('/register', upload.single('profilePicture'), userController.registerController);

router.post('/login', userController.loginController);

router.post('/subscribe', auth.authorizeUser, userController.subscribeController);

router.get('/usersubjects', auth.authorizeUser, userController.userSubjectsController);

router.get('/users', auth.authorizeUser, userController.allUsersController);

router.get('/auth', auth.authorizeUser, userController.authorizationController);

router.post('/user', auth.authorizeUser, userController.oneUserController);

module.exports = router;
