"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const App_1 = require("../App");
class BaseRoute {
    constructor() {
        this.logger = App_1.App.logger;
        this.router = express_1.Router();
    }
    initRoutes() {
        return this.router;
    }
}
exports.BaseRoute = BaseRoute;

//# sourceMappingURL=BaseRoute.js.map
