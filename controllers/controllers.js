var login =require('./api').login
var addGood = require('./api').addGood
var addGleaning = require('./api').addGleaning
var getGleaningByType = require('./api').getGleaningByType
var getGoodByCate = require('./api').getGoodByCate
var getCategory = require('./api').getCategory
var getGood = require('./api').getGood
var getCount  = require('./api').getCount
var updateUser = require('./api'). updateUser
var addAlumni = require('./api'). addAlumni
var getAlumni  = require('./api').getAlumni

module.exports = {
    login,
    addGood,
    getCount,
    addAlumni,
    getAlumni,
    updateUser,
    addGleaning,
    getGleaningByType,
    getGoodByCate,
    getCategory,
    getGood,


   
}