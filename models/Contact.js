var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型 Sequelize
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/ 
 * */
module.exports = db.define('contact',
    {
		contact_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: Sequelize.INTEGER(255),
			allowNull: false,
			primaryKey: true
		},
		type: {
			type: Sequelize.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		number: {
			type: Sequelize.STRING(30),
			allowNull: true
		}
	}, {
		tableName: 'contact',
		timestamps: false
	});