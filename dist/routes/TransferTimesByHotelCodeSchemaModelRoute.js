"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransferTimesByHotelCode_1 = require("../controllers/TransferTimesByHotelCode");
const BaseRoute_1 = require("./BaseRoute");
class TransferTimesByHotelCodeSchemaModelRoute extends BaseRoute_1.BaseRoute {
    initRoutes() {
        this.router.get('/', TransferTimesByHotelCode_1.TransferTimesByHotelCodeController.getAllTransferTimesByHotelCode);
        return this.router;
    }
}
exports.TransferTimesByHotelCodeSchemaModelRoute = TransferTimesByHotelCodeSchemaModelRoute;

//# sourceMappingURL=TransferTimesByHotelCodeSchemaModelRoute.js.map
