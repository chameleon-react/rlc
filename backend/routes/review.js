var express = require('express');
var router = express.Router();
const adsModel = require('../model/adsModel')

router.post('/',async(req,res)=>{
    const {id,review,username,} = req.body
    console.log(id)
    if(id&&review&&username){
        try {
            const found =  await adsModel.findOne({where:{id}})

            adsModel.update({review:[...found.review,{...review,username}]},{where:{id}})
            res.send(true)
        } catch (error) {
            console.log(error.message)
        }
    }
    else res.send(false)
})


module.exports = router