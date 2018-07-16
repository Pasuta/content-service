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
const TransferTimesByHotelCode_1 = require("../models/TransferTimesByHotelCode");
var TransferTimesByHotelCodeController;
(function (TransferTimesByHotelCodeController) {
    function getAllTransferTimesByHotelCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const transferTimes = yield TransferTimesByHotelCode_1.transferTimesByHotelCode.find();
            res.json(transferTimes);
        });
    }
    TransferTimesByHotelCodeController.getAllTransferTimesByHotelCode = getAllTransferTimesByHotelCode;
})(TransferTimesByHotelCodeController = exports.TransferTimesByHotelCodeController || (exports.TransferTimesByHotelCodeController = {}));

//# sourceMappingURL=TransferTimesByHotelCode.js.map
