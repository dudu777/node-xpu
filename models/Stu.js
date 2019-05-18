var Sequelize = require('sequelize')  //引入sequelize模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://sequelize.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('tb_stu',
    {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
    word: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
    },
    {
        timestamps: false
    }
)