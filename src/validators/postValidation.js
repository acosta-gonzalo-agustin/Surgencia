"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePost = void 0;
const express_validator_1 = require("express-validator");
const validateResult_1 = require("../middlewares/validateResult");
exports.validatePost = [
    (0, express_validator_1.check)('title').isString().withMessage('title must be a string'),
    (0, express_validator_1.check)('imageUrl').isURL().withMessage('image must be a URL'),
    (0, express_validator_1.check)('summary').isString().withMessage('summary must be a string'),
    (0, express_validator_1.check)('active').isBoolean().withMessage('active must be a boolean'),
    validateResult_1.validateResult,
];
//# sourceMappingURL=postValidation.js.map