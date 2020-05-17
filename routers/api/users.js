const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

var ctrls = require('../../controllers')

router.post('/login', jsonParser,ctrls.login);
router.post('/good', jsonParser,ctrls.addGood);
router.get('/category', ctrls.getCategory);
router.get('/good', ctrls.getCategory);



module.exports = router;
