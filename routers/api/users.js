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


const multer = require('multer');  
let path = require("path");  
//上传文件配置  
const storage = multer.diskStorage({  
  //文件存储位置  
  destination: (req, file, cb) => {  
    cb(null, path.resolve(__dirname, '../uploads/tmp/'));  
  },  
  //文件名  
  filename: (req, file, cb) => {  
    cb(null, `${Date.now()}_${Math.ceil(Math.random() * 1000)}_multer.${file.originalname.split('.').pop()}`);  
  }  
});  
const uploadCfg = {  
  storage: storage,  
  limits: {  
    //上传文件的大小限制,单位bytes  
    fileSize: 1024 * 1024 * 20  
  }  
};  
router.post("/upload", async (req, res) => {
    console.log(req.file);     
  let upload = multer(uploadCfg).any();  
  upload(req, res, async (err) => {  
    let uploadFile = req.files[0];  
    if (err) {  
      res.json({ path: `//uploads/tmp/${uploadFile.filename}` });  
      console.log(err);  
      return;  
    };  
    
    res.json({ path: `//uploads/tmp/${uploadFile.filename}` });  
  });  
}) 






module.exports = router