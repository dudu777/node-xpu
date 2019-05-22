var Goods = require('../models').Goods
var GoodType = require('../models').GoodType
var Untils = require('./untils')  //同级目录下
const uuid = require('node-uuid')
var Sequelize = require('sequelize')
var Op = Sequelize.Op
module.exports = {
    getTaglist: function(req, res, next) {
        console.log(req.body)
        GoodType.findAll().then(r => {
           
            res.json(Untils.setResult(200,'success',r))
        }).catch(err=>{
            console.log(err)
            res.json(Untils.setResult(500,'error',err))   
        })
        
    },
    getGoods: function(req, res, next) {
        console.log(req.body)
        Goods.findAll({where:{status: 1}}).then(r => {
           for(var i =0;i<r.length;i++){
                var GoodImg = r[i].img
                r[i].img = GoodImg.split(",")
                r[i].coverImg = GoodImg.split(",")[0]
              }
            res.json(Untils.setResult(200,'success',r))
        }).catch(err=>{
            console.log(err)
            res.json(Untils.setResult(500,'error',err))   
        })
        
    },
    getGoodsByType: function(req, res, next) {
        console.log(req.query)
        Goods.findAll({where:{type:req.query.type,status: 1}}).then(r => {
            
            for(var i =0;i<r.length;i++){
                var GoodImg = r[i].img
                r[i].img = GoodImg.split(",")
                r[i].coverImg = GoodImg.split(",")[0]
              }
              console.log(r)
             res.json(Untils.setResult(200,'success',r))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
         
     },
    publishGood: function(req, res, next) {
        console.log(req.body)
            var coverImg = req.body.img 
        var obj = {
            goodID: uuid.v1(),
            coverImg: coverImg.split(",")[0],
            ...req.body
        }

        console.log(obj)
        Goods.create(obj).then(r => {
            console.log(r)
             res.json(Untils.setResult(200,'success'))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
         
     },
     search: function(req, res, next) {
        console.log(req.query)
        let key = req.query.key
        
        Goods.findAll({where:{
            title: {
                [Op.like]: '%'+key+'%'
            },
            status: 1
        }}).then(r => {
            for(var i =0;i<r.length;i++){
                var GoodImg = r[i].img
                r[i].img = GoodImg.split(",")
                r[i].coverImg = GoodImg.split(",")[0]
              }
            console.log(r)
             res.json(Untils.setResult(200,'success',r))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
         
     },
     getPublishById: function(req, res, next) {
        console.log(req.body)
        Goods.findAll({where:{openID : req.body.openID,status:1}}).then(r => {
            console.log(r)
            for(var i =0;i<r.length;i++){
                var GoodImg = r[i].img
                r[i].img = GoodImg.split(",")
                r[i].coverImg = GoodImg.split(",")[0]
              }
             res.json(Untils.setResult(200,'success',r))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
        },
        cancelPublish: function(req, res, next) {
            console.log(req.body)
            Goods.update({status:0},{where:{goodID : req.body.goodID,openID:req.body.openID}}).then(r => {
                res.json(Untils.setResult(200,'success',))
            }).catch(err=>{
                console.log(err)
                res.json(Untils.setResult(500,'error',err))   
            })
           },
           getGoodsCount:function(req, res, next) {
           Goods.findAll({where:{openID : req.body.openID,status:1}}).then(r => {
            console.log(r)
            for(var i =0;i<r.length;i++){
                var GoodImg = r[i].img
                r[i].img = GoodImg.split(",")
                r[i].coverImg = GoodImg.split(",")[0]
              }
             res.json(Untils.setResult(200,'success',r))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
        },

 
}