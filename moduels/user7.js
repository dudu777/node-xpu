/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user7', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		firstName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		lastName: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'user7',
		timestamps: false
	});
};
