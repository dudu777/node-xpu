var Goods = require('../models').Goods
var GoodType = require('../models').GoodType
var UserFavor = require('../models').UserFavor
var Untils = require('./untils')  //同级目录下
const uuid = require('node-uuid')
var Sequelize = require('sequelize')
var Op = Sequelize.Op
module.exports = {
    getTaglist: function (req, res, next) {
        //console.log(req.body)
        GoodType.findAll().then(r => {

            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            console.log(err)
            res.json(Untils.setResult(500, 'error', err))
        })

    },
    getGoods: function (req, res, next) {
        //console.log(req.body)
        Goods.findAll({ where: { status: 1 } }).then(r => {
            for (var i = 0; i < r.length; i++) {
                var GoodImg = r[i].img
                r[i].img = GoodImg.split(",")
                r[i].coverImg = GoodImg.split(",")[0]
            }
            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            console.log(err)
            res.json(Untils.setResult(500, 'error', err))
        })

    },
    getGoodsByType: function (req, res, next) {
      //  console.log(req.query)
      
        var page = req.query.page
        var obj = {
            'offset': (page - 1) * 10,
            'limit': 6,
            attributes: { exclude: ['[openID'] },
            where: {
                type: req.query.type,
                status: 1
            }
        }
        Goods.findAndCountAll(obj).then(r => {
           // console.log(r)
            for(var i =0;i<r.length;i++){
                var GoodImg = r[i].img
                r[i].img = GoodImg.split(",")
                r[i].coverImg = GoodImg.split(",")[0]
              }
            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            console.log(err)
            res.json(Untils.setResult(500, 'error', err))
        })

    },
    publishGood: function (req, res, next) {
      //  console.log(req.body)
        var coverImg = req.body.img
        var obj = {
            goodID: uuid.v1(),
            coverImg: coverImg.split(",")[0],
            ...req.body
        }

      //  console.log(obj)
        Goods.create(obj).then(r => {
         //   console.log(r)
            res.json(Untils.setResult(200, 'success'))
        }).catch(err => {
            console.log(err)
            res.json(Untils.setResult(500, 'error', err))
        })

    },
    search: function (req, res, next) {
       // console.log(req.query)
        let key = req.query.key

        Goods.findAll({
            where: {
                title: {
                    [Op.like]: '%' + key + '%'
                },
                status: 1
            }
        }).then(r => {
            for (var i = 0; i < r.length; i++) {
                var GoodImg = r[i].img
                r[i].img = GoodImg.split(",")
                r[i].coverImg = GoodImg.split(",")[0]
            }
          //  console.log(r)
            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            console.log(err)
            res.json(Untils.setResult(500, 'error', err))
        })

    },
    getPublishById: function (req, res, next) {
       // console.log(req.body)
        Goods.findAll({ where: { openID: req.body.openID, status: 1 } }).then(r => {
            console.log(r)
            // for (var i = 0; i < r.length; i++) {
            //     var GoodImg = r[i].img
            //     r[i].img = GoodImg.split(",")
            //     r[i].coverImg = GoodImg.split(",")[0]
            // }
            
            res.json(Untils.setResult(200, 'success', r))
        }).catch(err => {
            console.log(err)
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    
    cancelPublish: function (req, res, next) {
       // console.log(req.body)
        Goods.update({ status: 0 }, { where: { goodID: req.body.goodID, openID: req.body.openID } }).then(r => {
            res.json(Untils.setResult(200, 'success'))
        }).catch(err => {
            console.log(err)
            res.json(Untils.setResult(500, 'error', err))
        })
    },
    
     getTradeById: function(req, res, next) {
       // console.log(req.body)
        Goods.findAll({where:{openID : req.body.openID,status:0}}).then(r => {
           // console.log(r)

             res.json(Untils.setResult(200,'success',r))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
        },
        favor: function(req, res, next) {
            console.log(req.body)
            if(req.body.type == 1){
                // 取消收藏co
                
                UserFavor.destroy({where:{openID:req.body.openID,goodID:req.body.goodID}}).then(r => {
                  //  console.log(r)
                    console.log('取消收藏')
                        res.json(Untils.setResult(200, 'success'))
                })
            }else{
                
                // 收藏
                var  obj = {
                    openID:req.body.openID,
                    goodID:req.body.goodID,
                    favorTime:req.body.favorTime
                }
                UserFavor.create(obj).then(r => {
                   // console.log(r)
                    console.log('收藏')
                    res.json(Untils.setResult(200, 'success'))
                }).catch(err => {
                    console.log(err)
                    res.json(Untils.setResult(500, 'error', err))
                })
            }

           
            },
            getUserfavor: function(req, res, next) {
                //console.log(req.body)
                UserFavor.findAll({where:{openID : req.body.openID}}).then(r => {
                   // console.log('getuserfavor',r)
                    if(r.length){
                        console.log('r不是是空数组',r[0].goodID)
                        var arr = []
                            for(var i=0;i<r.length;i ++){
                                arr[i] = r[i].goodID
                            }
                        
                        console.log('arr',arr)
                            Goods.findAll({where:
                               { goodID:arr}
                            }).then(re => {
                                console.log('arr传过去',re)
                         res.json(Untils.setResult(200,'success',re))
                            })
    
                        
                    }else{
                        console.log('r是空数组')
                        res.json(Untils.setResult(200,'nofavor',r))

                    }
                    
        
                 }).catch(err=>{
                     console.log(err)
                     
                })
               
                },
                getFavorById: function(req, res, next) {
                    console.log(req.body)
                    Goods.findAll({where:{goodID : req.body.openID}}).then(r => {
                        console.log(r)           
                         res.json(Untils.setResult(200,'success',r))
                     }).catch(err=>{
                         console.log(err)
                         res.json(Untils.setResult(500,'error',err))   
                     })
                    },
    


}