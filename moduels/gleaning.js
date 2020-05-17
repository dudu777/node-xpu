/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gleaning', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		gln_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		gln_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		image: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		gln_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		failure_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		type: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'gleaning',
		timestamps: false
	});
};
