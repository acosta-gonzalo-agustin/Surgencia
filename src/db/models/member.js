"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
exports.Member = _1.sequelize.define('Member', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
    },
    imageUrl: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    position: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    info: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    active: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, {
    tableName: 'member',
});
//# sourceMappingURL=member.js.map