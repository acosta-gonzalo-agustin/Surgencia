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
exports.deleteBanner = exports.updateBanner = exports.createBanner = exports.getBannerById = exports.getAllBanners = void 0;
const banner_1 = require("../db/models/banner");
//Service to get all banners
const getAllBanners = () => __awaiter(void 0, void 0, void 0, function* () {
    return banner_1.Banner.findAll();
});
exports.getAllBanners = getAllBanners;
//Service to get a banner by ID
const getBannerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return banner_1.Banner.findByPk(id);
});
exports.getBannerById = getBannerById;
//Service to create a banner
const createBanner = (bannerData) => __awaiter(void 0, void 0, void 0, function* () {
    return banner_1.Banner.create(bannerData);
});
exports.createBanner = createBanner;
//Service to update a banner
const updateBanner = (id, bannerData) => __awaiter(void 0, void 0, void 0, function* () {
    const banner = yield banner_1.Banner.findByPk(id);
    if (!banner) {
        return null;
    }
    Object.assign(banner, bannerData);
    yield banner.save();
    return banner;
});
exports.updateBanner = updateBanner;
//Service to delete a banner
const deleteBanner = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const banner = yield banner_1.Banner.findByPk(id);
    if (!banner) {
        return null;
    }
    yield banner.destroy();
});
exports.deleteBanner = deleteBanner;
//# sourceMappingURL=banner.js.map