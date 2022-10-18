var express = require('express');
var router = express.Router();

var bannerController = require('../controller/bannerController')

router.post('/apply',bannerController.apply)

router.post('/approve',bannerController.approve)

router.post('/reject',bannerController.reject)


module.exports = router