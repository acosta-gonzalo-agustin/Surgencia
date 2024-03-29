"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionHandler = void 0;
const jwt_1 = require("../utils/jwt");
const user_1 = require("../db/models/user");
const errors_1 = require("../utils/errors");
const hash_1 = require("../utils/hash");
const createSessionHandler = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_1.User.findOne({ where: { email } });
    if (result === null) {
        throw new errors_1.ClientError('Invalid credentials', 400);
    }
    else {
        const verify = yield hash_1.HashUtils.verifyHash(password, result === null || result === void 0 ? void 0 : result.password); // verify hash
        if (verify) {
            const accessToken = (0, jwt_1.signToken)({ email, id: result.id }); // create access token
            console.log(accessToken);
            return accessToken;
        }
        else {
            throw new errors_1.ClientError('Invalid credentials', 400);
        }
    }
});
exports.createSessionHandler = createSessionHandler;
//# sourceMappingURL=login.js.map