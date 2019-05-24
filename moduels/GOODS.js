/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('goods', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		goodID: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		openID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		img: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		tag: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		isNew: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		buyPrice: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cellPrice: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		isBargain: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		publishTime: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		isWatch: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		coverImg: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		contact: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		favor: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'goods',
		timestamps: false
	});
};
