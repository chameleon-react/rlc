const bannerModel = require('../model/bannerModel')
const userModel = require('../model/userModel')

exports.apply=async(req,res)=>{
    const {username,url} = req.body
    if(username&&url){
        try {

            const found = await bannerModel.findOne({where:{url}})
            if(!found){
                await bannerModel.create({username,url})
                res.send(true)
            } else res.send(false)
        } catch (error) {
            console.log(error.message)
            res.send(false)
        }
    } else res.send(false)
}

exports.approve = async(req,res)=>{
    const {username, id} = req.body
    if(username || id) {
        try {
            await bannerModel.update({validation:true},{where:{id}})
            await userModel.increment({credit:5},{where:{username}})
            res.send(true)
        } catch (error) {
            console.log(error.message)
            res.send(false)
        }
    }
    res.send(false)
    
}

exports.reject = async(req,res)=>{
    const {id} = req.body
    if(id){
        try {
            await bannerModel.destroy({where:{id}})
            res.send(true)
        } catch (error) {
            console.log(error.message)
            res.send(false)
        }
    } else res.send(false)
}