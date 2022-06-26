const { DataTypes } = require("sequelize")
const sequelize = require("../dbconfig")

const user = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
})

module.exports = user