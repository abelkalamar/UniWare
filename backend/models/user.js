const mongoose = require('mongoose');

const { Schema } = mongoose;
const Subject = require('./subject');

const schema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String
  },
  exp: {
    type: Number,
    required: true,
    default: 0
  },
  level: {
    type: Number,
    required: true,
    default: 1
  },
  subjects:
  [{ type: Schema.Types.ObjectId,
     ref: 'Subject' }],
});

module.exports = mongoose.model('User', schema);