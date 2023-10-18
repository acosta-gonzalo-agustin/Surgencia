"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNewUserEmail = void 0;
const config_1 = require("./config");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendNewUserEmail = (to, html) => {
    const mailOptions = {
        from: process.env.EMAIL_HOST,
        to,
        subject: 'Bienvenido!',
        html,
    };
    (0, config_1.sendEmail)(mailOptions);
};
exports.sendNewUserEmail = sendNewUserEmail;
//# sourceMappingURL=newUserMail.js.map