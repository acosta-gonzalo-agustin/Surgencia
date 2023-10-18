"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
exports.Banner = _1.sequelize.define('Banner', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
    },
    order: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    info: {
        type: sequelize_1.DataTypes.TEXT,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, 
//Added line to fix sequelize default table name
{
    tableName: 'banner',
});
//# sourceMappingURL=banner.js.map