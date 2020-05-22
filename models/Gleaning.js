var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型 Sequelize
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/ 
 * */
module.exports = db.define('gleaning',
    {
        user_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		gln_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		gln_name: {
			type: Sequelize.STRING(200),
			allowNull: false
		},
		image: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		description: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		gln_time: {
			type: Sequelize.STRING(50),
			allowNull: true
		},
		address: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
		is_public: {
			type: Sequelize.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		contact: {
			type: Sequelize.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		create_time: {
			type: Sequelize.STRING(50),
			allowNull: true,
			defaultValue: Sequelize.NOW
		},
		failure_time: {
			type: Sequelize.DATE,
			allowNull: true
		},
		type: {
			type: Sequelize.CHAR(1),
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: Sequelize.CHAR(1),
			allowNull: true,
			defaultValue: '1'
		}
	}, {
		tableName: 'gleaning',
		timestamps: false
	});