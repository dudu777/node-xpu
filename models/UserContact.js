/* jshint indent: 1 */
var Sequelize = require('Sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('user_contact',
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
		con_type: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		con_num: {
			type: Sequelize.STRING(255),
			allowNull: true
        }
    },
        {
		tableName: 'user_contact',
		timestamps: false
	});