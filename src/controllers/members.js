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
exports.deleteMember = exports.updateMember = exports.getMemberById = exports.getMembers = exports.createMember = void 0;
const member_1 = require("../db/models/member");
const errors_1 = require("../utils/errors");
const createMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Data from the request body
        const { imageUrl, firstName, lastName, position, email, info, active } = req.body;
        // Create a new member using the given data
        const newMember = yield member_1.Member.create({
            imageUrl,
            firstName,
            lastName,
            position,
            email,
            info,
            active,
        });
        res.status(201).json(newMember);
    }
    catch (error) {
        console.error('Error creating Member:', error);
        next(new errors_1.ServerError('The member could not be created', 500));
    }
});
exports.createMember = createMember;
// Get all the members
const getMembers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield member_1.Member.findAll();
        res.json(members);
    }
    catch (error) {
        next(new errors_1.ServerError('The members could not be retrieved', 500));
    }
});
exports.getMembers = getMembers;
// Get a member by ID
const getMemberById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const member = yield member_1.Member.findByPk(id);
        if (member) {
            res.json(member);
        }
        else {
            res.status(404).json({ error: 'Member not found' });
        }
    }
    catch (error) {
        next(new errors_1.ServerError('Error when retrieving a member', 500));
    }
});
exports.getMemberById = getMemberById;
// Update a member by ID
const updateMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const [updatedRows] = yield member_1.Member.update(req.body, { where: { id } });
        if (updatedRows === 1) {
            res.json({ message: 'Member updated successfully' });
        }
        else {
            res.status(404).json({ error: 'Member not found' });
        }
    }
    catch (error) {
        next(new errors_1.ServerError('Error when updating a member', 500));
    }
});
exports.updateMember = updateMember;
// Delete a member by ID
const deleteMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedRows = yield member_1.Member.destroy({ where: { id } });
        if (deletedRows === 1) {
            res.json({ message: 'Member deleted sucessfully' });
        }
        else {
            res.status(404).json({ error: 'Member not found' });
        }
    }
    catch (error) {
        next(new errors_1.ServerError('Error when deleting a member', 500));
    }
});
exports.deleteMember = deleteMember;
//# sourceMappingURL=members.js.map