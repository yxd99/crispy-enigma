module.exports = {
  '/users?limit=2&since=0': {
    get: {
      tags: ['Users'],
      summary: 'List users',
      description:
        'A list of DB users is obtained with a limit (default: 5) and indicating it to start (default: 0).',
      operationId: 'GetUsers',
      parameters: [
        {
          name: 'limit',
          in: 'query',
          description: 'Set a limit to list users (DEFAULT: 5)',
          schema: {
            $ref: '#/components/schemas/GetUsers/parameters/limit'
          }
        },
        {
          name: 'since',
          in: 'query',
          description: 'Set a since of list users (DEFAULT: 0)',
          schema: {
            $ref: '#/components/schemas/GetUsers/parameters/since'
          }
        }
      ],
      responses: {
        200: {
          description: 'Get the list users if the status code is equal to 200 (success operation).',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/GetUsers/responses/200'
              }
            }
          }
        },
        400: {
          description: 'Fields do not meet the conditions imposed.',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/GetUsers/responses/400'
              }
            }
          }
        }
      }
    }
  }
};
