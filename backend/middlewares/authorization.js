require('dotenv').config();
const jwt = require('jsonwebtoken');

const authorizeUser = (req, res, next) => {
  const uniWareToken = req.headers['uniware-token'];
  if (uniWareToken) {
    // const token = uniWareToken.split(' ')[1];
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({ status: 'error', message: 'Invalid token!' });
        return;
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.status(403).json({
      status: 'error',
      message: 'No token provided!',
    });
  }
};

module.exports = {
  authorizeUser,
};
