require('dotenv').config();
const crypto = require('crypto');
// const jwt = require('jsonwebtoken');
const User = require('../models/user');

const postUser = body => new Promise((resolve, reject) => {
  new User({
    username: body.username,
    password: crypto.pbkdf2Sync(body.password, process.env.salt, 100, 512, 'sha512').toString('hex'),
    profilePicture: body.profilePicture,
  })
    .save((error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
});

module.exports = {
  postUser,
};
