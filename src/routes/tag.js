"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const tagValidation_1 = require("../validators/tagValidation");
const router = express_1.default.Router();
router.get('/', controllers_1.TagController.getTags);
router.post('/', tagValidation_1.validateTag, controllers_1.TagController.createTag);
router.put('/:id', tagValidation_1.validateTag, controllers_1.TagController.upDateTag);
router.delete('/:id', controllers_1.TagController.deleteTag);
router.get('/:id', controllers_1.TagController.getTagById);
exports.default = router;
//# sourceMappingURL=tag.js.map