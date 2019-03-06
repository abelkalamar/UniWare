require('dotenv').config();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Subject = require('../models/subject');

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

const validatePassword = (inputPwd, hashedDBPwd) => {
  const hashedInputPwd = crypto.pbkdf2Sync(inputPwd, process.env.salt, 100, 512, 'sha512').toString('hex');
  return hashedInputPwd === hashedDBPwd;
};

const postLogin = body => new Promise((resolve, reject) => {
  const { username, password } = body;
  if (username && password) {
    User.findOne({ username })
      .then((user) => {
        if (!user) {
          resolve({
            status: 'error',
            message: `No such user: ${username}!`,
          });
        } else if (user && validatePassword(password, user.password)) {
          const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_KEY,
            { expiresIn: process.env.TOKEN_EXP_TIME });
          resolve({
            status: 'ok',
            token,
          });
        } else {
          resolve({
            status: 'error',
            message: 'Wrong password!',
          });
        }
      })
      .catch(err => reject(err));
  } else {
    const missing = [];
    if (!username) {
      missing.push(' username');
    }
    if (!password) {
      missing.push(' password');
    }
    resolve({
      status: 'error',
      message: `Missing Parameter(s):${missing}!`,
    });
  }
});

const subscribe = (userId, subjectId) => new Promise((resolve, reject) => {
  User.findOneAndUpdate({ _id: userId },
    { $push: { subjects: subjectId } }, { new: true })
    .then(user => {
      if (user) {
        Subject.findOneAndUpdate({ _id: subjectId },
          { $push: { users: userId } }, { new: true })
          .then(subject => resolve(subject))
      }
    })
    .catch(err => reject(err));
});

module.exports = {
  postUser,
  postLogin,
  subscribe,
};
