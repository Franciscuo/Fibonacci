import PinoHttp from 'express-pino-logger';

import pino from '../config/logger';

export default function expressPinoMiddleware(): PinoHttp.HttpLogger {
    return PinoHttp({
        logger: pino,
        serializers: {
            req: (req) => ({ method: req.method, url: req.url }),
            res: (res) => ({ statusCode: res.statusCode }),
          },
    })
}