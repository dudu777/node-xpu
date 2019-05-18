/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USER_CONTACT', {
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
		ADRESS: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		PHNUMBER: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		WXNUMBER: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		QQNUMBER: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'USER_CONTACT',
		timestamps: false
	});
};
