/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wx_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		avatar: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		gender: {
			type: DataTypes.CHAR(1),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		province: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		language: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		openid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		is_alumni: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'user',
		timestamps: false
	});
};
