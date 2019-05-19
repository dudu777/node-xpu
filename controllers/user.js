var UserInfo = require('../models').UserInfo
var UserAuth = require('../models').UserAuth
var UserContact = require('../models').UserContact
var Untils = require('./untils')  //同级目录下
module.exports = {
    login: function(req, res, next) {
        console.log(req.body)
        var obj = req.body 
        UserInfo.create(obj).then(r => {
            res.json(Untils.setResult(200,'success'))
        }).catch(err=>{
            console.log(err)
            res.json(Untils.setResult(500,'error',err))   
        })
        
    },
    auth: function(req,res,next) {
        console.log(req.body)
        var obj = req.body 
        UserAuth.create(obj).then(r => {
            res.json(Untils.setResult(200,'success'))
        }).catch(err=>{
            console.log(err)
            res.json(Untils.setResult(500,'error',err))   
        })
    },
    getContactById: function(req, res, next) {
        console.log(req.body)
        UserContact.findAll({where:{openID : req.body.openID},attributes:['con_type','con_num']}).then(r => {
            console.log(r)
             res.json(Untils.setResult(200,'success',r))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
        },
       addContactById: function(req, res, next) {
            console.log(req.body)
            var obj = req.body 
            UserContact.create(obj).then(r => {
                console.log(r)
                 res.json(Untils.setResult(200,'success'))
             }).catch(err=>{
                 console.log(err)
                 res.json(Untils.setResult(500,'error',err))   
             })
            }
         

 
}