var User = require('../models').User
var Good = require('../models').Good
var Gleaning = require('../models').Gleaning
var Category = require('../models').Category
var Alumni = require('../models').Alumni
// var UserContact = require('../models').UserContact
var Untils = require('./untils')  //同级目录下
var request = require('request');
var Sequelize = require('sequelize')
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
                    User.findOne({ where: { openid: data.openid }, attributes: ['user_id','is_alumni'] }).then(e => {
                        data['user_id'] = e.user_id
                        data['auth'] = e.is_alumni
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
    // 查找报失、拾遗物品
    getGleaningByType: function (req, res, next) {
        Gleaning.findAll({ where: { type: req.query.type, status: 1 } }).then(r => {

            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    // 根据分类查找闲置物品
    getGoodByCate: function (req, res, next) {
        Good.findAll({ where: { Category: req.params.cate_name, status: 1 } }).then(r => {
            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
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
    // 查找所有闲置商品(有效statis:1)
    getGood: function (req, res, next) {
        Good.findAll({ where: { status: 1 } }).then(r => {
            console.log(r)
            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },

    // 闲置发布接口
    addGood: function (req, res, next) {
        Good.create(req.body).then(r => {
            res.json(Untils.setResult(200, 'success'))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    // 存储用户信息接口
    updateUser: function (req, res, next) {
        User.update({...req.body},{ where: { user_id: req.params.user_id }} ).then(r => {
            res.json(Untils.setResult(200, 'success'))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    // 报失/拾遗发布接口
    addGleaning: function (req, res, next) {
        Gleaning.create(req.body).then(r => {
            res.json(Untils.setResult(200, 'success'))
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    // 校友认证接口
    addAlumni: function (req, res, next) {
        console.log(req.body)
        Alumni.create(req.body).then(r => {
            User.update({is_alumni:1},{ where: { user_id: req.body.user_id }} ).then(e=>{     
            res.json(Untils.setResult(200, 'success'))
            })
        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    //查询认证新
    getAlumni: function (req, res, next) {
        
        Alumni.findOne({ where: { user_id: req.params.user_id} }).then(r => {
res.json(Untils.setResult(200, 'success',r))

        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    // 数据统计
    getCount: function (req, res, next) {
        data = [{ good_num:null,gln0_num:null,gln1_num:null }]
        Good.findAll({ where: { user_id: req.params.user_id }, attributes: [[Sequelize.fn('COUNT', Sequelize.col('good_id')), 'good_num']] }).then(r => {
            data[0].good_num = r[0].good_num
            Gleaning.findAll({ where: { user_id: req.params.user_id, type: 0 }, attributes: [[Sequelize.fn('COUNT', Sequelize.col('gln_id')), 'gln0_num']] }).then(e => {
                data[0].gln0_num = e[0].gln0_num
                Gleaning.findAll({ where: { user_id: req.params.user_id, type: 1 }, attributes: [[Sequelize.fn('COUNT', Sequelize.col('gln_id')), 'gln1_num']] }).then(f => {              
                    data[0].gln1_num = f[0].gln1_num
                    res.json(Untils.setResult(200, 'success', data))

                })

            })


        }).catch(err => {
            res.json(Untils.setResult(500, 'error', err))
        })
    },


    timestampFormat: function ( timestamp ) {
        function zeroize( num ) {
            return (String(num).length == 1 ? '0' : '') + num;
        }
    
        var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
        var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
    
        var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
        var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象
    
        var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
        var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
    
        if ( timestampDiff < 60 ) { // 一分钟以内
            return "刚刚";
        } else if( timestampDiff < 3600 ) { // 一小时前之内
            return Math.floor( timestampDiff / 60 ) + "分钟前";
        } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
            return '今天' + zeroize(H) + ':' + zeroize(i);
        } else {
            var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
            if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
                return '昨天' + zeroize(H) + ':' + zeroize(i);
            } else if ( curDate.getFullYear() == Y ) {
                return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
            } else {
                return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
            }
        }
    }
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