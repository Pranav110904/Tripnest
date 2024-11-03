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
        seatNumbers: seatNumbers,
        passengers: seatNumbers.length
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

exports.cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.body;
        const userId = req.user._id;

        // Find the booking to cancel
        const booking = await Booking.findById(bookingId);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Check if the booking belongs to the requesting user
        if (booking.userId.toString() !== userId.toString()) {
            return res.status(403).json({ message: "Unauthorized to cancel this booking" });
        }

        // Mark booking as cancelled
        booking.status = 'cancelled';
        await booking.save();

        // Update the flight's available seats
        const flight = await Flight.findById(booking.flightId);
        flight.seatsAvailable += booking.passengers; // Adding back the cancelled seats
        await flight.save();

        // Remove the booking from user's bookedFlights list
        await User.findByIdAndUpdate(userId, { $pull: { bookedFlights: bookingId } });

        // Optionally, populate the cancelled booking for response
        const populatedBooking = await Booking.findById(bookingId)
            .populate('userId')
            .populate('flightId')
            .exec();

        res.status(200).json({ message: "Booking cancelled successfully", booking: populatedBooking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};