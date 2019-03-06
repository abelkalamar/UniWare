const subjectModel = require('../models/subject');
const subjectService = require('../services/subject.services.js')

const getSubjects = (req, res, next) => {
  subjectModel.find()
    .then(subjects => res.status(200).json(subjects))
    .catch(next);
}

const postSubjects = (req, res, next) => {
  const { name, exp } = req.body;
  const newSubject = new subjectModel({
    name,
    exp,
  });
  newSubject.save()
    .then((result) => {
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
    subjectService.searchSubject(subject)
      .then(response => 
      res.status(200).json(response))
      .catch(next);
  }
};

module.exports = {
  getSubjects,
  postSubjects,
  searchSubjects
}