module.exports = {
  '/users': {
    post: {
      tags: ['Users'],
      summary: 'Sign up',
      description: 'For register an user send for method POST with params in snake_case.',
      operationId: 'SignUp',
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
  }
};
