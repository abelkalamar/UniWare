const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
    default: 0,
  },
  users:
  [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  ],
});

module.exports = mongoose.model('subject', schema);
