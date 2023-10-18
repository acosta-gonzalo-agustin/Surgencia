"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUpload = void 0;
const errors_1 = require("../utils/errors");
const multer_1 = __importDefault(require("multer"));
const path_1 = require("path");
const MIMETYPES = ['image/jpeg', 'image/png'];
exports.multerUpload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: 'public/images',
        filename: (req, file, cb) => {
            const fileExtension = (0, path_1.extname)(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            cb(null, `${fileName}-${Date.now()}${fileExtension}`);
        },
    }),
    fileFilter: (_req, file, cb) => {
        if (MIMETYPES.includes(file.mimetype))
            cb(null, true);
        else
            cb(new errors_1.ClientError(`Only ${MIMETYPES.join(' ')} mimetypes are allowed`, 400));
    },
    limits: {
        fieldSize: 10000000,
    },
});
//# sourceMappingURL=imageSave.js.map