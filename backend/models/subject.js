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
    required: true, 
    default: 0
  },
  users:
  [{ type: Schema.Types.ObjectId,
     ref: 'User' },
    ],
});

module.exports = mongoose.model('Subject', schema);
