const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./user');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  exp: {
    type: Number,
    required: true
  },
  users:
  [{ type: Schema.Types.ObjectId,
     ref: 'User' }],
     required: true
});

module.exports = mongoose.model('Subject', schema);
