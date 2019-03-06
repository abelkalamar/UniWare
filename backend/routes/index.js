const express = require('express');
const subjectController = require('../controllers/subject.controller');

const router = express.Router();

router.get('/subject', subjectController.getSubjects),
router.post('/subject', subjectController.postSubjects)

module.exports = router;
