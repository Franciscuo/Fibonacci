import { Router, Request, Response} from "express";
import logger from '../config/logger'

const router: Router = Router();

router.use('/', (req: Request, res: Response): Response => {
    logger.info('Esto es un test');

    return res.send('test');
})

export default router;