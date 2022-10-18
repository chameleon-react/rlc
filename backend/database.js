const { Sequelize } = require("sequelize");
const config = require('./config')

//database Connection

console.log("Database is try to connecting");

const db = new Sequelize(config.database, config.databaseUser, config.password, {
  dialect: config.dialect,
  logging: false,
});

db
  .authenticate()
  .then(() => {
    console.log("Database  is connected");
  })
  .catch((err) => {
    console.log("Database is Not connected Please Check the error");
    console.log(err.message);
  });

module.exports = db;