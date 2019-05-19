var Goods = require('../models').Goods
var Untils = require('./untils')  //同级目录下
const uuid = require('node-uuid')
var Sequelize = require('sequelize')
var Op = Sequelize.Op
module.exports = {

    getGoods: function(req, res, next) {
        console.log(req.body)
        Goods.findAll().then(r => {
           
            res.json(Untils.setResult(200,'success',r))
        }).catch(err=>{
            console.log(err)
            res.json(Untils.setResult(500,'error',err))   
        })
        
    },
    getGoodsByType: function(req, res, next) {
        console.log(req.query)
        Goods.findAll({where:{type:req.query.type}}).then(r => {
            console.log(r)
             res.json(Untils.setResult(200,'success',r))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
         
     },
    publishGood: function(req, res, next) {
        console.log(req.body)
        var obj = {
            goodID: uuid.v1(),
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
            }
        }}).then(r => {
            console.log(r)
             res.json(Untils.setResult(200,'success',r))
         }).catch(err=>{
             console.log(err)
             res.json(Untils.setResult(500,'error',err))   
         })
         
     },
 
}