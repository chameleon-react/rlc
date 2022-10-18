var express = require('express');
const { Op } = require('sequelize');
var router = express.Router();
var analaticsModel = require('../model/analaticsModel')


router.post('/', async (req, res) => {
    const dates = new Date()
    const date = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`
    const found = await analaticsModel.findOrCreate({ where: { date } })
    await analaticsModel.increment({ view: 1 }, { where: { date } })
    res.send(true)
})

router.get('/report/today',async(req,res)=>{
    const dates = new Date()
    const date = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`
    const found = await analaticsModel.findOrCreate({ where: { date },raw:true}) 
    res.send(found[0])
})

router.get('/report/yesterday',async(req,res)=>{
    const dates = new Date()
    const date = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`
    const found =  await analaticsModel.findOrCreate({ where: { date },raw:true })
    res.send(await analaticsModel.findOne({where:{id:found[0].id-1}}))
})

router.get('/report/date',async(req,res)=>{
    const {date} = req.query
    if(date){
        res.send(await analaticsModel.findOne({where:{date},attributes:['date','view']}))
    }
     else res.send(false)
})

router.get('/report/all', async (req, res) => {
    res.send(await analaticsModel.findAll({attributes:['date','view']}))
})

router.get('/report/weekly', async (req, res) => {
    res.send(await analaticsModel.findAll({attributes:['date','view'],limit:7,order:[['id','DESC']]}))
})

router.get('/report/monthly', async (req, res) => {
    res.send(await analaticsModel.findAll({limit:30,order:[['id','DESC']]}))
})

router.get('/report/yearly',async(req,res)=>{ 
    res.send(await analaticsModel.findAll({limit:365,order:[['id','DESC']]}))
})

router.get('/report/between',async(req,res)=>{
    const {from,to} = req.query
    console.log(from ,to)
    const found = await analaticsModel.findAll({raw:true})
    const dates =  found.filter(e=> e.date == from || e.date == to && e )
    const fromId = dates[0].id-1
    const toId = dates[1].id+1
    
    res.send(found.filter(e=>{
        if(e.id>fromId && e.id<toId){
            return e
        }
    }))
})


module.exports = router