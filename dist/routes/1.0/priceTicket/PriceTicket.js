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
const App_1 = require("../../../App");
const PapiService_1 = require("../../../services/papi/PapiService");
const BaseRoute_1 = require("../../BaseRoute");
const priceTicketRequestSchema_1 = require("./priceTicketRequestSchema");
class PriceTicketRoute extends BaseRoute_1.BaseRoute {
    getPriceTicket(router) {
        return router.get('/', App_1.App.validator.query(priceTicketRequestSchema_1.priceTicketRequestSchema), PriceTicketRoute.getPriceTicketHandler);
    }
    exportRoutes() {
        return [
            this.getPriceTicket,
        ];
    }
    static getPriceTicketHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield PapiService_1.PapiService.getPackage(req);
                res.json(response);
            }
            catch (e) {
                res.status(e.statusCode);
                res.send(e.message);
            }
        });
    }
}
exports.PriceTicketRoute = PriceTicketRoute;

//# sourceMappingURL=PriceTicket.js.map
