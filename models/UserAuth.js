/* jshint indent: 1 */
var Sequelize = require('Sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('stu_auth',
    {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		openID: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		name: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		stuID: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		academy: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		stuClass: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		date: {
			type: Sequelize.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'stu_auth',
		timestamps: false
	});