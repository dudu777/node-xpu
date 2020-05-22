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



module.exports = router;
