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
exports.deletePost = exports.upDatePost = exports.createPost = exports.getPostById = exports.getAllPosts = exports.getPostsByKeyword = void 0;
const sequelize_1 = require("sequelize");
const post_1 = require("../db/models/post");
const tag_1 = require("../db/models/tag");
const user_1 = require("../db/models/user");
const getPostsByKeyword = (keyword, page, perPage) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield post_1.Post.findAll({
        attributes: ['id', 'userId', 'title', 'imageUrl', 'summary', 'body', 'createdAt', 'updatedAt', 'active'],
        include: [
            {
                model: user_1.User,
                attributes: ['firstName', 'lastName']
            },
            {
                model: tag_1.Tag,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        ],
        where: {
            [sequelize_1.Op.or]: [
                {
                    title: {
                        [sequelize_1.Op.iLike]: `%${keyword}%`,
                    },
                },
                {
                    '$Tags.name$': {
                        [sequelize_1.Op.iLike]: `%${keyword}%`,
                    },
                },
            ],
        },
    });
    const offset = (page - 1) * perPage;
    const itemCount = results.length;
    const totalPages = Math.ceil(itemCount / perPage);
    const paginatedResults = results.slice(offset, offset + perPage);
    return {
        paginatedResults,
        page,
        itemCount,
        pageCount: totalPages,
        hasPreviousPage: page > 1,
        hasNextPage: page < totalPages,
    };
});
exports.getPostsByKeyword = getPostsByKeyword;
const getAllPosts = (page, perPage) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield post_1.Post.findAll({
        attributes: ['id', 'userId', 'title', 'imageUrl', 'summary', 'body', 'createdAt', 'updatedAt', 'active'],
        include: [
            {
                model: user_1.User,
                attributes: ['firstName', 'lastName']
            },
            {
                model: tag_1.Tag,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        ],
    });
    const offset = (page - 1) * perPage;
    const itemCount = results.length;
    const totalPages = Math.ceil(itemCount / perPage);
    const paginatedResults = results.slice(offset, offset + perPage);
    return {
        paginatedResults,
        page,
        itemCount,
        pageCount: totalPages,
        hasPreviousPage: page > 1,
        hasNextPage: page < totalPages,
    };
});
exports.getAllPosts = getAllPosts;
const getPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return post_1.Post.findByPk(id, {
        include: [
            {
                model: user_1.User,
                attributes: ['firstName', 'lastName']
            },
            {
                model: tag_1.Tag,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        ],
    });
});
exports.getPostById = getPostById;
const createPost = (postData) => __awaiter(void 0, void 0, void 0, function* () {
    return post_1.Post.create(postData);
});
exports.createPost = createPost;
const upDatePost = (id, postData) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_1.Post.findByPk(id);
    if (!post)
        return null;
    Object.assign(post, postData);
    yield post.save();
    return post;
});
exports.upDatePost = upDatePost;
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_1.Post.findByPk(id);
    if (!post)
        return null;
    yield post.destroy();
});
exports.deletePost = deletePost;
//# sourceMappingURL=post.js.map