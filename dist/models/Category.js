"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collectionName = 'category';
const categorySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
}, { pluralize: false, collection: String(collectionName) });
const Category = mongoose_1.model(String(collectionName), categorySchema);
exports.Category = Category;

//# sourceMappingURL=Category.js.map
