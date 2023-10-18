"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMember = void 0;
const express_validator_1 = require("express-validator");
const validateResult_1 = require("../middlewares/validateResult");
exports.validateMember = [
    (0, express_validator_1.check)('imageUrl').isURL().withMessage('image must be a URL'),
    (0, express_validator_1.check)('firstName').isString().withMessage('firstName must be a string'),
    (0, express_validator_1.check)('lastName').isString().withMessage('lastName must be a string'),
    (0, express_validator_1.check)('position').isString().withMessage('position must be a string'),
    (0, express_validator_1.check)('info').isString().withMessage('info must be a string'),
    (0, express_validator_1.check)('active').isBoolean().withMessage('active must be a boolean'),
    validateResult_1.validateResult,
];
//# sourceMappingURL=memberValidation.js.map