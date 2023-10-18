"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const user_1 = require("./user");
const category_1 = require("./category");
exports.Material = _1.sequelize.define('Material', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        unique: true,
    },
    title: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    author: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: 'user',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    categoryId: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: 'category',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    active: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, {
    tableName: 'material',
});
user_1.User.hasMany(exports.Material, { foreignKey: 'author' });
exports.Material.belongsTo(user_1.User, { foreignKey: 'author' });
category_1.Category.hasMany(exports.Material, { foreignKey: 'categoryId' });
exports.Material.belongsTo(category_1.Category, { foreignKey: 'categoryId' });
//# sourceMappingURL=material.js.map