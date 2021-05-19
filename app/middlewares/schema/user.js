const Joi = require('joi');
const { WOLOX_EMAIL } = require('../../regex');

const schemaUser = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string()
    .alphanum()
    .min(8)
    .required(),
  email: Joi.string()
    .email({
      multiple: false
    })
    .regex(WOLOX_EMAIL)
});

module.exports = schemaUser;
