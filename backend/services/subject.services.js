const Subject = require('../models/subject');

const searchPost = searchItem => Subject.find({ $text: { $search: searchItem } });