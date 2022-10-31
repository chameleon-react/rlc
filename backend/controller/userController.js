const userModel = require('../model/userModel')
const adsModal = require('../model/adsModel')

const bcrypt = require('bcrypt');
const saltRounds = 10;

//create user
exports.create = async (req, res) => {
    const { username, password, email,statusCode } = req.body
    if (username && password) {
        try {
            const found = await userModel.findOne({ where: { username,email } })
            if (!found) {
                bcrypt.hash(password, saltRounds, async function (err, hash) {
                    await userModel.create({ username, password: hash, email,statusCode })
                });
                res.cookie('secure', true, { expires: new Date(Date.now() + 1000 * 60 * 60) })
                res.send(true)
            } else res.send(false)
        } catch (error) {
            console.log(error.message)
        }
    } else res.send(false)
}

exports.login = async (req, res) => {
    const { username, password,email } = req.body
    if (email && password) {
        try {
            const found = await userModel.findOne({
                where: {
                    email
                },
                raw: true
            })
            bcrypt.compare(password, found.password, function (err, result) {
                if(result){
                    res.cookie('secure', true, { expires: new Date(Date.now() + 1000 * 60 * 60) }) 
                    res.send({statusCode:found.statusCode,username:found.username})
                }else res.send(false)
                 
                
            });
        } catch (error) {
            res.send(false)
            console.log(error.message)
        }
    } else res.send(false)
}


exports.getAll = async(req,res)=>{
    try {
        const found = await userModel.findAll({})
        res.send(found)
    } catch (error) {
        console.log(error.message)
        res.send(false)
    }
}


exports.isVerify = async(req,res)=>{
    try {
        const {username} = req.query
        if(username){
            const found = await userModel.findOne({where:{username}})
            res.send(found.verified)
        }else res.send(false)
    } catch (error) {
        console.log(error.message)
    }
}


exports.edit = async(req,res)=>{
    const {password,email,username} = req.body

    if(username){
            if(email){
                userModel.update({email},{where:{username}})
            }
            if(password !== ''){
                bcrypt.hash(password, saltRounds, async function (err, hash) {
                    await userModel.update({  password: hash },{where:{username}})
                });
            }
            res.send(true)
    }else res.send(false)
}

exports.delete = async(req,res)=>{
    const {username} = req.body
    if(username){
        adsModal.destroy({where:{username}})
        userModel.destroy({where:{username}})
        res.send(true)
    }
    else{
        res.send(false)
    }
}