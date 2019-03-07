const express = require('express');
const subjectController = require('../controllers/subject.controller');
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/authorization');
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

router.get('/subject', auth.authorizeUser, subjectController.getSubjects),
router.post('/subject', auth.authorizeUser, subjectController.postSubjects),
router.get('/subject/search', auth.authorizeUser, subjectController.searchSubjects ),
router.post('/subject/file', auth.authorizeUser, upload.single('path'), subjectController.postFiles),
router.get('/subject/file', auth.authorizeUser, subjectController.downloadFiles),

router.post('/register', userController.registerController);

router.post('/login', userController.loginController);

module.exports = router;
