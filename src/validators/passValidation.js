"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePass = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
exports.validatePass = [
    (0, express_validator_1.check)('password').notEmpty().withMessage('debe elegir una clave para el usuario').bail().isLength({ min: 8 }).withMessage('La clave debe contener al menos ocho caracteres').bail().isStrongPassword({
        minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    }).withMessage('La clave debe contener al menos una letra minuscula, una letra mayuscula,un numero y un caracter especial'),
    index_1.validateResult.validateResult,
];
//# sourceMappingURL=passValidation.js.map