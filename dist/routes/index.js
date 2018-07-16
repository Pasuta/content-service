"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Application main router
 */
const express = require("express");
const Status_1 = require("./Status");
const TransferTime_1 = require("./TransferTime");
const TransferTimesByHotelCode_1 = require("./TransferTimesByHotelCode");
const router = express.Router();
exports.router = router;
router.use('/status', new Status_1.StatusRoute().initRoutes());
router.use('/transferTime', new TransferTime_1.TransferTimeRoute().initRoutes());
router.use('/transferTimesByHotelCode', new TransferTimesByHotelCode_1.TransferTimesByHotelCode().initRoutes());

//# sourceMappingURL=index.js.map
