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
        const placeholderImageUrl = 'https://via.placeholder.com/200';
        const users = yield queryInterface.sequelize.query('SELECT id from "user";');
        // If 'length' is changed, the number of created members changes
        const posts = Array.from({ length: 20 }, () => ({
            id: uuidv4(),
            title: faker.lorem.words(3),
            imageUrl: placeholderImageUrl,
            summary: faker.lorem.paragraph(2),
            body: faker.lorem.paragraph(10),
            userId: users[0][Math.floor(Math.random() * users[0].length)].id,
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }));
        yield queryInterface.bulkInsert('post', posts, {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('post', null, {});
    }),
};
//# sourceMappingURL=20231006134228-post_seeder.js.map