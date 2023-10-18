"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
    get StatusCode() {
        return this.StatusCode;
    }
}
exports.default = ClientError;
//# sourceMappingURL=client.js.map