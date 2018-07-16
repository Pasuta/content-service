import { Request, Response } from 'express';
import { transferTimesByHotelCode } from '../models/TransferTimesByHotelCode';

export namespace TransferTimesByHotelCodeController {
    export async function getAllTransferTimesByHotelCode(req: Request, res: Response): Promise<void> {
        const transferTimes = await transferTimesByHotelCode.find();
        res.json(transferTimes);
    }
}
