"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const memberValidation_1 = require("../validators/memberValidation");
const router = express_1.default.Router();
router.post('/', memberValidation_1.validateMember, middlewares_1.memberValidation.memberValidation, controllers_1.membersController.createMember);
router.get('/', controllers_1.membersController.getMembers);
router.get('/:id', controllers_1.membersController.getMemberById);
router.put('/:id', memberValidation_1.validateMember, controllers_1.membersController.updateMember);
router.delete('/:id', controllers_1.membersController.deleteMember);
exports.default = router;
//# sourceMappingURL=members.js.map