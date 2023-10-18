"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTag = void 0;
const express_validator_1 = require("express-validator");
const validateResult_1 = require("../middlewares/validateResult");
exports.validateTag = [
    (0, express_validator_1.check)('name')
        .isString()
        .withMessage('nombre must be a string')
        .isLength({ min: 1, max: 30 })
        .withMessage('must have a minimum length of 1 and a maximum length of 30'),
    validateResult_1.validateResult,
];
//# sourceMappingURL=tagValidation.js.map