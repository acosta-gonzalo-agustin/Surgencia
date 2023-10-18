"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBanner = void 0;
const express_validator_1 = require("express-validator");
const validateResult_1 = require("../middlewares/validateResult");
exports.validateBanner = [
    (0, express_validator_1.check)('order').isNumeric().withMessage('order must be a number'),
    (0, express_validator_1.check)('title').isString().withMessage('title must be a string'),
    (0, express_validator_1.check)('info').isString().withMessage('info must be a string'),
    (0, express_validator_1.check)('imageUrl').isURL().withMessage('image must be a URL'),
    (0, express_validator_1.check)('active').isBoolean().withMessage('active must be a boolean'),
    validateResult_1.validateResult,
];
//# sourceMappingURL=bannerValidation.js.map