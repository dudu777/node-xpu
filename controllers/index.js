var User = require('../models').User
var Until = require('./until')  //同级目录下
var Users = require('./user')
var Stu = require('../models').Stu
module.exports = {
    login: function(req, res, next) {
        var username = req.body.username;  //统一接收前端的电话号，用户名，或者其他（多方式登录）
        var password = req.body.password;
        var param={
            $or:{   //$or  sequelize提供的 或者查询
                phone:username,
                id_card:username
            },
            password:password
        }
        User.findOne({where:param}).then(r=>{
            res.json(Until.setResult(200,'success', Until.setToken(r)))
        }).catch(err=>{
            res.json(Until.setResult(500,'error',err))
        })
    },
    Until,
    Users,
    stu: function(req,res,next) {
        console.log(req.query)
        Stu.findAll({where:{id:req.query.id}})
            .then(r=> {
            res.json(Until.setResult(200,'success', r))
        })
            .catch(ex=>{
            res.json(Until.setResult(500,'error'))
        })
    }
}