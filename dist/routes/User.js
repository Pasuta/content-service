"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../controllers/User");
const BaseRoute_1 = require("./BaseRoute");
class UserRoute extends BaseRoute_1.BaseRoute {
    initRoutes() {
        this.router.get('/', User_1.UserController.getAllUsers);
        this.router.get('/:name', User_1.UserController.getUserByName);
        return this.router;
    }
}
exports.UserRoute = UserRoute;

//# sourceMappingURL=User.js.map
