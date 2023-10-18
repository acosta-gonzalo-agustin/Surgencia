"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const express_validator_1 = require("express-validator");
const validateResult_1 = require("../middlewares/validateResult");
exports.validateUser = [
    (0, express_validator_1.check)('firstName').notEmpty().withMessage("firstName no puede estar vacío").bail().isString().withMessage("firstName debe ser string"),
    (0, express_validator_1.check)('lastName').notEmpty().withMessage("LastName no puede estar vacío").bail().isString().withMessage("lastName debe ser string"),
    (0, express_validator_1.check)('email').bail().isEmail().withMessage('el campo debe tener formato de email, por ejemplo nombre@gmail.com'),
    /* check('passWithoutHash').isString().withMessage("El password debe ser string"),  */
    // check('active').isBoolean().withMessage("El active debe ser boolean"),
    validateResult_1.validateResult,
];
//# sourceMappingURL=userValidation.js.map