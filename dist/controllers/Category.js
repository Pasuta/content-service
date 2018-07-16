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
const Category_1 = require("../models/Category");
class CategoryController {
    static getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield Category_1.Category.find();
            res.json(categories);
        });
    }
    static getCategoryByTitle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = req.params.category;
            const category = yield Category_1.Category.findOne({ title });
            res.json(category);
        });
    }
}
exports.CategoryController = CategoryController;

//# sourceMappingURL=Category.js.map
