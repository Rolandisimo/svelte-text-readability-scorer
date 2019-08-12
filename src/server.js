import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const root = process.env.BASE_URL || "/";

const app = express();

app.use(helmet());

app.use(
  root,
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  sapper.middleware()
);

app.listen(PORT, err => {
  if (err) console.log('error', err);
});
