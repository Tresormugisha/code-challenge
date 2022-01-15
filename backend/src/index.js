/* eslint-disable import/extensions */
/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', routes);

const PORT = 6000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
