var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('user_info',
    {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nickName: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		avatarUrl: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		openID: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		gender: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		auth: {
			type: Sequelize.INTEGER(255),
			allowNull: false,
			defaultValue: '0'
		},
		favor: {
			type: Sequelize.STRING(255),
			allowNull: true
		}
	
	}, {
		tableName: 'user_info',
		timestamps: false
	});
