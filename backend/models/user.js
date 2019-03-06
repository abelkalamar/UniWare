const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subject',
  }],
  default: [],
  exp: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  }
});

module.exports = mongoose.model('user', user);
