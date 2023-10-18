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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashUtils = void 0;
const argon2_1 = __importDefault(require("argon2"));
class HashUtils {
    static hashText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedText = yield argon2_1.default.hash(text);
                return hashedText;
            }
            catch (error) {
                throw new Error(`Error al encriptar el texto: ${error}`);
            }
        });
    }
    static verifyHash(text, hashedText) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const verifyMatch = yield argon2_1.default.verify(hashedText, text);
                return verifyMatch;
            }
            catch (error) {
                throw new Error(`Error al verificar el hash: ${error}`);
            }
        });
    }
}
exports.HashUtils = HashUtils;
//# sourceMappingURL=hash.js.map