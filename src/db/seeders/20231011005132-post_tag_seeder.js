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
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        const existingAssociations = new Set();
        const posts = yield queryInterface.sequelize.query('SELECT id from "post";');
        const tags = yield queryInterface.sequelize.query('SELECT id from "tag";');
        for (let i = 0; i < 20; i++) {
            let randomPost, randomTag;
            do {
                randomPost = posts[0][Math.floor(Math.random() * posts[0].length)].id;
                randomTag = tags[0][Math.floor(Math.random() * tags[0].length)].id;
                const associationString = `${randomPost}-${randomTag}`;
                if (!existingAssociations.has(associationString)) {
                    existingAssociations.add(associationString);
                    break;
                }
                // eslint-disable-next-line no-constant-condition
            } while (true);
            const association = {
                postId: randomPost,
                tagId: randomTag,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            yield queryInterface.bulkInsert('post_tag', [association], {});
        }
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('post_tag', null, {});
    }),
};
//# sourceMappingURL=20231011005132-post_tag_seeder.js.map