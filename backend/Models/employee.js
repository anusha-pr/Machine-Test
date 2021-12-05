

const Sequelize = require('sequelize');
const db = require('../Config/database');

const Employee = db.define('employee', {
    id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
     },
     first_name: {
         type: Sequelize.STRING,
         allowNull: false
     },
    
     last_name: {
         type: Sequelize.STRING,
         allowNull: false
     },
     age: {
         type: Sequelize.INTEGER,
         allowNull: false
     },
     gender: {
         type: Sequelize.STRING,
         allowNull: false
     },
     address: {
         type: Sequelize.STRING,
         allowNull: false
     },
     phone_number: {
         type: Sequelize.NUMERIC,
         allowNull: false
     },
     l_id: {
         type: Sequelize.NUMERIC,
         allowNull: false
     }
 });

module.exports = Employee;