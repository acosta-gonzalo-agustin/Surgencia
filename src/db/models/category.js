"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
exports.Category = _1.sequelize.define('Category', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    tableName: 'category',
});
//# sourceMappingURL=category.js.map