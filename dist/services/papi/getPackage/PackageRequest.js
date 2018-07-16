"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("../../../App");
class PackageRequest {
    constructor(request) {
        this.uri = `${App_1.App.config.get('papi')}/packages/${request.query.packageId}/matrix`;
        this.options = {
            qs: request.query,
            headers: {
                'content-type': 'application/json',
                'x-correlation-id': request.headers['x-correlation-id'],
                'context': request.headers.context,
                'language': request.headers.language,
            },
            json: true,
        };
    }
}
exports.PackageRequest = PackageRequest;

//# sourceMappingURL=PackageRequest.js.map
