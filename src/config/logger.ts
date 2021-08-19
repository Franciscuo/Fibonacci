import pino from "pino";

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    prettyPrint: process.env.LOG_PRETTY_PRINT === 'true'
});

export default logger;
