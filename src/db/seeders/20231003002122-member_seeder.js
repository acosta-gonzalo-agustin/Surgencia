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
        // If 'length' is changed, the number of created members changes
        const members = Array.from({ length: 10 }, () => ({
            id: uuidv4(),
            imageUrl: placeholderImageUrl,
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            position: faker.person.jobTitle(),
            email: faker.internet.email(),
            info: faker.lorem.sentence(),
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }));
        yield queryInterface.bulkInsert('member', members, {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('member', null, {});
    }),
};
//# sourceMappingURL=20231003002122-member_seeder.js.map