const order = {
  '/v1/order/{productId}': {
    post: {
      tags: ['Order'],
      summary: 'To create a order',
      description: 'To create a order',
      parameters: [
        {
          in: 'path',
          name: 'productId',
          type: 'string',
          description: 'Supply product Id'
        },
        {
          in: 'body',
          name: 'body',
          description: 'Request payload for creating order',
          schema: {
            properties: {
              destination: { type: 'string' },
              qty: { type: 'number' },
              logisticsStatus: { type: 'string' },
            }
          }
        },
      ],
      responses: {
        201: {
          description: 'Order was successfully created',
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
                type: 'object',
                properties: {
                  destination: { type: 'string' },
                  qty: { type: 'number' },
                  logisticsStatus: { type: 'string' },
                  paymentStatus: { type: 'string' },
                  buyerId: {
                    type: 'string',
                  },
                  productId: {
                    type: 'string',
                  },
                }
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
  '/v1/order': {
    get: {
      tags: ['Order'],
      summary: 'Get All Orders',
      description: 'Get All orders',
      responses: {
        200: {
          description: 'All Orders was successfully retrived',
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
  '/v1/order/{orderId}': {
    get: {
      tags: ['Order'],
      summary: 'Get An order details',
      description: 'Get An order details',
      parameters: [
        {
          in: 'path',
          name: 'orderId',
          type: 'string',
          description: 'Supply order Id'
        }
      ],
      responses: {
        200: {
          description: 'Order was successfully retrieved',
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
              data: {
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
      security:
        [
          {
            Bearer: [],
          },
        ]

    },
  }
};

export default order;
