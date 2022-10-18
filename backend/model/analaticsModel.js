const { DataTypes } = require("sequelize");
const db = require('../database')


const analatics = db.define('analatics',{
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    view:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
})

console.log('Analatics Table is Ok')

module.exports = analatics


