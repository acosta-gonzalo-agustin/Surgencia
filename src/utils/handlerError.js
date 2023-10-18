"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("../utils/errors");
const errorHandler = (err, req, res) => {
    if (err instanceof errors_1.ClientError) {
        res.status(err.StatusCode).json({
            error: true,
            message: err.message,
        });
    }
    else if (err instanceof errors_1.ServerError) {
        res.status(err.StatusCode).json({
            error: true,
            message: err.message,
        });
    }
    else {
        res.status(500).json({
            error: true,
            message: 'Error interno del servidor',
        });
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=handlerError.js.map