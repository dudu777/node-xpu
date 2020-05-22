/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('good', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		good_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		good_name: {
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
		sell_price: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		bid_price: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		category: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		is_new: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		is_bargain: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		is_public: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		is_free: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		tag: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		trade_place: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		contact: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		status: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: '1'
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
		tableName: 'good',
		timestamps: false
	});
};
