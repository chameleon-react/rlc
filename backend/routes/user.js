var express = require('express');
var router = express.Router();
const userController = require('../controller/userController')

//create a user
router.post('/',userController.create)

router.post('/login',userController.login)

router.get('/isVerify',userController.isVerify)

router.get('/',userController.getAll)

module.exports = router;
