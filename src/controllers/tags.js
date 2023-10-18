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
exports.deleteTag = exports.upDateTag = exports.createTag = exports.getTags = exports.getTagById = void 0;
const services_1 = require("../services");
//Get by id
const getTagById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tag = yield services_1.TagService.getTagById(id);
        if (!tag) {
            res.status(404).json({ message: 'Tag not found' });
            return;
        }
        res.json(tag);
    }
    catch (error) {
        res.status(500).json({ error: 'Error when getting a tag' });
    }
});
exports.getTagById = getTagById;
const getTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield services_1.TagService.getAllTags();
        res.json(tags);
    }
    catch (error) {
        res.status(500).json({ error: 'Error when getting tags' });
    }
});
exports.getTags = getTags;
const createTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tagData = req.body;
    try {
        const newTag = yield services_1.TagService.createTag(tagData);
        res.json(newTag);
    }
    catch (error) {
        res.status(500).json({ message: 'Error when creating tag' });
    }
});
exports.createTag = createTag;
const upDateTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tagData = req.body;
    try {
        const upDateTag = yield services_1.TagService.upDateTag(id, tagData);
        if (!upDateTag) {
            res.status(404).json({ message: 'Tag not found' });
            return;
        }
        res.json(upDateTag);
    }
    catch (error) {
        res.status(500).json({ error: 'Error when updating a tag' });
    }
});
exports.upDateTag = upDateTag;
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield services_1.TagService.deleteTag(id);
        res.json({ message: 'Tag deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error when deleting a tag' });
    }
});
exports.deleteTag = deleteTag;
//# sourceMappingURL=tags.js.map