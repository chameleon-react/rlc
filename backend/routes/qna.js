var express = require('express');
var router = express.Router();
const adsModel = require('../model/adsModel')

router.post('/',async(req,res)=>{
 const {question,id,username} = req.body
 if(id&&question&&username){
    try {
        const found =  await adsModel.findOne({where:{id}})

        adsModel.update({qna:[...found.qna,{question,answer:'',username}]},{where:{id}})
        res.send(true)
    } catch (error) {
        console.log(error.message)
    }
}
else res.send(false)
})

module.exports = router