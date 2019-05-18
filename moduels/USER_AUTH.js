/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USER_AUTH', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		OPENID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		USERNAME: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		STUDENTID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ACADEMY: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CLASS: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		DATE: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'USER_AUTH',
		timestamps: false
	});
};
