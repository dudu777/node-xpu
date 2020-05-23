const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

var ctrls = require('../../controllers/controllers')

router.post('/login', jsonParser,ctrls.login);
router.post('/good', jsonParser,ctrls.addGood);
router.post('/gleaning', jsonParser,ctrls.addGleaning);
router.post('/alumni', jsonParser,ctrls.addAlumni);
router.get('/alumni/:user_id', ctrls.getAlumni);
router.get('/gleaning', ctrls.getGleaningByType);
router.get('/good/:cate_name', ctrls.getGoodByCate);
router.get('/count/:user_id', ctrls.getCount);
router.put('/user/:user_id', jsonParser,ctrls.updateUser);
router.get('/category', ctrls.getCategory);
router.get('/good', ctrls.getGood);
router.get('/goodlist/:user_id', jsonParser,ctrls.getGoodByUserid);

router.get('/glnlist/:user_id', jsonParser,ctrls.getGlnByUserid);

router.put('/goodstatu/:good_id', jsonParser,ctrls.updateGoodStatu);
router.put('/glnstatu/:gln_id', jsonParser,ctrls.updateGlnStatu);
module.exports = router;
