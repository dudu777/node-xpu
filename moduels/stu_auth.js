/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stu_auth', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		openID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		stuID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		academy: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		stuClass: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		date: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'stu_auth',
		timestamps: false
	});
};
