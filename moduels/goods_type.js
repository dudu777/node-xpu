/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goods_type', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'goods_type',
		timestamps: false
	});
};
