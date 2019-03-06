const Subject = require('../models/subject');

const searchSubject = searchItem => Subject.find({name: {$regex:`${searchItem}`}});

module.exports = {
  searchSubject,
}