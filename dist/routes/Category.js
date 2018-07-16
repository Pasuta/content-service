"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../controllers/Category");
const BaseRoute_1 = require("./BaseRoute");
class CategoryRoute extends BaseRoute_1.BaseRoute {
    initRoutes() {
        this.router.get('/', Category_1.CategoryController.getAllCategories);
        this.router.get('/:category', Category_1.CategoryController.getCategoryByTitle);
        return this.router;
    }
}
exports.CategoryRoute = CategoryRoute;

//# sourceMappingURL=Category.js.map
