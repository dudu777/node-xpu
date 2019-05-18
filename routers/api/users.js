const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../../db/DBConfig');
const userSQL = require('../../db/usersql')
const bodyParser = require('body-parser');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
const pool = mysql.createPool(dbConfig.mysql)
// 响应一个json数据
const responseJSON = function(res,ret){
    if(typeof ret == 'undefind'){
        res.json({code:'-200',msg:'操作失败'})
    }else{
        res.json(ret)
    }
}
var jsonParser = bodyParser.json()

/**
 * $route Get http://localhost:5000/login
 * 登录
 * @dec 返回请求的json数据
 * @access public
 */
router.post('/login',jsonParser,function(req,res,next){
    if(!req.body) return res.sendStatus(400)
    pool.getConnection(function(err,connection){   
        var param = req.body
        connection.query(userSQL.insertInfo,[param.nickname,param.avatarurl,param.openid,param.gender,param.auth],function(err,result){     
            console.log(err)
            if(result){
                result = {code:200,msg:'增加成功'}
            }
            responseJSON(res,result);
            connection.release();
        })
    })
})

/**
 * $route post http://localhost:5000/auth
 * 身份认证
 * post请求需要安装body-parser
 * @dec 返回请求的json数据
 * @access public
 */
router.post('/auth',jsonParser,function(req,res,next){
    if(!req.body) return res.sendStatus(400)
    pool.getConnection(function(err,connection){   
        var param = req.body
        connection.query(userSQL.insertAuth,[param.openid,param.name,param.stuID,param.academy,param.stuClass],function(err,result){     
            console.log(err)
            if(result){
                result = {code:200,msg:'增加成功'}
            }
            responseJSON(res,result);
            connection.release();
        })
    })
})


var ctrls = require('../../controllers')

router.post('/user/login', ctrls.login);
router.post('/stu', ctrls.stu);
//当进入’user/userlist’这个路由是，先调用‘ctrls.Until.checkToken’判断
//是否用户登录，如果已经登录，会在请求req里加上查询到数据，并放行。
//next() //放行后执行后面的用户列表查询方法。
router.get('/user/userlist', ctrls.Until.checkToken, ctrls.Users.userlist);
module.exports = router;
