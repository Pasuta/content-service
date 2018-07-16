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
const User_1 = require("../../models/User");
class UserController {
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.User.find();
            res.json(users);
        });
    }
    static getUserByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.params.name;
            const user = yield User_1.User.findOne({ name });
            res.json(user);
        });
    }
    ;
}
exports.UserController = UserController;

//# sourceMappingURL=User.js.map
