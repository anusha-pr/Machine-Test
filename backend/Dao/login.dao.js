const Users = require('../Models/login');
var loginDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    findByUsername: findByUsername
}

function findAll() {
    return Users.findAll();
}


function findById(id) {
    return Users.findByPk(id);
}

function findByUsername(Username){
    return Users.findOne({
        where:{ Username: Username}
    });
    
}

function deleteById(l_id) {
    return Users.destroy({ where: { l_id: l_id } });
}

function create(user) {
    var newUser = new Users(user);
    return newUser.save();
}

module.exports = loginDao;