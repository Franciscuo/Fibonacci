import { Router } from "express";
import logger from '../config/logger'

const router: Router = Router();

router.use('/', (req, res) => {
    logger.info('Esto es un test');
    res.send('test');
})

export default router;