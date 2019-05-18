/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USER_INFO', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		NICKNAME: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		AVATARURL: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		OPENID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		GENDER: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		AUTH: {
			type: DataTypes.INTEGER(255),
			allowNull: false
		},
		COLLECTION: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'USER_INFO',
		timestamps: false
	});
};
