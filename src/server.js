import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();

app.use(helmet());
app.use(
  "/svelte-text-readability-scorer",
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
);

app.listen(PORT, err => {
	if (err) console.log('error', err);
});
