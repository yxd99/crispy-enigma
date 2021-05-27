exports.messages = {
  emailRequired: {
    message: [
      {
        message: '"email" is required',
        path: ['email'],
        type: 'any.required',
        context: {
          label: 'email',
          key: 'email'
        }
      }
    ],
    internal_code: 'badRequest'
  },
  passwordRequired: {
    message: [
      {
        message: '"password" is required',
        path: ['password'],
        type: 'any.required',
        context: {
          label: 'password',
          key: 'password'
        }
      }
    ],
    internal_code: 'badRequest'
  },
  limitNegative: {
    message: [
      {
        message: '"limit" must be a positive number',
        path: ['limit'],
        type: 'number.positive',
        context: {
          label: 'limit',
          value: -2,
          key: 'limit'
        }
      }
    ],
    internal_code: 'badRequest'
  },
  sinceNegative: {
    message: [
      {
        message: '"since" must be a positive number',
        path: ['since'],
        type: 'number.positive',
        context: {
          label: 'since',
          value: -2,
          key: 'since'
        }
      }
    ],
    internal_code: 'badRequest'
  }
};
