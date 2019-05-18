const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

/**
 * $route Get http://localhost:5000/login
 * 登录
 * @dec 返回请求的json数据
 * @access public
 */
// router.post('/login',jsonParser,function(req,res,next){
//     if(!req.body) return res.sendStatus(400)
//     pool.getConnection(function(err,connection){   
//         var param = req.body
//         connection.query(userSQL.insertInfo,[param.nickname,param.avatarurl,param.openid,param.gender,param.auth],function(err,result){     
//             console.log(err)
//             if(result){
//                 result = {code:200,msg:'增加成功'}
//             }
//             responseJSON(res,result);
//             connection.release();
//         })
//     })
// })

/**
 * $route post http://localhost:5000/auth
 * 身份认证
 * post请求需要安装body-parser
 * @dec 返回请求的json数据
 * @access public
 */
// router.post('/auth',jsonParser,function(req,res,next){
//     if(!req.body) return res.sendStatus(400)
//     pool.getConnection(function(err,connection){   
//         var param = req.body
//         connection.query(userSQL.insertAuth,[param.openid,param.name,param.stuID,param.academy,param.stuClass],function(err,result){     
//             console.log(err)
//             if(result){
//                 result = {code:200,msg:'增加成功'}
//             }
//             responseJSON(res,result);
//             connection.release();
//         })
//     })
// })


var ctrls = require('../../controllers')

router.post('/login', jsonParser,ctrls.login);
module.exports = router;
