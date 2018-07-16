"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collectionName = 'user';
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, { pluralize: false, collection: String(collectionName) });
const User = mongoose_1.model(String(collectionName), userSchema);
exports.User = User;

//# sourceMappingURL=User.js.map
