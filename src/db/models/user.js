"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
exports.User = _1.sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
        unique: true
    },
    password: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    active: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'user',
});
//# sourceMappingURL=user.js.map