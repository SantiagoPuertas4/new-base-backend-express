import express from 'express';
import health from './modules/health/health';

const app = express();

app.use(express.json());
app.use(health);

export default app;
