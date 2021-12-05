const TravelRequest = require('../Models/travelRequest');

var travelRequestDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTravelRequest: updateTravelRequest
}

function findAll() {
    return TravelRequest.findAll();
}


function findById(request_id) {
    return TravelRequest.findByPk(request_id);
}

function deleteById(request_id) {
    return TravelRequest.destroy({ where: { request_id: request_id } });
}

function create(travelRequest) {
    var newTravelRequest = new TravelRequest(travelRequest);
    return newTravelRequest.save();
}

function updateTravelRequest(travelRequest, request_id) {
    var updateTravelRequest = {
        cause_travel: travelRequest.cause_travel,
        source: travelRequest.source,
        destination: travelRequest.destination,
        mode: travelRequest.mode,
        from_date: travelRequest.from_date,
        to_date: travelRequest.to_date
        
    };
    return TravelRequest.update(updateTravelRequest, { where: { request_id: request_id } });
}
module.exports = travelRequestDao;