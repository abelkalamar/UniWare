const Subject = require('../models/subject');
const File = require('../models/file');

const searchSubject = searchItem => Subject.find({name: {$regex:`${searchItem}`}});

const findFile = fileId => File.findById({ _id: fileId })
  .select('_id name path type')
  .exec();

module.exports = {
  searchSubject,
  findFile
}