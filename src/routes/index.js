"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const members_1 = __importDefault(require("./members"));
const banner_1 = __importDefault(require("./banner"));
const post_1 = __importDefault(require("./post"));
const tag_1 = __importDefault(require("./tag"));
const user_1 = __importDefault(require("./user"));
const login_1 = __importDefault(require("./login"));
const router = (0, express_1.Router)();
// Main route
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la aplicación!');
});
router.use('/members', members_1.default);
router.use('/banners', banner_1.default);
router.use('/posts', post_1.default);
router.use('/tags', tag_1.default);
router.use('/users', user_1.default);
router.use('/login', login_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map