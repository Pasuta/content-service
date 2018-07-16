"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransferTimesByHotelCode_1 = require("../controllers/TransferTimesByHotelCode");
const BaseRoute_1 = require("./BaseRoute");
class TransferTimesByHotelCode extends BaseRoute_1.BaseRoute {
    initRoutes() {
        this.router.get('/', TransferTimesByHotelCode_1.TransferTimesByHotelCodeController.getAllTransferTimesByHotelCode);
        return this.router;
    }
}
exports.TransferTimesByHotelCode = TransferTimesByHotelCode;

//# sourceMappingURL=TransferTimesByHotelCode.js.map
