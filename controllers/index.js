var User = require('../models').User
var Until = require('./untils')  //同级目录下

module.exports = {
    login: function(req, res, next) {
        console.log(req.body)
        var nickname = req.body.nickname;  //统一接收前端的电话号，用户名，或者其他（多方式登录）
        var avatarurl = req.body.avatarurl;
        var openid = req.body.openid;
        var gender = req.body.gender
        var auth = req.body.auth
        var user={
            NICKNAME: nickname,
            AVATARURL: avatarurl,
            OPENID: openid,
            GENDER: gender,
            AUTH: auth
        }    
        User.create(user).then(r => {
            res.json(Until.setResult(200,'success'))
        }).catch(err=>{
            console.log(err)
            res.json(Until.setResult(500,'error',err))   
        })
        
    }
   
}