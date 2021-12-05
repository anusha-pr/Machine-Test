const express = require('express');
const router = express.Router();
const travelRequestController = require('../Controller/travelrequest.controller');
const tokenAuth = require('../Middlewares/user.middleware');

//TravelRequest
router.post('/',  travelRequestController.addTravelRequest);
router.get('/', tokenAuth.managerAuthenticate, travelRequestController.findTravelRequests);
router.get('/:id', tokenAuth.managerAuthenticate, travelRequestController.findTravelRequestById);
router.put('/:id', tokenAuth.adminAuthenticate, travelRequestController.updateTravelRequest);
router.delete('/:id', tokenAuth.adminAuthenticate, travelRequestController.deleteById);

module.exports = router;
