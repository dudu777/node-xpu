const Sequelize = require('sequelize')
// database数据库名称   name 用户  password密码
const sequelize = new Sequelize('xpu','root','dupingping', { 
    host: "47.106.139.243",   //数据库地址
    dialect: 'mysql',  
    pool: {
        max: 5,
        min :0,
        idle: 10000
    }
})
module.exports = sequelize