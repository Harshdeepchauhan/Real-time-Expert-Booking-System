export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    io.emit("slotBooked", {
      expertId: booking.expertId,
      date: booking.date,
      timeSlot: booking.timeSlot
    });

    res.status(201).json({
      message: "Booking successful",
      booking
    });

  } catch (error) {

    if (error.code === 11000) {
      return res.status(409).json({
        message: "Slot already booked"
      });
    }

    res.status(500).json({
      message: "Server error"
    });
  }
};