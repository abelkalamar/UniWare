const userService = require('../services/user.service');

const registerController = (req, res) => {
  const { username, password, profilePicture } = req.body;
  if (!username || !password || !profilePicture) {
    res.status(400).json({
      status: 'error',
      message: 'Missing parameters!',
    });
  } else if (password.length < 8) {
    res.status(400).json({
      status: 'error',
      message: 'Password must be at least 8 characters!',
    });
  } else {
    userService.postUser(req.body)
      .then((user) => {
        res.status(200).json({
          message: 'Successfully registered!',
        });
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(409).json({
            status: 'error',
            message: 'Username already taken, please choose an other one.',
          });
        } else {
          res.status(500).json({
            status: 'error',
            message: err,
          });
        }
      });
  }
};

module.exports = {
  registerController,
};
