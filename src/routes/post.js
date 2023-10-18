"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const postValidation_1 = require("../validators/postValidation");
const router = (0, express_1.Router)();
// api/posts?page=1&perPage=10
// "page=" indica en cuantas partes se divide la respuesta desde el endpoint
// "perPage=" indica la cantidad de respuestas por paginacion
// Por default en el controller del post, page = 1 y perPage = 10
router.get('/', controllers_1.PostController.getPosts);
router.post('/', postValidation_1.validatePost, controllers_1.PostController.createPost);
router.put('/:id', postValidation_1.validatePost, controllers_1.PostController.upDatePost);
router.delete('/:id', controllers_1.PostController.deletePost);
router.get('/search', controllers_1.PostController.getPostsByKeyword);
router.get('/:id', controllers_1.PostController.getPost);
exports.default = router;
//# sourceMappingURL=post.js.map