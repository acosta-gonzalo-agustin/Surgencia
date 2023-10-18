"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.higherOrderMiddleware = void 0;
const higherOrderMiddleware = (cb) => {
    return (req, res, next) => {
        cb(req, res).catch(err => next(err));
    };
};
exports.higherOrderMiddleware = higherOrderMiddleware;
//# sourceMappingURL=catchAsync.js.map