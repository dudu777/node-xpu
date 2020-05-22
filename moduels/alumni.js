/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('alumni', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		alumni_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		faculty: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: '0'
		},
		major: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		class: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		number: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		alm_name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'alumni',
		timestamps: false
	});
};
