import { Router } from 'express';
import { TransferTimeController } from '../controllers/TransferTime';
import { BaseRoute } from './BaseRoute';

export class TransferTimeRoute extends BaseRoute {
  public initRoutes(): Router {
    this.router.get('/', TransferTimeController.getAllTransferTimes);
    this.router.get('/pub/:data', TransferTimeController.publishMessageRedis);
    this.router.get('/pub-mq', TransferTimeController.publishMessageMQ);

    return this.router;
  }
}
