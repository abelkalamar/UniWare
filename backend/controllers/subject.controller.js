const subjectModel = require('../models/subject');
const fileModel = require('../models/file');
const subjectService = require('../services/subject.services.js');

const getSubjects = (req, res, next) => {
  subjectModel.find()
    .then(subjects => res.status(200).json(subjects))
    .catch(next);
}

const getAllSubjects = () => {
  subjectModel.find
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

const postFiles = (req, res, next) => {
  const { name, type, subject_id } = req.body;
  const newFile = new fileModel({
    name,
    path: `http://localhost:3000/${req.file.path}`,
    type,
    subject_id
  });
  newFile.save()
    .then((result) => {
      res.status(200).json({
        message: 'Successfully saved'
      });
    })
    .catch(next);
}

const downloadFiles = (req, res, next) => {
  const { fileId } = req.query;
  if (fileId) {
    subjectService.findFile(fileId)
      .then(files =>
        res.status(200).download(`${files.path.substring(22)}`)
      )
      .catch(next);
  }
}

module.exports = {
  getSubjects,
  postSubjects,
  searchSubjects,
  postFiles,
  downloadFiles,
  getAllSubjects
}