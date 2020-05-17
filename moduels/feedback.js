/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('feedback', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		fdb_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		article: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'feedback',
		timestamps: false
	});
};
