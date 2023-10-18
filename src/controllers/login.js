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
const errors_1 = require("../utils/errors");
const services_1 = require("../services");
const createSessionHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body; // Send email and password in body
    try {
        const token = yield services_1.SessionHandler.createSessionHandler(email, password);
        if (token) {
            res.cookie('accesToken', token, {
                //Attach the token to a cookie for a week
                maxAge: 300000,
                httpOnly: true,
            });
            return res.json({ email, token });
        }
    }
    catch (error) {
        next(new errors_1.ClientError('No se pudo crear el usuario', 500));
    }
});
exports.createSessionHandler = createSessionHandler;
//# sourceMappingURL=login.js.map