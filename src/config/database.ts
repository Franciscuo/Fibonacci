import mongoose from 'mongoose';
import logger from './logger';

const { DB_URL } = process.env;

mongoose.connect(`${DB_URL}`, { useNewUrlParser: true })
    .then(() => logger.info('Database is connected'))
    .catch(err => logger.error(err, 'Error conecting db'))
