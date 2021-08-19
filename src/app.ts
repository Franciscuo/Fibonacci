import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';

import authRoutes from './routes/auth'
import expressPino from './middlewares/logger'

const app: Application = express();

app.use(compression());
app.use(cors());
app.use(expressPino());

app.use(authRoutes);

export default app;
