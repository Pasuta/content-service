"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransferTime_1 = require("../controllers/TransferTime");
const BaseRoute_1 = require("./BaseRoute");
class TransferTimeRoute extends BaseRoute_1.BaseRoute {
    initRoutes() {
        this.router.get('/', TransferTime_1.TransferTimeController.getAllTransferTimes);
        this.router.get('/pub/:data', TransferTime_1.TransferTimeController.publishMessageRedis);
        this.router.get('/pub-mq', TransferTime_1.TransferTimeController.publishMessageMQ);
        return this.router;
    }
}
exports.TransferTimeRoute = TransferTimeRoute;

//# sourceMappingURL=TransferTime.js.map
