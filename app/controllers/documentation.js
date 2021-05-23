const documentation = require('../../documentation');

const jsonSwagger = (req, res) => {
  res.json(documentation);
};

module.exports = {
  jsonSwagger
};
