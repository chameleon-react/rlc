const { DataTypes } = require("sequelize");
const db = require('../database')

const userModel = db.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  statusCode: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  credit:{
    type:DataTypes.INTEGER,
    defaultValue:0
  },
  verified:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  }
})

console.log("User Table is Ok")

module.exports = userModel