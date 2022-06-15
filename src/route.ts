import express from 'express';
import otherRoutes from './utils/notFoundRoute';
import user from './user/endpoint';
import product from './products/endpoint';
import order from './orders/endpoint';


const app = express();

app.use('/v1/user', user)
app.use('/v1/product', product)
app.use('/v1/order', order)
app.use('/', otherRoutes);

export default app;