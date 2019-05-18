var User = require('../models/User').User
var Untils = require('./untils')  //同级目录下
module.exports = {
    
    userlist: function(req,res,next) {
        User.findOne({where:{id:req.TOKEN_USER.id}})
            .then(r=> {
            res.send(Untils.setResult(200,'success', r))
        })
            .catch(ex=>{
            res.send(Untils.setResult(500,'error'))
        })
    }
}