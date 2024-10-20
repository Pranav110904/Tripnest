const Flight = require('../models/Flight');

exports.addFlight = async(req,res)=> {
    try {
        const flight = new Flight(req.body); // Assuming the data comes in request body
        await flight.save();
        res.status(201).json({message:"Flight details inserted successfully"});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};