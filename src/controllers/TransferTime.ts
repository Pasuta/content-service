import * as amqplib from 'amqplib/callback_api';
import { Request, Response } from 'express';
import * as redis from 'redis';
import { transferTime } from '../models/TransferTime';

export namespace TransferTimeController {
  export async function getAllTransferTimes(req: Request, res: Response): Promise<void> {
    const transferTimes = await transferTime.find();
    res.json(transferTimes);
  }

  export async function publishMessageRedis(req: Request, res: Response): Promise<void> {
    const url = 'redis://127.0.0.1:6379';
    const pub = redis.createClient(url);
    const data = req.params.data.split('=');

    const leftPart = data[0];
    const channel = leftPart.split(':')[0];
    const key = leftPart.split(':')[1];
    const value = data[1];
    pub.set(leftPart, value);
    pub.publish(channel, `${key} = {$value}`);
    res.json('ok');
  }

  export async function publishMessageMQ(req: Request, res: Response): Promise<void> {
    const transferTimes = await transferTime.find();

    amqplib.connect('amqp://localhost', function(err, conn) {
      conn.createChannel((chErr, ch) => {
        const q = 'transfertimes';

        ch.assertQueue(q, {durable: false});
        // Note: on Node 6 Buffer.from(msg) should be used
        ch.sendToQueue(q, new Buffer(JSON.stringify(transferTimes)));
        // console.log(" [x] Sent 'transfertimes!'");
      });
    });

    res.json('ok');
  }
}
