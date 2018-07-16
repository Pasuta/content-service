"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusController {
    static getStatus(req, res) {
        res.json({
            status: true,
            success: true,
        });
    }
}
exports.StatusController = StatusController;

//# sourceMappingURL=Status.js.map
