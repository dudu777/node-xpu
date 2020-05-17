/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('contact', {
		contact_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(255),
			allowNull: false,
			primaryKey: true
		},
		type: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		number: {
			type: DataTypes.STRING(30),
			allowNull: true
		}
	}, {
		tableName: 'contact',
		timestamps: false
	});
};
