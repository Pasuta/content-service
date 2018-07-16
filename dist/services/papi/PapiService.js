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
const ServerError_1 = require("tc-nodejs-core-services/dist/error/ServerError");
const App_1 = require("../../App");
const PackageRequest_1 = require("./getPackage/PackageRequest");
const PackageResponse_1 = require("./getPackage/PackageResponse");
class PapiService {
}
PapiService.getPackage = (req) => __awaiter(this, void 0, void 0, function* () {
    const request = new PackageRequest_1.PackageRequest(req);
    try {
        const papiResponse = yield App_1.App.httpClient.get(request.uri, request.options);
        return new PackageResponse_1.PackageResponse(papiResponse);
    }
    catch (e) {
        throw new ServerError_1.InternalServerError(e);
    }
});
exports.PapiService = PapiService;

//# sourceMappingURL=PapiService.js.map
