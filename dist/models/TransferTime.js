"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collectionName = 'transfertime';
const schema = {
    resort: {
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
const transfertimeSchema = new mongoose_1.Schema(schema, option);
const transferTime = mongoose_1.model(String(collectionName), transfertimeSchema);
exports.transferTime = transferTime;

//# sourceMappingURL=TransferTime.js.map
