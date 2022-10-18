
var platinumModel = require('../model/PlatinumModel')
var goldModel = require('../model/goldModel')
var silverModel = require('../model/silverModal')
var express = require('express');
var router = express.Router();
const adsModel = require('../model/adsModel')


router.post('/platinum', async (req, res) => {
    const { adsId, adsTitle, position, profilePhoto, region, location, username } = req.body
    if (adsId, adsTitle, position, profilePhoto, region, location, username) {
        const found = await platinumModel.findOne({ where: { position } })
        if (!found) {
            try {
                await platinumModel.create({ adsId, adsTitle, position, profilePhoto, region, location, username })
                await adsModel.update({membershipType:'Platinum'},{where:{id:adsId}})
                res.send(true)
            } catch (error) {
                res.send(false)
            }
        } else {
            res.send(false)
        }
    } else res.send(false)
})

router.post('/gold', async (req, res) => {
    const { adsId, adsTitle, position, profilePhoto, region, location, username } = req.body
    if (adsId, adsTitle, position, profilePhoto, region, location, username) {
        const found = await goldModel.findOne({ where: { position } })
        if (!found) {
            try {
                await goldModel.create({ adsId, adsTitle, position, profilePhoto, region, location, username })
                await adsModel.update({membershipType:'Gold'},{where:{id:adsId}})
                res.send(true)
            } catch (error) {
                res.send(false)
            }
        } else {
            res.send(false)
        }
    } else res.send(false)
})

router.post('/silver', async (req, res) => {
    const { adsId, adsTitle, position, profilePhoto, region, location, username } = req.body
    if (adsId, adsTitle, position, profilePhoto, region, location, username) {
        const found = await silverModel.findOne({ where: { position } })
        if (!found) {
            try {
                await silverModel.create({ adsId, adsTitle, position, profilePhoto, region, location, username })
                await adsModel.update({membershipType:'Silver'},{where:{id:adsId}})
                res.send(true)
            } catch (error) {
                res.send(false)
            }
        } else {
            res.send(false)
        }
    } else res.send(false)
})



module.exports = router