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
const lodash_1 = require("lodash");
const App_1 = require("../App");
const util_1 = require("../helpers/util");
const Category_1 = require("../models/Category");
const Product_1 = require("../models/Product");
class ProductController {
    static getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let products = yield Product_1.Product.find().populate('category');
            products = util_1.addBestOffer(products);
            products = util_1.freeDrink(products);
            res.json(products);
        });
    }
    static getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = lodash_1.toNumber(req.params.id);
            if (lodash_1.isNaN(id)) {
                res.send('Id should be number');
            }
            else {
                const product = yield Product_1.Product.findOne({ id });
                res.json(product);
            }
        });
    }
    static getProductByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield Category_1.Category.findOne({ title: req.params.category });
            const product = yield Product_1.Product.find({ category: category._id });
            res.json(product);
        });
    }
    static getSteaksOnly(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield Product_1.Product.find();
            res.json(util_1.filterSteaksOnly(products));
        });
    }
    static getKebabsOnly(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield Product_1.Product.find();
            res.json(util_1.filterKebabsOnly(products));
        });
    }
    static getBeer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `${App_1.App.config.get('beercomua')}/beer`;
            const beerServiceResponse = yield App_1.App.httpClient.get(uri);
            try {
                const body = JSON.parse(beerServiceResponse.body);
                res.json(body);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.ProductController = ProductController;

//# sourceMappingURL=TransferTime.js.map
