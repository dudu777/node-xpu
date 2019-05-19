/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_info', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nickName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		avatarUrl: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		openID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		gender: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		auth: {
			type: DataTypes.INTEGER(255),
			allowNull: false,
			defaultValue: '0'
		},
		favor: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'user_info',
		timestamps: false
	});
};
