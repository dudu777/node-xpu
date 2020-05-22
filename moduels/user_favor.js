/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_favor', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		openID: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		goodID: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		favorTime: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'user_favor',
		timestamps: false
	});
};
