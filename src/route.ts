import express from 'express';
import otherRoutes from './utils/notFoundRoute';
import user from './user/endpoint';
import product from './products/endpoint';


const app = express();

app.use('/v1/user', user)
app.use('/v1/product', product)
app.use('/', otherRoutes);

export default app;