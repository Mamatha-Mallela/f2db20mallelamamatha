const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    vehicle_Brand: String,
    vehicle_model: String,
    vehicle_price: Number
})
module.exports = mongoose.model("vehicle", vehicleSchema)