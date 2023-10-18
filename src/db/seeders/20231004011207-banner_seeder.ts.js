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
const links = [
    'https://drive.google.com/uc?export=view&id=1qOyyYyrkNbQS4pP_EzmL-qefTh8bEFkM',
    'https://drive.google.com/uc?export=view&id=1ppqEY5ezbAo-l_7-bBskpx2I4CvqOggB',
    'https://drive.google.com/uc?export=view&id=1YYzsdx1_cgq5sbzZ8XvMTtKafgnq0J3Z',
    'https://drive.google.com/uc?export=view&id=1OfsAX-mVrrIQTXBnmpHMBDuFXOe8D_s4',
    'https://drive.google.com/uc?export=view&id=1Em64IcrSzM9gm0eb0rWm53tuKM6iq1Ya',
    'https://drive.google.com/uc?export=view&id=15Isorlr79StXK9Sj3OpmjPjwNmxZNHns',
    'https://drive.google.com/uc?export=view&id=12TrzF3CZWy7FaG8Ruz7dCmYC8x3yK7Wt',
    'https://drive.google.com/uc?export=view&id=10Lk_UZ43Ie0UBsOtpY9qk-Q1t-YRIKJ0',
    'https://drive.google.com/uc?export=view&id=1qcyyH6mDGB3sdXafd2BF_kzUWxrQE3r5',
    'https://drive.google.com/uc?export=view&id=1b7ukilBGuSdtD57n0ATLopW2JwyLim6F',
];
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        const banners = links.map((link, index) => ({
            id: uuidv4(),
            order: index + 1,
            title: faker.lorem.words({ min: 3, max: 6 }),
            info: faker.lorem.paragraph({ min: 1, max: 3 }),
            imageUrl: link,
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }));
        yield queryInterface.bulkInsert('banner', banners, {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('banner', null, {});
    }),
};
//# sourceMappingURL=20231004011207-banner_seeder.ts.js.map