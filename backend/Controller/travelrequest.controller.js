const travelRequestDao = require('../Dao/travelRequest.dao');


var travelRequestController = {
    addTravelRequest: addTravelRequest,
    findTravelRequests: findTravelRequests,
    findTravelRequestById: findTravelRequestById,
    updateTravelRequest: updateTravelRequest,
    deleteById: deleteById,
}

async function addTravelRequest(req, res) {
    let travelRequest = req.body;
    
    travelRequestDao.create(travelRequest).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravelRequestById(req, res) {
    travelRequestDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    travelRequestDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "TravelRequest deleted successfully",
                travelRequest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTravelRequest(req, res) {
    travelRequestDao.updateTravelRequest(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Travel Request updated successfully",
                travelRequest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravelRequests(req, res) {
    travelRequestDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = travelRequestController;