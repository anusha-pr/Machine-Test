const express = require('express');
const router = express.Router();
const loginController = require('../Controller/login.controller');

const tokenAuth = require('../Middlewares/user.middleware');

router.post('/register', loginController.addUser);
router.post('/login', loginController.loginUser);
router.get('/', tokenAuth.adminAuthenticate, loginController.getAllUsers);
module.exports = router;