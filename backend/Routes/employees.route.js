const express = require('express');
const employeeController = require('../Controller/employee.controller');
const tokenAuth = require('../Middlewares/user.middleware');
const router = express.Router();


router.post('/', tokenAuth.adminAuthenticate, employeeController.addEmployee); //whenever the post method is called it calls addgig from gig contoller
router.get('/', employeeController.findEmployees);  //similiarly 
router.get('/:id', employeeController.findEmployeeById);
router.put('/:id',  employeeController.updateEmployee);
router.delete('/:id', tokenAuth.adminAuthenticate, employeeController.deleteById);

module.exports = router;

