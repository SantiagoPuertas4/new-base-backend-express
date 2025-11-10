import express from 'express';
import { env } from './config/env';
import health from './routes/health';

const app = express();
app.use(express.json());
app.use(health);

app.listen(env.PORT, () => {
  console.log(`API on http://localhost:${env.PORT}`);
});
