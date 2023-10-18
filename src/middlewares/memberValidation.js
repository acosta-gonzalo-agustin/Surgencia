"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberValidation = void 0;
const errors_1 = require("../utils/errors");
const memberValidation = (req, res, next) => {
    const { firstName } = req.body;
    if (firstName)
        return next();
    else
        throw new errors_1.ClientError('Error en el nombre', 401);
};
exports.memberValidation = memberValidation;
//# sourceMappingURL=memberValidation.js.map