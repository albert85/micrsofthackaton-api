import express from 'express';
import otherRoutes from './utils/notFoundRoute';


const app = express();

app.use('/v1')
app.use('/', otherRoutes);

export default app;