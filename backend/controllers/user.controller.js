const userService = require('../services/user.service');

const registerController = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
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
    userService.postUser(req)
      .then((user) => {
        res.status(200).json({
          message: `${user.username} has successfully registered!`,
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

const authorizationController = (req, res) => {
  const { userId } = req.decoded;
  res.status(200).json({ userId });
};

const loginController = (req, res) => {
  userService.postLogin(req.body)
    .then((response) => {
      if (response.status === 'ok') {
        res.status(200).json(response);
      } else if (response.message.includes('Missing')) {
        res.status(400).json(response);
      } else {
        res.status(401).json(response);
      }
    })
    .catch(error => res.status(500).json(error));
};

const subscribeController = (req, res) => {
  const { userId } = req.decoded;
  const { subjectId } = req.body;
  userService.subscribe(userId, subjectId)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(error => res.status(500).json(error));
};

const userSubjectsController = (req, res) => {
  const { userId } = req.decoded;
  userService.getUserSubjects(userId)
    .then((subjects) => {
      res.status(200).json(subjects);
    })
    .catch(error => res.status(500).json(error));
};

const allUsersController = (req, res) => {
  userService.getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(error => res.status(500).json(error));
};

const oneUserController = (req, res) => {
  const { userId } = req.body;
  userService.getUserById(userId)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(error => res.status(500).json(error));
};

module.exports = {
  registerController,
  loginController,
  authorizationController,
  subscribeController,
  userSubjectsController,
  allUsersController,
  oneUserController,
};
