const express = require('express');
const router = express.Router();
const loginRoutes = require('./login.route');
const employeeRoutes = require('./employees.route');
const travelRequestRoutes = require('./travelrequests.route');




router.use('/Users', loginRoutes);
router.use('/employees', employeeRoutes);
router.use('/travel-requests', travelRequestRoutes);



module.exports = router;