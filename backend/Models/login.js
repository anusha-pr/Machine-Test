const Sequelize = require('sequelize');
const db = require('../Config/database');

const Login = db.define('Login', {
    l_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['Admin', 'HRManager', 'User']]
            }
        }
    }
});

module.exports = Login;