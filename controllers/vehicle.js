var vehicle = require('../models/vehicle');

// List of all vehicles
exports.vehicle_list = async function(req, res) {
    try{ 
        theVehicle = await vehicle.find(); 
        res.send(theVehicle); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
};


// for a specific vehicle.
exports.vehicle_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: vehicle detail: ' + req.params.id);
};


// Handle vehicle create on POST.
exports.vehicle_create_post = async function(req, res) {
    res.send('NOT IMPLEMENTED: Costume create POST'); 
};


// Handle vehicle delete form on DELETE.
exports.vehicle_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: vehicle delete DELETE ' + req.params.id);
};


// Handle vehicle update form on PUT.
exports.vehicle_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: vehicle update PUT' + req.params.id);
};