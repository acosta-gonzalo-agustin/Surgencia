"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const post_1 = require("./post");
exports.Tag = _1.sequelize.define('Tag', {
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
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    tableName: 'tag',
});
// many-to-many association
exports.Tag.belongsToMany(post_1.Post, { through: 'post_tag', foreignKey: 'tagId' });
post_1.Post.belongsToMany(exports.Tag, { through: 'post_tag', foreignKey: 'postId' });
//# sourceMappingURL=tag.js.map