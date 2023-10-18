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
        const existingAssociations = new Set();
        const authors = yield queryInterface.sequelize.query('SELECT id from "user";');
        const categories = yield queryInterface.sequelize.query('SELECT id from "category";');
        for (let i = 0; i < 20; i++) {
            let randomAuthor, randomCategory;
            randomAuthor = authors[0][Math.floor(Math.random() * authors[0].length)].id;
            randomCategory = categories[0][Math.floor(Math.random() * categories[0].length)].id;
            const association = {
                id: uuidv4(),
                title: faker.lorem.words(3),
                author: randomAuthor,
                categoryId: randomCategory,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            yield queryInterface.bulkInsert('material', [association], {});
        }
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('material', null, {});
    })
};
//# sourceMappingURL=20231016203846-material_seeder.js.map