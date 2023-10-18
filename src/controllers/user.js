"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserPass = exports.verifyUser = exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const errors_1 = require("../utils/errors");
const services_1 = require("../services");
//Create a user
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email } = req.body;
    try {
        const newUser = yield services_1.UserService.createUser({
            firstName,
            lastName,
            email
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        next(new errors_1.ServerError('The user could not be created', 500));
    }
});
exports.createUser = createUser;
// Get all the users
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield services_1.UserService.getUsers();
        res.json(users);
    }
    catch (error) {
        next(new errors_1.ServerError('Error when retrieving users', 500));
    }
});
exports.getUsers = getUsers;
// Get user by ID
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield services_1.UserService.getUsersById(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        next(new errors_1.ServerError('Error when retrieving a user', 500));
    }
});
exports.getUserById = getUserById;
// Update a user by ID
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userData = req.body;
    try {
        const updatedUser = yield services_1.UserService.updateUserById(id, userData);
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(updatedUser);
    }
    catch (error) {
        next(new errors_1.ServerError('Error when updating a user', 500));
    }
});
exports.updateUser = updateUser;
// Delete a user by ID
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield services_1.UserService.deleteUser(id);
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        next(new errors_1.ServerError("Error al eliminar el usuario", 500));
    }
});
exports.deleteUser = deleteUser;
// verificacion de usuario
const verifyUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, token } = req.params;
    try {
        const user = yield services_1.UserService.getUsersById(id);
        if (user) {
            try {
                const decodeToken = yield services_1.UserService.verifyUser(token);
                if (decodeToken) {
                    res.json({ id, token });
                }
                else {
                    res.status(404).json({ error: 'Invalido' });
                }
            }
            catch (error) {
                next(new errors_1.ServerError("El token no es valido", 500));
            }
        }
        else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    }
    catch (error) {
        next(new errors_1.ServerError("Error al obtener el usuario", 500));
    }
});
exports.verifyUser = verifyUser;
const generateUserPass = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, token } = req.params;
    const { id_user, password } = req.body;
    try {
        const user = yield services_1.UserService.getUsersById(id);
        if (user) {
            try {
                const decodeToken = yield services_1.UserService.verifyUser(token);
                if (decodeToken) {
                    const userUpdate = yield services_1.UserService.setUserPass(id_user, password);
                    res.json(userUpdate);
                }
                else {
                    res.status(404).json({ error: 'Invalido' });
                }
            }
            catch (error) {
                next(new errors_1.ServerError("Error al obtener el usuario", 500));
            }
        }
        else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    }
    catch (error) {
        next(new errors_1.ServerError("Error al obtener el usuario", 500));
    }
});
exports.generateUserPass = generateUserPass;
//# sourceMappingURL=user.js.map