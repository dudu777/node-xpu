var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型 Sequelize
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/ 
 * */
module.exports = db.define('feedback',
    {
		user_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		fdb_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		article: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		create_time: {
			type: Sequelize.STRING(50),
			allowNull: true,
		}
	}, {
		tableName: 'feedback',
		timestamps: false
	});