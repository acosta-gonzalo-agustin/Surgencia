"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BannerController = __importStar(require("../controllers/banner"));
const bannerValidation_1 = require("../validators/bannerValidation");
const router = (0, express_1.Router)();
router.get('/', BannerController.getBanners);
router.post('/', bannerValidation_1.validateBanner, BannerController.createBanner);
router.put('/:id', bannerValidation_1.validateBanner, BannerController.updateBanner);
router.delete('/:id', BannerController.deleteBanner);
router.get('/:id', BannerController.getBanner);
exports.default = router;
//# sourceMappingURL=banner.js.map