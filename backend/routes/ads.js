var express = require('express');
var router = express.Router();
var adsController = require('../controller/adsController')

router.post('/',adsController.create)

router.get('/viewall',adsController.viewAll)

router.get('/view',adsController.view)

router.get('/userAds',adsController.userAds)

router.post('/delete',adsController.delete)


router.post('/edit',adsController.edit)

router.get('/profile',adsController.profile)

router.post('/comment',adsController.createComment)

router.get('/comment',adsController.getComment)

router.get('/homeAds',adsController.homeAds)

router.post('/verificationRequest',adsController.verificationRequest)

router.get('/verificationRequest',adsController.allVerificationRequest)


router.get('/verificationCount',adsController.verificationCount)

router.get('/analytics',adsController.analytics)



router.post('/verify')



module.exports = router