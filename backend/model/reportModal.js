const { DataTypes } = require("sequelize");
const db = require('../database')


const reportModel = db.define('report',{
    adsId:{
        type:DataTypes.INTEGER,
    },
    username:{
        type:DataTypes.STRING,
    },
    reason:{
        type:DataTypes.STRING,
    }
})

console.log('report Table is Ok')

module.exports = reportModel
