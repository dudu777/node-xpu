/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_contact', {
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
		address: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		phNum: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		wxNum: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		qqNum: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'user_contact',
		timestamps: false
	});
};
