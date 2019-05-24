/* jshint indent: 1 */
/* jshint indent: 1 */
var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('user_favor',
		{id: {
			type: Sequelize .INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		openID: {
			type: Sequelize .STRING(255),
			allowNull: false
		},
		goodID: {
			type: Sequelize .STRING(255),
			allowNull: false
		},
		favorTime: {
			type: Sequelize.STRING(255),
			allowNull: false
		}
    }
    , {
		tableName: 'user_favor',
		timestamps: false
	});

