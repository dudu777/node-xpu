var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型 Sequelize
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/ 
 * */
module.exports = db.define('category',
    {
		cate_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cate_name: {
			type: Sequelize.STRING(10),
			allowNull: false
		},
		description: {
			type: Sequelize.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'category',
		timestamps: false
	});