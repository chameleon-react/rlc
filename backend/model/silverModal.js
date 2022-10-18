const { DataTypes } = require("sequelize");
const db = require('../database')

const silverModel = db.define("silver",{
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

console.log('Silver Table is ok')

module.exports = silverModel