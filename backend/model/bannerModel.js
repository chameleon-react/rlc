const { DataTypes } = require("sequelize");
const db = require('../database')


const bannerModel = db.define("banner",{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    url:{
        type:DataTypes.STRING,

    },
    validation:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
})

console.log('Banner Table is ok')

module.exports = bannerModel