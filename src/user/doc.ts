const user = {
  '/v1/user/register': {
    post: {
      tags: ['User'],
      summary: 'To register user',
      description: 'To register user',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Register user',
          schema: {
            properties: {
              firstName: { type: 'string' },
              phone: { type: 'string' },
              lastName: { type: 'string' },
              profilePhoto: { type: 'string' },
              password: { type: 'string' },
              type: { type: 'string', description: 'it must be one of buyer, seller or logistics' }
            }
          }
        },
      ],
      responses: {
        201: {
          description: 'User was successfully registered',
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    description: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/v1/user/login': {
    post: {
      tags: ['User'],
      summary: 'To Login user',
      description: 'To Login user',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Login',
          schema: {
            properties: {
              phone: { type: 'string' },
              password: { type: 'string' },
            }
          }
        },
      ],
      responses: {
        200: {
          description: 'User was successfully Login',
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    description: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/v1/user/user-info': {
    get: {
      tags: ['User'],
      summary: 'Get user info',
      description: 'Get user info',
      responses: {
        200: {
          description: 'User was successfully retrieved',
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'object',
                properties: {
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  userId: { type: 'string' },
                },
              },
            },
          },
        },
      },
      security:
        [
          {
            Bearer: [],
          },
        ]

    },
  }
};

export default user;
