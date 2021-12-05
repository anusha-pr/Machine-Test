const { Sequelize } = require('sequelize');
const db = new Sequelize('TravelAPI', 'root', 'root', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'Travelapi.sqlite',
    operatorsAliases: false,   //this is a flag
    define:{
        freezeTableName: true,
        timestamps: false
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;