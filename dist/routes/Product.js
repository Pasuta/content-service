"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../controllers/Product");
const BaseRoute_1 = require("./BaseRoute");
class ProductRoute extends BaseRoute_1.BaseRoute {
    initRoutes() {
        this.router.get('/', Product_1.ProductController.getAllProducts);
        this.router.get('/steaksOnly', Product_1.ProductController.getSteaksOnly);
        this.router.get('/kebabsOnly', Product_1.ProductController.getKebabsOnly);
        this.router.get('/id/:id', Product_1.ProductController.getProductById);
        this.router.get('/category/:category', Product_1.ProductController.getProductByCategory);
        this.router.get('/beer', Product_1.ProductController.getBeer);
        return this.router;
    }
}
exports.ProductRoute = ProductRoute;

//# sourceMappingURL=TransferTime.js.map
