"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
    get StatusCode() {
        return this.StatusCode;
    }
}
exports.default = ServerError;
//# sourceMappingURL=server.js.map