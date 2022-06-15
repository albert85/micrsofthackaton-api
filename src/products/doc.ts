const product = {
  '/v1/product': {
    post: {
      tags: ['Product'],
      summary: 'To create a product',
      description: 'To create a product',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Request payload for creating product',
          schema: {
            properties: {
              title: { type: 'string' },
              price: { type: 'string' },
              productAvatar: { type: 'string' },
              productName: { type: 'string' },
              sackType: { type: 'string' },
              quantityAvailable: { type: 'number' },
            }
          }
        },
      ],
      responses: {
        201: {
          description: 'Product was successfully created',
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
                    title: { type: 'string' },
                    price: { type: 'string' },
                    productAvatar: { type: 'string' },
                    productName: { type: 'string' },
                    sackType: { type: 'string' },
                    quantityAvailable: { type: 'number' },
                    sellerId: {
                      type: 'string',
                    },
                  },
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
    get: {
      tags: ['Product'],
      summary: 'Get All products',
      description: 'Get All products',
      responses: {
        200: {
          description: 'All Products was successfully retrived',
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
                    title: { type: 'string' },
                    price: { type: 'string' },
                    productAvatar: { type: 'string' },
                    productName: { type: 'string' },
                    sackType: { type: 'string' },
                    quantityAvailable: { type: 'number' },
                    sellerId: {
                      type: 'object',
                      properties: {
                        lastName: { type: 'string' },
                        firstName: { type: 'string' },
                        profilePhoto: { type: 'string' },
                      }
                    },
                  },
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
  },
  '/v1/product/{productId}': {
    get: {
      tags: ['Product'],
      summary: 'Get user info',
      description: 'Get user info',
      parameters: [
        {
          in: 'path',
          name: 'productId',
          type: 'string',
          description: 'Supply product Id'
        }
      ],
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
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: { type: 'string' },
                    price: { type: 'string' },
                    productAvatar: { type: 'string' },
                    productName: { type: 'string' },
                    sackType: { type: 'string' },
                    quantityAvailable: { type: 'number' },
                    sellerId: {
                      type: 'object',
                      properties: {
                        lastName: { type: 'string' },
                        firstName: { type: 'string' },
                        profilePhoto: { type: 'string' },
                      }
                    },
                  },
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

export default product;
