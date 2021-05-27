module.exports = {
  '/users': {
    post: {
      tags: ['Users'],
      summary: 'Sign up',
      description: 'For register an user send for method POST with params in snake_case.',
      operationId: 'Sign up',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SignUp/request/body'
            }
          }
        }
      },
      responses: {
        201: {
          description: 'Successful register',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SignUp/responses/201'
              }
            }
          }
        },
        400: {
          description: 'Fields do not meet the conditions imposed.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SignUp/responses/400'
              }
            }
          }
        },
        409: {
          description: 'Email registered.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SignUp/responses/409'
              }
            }
          }
        }
      }
    }
  },
  '/users/sessions': {
    post: {
      tags: ['Users'],
      summary: 'Sign in',
      description:
        'Generates a token if the mail is registered in the DB and if the credentials are correct.',
      operationId: 'SignIn',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SignIn/request/body'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'The data is valid and the token is returned correctly.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SignIn/responses/200'
              }
            }
          }
        },
        400: {
          description: 'Fields do not meet the conditions imposed.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SignIn/responses/400'
              }
            }
          }
        },
        401: {
          description:
            'The password does not match the one registered and you do not have permission to log in.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SignIn/responses/401'
              }
            }
          }
        },
        409: {
          description: 'The mail does not exist in the DB and registration is required.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SignIn/responses/409'
              }
            }
          }
        }
      }
    }
  }
};
