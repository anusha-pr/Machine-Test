const Sequelize = require('sequelize');
const db = require('../Config/database');


const RequestTable = db.define('RequestTable', {
    request_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cause_travel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    source: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    from_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    to_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    no_days: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['critical', 'normal']]
            }
        }
    },
    project_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emp_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'hold',
        validate: {
            isIn: {
                args: [['approve', 'reject', 'hold']]
            }
        }
    },


});

module.exports = RequestTable;