const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

var ctrls = require('../../controllers')

router.post('/login', jsonParser,ctrls.login);
router.post('/auth', jsonParser,ctrls.auth);
router.get('/getGoodsByType',ctrls.getGoodsByType);
router.get('/goods_list',ctrls.getGoods);
router.post('/goods_publish',jsonParser,ctrls.publishGood)
router.post('/getContactById',jsonParser,ctrls.getContactById)
router.post('/addContactById',jsonParser,ctrls.addContactById)
router.post('/getPublishById',jsonParser,ctrls.getPublishById)
router.post('/favor',jsonParser,ctrls.favor)
router.post('/getUserfavor',jsonParser,ctrls.getUserfavor)
router.post('/getTradeById',jsonParser,ctrls.getTradeById)
router.post('/cancelPublish',jsonParser,ctrls.cancelPublish)
router.get('/search',jsonParser,ctrls.search)
router.get('/getTaglist',jsonParser,ctrls.getTaglist)


module.exports = router;
