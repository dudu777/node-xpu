/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_favor', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		opeinID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		goodID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		favorTime: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'user_favor',
		timestamps: false
	});
};
