var express = require('express');
var router = express.Router();
var adsModel = require('../model/adsModel')

var platinumModel = require('../model/PlatinumModel')
var goldModel = require('../model/goldModel')
var silverModel = require('../model/silverModal');



router.post('/', async (req, res) => { 
    var found = await adsModel.findAll({ raw: true,where:{...req.body,visibility:true} })
        res.send(found)
})

router.get('/none', async (req, res) => {
    res.send(await adsModel.findAll({ where: { membershipType: 'none' } }))
})
router.get('/platinum', async (req, res) => {
    res.send(await platinumModel.findAll())
})
router.get('/gold', async (req, res) => {
    res.send(await goldModel.findAll())
})
router.get('/silver', async (req, res) => {
    res.send(await silverModel.findAll())
})

module.exports = router