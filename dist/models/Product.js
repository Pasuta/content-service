"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collectionName = 'product';
const productSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    bestOffer: {
        type: Boolean,
    },
    freeDrink: {
        type: Boolean,
    },
    weight: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'category',
    },
}, { pluralize: false, collection: String(collectionName) });
const Product = mongoose_1.model(String(collectionName), productSchema);
exports.Product = Product;

//# sourceMappingURL=TransferTime.js.map
