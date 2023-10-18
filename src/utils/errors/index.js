"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.ClientError = void 0;
const client_1 = __importDefault(require("./client"));
exports.ClientError = client_1.default;
const server_1 = __importDefault(require("./server"));
exports.ServerError = server_1.default;
//# sourceMappingURL=index.js.map