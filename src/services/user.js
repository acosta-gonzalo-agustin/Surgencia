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
exports.setUserPass = exports.verifyUser = exports.deleteUser = exports.updateUserById = exports.getUsersById = exports.getUsers = exports.createUser = void 0;
const user_1 = require("../db/models/user");
const newUserMail_1 = require("../mail/newUserMail");
const jwt_1 = require("../utils/jwt");
const hash_1 = require("../utils/hash");
//Servicio para crear user
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyUser = yield user_1.User.findOne({ where: { email: userData.email } });
    if (verifyUser !== null) {
        return 'Este mail ya pertenece a una cuenta de usuario';
    }
    else {
        //guarda el usuario
        const user = yield user_1.User.create(userData);
        if (user) {
            //crear el token para el nuevo usuario
            const accessToken = (0, jwt_1.signToken)({ email: userData.email, id: userData.id });
            //genera la plantilla de mail
            const pass_mail = `
        <p>este es un mail de bienvenida:</p>
        <p>Puede acceder al siguiente link para generar una contrase&ntilde;a para tu cuenta:</p><div><div>
        <a href='http://localhost:3001/api/users/generatepass/${user.id}/${accessToken}'>Generate Password</a>
        `;
            (0, newUserMail_1.sendNewUserEmail)(user.email, pass_mail);
        }
        const data = {
            "id": user.id,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "updatedAt": user.updatedAt,
            "createdAt": user.createdAt,
            "active": user.active
        };
        return data;
    }
});
exports.createUser = createUser;
//Service to get users
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return user_1.User.findAll();
});
exports.getUsers = getUsers;
//Service to get a user by id
const getUsersById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_1.User.findByPk(id);
});
exports.getUsersById = getUsersById;
//Service to update a user by id
const updateUserById = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.User.findByPk(id);
    if (!user) {
        return null;
    }
    Object.assign(user, userData);
    yield user.save();
    return user;
});
exports.updateUserById = updateUserById;
//Service to delete a user
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.User.findByPk(id);
    if (!user) {
        return null;
    }
    yield user.destroy();
});
exports.deleteUser = deleteUser;
//Servicio para verificar el token 
const verifyUser = (passtoken) => __awaiter(void 0, void 0, void 0, function* () {
    const decode = (0, jwt_1.verifyToken)(passtoken);
    return decode;
});
exports.verifyUser = verifyUser;
//Servicio para setear el pass de un  usuarios por id
const setUserPass = (id, pass) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPass = yield hash_1.HashUtils.hashText(pass);
    const user = yield user_1.User.update({ password: hashedPass, active: true }, {
        where: {
            id: id,
        },
    });
    return user;
});
exports.setUserPass = setUserPass;
//# sourceMappingURL=user.js.map