const Booking = require('../models/Booking');
const User = require('../models/User');
const Flight = require('../models/Flight');

exports.createBooking = async(req,res)=> {
    try{
        const {flightNo, seatNumbers} = req.body;
    const userId = req.user._id;

    const flight = await Flight.findOne({flightNumber: flightNo});

    if(!flight) {
        return res.status(404).json({ message: "Flight not found" });
    }

    const newBooking = new Booking({
        userId: userId,
        flightId: flight._id,  // Use the flight's ID for the booking
        seatNumbers: seatNumbers
    });

    await newBooking.save();

    const user = await User.findById(userId);
    user.bookedFlights.push(newBooking._id);
    await user.save();

    flight.seatsAvailable -= seatNumbers.length;
    await flight.save();

    const populatedBooking = await Booking.findById(newBooking._id).populate('userId').populate('flightId').exec();

    res.status(201).json({ message: "Booking created successfully", booking: populatedBooking });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}