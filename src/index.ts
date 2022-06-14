import express from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import mongoose from 'mongoose';
import logger from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import swaggerDoc from './APIDoc';
import routes from './route';


dotenv.config();

mongoose.connect(
  process.env.DATABASE_URL,
);

const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log('Database connection established');
});


const app = express();

app.use(cors());
app.use(logger('dev'));


const port = process.env.PORT || 5050;

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDoc));

app.use('/api', routes);



app.listen(port, () => {
  console.log(`Port is running on port: ${port}`)
})