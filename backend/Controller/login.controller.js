const loginDao = require('../Dao/login.dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = require('../Token/Token');

var loginController = {
    addUser: addUser,
    loginUser: loginUser,
    getAllUsers: getAllUsers

}

function addUser(req, res) {
    let usr = {}
    usr.Username = req.body.Username;
    usr.password = bcrypt.hashSync(req.body.password);
    usr.UserType  = req.body.UserType;

    loginDao.create(usr).
        then(() => {

            loginDao.findByUsername(usr.Username).then(() => {
                // res.send(data);
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: usr.id }, SECRET_KEY, {
                    expiresIn: expiresIn
                });
                res.status(200).send({
                    "User": usr, "accessToken": accessToken, "expires_in": expiresIn
                });

            }).catch((error) => {
                console.log(error);
                return res.status(500).send('Server error!');
            })

        })
        .catch((error) => {
            console.log(error);
        });
}

userInfo = {}

function loginUser(req, res) {
    const username = req.body.Username;
    const password = req.body.password;
    
    loginDao.findByUsername(username).
        then((data) => {
            userPassword = data.password;
            console.log(userPassword);
            const result = bcrypt.compareSync(password, userPassword);
            if (!result) return res.status(401).send('Password not valid!');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: data.l_id, UserType: data.UserType }, SECRET_KEY, {
                expiresIn: expiresIn
            });
            userInfo = data;
            res.status(200).send({
                "User": data,
                "accessToken": accessToken,
                "expires_in": expiresIn
            });
        })
        .catch((error) => {

            console.log(error);
            return res.status(404).send('User not found!');
            
        });
}

function getAllUsers(req, res){

    loginDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}




module.exports = loginController;