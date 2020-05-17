var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型 Sequelize
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/ 
 * */
module.exports = db.define('good',
    {
        user_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		good_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		good_name: {
			type: Sequelize.STRING(200),
			allowNull: false
		},
		image: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		description: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		sell_price: {
			type: Sequelize.STRING(10),
			allowNull: false
		},
		bid_price: {
			type: Sequelize.STRING(10),
			allowNull: true
		},
		category: {
			type: Sequelize.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		is_new: {
			type: Sequelize.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		is_bargain: {
			type: Sequelize.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		is_free: {
			type: Sequelize.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		tag: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
		trade_place: {
			type: Sequelize.STRING(50),
			allowNull: true
		},
		contact: {
			type: Sequelize.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		status: {
			type: Sequelize.CHAR(1),
			allowNull: true,
			defaultValue: '1'
		},
		create_time: {
			type: Sequelize.DATE,
			allowNull: true,
			defaultValue: Sequelize.NOW
		},
		update_time: {
			type: Sequelize.DATE,
			allowNull: true
		}
	}, {
		tableName: 'good',
		timestamps: false
	});