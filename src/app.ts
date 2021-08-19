import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';

import './config/database';
import authRoutes from './routes/auth';
import logger from './config/logger';
import expressPino from './middlewares/logger';

const app: Application = express();

app.use(compression());
app.use(cors());
app.use(expressPino());

app.use(authRoutes);

process.on('uncaughtException', err => {
    logger.error(`uncaughtException ${err}`);
    process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
    logger.error(`${reason} Unhandled Rejection at Promise ${p}`);
    process.exit(1);
});

export default app;
