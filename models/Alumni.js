var Sequelize = require('sequelize')  //引入Sequelizee模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型 
 * https://Sequelizee.readthedocs.io/en/v3/docs/models-definition/ 
 * */
module.exports = db.define('alumni',
    {
		userid: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		alumni_id: {
			type: Sequelize.INTEGER(11),
			allowNull: false
		},
		faculty: {
			type: Sequelize.STRING(20),
			allowNull: true,
			defaultValue: '0'
		},
		major: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		class: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		number: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		alm_name: {
			type: Sequelize.STRING(20),
			allowNull: true
		},
		create_time: {
			type: Sequelize.DATE,
			allowNull: true
		}
	}, {
		tableName: 'alumni',
		timestamps: false // 删除时间和修改时间是否要记录
	});