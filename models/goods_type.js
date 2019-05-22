/* jshint indent: 1 */
var Sequelize = require('Sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('goods_type',
    {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		
		type: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
	}, {
		tableName: 'goods_type',
		timestamps: false
	})