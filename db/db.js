const Sequelize = require('sequelize')
// database数据库名称   name 用户  password密码
const sequelize = new Sequelize('xpu','root','dupingping1215', { 
    host: "47.96.230.197",   //数据库地址
    dialect: 'mysql',  // 驱动
    query: { raw:true }, // 设置为 true，即可返回源数据
    pool: { // 连接池
        max: 5,
        min :0,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
})
module.exports = sequelize