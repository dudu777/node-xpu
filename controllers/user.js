var User = require('../models').User
var Good = require('../models').Good
var Category = require('../models').Category
// var UserContact = require('../models').UserContact
var Untils = require('./untils')  //同级目录下
var request = require('request');

module.exports = {
    // 用户登陆
    login: function (req, res, next) {
        var obj = req.body
        // 请求微信API,获取openid
        request('https://api.weixin.qq.com/sns/jscode2session?appid=wx6dcff2f0f1a73aeb&secret=b80832954c9e4ed7c33dd67c21a2c6a2&grant_type=authorization_code&js_code=' + obj.js_code, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                data = JSON.parse(body.trim()) // 将字符串转化成json格式
                // 先创建数据再查询
                User.create({ openid: data.openid }).then(r => {
                    User.findOne({ where: { openid: data.openid }, attributes: ['user_id'] }).then(e => {
                        data['user_id'] = e.user_id
                        res.json(Untils.setResult(200, 'success', data))
                    }).catch(err => {   
                        res.json(Untils.setResult(500, 'error', err))
                    })

                }).catch(err => {
                    console.log(err)
                })
            } else {
                console.log(error, response, body)
            }
        })
    },
    // 获取分类接口
    getCategory: function (req, res, next) {
        Category.findAll().then(r => {
            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    // 查找所有闲置商品
    getGood: function (req, res, next) {
        Good.findAll().then(r => {
            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },



    // 闲置发布接口
    addGood: function (req, res, next) {
        console.log(req.body)
        Good.create(req.body).then(r => {
            res.json(Untils.setResult(200, 'success'))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },

    //     auth: function(req,res,next) {
    //         console.log(req.body)
    //         var obj = req.body 
    //         UserAuth.create(obj).then(r => {
    //             res.json(Untils.setResult(200,'success'))
    //         }).catch(err=>{
    //             console.log(err)
    //             res.json(Untils.setResult(500,'error',err))   
    //         })
    //     },
    //     getContactById: function(req, res, next) {
    //         console.log(req.body)
    //         UserContact.findAll({where:{openID : req.body.openID},attributes:['con_type','con_num']}).then(r => {
    //             console.log(r)
    //              res.json(Untils.setResult(200,'success',r))
    //          }).catch(err=>{
    //              console.log(err)
    //              res.json(Untils.setResult(500,'error',err))   
    //          })
    //         },
    //        addContactById: function(req, res, next) {
    //             console.log(req.body)
    //             var obj = req.body 
    //             UserContact.create(obj).then(r => {
    //                 console.log(r)
    //                  res.json(Untils.setResult(200,'success'))
    //              }).catch(err=>{
    //                  console.log(err)
    //                  res.json(Untils.setResult(500,'error',err))   
    //              })
    //             }



}