/**
 * Application main router
 */
import * as express from 'express';

import { StatusRoute } from './Status';
import { TransferTimeRoute } from './TransferTime';
import { TransferTimesByHotelCode } from './TransferTimesByHotelCode';

const router = express.Router();

router.use('/status', new StatusRoute().initRoutes());
router.use('/transferTime', new TransferTimeRoute().initRoutes());
router.use('/transferTimesByHotelCode', new TransferTimesByHotelCode().initRoutes());

export {
  router,
};
