"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collectionName = 'transferTimesByHotelCode';
const schema = {
    hotelCode: {
        type: String,
        required: true,
    },
    transferTime: {
        type: String,
        required: true,
    },
};
const option = {
    pluralize: false,
    collection: String(collectionName),
};
const transferTimesByHotelCodeSchema = new mongoose_1.Schema(schema, option);
const transferTimesByHotelCode = mongoose_1.model(String(collectionName), transferTimesByHotelCodeSchema);
exports.transferTimesByHotelCode = transferTimesByHotelCode;

//# sourceMappingURL=TransferTimesByHotelCode.js.map
