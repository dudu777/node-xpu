/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('category', {
		cate_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cate_name: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'category',
		timestamps: false
	});
};
