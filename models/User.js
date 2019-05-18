var Sequelize = require('sequelize')  //引入sequelize模块
var db = require('../db/db.js')  //引入数据库
/*
 * 定义表的映射模型
 * https://sequelize.readthedocs.io/en/v3/docs/models-definition/
 * */
module.exports = db.define('tb_user',
    {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        id_card: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)