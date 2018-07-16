"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = require("../BaseRoute");
const Status_1 = require("../../controllers/status/Status");
class StatusRoute extends BaseRoute_1.BaseRoute {
    initRoutes() {
        this.router.get('/', Status_1.StatusController.getStatus);
        return this.router;
    }
}
exports.StatusRoute = StatusRoute;

//# sourceMappingURL=Status.js.map
