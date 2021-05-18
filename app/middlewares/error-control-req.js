const { response } = require('express');

const validateErrors = (req, res = response, next) => {
  const { errors } = req;
  if (errors) {
    return res.status(400).json({ errors });
  }
  return next();
};

module.exports = {
  validateErrors
};
