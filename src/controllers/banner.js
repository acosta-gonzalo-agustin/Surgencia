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
exports.deleteBanner = exports.updateBanner = exports.createBanner = exports.getBanner = exports.getBanners = void 0;
const BannerService = __importStar(require("../services/banner"));
//List all banners
const getBanners = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const banners = yield BannerService.getAllBanners();
        res.json(banners);
    }
    catch (error) {
        res.status(500).json({ error: 'Error getting banners' });
    }
});
exports.getBanners = getBanners;
//List banners by ID
const getBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const banner = yield BannerService.getBannerById(id);
        if (!banner) {
            res.status(404).json({ message: 'Banner not found' });
            return;
        }
        res.json(banner);
    }
    catch (error) {
        res.status(500).json({ error: 'Error getting banner' });
    }
});
exports.getBanner = getBanner;
//Create a banner
const createBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bannerData = req.body;
    try {
        const newBanner = yield BannerService.createBanner(bannerData);
        res.json(newBanner);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating banner' });
    }
});
exports.createBanner = createBanner;
//Update a banner
const updateBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bannerData = req.body;
    try {
        const updatedBanner = yield BannerService.updateBanner(id, bannerData);
        if (!updatedBanner) {
            res.status(404).json({ message: 'Banner not found' });
            return;
        }
        res.json(updatedBanner);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating banner' });
    }
});
exports.updateBanner = updateBanner;
//Delete a banner
const deleteBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield BannerService.deleteBanner(id);
        res.json({ message: 'Banner successfully removed' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting banner' });
    }
});
exports.deleteBanner = deleteBanner;
//# sourceMappingURL=banner.js.map