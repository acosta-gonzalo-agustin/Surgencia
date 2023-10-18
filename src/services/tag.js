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
exports.deleteTag = exports.upDateTag = exports.createTag = exports.getAllTags = exports.getTagById = void 0;
const tag_1 = require("../db/models/tag");
const getTagById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return tag_1.Tag.findByPk(id);
});
exports.getTagById = getTagById;
const getAllTags = () => __awaiter(void 0, void 0, void 0, function* () {
    return tag_1.Tag.findAll();
});
exports.getAllTags = getAllTags;
const createTag = (tagData) => __awaiter(void 0, void 0, void 0, function* () {
    return tag_1.Tag.create(tagData);
});
exports.createTag = createTag;
const upDateTag = (id, tagData) => __awaiter(void 0, void 0, void 0, function* () {
    const tag = yield tag_1.Tag.findByPk(id);
    if (!tag)
        return null;
    Object.assign(tag, tagData);
    yield tag.save();
    return tag;
});
exports.upDateTag = upDateTag;
const deleteTag = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tag = yield tag_1.Tag.findByPk(id);
    if (!tag)
        return null;
    yield tag.destroy();
});
exports.deleteTag = deleteTag;
//# sourceMappingURL=tag.js.map