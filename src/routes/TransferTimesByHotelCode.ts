import { Router } from 'express';
import { TransferTimesByHotelCodeController } from '../controllers/TransferTimesByHotelCode';
import { BaseRoute } from './BaseRoute';

export class TransferTimesByHotelCode extends BaseRoute {
  public initRoutes(): Router {
    this.router.get('/', TransferTimesByHotelCodeController.getAllTransferTimesByHotelCode);

    return this.router;
  }
}
