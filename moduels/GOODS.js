/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('GOODS', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		GOODID: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		OPENID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		GOODNAME: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TYPE: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		PICTURE: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TAG: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TRANSACTION: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ISNEW: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CALLPRICE: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		MARKETPRICE: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		PUBLICTIME: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'GOODS',
		timestamps: false
	});
};
