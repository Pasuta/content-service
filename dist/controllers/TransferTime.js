"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib = require("amqplib/callback_api");
const redis = require("redis");
const TransferTime_1 = require("../models/TransferTime");
var TransferTimeController;
(function (TransferTimeController) {
    function getAllTransferTimes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(2);
            // const transferTimes = 2;
            const transferTimes = yield TransferTime_1.transferTime.find();
            console.log(transferTimes);
            res.json(transferTimes);
        });
    }
    TransferTimeController.getAllTransferTimes = getAllTransferTimes;
    function publishMessageRedis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'redis://127.0.0.1:6379';
            const pub = redis.createClient(url);
            const data = req.params.data.split('=');
            // [transfertime:cala.vinas, 123]
            //transfertime:cala.vinas=123
            const leftPart = data[0];
            const channel = leftPart.split(':')[0];
            const key = leftPart.split(':')[1];
            const value = data[1];
            console.log('---------');
            console.log('channel: ' + channel);
            console.log('key: ' + key);
            console.log('value: ' + value);
            console.log('---------');
            pub.set(leftPart, value);
            pub.publish(channel, key + '=' + value);
            res.json('ok');
        });
    }
    TransferTimeController.publishMessageRedis = publishMessageRedis;
    function publishMessageMQ(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const transferTimes = yield TransferTime_1.transferTime.find();
            console.log(123);
            amqplib.connect('amqp://localhost', function (err, conn) {
                conn.createChannel((err, ch) => {
                    const q = 'transfertimes';
                    ch.assertQueue(q, { durable: false });
                    // Note: on Node 6 Buffer.from(msg) should be used
                    ch.sendToQueue(q, new Buffer(JSON.stringify(transferTimes)));
                    console.log(" [x] Sent 'transfertimes!'");
                });
            });
            res.json('ok');
        });
    }
    TransferTimeController.publishMessageMQ = publishMessageMQ;
})(TransferTimeController = exports.TransferTimeController || (exports.TransferTimeController = {}));

//# sourceMappingURL=TransferTime.js.map
