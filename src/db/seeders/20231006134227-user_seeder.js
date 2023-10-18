/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
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
const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        // If 'length' is changed, the number of created members changes
        const users = Array.from({ length: 10 }, () => ({
            id: uuidv4(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            // The same password is set for all of them. It is 'password1' with the Argon2 hash
            password: '$argon2id$v=19$m=65536,t=3,p=4$1+/YasjbYZ2Qc4b8KChywg$w/m+VXEM1QjwW8FlceqFw/3m96mIxhLW/9MfcHG8Hi8',
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }));
        yield queryInterface.bulkInsert('user', users, {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('user', null, {});
    }),
};
//# sourceMappingURL=20231006134227-user_seeder.js.map