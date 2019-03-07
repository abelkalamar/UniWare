const mongoose = require('mongoose');
const subject = require('./subject');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['homework', 'lecture', 'exam'],
    required: true
  },
  subject_id:
  [{ type: Schema.Types.ObjectId,
     ref: subject },
    ],
});

module.exports = mongoose.model('File', schema);
