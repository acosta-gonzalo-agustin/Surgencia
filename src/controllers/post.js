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
exports.deletePost = exports.upDatePost = exports.createPost = exports.getPost = exports.getPosts = exports.getPostsByKeyword = void 0;
const services_1 = require("../services");
const getPostsByKeyword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const keyword = typeof req.query.keyword === 'string' && isNaN(Number(req.query.keyword)) ? req.query.keyword : '';
        const page = !isNaN(parseInt(req.query.page)) ? parseInt(req.query.page) : 1;
        const perPage = !isNaN(parseInt(req.query.perPage)) ? parseInt(req.query.perPage) : 10;
        const posts = yield services_1.PostService.getPostsByKeyword(keyword, page, perPage);
        res.json(posts);
    }
    catch (error) {
        res.status(500).json({ error: 'Error getting posts' });
    }
});
exports.getPostsByKeyword = getPostsByKeyword;
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = !isNaN(parseInt(req.query.page)) ? parseInt(req.query.page) : 1;
        const perPage = !isNaN(parseInt(req.query.perPage)) ? parseInt(req.query.perPage) : 10;
        const posts = yield services_1.PostService.getAllPosts(page, perPage);
        res.json(posts);
    }
    catch (error) {
        res.status(500).json({ error: 'Error getting posts' });
    }
});
exports.getPosts = getPosts;
//Get post by id
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield services_1.PostService.getPostById(id);
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
            return;
        }
        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: 'Error getting post' });
    }
});
exports.getPost = getPost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postData = req.body;
    try {
        const newPost = yield services_1.PostService.createPost(postData);
        res.json(newPost);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
});
exports.createPost = createPost;
const upDatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const postData = req.body;
    try {
        const upDatePost = yield services_1.PostService.upDatePost(id, postData);
        if (!upDatePost) {
            res.status(404).json({ message: 'Post no found' });
            return;
        }
        res.json(upDatePost);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating post' });
    }
});
exports.upDatePost = upDatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield services_1.PostService.deletePost(id);
        res.json({ message: 'Post successfully removed' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting post' });
    }
});
exports.deletePost = deletePost;
//# sourceMappingURL=post.js.map