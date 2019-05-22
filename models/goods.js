/* jshint indent: 1 */
var Sequelize = require('Sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('goods',
    {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		goodID: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		openID: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		title: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		description: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		type: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		img: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		tag: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		isNew: {
			type: Sequelize.INTEGER(1),
			allowNull: false
		},
		buyPrice: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		cellPrice: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		isBargain: {
			type: Sequelize.INTEGER(1),
			allowNull: false
		},
		publishTime: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		isWatch: {
			type: Sequelize.INTEGER(1),
			allowNull: true
		},
		status: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		contact: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		address: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		coverImg: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
	}, {
		tableName: 'goods',
		timestamps: false
	})