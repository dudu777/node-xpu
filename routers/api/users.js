const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

var ctrls = require('../../controllers')

router.post('/login', jsonParser,ctrls.login);
router.post('/auth', jsonParser,ctrls.auth);
router.get('/goods_list',ctrls.getGoods);
router.get('/goods_list1',ctrls.getGoodsByType);
router.post('/goods_publish',jsonParser,ctrls.publishGood)
router.post('/getContactById',jsonParser,ctrls.getContactById)
router.post('/addContactById',jsonParser,ctrls.addContactById)
router.get('/search',jsonParser,ctrls.search)


module.exports = router;
