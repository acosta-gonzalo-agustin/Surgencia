"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const userValidation_1 = require("../validators/userValidation");
const passValidation_1 = require("../validators/passValidation");
const index_1 = require("../middlewares/index");
const router = express_1.default.Router();
// Rutas para los usuarios
router.post('/', index_1.isAuthenticated.isAuthenticated, userValidation_1.validateUser, controllers_1.usersController.createUser);
router.get('/', controllers_1.usersController.getUsers);
router.get('/:id', controllers_1.usersController.getUserById);
/*router.put('/:id', validateUser, usersController.updateUser);*/
router.delete('/:id', controllers_1.usersController.deleteUser);
//generar password para un nuevo usuario
router.get('/generatepass/:id/:token', controllers_1.usersController.verifyUser);
router.put('/generatepass/:id/:token', passValidation_1.validatePass, controllers_1.usersController.generateUserPass);
exports.default = router;
//# sourceMappingURL=user.js.map