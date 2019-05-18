var User = require('../models/User').User
var Until = require('./until')  //同级目录下
module.exports = {
    userlist: function(req,res,next) {
        User.findOne({where:{id:req.TOKEN_USER.id}})
            .then(r=> {
            res.send(Until.setResult(200,'success', r))
        })
            .catch(ex=>{
            res.send(Until.setResult(500,'error'))
        })
    }
}