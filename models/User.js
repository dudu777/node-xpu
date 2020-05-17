var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型 Sequelize
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/ 
 * */
module.exports = db.define('user',
    {
		user_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wx_name: {
			type: Sequelize.STRING(50),
			allowNull: true
		},
		avatar: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		gender: {
			type: Sequelize.CHAR(1),
			allowNull: true
		},
		country: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		province: {
			type: Sequelize.STRING(10),
			allowNull: true
		},
		city: {
			type: Sequelize.STRING(10),
			allowNull: true
		},
		language: {
			type: Sequelize.STRING(10),
			allowNull: true
		},
		openid: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		is_alumni: {
			type: Sequelize.CHAR(1),
			allowNull: false,
			defaultValue: '0'
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
		tableName: 'user',
		timestamps: false
	});