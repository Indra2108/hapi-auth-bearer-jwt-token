const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('databasetest', 'root', 'Indra2108!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize