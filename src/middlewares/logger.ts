import expressPino from 'express-pino-logger'

import pino from '../config/logger';

export default function expressPinoMiddleware() {
    return expressPino({
        logger: pino,
        serializers: {
            req: (req) => ({ method: req.method, url: req.url }),
            res: (res) => ({ statusCode: res.statusCode }),
          },
    })
}