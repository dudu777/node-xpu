var login =require('./user').login
var auth = require('./user').auth
var getGoods = require('./good').getGoods
var getGoodsByType = require('./good').getGoodsByType
var publishGood = require('./good').publishGood
var getPublishById =require('./good').getPublishById
var getTradeById =require('./good').getTradeById
var favor = require('./good').favor
var  getUserfavor = require('./good').getUserfavor

var getTaglist = require('./good').getTaglist
var getContactById = require('./user').getContactById
var addContactById = require('./user').addContactById
var search = require('./good').search
var cancelPublish = require('./good').cancelPublish
// var auth = require('./user').auth

module.exports = {
    login,
    auth,
    getGoods,
    getGoodsByType,
    publishGood,
    getContactById,
    addContactById,
    search,
    getPublishById,
   getTradeById,
    getTaglist,
    cancelPublish,
    favor,
    getUserfavor

   
}