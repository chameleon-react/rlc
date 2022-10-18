var reportModel = require('../model/reportModal')
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    const { adsId, username, reason } = req.body
    if (adsId && username && reason) {
        try {
            await reportModel.create({adsId,username,reason})
            res.send(true)
        } catch (error) {
            console.log(error.message)
        }
    } else res.send(false)
})


module.exports = router