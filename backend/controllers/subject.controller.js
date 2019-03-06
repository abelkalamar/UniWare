const subjectModel = require('../models/subject');
const subjectService = require('../services/subject.services.js')

const getSubjects = (req, res, next) => {
  subjectModel.find()
    .then(subjects => res.status(200).json(subjects))
    .catch(next);
}

const postSubjects = (req, res, next) => {
  const { name, exp } = req.body;
  if (name === '' || exp === 0) {
    return res.status(400).json({
      error: 'Missing header or missing parameter(s)'
    });
  }
  const newSubject = new subjectModel({
    name,
    exp,
  });
  newSubject.save()
    .then((result) => {
      console.log(result);
      res.status(200)
        .json({
          name: result.name,
        });
    })
    .catch(next);
}

const searchSubjects = (req, res, next) => {
  const { subject } = req.query;
  if (subject) {
    models.searchPost(subject)
      .then(response => res.status(200).json(response))
      .catch((err) => {
        res.status(500).json({
          error: 'Internal server error'
        });
      });
  }
});

module.exports = {
  getSubjects,
  postSubjects,
  searchSubjects
}