const Joi = require('joi');
const { regex } = require('../../helpers');

const schemaUser = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string()
    .alphanum()
    .min(8)
    .required(),
  email: Joi.string()
    .email({
      multiple: false
    })
    .regex(regex.WOLOX_EMAIL)
    .required()
});

module.exports = schemaUser;
