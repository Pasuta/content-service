"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const CostSummary_1 = require("../../../mappers/CostSummary");
class PackageResponse {
    constructor(rawResponse) {
        const priceSummary = lodash_1.get(rawResponse, 'body.priceList[0].priceSummary');
        this.costSummary = CostSummary_1.CostSummary.mapPriceSummary(priceSummary);
    }
}
exports.PackageResponse = PackageResponse;

//# sourceMappingURL=PackageResponse.js.map
