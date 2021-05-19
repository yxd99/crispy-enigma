const Joi = require('joi');

const schemaUser = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string()
    .alphanum()
    .min(8)
    .required(),
  email: Joi.string()
    .email({
      multiple: false,
      tlds: {
        allow: ['ar', 'co']
      },
      minDomainSegments: 3,
      maxDomainSegments: 3
    })
    .regex(/^[a-zA-Z0-9_.+-]+@(wolox\.com)\.?(ar|co)$/)
});

module.exports = schemaUser;
