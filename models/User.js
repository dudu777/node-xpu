var Sequelize = require('sequelize')  //引入sequelize模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://sequelize.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('USER_INFO',
    {
        ID: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		NICKNAME: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		AVATARURL: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		OPENID: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		GENDER: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		AUTH: {
			type: Sequelize.INTEGER(255),
			allowNull: false
		},
		COLLECTION: {
			type: Sequelize.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'USER_INFO',
		timestamps: false
	});
