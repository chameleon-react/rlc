const { DataTypes } = require("sequelize");
const db = require('../database')

const goldModel = db.define("gold",{
    username:{
        type:DataTypes.STRING
    },
    position:{
        type:DataTypes.INTEGER
    },
    adsId:{
        type:DataTypes.INTEGER
    },
    adsTitle:{
        type:DataTypes.STRING
    },
    profilePhoto:{
        type:DataTypes.STRING
    },
    region:{
        type:DataTypes.STRING
    },
    location:{
        type:DataTypes.STRING
    },
})

console.log('Gold Table is ok')

module.exports = goldModel