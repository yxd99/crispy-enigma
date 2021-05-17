const { response } = require('express');

const postUser = (req, res = response) => {
  res.json({ msg: 'exito!' });
};

module.exports = {
  postUser
};
