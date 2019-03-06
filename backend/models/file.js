const mongoose = require('mongoose');
const subject = require('./subject');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  subject_id:
  [{ type: Schema.Types.ObjectId,
     ref: subject },
    ],
});

module.exports = mongoose.model('File', schema);
