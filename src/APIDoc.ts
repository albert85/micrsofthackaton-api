import dotenv from "dotenv";
import user from './user/doc';
import order from './orders/doc';
import product from './products/doc';

dotenv.config();

const doc = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Microsoft hackaton",
    description: "An Application for Microsoft Hackaton",
  },
  host: process.env.BACKEND_URL || "localhost:5050",
  basePath: "/api",
  tags: [
    {
      name: "Users",
      description: "API for users in the system",
    },
  ],
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    ...user,
    ...order,
    ...product
  },
  securityDefinitions: {
    Bearer: {
      type: "apiKey",
      in: "header",
      description: `Add token for authorization using the format Bearer (token)e.g.
        'Bearer eetelteouou1223424nkdnkdgndkg'`,
      name: "authorization",
    },
  },
};

export default doc;