"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const user_1 = require("./user");
exports.Post = _1.sequelize.define('Post', {
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
    imageUrl: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    summary: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    body: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: 'user',
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
    tableName: 'post',
});
user_1.User.hasMany(exports.Post, { foreignKey: 'userId' });
exports.Post.belongsTo(user_1.User, { foreignKey: 'userId' });
//# sourceMappingURL=post.js.map