import express from 'express';
import otherRoutes from './utils/notFoundRoute';
import user from './user/endpoint';


const app = express();

app.use('/v1/user', user)
app.use('/', otherRoutes);

export default app;